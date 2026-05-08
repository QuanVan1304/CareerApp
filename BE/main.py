import os
import gdown
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

print("Đang khởi động hệ thống phân tích nghề nghiệp...")

# --- CẤU HÌNH TẢI MÔ HÌNH TỪ GOOGLE DRIVE ---
# Bạn dán ID của file Google Drive vào giữa 2 dấu ngoặc kép bên dưới
# FILE_ID = "1pIXlcqsNGWj118sT10hshvhE3c0GWp4y" 
MODEL_PATH = "career_model.pkl"

# Hệ thống tự động kiểm tra xem máy chủ đã tải file này về chưa
# if not os.path.exists(MODEL_PATH):
#     print(f"Đang tải mô hình {MODEL_PATH} từ Google Drive. Vui lòng đợi...")
#     try:
#         url = f'https://drive.google.com/uc?id={FILE_ID}'
#         # Hàm download sẽ tự động lưu file vào MODEL_PATH
#         gdown.download(url, MODEL_PATH, quiet=False)
#         print("Đã tải mô hình thành công!")
#     except Exception as e:
#         print(f"⚠️ LỖI khi tải file từ Google Drive: {e}")

# --- Load Model và Metadata ---
try:
    model = joblib.load(MODEL_PATH)
    with open('model_metadata.json', 'r', encoding='utf-8') as f:
        META = json.load(f)
    print("Sẵn sàng phân tích nghề nghiệp! Hệ thống đã chạy thành công.")
except Exception as e:
    print(f"⚠️ LỖI: Không thể tải mô hình. Chi tiết: {e}")

# ... (bên dưới là các đoạn code định nghĩa các API (app.get, app.post) của bạn, hãy giữ nguyên nhé) ...

# ==========================================
# 1. CẤU TRÚC DỮ LIỆU (SCHEMAS)
# ==========================================
class SurveyScores(BaseModel):
    # Điểm RIASEC
    R_Score: int; I_Score: int; A_Score: int; S_Score: int; E_Score: int; C_Score: int
    # Điểm TIPI
    TIPI1: int; TIPI2: int; TIPI3: int; TIPI4: int; TIPI5: int
    TIPI6: int; TIPI7: int; TIPI8: int; TIPI9: int; TIPI10: int

    @field_validator('R_Score', 'I_Score', 'A_Score', 'S_Score', 'E_Score', 'C_Score')
    @classmethod
    def score_must_be_in_range(cls, v: int) -> int:
        if not (0 <= v <= 40):
            raise ValueError(f'Điểm phải nằm trong khoảng 0–40')
        return v

class BigFiveScores(BaseModel):
    Extraversion: float
    Agreeableness: float
    Conscientiousness: float
    EmotionalStability: float
    Openness: float

class InsightRequest(BaseModel):
    scores: dict
    bigFive: Optional[BigFiveScores] = None
    answeredCount: int
    isFinal: bool

# ==========================================
# 2. TỪ ĐIỂN DỮ LIỆU & LOGIC TƯ VẤN
# ==========================================
TRAIT_NAMES = {
    "R": "Thực tế",
    "I": "Nghiên cứu",
    "A": "Sáng tạo Nghệ thuật",
    "S": "Xã hội",
    "E": "Lãnh đạo",
    "C": "Quy củ"
}

RIASEC_DESC = {
    "R": "là người thích làm việc trực tiếp với các công cụ, máy móc hoặc các hoạt động ngoài trời. Bạn đề cao tính thực tiễn và thường có xu hướng bắt tay vào giải quyết vấn đề ngay lập tức thay vì chỉ thảo luận trên lý thuyết.",
    "I": "sở hữu tư duy logic và khả năng phân tích sắc bén. Bạn đam mê việc tìm tòi, quan sát và giải mã những vấn đề phức tạp. Trí tò mò chính là nguồn động lực lớn nhất thúc đẩy sự phát triển của bạn.",
    "A": "có tâm hồn phong phú, đề cao sự tự do và tính nguyên bản. Bạn thường không thích những quy tắc gò bó hay công việc lặp đi lặp lại, mà luôn khao khát được thể hiện bản sắc cá nhân thông qua các ý tưởng mới mẻ.",
    "S": "mang trong mình sự thấu cảm sâu sắc và khả năng kết nối con người tuyệt vời. Bạn luôn cảm thấy hạnh phúc khi được lắng nghe, giúp đỡ hoặc đóng góp giá trị cho cộng đồng xung quanh mình.",
    "E": "là một người tự tin, đầy tham vọng và có khả năng dẫn dắt. Với kỹ năng thuyết phục và tinh thần dám nghĩ dám làm, bạn rất phù hợp để nắm giữ các vai trò quản lý hoặc tham gia vào các hoạt động kinh doanh.",
    "C": "là người cực kỳ tỉ mỉ, ngăn nắp và có tinh thần trách nhiệm cao. Bạn yêu thích sự rõ ràng của các quy trình và dữ liệu. Sự cẩn trọng của bạn là yếu tố then chốt giúp mọi hệ thống vận hành một cách hoàn hảo."
}

