import requests
import os

def update_frontend_env():
    print("Đang tìm kiếm đường link Ngrok...")
    try:
        # 1. Gọi API cục bộ của Ngrok để lấy danh sách đường hầm (tunnels)
        response = requests.get("http://127.0.0.1:4040/api/tunnels")
        tunnels = response.json().get("tunnels", [])
        
        public_url = None
        for tunnel in tunnels:
            # Ưu tiên lấy link HTTPS
            if tunnel["proto"] == "https":
                public_url = tunnel["public_url"]
                break
                
        if public_url:
            print(f"✅ Đã tóm được link Ngrok: {public_url}")
            
            # 2. Đường dẫn tới file .env của Frontend 
            # (Bạn TỰ CHỈNH SỬA đoạn này cho khớp với thư mục React của bạn nhé)
            # Ví dụ: Nếu thư mục Frontend nằm ngang hàng với Backend thì dùng "../frontend/.env"
            env_file_path = "../FE/.env" 
            
            # 3. Ghi đè đường link mới vào file .env
            # Nếu bạn dùng Vite thì tên biến là VITE_API_URL
            # Nếu dùng Create React App thì là REACT_APP_API_URL
            with open(env_file_path, "w") as f:
                f.write(f"VITE_API_URL={public_url}\n")
                
            print(f"🎉 Đã tự động cập nhật file {env_file_path} thành công!")
        else:
            print("❌ Không tìm thấy link. Bạn đã chạy 'ngrok http 8000' chưa?")
            
    except requests.exceptions.ConnectionError:
        print("❌ Lỗi: Không thể kết nối với Ngrok. Đảm bảo bạn đang mở bảng Terminal của Ngrok nhé!")

if __name__ == "__main__":
    update_frontend_env()