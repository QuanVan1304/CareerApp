from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

# Khởi tạo ứng dụng FastAPI
app = FastAPI()

# Cấu hình CORS để cho phép Frontend (React) gọi API mà không bị chặn lỗi bảo mật
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Trong thực tế sẽ đổi thành URL của frontend, tạm thời để * cho dễ test
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Đang đánh thức bộ não AI...")
# 1. Tải mô hình đã train vào bộ nhớ
model = joblib.load('career_model.pkl')

# 2. Định nghĩa Cấu trúc Dữ liệu Đầu vào (Schema)
# Bắt buộc Frontend phải gửi đúng 6 con số này lên
class SurveyScores(BaseModel):
    R_Score: int
    I_Score: int
    A_Score: int
    S_Score: int
    E_Score: int
    C_Score: int

# 3. Tạo Endpoint (Đường dẫn API) để Frontend gọi vào
@app.post("/predict")
def predict_career(scores: SurveyScores):
    # Chuyển đổi dữ liệu JSON từ Frontend thành dạng Bảng (DataFrame) để AI đọc được
    input_data = pd.DataFrame([{
        'R_Score': scores.R_Score,
        'I_Score': scores.I_Score,
        'A_Score': scores.A_Score,
        'S_Score': scores.S_Score,
        'E_Score': scores.E_Score,
        'C_Score': scores.C_Score
    }])

    # Thay vì chỉ lấy kết quả duy nhất (predict), ta dùng predict_proba để lấy TỶ LỆ % PHÙ HỢP (Matching Score)
    # ... (code phía trên giữ nguyên)
    probabilities = model.predict_proba(input_data)[0]
    classes = model.classes_  

    # -- LOGIC TÍNH ĐIỂM MỚI --
    # 1. Tìm xác suất cao nhất mà AI dự đoán được (VD: 0.18)
    max_prob = max(probabilities)
    
    results = []
    for i, major in enumerate(classes):
        prob = probabilities[i]
        
        # 2. Thuật toán làm đẹp điểm (Feature Scaling): 
        # Ngành có prob cao nhất sẽ được map thành 95%. Các ngành khác tính tỷ lệ theo nó.
        # Tránh chia cho 0 nếu mô hình lỗi
        if max_prob > 0:
            friendly_score = (prob / max_prob) * 95 
        else:
            friendly_score = 0
            
        results.append({
            "major": major.title(), 
            "matchingScore": int(friendly_score) # Ép kiểu về số nguyên
        })

    # Sắp xếp từ cao xuống thấp và lấy Top 3
    results.sort(key=lambda x: x['matchingScore'], reverse=True)
    top_6_careers = results[:6]

    return {
        "status": "success",
        "predictions": top_6_careers
    }
    