MAJOR_VI_DICT = {
    "Computer Science": "Khoa học Máy tính", 
    "Psychology": "Tâm lý học",
    "Business": "Quản trị Kinh doanh", 
    "Marketing": "Truyền thông & Marketing",
    "Nursing": "Y tế & Điều dưỡng", 
    "Accounting": "Kế toán / Kiểm toán",
    "Information Technology": "Công nghệ Thông tin", 
    "Chemical Engineering": "Kỹ thuật Hóa học",
    "Architecture": "Kiến trúc & Thiết kế", 
    "Education": "Giáo dục & Sư phạm",
    "Law": "Luật & Pháp lý", 
    "Finance": "Tài chính & Đầu tư",
    "Engineering": "Kỹ thuật Cơ / Điện", 
    "Medicine": "Y khoa & Bác sĩ",
    "Social Work": "Công tác Xã hội", 
    "Economics": "Kinh tế học",
    "Mechanical Engineering": "Kỹ thuật Cơ khí", 
    "Communication": "Truyền thông Đại chúng",
    "Biology": "Công nghệ Sinh học", 
    "Civil Engineering": "Kỹ thuật Xây dựng",
    "English": "Ngôn ngữ Anh", 
    "Criminal Justice": "Tư pháp Hình sự",
    "Chemistry": "Hóa học", 
    "Counseling": "Tham vấn Tâm lý",
    "Sociology": "Xã hội học", 
    "History": "Lịch sử & Di sản",
    "Political Science": "Khoa học Chính trị", 
    "Management": "Quản trị Nhân sự",
    "Science": "Nghiên cứu Khoa học", 
    "Graphic Design": "Thiết kế Đồ họa",
    "Logistics": "Logistics & Chuỗi cung ứng", 
    "Tourism": "Du lịch & Khách sạn",
    "Data Science": "Khoa học Dữ liệu", 
    "Electrical Engineering": "Kỹ thuật Điện tử",
    "Physics": "Vật lý học", 
    "Music": "Âm nhạc & Nghệ thuật",
    "Art": "Mỹ thuật", 
    "Philosophy": "Triết học", 
    "Mathematics": "Toán ứng dụng"
}

