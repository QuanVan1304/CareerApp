# 🎯 Career Analysis App - Hệ thống Định hướng Nghề nghiệp tích hợp AI

![Cấu trúc dự án](https://img.shields.io/badge/Architecture-Client%20%2F%20Server-blue)
![Frontend](https://img.shields.io/badge/Frontend-React%20%7C%20Vite%20%7C%20Tailwind-61DAFB?logo=react)
![Backend](https://img.shields.io/badge/Backend-FastAPI%20%7C%20Python-009688?logo=fastapi)
![AI/ML](https://img.shields.io/badge/AI%20Model-Random%20Forest-FF6F00?logo=scikit-learn)

## 📖 Giới thiệu Dự án
**Career Analysis App** là một ứng dụng Web thông minh được xây dựng nhằm mục đích hỗ trợ học sinh THPT và sinh viên tìm ra ngành học/nghề nghiệp phù hợp nhất với bản thân. 

Thay vì sử dụng các câu lệnh `if/else` tĩnh cứng nhắc, ứng dụng tích hợp một **Mô hình Trí tuệ Nhân tạo (Machine Learning)** được huấn luyện trên tập dữ liệu thực tế của hơn **145.000 người dùng** từ bài test Holland Code (RIASEC).

## ✨ Tính năng nổi bật
* **Trắc nghiệm RIASEC Tối ưu UX:** Phân tích tính cách dựa trên từ khóa (traits) ẩn sau mỗi đáp án tiếng Việt, tự động chuẩn hóa điểm số.
* **AI Suy luận Thông minh:** Sử dụng thuật toán `RandomForestClassifier` dự đoán xác suất phần trăm phù hợp (% Matching Score) cho 30 ngành học đại học phổ biến nhất.
* **Cơ chế Hybrid Data Hydration:** Gộp (Merge) dữ liệu % tỷ lệ của AI Backend với dữ liệu mô tả chi tiết, lộ trình, kỹ năng từ Database Frontend một cách mượt mà.
* **Dashboard Trực quan:** Hiển thị kết quả bằng giao diện thẻ (Cards) hiện đại, kết hợp biểu đồ mạng nhện (Radar Chart) phân tích năng lực.
* **Kiến trúc Tách biệt (Decoupled):** Client và Server hoạt động độc lập, giao tiếp thông qua RESTful API, đảm bảo tốc độ phản hồi cực nhanh.

## 🛠 Công nghệ sử dụng
### Frontend (Giao diện)
* **Framework:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router v6
* **Icons & Charts:** Lucide-react, Recharts

### Backend & AI (Máy chủ & Trí tuệ nhân tạo)
* **Framework:** FastAPI, Uvicorn (Xử lý API)
* **Machine Learning:** Scikit-learn (Mô hình Random Forest)
* **Data Processing:** Pandas, Numpy
* **Model Serialization:** Joblib

## 📁 Cấu trúc Thư mục
```text
CareerApp/
├── frontend/                 # Chứa mã nguồn Giao diện React
│   ├── src/
│   │   ├── components/       # Các thành phần UI tái sử dụng
│   │   ├── pages/            # Các trang màn hình chính (Survey, Dashboard, JobDetail)
│   │   ├── data/             # Cơ sở dữ liệu tĩnh (careers.ts)
│   │   ├── utils/            # Các hàm logic tiện ích (scoring.ts)
│   │   └── App.tsx           # Quản lý Routing
│   └── package.json
│
├── backend/                  # Chứa mã nguồn Server và AI
│   ├── main.py               # API Router (FastAPI)
│   ├── career_model.pkl      # Trọng số mô hình AI đã được huấn luyện
│   ├── requirements.txt      # Danh sách thư viện Python
│   └── ai_training/          # Môi trường xử lý Data (Dataset, Script Train)
│
├── .gitignore                # Quản lý các file rác không đẩy lên Git
└── README.md                 # Tài liệu dự án
```
🚀 Hướng dẫn Cài đặt & Chạy ứng dụng
Yêu cầu môi trường: Cài đặt sẵn Node.js và Python 3.8+.

Bước 1: Khởi động Backend (AI Server)
Mở terminal và di chuyển vào thư mục backend:

Bash
cd backend
# Cài đặt các thư viện cần thiết
pip install -r requirements.txt
# Hoặc cài thủ công: pip install fastapi uvicorn pandas scikit-learn pydantic joblib

# Chạy server FastAPI
uvicorn main:app --reload
Backend sẽ chạy tại: http://127.0.0.1:8000

Bước 2: Khởi động Frontend (Giao diện Người dùng)
Mở một terminal mới và di chuyển vào thư mục frontend:

Bash
cd frontend
# Cài đặt các gói phụ thuộc (Dependencies)
npm install

# Khởi động môi trường phát triển (Dev Server)
npm run dev
Frontend sẽ chạy tại: http://localhost:3000
