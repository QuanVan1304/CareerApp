from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, field_validator
from fastapi.middleware.cors import CORSMiddleware
import joblib
import json
import numpy as np
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Đang đánh thức bộ não AI...")
# Load Model và Metadata
try:
    model = joblib.load('career_model.pkl')
    with open('model_metadata.json', 'r', encoding='utf-8') as f:
        META = json.load(f)
except Exception as e:
    print(f"LỖI: Không thể tải model. Hãy kiểm tra lại file .pkl! Chi tiết: {e}")

# ==========================================
# 1. SCHEMAS (CẤU TRÚC DỮ LIỆU)
# ==========================================
class SurveyScores(BaseModel):
    R_Score: int; I_Score: int; A_Score: int; S_Score: int; E_Score: int; C_Score: int
    TIPI1: int; TIPI2: int; TIPI3: int; TIPI4: int; TIPI5: int
    TIPI6: int; TIPI7: int; TIPI8: int; TIPI9: int; TIPI10: int

    @field_validator('R_Score', 'I_Score', 'A_Score', 'S_Score', 'E_Score', 'C_Score')
    @classmethod
    def score_must_be_in_range(cls, v: int) -> int:
        if not (0 <= v <= 40):
            raise ValueError(f'Điểm RIASEC phải nằm trong khoảng 0–40, nhận được: {v}')
        return v

class BigFiveScores(BaseModel):
    Extraversion: float
    Agreeableness: float
    Conscientiousness: float
    EmotionalStability: float
    Openness: float

# Xóa bỏ khai báo trùng lặp, chỉ giữ 1 class chuẩn
class InsightRequest(BaseModel):
    scores: dict
    bigFive: Optional[BigFiveScores] = None
    answeredCount: int
    isFinal: bool

# ==========================================
# 2. HÀM FEATURE ENGINEERING
# ==========================================
def engineer_features_single(scores: dict) -> np.ndarray:
    """Trích xuất 16 features chuẩn để đưa vào AI Model"""
    features = [
        scores.get('R_Score', 0), scores.get('I_Score', 0), scores.get('A_Score', 0), 
        scores.get('S_Score', 0), scores.get('E_Score', 0), scores.get('C_Score', 0),
        scores.get('TIPI1', 4), scores.get('TIPI2', 4), scores.get('TIPI3', 4), 
        scores.get('TIPI4', 4), scores.get('TIPI5', 4), scores.get('TIPI6', 4), 
        scores.get('TIPI7', 4), scores.get('TIPI8', 4), scores.get('TIPI9', 4), 
        scores.get('TIPI10', 4)
    ]
    return np.array(features).reshape(1, -1)

# ==========================================
# 3. API ROUTES
# ==========================================
@app.post("/predict")
def predict_career(scores: SurveyScores):
    input_data = engineer_features_single(scores.model_dump())
    probabilities = model.predict_proba(input_data)[0]
    classes = model.classes_
    max_prob = max(probabilities)

    results = []
    for i, major in enumerate(classes):
        prob = probabilities[i]
        friendly_score = (prob / max_prob) * 95 if max_prob > 0 else 0
        results.append({
            "major": major.title(),
            "matchingScore": int(friendly_score)
        })

    results.sort(key=lambda x: x['matchingScore'], reverse=True)
    return {"status": "success", "predictions": results[:6]}


@app.post("/insight")
def generate_insight(req: InsightRequest):
    scores = req.scores
    
    # --- BƯỚC A: CHẠY AI DỰ ĐOÁN NGÀNH NGAY LẬP TỨC ---
    # Lúc này dù TIPI đang là 4, AI vẫn sẽ tìm ra ngành hợp nhất dựa trên điểm RIASEC hiện có
    input_data = engineer_features_single(scores)
    probs = model.predict_proba(input_data)[0]
    top_indices = np.argsort(probs)[-2:][::-1] # Lấy Top 2 ngành
    current_majors = [model.classes_[i].title() for i in top_indices]
    majors_text = " và ".join(current_majors)

    # --- BƯỚC B: PHÂN TÍCH RIASEC ---
    riasec_scores = {k: v for k, v in scores.items() if '_Score' in k}
    sorted_scores = sorted(riasec_scores.items(), key=lambda item: item[1], reverse=True)
    top1_code = sorted_scores[0][0].replace('_Score', '')
    top2_code = sorted_scores[1][0].replace('_Score', '')
    
    trait_names = {
        "R": "Thực tế & Kỹ thuật", "I": "Nghiên cứu & Phân tích",
        "A": "Sáng tạo & Nghệ thuật", "S": "Giao tiếp & Xã hội",
        "E": "Lãnh đạo & Kinh doanh", "C": "Quy chuẩn & Tổ chức"
    }
    
    # --- BƯỚC C: RÁP THÀNH CÂU VĂN THÔNG MINH ---
    insight = ""
    
    if not req.isFinal:
        # Nhận xét giữa giờ: Nhắc đến Ngành do AI dự đoán
        insight = f"Qua {req.answeredCount} câu đầu tiên, bạn đang thể hiện thiên hướng mạnh về mảng {trait_names.get(top1_code, '')}. "
        insight += f"Dựa trên dữ liệu sơ bộ này, AI nhận thấy bạn rất có tiềm năng với các nhóm ngành như **{majors_text}**. "
        
        if req.bigFive:
            if req.bigFive.Openness >= 5.0:
                insight += "Điểm số tính cách cũng cho thấy bạn là người cởi mở, thích khám phá ý tưởng mới lạ. "
            elif req.bigFive.Conscientiousness >= 5.0:
                insight += "Bạn có vẻ là một người làm việc rất có kỷ luật và đáng tin cậy. "
                
        insight += "Hãy hoàn thành các câu cuối cùng để xem độ chính xác đạt bao nhiêu phần trăm nhé!"
        
    else:
        # Nhận xét chốt sổ
        if top1_code == "I" and top2_code == "R":
            insight = "Tuyệt vời! Bạn có tư duy logic sắc bén và đam mê kỹ thuật. "
        elif top1_code == "A":
            insight = "Bạn có một tâm hồn bay bổng và sức sáng tạo tuyệt vời! "
        else:
            insight = f"Bạn sở hữu sự pha trộn thú vị giữa {trait_names.get(top1_code, '')} và {trait_names.get(top2_code, '')}. "

        insight += f"Mô hình AI nhận định **{majors_text}** chính là sân khấu lý tưởng nhất dành cho bạn. "

        if req.bigFive:
            if req.bigFive.Extraversion >= 5.5:
                insight += "Cộng với tính cách hướng ngoại, bạn sẽ tỏa sáng ở những vai trò cần giao tiếp và dẫn dắt đội nhóm."
            elif req.bigFive.EmotionalStability >= 5.5:
                insight += "Sự điềm tĩnh tuyệt vời sẽ giúp bạn chịu được áp lực cao trong công việc."
            elif req.bigFive.Agreeableness >= 5.5:
                insight += "Sự ấm áp và thấu cảm của bạn là điểm cộng cực lớn nếu làm trong ngành dịch vụ hoặc y tế."

    return {"insight": insight.strip()}

@app.get("/health")
def health_check():
    return {"status": "ok", "model_classes": len(model.classes_)}