def engineer_features_single(scores: dict) -> np.ndarray:
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
    
    # 1. Dự đoán ngành từ AI
    input_data = engineer_features_single(scores)
    probs = model.predict_proba(input_data)[0]
    top_indices = np.argsort(probs)[-2:][::-1] 
    current_majors_vi = [MAJOR_VI_DICT.get(model.classes_[i].title(), model.classes_[i].title()) for i in top_indices]
    majors_text = " và ".join(current_majors_vi)
    # 2. Phân tích mã Holland (RIASEC)
    riasec_scores = {k: v for k, v in scores.items() if '_Score' in k}
    sorted_scores = sorted(riasec_scores.items(), key=lambda item: item[1], reverse=True)
    top1_code = sorted_scores[0][0].replace('_Score', '')
    top2_code = sorted_scores[1][0].replace('_Score', '')
    input_data = engineer_features_single(scores)
    probs = model.predict_proba(input_data)[0]
    
    # 1. Bỏ [-2:] đi để lấy TOÀN BỘ index, sắp xếp giảm dần bằng [::-1]
    all_indices = np.argsort(probs)[::-1] 
    
    # 2. Tạo một danh sách rỗng để lưu kết quả
    all_majors_results = []
    
    # 3. Lặp qua toàn bộ 28 ngành
    # print("=== DANH SÁCH 28 NGÀNH VÀ ĐỘ PHÙ HỢP ===")
    # for i in all_indices:
    #     # Lấy tên tiếng Anh từ model
    #     major_en = model.classes_[i].title()
        
    #     # Dịch sang tiếng Việt bằng Dict
    #     # major_vi = MAJOR_VI_DICT.get(major_en, major_en)
        
    #     # Lấy xác suất và nhân 100 để ra phần trăm
    #     prob_percent = probs[i] * 100 
        
    #     # In thẳng ra màn hình console (Terminal)
    #     print(f"{major_en}: {prob_percent:.2f}%")
        
    #     # Lưu vào list dưới dạng Dictionary (Cực kỳ hữu ích nếu bạn muốn trả về cho React Frontend)
    #     all_majors_results.append({
    #         "majorName": major_en,
    #         "name": major_en,
    #         "matchingScore": round(prob_percent, 2)
    #     })

    # Nếu bạn đang viết API (ví dụ Flask/FastAPI), bạn có thể return biến all_majors_results này:
    # return jsonify(all_majors_results)
    if not req.isFinal:
        # --- CHIA LÀM 2 GIAI ĐOẠN NHẬN XÉT SƠ BỘ ---
        if req.answeredCount <= 10:
            # Giai đoạn 1 (<= 10 câu): Nhận xét thiên về RIASEC (Sở thích nghề nghiệp)
            insight = f"✨ Phân tích sơ bộ: Qua {req.answeredCount} câu hỏi đầu tiên, AI nhận thấy bạn đang bộc lộ thiên hướng rõ rệt của nhóm {TRAIT_NAMES.get(top1_code)}.\n\n"
            insight += f"Dựa trên các chỉ số hiện tại, bạn tỏ ra rất tiềm năng khi theo đuổi các lĩnh vực như {majors_text}. "
            insight += "Hãy tiếp tục để hệ thống bắt đầu phân tích thêm về các nét tính cách sâu bên trong của bạn nhé!"
            
        else:
            # Giai đoạn 2 (> 10 câu): Nhận xét thiên về TIPI (Big Five - Tính cách cốt lõi)
            insight = f"✨ Khám phá tính cách: Qua {req.answeredCount} câu hỏi, các đặc điểm tính cách cốt lõi của bạn đang dần lộ diện rõ nét hơn.\n\n"
            
            if req.bigFive:
                # Đưa ra 1-2 nhận xét nhanh về các chỉ số nổi bật nhất của Big Five
                if req.bigFive.Extraversion >= 5.0:
                    insight += "Bạn đang thể hiện một nguồn năng lượng hướng ngoại, cởi mở và dễ dàng kết nối với mọi người xung quanh. "
                elif req.bigFive.Extraversion < 4.0:
                    insight += "Bạn đang cho thấy xu hướng nội tâm, điềm tĩnh và có khả năng làm việc độc lập với độ tập trung cao. "
                
                if req.bigFive.Conscientiousness >= 5.0:
                    insight += "Đặc biệt, sự tỉ mỉ, kỷ luật và có trách nhiệm của bạn là một điểm sáng rất tuyệt vời. "
                elif req.bigFive.Openness >= 5.0:
                    insight += "Sự sáng tạo và cởi mở với những trải nghiệm mới mẻ cũng là một thế mạnh lớn của bạn. "

            insight += f"\n\nSự kết hợp giữa tính cách này và thiên hướng {TRAIT_NAMES.get(top1_code)} sẽ mở ra cơ hội rất tốt trong các ngành như {majors_text}. "
            insight += "Chỉ còn vài câu hỏi nữa thôi, hãy hoàn thành nốt để nhận báo cáo tổng thể nhé!"
        
    else:
        # Nhận xét cuối cùng (Chốt kết quả)
        insight = f"🌟 Kết quả phân tích: Bạn thuộc nhóm tính cách kết hợp giữa {TRAIT_NAMES.get(top1_code)} và {TRAIT_NAMES.get(top2_code)}\n"
        
        insight += f"Dựa trên phản hồi của bạn, đặc điểm nổi trội nhất nằm ở nhóm {TRAIT_NAMES.get(top1_code)}. Điều này cho thấy bạn {RIASEC_DESC.get(top1_code, '')}\n"
        
        insight += f"Bên cạnh đó, bạn cũng mang đậm dấu ấn của nhóm {TRAIT_NAMES.get(top2_code)}. Phần tính cách này bổ trợ thêm rằng bạn {RIASEC_DESC.get(top2_code, '')}\n\n"
        
        # insight += f"🚀 Định hướng nghề nghiệp: Với sự giao thoa độc đáo này, AI nhận định các ngành {majors_text} sẽ là 'mảnh đất màu mỡ' để bạn phát huy tối đa năng lực và đam mê của mình.\n\n"

        if req.bigFive:
            insight += "💼 Phong cách làm việc và tương tác:\n"
            
            # 1. Extraversion (Hướng ngoại vs Hướng nội)
            if req.bigFive.Extraversion >= 5.0:
                insight += "• Năng lượng giao tiếp: Bạn mang năng lượng hướng ngoại, thích kết nối và dễ dàng hòa nhập. Bạn sẽ tỏa sáng trong các vai trò cần giao tiếp và làm việc nhóm.\n"
            else:
                insight += "• Năng lượng giao tiếp: Bạn thiên về nội tâm, điềm tĩnh và có khả năng độc lập cao. Khả năng tập trung sâu sắc chính là vũ khí giúp bạn đạt được những thành tựu lớn.\n"
                
            # 2. Agreeableness (Thân thiện/Đồng thuận vs Thẳng thắn/Cạnh tranh)
            if req.bigFive.Agreeableness >= 5.0:
                insight += "• Mức độ tương tác: Bạn ấm áp, thân thiện và luôn sẵn sàng hỗ trợ đồng nghiệp. Sự dĩ hòa vi quý giúp bạn xây dựng được môi trường làm việc rất tích cực.\n"
            else:
                insight += "• Mức độ tương tác: Bạn đề cao tính khách quan và sự thẳng thắn. Bạn không ngại tranh luận để bảo vệ quan điểm đúng đắn, rất hợp với các công việc cần sự quyết đoán.\n"

            # 3. Conscientiousness (Kỷ luật/Tận tâm vs Linh hoạt)
            if req.bigFive.Conscientiousness >= 5.0:
                insight += "• Tổ chức công việc: Bạn làm việc có kế hoạch, tỉ mỉ và cực kỳ đáng tin cậy. Bạn luôn nỗ lực để mọi thứ diễn ra đúng tiến độ và đạt tiêu chuẩn tốt nhất.\n"
            else:
                insight += "• Tổ chức công việc: Bạn ưu tiên sự linh hoạt và tự do thay vì các quy tắc cứng nhắc. Bạn có khả năng thích nghi rất nhanh với những thay đổi bất ngờ.\n"

            # 4. Emotional Stability (Cân bằng cảm xúc vs Nhạy cảm)
            if req.bigFive.EmotionalStability >= 5.0:
                insight += "• Khả năng chịu áp lực: Điểm mạnh tuyệt vời của bạn là sự bình tĩnh. Bạn có thể kiểm soát cảm xúc rất tốt và giữ được cái đầu lạnh ngay cả khi đối mặt với khủng hoảng.\n"
            else:
                insight += "• Khả năng chịu áp lực: Bạn là người tinh tế và giàu cảm xúc. Điều này giúp bạn dễ dàng đồng cảm với người khác, nhưng hãy chú ý giữ cân bằng tâm lý để không bị kiệt sức nhé.\n"

            # 5. Openness (Cởi mở với trải nghiệm vs Thực tế)
            if req.bigFive.Openness >= 5.0:
                insight += "• Tư duy sáng tạo: Bạn cởi mở, giàu trí tưởng tượng và luôn tò mò. Bạn rất hợp với những môi trường cho phép thử nghiệm các ý tưởng phá cách và mới lạ.\n"
            else:
                insight += "• Tư duy sáng tạo: Bạn là người thực tế, thích áp dụng những phương pháp đã được kiểm chứng tính hiệu quả hơn là mạo hiểm với những ý tưởng quá viển vông.\n"

    return {"insight": insight.strip()}

@app.get("/health")
def health_check():
    return {"status": "ok", "model_classes": len(model.classes_)}