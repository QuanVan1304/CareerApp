import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { 
  Code, BrainCircuit, Cpu, Database, Server, Shield, Cloud, Terminal, 
  Users, Ear, HeartHandshake, FileText, Search, BarChart, Target, 
  TrendingUp, Rocket, Megaphone, DollarSign, Calculator, Scale, PieChart,
  Briefcase, LineChart, HeartPulse, Stethoscope, Activity, PenTool, 
  Smartphone, Lock, Monitor, FlaskConical, CheckCircle, Settings, 
  ShieldAlert, Leaf, Zap, Sun, Battery, Home, Palette, Layers, Box, 
  Map, Hammer, Globe, MapPin, Sparkles, ArrowLeft, Lightbulb, BookOpen, Truck
} from "lucide-react";

export const MOCK_JOB_DATA: Record<string, any> = {
  // ==========================================
  // 1. KHOA HỌC MÁY TÍNH (COMPUTER SCIENCE)
  // ==========================================
  "sw-engineer": {
    title: "Kỹ sư phần mềm (Software Engineer)",
    parentMajor: "Khoa Học Máy Tính",
    description: "Thiết kế, phát triển và bảo trì các ứng dụng phần mềm. Bạn sẽ là người biến những ý tưởng trên giấy thành các ứng dụng web/mobile mà hàng triệu người sử dụng mỗi ngày.",
    stats: { salary: "15 - 60+ Triệu", growth: "+25% (Rất cao)", environment: "Remote / Hybrid" },
    techStack: [
      { name: "JavaScript/TS", icon: <Terminal size={14} />, color: "bg-yellow-100 text-yellow-700" },
      { name: "React/Vue",     icon: <Code size={14} />,     color: "bg-cyan-100 text-cyan-700" },
      { name: "Java/C#",       icon: <Server size={14} />,   color: "bg-red-100 text-red-700" },
      { name: "Docker/Git",    icon: <Cloud size={14} />,    color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Bug đầu tiên là... một con bọ", description: "Lỗi phần mềm đầu tiên được ghi nhận vào năm 1947 là do một con bọ ngài (moth) thật bay vào kẹt trong máy tính." },
      { title: "Coder chuộng Dark Mode", description: "Hơn 70% lập trình viên sử dụng nền tối (Dark Mode) vì nó giúp giảm mỏi mắt khi nhìn màn hình liên tục." },
    ],
    progression: [
      { level: "Junior Developer",  exp: "0 - 2 năm", role: "Code các tính năng nhỏ, fix bug, viết unit test." },
      { level: "Mid-level Engineer",exp: "2 - 5 năm", role: "Thiết kế module, tối ưu hiệu năng và review code." },
      { level: "Senior / Tech Lead",exp: "5+ năm",    role: "Thiết kế kiến trúc hệ thống, định hướng công nghệ cho team." },
    ],
    actionPlan: {
      projects: ["Xây dựng ứng dụng quản lý công việc (Todo App)", "Làm một trang web e-commerce đơn giản với Payment Gateway"],
      interviewPrep: "Ôn luyện thuật toán trên LeetCode (mức độ Easy-Medium), hiểu rõ OOP và RESTful API.",
    },
  },
  "ai-ml": {
    title: "Kỹ sư AI / Machine Learning",
    parentMajor: "Khoa Học Máy Tính",
    description: "Xây dựng các mô hình học máy, xử lý dữ liệu lớn và triển khai hệ thống AI vào các sản phẩm thực tế. Từ hệ thống nhận diện hình ảnh, NLP đến mô hình dự báo.",
    stats: { salary: "20 - 70+ Triệu", growth: "+40% (Cực cao)", environment: "Hybrid / On-site" },
    techStack: [
      { name: "Python",      icon: <Code size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "PyTorch/TF",  icon: <BrainCircuit size={14} />, color: "bg-orange-100 text-orange-700" },
      { name: "Scikit-learn",icon: <Cpu size={14} />,          color: "bg-amber-100 text-amber-700" },
      { name: "SQL/Git",     icon: <Database size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "AI cũng biết làm nghệ thuật",       description: "Ngày nay, AI không chỉ tính toán mà còn có thể vẽ tranh đạt giải quốc tế, làm thơ, soạn nhạc và viết cả kịch bản phim." },
      { title: "Thú cưng của bạn cũng là Data",     description: "Để huấn luyện các mô hình nhận diện hình ảnh sơ khai, các kỹ sư đã phải dùng đến hàng triệu bức ảnh... chó và mèo trên Internet." },
    ],
    progression: [
      { level: "AI Intern / Fresher",    exp: "0 - 1 năm",   role: "Hỗ trợ làm sạch dữ liệu, train các mô hình ML cơ bản." },
      { level: "Junior AI Engineer",     exp: "1 - 3 năm",   role: "Xây dựng pipeline, tối ưu thuật toán và deploy model." },
      { level: "Senior AI Researcher",   exp: "3 - 5+ năm",  role: "Thiết kế kiến trúc AI, nghiên cứu thuật toán SOTA." },
    ],
    actionPlan: {
      projects: ["Nhận diện cử chỉ tay (Hand Sign Recognition) bằng CNN", "Dự đoán khách hàng rời bỏ bằng Random Forest"],
      interviewPrep: "Nắm chắc ML cơ bản (Overfitting, Gradient Descent), toán vi tích phân và đại số tuyến tính.",
    },
  },
  "devops": {
    title: "Kỹ sư DevOps / Cloud",
    parentMajor: "Khoa Học Máy Tính",
    description: "Đảm bảo mã nguồn từ máy lập trình viên được tự động hóa, kiểm tra và đưa lên server chạy ổn định. Là 'nhạc trưởng' kết hợp giữa Development (Phát triển) và Operations (Vận hành).",
    stats: { salary: "25 - 80+ Triệu", growth: "+35% (Cực cao)", environment: "Remote / On-site" },
    techStack: [
      { name: "AWS/Azure",   icon: <Cloud size={14} />,    color: "bg-orange-100 text-orange-700" },
      { name: "Docker/K8s",  icon: <Server size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Linux/Bash",  icon: <Terminal size={14} />, color: "bg-slate-100 text-slate-700" },
      { name: "CI/CD",       icon: <Rocket size={14} />,   color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Khắc tinh của lỗi 'Trên máy tôi chạy bình thường'", description: "DevOps sinh ra để dẹp bỏ việc code chạy được trên máy cá nhân nhưng lại lỗi khi đưa lên server thực tế." },
      { title: "Người hùng thầm lặng", description: "Khi hệ thống sập vào lúc 2 giờ sáng, DevOps thường là người đầu tiên phải bật máy tính để 'chữa cháy'." },
    ],
    progression: [
      { level: "Junior DevOps", exp: "0 - 2 năm", role: "Viết script tự động hóa, cấu hình server cơ bản." },
      { level: "Cloud Engineer", exp: "2 - 5 năm", role: "Thiết kế CI/CD pipeline, quản lý container (Kubernetes)." },
      { level: "DevOps Architect", exp: "5+ năm", role: "Xây dựng kiến trúc Cloud, tối ưu chi phí hạ tầng hàng tỷ đồng." },
    ],
    actionPlan: {
      projects: ["Triển khai ứng dụng Web lên AWS EC2 bằng Docker", "Xây dựng luồng CI/CD tự động deploy với GitHub Actions"],
      interviewPrep: "Nắm vững Linux commands, Networking cơ bản và nguyên lý của container hóa.",
    },
  },
  "infosec": {
    title: "Chuyên gia An toàn thông tin",
    parentMajor: "Khoa Học Máy Tính",
    description: "Bảo vệ hệ thống, mạng và dữ liệu của tổ chức khỏi các cuộc tấn công mạng. Bạn giống như một 'cảnh sát' hoặc 'hacker mũ trắng' trên không gian số.",
    stats: { salary: "20 - 70 Triệu", growth: "+32% (Rất cao)", environment: "On-site / Hybrid" },
    techStack: [
      { name: "Kali Linux",  icon: <Terminal size={14} />, color: "bg-slate-100 text-slate-700" },
      { name: "Pentest",     icon: <Shield size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Networking",  icon: <Server size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Python",      icon: <Code size={14} />,     color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Được trả tiền để... hack", description: "Các tập đoàn lớn như Google, Apple có chương trình 'Bug Bounty' trả hàng triệu USD cho hacker mũ trắng tìm ra lỗ hổng." },
      { title: "Con người là điểm yếu nhất", description: "80% các vụ tấn công mạng thành công bắt nguồn từ việc nhân viên bất cẩn click vào link lừa đảo (Phishing)." },
    ],
    progression: [
      { level: "SOC Analyst",    exp: "0 - 2 năm",  role: "Giám sát hệ thống, phát hiện và cảnh báo các dấu hiệu tấn công." },
      { level: "Pentester",      exp: "2 - 5 năm",  role: "Giả lập tấn công để tìm ra lỗ hổng của ứng dụng/mạng." },
      { level: "Security Arch.", exp: "5+ năm",     role: "Thiết kế hệ thống phòng thủ toàn diện cho ngân hàng/tập đoàn." },
    ],
    actionPlan: {
      projects: ["Thực hành CTF (Capture The Flag) trên HackTheBox", "Phân tích mã độc (Malware Analysis) cơ bản"],
      interviewPrep: "Học về lỗ hổng OWASP Top 10, cấu trúc mạng TCP/IP và mã hóa.",
    },
  },
  "data-engineer": {
    title: "Kỹ sư dữ liệu (Data Engineer)",
    parentMajor: "Khoa Học Máy Tính",
    description: "Thiết kế và xây dựng 'đường ống' (pipeline) thu thập, lưu trữ và xử lý hàng TB dữ liệu mỗi ngày. Data Engineer chuẩn bị nguyên liệu sạch để AI và Data Analyst nấu ăn.",
    stats: { salary: "18 - 65 Triệu", growth: "+30% (Cao)", environment: "Hybrid / Remote" },
    techStack: [
      { name: "SQL",         icon: <Database size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Apache Spark",icon: <Server size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Airflow",     icon: <TrendingUp size={14} />,color: "bg-cyan-100 text-cyan-700" },
      { name: "AWS/GCP",     icon: <Cloud size={14} />,    color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Kẻ dọn rác dữ liệu", description: "80% thời gian của các dự án AI là dành cho việc làm sạch và chuẩn bị dữ liệu — đó là lý do Data Engineer cực kỳ quan trọng." },
      { title: "Nhu cầu vượt cả Data Scientist", description: "Hiện tại, các công ty nhận ra họ cần xây dựng kho dữ liệu tốt trước khi làm AI, khiến nhu cầu tuyển DE tăng vọt." },
    ],
    progression: [
      { level: "Junior DE",       exp: "0 - 2 năm",  role: "Viết SQL queries phức tạp, chạy các luồng ETL cơ bản." },
      { level: "Data Engineer",   exp: "2 - 5 năm",  role: "Thiết kế Data Warehouse, xử lý streaming data theo thời gian thực." },
      { level: "Data Architect",  exp: "5+ năm",     role: "Thiết kế kiến trúc lưu trữ dữ liệu khổng lồ cho hệ sinh thái công ty." },
    ],
    actionPlan: {
      projects: ["Xây dựng luồng cào dữ liệu (ETL) thời tiết tự động đổ về Database", "Phân tích log website bằng Apache Spark"],
      interviewPrep: "SQL nâng cao (Window functions), cấu trúc dữ liệu, và khái niệm về Big Data.",
    },
  },

  // ==========================================
  // 2. TÂM LÝ HỌC (PSYCHOLOGY)
  // ==========================================
  "psychological-counselor": {
    title: "Chuyên viên tham vấn tâm lý",
    parentMajor: "Tâm Lý Học",
    description: "Lắng nghe, đánh giá và hỗ trợ thân chủ vượt qua căng thẳng, lo âu, trầm cảm và các vấn đề cảm xúc khác trong cuộc sống hàng ngày.",
    stats: { salary: "10 - 30 Triệu", growth: "+20% (Cao)", environment: "Phòng khám / Online" },
    techStack: [
      { name: "Lắng nghe sâu",   icon: <Ear size={14} />,          color: "bg-purple-100 text-purple-700" },
      { name: "Thấu cảm",        icon: <HeartHandshake size={14} />,color: "bg-pink-100 text-pink-700" },
      { name: "Liệu pháp CBT",   icon: <BrainCircuit size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Đạo đức nghề",    icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Không phải bác sĩ tâm thần", description: "Chuyên viên tham vấn không kê đơn thuốc. Họ dùng 'lời nói và sự thấu hiểu' làm phương pháp chữa lành chính." },
      { title: "Im lặng là vàng", description: "Đôi khi trong một phiên tham vấn, người chuyên viên chỉ cần im lặng lắng nghe cũng đủ giúp thân chủ tự gỡ rối." },
    ],
    progression: [
      { level: "Thực tập sinh",        exp: "0 - 1 năm", role: "Quan sát ca, thực hành tham vấn dưới sự giám sát (supervision)." },
      { level: "Chuyên viên tham vấn", exp: "1 - 4 năm", role: "Trực tiếp nhận ca cá nhân, giải quyết các vấn đề tâm lý mức độ vừa." },
      { level: "Chuyên gia / Giảng viên",exp: "4+ năm",  role: "Mở trung tâm riêng, giám sát các ca khó và giảng dạy." },
    ],
    actionPlan: {
      projects: ["Thực hành phương pháp giao tiếp không bạo lực (NVC)", "Tham gia tình nguyện tại đường dây nóng hỗ trợ tâm lý"],
      interviewPrep: "Nắm chắc lý thuyết tham vấn (Carl Rogers, CBT) và cách xử lý tình huống khủng hoảng tâm lý.",
    },
  },
  "hr-specialist": {
    title: "Chuyên viên nhân sự (HR)",
    parentMajor: "Tâm Lý Học",
    description: "Tuyển dụng, đánh giá năng lực, giải quyết xung đột và xây dựng môi trường làm việc hạnh phúc. HR là cầu nối tâm lý giữa người lao động và doanh nghiệp.",
    stats: { salary: "10 - 40 Triệu", growth: "+15% (Ổn định)", environment: "On-site / Hybrid" },
    techStack: [
      { name: "Tuyển dụng",      icon: <Users size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Đánh giá NV",     icon: <FileText size={14} />,     color: "bg-amber-100 text-amber-700" },
      { name: "Xử lý xung đột",  icon: <HeartHandshake size={14} />,color: "bg-red-100 text-red-700" },
      { name: "Luật lao động",   icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Người nắm bí mật", description: "HR là bộ phận duy nhất biết rõ mức lương của... tất cả mọi người trong công ty." },
      { title: "Phải đóng vai ác", description: "Một trong những kỹ năng khó nhất của HR là cách sa thải nhân viên sao cho đúng luật và không gây chấn thương tâm lý." },
    ],
    progression: [
      { level: "HR Executive",   exp: "0 - 2 năm", role: "Đăng tuyển dụng, lọc CV, hỗ trợ onboard nhân sự mới." },
      { level: "HR Business Partner",exp:"3 - 5 năm",role: "Đồng hành cùng các phòng ban giải quyết bài toán nhân sự, đánh giá KPI." },
      { level: "HR Manager",     exp: "5+ năm",    role: "Xây dựng văn hóa doanh nghiệp, thang bảng lương và chiến lược nhân tài." },
    ],
    actionPlan: {
      projects: ["Thực hành phỏng vấn hành vi (BEI)", "Thiết kế một khảo sát độ hài lòng của sinh viên trong CLB"],
      interviewPrep: "Nắm vững Luật Lao động, kỹ năng đọc vị ứng viên và cách xử lý tình huống nhân sự khéo léo.",
    },
  },
  "psychotherapist": {
    title: "Nhà trị liệu tâm lý",
    parentMajor: "Tâm Lý Học",
    description: "Thực hiện các liệu pháp trị liệu chuyên sâu cho các rối loạn tâm thần nặng (trầm cảm lâm sàng, rối loạn lo âu, PTSD) tại bệnh viện hoặc phòng khám chuyên khoa.",
    stats: { salary: "15 - 50 Triệu", growth: "+25% (Cao)", environment: "Bệnh viện / Phòng khám" },
    techStack: [
      { name: "Phân tích lâm sàng", icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Trị liệu chuyên sâu",icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Ghi chép bệnh án",   icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Can thiệp khủng hoảng",icon:<HeartPulse size={14} />,  color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Cần nhiều năm tu nghiệp", description: "Tại nhiều quốc gia, để được gọi là 'Nhà trị liệu' (Therapist), bạn bắt buộc phải có bằng Thạc sĩ và hàng nghìn giờ thực hành có giám sát." },
      { title: "Bác sĩ cũng cần bác sĩ", description: "Nhà trị liệu thường xuyên phải đi trị liệu tâm lý (Supervision) để giải tỏa áp lực từ việc hấp thụ những câu chuyện tiêu cực của bệnh nhân." },
    ],
    progression: [
      { level: "Trợ lý lâm sàng",  exp: "0 - 2 năm", role: "Thực hiện các bài test tâm lý, hỗ trợ ghi chép ca bệnh." },
      { level: "Nhà trị liệu (Therapist)",exp: "2 - 5 năm",role: "Chẩn đoán và thực hiện lộ trình trị liệu dài hạn cho bệnh nhân." },
      { level: "Trưởng khoa / Chuyên gia",exp: "5+ năm",role: "Quản lý phòng khám, giám sát các ca bệnh phức tạp." },
    ],
    actionPlan: {
      projects: ["Nghiên cứu về các hội chứng tâm lý trong Cẩm nang DSM-5", "Tham gia các khóa đào tạo CBT/DBT căn bản"],
      interviewPrep: "Kiến thức tâm lý học bất thường, nguyên tắc đạo đức y khoa và kỹ năng can thiệp khủng hoảng.",
    },
  },
  "behavioral-researcher": {
    title: "Chuyên viên nghiên cứu hành vi",
    parentMajor: "Tâm Lý Học",
    description: "Thu thập và phân tích dữ liệu hành vi con người để ứng dụng trong thiết kế trải nghiệm người dùng (UX), Marketing hoặc nghiên cứu học thuật.",
    stats: { salary: "15 - 45 Triệu", growth: "+20% (Cao)", environment: "Hybrid / Remote" },
    techStack: [
      { name: "SPSS / R",        icon: <BarChart size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Thống kê",        icon: <Calculator size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Thiết kế khảo sát",icon: <FileText size={14} />,    color: "bg-slate-100 text-slate-700" },
      { name: "Tâm lý nhận thức",icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Thao túng tâm lý hợp pháp", description: "Cách sắp xếp hàng hóa siêu thị hay nút 'Buy Now' màu đỏ trên web đều là kết quả nghiên cứu hành vi nhằm thúc đẩy bạn mua sắm." },
      { title: "Khoa học đằng sau thói quen", description: "Họ nghiên cứu cách thuật toán của TikTok/Facebook giữ chân bạn lướt điện thoại hàng giờ liền." },
    ],
    progression: [
      { level: "Junior Researcher", exp: "0 - 2 năm", role: "Thiết kế bảng hỏi, thu thập số liệu khảo sát, chạy SPSS." },
      { level: "Senior Researcher", exp: "3 - 5 năm", role: "Phân tích dữ liệu sâu, tìm ra Insight người tiêu dùng." },
      { level: "Research Manager",  exp: "5+ năm",    role: "Định hướng chiến lược nghiên cứu cho toàn bộ sản phẩm của doanh nghiệp." },
    ],
    actionPlan: {
      projects: ["Thực hiện một bài nghiên cứu nhỏ về thói quen mua sắm online của sinh viên", "Học cách thiết kế A/B Testing"],
      interviewPrep: "Ôn tập kiến thức thống kê, phương pháp nghiên cứu khoa học và sử dụng phần mềm SPSS.",
    },
  },
  "school-psychologist": {
    title: "Giáo viên / Chuyên viên tâm lý học đường",
    parentMajor: "Tâm Lý Học",
    description: "Hỗ trợ học sinh vượt qua áp lực điểm số, bạo lực học đường, khủng hoảng tuổi dậy thì và định hướng nghề nghiệp tương lai.",
    stats: { salary: "8 - 25 Triệu", growth: "+15% (Ổn định)", environment: "Trường học" },
    techStack: [
      { name: "Tâm lý học PT",   icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Tư vấn hướng nghiệp",icon:<Target size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Tham vấn HS",     icon: <Users size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Bảo mật thông tin",icon: <Shield size={14} />,      color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Gỡ rối tuổi ô mai", description: "80% các ca tư vấn học đường liên quan đến mâu thuẫn tình cảm tuổi mới lớn và áp lực thành tích từ phụ huynh." },
      { title: "Đồng hành cùng gen Z", description: "Họ phải liên tục cập nhật ngôn ngữ và xu hướng mạng xã hội (Tiktok, Game) để hiểu được học sinh đang nghĩ gì." },
    ],
    progression: [
      { level: "Cán bộ phòng tham vấn", exp: "0 - 2 năm", role: "Tiếp nhận học sinh, thực hiện các bài test tính cách/hướng nghiệp." },
      { level: "Chuyên viên tâm lý",    exp: "2 - 5 năm", role: "Trị liệu cá nhân cho học sinh có dấu hiệu trầm cảm, can thiệp bạo lực." },
      { level: "Trưởng phòng tư vấn",   exp: "5+ năm",    role: "Tổ chức các buổi workshop kỹ năng sống cho toàn trường và phụ huynh." },
    ],
    actionPlan: {
      projects: ["Tổ chức một buổi sinh hoạt CLB về sức khỏe tinh thần", "Làm quen với các bài test MBTI, RIASEC"],
      interviewPrep: "Hiểu biết về tâm lý lứa tuổi vị thành niên và kỹ năng làm việc với phụ huynh khó tính.",
    },
  },

  // ==========================================
  // 3. QUẢN TRỊ KINH DOANH (BUSINESS)
  // ==========================================
  "ceo-coo": {
    title: "Quản lý / Giám đốc điều hành (CEO/COO)",
    parentMajor: "Quản Trị Kinh Doanh",
    description: "Thuyền trưởng của doanh nghiệp. Ra quyết định chiến lược, quản lý rủi ro và điều phối toàn bộ hoạt động để công ty đạt lợi nhuận và tăng trưởng.",
    stats: { salary: "50 - 200+ Triệu", growth: "+10% (Cạnh tranh)", environment: "On-site / Cường độ cao" },
    techStack: [
      { name: "Tư duy chiến lược", icon: <Target size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Lãnh đạo",        icon: <Users size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Quản trị tài chính",icon: <LineChart size={14} />,  color: "bg-green-100 text-green-700" },
      { name: "Đàm phán",        icon: <HeartHandshake size={14} />,color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Xuất thân từ dân kinh doanh", description: "Hơn 70% CEO của các tập đoàn trong danh sách Fortune 500 có nền tảng từ ngành Quản trị Kinh doanh hoặc Tài chính." },
      { title: "Thời gian làm việc cực hạn", description: "CEO trung bình làm việc 62 giờ/tuần và thường xuyên phải ra các quyết định sinh tử cho công ty vào cuối tuần." },
    ],
    progression: [
      { level: "Management Trainee", exp: "0 - 2 năm", role: "Luân chuyển qua các phòng ban để hiểu tổng quan vận hành doanh nghiệp." },
      { level: "Trưởng phòng / Giám đốc", exp: "3 - 8 năm", role: "Quản lý một bộ phận cụ thể (Sale, Marketing, Ops), chịu trách nhiệm P&L." },
      { level: "CEO / C-Level",      exp: "10+ năm",   role: "Định hướng chiến lược toàn công ty, làm việc trực tiếp với hội đồng quản trị." },
    ],
    actionPlan: {
      projects: ["Thử sức điều hành một dự án kinh doanh gây quỹ trong CLB", "Đọc hiểu Báo cáo tài chính cơ bản"],
      interviewPrep: "Rèn luyện tư duy hệ thống (System Thinking), giải quyết tình huống kinh doanh (Case Study) và kỹ năng giao tiếp.",
    },
  },
  "bdm": {
    title: "Chuyên viên phát triển kinh doanh (BDM)",
    parentMajor: "Quản Trị Kinh Doanh",
    description: "Mũi nhọn mang tiền về cho công ty. Nhiệm vụ là tìm kiếm thị trường mới, xây dựng mối quan hệ đối tác chiến lược và chốt các hợp đồng B2B giá trị lớn.",
    stats: { salary: "15 - 100+ Triệu (Có Hoa hồng)", growth: "+25% (Cao)", environment: "Linh hoạt / Hay đi lại" },
    techStack: [
      { name: "Sales B2B",       icon: <DollarSign size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Pitching",        icon: <Megaphone size={14} />,    color: "bg-orange-100 text-orange-700" },
      { name: "Networking",      icon: <Users size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "CRM",             icon: <Database size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Thu nhập không trần", description: "Lương cứng của BDM có thể không cao, nhưng tiền hoa hồng (commission) từ các hợp đồng lớn có thể bằng vài năm lương của người khác." },
      { title: "Nghề ăn nói", description: "Họ dành 80% thời gian để uống cà phê, gặp gỡ đối tác và 'bán' niềm tin trước khi bán sản phẩm." },
    ],
    progression: [
      { level: "Sales Executive", exp: "0 - 2 năm", role: "Tìm kiếm khách hàng (Telesale, Email), chốt các đơn hàng nhỏ." },
      { level: "BD Manager",      exp: "2 - 5 năm", role: "Nuôi dưỡng khách hàng lớn (Key Account), đàm phán hợp đồng cấp tập đoàn." },
      { level: "BD Director",     exp: "5+ năm",    role: "Xây dựng chiến lược mở rộng thị trường quốc tế, dẫn dắt đội ngũ Sales." },
    ],
    actionPlan: {
      projects: ["Tìm kiếm tài trợ cho sự kiện của trường", "Xây dựng profile LinkedIn chuyên nghiệp và mở rộng network"],
      interviewPrep: "Kỹ năng đàm phán, xử lý từ chối (Objection Handling) và lập kế hoạch Sales.",
    },
  },
  "management-consultant": {
    title: "Chuyên viên tư vấn quản lý (Consultant)",
    parentMajor: "Quản Trị Kinh Doanh",
    description: "Bác sĩ của các doanh nghiệp. Làm việc tại các công ty tư vấn (McKinsey, BCG) để phân tích dữ liệu, chẩn đoán vấn đề và đề xuất chiến lược tái cấu trúc cho tập đoàn.",
    stats: { salary: "30 - 150+ Triệu", growth: "+20% (Cao)", environment: "Cường độ cao / Travel" },
    techStack: [
      { name: "Problem Solving", icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Slide/Pitching",  icon: <PieChart size={14} />,     color: "bg-amber-100 text-amber-700" },
      { name: "Phân tích dữ liệu",icon: <BarChart size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Framework chiến lược",icon: <Target size={14} />,   color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Vào dễ hay khó?", description: "Tỷ lệ trúng tuyển vào MBB (McKinsey, BCG, Bain) thường chỉ dưới 1% — còn thấp hơn tỷ lệ đỗ vào Đại học Harvard." },
      { title: "Cuộc sống trên máy bay", description: "Consultant thường bay đến văn phòng khách hàng vào thứ Hai và chỉ về nhà vào tối thứ Sáu hàng tuần." },
    ],
    progression: [
      { level: "Business Analyst", exp: "0 - 2 năm", role: "Cào dữ liệu, xử lý Excel, vẽ slide PowerPoint cho các dự án tư vấn." },
      { level: "Consultant",       exp: "2 - 5 năm", role: "Đưa ra giải pháp chiến lược, làm việc trực tiếp với quản lý cấp trung của KH." },
      { level: "Partner",          exp: "8+ năm",    role: "Mang về hợp đồng tư vấn triệu đô, định hướng chiến lược ngành." },
    ],
    actionPlan: {
      projects: ["Lập kế hoạch kinh doanh (Business Plan) cho một ý tưởng khởi nghiệp", "Tham gia các cuộc thi giải Case Study"],
      interviewPrep: "Luyện tập giải Case Interview, rèn tư duy phản biện (MECE) và tính nhẩm nhanh.",
    },
  },
  "operations-specialist": {
    title: "Chuyên viên vận hành (Operations)",
    parentMajor: "Quản Trị Kinh Doanh",
    description: "Tối ưu hóa quy trình làm việc nội bộ, chuỗi cung ứng và đảm bảo mọi hoạt động của công ty (từ sản xuất đến giao hàng) diễn ra trơn tru với chi phí thấp nhất.",
    stats: { salary: "12 - 45 Triệu", growth: "+15% (Ổn định)", environment: "On-site" },
    techStack: [
      { name: "Quản lý dự án",   icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Tối ưu quy trình",icon: <TrendingUp size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Hệ thống ERP",    icon: <Server size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Xử lý sự cố",     icon: <Search size={14} />,       color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Người hùng thầm lặng", description: "Khi mọi thứ suôn sẻ, không ai nhớ đến Operations. Nhưng khi hàng hóa trễ hẹn, họ là người chịu trận đầu tiên." },
      { title: "Ám ảnh sự hoàn hảo", description: "Họ luôn nhìn mọi thứ dưới lăng kính: 'Làm sao để làm việc này nhanh hơn 1 giây và rẻ hơn 1 đồng?'" },
    ],
    progression: [
      { level: "Ops Executive",  exp: "0 - 2 năm", role: "Theo dõi tiến độ đơn hàng, xử lý giấy tờ và báo cáo lỗi hệ thống." },
      { level: "Ops Manager",    exp: "2 - 5 năm", role: "Thiết kế lại quy trình làm việc, loại bỏ các bước thừa, quản lý đội ngũ." },
      { level: "COO",            exp: "8+ năm",    role: "Quản trị toàn bộ guồng máy vận hành và nhân sự của tập đoàn." },
    ],
    actionPlan: {
      projects: ["Viết quy trình tổ chức sự kiện chi tiết A-Z cho CLB", "Học cách sử dụng công cụ quản lý Trello/Jira"],
      interviewPrep: "Tìm hiểu về Lean Six Sigma, Agile/Scrum và cách xử lý tình huống khẩn cấp.",
    },
  },
  "startup-founder": {
    title: "Chủ doanh nghiệp / Startup Founder",
    parentMajor: "Quản Trị Kinh Doanh",
    description: "Tự xây dựng đế chế của riêng mình từ con số 0. Tìm kiếm nỗi đau của thị trường, tạo ra sản phẩm giải quyết vấn đề, gọi vốn và đưa công ty lên sàn chứng khoán.",
    stats: { salary: "0 - Không giới hạn", growth: "Rủi ro cực cao", environment: "Làm việc 24/7" },
    techStack: [
      { name: "Khởi nghiệp",     icon: <Rocket size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Gọi vốn",         icon: <DollarSign size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Quản trị rủi ro", icon: <Shield size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Tầm nhìn",        icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Chín phần chết, một phần sống", description: "Khoảng 90% startup thất bại trong 3 năm đầu tiên, nhưng 10% thành công có thể thay đổi cả thế giới." },
      { title: "CEO kiêm lao công", description: "Trong giai đoạn đầu, Founder thường không có lương và phải làm mọi việc từ viết code, gọi điện sale đến... đi đổ rác." },
    ],
    progression: [
      { level: "Giai đoạn Hạt giống", exp: "0 - 1 năm", role: "Xây dựng sản phẩm thử nghiệm (MVP), đi tìm khách hàng đầu tiên." },
      { level: "Tăng trưởng (Scale)", exp: "1 - 5 năm", role: "Gọi vốn Series A/B, mở rộng đội ngũ và chiếm lĩnh thị trường." },
      { level: "IPO / Exit",          exp: "5+ năm",    role: "Đưa công ty lên sàn chứng khoán hoặc bán lại công ty cho tập đoàn lớn." },
    ],
    actionPlan: {
      projects: ["Bán một sản phẩm/dịch vụ nhỏ thực tế (VD: Áo thun lớp, đồ ăn vặt)", "Tham gia các khóa ươm tạo khởi nghiệp sinh viên"],
      interviewPrep: "Học cách thiết kế mô hình kinh doanh (Business Model Canvas) và nghệ thuật Pitching (thuyết trình gọi vốn).",
    },
  },
  // ==========================================
  // 4. TRUYỀN THÔNG & MARKETING (MARKETING)
  // ==========================================
  "content-creator": {
    title: "Content Creator / Copywriter",
    parentMajor: "Truyền Thông & Marketing",
    description: "Sáng tạo nội dung hấp dẫn cho mạng xã hội, website và các chiến dịch quảng cáo. Bạn là người 'thổi hồn' vào thương hiệu qua từng con chữ, hình ảnh và video ngắn.",
    stats: { salary: "8 - 30+ Triệu", growth: "+25% (Rất cao)", environment: "Hybrid / Remote" },
    techStack: [
      { name: "Viết lách (Copywriting)", icon: <PenTool size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Social Media",            icon: <Smartphone size={14} />,  color: "bg-pink-100 text-pink-700" },
      { name: "Bắt Trend",               icon: <TrendingUp size={14} />,  color: "bg-orange-100 text-orange-700" },
      { name: "Thiết kế cơ bản",         icon: <FileText size={14} />,    color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Sức mạnh của ngôn từ", description: "Chỉ thay đổi một từ trong tiêu đề quảng cáo cũng có thể làm tăng tỷ lệ click (CTR) lên đến 50%." },
      { title: "Nghề 'ăn ngủ' với mạng xã hội", description: "Lướt TikTok, Facebook, Instagram không phải là giải trí mà là 'nghiên cứu tài liệu công việc' mỗi ngày." },
    ],
    progression: [
      { level: "Content Intern/Fresher", exp: "0 - 1 năm", role: "Lên ý tưởng, viết bài đăng fanpage, kịch bản Tiktok cơ bản." },
      { level: "Senior Content Creator", exp: "2 - 4 năm", role: "Quản lý tuyến nội dung dài hạn, lên concept chiến dịch lớn." },
      { level: "Content Manager",        exp: "4+ năm",    role: "Định hướng giọng văn thương hiệu (Brand Voice), quản lý đội ngũ sáng tạo." },
    ],
    actionPlan: {
      projects: ["Tự xây dựng một kênh TikTok/Instagram cá nhân đạt 1.000 followers", "Viết blog về một chủ đề bạn đam mê"],
      interviewPrep: "Chuẩn bị Portfolio các bài viết/video đã làm, rèn luyện tư duy kể chuyện (Storytelling).",
    },
  },
  "digital-marketer": {
    title: "Digital Marketing Specialist",
    parentMajor: "Truyền Thông & Marketing",
    description: "Lên kế hoạch và chạy các chiến dịch quảng cáo trực tuyến (Google Ads, Facebook Ads, TikTok Ads). Chuyển đổi ngân sách thành doanh thu cho công ty.",
    stats: { salary: "12 - 40+ Triệu", growth: "+30% (Cực cao)", environment: "On-site / Hybrid" },
    techStack: [
      { name: "Chạy Ads",        icon: <Megaphone size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Data Analysis",   icon: <BarChart size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "SEO / SEM",       icon: <Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Tối ưu ngân sách",icon: <DollarSign size={14} />,   color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Đốt tiền hợp pháp", description: "Một Digital Marketer có thể tiêu hàng trăm triệu đến hàng tỷ đồng tiền quảng cáo mỗi tháng của công ty." },
      { title: "Chạy đua với thuật toán", description: "Marketer luôn phải thay đổi chiến lược mỗi khi Facebook hay Google cập nhật thuật toán mới." },
    ],
    progression: [
      { level: "Digital Executive", exp: "0 - 2 năm", role: "Set up chiến dịch quảng cáo, theo dõi và tối ưu chỉ số hàng ngày." },
      { level: "Performance Leader",exp: "2 - 5 năm", role: "Quản lý ngân sách lớn, tối ưu hóa tỷ lệ chuyển đổi (CRO) trên website." },
      { level: "Digital Manager",   exp: "5+ năm",    role: "Định hướng chiến lược Digital đa kênh, kết hợp với các phòng ban khác." },
    ],
    actionPlan: {
      projects: ["Học cách sử dụng Google Analytics và chạy thử một chiến dịch Facebook Ads 500k", "Thiết kế một Landing Page"],
      interviewPrep: "Nắm vững các chỉ số CPC, CPM, CTR, ROAS, CPA và cách đọc báo cáo quảng cáo.",
    },
  },
  "brand-manager": {
    title: "Brand Manager",
    parentMajor: "Truyền Thông & Marketing",
    description: "Quản lý hình ảnh và định vị thương hiệu trên thị trường. Người bảo vệ giá trị cốt lõi và đảm bảo mọi điểm chạm với khách hàng đều nhất quán.",
    stats: { salary: "25 - 80 Triệu", growth: "+15% (Ổn định)", environment: "On-site / Cường độ cao" },
    techStack: [
      { name: "Chiến lược TH",   icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Nghiên cứu TT",   icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Quản lý dự án",   icon: <Briefcase size={14} />,    color: "bg-slate-100 text-slate-700" },
      { name: "Thấu hiểu Insights",icon:<BrainCircuit size={14} />,color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Thương hiệu là cảm xúc", description: "Apple không bán điện thoại, họ bán sự đổi mới. Coca-Cola không bán nước ngọt, họ bán 'sự sảng khoái'. Đó là việc của Brand Manager." },
      { title: "Mini CEO", description: "Brand Manager thường được ví như 'Tổng giám đốc thu nhỏ' vì họ quản lý một nhãn hàng từ sản xuất, giá cả đến truyền thông." },
    ],
    progression: [
      { level: "Brand Executive", exp: "0 - 2 năm", role: "Hỗ trợ triển khai các sự kiện ra mắt sản phẩm, theo dõi doanh số." },
      { level: "Asst. Brand Manager", exp: "2 - 4 năm", role: "Quản lý các chiến dịch (Campaigns) theo quý, làm việc với Agency." },
      { level: "Brand Manager",   exp: "5+ năm",    role: "Lập kế hoạch kinh doanh và marketing dài hạn cho toàn bộ nhãn hàng." },
    ],
    actionPlan: {
      projects: ["Phân tích chiến lược thương hiệu của Biti's Hunter hoặc Vinamilk", "Đề xuất một sản phẩm mới cho một thương hiệu bạn thích"],
      interviewPrep: "Hiểu biết về Marketing Mix 4P, Brand Positioning và khả năng làm việc với con số (P&L).",
    },
  },
  "pr-specialist": {
    title: "Chuyên viên PR & Truyền thông",
    parentMajor: "Truyền Thông & Marketing",
    description: "Xây dựng mối quan hệ báo chí, xử lý khủng hoảng truyền thông và tổ chức sự kiện. Là tiếng nói đại diện bảo vệ danh tiếng cho tổ chức.",
    stats: { salary: "12 - 45 Triệu", growth: "+18% (Cao)", environment: "Linh hoạt / Hay đi lại" },
    techStack: [
      { name: "Quan hệ báo chí", icon: <HeartHandshake size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Viết thông cáo",  icon: <FileText size={14} />,     color: "bg-amber-100 text-amber-700" },
      { name: "Xử lý khủng hoảng",icon:<Shield size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Tổ chức sự kiện", icon: <Users size={14} />,        color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề 'dập lửa'", description: "Khi công ty có 'phốt', PR là đội ngũ đầu tiên phải thức trắng đêm để soạn thảo thông cáo và xoa dịu dư luận." },
      { title: "Nụ cười chuyên nghiệp", description: "Người làm PR thường sở hữu mạng lưới quan hệ khổng lồ và khả năng giao tiếp khéo léo trong mọi tình huống." },
    ],
    progression: [
      { level: "PR Executive",   exp: "0 - 2 năm", role: "Viết bài PR, liên hệ báo chí, hỗ trợ tổ chức sự kiện." },
      { level: "PR Specialist",  exp: "2 - 5 năm", role: "Lên chiến lược truyền thông, xây dựng quan hệ với KOL/Influencer." },
      { level: "PR Manager",     exp: "5+ năm",    role: "Đại diện phát ngôn cho công ty, chỉ đạo xử lý các khủng hoảng lớn." },
    ],
    actionPlan: {
      projects: ["Viết một thông cáo báo chí mô phỏng cho một sự kiện của CLB", "Lên kế hoạch mời diễn giả cho sự kiện"],
      interviewPrep: "Cập nhật tin tức thời sự liên tục, kỹ năng xử lý tình huống nhanh nhạy và viết lách chuẩn mực.",
    },
  },
  "market-researcher": {
    title: "Market Research Analyst",
    parentMajor: "Truyền Thông & Marketing",
    description: "Nghiên cứu xu hướng thị trường, phân tích đối thủ cạnh tranh và hành vi người tiêu dùng để tìm ra 'Insights' đắt giá định hướng cho toàn bộ chiến dịch Marketing.",
    stats: { salary: "15 - 50 Triệu", growth: "+20% (Cao)", environment: "On-site" },
    techStack: [
      { name: "Nghiên cứu định lượng", icon: <BarChart size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Phỏng vấn sâu",         icon: <Ear size={14} />,      color: "bg-purple-100 text-purple-700" },
      { name: "Phân tích đối thủ",     icon: <Search size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Xử lý SPSS/Excel",      icon: <PieChart size={14} />, color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nói một đằng, làm một nẻo", description: "Công việc khó nhất của người nghiên cứu thị trường là tìm ra sự thật, vì đôi khi khách hàng nói họ thích A nhưng lại bỏ tiền mua B." },
      { title: "Người đi tìm sự thật", description: "Họ đóng vai trò như những 'thám tử' thương mại, truy tìm nguyên nhân vì sao doanh số sụt giảm." },
    ],
    progression: [
      { level: "Research Assistant", exp: "0 - 2 năm", role: "Thiết kế bảng hỏi, thu thập và nhập liệu dữ liệu khảo sát." },
      { level: "Research Analyst",   exp: "2 - 5 năm", role: "Phân tích data, viết báo cáo nghiên cứu và thuyết trình cho khách hàng." },
      { level: "Research Manager",   exp: "5+ năm",    role: "Thiết kế phương pháp nghiên cứu phức tạp, đưa ra chiến lược kinh doanh." },
    ],
    actionPlan: {
      projects: ["Thực hiện một khảo sát nhỏ về thói quen uống trà sữa của sinh viên và vẽ biểu đồ", "Phân tích SWOT của một startup"],
      interviewPrep: "Ôn tập kiến thức thống kê cơ bản, Excel nâng cao và tư duy logic phản biện.",
    },
  },

  // ==========================================
  // 5. Y TẾ & ĐIỀU DƯỠNG (NURSING)
  // ==========================================
  "clinical-nurse": {
    title: "Điều dưỡng lâm sàng",
    parentMajor: "Y Tế & Điều Dưỡng",
    description: "Chăm sóc bệnh nhân nội trú, thực hiện y lệnh (tiêm, truyền) và theo dõi sát sao tình trạng sức khỏe tại bệnh viện 24/7.",
    stats: { salary: "8 - 25 Triệu", growth: "+15% (Ổn định)", environment: "Bệnh viện / Trực đêm" },
    techStack: [
      { name: "Chăm sóc y tế",   icon: <Stethoscope size={14} />,  color: "bg-blue-100 text-blue-700" },
      { name: "Thực hiện y lệnh",icon: <FileText size={14} />,     color: "bg-amber-100 text-amber-700" },
      { name: "Sơ cấp cứu",      icon: <Activity size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Giao tiếp y khoa",icon: <HeartHandshake size={14} />,color: "bg-pink-100 text-pink-700" },
    ],
    funFacts: [
      { title: "Bước chân không mỏi", description: "Một điều dưỡng viên trực tại bệnh viện lớn có thể đi bộ từ 5 đến 8 km chỉ trong một ca trực 12 tiếng." },
      { title: "Nghề của lòng bao dung", description: "Họ không chỉ chữa lành vết thương thể xác mà còn phải dỗ dành, an ủi tâm lý cho cả bệnh nhân lẫn người nhà." },
    ],
    progression: [
      { level: "Điều dưỡng viên", exp: "0 - 3 năm", role: "Chăm sóc bệnh nhân trực tiếp, thực hiện tiêm truyền, đo sinh hiệu." },
      { level: "Điều dưỡng trưởng ca",exp:"3 - 7 năm", role: "Phân công công việc trong ca, xử lý các tình huống cấp cứu phức tạp." },
      { level: "Điều dưỡng trưởng khoa",exp:"7+ năm", role: "Quản lý nhân sự toàn khoa, đào tạo và giám sát tiêu chuẩn y tế." },
    ],
    actionPlan: {
      projects: ["Tham gia khóa học sơ cấp cứu (First Aid) cơ bản", "Tình nguyện viên tại các trạm y tế hoặc chiến dịch hiến máu"],
      interviewPrep: "Nắm vững kỹ năng thực hành lâm sàng, quy tắc an toàn y tế và sức chịu đựng áp lực cao.",
    },
  },
  "community-nurse": {
    title: "Điều dưỡng cộng đồng",
    parentMajor: "Y Tế & Điều Dưỡng",
    description: "Cung cấp dịch vụ y tế, tiêm chủng và giáo dục sức khỏe cho người dân tại trạm y tế địa phương hoặc chăm sóc tại nhà.",
    stats: { salary: "7 - 20 Triệu", growth: "+10% (Ổn định)", environment: "Trạm y tế / Di chuyển" },
    techStack: [
      { name: "Giáo dục SK",     icon: <Users size={14} />,        color: "bg-green-100 text-green-700" },
      { name: "Chăm sóc tại nhà",icon: <HeartPulse size={14} />,   color: "bg-pink-100 text-pink-700" },
      { name: "Tiêm chủng",      icon: <Activity size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Phòng dịch",      icon: <Shield size={14} />,       color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Bác sĩ của xóm làng", description: "Điều dưỡng cộng đồng thường nhớ mặt, nhớ tên và biết rõ tiền sử bệnh lý của cả một khu phố tốt hơn bất kỳ bệnh viện nào." },
      { title: "Chốt chặn đầu tiên", description: "Họ là phòng tuyến đầu tiên phát hiện và ngăn chặn các đợt bùng phát dịch bệnh tại địa phương." },
    ],
    progression: [
      { level: "Nhân viên y tế phường/xã", exp: "0 - 3 năm", role: "Khám sức khỏe ban đầu, phát thuốc, tổ chức tiêm chủng cho trẻ em." },
      { level: "Chuyên viên y tế dự phòng", exp: "3 - 7 năm", role: "Thống kê y tế, theo dõi dịch tễ và lên kế hoạch phòng chống dịch." },
      { level: "Trưởng trạm y tế",   exp: "7+ năm",    role: "Quản lý toàn bộ hoạt động y tế cơ sở tại địa phương." },
    ],
    actionPlan: {
      projects: ["Tổ chức buổi truyền thông về dinh dưỡng hoặc vệ sinh phòng dịch cho trẻ em", "Tham gia các chiến dịch tiêm chủng mở rộng"],
      interviewPrep: "Hiểu biết về các chương trình y tế quốc gia, tâm lý giao tiếp với người lớn tuổi và trẻ nhỏ.",
    },
  },
  "public-health": {
    title: "Chuyên viên y tế công cộng",
    parentMajor: "Y Tế & Điều Dưỡng",
    description: "Triển khai các chương trình phòng ngừa dịch bệnh, cải thiện vệ sinh môi trường và nâng cao sức khỏe cho quy mô dân số lớn.",
    stats: { salary: "10 - 30 Triệu", growth: "+20% (Cao)", environment: "Văn phòng / Đi thực địa" },
    techStack: [
      { name: "Phân tích dịch tễ", icon: <BarChart size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Chính sách y tế",   icon: <FileText size={14} />,     color: "bg-purple-100 text-purple-700" },
      { name: "Quản lý dự án",     icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Truyền thông SK",   icon: <Megaphone size={14} />,    color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề 'phòng bệnh hơn chữa bệnh'", description: "Thay vì chữa cho 1 người bệnh, chuyên viên y tế công cộng tạo ra chính sách giúp 1.000 người không bị mắc bệnh đó." },
      { title: "Từ bàn giấy đến hiện trường", description: "Công việc có thể là ngồi phân tích biểu đồ Excel buổi sáng và chiều đi khảo sát vùng bùng phát dịch sốt xuất huyết." },
    ],
    progression: [
      { level: "Nghiên cứu viên y tế", exp: "0 - 2 năm", role: "Thu thập số liệu dịch bệnh, viết báo cáo đánh giá sức khỏe cộng đồng." },
      { level: "Điều phối viên dự án", exp: "2 - 5 năm", role: "Lên kế hoạch triển khai chiến dịch phòng chống HIV, tiểu đường, v.v." },
      { level: "Chuyên gia / Cố vấn",  exp: "5+ năm",    role: "Tư vấn chính sách cho Sở/Bộ Y tế hoặc làm việc tại các tổ chức phi chính phủ (WHO, CDC)." },
    ],
    actionPlan: {
      projects: ["Thực hiện một bài khảo sát nhỏ về nhận thức an toàn thực phẩm của sinh viên", "Đọc các báo cáo của Tổ chức Y tế Thế giới (WHO)"],
      interviewPrep: "Nắm vững kiến thức về dịch tễ học, phương pháp nghiên cứu khoa học và thống kê y tế.",
    },
  },
  "specialty-nurse": {
    title: "Điều dưỡng chuyên khoa (ICU, OR, ER)",
    parentMajor: "Y Tế & Điều Dưỡng",
    description: "Làm việc tại các khoa đặc biệt 'ngàn cân treo sợi tóc' như Hồi sức cấp cứu (ICU), Phòng mổ (OR) hay Cấp cứu (ER). Đòi hỏi tinh thần thép và kỹ năng cực cao.",
    stats: { salary: "15 - 40 Triệu", growth: "+15% (Cao)", environment: "Bệnh viện / Áp lực cực cao" },
    techStack: [
      { name: "Cấp cứu sinh tồn",icon: <HeartPulse size={14} />,   color: "bg-red-100 text-red-700" },
      { name: "Máy thở/Thiết bị",icon: <Activity size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Xử lý áp lực",    icon: <BrainCircuit size={14} />, color: "bg-orange-100 text-orange-700" },
      { name: "Kiểm soát nhiễm khuẩn",icon:<Shield size={14} />,   color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Kỹ năng 'Ninja'", description: "Trong phòng mổ, điều dưỡng dụng cụ (Scrub Nurse) có thể đoán trước bác sĩ phẫu thuật cần loại dao/kéo nào chỉ qua ánh mắt để đưa ngay lập tức." },
      { title: "Giành giật sự sống", description: "Mỗi giây trong phòng Hồi sức cấp cứu đều quý giá. Họ quen với tiếng bíp của máy monitor và phản xạ cực nhanh khi chỉ số bệnh nhân rơi tự do." },
    ],
    progression: [
      { level: "Điều dưỡng vòng ngoài", exp: "0 - 2 năm", role: "Chuẩn bị phòng bệnh, chạy vật tư, hỗ trợ điều dưỡng chính." },
      { level: "Điều dưỡng chuyên khoa",exp: "2 - 6 năm", role: "Trực tiếp đứng mổ phụ bác sĩ, vận hành hệ thống máy thở phức tạp." },
      { level: "Chuyên gia lâm sàng",   exp: "6+ năm",    role: "Đào tạo kỹ năng cấp cứu nâng cao cho nhân sự mới, quản lý rủi ro y khoa." },
    ],
    actionPlan: {
      projects: ["Đạt chứng chỉ Hồi sinh tim phổi cơ bản (CPR/BLS)", "Tham gia các khóa đào tạo kiểm soát nhiễm khuẩn"],
      interviewPrep: "Kiến thức giải phẫu sinh lý vững vàng, phản xạ nhanh và chuẩn bị tâm lý đối mặt với tình huống sinh tử.",
    },
  },
  "export-nurse": {
    title: "Điều dưỡng xuất khẩu lao động",
    parentMajor: "Y Tế & Điều Dưỡng",
    description: "Làm việc tại các bệnh viện, viện dưỡng lão ở nước ngoài (Nhật Bản, Đức, Úc, Canada) với mức thu nhập cao và cơ hội định cư.",
    stats: { salary: "40 - 100+ Triệu", growth: "+40% (Cực cao)", environment: "Nước ngoài / Viện dưỡng lão" },
    techStack: [
      { name: "Ngoại ngữ Y khoa",icon: <Ear size={14} />,          color: "bg-purple-100 text-purple-700" },
      { name: "Chăm sóc người già",icon:<Users size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Thích nghi văn hóa",icon:<Globe size={14} />,       color: "bg-green-100 text-green-700" },
      { name: "Sử dụng máy móc", icon: <Server size={14} />,       color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Thiếu hụt toàn cầu", description: "Do dân số già hóa, Nhật Bản và Đức đang thiếu hàng trăm ngàn điều dưỡng viên và sẵn sàng đài thọ toàn bộ chi phí học tiếng cho ứng viên Việt Nam." },
      { title: "Máy móc hỗ trợ tận răng", description: "Tại các viện dưỡng lão nước ngoài, điều dưỡng viên được trang bị máy nâng bệnh nhân, bồn tắm tự động để giảm tải sức lực thể chất." },
    ],
    progression: [
      { level: "Học viên/Thực tập sinh", exp: "0 - 1 năm", role: "Học ngôn ngữ (N3/N4 tiếng Nhật hoặc B1 tiếng Đức) và làm quen văn hóa." },
      { level: "Care Worker (Kaigo)",    exp: "1 - 3 năm", role: "Hỗ trợ sinh hoạt hàng ngày cho người cao tuổi, vận hành thiết bị chăm sóc." },
      { level: "Điều dưỡng quốc gia",    exp: "3+ năm",    role: "Thi lấy chứng chỉ quốc gia của nước sở tại, tăng lương gấp đôi và cơ hội định cư." },
    ],
    actionPlan: {
      projects: ["Bắt đầu học tiếng Nhật hoặc tiếng Đức ngay từ năm 1 Đại học/Cao đẳng", "Làm tình nguyện chăm sóc người cao tuổi"],
      interviewPrep: "Sự kiên nhẫn, lòng tôn trọng người lớn tuổi, tính kỷ luật cao và chứng chỉ ngoại ngữ.",
    },
  },

  // ==========================================
  // 6. KẾ TOÁN / KIỂM TOÁN (ACCOUNTING)
  // ==========================================
  "corporate-accountant": {
    title: "Kế toán viên doanh nghiệp",
    parentMajor: "Kế Toán / Kiểm Toán",
    description: "Hạch toán các nghiệp vụ kinh tế, lập báo cáo tài chính, theo dõi thu chi và làm việc với ngân hàng. Đảm bảo sổ sách công ty minh bạch, chuẩn xác đến từng đồng.",
    stats: { salary: "10 - 30 Triệu", growth: "+10% (Ổn định)", environment: "Văn phòng" },
    techStack: [
      { name: "Excel/ERP",       icon: <Calculator size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Luật Kế toán",    icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
      { name: "Kê khai Thuế",    icon: <DollarSign size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Sự tỉ mỉ",        icon: <Search size={14} />,       color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Nghề không bao giờ 'ế'", description: "Từ một quán trà sữa chuỗi đến tập đoàn đa quốc gia, 100% các doanh nghiệp khi thành lập đều bắt buộc phải có ít nhất một người làm kế toán." },
      { title: "Nỗi ám ảnh mang tên 'Lệch 1 đồng'", description: "Kế toán có thể thức đến 3 giờ sáng không phải để tìm 1 tỷ, mà để tìm xem 1 đồng bị lệch ở đâu trong bảng cân đối kế toán." },
    ],
    progression: [
      { level: "Kế toán phần hành", exp: "0 - 2 năm", role: "Làm chuyên một mảng: Kế toán kho, Kế toán công nợ, Kế toán thanh toán." },
      { level: "Kế toán tổng hợp",  exp: "2 - 5 năm", role: "Tập hợp số liệu từ các phần hành, lên Báo cáo tài chính cuối tháng/năm." },
      { level: "Kế toán trưởng",    exp: "5+ năm",    role: "Chịu trách nhiệm pháp lý về số liệu, tham mưu tài chính cho Ban Giám đốc." },
    ],
    actionPlan: {
      projects: ["Thành thạo các hàm Excel nâng cao (VLOOKUP, Pivot Table, SUMIFS)", "Học sử dụng phần mềm MISA cơ bản"],
      interviewPrep: "Nắm chắc Nguyên lý kế toán (Nợ/Có), hạch toán cơ bản và tính cẩn thận, trung thực.",
    },
  },
  "auditor": {
    title: "Kiểm toán viên (Big4 & Công ty kiểm toán)",
    parentMajor: "Kế Toán / Kiểm Toán",
    description: "Đóng vai trò 'cảnh sát tài chính', kiểm tra sổ sách của các doanh nghiệp để xác nhận Báo cáo tài chính của họ là trung thực và hợp lý cho các nhà đầu tư.",
    stats: { salary: "15 - 50+ Triệu", growth: "+15% (Cao)", environment: "Cường độ cao / Đi công tác" },
    techStack: [
      { name: "Chuẩn mực KT",     icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Kiểm tra chéo",   icon: <Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Phân tích rủi ro",icon: <Shield size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Tiếng Anh",       icon: <Users size={14} />,        color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Mùa bận (Busy Season)", description: "Từ tháng 1 đến tháng 3 hàng năm, kiểm toán viên thường xuyên làm việc 14-16 tiếng/ngày, ăn ngủ luôn tại văn phòng để kịp nộp báo cáo." },
      { title: "Bệ phóng Big4", description: "Làm việc tại Big4 (PwC, EY, Deloitte, KPMG) 3 năm sẽ giúp CV của bạn sáng giá bằng 6 năm kinh nghiệm ở các công ty thông thường." },
    ],
    progression: [
      { level: "Audit Associate", exp: "0 - 2 năm", role: "Lấy sổ phụ ngân hàng, kiểm tra chứng từ (vouching), test các phần hành nhỏ." },
      { level: "Audit Senior",    exp: "2 - 5 năm", role: "Dẫn dắt một nhóm kiểm toán (job incharge), xử lý các vấn đề tài chính phức tạp." },
      { level: "Audit Manager/Partner",exp:"5+ năm",role: "Ký báo cáo kiểm toán, phát triển mạng lưới khách hàng doanh nghiệp." },
    ],
    actionPlan: {
      projects: ["Học chứng chỉ ACCA/ICAEW ngay từ năm 2 Đại học", "Tham gia các cuộc thi học thuật về Kiểm toán (Audit Proud)"],
      interviewPrep: "Luyện thi tiếng Anh chuyên ngành, chuẩn bị cho vòng Test tư duy logic và Phỏng vấn nhóm (Group Interview).",
    },
  },
  "cfo": {
    title: "Kế toán trưởng / Giám đốc Tài chính (CFO)",
    parentMajor: "Kế Toán / Kiểm Toán",
    description: "Quản lý toàn bộ hoạt động tài chính - kế toán của công ty. Huy động vốn, quản trị rủi ro dòng tiền và đưa ra các quyết sách đầu tư sinh lời cho doanh nghiệp.",
    stats: { salary: "40 - 150+ Triệu", growth: "+10% (Cạnh tranh)", environment: "Văn phòng / Ban điều hành" },
    techStack: [
      { name: "Chiến lược vốn",  icon: <DollarSign size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Dự phóng TC",     icon: <TrendingUp size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Luật pháp",       icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
      { name: "Đàm phán",        icon: <HeartHandshake size={14} />,color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Cánh tay phải của CEO", description: "Nếu CEO là người lái xe đạp (cố gắng đạp đi tới), thì CFO là cái phanh xe (đảm bảo công ty không lao xuống vực vì cạn tiền)." },
      { title: "Quyền lực số 2", description: "Trong các tập đoàn lớn, chữ ký của Giám đốc tài chính có uy lực quyết định việc một dự án vài chục tỷ có được triển khai hay không." },
    ],
    progression: [
      { level: "Kế toán tổng hợp/Kiểm toán", exp: "0 - 5 năm", role: "Tích lũy nền tảng vững chắc về sổ sách, luật thuế và chuẩn mực kế toán." },
      { level: "Trưởng phòng Tài chính",     exp: "5 - 10 năm",role: "Lập ngân sách, tối ưu hóa chi phí và quản lý đội ngũ kế toán." },
      { level: "CFO (Chief Financial Officer)",exp: "10+ năm", role: "Thành viên ban giám đốc, chịu trách nhiệm về sức khỏe tài chính toàn tập đoàn." },
    ],
    actionPlan: {
      projects: ["Học khóa Kế toán trưởng (bắt buộc theo luật) khi đủ kinh nghiệm", "Tìm hiểu về báo cáo Quản trị (khác với báo cáo Tài chính)"],
      interviewPrep: "Tư duy vĩ mô, nhạy bén với kinh tế, kỹ năng thuyết trình số liệu trước Hội đồng quản trị.",
    },
  },
  "tax-consultant": {
    title: "Chuyên viên tư vấn thuế",
    parentMajor: "Kế Toán / Kiểm Toán",
    description: "Tư vấn cấu trúc giao dịch, lập kế hoạch thuế để tối ưu hóa nghĩa vụ nộp thuế hợp pháp cho cá nhân và tập đoàn đa quốc gia. Giải quyết các đợt thanh tra thuế.",
    stats: { salary: "15 - 60 Triệu", growth: "+20% (Cao)", environment: "On-site / Chuyên môn sâu" },
    techStack: [
      { name: "Luật Thuế",       icon: <Scale size={14} />,        color: "bg-red-100 text-red-700" },
      { name: "Tối ưu chi phí",  icon: <TrendingUp size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Chuyển giá",      icon: <Globe size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Giải trình",      icon: <FileText size={14} />,     color: "bg-amber-100 text-amber-700" },
    ],
    funFacts: [
      { title: "Ranh giới mong manh", description: "Công việc của họ là tìm ra khoảng xám hợp pháp giữa Tránh thuế (Tax Avoidance - Hợp pháp) và Trốn thuế (Tax Evasion - Phạm pháp)." },
      { title: "Luôn phải học", description: "Luật và thông tư thuế ở Việt Nam thay đổi liên tục, một chuyên gia thuế đôi khi phải cập nhật quy định mới hàng tuần." },
    ],
    progression: [
      { level: "Tax Associate",  exp: "0 - 2 năm", role: "Tính toán và nộp tờ khai thuế (VAT, PIT, CIT) hàng tháng/quý cho khách hàng." },
      { level: "Tax Consultant", exp: "2 - 5 năm", role: "Lập kế hoạch thuế, tư vấn cấu trúc nhân sự/lương thưởng để tối ưu thuế TNCN." },
      { level: "Tax Manager",    exp: "5+ năm",    role: "Đại diện doanh nghiệp giải trình trực tiếp với cơ quan Thuế trong các đợt thanh tra." },
    ],
    actionPlan: {
      projects: ["Cập nhật và đọc hiểu các Thông tư, Nghị định mới nhất về Thuế", "Lấy Chứng chỉ Hành nghề Dịch vụ làm thủ tục về Thuế"],
      interviewPrep: "Kiến thức chuyên sâu về thuế Thu nhập doanh nghiệp (CIT), thuế GTGT (VAT) và thuế thu nhập cá nhân (PIT).",
    },
  },
  "internal-controller": {
    title: "Chuyên viên kiểm soát nội bộ",
    parentMajor: "Kế Toán / Kiểm Toán",
    description: "Xây dựng hàng rào bảo vệ cho công ty từ bên trong. Thiết lập các quy trình, giám sát việc tuân thủ để phòng ngừa gian lận, thất thoát tài sản và rủi ro vận hành.",
    stats: { salary: "15 - 45 Triệu", growth: "+15% (Ổn định)", environment: "Văn phòng / Đi thanh tra" },
    techStack: [
      { name: "Phòng ngừa rủi ro",icon:<Shield size={14} />,       color: "bg-slate-100 text-slate-700" },
      { name: "Quy trình vận hành",icon:<Target size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Data Analytics",  icon: <BarChart size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Khách quan",      icon: <Scale size={14} />,        color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Thám tử doanh nghiệp", description: "Họ thường là người phát hiện ra những lỗ hổng 'chuột chạy qua được' trong các quy trình mua sắm, chấm công hoặc chi tiêu nội bộ." },
      { title: "Người không dễ dãi", description: "Vị trí này đòi hỏi cái đầu lạnh, không được vị nể tình cảm cá nhân khi phát hiện đồng nghiệp sai phạm quy định công ty." },
    ],
    progression: [
      { level: "Internal Audit Executive", exp: "0 - 2 năm", role: "Kiểm tra chứng từ ngẫu nhiên, đối chiếu quy trình thực tế với văn bản." },
      { level: "Senior Internal Auditor",  exp: "2 - 5 năm", role: "Đánh giá hiệu quả hoạt động các phòng ban, đề xuất cải tiến quy trình." },
      { level: "Trưởng Ban Kiểm Soát",     exp: "5+ năm",    role: "Báo cáo trực tiếp cho Hội đồng quản trị về các rủi ro trọng yếu của công ty." },
    ],
    actionPlan: {
      projects: ["Phân tích một quy trình đơn giản (VD: Quy trình thanh toán) và tìm điểm yếu", "Học cách viết SOP (Quy trình vận hành chuẩn)"],
      interviewPrep: "Tư duy phản biện mạnh mẽ, kiến thức về hệ thống kiểm soát nội bộ (COSO) và tính liêm chính tuyệt đối.",
    },
  },
  // ==========================================
  // 7. CÔNG NGHỆ THÔNG TIN (INFORMATION TECHNOLOGY)
  // ==========================================
  "sysadmin": {
    title: "Quản trị hệ thống / Mạng",
    parentMajor: "Công Nghệ Thông Tin",
    description: "Vận hành, cấu hình và bảo trì hệ thống máy chủ, mạng nội bộ của tổ chức. Bạn là người đảm bảo mạch máu thông tin của công ty luôn được thông suốt 24/7.",
    stats: { salary: "12 - 40 Triệu", growth: "+18% (Cao)", environment: "On-site / Trực hệ thống" },
    techStack: [
      { name: "Linux/Windows Server", icon: <Server size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Cisco/Networking",     icon: <Cloud size={14} />,      color: "bg-orange-100 text-orange-700" },
      { name: "Firewall",             icon: <Shield size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Troubleshooting",      icon: <Search size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Sợ nhất tiếng chuông báo động", description: "Ám ảnh lớn nhất của Sysadmin là tin nhắn cảnh báo 'Server Down' vào lúc 3 giờ sáng Chủ nhật." },
      { title: "Sức mạnh của dây cáp", description: "Họ có thể dành cả ngày chỉ để bấm lại đầu dây mạng hoặc đi dây cáp cho một phòng server trông như ma trận." },
    ],
    progression: [
      { level: "Junior Admin",   exp: "0 - 2 năm", role: "Cấp quyền user, reset password, cấu hình mạng LAN/Wifi cơ bản." },
      { level: "System Admin",   exp: "2 - 5 năm", role: "Quản lý máy chủ vật lý/ảo hóa, sao lưu dữ liệu, bảo trì định kỳ." },
      { level: "IT Manager",     exp: "5+ năm",    role: "Lên ngân sách mua sắm thiết bị, hoạch định chiến lược hạ tầng số." },
    ],
    actionPlan: {
      projects: ["Thực hành cài đặt Windows Server hoặc Ubuntu trên máy ảo (VMware/VirtualBox)", "Thiết lập một mạng LAN nhỏ"],
      interviewPrep: "Nắm chắc kiến thức mạng cơ bản (Mô hình OSI, TCP/IP, DNS, DHCP) và các lệnh Linux.",
    },
  },
  "cybersecurity": {
    title: "Chuyên gia an ninh mạng (Cybersecurity)",
    parentMajor: "Công Nghệ Thông Tin",
    description: "Bảo vệ hệ thống khỏi tấn công mạng, kiểm tra thâm nhập (pentest) và ứng phó sự cố. Lĩnh vực mang tính sống còn đối với các ngân hàng, tập đoàn lớn.",
    stats: { salary: "20 - 80+ Triệu", growth: "+35% (Cực cao)", environment: "Hybrid / Bảo mật cao" },
    techStack: [
      { name: "Pentesting",      icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Mã hóa (Crypto)", icon: <Lock size={14} />,         color: "bg-purple-100 text-purple-700" },
      { name: "Log Analysis",    icon: <BarChart size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Bảo mật Đám mây", icon: <Cloud size={14} />,        color: "bg-cyan-100 text-cyan-700" },
    ],
    funFacts: [
      { title: "Được thuê để phá hoại", description: "Red Team là đội ngũ được trả lương cao chỉ để tìm mọi cách hack vào hệ thống công ty nhằm tìm ra điểm yếu trước khi hacker thật ra tay." },
      { title: "Chống lại 'Người trong nhà'", description: "Một phần lớn công việc là ngăn chặn việc nhân viên nội bộ vô tình tải virus hoặc làm lộ thông tin mật." },
    ],
    progression: [
      { level: "SOC Analyst 1",  exp: "0 - 2 năm", role: "Trực màn hình giám sát, phân tích các cảnh báo mã độc 24/7." },
      { level: "Pentester",      exp: "2 - 5 năm", role: "Chủ động tấn công thử nghiệm hệ thống web/app để tìm lỗ hổng." },
      { level: "Security Arch.", exp: "5+ năm",    role: "Thiết kế kiến trúc bảo mật tổng thể, chịu trách nhiệm khi có sự cố lớn." },
    ],
    actionPlan: {
      projects: ["Chơi các bài lab trên TryHackMe hoặc HackTheBox", "Tìm hiểu về lỗ hổng OWASP Top 10"],
      interviewPrep: "Kiến thức về Network Security, cách đọc hiểu Log và xử lý khi bị nhiễm Ransomware.",
    },
  },
  "dba": {
    title: "Database Administrator (DBA)",
    parentMajor: "Công Nghệ Thông Tin",
    description: "Người gác đền của dữ liệu. Quản lý, sao lưu, phục hồi và tối ưu hóa tốc độ truy xuất của cơ sở dữ liệu cho doanh nghiệp.",
    stats: { salary: "18 - 50 Triệu", growth: "+20% (Cao)", environment: "On-site / Remote" },
    techStack: [
      { name: "SQL/NoSQL",       icon: <Database size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Tối ưu Query",    icon: <Zap size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Data Backup",     icon: <Server size={14} />,       color: "bg-green-100 text-green-700" },
      { name: "Bảo mật Data",    icon: <Lock size={14} />,         color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Người nắm sinh mệnh công ty", description: "Nếu DBA lỡ tay xóa nhầm một bảng dữ liệu mà không có bản backup, công ty có thể thiệt hại hàng triệu USD chỉ trong 1 giây." },
      { title: "Kỹ năng 'Tuning'", description: "Chỉ bằng cách thêm một cái Index nhỏ, DBA có thể làm một báo cáo load từ 30 phút xuống còn 3 giây." },
    ],
    progression: [
      { level: "Junior DBA",     exp: "0 - 2 năm", role: "Cấp quyền truy cập, hỗ trợ chạy các câu lệnh SQL ban đêm, theo dõi backup." },
      { level: "Database Admin", exp: "2 - 5 năm", role: "Tối ưu hóa performance, giải quyết các vụ kẹt dữ liệu (deadlock)." },
      { level: "Data Architect", exp: "5+ năm",    role: "Thiết kế mô hình dữ liệu cho các ứng dụng siêu lớn, chịu tải hàng triệu user." },
    ],
    actionPlan: {
      projects: ["Cài đặt và thiết kế một CSDL bằng MySQL hoặc PostgreSQL", "Học cách viết các câu lệnh JOIN phức tạp"],
      interviewPrep: "Hiểu sâu về cấu trúc lưu trữ dữ liệu, Transaction, Indexing và phương án Disaster Recovery.",
    },
  },
  "it-support": {
    title: "IT Support / Helpdesk",
    parentMajor: "Công Nghệ Thông Tin",
    description: "Hỗ trợ kỹ thuật người dùng cuối, xử lý sự cố phần cứng, phần mềm và máy in. Đây là bộ mặt của phòng IT đối với toàn bộ nhân viên công ty.",
    stats: { salary: "8 - 20 Triệu", growth: "+10% (Ổn định)", environment: "On-site / Hỗ trợ người dùng" },
    techStack: [
      { name: "Xử lý sự cố",     icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Cài đặt HĐH",     icon: <Settings size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Dịch vụ KH",      icon: <HeartHandshake size={14} />,color: "bg-pink-100 text-pink-700" },
      { name: "Bảo trì thiết bị",icon: <Hammer size={14} />,       color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Câu thần chú", description: "'Anh/chị đã thử tắt máy và khởi động lại chưa?' là câu nói giải quyết được 50% số lượng ca báo lỗi." },
      { title: "Bác sĩ máy tính", description: "Họ phải sửa đủ thứ từ máy in kẹt giấy, quên mật khẩu wifi đến việc máy tính nhân sự bị đổ nước trà lên bàn phím." },
    ],
    progression: [
      { level: "IT Helpdesk L1", exp: "0 - 2 năm", role: "Tiếp nhận điện thoại, giải quyết các lỗi phần mềm/máy in đơn giản." },
      { level: "IT Support L2",  exp: "2 - 4 năm", role: "Hỗ trợ cài đặt phần mềm chuyên dụng, kiểm tra lỗi mạng LAN/phần cứng." },
      { level: "Support Manager",exp: "4+ năm",    role: "Quản lý đội ngũ Support, quản lý tài sản thiết bị IT của toàn công ty." },
    ],
    actionPlan: {
      projects: ["Tự cài đặt lại Windows/MacOS và tìm hiểu cách dùng TeamViewer/AnyDesk", "Sửa chữa PC cũ"],
      interviewPrep: "Kỹ năng giao tiếp kiên nhẫn, kiến thức phần cứng máy tính và cấu hình mạng cơ bản.",
    },
  },
  "cloud-architect": {
    title: "Cloud Solutions Architect",
    parentMajor: "Công Nghệ Thông Tin",
    description: "Thiết kế và triển khai kiến trúc hệ thống trên nền tảng đám mây (AWS, Azure, GCP). Tối ưu hóa chi phí và đảm bảo hệ thống có khả năng mở rộng không giới hạn.",
    stats: { salary: "40 - 100+ Triệu", growth: "+35% (Rất cao)", environment: "Hybrid / Remote" },
    techStack: [
      { name: "AWS/GCP/Azure",   icon: <Cloud size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Microservices",   icon: <Layers size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Tối ưu chi phí",  icon: <TrendingUp size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Bảo mật",         icon: <Shield size={14} />,       color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Kiến trúc sư tàng hình", description: "Họ xây dựng những 'tòa nhà' khổng lồ nhưng không ai nhìn thấy bằng mắt thật, vì tất cả đều nằm trên các trung tâm dữ liệu Đám mây." },
      { title: "Kẻ tiết kiệm tiền tỷ", description: "Bằng việc tối ưu lại kiến trúc Cloud, họ có thể giúp công ty tiết kiệm hàng tỷ đồng tiền thuê server mỗi tháng." },
    ],
    progression: [
      { level: "Cloud Engineer", exp: "0 - 3 năm", role: "Triển khai dịch vụ cloud, cấu hình server và load balancer cơ bản." },
      { level: "Cloud Architect",exp: "3 - 7 năm", role: "Thiết kế kiến trúc hệ thống, lên kế hoạch chuyển đổi (migrate) lên Cloud." },
      { level: "Principal Arch.",exp: "7+ năm",    role: "Định hướng chiến lược Cloud cho các tập đoàn tài chính, đa quốc gia." },
    ],
    actionPlan: {
      projects: ["Tạo tài khoản AWS Free Tier và host một trang web tĩnh trên S3", "Lấy chứng chỉ AWS Cloud Practitioner"],
      interviewPrep: "Khái niệm về IaaS, PaaS, SaaS, kiến thức về High Availability và khả năng vẽ sơ đồ hệ thống.",
    },
  },

  // ==========================================
  // 8. KỸ THUẬT HÓA HỌC (CHEMICAL ENGINEERING)
  // ==========================================
  "rnd-engineer": {
    title: "Kỹ sư nghiên cứu & Phát triển (R&D)",
    parentMajor: "Kỹ Thuật Hóa Học / Kỹ Sư Hóa",
    description: "Nghiên cứu công thức, cải tiến và phát triển sản phẩm mới trong các ngành mỹ phẩm, thực phẩm, dược phẩm hoặc vật liệu công nghiệp.",
    stats: { salary: "12 - 45 Triệu", growth: "+15% (Ổn định)", environment: "Phòng Lab / Nhà máy" },
    techStack: [
      { name: "Nghiên cứu Hóa học",icon: <FlaskConical size={14} />,color: "bg-purple-100 text-purple-700" },
      { name: "Sáng tạo công thức",icon: <BrainCircuit size={14} />, color: "bg-orange-100 text-orange-700" },
      { name: "Phân tích mẫu",     icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Thử nghiệm",        icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Bí mật công thức", description: "Công thức của Coca-Cola hay nước mắm Chinsu đều là những bí mật thương mại được bảo vệ nghiêm ngặt nhất do team R&D nắm giữ." },
      { title: "Trăm lần thất bại", description: "Để tạo ra một màu son mới bền màu hay một loại kem chống nắng không bết dính, kỹ sư R&D có thể phải thử nghiệm tới hàng trăm lần." },
    ],
    progression: [
      { level: "R&D Staff",      exp: "0 - 2 năm", role: "Pha chế mẫu thử theo công thức có sẵn, ghi chép phản ứng trong Lab." },
      { level: "R&D Engineer",   exp: "2 - 5 năm", role: "Trực tiếp điều chỉnh công thức, phối hợp với team Marketing để ra sản phẩm mới." },
      { level: "R&D Manager",    exp: "5+ năm",    role: "Định hướng chiến lược phát triển sản phẩm, quản lý ngân sách nghiên cứu." },
    ],
    actionPlan: {
      projects: ["Tự làm một số sản phẩm hóa mỹ phẩm handmade (VD: Nước rửa tay, nến thơm)", "Tham gia nghiên cứu khoa học tại trường"],
      interviewPrep: "Nắm vững hóa phân tích, hóa hữu cơ, tính cẩn thận cực cao và kỹ năng đọc tài liệu chuyên ngành.",
    },
  },
  "qc-engineer": {
    title: "Kỹ sư kiểm soát chất lượng (QC/QA)",
    parentMajor: "Kỹ Thuật Hóa Học / Kỹ Sư Hóa",
    description: "Kiểm tra, đảm bảo chất lượng nguyên liệu đầu vào và thành phẩm đầu ra đạt tiêu chuẩn quy định (ISO, GMP) trước khi đến tay người tiêu dùng.",
    stats: { salary: "10 - 30 Triệu", growth: "+10% (Ổn định)", environment: "Nhà máy / Phòng Lab" },
    techStack: [
      { name: "Quy chuẩn (ISO)", icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Thiết bị đo lường",icon:<Scale size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Kiểm tra mẫu",    icon: <CheckCircle size={14} />,  color: "bg-green-100 text-green-700" },
      { name: "Viết báo cáo",    icon: <BarChart size={14} />,     color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Người bắt lỗi", description: "Họ là chốt chặn cuối cùng. Nếu một lô sữa bị chua hoặc một mẻ thuốc kém chất lượng lọt ra thị trường, QC là người đầu tiên phải chịu trách nhiệm." },
      { title: "Cực kỳ nguyên tắc", description: "Trong nghề này, 99.9% vẫn bị coi là thất bại. Mọi thứ phải tuân thủ chuẩn xác 100% theo quy định." },
    ],
    progression: [
      { level: "Nhân viên QC",   exp: "0 - 2 năm", role: "Lấy mẫu tại dây chuyền, chạy các bài test hóa lý/vi sinh cơ bản." },
      { level: "Chuyên viên QA", exp: "2 - 5 năm", role: "Xây dựng quy trình kiểm soát, đánh giá nhà cung cấp, kiểm tra hồ sơ." },
      { level: "QA/QC Manager",  exp: "5+ năm",    role: "Tiếp đón các đoàn thanh tra, chịu trách nhiệm pháp lý về chất lượng SP." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu về tiêu chuẩn ISO 9001 và GMP", "Học cách sử dụng các thiết bị đo lường trong phòng thí nghiệm"],
      interviewPrep: "Kiến thức về phân tích hóa học, chuẩn mực kiểm định và tính cách trung thực, nguyên tắc.",
    },
  },
  "process-engineer": {
    title: "Kỹ sư vận hành dây chuyền sản xuất",
    parentMajor: "Kỹ Thuật Hóa Học / Kỹ Sư Hóa",
    description: "Giám sát, vận hành và tối ưu hóa quy trình sản xuất của các nhà máy hóa chất, thực phẩm, dầu khí... ở quy mô công nghiệp (Scale-up).",
    stats: { salary: "15 - 40 Triệu", growth: "+12% (Ổn định)", environment: "Nhà máy sản xuất" },
    techStack: [
      { name: "Vận hành máy",    icon: <Settings size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Tối ưu sản xuất", icon: <TrendingUp size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Truyền nhiệt/chất",icon:<Server size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Quản lý công nhân",icon:<Users size={14} />,        color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Sự khác biệt về quy mô", description: "R&D làm thí nghiệm trong cái cốc 100ml, nhưng Process Engineer phải làm sao để nấu được hỗn hợp đó trong cái bồn chứa 10.000 lít mà chất lượng không đổi." },
      { title: "Làm việc theo ca", description: "Các nhà máy hóa chất thường hoạt động liên tục 24/7, nên kỹ sư vận hành thường phải trực ca đêm." },
    ],
    progression: [
      { level: "Kỹ sư giám sát", exp: "0 - 2 năm", role: "Giám sát thông số máy móc (nhiệt độ, áp suất), điều phối công nhân." },
      { level: "Kỹ sư công nghệ",exp: "2 - 5 năm", role: "Tính toán cải tiến dây chuyền, giảm tiêu hao năng lượng và nguyên liệu." },
      { level: "Quản đốc nhà máy",exp: "5+ năm",   role: "Quản lý toàn bộ quy trình sản xuất, an toàn và tiến độ của nhà máy." },
    ],
    actionPlan: {
      projects: ["Ôn tập kỹ các môn Truyền khối, Truyền nhiệt và Kỹ thuật phản ứng", "Học AutoCAD hoặc phần mềm mô phỏng (HYSYS)"],
      interviewPrep: "Hiểu biết về an toàn lao động, sơ đồ công nghệ P&ID và khả năng chịu áp lực tiếng ồn nhà máy.",
    },
  },
  "hse-specialist": {
    title: "Chuyên viên an toàn môi trường (HSE)",
    parentMajor: "Kỹ Thuật Hóa Học / Kỹ Sư Hóa",
    description: "Đảm bảo các hoạt động của nhà máy tuân thủ nghiêm ngặt tiêu chuẩn an toàn lao động, phòng cháy chữa cháy và bảo vệ môi trường sinh thái.",
    stats: { salary: "12 - 35 Triệu", growth: "+15% (Ổn định)", environment: "Nhà máy / Hiện trường" },
    techStack: [
      { name: "An toàn lao động",icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Xử lý môi trường",icon: <Leaf size={14} />,         color: "bg-green-100 text-green-700" },
      { name: "Đánh giá rủi ro", icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Luật pháp",       icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Người hay bị ghét nhất nhà máy", description: "HSE thường bị công nhân 'né' vì họ luôn khắt khe bắt ép mọi người phải đội mũ, đeo kính, mặc đồ bảo hộ và tuân thủ nguyên tắc." },
      { title: "Quyền lực tối thượng", description: "Chuyên viên HSE có quyền yêu cầu đình chỉ ngay lập tức một dây chuyền sản xuất nếu phát hiện nguy cơ cháy nổ." },
    ],
    progression: [
      { level: "Giám sát HSE",   exp: "0 - 2 năm", role: "Tuần tra hiện trường, nhắc nhở công nhân, kiểm tra bình cứu hỏa." },
      { level: "Chuyên viên HSE",exp: "2 - 5 năm", role: "Lập kế hoạch ứng phó sự cố, xử lý hồ sơ đánh giá tác động môi trường." },
      { level: "HSE Manager",    exp: "5+ năm",    role: "Xây dựng văn hóa an toàn toàn công ty, làm việc với các cơ quan thanh tra nhà nước." },
    ],
    actionPlan: {
      projects: ["Tham gia chứng chỉ An toàn lao động (Nhóm 1,2,3...)", "Tìm hiểu về ISO 14001 (Môi trường) và ISO 45001 (An toàn)"],
      interviewPrep: "Nắm luật Bảo vệ môi trường, cách sơ cấp cứu, PCCC và kỹ năng xử lý tình huống cứng rắn.",
    },
  },
  "renewable-energy": {
    title: "Kỹ sư năng lượng tái tạo",
    parentMajor: "Kỹ Thuật Hóa Học / Kỹ Sư Hóa",
    description: "Nghiên cứu ứng dụng vật liệu hóa học cho pin năng lượng mặt trời, pin Lithium-ion cho xe điện hoặc công nghệ nhiên liệu sinh học (Biofuels).",
    stats: { salary: "15 - 50 Triệu", growth: "+40% (Cực cao)", environment: "R&D / Hiện trường dự án" },
    techStack: [
      { name: "Công nghệ Pin",   icon: <Battery size={14} />,      color: "bg-green-100 text-green-700" },
      { name: "Hóa điện",        icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
      { name: "Năng lượng sạch", icon: <Sun size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Vật liệu mới",    icon: <FlaskConical size={14} />, color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Tương lai của nhân loại", description: "Phát triển pin xe điện sạc nhanh hơn, chứa nhiều điện hơn và an toàn hơn là bài toán giá trị hàng tỷ USD hiện nay." },
      { title: "Xăng từ thực vật", description: "Họ nghiên cứu cách biến mỡ cá, dầu ăn thừa, hoặc phế phẩm nông nghiệp thành nhiên liệu (Biodiesel) chạy máy phát điện." },
    ],
    progression: [
      { level: "Kỹ sư dự án",    exp: "0 - 2 năm", role: "Hỗ trợ lắp đặt hệ thống năng lượng, phân tích hiệu suất lưu trữ pin." },
      { level: "Kỹ sư thiết kế", exp: "2 - 5 năm", role: "Thiết kế hệ thống công nghệ, tối ưu hóa vật liệu trong sản xuất pin." },
      { level: "Chuyên gia NL",  exp: "5+ năm",    role: "Lãnh đạo dự án năng lượng tái tạo quy mô lớn (điện mặt trời, điện sinh khối)." },
    ],
    actionPlan: {
      projects: ["Nghiên cứu nguyên lý hoạt động của Pin Lithium-ion", "Làm mô hình năng lượng mặt trời nhỏ"],
      interviewPrep: "Kiến thức về hóa lý, điện hóa, và xu hướng chuyển dịch năng lượng xanh toàn cầu.",
    },
  },

  // ==========================================
  // 9. KIẾN TRÚC & THIẾT KẾ (ARCHITECTURE)
  // ==========================================
  "design-architect": {
    title: "Kiến trúc sư thiết kế",
    parentMajor: "Kiến Trúc & Thiết Kế",
    description: "Lên ý tưởng, quy hoạch không gian và thiết kế hình khối công trình (nhà ở, biệt thự, tòa nhà thương mại) đảm bảo tính thẩm mỹ, công năng và kỹ thuật.",
    stats: { salary: "12 - 50 Triệu", growth: "+12% (Ổn định)", environment: "Văn phòng / Studio sáng tạo" },
    techStack: [
      { name: "Sáng tạo ý tưởng",icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Vẽ phác thảo",    icon: <PenTool size={14} />,      color: "bg-amber-100 text-amber-700" },
      { name: "Quy chuẩn XD",    icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Thiết kế mặt bằng",icon:<Home size={14} />,         color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Nghề thức đêm", description: "Chạy deadline xuyên đêm là 'đặc sản' của sinh viên và người đi làm ngành kiến trúc để hoàn thành các đồ án, bản vẽ." },
      { title: "Bị giới hạn bởi trọng lực", description: "Kiến trúc sư bay bổng với ý tưởng, nhưng cuối cùng vẫn phải thỏa hiệp với Kỹ sư kết cấu để ngôi nhà không bị sập." },
    ],
    progression: [
      { level: "Họa viên/KTS trẻ", exp: "0 - 3 năm", role: "Vẽ triển khai chi tiết 2D, dựng mô hình 3D dưới sự chỉ đạo của KTS chính." },
      { level: "KTS Chủ trì",     exp: "3 - 7 năm", role: "Đưa ra concept thiết kế, giải quyết công năng và làm việc trực tiếp với khách hàng." },
      { level: "Mở Văn phòng/Studio",exp:"7+ năm",  role: "Tự nhận thầu dự án, xây dựng thương hiệu cá nhân trong ngành kiến trúc." },
    ],
    actionPlan: {
      projects: ["Thực hành vẽ tay (sketch) hàng ngày", "Xây dựng Portfolio tập hợp các đồ án môn học đẹp nhất"],
      interviewPrep: "Gu thẩm mỹ tốt, nắm rõ tỷ lệ không gian, công thái học và sử dụng thành thạo phần mềm.",
    },
  },
  "interior-architect": {
    title: "Kiến trúc sư nội thất",
    parentMajor: "Kiến Trúc & Thiết Kế",
    description: "Biến vỏ bọc thô cứng của công trình thành một không gian sống, làm việc đẹp mắt, tiện nghi và phản ánh đúng cá tính của gia chủ.",
    stats: { salary: "10 - 45 Triệu", growth: "+18% (Cao)", environment: "Văn phòng / Showroom / Xưởng" },
    techStack: [
      { name: "Bố trí không gian",icon:<Layers size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Vật liệu & Màu",  icon: <Palette size={14} />,      color: "bg-pink-100 text-pink-700" },
      { name: "Diễn họa 3D",     icon: <Monitor size={14} />,      color: "bg-slate-100 text-slate-700" },
      { name: "Làm việc khách hàng",icon:<HeartHandshake size={14}/>,color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Không chỉ là chọn sofa", description: "Thiết kế nội thất liên quan đến cả việc tính toán ánh sáng, đường ống nước, điện thông minh và kỹ thuật gỗ." },
      { title: "Bậc thầy tâm lý", description: "Họ phải đọc vị sở thích của khách hàng, thậm chí là làm chuyên gia gỡ rối khi hai vợ chồng khách bất đồng quan điểm thiết kế." },
    ],
    progression: [
      { level: "Junior Designer", exp: "0 - 2 năm", role: "Bổ kỹ thuật đồ gỗ nội thất, render 3D phối cảnh." },
      { level: "Senior Designer", exp: "2 - 5 năm", role: "Lên concept phong cách, chỉ định vật liệu, bóc tách dự toán." },
      { level: "Art Director",    exp: "5+ năm",    role: "Chỉ đạo nghệ thuật cho các dự án khách sạn, nhà hàng cao cấp." },
    ],
    actionPlan: {
      projects: ["Sưu tầm vật liệu và phân tích các phong cách (Japandi, Wabi-sabi, Modern)", "Thiết kế lại chính căn phòng của mình trên SketchUp"],
      interviewPrep: "Hiểu biết về quy cách gỗ công nghiệp, ánh sáng, màu sắc và kỹ năng render 3D chân thực.",
    },
  },
  "bim-engineer": {
    title: "Kỹ sư BIM (Building Information Modeling)",
    parentMajor: "Kiến Trúc & Thiết Kế",
    description: "Xây dựng mô hình 3D thông minh cho công trình. Mô hình này không chỉ có hình khối mà còn chứa dữ liệu về vật liệu, kết cấu, đường ống điện nước để tối ưu hóa quá trình xây dựng.",
    stats: { salary: "15 - 40 Triệu", growth: "+30% (Rất cao)", environment: "Văn phòng dự án" },
    techStack: [
      { name: "Revit/Navisworks",icon:<Box size={14} />,           color: "bg-blue-100 text-blue-700" },
      { name: "Quản lý dữ liệu", icon: <Database size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Kiểm tra xung đột",icon:<Layers size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Dynamo (Code)",   icon: <Code size={14} />,         color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Xây nhà trên máy tính", description: "BIM Engineer thực chất là xây dựng hoàn chỉnh tòa nhà trên máy tính để phát hiện lỗi trước khi đổ mẻ bê tông đầu tiên ngoài đời thực." },
      { title: "Giải cứu đụng độ", description: "Nhờ BIM, họ phát hiện ra đường ống nước đâm xuyên qua hệ thống thông gió và sửa lỗi trên máy tính, thay vì phải đập tường ngoài công trường." },
    ],
    progression: [
      { level: "BIM Modeler",    exp: "0 - 2 năm", role: "Dựng mô hình 3D từ các bản vẽ CAD 2D, gắn thông tin vật liệu cơ bản." },
      { level: "BIM Coordinator",exp: "2 - 5 năm", role: "Ghép nối mô hình Kiến trúc - Kết cấu - Cơ điện, phát hiện và xử lý xung đột." },
      { level: "BIM Manager",    exp: "5+ năm",    role: "Thiết lập tiêu chuẩn BIM cho toàn dự án, quản lý luồng dữ liệu của các nhà thầu." },
    ],
    actionPlan: {
      projects: ["Thành thạo phần mềm Autodesk Revit Architecture/MEP", "Tìm hiểu khái niệm LOD (Level of Development)"],
      interviewPrep: "Kỹ năng phần mềm BIM xuất sắc, tư duy không gian 3D tốt và khả năng đọc hiểu đa chuyên ngành (Kiến trúc + Cơ điện).",
    },
  },
  "urban-planner": {
    title: "Chuyên gia quy hoạch đô thị",
    parentMajor: "Kiến Trúc & Thiết Kế",
    description: "Lập kế hoạch phát triển không gian quy mô lớn: một khu dân cư, một quận hay cả một thành phố. Đảm bảo giao thông thuận tiện, cảnh quan xanh và phát triển bền vững.",
    stats: { salary: "15 - 50 Triệu", growth: "+10% (Ổn định)", environment: "Viện quy hoạch / CĐT lớn" },
    techStack: [
      { name: "Tư duy vĩ mô",    icon: <Map size={14} />,          color: "bg-green-100 text-green-700" },
      { name: "Phân tích GIS",   icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Luật Quy hoạch",  icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
      { name: "Kinh tế Đô thị",  icon: <TrendingUp size={14} />,   color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Chơi SimCity ngoài đời thực", description: "Họ quyết định đặt công viên ở đâu, khu thương mại nằm chỗ nào, đường sá rộng bao nhiêu để chống kẹt xe ngập nước." },
      { title: "Tác phẩm để đời", description: "Mất từ 5 đến 20 năm để một bản đồ quy hoạch 1/500 trở thành một khu đô thị thực sự." },
    ],
    progression: [
      { level: "Chuyên viên quy hoạch", exp: "0 - 3 năm", role: "Thu thập số liệu địa hình, vẽ ranh giới, hỗ trợ làm hồ sơ quy hoạch." },
      { level: "Chủ trì đồ án",  exp: "3 - 8 năm", role: "Đề xuất phương án không gian kiến trúc cảnh quan, thuyết minh bảo vệ đồ án." },
      { level: "Cố vấn chiến lược",exp: "8+ năm",  role: "Tư vấn chính sách phát triển thành phố, làm việc với các cơ quan Chính phủ." },
    ],
    actionPlan: {
      projects: ["Nghiên cứu nguyên nhân ngập lụt hoặc kẹt xe tại địa phương bạn sống", "Học phần mềm AutoCAD Map 3D hoặc ArcGIS"],
      interviewPrep: "Kiến thức tổng hợp về địa lý, kinh tế, xã hội học đô thị và kỹ năng vẽ quy hoạch.",
    },
  },
  "construction-supervisor": {
    title: "Giám sát thi công & Quản lý dự án",
    parentMajor: "Kiến Trúc & Thiết Kế",
    description: "Người trực tiếp 'đội mũ cối' ngoài công trường. Kiểm tra chất lượng thi công, quản lý tiến độ vật tư và đảm bảo công trình xây đúng 100% so với bản vẽ thiết kế.",
    stats: { salary: "12 - 40 Triệu", growth: "+15% (Cao)", environment: "Công trường / Khắc nghiệt" },
    techStack: [
      { name: "Đọc bản vẽ",      icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Kiểm tra chất lượng",icon:<CheckCircle size={14} />,color: "bg-green-100 text-green-700" },
      { name: "An toàn LĐ",      icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Xử lý hiện trường",icon:<Hammer size={14} />,       color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Da đen, giọng to", description: "Làm việc dưới nắng gió công trường, kỹ sư giám sát thường có làn da sạm nắng và phải nói rất to để lấn át tiếng máy móc." },
      { title: "Bắt lỗi thầu phụ", description: "Họ phải có con mắt tinh đời để phát hiện thợ xây ốp gạch bị lệch, trộn sai tỷ lệ xi măng hay đi sai đường dây điện." },
    ],
    progression: [
      { level: "Giám sát hiện trường", exp: "0 - 3 năm", role: "Theo dõi trực tiếp công nhân thi công, nghiệm thu từng hạng mục nhỏ." },
      { level: "Chỉ huy phó / QS",     exp: "3 - 6 năm", role: "Lên kế hoạch gọi vật tư, điều phối nhà thầu phụ, thanh quyết toán." },
      { level: "Chỉ huy trưởng",       exp: "6+ năm",    role: "Quản lý toàn bộ ngân sách, chất lượng và an toàn của cả công trường." },
    ],
    actionPlan: {
      projects: ["Xin đi thực tập tại các công trình dân dụng nhỏ (nhà phố, biệt thự) để lấy kinh nghiệm thực tế", "Học bóc tách khối lượng dự toán"],
      interviewPrep: "Khả năng chịu áp lực cao, sức khỏe tốt, nắm chắc biện pháp thi công và tiêu chuẩn nghiệm thu.",
    },
  },
  // ==========================================
  // 10. GIÁO DỤC & SƯ PHẠM (EDUCATION)
  // ==========================================
  "teacher": {
    title: "Giáo viên phổ thông / Đại học",
    parentMajor: "Giáo Dục & Sư Phạm",
    description: "Giảng dạy kiến thức chuyên môn, thiết kế bài giảng và hướng dẫn học sinh/sinh viên phát triển toàn diện cả về trí tuệ lẫn nhân cách.",
    stats: { salary: "8 - 25 Triệu", growth: "+10% (Ổn định)", environment: "Trường học / Môi trường sư phạm" },
    techStack: [
      { name: "Sư phạm",         icon: <BookOpen size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Tâm lý học sinh", icon: <Users size={14} />,        color: "bg-purple-100 text-purple-700" },
      { name: "Trình bày",       icon: <Monitor size={14} />,      color: "bg-orange-100 text-orange-700" },
      { name: "Đánh giá KQ",     icon: <CheckCircle size={14} />,  color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề ảnh hưởng nhất", description: "Một giáo viên trung bình sẽ tương tác và để lại sức ảnh hưởng lên hơn 3.000 học sinh trong suốt cuộc đời làm nghề của họ." },
      { title: "Học tập suốt đời", description: "Giáo viên là những người học nhiều nhất. Họ liên tục phải cập nhật giáo án và phương pháp giảng dạy để không bị 'tối cổ' trước học sinh." },
    ],
    progression: [
      { level: "Giáo viên tập sự", exp: "0 - 2 năm", role: "Soạn giáo án, trợ giảng, làm quen với công tác chủ nhiệm lớp." },
      { level: "Giáo viên bộ môn", exp: "2 - 10 năm",role: "Giảng dạy chính thức, bồi dưỡng học sinh giỏi, nghiên cứu cải tiến bài giảng." },
      { level: "Giáo viên cốt cán",exp: "10+ năm",   role: "Tổ trưởng bộ môn, hướng dẫn giáo viên trẻ và tham gia biên soạn sách." },
    ],
    actionPlan: {
      projects: ["Thử gia sư 1-1 cho các em nhỏ hoặc bạn bè", "Thiết kế một bộ slide PowerPoint bài giảng sáng tạo"],
      interviewPrep: "Rèn luyện phong thái tự tin, giọng nói truyền cảm và cách xử lý tình huống sư phạm (học sinh quậy phá, phụ huynh khó tính).",
    },
  },
  "language-teacher": {
    title: "Giáo viên trung tâm ngoại ngữ / kỹ năng",
    parentMajor: "Giáo Dục & Sư Phạm",
    description: "Giảng dạy ngoại ngữ (IELTS, TOEIC, Giao tiếp) hoặc kỹ năng mềm tại các trung tâm giáo dục tư nhân. Môi trường năng động và thu nhập linh hoạt theo năng lực.",
    stats: { salary: "15 - 40+ Triệu", growth: "+20% (Cao)", environment: "Trung tâm tư nhân / Buổi tối" },
    techStack: [
      { name: "Ngoại ngữ giỏi",  icon: <Globe size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Khuấy động lớp",  icon: <Zap size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Chữa bài",        icon: <PenTool size={14} />,      color: "bg-pink-100 text-pink-700" },
      { name: "Tâm lý khách hàng",icon:<HeartHandshake size={14}/>,color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề làm đêm", description: "Vì học viên thường là người đi học/đi làm, giáo viên trung tâm thường có giờ làm việc 'ngược đời' từ 5h chiều đến 10h tối." },
      { title: "Thu nhập 'khủng' từ IELTS", description: "Giáo viên dạy IELTS giỏi có thể kiếm 40-80 triệu/tháng nhờ việc dạy kín lịch và mở lớp tự do." },
    ],
    progression: [
      { level: "Teaching Assistant", exp: "0 - 1 năm", role: "Trợ giảng, điểm danh, chấm bài tập về nhà và hỗ trợ giáo viên chính." },
      { level: "Giáo viên chính",    exp: "1 - 4 năm", role: "Trực tiếp đứng lớp, đảm bảo tỷ lệ học viên đạt target điểm số (KPI)." },
      { level: "Trưởng nhóm/Academic",exp:"4+ năm",    role: "Đào tạo giáo viên mới, thiết kế chương trình học (Curriculum) cho trung tâm." },
    ],
    actionPlan: {
      projects: ["Tự quay video chia sẻ mẹo học tiếng Anh đăng Tiktok/Youtube", "Thi lấy chứng chỉ IELTS/TOEIC điểm cao"],
      interviewPrep: "Chuẩn bị một bài dạy thử (Demo class) thật cuốn hút, phát âm chuẩn và kỹ năng quản lý năng lượng lớp học.",
    },
  },
  "instructional-designer": {
    title: "Chuyên viên thiết kế chương trình (Instructional Designer)",
    parentMajor: "Giáo Dục & Sư Phạm",
    description: "Kỹ sư của giáo dục. Áp dụng công nghệ và tâm lý học để thiết kế các khóa học trực tuyến (E-learning), học liệu số sao cho học viên dễ tiếp thu nhất.",
    stats: { salary: "15 - 35 Triệu", growth: "+30% (Rất cao)", environment: "Văn phòng / EdTech" },
    techStack: [
      { name: "Cấu trúc hóa KT", icon: <Layers size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Storyboarding",   icon: <FileText size={14} />,     color: "bg-amber-100 text-amber-700" },
      { name: "Công cụ E-learning",icon:<Monitor size={14} />,     color: "bg-purple-100 text-purple-700" },
      { name: "Tâm lý nhận thức",icon:<BrainCircuit size={14} />,  color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Học giấu mặt", description: "ID là người đứng sau những khóa học triệu view trên Coursera hay Udemy, quyết định phút thứ mấy có video, phút thứ mấy có câu hỏi trắc nghiệm." },
      { title: "Gamification", description: "Họ biến bài học khô khan thành một trò chơi (cộng điểm, thăng cấp) để giữ chân học viên không bấm nút 'Thoát'." },
    ],
    progression: [
      { level: "Nhân viên học liệu", exp: "0 - 2 năm", role: "Biết sử dụng phần mềm tạo bài giảng (Articulate, Storyline), cắt ghép video." },
      { level: "Instructional Designer",exp:"2 - 5 năm", role: "Lên kịch bản chi tiết, phối hợp với chuyên gia (SME) để cấu trúc hóa kiến thức." },
      { level: "EdTech Manager",     exp: "5+ năm",    role: "Định hướng nền tảng học tập công nghệ cho toàn bộ doanh nghiệp/trường đại học." },
    ],
    actionPlan: {
      projects: ["Biến một bài đọc dài thành một sơ đồ tư duy (Mindmap) hoặc Infographic", "Học dùng phần mềm Articulate Storyline 360"],
      interviewPrep: "Nắm vững mô hình thiết kế giáo dục (ADDIE, Bloom's Taxonomy) và hiểu biết về trải nghiệm người dùng (UX).",
    },
  },
  "principal": {
    title: "Quản lý giáo dục / Hiệu trưởng",
    parentMajor: "Giáo Dục & Sư Phạm",
    description: "Điều hành toàn bộ hoạt động của trường học hoặc trung tâm đào tạo, từ quản trị tài chính, nhân sự giáo viên đến chất lượng học thuật và quan hệ phụ huynh.",
    stats: { salary: "25 - 60+ Triệu", growth: "+10% (Cạnh tranh)", environment: "Văn phòng quản lý" },
    techStack: [
      { name: "Lãnh đạo",        icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Quản trị ngân sách",icon:<DollarSign size={14} />,  color: "bg-green-100 text-green-700" },
      { name: "Xử lý khủng hoảng",icon:<ShieldAlert size={14} />,  color: "bg-orange-100 text-orange-700" },
      { name: "Luật giáo dục",   icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Làm dâu trăm họ", description: "Quản lý giáo dục phải cân bằng giữa áp lực từ Bộ Giáo dục, sự hài lòng của hàng ngàn phụ huynh và đời sống của giáo viên." },
      { title: "Không chỉ là học thuật", description: "Một hiệu trưởng trường tư thục đôi khi đóng vai trò như một CEO: Phải lo tuyển sinh, làm marketing và tối ưu chi phí." },
    ],
    progression: [
      { level: "Giáo viên cốt cán", exp: "0 - 5 năm", role: "Chứng minh năng lực chuyên môn và khả năng gắn kết đồng nghiệp." },
      { level: "Phó/Trưởng bộ phận",exp: "5 - 10 năm",role: "Quản lý hoạt động của một khối/khoa, làm quen với công tác hành chính." },
      { level: "Hiệu trưởng/Giám đốc",exp:"10+ năm", role: "Lãnh đạo toàn diện, chịu trách nhiệm về văn hóa và sự phát triển của cơ sở." },
    ],
    actionPlan: {
      projects: ["Đứng ra làm trưởng ban tổ chức một sự kiện lớn của Đoàn/Đội hoặc CLB", "Tìm hiểu về khung đánh giá năng lực học sinh"],
      interviewPrep: "Kỹ năng giải quyết xung đột (đặc biệt với phụ huynh), tầm nhìn giáo dục và năng lực quản lý nhân sự.",
    },
  },
  "online-tutor": {
    title: "Giáo viên/Gia sư trực tuyến (Online Tutor)",
    parentMajor: "Giáo Dục & Sư Phạm",
    description: "Giảng dạy thông qua các nền tảng trực tuyến cho học sinh trong và ngoài nước. Cung cấp sự linh hoạt tuyệt đối về không gian và thời gian làm việc.",
    stats: { salary: "10 - 40 Triệu", growth: "+35% (Rất cao)", environment: "Làm việc tại nhà (Remote)" },
    techStack: [
      { name: "Kỹ năng Online",  icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Tương tác ảo",    icon: <Users size={14} />,        color: "bg-pink-100 text-pink-700" },
      { name: "Quản lý thời gian",icon:<Activity size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Xây dựng thương hiệu",icon:<Globe size={14} />,     color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Dạy học xuyên biên giới", description: "Bạn có thể ngồi tại Việt Nam nhưng dạy toán tiếng Anh cho một học sinh ở Úc hoặc Mỹ thông qua các nền tảng tutoring quốc tế." },
      { title: "Tự làm chủ", description: "Các gia sư online thường là những người tự kinh doanh (Freelancer), họ phải tự tìm học viên, thu học phí và sắp xếp lịch trình." },
    ],
    progression: [
      { level: "Gia sư mới",     exp: "0 - 1 năm", role: "Nhận các lớp học qua trung tâm môi giới, làm quen với phần mềm Zoom/ClassIn." },
      { level: "Gia sư có tiếng",exp: "1 - 3 năm", role: "Xây dựng tệp khách hàng cá nhân, học sinh tự giới thiệu nhau, tăng học phí." },
      { level: "Eduser (Kinh doanh GD)",exp:"3+ năm",role: "Mở trung tâm online quy mô nhỏ, thuê thêm gia sư khác để dạy." },
    ],
    actionPlan: {
      projects: ["Setup góc làm việc/dạy học online chuyên nghiệp với camera và mic tốt", "Lập profile trên các nền tảng gia sư quốc tế"],
      interviewPrep: "Kỹ năng giữ tương tác qua màn hình, xử lý sự cố kỹ thuật (rớt mạng) và soạn học liệu số.",
    },
  },

  // ==========================================
  // 11. LUẬT & PHÁP LÝ (LAW)
  // ==========================================
  "litigation-lawyer": {
    title: "Luật sư tranh tụng",
    parentMajor: "Luật & Pháp Lý",
    description: "Đại diện và bảo vệ quyền lợi của khách hàng tại Tòa án hoặc Trọng tài thương mại trong các vụ án dân sự, hình sự, kinh tế. Những chiến binh thực sự trên bục công lý.",
    stats: { salary: "15 - 100+ Triệu", growth: "+12% (Cao)", environment: "Tòa án / Văn phòng Luật" },
    techStack: [
      { name: "Tranh biện",      icon: <Megaphone size={14} />,    color: "bg-orange-100 text-orange-700" },
      { name: "Phân tích hồ sơ", icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Tư duy phản biện",icon:<BrainCircuit size={14} />,  color: "bg-purple-100 text-purple-700" },
      { name: "Chịu áp lực",     icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Không giống trên phim", description: "Luật sư ngoài đời thực không hay đập bàn phản đối ở Tòa. Họ dành 90% thời gian cắm cúi đọc hàng ngàn trang tài liệu ở văn phòng để tìm kẽ hở pháp lý." },
      { title: "Phải có Thẻ", description: "Để trở thành Luật sư thực thụ, bạn phải qua thời gian tập sự khắt khe và vượt qua kỳ thi quốc gia để được cấp Chứng chỉ hành nghề." },
    ],
    progression: [
      { level: "Tập sự Luật sư", exp: "0 - 2 năm", role: "Đi photo tài liệu, nghiên cứu án lệ, hỗ trợ soạn thảo đơn từ khởi kiện." },
      { level: "Luật sư tranh tụng",exp:"2 - 7 năm",role: "Đại diện thân chủ dự các phiên tòa, thu thập chứng cứ bảo vệ quyền lợi." },
      { level: "Luật sư thành viên (Partner)",exp:"7+ năm",role:"Quản lý hãng luật, mang về các vụ án thương mại/dân sự giá trị hàng chục tỷ." },
    ],
    actionPlan: {
      projects: ["Tham gia các phiên tòa giả định (Moot Court) tại trường đại học", "Tập viết các đoạn văn nghị luận sắc bén, logic"],
      interviewPrep: "Rèn tư duy bẻ gãy luận điểm đối phương, trí nhớ tốt và sự kiên định về tâm lý.",
    },
  },
  "in-house-counsel": {
    title: "Chuyên viên pháp chế doanh nghiệp (In-house Counsel)",
    parentMajor: "Luật & Pháp Lý",
    description: "Tư vấn pháp lý nội bộ, rà soát hợp đồng và đảm bảo mọi quyết định kinh doanh của công ty đều tuân thủ pháp luật. Bảo vệ công ty khỏi các rủi ro kiện tụng.",
    stats: { salary: "12 - 50 Triệu", growth: "+20% (Cao)", environment: "Văn phòng công ty" },
    techStack: [
      { name: "Soạn hợp đồng",   icon: <FileText size={14} />,     color: "bg-amber-100 text-amber-700" },
      { name: "Luật Doanh nghiệp",icon:<Scale size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Đàm phán",        icon: <HeartHandshake size={14} />,color: "bg-pink-100 text-pink-700" },
      { name: "Tư duy kinh doanh",icon:<TrendingUp size={14} />,   color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Chữ 'Không' quyền lực", description: "Pháp chế thường bị bộ phận Kinh doanh ghét vì họ hay gạch bỏ các điều khoản hợp đồng rủi ro và nói 'Không được làm cái này' theo luật." },
      { title: "Bảo vệ chén cơm", description: "Họ phải rà soát từ hợp đồng thuê văn phòng, hợp đồng lao động đến các thương vụ M&A (mua bán sáp nhập) hàng triệu USD." },
    ],
    progression: [
      { level: "Legal Executive",exp: "0 - 2 năm", role: "Kiểm tra hợp đồng mẫu, thực hiện thủ tục thay đổi giấy phép kinh doanh." },
      { level: "In-house Counsel",exp:"2 - 6 năm", role: "Trực tiếp đàm phán hợp đồng với đối tác, tư vấn pháp lý cho các phòng ban." },
      { level: "Giám đốc Pháp chế",exp:"6+ năm",   role: "Cố vấn luật pháp chiến lược cho Ban Giám đốc, giải quyết các vụ kiện lớn." },
    ],
    actionPlan: {
      projects: ["Thử đọc và hiểu một hợp đồng lao động hoặc hợp đồng mua bán đơn giản", "Học thêm chứng chỉ ngắn hạn về Luật Kinh tế"],
      interviewPrep: "Nắm vững Luật Doanh nghiệp, Luật Lao động và kỹ năng tiếng Anh pháp lý (Legal English).",
    },
  },
  "notary": {
    title: "Công chứng viên / Thừa phát lại",
    parentMajor: "Luật & Pháp Lý",
    description: "Đại diện quyền lực nhà nước chứng nhận tính xác thực, hợp pháp của các hợp đồng, giao dịch dân sự (mua bán đất, di chúc) hoặc lập vi bằng ghi nhận sự kiện.",
    stats: { salary: "15 - 40+ Triệu", growth: "+10% (Ổn định)", environment: "Phòng công chứng" },
    techStack: [
      { name: "Xác minh giấy tờ",icon: <Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Luật Dân sự",     icon: <Scale size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Tính cẩn trọng",  icon: <Shield size={14} />,       color: "bg-slate-100 text-slate-700" },
      { name: "Lưu trữ hồ sơ",   icon: <Database size={14} />,     color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Người gác cổng tài sản", description: "Một chữ ký và con dấu của Công chứng viên có thể quyết định số phận của một giao dịch bất động sản trị giá hàng trăm tỷ đồng." },
      { title: "Rủi ro nghề nghiệp", description: "Nếu ký nhầm giấy tờ giả mạo, công chứng viên có thể phải bồi thường thiệt hại bằng toàn bộ tài sản cá nhân, thậm chí chịu trách nhiệm hình sự." },
    ],
    progression: [
      { level: "Chuyên viên nghiệp vụ",exp:"0 - 3 năm",role: "Soạn thảo văn bản công chứng, kiểm tra đối chiếu sổ đỏ/CMND của khách hàng." },
      { level: "Công chứng viên",exp: "3 - 8 năm", role: "Đã qua đào tạo bổ nhiệm, trực tiếp ký xác nhận và đóng dấu các giao dịch." },
      { level: "Trưởng phòng CC",exp: "8+ năm",    role: "Làm chủ hoặc quản lý một Văn phòng công chứng tư nhân." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu quy trình sang tên sổ đỏ hoặc lập di chúc cơ bản", "Thực tập tại một văn phòng công chứng"],
      interviewPrep: "Kiến thức chuyên sâu về Luật Đất đai, Dân sự, Hôn nhân gia đình và con mắt 'chuẩn' để nhìn ra giấy tờ giả.",
    },
  },
  "bank-legal": {
    title: "Chuyên viên pháp lý ngân hàng",
    parentMajor: "Luật & Pháp Lý",
    description: "Quản lý rủi ro pháp lý trong hoạt động tín dụng, thẩm định tài sản đảm bảo (sổ đỏ, xe cộ) và thực hiện các thủ tục thu hồi, khởi kiện nợ xấu.",
    stats: { salary: "12 - 35 Triệu", growth: "+15% (Cao)", environment: "Ngân hàng / Tòa án" },
    techStack: [
      { name: "Luật Ngân hàng",  icon: <Scale size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Thẩm định tài sản",icon:<Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Thu hồi nợ",      icon: <DollarSign size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Xử lý tranh chấp",icon:<ShieldAlert size={14} />,   color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Người đi đòi tiền", description: "Giai đoạn cuối của nợ xấu, bộ phận pháp chế ngân hàng sẽ phải soạn đơn khởi kiện ra tòa và trực tiếp đi cùng thi hành án để siết nhà, siết xe." },
      { title: "Thẩm định kỹ càng", description: "Họ phải kiểm tra tính pháp lý của tài sản kỹ đến mức phát hiện ra việc nhà xây lấn ranh hay giấy phép không hợp lệ trước khi ngân hàng xuống tiền." },
    ],
    progression: [
      { level: "Chuyên viên hỗ trợ", exp: "0 - 2 năm", role: "Soạn thảo hồ sơ thế chấp, làm thủ tục công chứng, đăng ký giao dịch bảo đảm." },
      { level: "Pháp chế tín dụng",  exp: "2 - 5 năm", role: "Thẩm định tính pháp lý của hồ sơ vay doanh nghiệp lớn, cố vấn giải ngân." },
      { level: "Chuyên viên xử lý nợ",exp:"5+ năm",   role: "Đại diện ngân hàng tham gia tố tụng, làm việc với công an, thi hành án để thu hồi nợ." },
    ],
    actionPlan: {
      projects: ["Nghiên cứu về các biện pháp bảo đảm thực hiện nghĩa vụ (Thế chấp, Cầm cố)", "Đọc hiểu Luật Các tổ chức tín dụng"],
      interviewPrep: "Nắm vững quy định về tín dụng, kỹ năng giao tiếp cứng rắn và khả năng làm việc dưới áp lực giải ngân.",
    },
  },
  "judge-prosecutor": {
    title: "Thẩm phán / Kiểm sát viên / Điều tra viên",
    parentMajor: "Luật & Pháp Lý",
    description: "Những 'cán cân công lý' làm việc trong bộ máy cơ quan tư pháp nhà nước (Tòa án, Viện kiểm sát, Cơ quan điều tra) để giải quyết án và bảo vệ pháp luật.",
    stats: { salary: "Theo bậc Nhà nước", growth: "Ổn định", environment: "Cơ quan Nhà nước" },
    techStack: [
      { name: "Định tội danh",   icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
      { name: "Điều tra, Xét hỏi",icon:<Ear size={14} />,          color: "bg-blue-100 text-blue-700" },
      { name: "Logic hình sự",   icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Quyết đoán",      icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Đường đời chông gai", description: "Để được ngồi ghế Thẩm phán gõ búa, bạn phải mất từ 7 đến 10 năm công tác xuất sắc từ vị trí thư ký tòa án và qua nhiều kỳ thi tuyển gắt gao." },
      { title: "Quyền lực sinh sát", description: "Quyết định của Thẩm phán hay Kiểm sát viên có thể lấy đi tự do của một con người, do đó nghề này đòi hỏi 'tinh thần thép' và sự vô tư tuyệt đối." },
    ],
    progression: [
      { level: "Thư ký Tòa / Chuyên viên",exp:"0 - 5 năm",role: "Ghi chép biên bản phiên tòa, tống đạt giấy tờ, chuẩn bị hồ sơ án." },
      { level: "Điều tra viên / KSV", exp: "5 - 10 năm",role:"Khởi tố, điều tra vụ án, giữ quyền công tố tại phiên tòa." },
      { level: "Thẩm phán",          exp: "10+ năm",  role: "Chủ tọa phiên tòa, trực tiếp ra bản án dựa trên sự thật khách quan và luật pháp." },
    ],
    actionPlan: {
      projects: ["Thường xuyên theo dõi tin tức an ninh trật tự, báo Pháp luật", "Rèn luyện phẩm chất đạo đức, tính liêm chính nghiêm ngặt"],
      interviewPrep: "Nắm vững Bộ luật Hình sự, Tố tụng Hình sự/Dân sự. Đạt tiêu chuẩn về lý lịch chính trị để làm việc trong cơ quan nhà nước.",
    },
  },

  // ==========================================
  // 12. TÀI CHÍNH & ĐẦU TƯ (FINANCE)
  // ==========================================
  "investment-analyst": {
    title: "Chuyên viên phân tích đầu tư (Investment Analyst)",
    parentMajor: "Tài Chính & Đầu Tư",
    description: "Nghiên cứu thị trường chứng khoán, đọc hiểu báo cáo tài chính của các công ty và đưa ra khuyến nghị 'Mua/Bán/Nắm giữ' cho nhà đầu tư hoặc quỹ.",
    stats: { salary: "15 - 50 Triệu", growth: "+20% (Cao)", environment: "Công ty Chứng khoán/Quỹ" },
    techStack: [
      { name: "Đọc BCTC",        icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Định giá Model",  icon: <Calculator size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Nghiên cứu Vĩ mô",icon: <Globe size={14} />,        color: "bg-green-100 text-green-700" },
      { name: "Phân tích Data",  icon: <BarChart size={14} />,     color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Nghề làm bạn với màn hình", description: "Một chuyên gia phân tích thường ngồi trước 3-4 màn hình máy tính đầy những biểu đồ xanh đỏ chớp nháy liên tục." },
      { title: "Dự đoán tương lai", description: "Họ phải tính toán xem một công ty sẽ kiếm được bao nhiêu tiền trong 5 năm tới chỉ dựa vào dữ liệu hiện tại." },
    ],
    progression: [
      { level: "Junior Analyst", exp: "0 - 2 năm", role: "Cập nhật dữ liệu vào mô hình Excel, tóm tắt tin tức kinh tế hàng ngày." },
      { level: "Senior Analyst", exp: "2 - 5 năm", role: "Viết báo cáo phân tích chuyên sâu về doanh nghiệp, trực tiếp đưa ra khuyến nghị." },
      { level: "Trưởng phòng Phân tích",exp:"5+ năm",role: "Xây dựng chiến lược phân tích toàn ngành, xuất hiện trên báo đài tài chính." },
    ],
    actionPlan: {
      projects: ["Tự phân tích và định giá một mã cổ phiếu (ví dụ: FPT hoặc Vinamilk)", "Tham gia cuộc thi đầu tư chứng khoán sinh viên"],
      interviewPrep: "Thành thạo Excel, hiểu rõ các chỉ số tài chính (P/E, ROE, EBITDA) và có hiểu biết cơ bản về chứng chỉ CFA.",
    },
  },
  "fund-manager": {
    title: "Quản lý quỹ đầu tư (Fund Manager)",
    parentMajor: "Tài Chính & Đầu Tư",
    description: "Đại bàng của ngành tài chính. Người nắm trong tay quyền sinh quyền sát quản lý khối tài sản hàng trăm đến hàng ngàn tỷ đồng của các nhà đầu tư lớn.",
    stats: { salary: "50 - 200+ Triệu", growth: "+10% (Rất cạnh tranh)", environment: "Áp lực sinh lời cao" },
    techStack: [
      { name: "Chiến lược Đầu tư",icon:<Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Quản trị Rủi ro", icon: <Shield size={14} />,       color: "bg-slate-100 text-slate-700" },
      { name: "Tâm lý lạnh lùng",icon: <BrainCircuit size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Network C-Level", icon: <Users size={14} />,        color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Ngủ cùng thị trường", description: "Khi chứng khoán Mỹ lao dốc vào ban đêm, Fund Manager ở Việt Nam cũng không thể chợp mắt vì nó sẽ ảnh hưởng đến tài khoản quỹ vào sáng hôm sau." },
      { title: "Hoa hồng siêu khủng", description: "Nếu quỹ lãi vượt kỳ vọng, phần tiền thưởng (bonus) cuối năm của Fund Manager có thể mua được vài căn nhà mặt phố." },
    ],
    progression: [
      { level: "Chuyên viên Phân tích",exp:"0 - 5 năm", role: "Cung cấp insight và đề xuất đầu tư cho Fund Manager phê duyệt." },
      { level: "Portfolio Manager",exp:"5 - 10 năm",role:"Được cấp một phần vốn nhỏ để trực tiếp giao dịch và chứng minh hiệu quả." },
      { level: "Fund Manager",     exp: "10+ năm",  role: "Chịu trách nhiệm toàn quyền về tỷ suất sinh lời của quỹ đầu tư ngàn tỷ." },
    ],
    actionPlan: {
      projects: ["Thử nghiệm đầu tư chứng khoán bằng tiền ảo/app giả lập", "Đọc các cuốn sách kinh điển như 'Nhà đầu tư thông minh'"],
      interviewPrep: "Cần kinh nghiệm thực chiến xuất sắc, lịch sử đầu tư (track record) tốt và gần như bắt buộc có chứng chỉ CFA.",
    },
  },
  "relationship-manager": {
    title: "Chuyên viên ngân hàng (Relationship Manager)",
    parentMajor: "Tài Chính & Đầu Tư",
    description: "Gương mặt đại diện của ngân hàng. Duy trì và phát triển mạng lưới khách hàng V.I.P (Cá nhân giàu có hoặc Doanh nghiệp lớn), tư vấn cho vay và các sản phẩm tài chính.",
    stats: { salary: "15 - 80 Triệu (Hoa hồng)", growth: "+20% (Cao)", environment: "Giao tiếp liên tục" },
    techStack: [
      { name: "Sales & Thuyết phục",icon:<Megaphone size={14} />,  color: "bg-orange-100 text-orange-700" },
      { name: "Kiến thức Tín dụng",icon:<DollarSign size={14} />,  color: "bg-green-100 text-green-700" },
      { name: "Chăm sóc KH",     icon: <HeartHandshake size={14} />,color: "bg-pink-100 text-pink-700" },
      { name: "Thẩm định cơ bản",icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Nghề đi đánh golf", description: "Rất nhiều hợp đồng vay vốn hàng trăm tỷ đồng được RM chốt trên bàn tiệc hoặc sân golf với các tổng giám đốc công ty." },
      { title: "Áp lực chỉ tiêu (KPI)", description: "Mỗi tháng, một RM có thể bị ép chỉ tiêu phải huy động được hàng tỷ đồng tiền gửi và cho vay ra số tiền tương ứng." },
    ],
    progression: [
      { level: "RM Khách hàng cá nhân",exp:"0 - 2 năm",role:"Mở thẻ tín dụng, cho vay mua nhà, mua xe, bán bảo hiểm." },
      { level: "RM Khách hàng Doanh nghiệp",exp:"2 - 5 năm",role:"Thẩm định hồ sơ công ty, cấp hạn mức tín dụng tài trợ sản xuất." },
      { level: "Giám đốc Chi nhánh", exp: "5+ năm",   role: "Điều hành toàn bộ hoạt động kinh doanh và chỉ tiêu của một chi nhánh NH." },
    ],
    actionPlan: {
      projects: ["Thực tập tại quầy giao dịch hoặc phòng tín dụng ngân hàng", "Nâng cao kỹ năng giao tiếp và ngoại hình chuyên nghiệp"],
      interviewPrep: "Nắm được quy trình cấp tín dụng, cách đọc báo cáo tài chính doanh nghiệp cơ bản và sự tự tin, nhạy bén.",
    },
  },
  "corporate-finance": {
    title: "Chuyên viên tài chính doanh nghiệp (Corporate Finance)",
    parentMajor: "Tài Chính & Đầu Tư",
    description: "Nhà hoạch định vốn của công ty. Lập kế hoạch tài chính dài hạn, định giá dự án mới và tư vấn các thương vụ M&A (Mua bán & Sáp nhập).",
    stats: { salary: "15 - 60 Triệu", growth: "+15% (Cao)", environment: "Văn phòng Tập đoàn lớn" },
    techStack: [
      { name: "Mô hình tài chính",icon:<Calculator size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Lập Ngân sách",   icon: <PieChart size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Thẩm định Dự án", icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Định giá DN",     icon: <TrendingUp size={14} />,   color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Kế toán vs Tài chính", description: "Kế toán ghi chép lại những đồng tiền đã xảy ra trong quá khứ. Còn Tài chính phải tính toán xem đồng tiền đó nên đầu tư vào đâu ở tương lai." },
      { title: "Cái nôi của M&A", description: "Họ là những người tính toán đằng sau các phi vụ thâu tóm đình đám như việc Central Group mua lại chuỗi siêu thị BigC." },
    ],
    progression: [
      { level: "Finance Executive", exp: "0 - 2 năm", role: "Tập hợp số liệu từ kế toán, làm báo cáo dòng tiền (Cash flow) hàng tuần." },
      { level: "Finance Analyst",   exp: "2 - 5 năm", role: "Chạy mô hình tính toán hiệu quả dự án mới (NPV, IRR) để trình sếp duyệt." },
      { level: "Finance Director",  exp: "5+ năm",    role: "Huy động vốn (phát hành cổ phiếu, trái phiếu), quản trị cơ cấu vốn toàn tập đoàn." },
    ],
    actionPlan: {
      projects: ["Thực hành lập mô hình tài chính (Financial Modeling) trên Excel", "Phân tích một thương vụ M&A thực tế trên báo chí"],
      interviewPrep: "Kiến thức vững về Tài chính doanh nghiệp (WACC, NPV, IRR), kỹ năng làm slide và Excel điêu luyện.",
    },
  },
  "risk-manager": {
    title: "Chuyên gia quản trị rủi ro (Risk Manager)",
    parentMajor: "Tài Chính & Đầu Tư",
    description: "Nhận diện, đo lường và thiết lập hàng rào kiểm soát các rủi ro (tín dụng, thị trường, thanh khoản) để đảm bảo ngân hàng/công ty không bị phá sản vì một biến cố.",
    stats: { salary: "20 - 70 Triệu", growth: "+18% (Cao)", environment: "Back-office Ngân hàng" },
    techStack: [
      { name: "Định lượng Rủi ro",icon:<BarChart size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Thống kê Toán",   icon: <Calculator size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Compliance",      icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
      { name: "Tư duy phòng thủ",icon:<ShieldAlert size={14} />,   color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Kẻ thù của Sale", description: "Khối Kinh doanh luôn muốn cho vay càng nhiều càng tốt để lấy doanh số. Khối Rủi ro thì luôn tìm cách từ chối hồ sơ vay để đảm bảo an toàn." },
      { title: "Bài học khủng hoảng", description: "Nghề này trở nên cực kỳ quyền lực từ sau cuộc Khủng hoảng tài chính toàn cầu 2008, khi các ngân hàng nhận ra thả lỏng rủi ro sẽ dẫn đến sụp đổ." },
    ],
    progression: [
      { level: "Risk Analyst",     exp: "0 - 3 năm", role: "Tính toán hạn mức rủi ro, theo dõi danh mục nợ xấu hàng ngày." },
      { level: "Senior Risk Mng.", exp: "3 - 7 năm", role: "Xây dựng các mô hình chấm điểm tín dụng (Credit Scoring) tự động." },
      { level: "Chief Risk Officer",exp:"7+ năm",    role: "Giám đốc rủi ro (CRO), quyền lực tương đương CFO, định hình khẩu vị rủi ro ngân hàng." },
    ],
    actionPlan: {
      projects: ["Học cách sử dụng Python/R để phân tích xác suất thống kê", "Tìm hiểu về chứng chỉ FRM (Financial Risk Manager)"],
      interviewPrep: "Giỏi toán thống kê, hiểu biết sâu về Hiệp ước Basel (Basel II/III) và cách vận hành ngân hàng.",
    },
  },

  // ==========================================
  // 13. KỸ THUẬT CỐT LÕI (ENGINEERING)
  // ==========================================
  "mep-engineer": {
    title: "Kỹ sư thiết kế cơ điện (MEP)",
    parentMajor: "Kỹ Thuật Cốt Lõi (Cơ/Điện)",
    description: "Thiết kế mạch máu (Điện), lá phổi (Thông gió), và hệ tiêu hóa (Cấp thoát nước) cho mọi công trình xây dựng từ tòa nhà văn phòng đến nhà máy sản xuất.",
    stats: { salary: "12 - 35 Triệu", growth: "+12% (Ổn định)", environment: "Văn phòng / Công trường" },
    techStack: [
      { name: "AutoCAD/Revit",   icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Tính toán Tải",   icon: <Calculator size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Tiêu chuẩn M&E",  icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Điện/HVAC",       icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
    ],
    funFacts: [
      { title: "Nghệ thuật giấu giếm", description: "MEP Engineer phải thiết kế một hệ thống ống gió, dây điện khổng lồ chằng chịt nhưng phải giấu gọn gàng lên trần thạch cao để kiến trúc sư hài lòng." },
      { title: "Ngành không lo thất nghiệp", description: "Bất kỳ công trình nào có mái che đều cần điện, nước và không khí. Nơi nào có xây dựng, nơi đó cần kỹ sư Cơ Điện." },
    ],
    progression: [
      { level: "Kỹ sư thiết kế M&E", exp: "0 - 3 năm", role: "Tính toán thông số, vẽ triển khai bản vẽ thi công (Shop drawing)." },
      { level: "Kỹ sư giám sát M&E", exp: "3 - 6 năm", role: "Đứng công trường, giám sát thợ thi công đúng bản vẽ thiết kế." },
      { level: "Chủ trì Cơ Điện",    exp: "6+ năm",    role: "Bảo vệ phương án thiết kế với chủ đầu tư, tối ưu chi phí vật tư cơ điện." },
    ],
    actionPlan: {
      projects: ["Thành thạo phần mềm AutoCAD 2D và tập vẽ sơ đồ đơn tuyến tủ điện", "Tìm hiểu về tiêu chuẩn TCVN trong thiết kế điện"],
      interviewPrep: "Nắm vững lý thuyết mạch điện, tính toán tổn thất áp suất ống gió và kỹ năng đọc hiểu bản vẽ kiến trúc.",
    },
  },
  "plc-engineer": {
    title: "Kỹ sư tự động hóa / PLC",
    parentMajor: "Kỹ Thuật Cốt Lõi (Cơ/Điện)",
    description: "Bộ não của nhà máy. Lập trình PLC, SCADA, điều khiển robot công nghiệp để các dây chuyền sản xuất tự động vận hành mà không cần bàn tay con người.",
    stats: { salary: "15 - 45 Triệu", growth: "+25% (Rất cao)", environment: "Nhà máy / Dự án" },
    techStack: [
      { name: "Lập trình PLC",   icon: <Code size={14} />,         color: "bg-green-100 text-green-700" },
      { name: "SCADA / HMI",     icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Robotics",        icon: <Settings size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Mạch điện ĐK",    icon: <Zap size={14} />,          color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Cứu tinh mùa dịch", description: "Nhờ Kỹ sư tự động hóa, các nhà máy công nghiệp vẫn chạy ra sản phẩm ầm ầm ngay cả khi toàn bộ công nhân phải nghỉ vì giãn cách." },
      { title: "Lập trình viên của phần cứng", description: "Họ code không phải để hiện ra giao diện web, mà để một cánh tay robot thực của hãng KUKA hay Yaskawa cử động gắp hàng chuẩn xác đến từng milimet." },
    ],
    progression: [
      { level: "Kỹ sư Tự động hóa",exp: "0 - 3 năm", role: "Viết code PLC (Siemens, Mitsubishi), thiết kế màn hình giao diện HMI." },
      { level: "Chuyên gia Tích hợp",exp:"3 - 7 năm",role: "Lập trình tích hợp toàn bộ mạng lưới robot, biến tần và cảm biến." },
      { level: "Quản lý Dự án TĐH",exp: "7+ năm",    role: "Thiết kế giải pháp nhà máy thông minh (Smart Factory) ứng dụng IoT." },
    ],
    actionPlan: {
      projects: ["Thực hành lập trình trên phần mềm mô phỏng (VD: TIA Portal của Siemens)", "Làm đồ án đấu nối vi điều khiển Arduino"],
      interviewPrep: "Tư duy logic lập trình (Ladder Logic), hiểu biết về biến tần, động cơ Servo và cảm biến công nghiệp.",
    },
  },
  "maintenance-engineer": {
    title: "Kỹ sư bảo trì thiết bị (Maintenance Engineer)",
    parentMajor: "Kỹ Thuật Cốt Lõi (Cơ/Điện)",
    description: "Bác sĩ của máy móc. Lên kế hoạch và thực hiện bảo dưỡng định kỳ, chẩn đoán bệnh và sửa chữa thiết bị công nghiệp để nhà máy không bao giờ phải dừng hoạt động.",
    stats: { salary: "10 - 30 Triệu", growth: "+10% (Ổn định)", environment: "Nhà máy / Khắc nghiệt" },
    techStack: [
      { name: "Chẩn đoán lỗi",   icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Bảo dưỡng phòng ngừa",icon:<Shield size={14} />,    color: "bg-green-100 text-green-700" },
      { name: "Cơ khí / Điện",   icon: <Hammer size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Sẵn sàng 24/7",   icon: <Activity size={14} />,     color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Nghề lấm lem dầu mỡ", description: "Dù mang danh kỹ sư, phần lớn thời gian bạn sẽ phải chui vào gầm máy, tay dính đầy dầu mỡ để thay một chiếc vòng bi hỏng." },
      { title: "Nguyên tắc 'Dừng là Mất tiền'", description: "Một dây chuyền dừng hoạt động 1 giờ có thể làm nhà máy bốc hơi hàng chục ngàn đô la. Kỹ sư bảo trì phải sửa chữa với tốc độ đua F1." },
    ],
    progression: [
      { level: "Kỹ sư sửa chữa", exp: "0 - 3 năm", role: "Xử lý sự cố máy móc hàng ngày (Breakdown maintenance), thay thế linh kiện." },
      { level: "Kỹ sư lên kế hoạch",exp:"3 - 6 năm", role: "Phân tích dữ liệu hỏng hóc, lên lịch bảo dưỡng phòng ngừa (Preventive Maint)." },
      { level: "Trưởng phòng Bảo trì",exp:"6+ năm",  role: "Quản trị ngân sách linh kiện dự phòng, cải tiến độ bền của máy móc toàn nhà máy." },
    ],
    actionPlan: {
      projects: ["Thực hành tháo lắp, sửa chữa các thiết bị gia dụng cơ bản trong nhà", "Tìm hiểu khái niệm TPM (Bảo trì năng suất toàn diện)"],
      interviewPrep: "Nắm vững nguyên lý truyền động cơ khí, thủy lực, khí nén và khả năng làm việc với đôi tay (hands-on).",
    },
  },
  "project-engineer": {
    title: "Kỹ sư dự án (Project Engineer)",
    parentMajor: "Kỹ Thuật Cốt Lõi (Cơ/Điện)",
    description: "Nhạc trưởng của công trình. Quản lý tiến độ, ngân sách, nhân lực và chất lượng kỹ thuật từ lúc dự án Cơ Điện nằm trên giấy đến khi bàn giao đi vào hoạt động.",
    stats: { salary: "15 - 45 Triệu", growth: "+15% (Cao)", environment: "Văn phòng / Công trường" },
    techStack: [
      { name: "Quản lý Dự án",   icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Lập tiến độ (MS Project)",icon:<Activity size={14} />,color: "bg-blue-100 text-blue-700" },
      { name: "Đàm phán nhà thầu",icon:<HeartHandshake size={14}/>,color: "bg-purple-100 text-purple-700" },
      { name: "Quản trị ngân sách",icon:<DollarSign size={14} />,  color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Làm dâu trăm họ", description: "Kỹ sư dự án phải dỗ dành thợ thi công cho kịp tiến độ, cãi nhau với chủ đầu tư để xin thêm tiền, và năn nỉ nhà cung cấp giao hàng sớm." },
      { title: "Nghề chạy deadline", description: "Bị phạt chậm tiến độ (Penalty) là nỗi ám ảnh lớn nhất. Kỹ sư dự án luôn sống với cuốn lịch và những con số." },
    ],
    progression: [
      { level: "Điều phối dự án",exp: "0 - 3 năm", role: "Theo dõi hồ sơ, nhắc việc thầu phụ, nghiệm thu vật tư đầu vào." },
      { level: "Quản lý thi công",exp:"3 - 7 năm", role: "Kiểm soát an toàn, lập biện pháp thi công và giải quyết xung đột tại công trường." },
      { level: "Giám đốc Dự án",  exp: "7+ năm",   role: "Chịu trách nhiệm P&L (lãi lỗ) của dự án hàng chục/trăm tỷ, giao tiếp cấp cao." },
    ],
    actionPlan: {
      projects: ["Sử dụng thành thạo phần mềm Microsoft Project hoặc Excel để lập timeline", "Tham gia ban cán sự lớp để rèn kỹ năng điều phối"],
      interviewPrep: "Kỹ năng lãnh đạo, giao tiếp đa chiều, hiểu biết bóc tách khối lượng (QS) và đọc bản vẽ tốt.",
    },
  },
  "renewable-energy-eng": {
    title: "Kỹ sư năng lượng tái tạo",
    parentMajor: "Kỹ Thuật Cốt Lõi (Cơ/Điện)",
    description: "Đón đầu xu hướng chuyển đổi xanh. Khảo sát, thiết kế và vận hành các nhà máy điện mặt trời, điện gió và các trạm sạc xe điện.",
    stats: { salary: "12 - 40+ Triệu", growth: "+35% (Cực cao)", environment: "Văn phòng / Hiện trường" },
    techStack: [
      { name: "Điện Mặt trời/Gió",icon: <Sun size={14} />,         color: "bg-orange-100 text-orange-700" },
      { name: "Phân tích PVsyst",icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Hòa lưới điện",   icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
      { name: "Khảo sát thực địa",icon:<Map size={14} />,          color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề đi theo nắng gió", description: "Các trang trại điện gió/mặt trời thường đặt ở những nơi hoang vắng, đầy nắng và gió (như Ninh Thuận, Bình Thuận). Kỹ sư phải chấp nhận xa nhà." },
      { title: "Trọng tâm thế kỷ 21", description: "Với cam kết Net Zero vào 2050, đây là ngành được bơm nhiều tỷ USD đầu tư nhất thế giới hiện tại." },
    ],
    progression: [
      { level: "Kỹ sư khảo sát/thiết kế",exp:"0 - 2 năm",role: "Dùng flycam khảo sát mái nhà/đất, dùng phần mềm vẽ bố trí các tấm pin." },
      { level: "Kỹ sư thi công", exp: "2 - 5 năm", role: "Giám sát lắp đặt khung kèo, đấu nối Inverter và hòa lưới điện quốc gia." },
      { level: "Chuyên gia NL",  exp: "5+ năm",    role: "Đánh giá khả thi đầu tư dự án ngàn tỷ, tối ưu hiệu suất bán điện." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu về nguyên lý Inverter và cách tính toán công suất Pin năng lượng mặt trời", "Học phần mềm PVSyst/AutoCAD"],
      interviewPrep: "Nắm vững lý thuyết điện xoay chiều/một chiều, tiêu chuẩn điện lực và xu hướng năng lượng.",
    },
  },

  // ==========================================
  // 14. Y KHOA & BÁC SĨ (MEDICINE)
  // ==========================================
  "general-doctor": {
    title: "Bác sĩ đa khoa / Chuyên khoa",
    parentMajor: "Y Khoa & Bác Sĩ",
    description: "Thăm khám, chẩn đoán, kê đơn và điều trị các bệnh lý nội khoa hoặc chuyên khoa sâu. Vị cứu tinh bảo vệ sức khỏe cho bệnh nhân hàng ngày.",
    stats: { salary: "20 - 100+ Triệu", growth: "+15% (Ổn định)", environment: "Bệnh viện / Phòng khám" },
    techStack: [
      { name: "Chẩn đoán bệnh",  icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Đọc cận lâm sàng",icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Kê đơn (Dược lý)",icon: <FlaskConical size={14} />, color: "bg-orange-100 text-orange-700" },
      { name: "Giao tiếp y khoa",icon: <HeartHandshake size={14}/>,color: "bg-pink-100 text-pink-700" },
    ],
    funFacts: [
      { title: "Học mãi không xong", description: "Học 6 năm y khoa chỉ là bước khởi đầu. Một bác sĩ thực thụ phải học nội trú, chuyên khoa I, chuyên khoa II... kéo dài cả đời." },
      { title: "Chữ bác sĩ", description: "Lời đồn 'chữ bác sĩ xấu' là có thật, nguyên nhân chủ yếu do họ phải viết quá nhiều đơn thuốc và hồ sơ bệnh án trong thời gian ngắn." },
    ],
    progression: [
      { level: "Bác sĩ thực tập",exp: "0 - 1.5 năm",role: "Làm việc tại viện dưới sự giám sát để lấy Chứng chỉ hành nghề (CCHN)." },
      { level: "Bác sĩ chuyên khoa",exp:"1.5 - 7 năm",role: "Độc lập khám chữa bệnh nội khoa/ngoại khoa, trực đêm tại bệnh viện." },
      { level: "Trưởng khoa/Mở PK",exp:"7+ năm",   role: "Có chuyên môn sâu (Master, PhD), uy tín cao, tự mở phòng mạch tư." },
    ],
    actionPlan: {
      projects: ["Học thật giỏi các môn nền tảng: Giải phẫu, Sinh lý, Hóa sinh", "Tham gia trực gác tại bệnh viện ngay từ khi còn là sinh viên"],
      interviewPrep: "Trí nhớ siêu phàm để nhớ hàng ngàn loại thuốc, lòng trắc ẩn và sức chịu đựng áp lực thi cử khốc liệt.",
    },
  },
  "surgeon": {
    title: "Bác sĩ phẫu thuật",
    parentMajor: "Y Khoa & Bác Sĩ",
    description: "Những đôi 'Bàn tay vàng'. Trực tiếp cầm dao kéo thực hiện các ca phẫu thuật nội soi, mổ mở, ghép tạng để loại bỏ khối u hoặc sửa chữa các khiếm khuyết cơ thể.",
    stats: { salary: "30 - 200+ Triệu", growth: "+15% (Cao)", environment: "Phòng mổ / Căng thẳng tột độ" },
    techStack: [
      { name: "Kỹ năng dao kéo", icon: <PenTool size={14} />,      color: "bg-red-100 text-red-700" },
      { name: "Giải phẫu không gian",icon:<Layers size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Thần kinh thép",  icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Sức bền thể lực", icon: <Activity size={14} />,     color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Cuộc chiến thể lực", description: "Các ca đại phẫu (ghép gan, mổ tim) có thể kéo dài 10-15 tiếng liên tục. Bác sĩ phẫu thuật phải nhịn ăn, nhịn vệ sinh và đứng suốt quá trình mổ." },
      { title: "Nghệ sĩ mổ xẻ", description: "Bác sĩ ngoại khoa giỏi khâu vết thương đẹp như nghệ nhân thêu, giúp bệnh nhân hồi phục nhanh và không để lại sẹo xấu." },
    ],
    progression: [
      { level: "Bác sĩ phụ mổ",  exp: "0 - 5 năm", role: "Đứng phụ banh vết mổ, cầm máu, khâu da cho bác sĩ mổ chính." },
      { level: "Bác sĩ mổ chính",exp: "5 - 10 năm",role: "Trực tiếp thực hiện các ca phẫu thuật từ ruột thừa đến các ca phức tạp." },
      { level: "Chuyên gia mổ sâu",exp:"10+ năm",  role: "Mổ các ca siêu khó (mổ não, tim), làm chủ các công nghệ mổ robot tiên tiến." },
    ],
    actionPlan: {
      projects: ["Luyện kỹ năng khéo léo của đôi tay (ví dụ: khâu vá, gắp hạt đỗ)", "Học nội trú chuyên ngành Ngoại khoa"],
      interviewPrep: "Kiến thức giải phẫu chính xác tuyệt đối, quyết đoán trong tích tắc và khả năng lãnh đạo kíp mổ.",
    },
  },
  "medical-researcher": {
    title: "Nghiên cứu viên y học / Dược học",
    parentMajor: "Y Khoa & Bác Sĩ",
    description: "Nhà khoa học thầm lặng. Họ không trực tiếp khám bệnh nhưng là người tìm ra các loại vaccine, thuốc trị ung thư và phác đồ điều trị cứu sống hàng triệu người.",
    stats: { salary: "15 - 50 Triệu", growth: "+20% (Cao)", environment: "Viện Nghiên cứu / Phòng Lab" },
    techStack: [
      { name: "Thí nghiệm y sinh",icon:<FlaskConical size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Thử nghiệm lâm sàng",icon:<Search size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Thống kê Y học",  icon: <BarChart size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Viết báo khoa học",icon:<FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Tỷ lệ chọi tử thần", description: "Chỉ khoảng 1/10.000 hợp chất hóa học được nghiên cứu trong lab có thể vượt qua các vòng thử nghiệm khắt khe để trở thành viên thuốc bán ngoài hiệu." },
      { title: "Cứu tinh mùa dịch", description: "Vaccine COVID-19 ra đời trong kỷ lục chưa tới 1 năm chính là kỳ tích vĩ đại nhất của các nhà nghiên cứu y học hiện đại." },
    ],
    progression: [
      { level: "Trợ lý nghiên cứu",exp: "0 - 3 năm", role: "Chạy mẫu PCR, nuôi cấy tế bào, nhập liệu số liệu thống kê." },
      { level: "Nghiên cứu viên chính",exp:"3 - 8 năm",role:"Thiết kế thí nghiệm, xin quỹ tài trợ, thử nghiệm lâm sàng trên người/động vật." },
      { level: "Trưởng phòng/GS",exp: "8+ năm",    role: "Chủ trì công bố các bài báo trên tạp chí quốc tế (Lancet, Nature), phát minh bằng sáng chế." },
    ],
    actionPlan: {
      projects: ["Xin vào lab của trường làm phụ tá từ năm 2 Đại học", "Học cách sử dụng phần mềm thống kê R hoặc SPSS"],
      interviewPrep: "Tiếng Anh học thuật xuất sắc, kiên nhẫn đối mặt với sự thất bại liên tục trong phòng lab.",
    },
  },
  "public-health-doctor": {
    title: "Bác sĩ y tế dự phòng",
    parentMajor: "Y Khoa & Bác Sĩ",
    description: "Người lo chuyện bao đồng của xã hội. Chuyên phòng chống dịch bệnh bùng phát (COVID, sốt xuất huyết), an toàn thực phẩm và vệ sinh môi trường cho cộng đồng.",
    stats: { salary: "10 - 30 Triệu", growth: "+15% (Ổn định)", environment: "Cơ quan nhà nước (CDC)" },
    techStack: [
      { name: "Dịch tễ học",     icon: <Globe size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Phòng chống dịch",icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Thống kê Y tế",   icon: <PieChart size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Tiêm chủng",      icon: <Activity size={14} />,     color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Anh hùng giấu mặt", description: "Nếu y tế dự phòng làm việc xuất sắc, không có dịch bệnh nào xảy ra và chẳng ai biết đến họ. Họ chỉ được nhắc đến khi dịch đã bùng phát." },
      { title: "Nghề đi từng ngõ, gõ từng nhà", description: "Bác sĩ dự phòng phải xông pha vào các vùng sâu xa, bãi rác, vùng dịch để giám sát vệ sinh và điều tra ca bệnh." },
    ],
    progression: [
      { level: "Cán bộ chống dịch",exp: "0 - 3 năm", role: "Điều tra ổ dịch, lấy mẫu xét nghiệm diện rộng, giám sát vệ sinh ATTP." },
      { level: "Chuyên viên dịch tễ",exp:"3 - 7 năm",role: "Phân tích dữ liệu, dự báo xu hướng dịch bệnh, lên kế hoạch cấp phát vaccine." },
      { level: "Giám đốc CDC",    exp: "7+ năm",   role: "Lãnh đạo trung tâm kiểm soát bệnh tật tỉnh/thành phố, cố vấn chính sách cho bộ y tế." },
    ],
    actionPlan: {
      projects: ["Thường xuyên cập nhật bản tin dịch tễ của Bộ Y tế", "Đăng ký làm tình nguyện viên tại các trạm y tế địa phương"],
      interviewPrep: "Tư duy hệ thống vĩ mô, khả năng quản trị dữ liệu và lòng nhiệt huyết với sức khỏe cộng đồng.",
    },
  },
  "export-doctor": {
    title: "Bác sĩ xuất khẩu lao động",
    parentMajor: "Y Khoa & Bác Sĩ",
    description: "Được đào tạo tại Việt Nam nhưng ra nước ngoài (Mỹ, Đức, Nhật, Singapore) để thi lấy bằng hành nghề quốc tế, làm việc với mức thu nhập và đãi ngộ hàng đầu thế giới.",
    stats: { salary: "100 - 400+ Triệu", growth: "+30% (Cực cao)", environment: "Nước ngoài / Bệnh viện lớn" },
    techStack: [
      { name: "USMLE / PLAB",    icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Ngoại ngữ chuyên ngành",icon:<Ear size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Lâm sàng quốc tế",icon: <Stethoscope size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Văn hóa đa QG",   icon: <Globe size={14} />,        color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Vượt ải USMLE", description: "Để hành nghề tại Mỹ, bác sĩ Việt Nam phải thi qua kỳ thi USMLE cực kỳ khốc liệt, tốn kém hàng chục ngàn USD lệ phí ôn thi và phỏng vấn." },
      { title: "Đáy của tháp", description: "Bác sĩ đã đi làm ở VN khi ra nước ngoài vẫn phải chấp nhận làm lại nội trú từ đầu và chịu sự quản lý của các bác sĩ trẻ hơn mình." },
    ],
    progression: [
      { level: "Luyện thi / Observership",exp:"1 - 3 năm",role:"Vừa làm viện VN vừa ôn thi các kỳ thi quốc tế, xin đi kiến tập (observe) tại viện nước ngoài." },
      { level: "Bác sĩ nội trú (Residency)",exp:"3 - 7 năm",role:"Được nhận vào hệ thống nội trú, làm việc cường độ cực cao để lấy bằng chuyên khoa Mỹ/Đức." },
      { level: "Attending Physician",exp:"7+ năm", role: "Bác sĩ chính thức độc lập, thu nhập vào top 1% của xã hội tại các nước phát triển." },
    ],
    actionPlan: {
      projects: ["Bắt đầu học ngay bộ sách USMLE Step 1 từ năm 3 Đại học", "Tích cực tìm kiếm cơ hội tham gia lab nghiên cứu để làm đẹp CV"],
      interviewPrep: "Tiếng Anh xuất chúng, khả năng tài chính dự phòng lớn và ý chí kiên cường không bỏ cuộc.",
    },
  },
  // ==========================================
  // 16. KINH TẾ HỌC (ECONOMICS)
  // ==========================================
  "economic-researcher": {
    title: "Chuyên viên nghiên cứu kinh tế",
    parentMajor: "Kinh Tế Học",
    description: "Nghiên cứu kinh tế vĩ mô, dự báo lạm phát, lãi suất và sự dịch chuyển của dòng vốn toàn cầu để cung cấp báo cáo chiến lược cho các định chế tài chính.",
    stats: { salary: "15 - 50 Triệu", growth: "+15% (Cao)", environment: "Viện nghiên cứu / Ngân hàng" },
    techStack: [
      { name: "Kinh tế vĩ mô",   icon: <Globe size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Xử lý dữ liệu",   icon: <BarChart size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Viết báo cáo",    icon: <FileText size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Mô hình dự báo",  icon: <TrendingUp size={14} />,   color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Người vẽ bản đồ tương lai", description: "Họ sử dụng dữ liệu từ quá khứ để dự đoán xem ngày mai nền kinh tế sẽ bùng nổ hay rơi vào suy thoái." },
      { title: "Lời nói ngàn vàng", description: "Một nhận định hoặc báo cáo từ các chuyên gia kinh tế hàng đầu có thể làm chao đảo cả thị trường chứng khoán ngay lập tức." },
    ],
    progression: [
      { level: "Trợ lý nghiên cứu", exp: "0 - 2 năm", role: "Thu thập số liệu từ Tổng cục thống kê, World Bank và xử lý dữ liệu thô." },
      { level: "Chuyên viên PT",    exp: "2 - 5 năm", role: "Trực tiếp viết các báo cáo phân tích chuyên đề, đánh giá tác động kinh tế." },
      { level: "Chuyên gia Kinh tế",exp: "5+ năm",    role: "Lên tiếng trên báo đài truyền hình, tư vấn chiến lược cho ban điều hành ngân hàng." },
    ],
    actionPlan: {
      projects: ["Thử phân tích nguyên nhân lạm phát tại Việt Nam năm qua bằng số liệu thực", "Đọc báo cáo vĩ mô của SSI, VNDirect"],
      interviewPrep: "Nắm vững lý thuyết Cung - Cầu, hiểu cách các ngân hàng trung ương (FED, SBV) điều hành lãi suất.",
    },
  },
  "policy-advisor": {
    title: "Chuyên gia tư vấn chính sách",
    parentMajor: "Kinh Tế Học",
    description: "Làm việc với các cơ quan chính phủ hoặc tổ chức phi chính phủ để đề xuất, đánh giá tác động của các chính sách công như thuế, y tế, giáo dục lên nền kinh tế.",
    stats: { salary: "20 - 70 Triệu", growth: "+12% (Ổn định)", environment: "Tổ chức công / NGO" },
    techStack: [
      { name: "Phân tích chính sách",icon:<Scale size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Tư duy hệ thống", icon: <BrainCircuit size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Đàm phán",        icon: <HeartHandshake size={14} />,color: "bg-pink-100 text-pink-700" },
      { name: "Luật pháp",       icon: <Briefcase size={14} />,    color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Nghề tạo ảnh hưởng", description: "Một đề xuất chính sách thuế của họ nếu được thông qua có thể ảnh hưởng trực tiếp đến túi tiền của hàng triệu người dân." },
      { title: "Cân bằng lợi ích", description: "Họ phải giải bài toán hóc búa: Làm sao để tăng thu ngân sách nhưng không bóp nghẹt sự sống của doanh nghiệp." },
    ],
    progression: [
      { level: "Nhân viên dự án", exp: "0 - 3 năm", role: "Tổng hợp dữ liệu phản hồi từ người dân, doanh nghiệp về một bộ luật mới." },
      { level: "Cố vấn độc lập",  exp: "3 - 7 năm", role: "Viết các bản báo cáo đánh giá tác động kinh tế (RIA) cho các dự thảo luật." },
      { level: "Cố vấn cấp cao",  exp: "7+ năm",    role: "Tham mưu trực tiếp cho các nhà hoạch định chính sách cấp Bộ/Ngành." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu và viết bài phân tích về tác động của Thuế thu nhập cá nhân mới", "Tham gia các buổi hội thảo kinh tế công"],
      interviewPrep: "Kiến thức về Kinh tế công (Public Economics), tư duy phản biện và khả năng viết luận học thuật.",
    },
  },
  "industry-analyst": {
    title: "Chuyên viên phân tích ngành (Industry Analyst)",
    parentMajor: "Kinh Tế Học",
    description: "Nghiên cứu chuyên sâu về một ngành nghề cụ thể (VD: Bất động sản, Năng lượng, Bán lẻ) để đánh giá quy mô, xu hướng, đối thủ và cơ hội thị trường cho doanh nghiệp.",
    stats: { salary: "18 - 55 Triệu", growth: "+18% (Cao)", environment: "Công ty Chứng khoán / Tập đoàn" },
    techStack: [
      { name: "Nghiên cứu ngành",icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Định giá thị trường",icon:<Calculator size={14} />, color: "bg-orange-100 text-orange-700" },
      { name: "Phân tích SWOT",  icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Data Scraping",   icon: <Database size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Cuốn từ điển sống", description: "Một chuyên gia phân tích ngành F&B có thể biết chính xác chi phí để mở một quán Highlands Coffee hay biên lợi nhuận của một ly trà sữa." },
      { title: "Nắm bắt trend nhanh nhất", description: "Họ là những người đầu tiên nhận ra xe điện hay năng lượng xanh sẽ trở thành 'mỏ vàng' của thập kỷ tới." },
    ],
    progression: [
      { level: "Junior Analyst", exp: "0 - 2 năm", role: "Thu thập tin tức ngành, vẽ biểu đồ thị phần, theo dõi đối thủ cạnh tranh." },
      { level: "Senior Analyst", exp: "2 - 5 năm", role: "Viết báo cáo chuyên sâu, dự báo xu hướng tăng trưởng ngành trong 3-5 năm tới." },
      { level: "Chuyên gia Ngành",exp: "5+ năm",   role: "Tư vấn cho ban lãnh đạo về việc nên đầu tư mở rộng hay rút vốn khỏi thị trường." },
    ],
    actionPlan: {
      projects: ["Thử phân tích bức tranh toàn cảnh ngành Thương mại điện tử (Shopee, TikTok Shop)", "Học dùng Power BI"],
      interviewPrep: "Kỹ năng phân tích chuỗi giá trị (Value Chain), mô hình 5 áp lực cạnh tranh của Porter.",
    },
  },
  "econometrician": {
    title: "Chuyên gia kinh tế lượng / Mô hình hóa",
    parentMajor: "Kinh Tế Học",
    description: "Sử dụng toán học, xác suất thống kê và khoa học máy tính để chứng minh các lý thuyết kinh tế và xây dựng mô hình dự báo tương lai.",
    stats: { salary: "25 - 80 Triệu", growth: "+25% (Rất cao)", environment: "Viện nghiên cứu / Fintech" },
    techStack: [
      { name: "Kinh tế lượng",   icon: <Activity size={14} />,     color: "bg-purple-100 text-purple-700" },
      { name: "Python / R",      icon: <Code size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "Thống kê Toán",   icon: <Calculator size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Data Modeling",   icon: <Layers size={14} />,       color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nhà tiên tri số liệu", description: "Bằng những phương trình phức tạp, họ có thể tính toán chính xác việc tăng lương tối thiểu thêm 5% sẽ làm tăng tỷ lệ lạm phát lên bao nhiêu %." },
      { title: "Giao thoa Kinh tế và Data", description: "Họ là phiên bản nâng cấp của Data Scientist, bởi họ không chỉ biết chạy AI mà còn hiểu bản chất nguyên nhân - kết quả của dòng tiền." },
    ],
    progression: [
      { level: "Data Analyst",   exp: "0 - 2 năm", role: "Làm sạch dữ liệu, chạy các mô hình hồi quy tuyến tính cơ bản." },
      { level: "Econometrician", exp: "2 - 5 năm", role: "Thiết kế các mô hình dự báo phức tạp, xử lý dữ liệu bảng (Panel Data)." },
      { level: "Trưởng phòng Data",exp:"5+ năm",   role: "Định hướng mô hình quản trị rủi ro tín dụng hoặc thuật toán giao dịch (Quant)." },
    ],
    actionPlan: {
      projects: ["Học cách sử dụng ngôn ngữ R hoặc phần mềm STATA/EViews", "Phân tích mối quan hệ giữa GDP và thất nghiệp"],
      interviewPrep: "Toán cao cấp, lý thuyết hồi quy, OLS, chuỗi thời gian (Time Series) và kinh tế vi mô.",
    },
  },
  "intl-org-specialist": {
    title: "Chuyên viên tổ chức quốc tế (IMF, WB, ADB)",
    parentMajor: "Kinh Tế Học",
    description: "Làm việc tại các tổ chức định chế tài chính toàn cầu để phân tích, hỗ trợ và tài trợ cho các dự án phát triển kinh tế, xóa đói giảm nghèo tại các quốc gia đang phát triển.",
    stats: { salary: "50 - 150+ Triệu", growth: "+10% (Rất cạnh tranh)", environment: "Quốc tế / Travel nhiều" },
    techStack: [
      { name: "Kinh tế Phát triển",icon:<Globe size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Tiếng Anh xuất sắc",icon:<Ear size={14} />,         color: "bg-purple-100 text-purple-700" },
      { name: "Quản lý quỹ",     icon: <DollarSign size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Ngoại giao",      icon: <HeartHandshake size={14}/>,color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Công dân toàn cầu", description: "Họ liên tục bay giữa các quốc gia, nay ở Washington D.C, mai ở Jakarta để họp bàn về các gói vay cứu trợ hàng tỷ đô la." },
      { title: "Miễn trừ ngoại giao", description: "Một số chuyên viên cấp cao của các tổ chức LHQ được cấp hộ chiếu ngoại giao và miễn thuế thu nhập cá nhân." },
    ],
    progression: [
      { level: "Research Assistant",exp:"0 - 3 năm",role: "Thu thập số liệu kinh tế vĩ mô của các nước đang phát triển, viết báo cáo ngắn." },
      { level: "Economist",      exp: "3 - 8 năm", role: "Đại diện tổ chức làm việc với bộ ngành các nước, đánh giá tính khả thi dự án." },
      { level: "Country Director",exp:"8+ năm",    role: "Giám đốc quốc gia, quyết định chiến lược tài trợ và giải ngân vốn của WB/ADB tại VN." },
    ],
    actionPlan: {
      projects: ["Săn học bổng du học Thạc sĩ Kinh tế Phát triển (Ví dụ: Fulbright, Chevening)", "Rèn luyện tiếng Anh IELTS 7.5+"],
      interviewPrep: "Kiến thức vĩ mô sắc bén, tầm nhìn toàn cầu, ngoại giao và tư duy kinh tế chính trị.",
    },
  },

  // ==========================================
  // 17. KỸ THUẬT CƠ KHÍ (MECHANICAL ENGINEERING)
  // ==========================================
  "cad-cam-engineer": {
    title: "Kỹ sư thiết kế cơ khí (CAD/CAM)",
    parentMajor: "Kỹ Thuật Cơ Khí",
    description: "Sử dụng phần mềm 3D để thiết kế, vẽ mô phỏng các chi tiết máy, khuôn mẫu nhựa và tối ưu hóa bản vẽ trước khi đưa vào sản xuất hàng loạt.",
    stats: { salary: "12 - 35 Triệu", growth: "+12% (Ổn định)", environment: "Văn phòng nhà máy" },
    techStack: [
      { name: "SolidWorks/Catia",icon: <Box size={14} />,          color: "bg-blue-100 text-blue-700" },
      { name: "Mô phỏng lực",    icon: <Activity size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Vật liệu học",    icon: <Layers size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Dung sai",        icon: <Search size={14} />,       color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Từ ảo thành thực", description: "Bất kỳ vật dụng nào quanh bạn (từ vỏ chai nhựa, chi tiết xe máy đến vỏ điện thoại) đều phải qua tay người kỹ sư CAD vẽ 3D trước." },
      { title: "Sai một ly đi một dặm", description: "Chỉ vẽ sai dung sai 0.1 mm cũng có thể khiến hàng vạn sản phẩm đúc ra không thể lắp ráp lại với nhau." },
    ],
    progression: [
      { level: "Kỹ sư thiết kế 2D/3D",exp:"0 - 2 năm",role:"Vẽ lại chi tiết theo mẫu có sẵn, xuất bản vẽ gia công 2D cho xưởng." },
      { level: "Kỹ sư R&D cơ khí",exp: "2 - 5 năm", role: "Tự thiết kế cơ cấu máy mới, chạy mô phỏng sức bền vật liệu (CAE)." },
      { level: "Trưởng phòng Thiết kế",exp:"5+ năm",role: "Lãnh đạo team thiết kế máy, làm việc với khách hàng Nhật, Hàn để nhận bản vẽ." },
    ],
    actionPlan: {
      projects: ["Thành thạo phần mềm SolidWorks hoặc AutoCAD Inventor", "Tự vẽ 3D một cơ cấu hộp số đơn giản"],
      interviewPrep: "Kỹ năng đọc bản vẽ kỹ thuật cực tốt, hiểu về dung sai lắp ghép và phương pháp gia công.",
    },
  },
  "manufacturing-engineer": {
    title: "Kỹ sư sản xuất / Công nghệ chế tạo",
    parentMajor: "Kỹ Thuật Cơ Khí",
    description: "Nhận bản vẽ từ bộ phận thiết kế, lên quy trình gia công, lập trình máy CNC và giám sát thợ để sản xuất ra chi tiết máy nhanh nhất, rẻ nhất.",
    stats: { salary: "10 - 30 Triệu", growth: "+10% (Ổn định)", environment: "Xưởng gia công / Nhà máy" },
    techStack: [
      { name: "Lập trình CNC",   icon: <Terminal size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Đọc bản vẽ",      icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Quản lý máy công cụ",icon:<Settings size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Lean Manufacturing",icon:<TrendingUp size={14} />,  color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Chúa tể phế liệu", description: "Kỹ sư chế tạo giỏi là người biết cách lập trình cắt gọt sao cho tốn ít thời gian của máy nhất và bỏ đi ít phoi sắt (phế liệu) nhất." },
      { title: "Máy móc đắt hơn siêu xe", description: "Họ vận hành những cỗ máy phay/tiện CNC 5 trục của Nhật/Đức có giá lên tới hàng triệu đô la." },
    ],
    progression: [
      { level: "Kỹ sư lập trình CAM",exp:"0 - 2 năm",role:"Sử dụng phần mềm Mastercam, xuất G-code cho máy CNC cắt gọt." },
      { level: "Kỹ sư cải tiến SX",exp:"2 - 5 năm",role: "Tối ưu đường chạy dao, thiết kế đồ gá (Jig) để công nhân làm việc nhanh hơn." },
      { level: "Quản đốc xưởng",  exp: "5+ năm",   role: "Điều phối sản xuất, quản lý hàng chục máy CNC và công nhân dưới quyền." },
    ],
    actionPlan: {
      projects: ["Thực tập tại xưởng cơ khí, làm quen với máy Tiện, Phay", "Học G-code cơ bản"],
      interviewPrep: "Hiểu biết về dụng cụ cắt (dao phay, dao tiện), tốc độ cắt và các loại thép hợp kim.",
    },
  },
  "robotics-engineer": {
    title: "Kỹ sư Cơ điện tử / Robotics",
    parentMajor: "Kỹ Thuật Cơ Khí",
    description: "Sự kết hợp hoàn hảo giữa Cơ khí, Điện tử và IT. Thiết kế, chế tạo và lập trình cho cánh tay robot công nghiệp, hệ thống băng chuyền tự động thông minh.",
    stats: { salary: "18 - 50 Triệu", growth: "+30% (Cực cao)", environment: "Nhà máy tự động hóa" },
    techStack: [
      { name: "Thiết kế Robot",  icon: <Settings size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Lập trình C/C++", icon: <Code size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "Điều khiển Motor",icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
      { name: "Thị giác máy tính",icon:<Monitor size={14} />,      color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Robot làm việc trong bóng tối", description: "Các hệ thống robot được thiết kế tốt đến mức nhà máy có thể tắt hết đèn (Lights-out manufacturing) mà băng chuyền vẫn sản xuất ra hàng hóa." },
      { title: "Lắp não cho máy móc", description: "Không chỉ viết code, kỹ sư robotics phải tính toán động học để robot gắp thả đồ vật không bị giật cục hay rơi rớt." },
    ],
    progression: [
      { level: "Kỹ sư Cơ điện tử",exp: "0 - 2 năm", role: "Đấu nối tủ điện điều khiển, lập trình PLC cơ bản, test chạy robot thử." },
      { level: "Kỹ sư Tích hợp hệ thống",exp:"2 - 5 năm",role:"Lắp ráp hoàn chỉnh một line tự động, kết hợp robot với camera (Machine Vision)." },
      { level: "Robotics R&D",   exp: "5+ năm",    role: "Nghiên cứu tự chế tạo AGV (Robot tự hành) và cánh tay robot thương hiệu riêng." },
    ],
    actionPlan: {
      projects: ["Làm đồ án chế tạo xe dò line hoặc cánh tay robot mini bằng Arduino/Raspberry Pi"],
      interviewPrep: "Kiến thức về cảm biến, PID, động cơ Servo/Bước và hiểu biết về PLC/Vi điều khiển.",
    },
  },
  "automotive-engineer": {
    title: "Kỹ sư ô tô & xe điện",
    parentMajor: "Kỹ Thuật Cơ Khí",
    description: "Nghiên cứu, thiết kế, thử nghiệm và cải tiến các hệ thống của xe hơi (động cơ, khung gầm, điện vỏ) và đặc biệt là hệ thống pin/động cơ của xe điện (EV).",
    stats: { salary: "15 - 45+ Triệu", growth: "+25% (Rất cao)", environment: "Nhà máy lắp ráp / R&D" },
    techStack: [
      { name: "Động lực học",    icon: <Activity size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Hệ thống Pin (EV)",icon:<Battery size={14} />,      color: "bg-green-100 text-green-700" },
      { name: "Thiết kế Khung gầm",icon:<Box size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "Kiểm định an toàn",icon:<Shield size={14} />,       color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Xe hơi là máy tính có bánh xe", description: "Một chiếc ô tô điện hiện đại chứa hàng trăm triệu dòng code và bộ vi xử lý không thua kém gì một chiếc máy tính cao cấp." },
      { title: "Cách mạng xe điện", description: "Sự trỗi dậy của xe điện đang định nghĩa lại toàn bộ ngành công nghiệp ô tô, mở ra cơ hội khổng lồ cho kỹ sư ô tô tại Việt Nam." },
    ],
    progression: [
      { level: "Kỹ sư lắp ráp/bảo hành",exp:"0 - 2 năm",role:"Xử lý lỗi trên dây chuyền lắp ráp, kiểm tra chẩn đoán lỗi xe bằng máy." },
      { level: "Kỹ sư thiết kế linh kiện",exp:"2 - 5 năm",role:"Vẽ CAD/CAM các chi tiết nhựa, khuôn vỏ xe và mô phỏng va chạm an toàn." },
      { level: "Chuyên gia xe điện",exp: "5+ năm",   role: "Nghiên cứu cải tiến hệ thống truyền động điện, trạm sạc và quản trị nhiệt cho pin." },
    ],
    actionPlan: {
      projects: ["Tham gia cuộc thi chế tạo xe sinh thái tiết kiệm nhiên liệu (EMC) hoặc xe năng lượng mặt trời"],
      interviewPrep: "Nắm vững nguyên lý động cơ đốt trong, hệ thống truyền lực ô tô và xu hướng xe điện.",
    },
  },
  "hvac-engineer": {
    title: "Kỹ sư HVAC (Điều hòa không khí & thông gió)",
    parentMajor: "Kỹ Thuật Cơ Khí",
    description: "Lá phổi của tòa nhà. Thiết kế, tính toán và thi công hệ thống điều hòa nhiệt độ trung tâm (Chiller, VRV), thông gió và hút khói sự cố cho công trình.",
    stats: { salary: "12 - 35 Triệu", growth: "+10% (Ổn định)", environment: "Công trường / Văn phòng M&E" },
    techStack: [
      { name: "Nhiệt lạnh",      icon: <Sun size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Tính tải lạnh",   icon: <Calculator size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Vẽ Ống gió",      icon: <Layers size={14} />,       color: "bg-slate-100 text-slate-700" },
      { name: "PCCC/Thông gió",  icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Bậc thầy không khí", description: "Họ tính toán chính xác mỗi người trong phòng họp cần bao nhiêu lít không khí tươi mỗi phút để không bị buồn ngủ." },
      { title: "Cứu người trong hỏa hoạn", description: "Hệ thống hút khói cầu thang bộ do HVAC thiết kế chính là thứ cứu mạng người dân khỏi bị ngạt khói khi có cháy tòa nhà." },
    ],
    progression: [
      { level: "Kỹ sư thiết kế HVAC",exp:"0 - 2 năm",role:"Dùng phần mềm tính tải lạnh (HAP, Trace), vẽ bố trí ống gió, ống nước lạnh." },
      { level: "Kỹ sư giám sát", exp: "2 - 5 năm", role: "Kiểm tra thi công ống gió, bảo ôn, lắp đặt máy lạnh VRV/Chiller tại công trường." },
      { level: "Chủ trì HVAC",   exp: "5+ năm",    role: "Thuyết minh giải pháp kỹ thuật, chịu trách nhiệm vận hành chạy thử hệ thống." },
    ],
    actionPlan: {
      projects: ["Thành thạo cách tính nhiệt lạnh cơ bản cho một căn phòng", "Vẽ 2D một sơ đồ ống gió máy lạnh âm trần"],
      interviewPrep: "Nắm vững lý thuyết truyền nhiệt, cơ lưu chất và biết cách đọc biểu đồ không khí ẩm.",
    },
  },

  // ==========================================
  // 18. SINH HỌC & CÔNG NGHỆ SINH HỌC (BIOLOGY)
  // ==========================================
  "lab-researcher": {
    title: "Nghiên cứu viên phòng thí nghiệm",
    parentMajor: "Sinh Học & Công Nghệ Sinh Học",
    description: "Khám phá bí mật của sự sống. Thực hiện các thí nghiệm chiết xuất DNA, nuôi cấy mô tế bào, chỉnh sửa gen để ứng dụng vào y học, nông nghiệp.",
    stats: { salary: "10 - 30 Triệu", growth: "+15% (Cao)", environment: "Phòng Lab / Viện nghiên cứu" },
    techStack: [
      { name: "Kỹ năng Lab",     icon: <FlaskConical size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Sinh học phân tử",icon:<BrainCircuit size={14} />,  color: "bg-purple-100 text-purple-700" },
      { name: "Phân tích Data",  icon: <BarChart size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Đọc báo KH",      icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Quản gia của vi khuẩn", description: "Nghiên cứu viên phải đi làm cả cuối tuần chỉ để... 'cho tế bào ăn' và chăm sóc các đĩa nuôi cấy vi khuẩn." },
      { title: "Môi trường vô trùng", description: "Họ thao tác trong tủ an toàn sinh học với trang phục kín mít từ đầu đến chân để không làm nhiễm khuẩn mẫu vật." },
    ],
    progression: [
      { level: "Kỹ thuật viên Lab", exp: "0 - 2 năm", role: "Pha hóa chất, vệ sinh dụng cụ, chạy PCR và điện di theo protocol có sẵn." },
      { level: "Nghiên cứu viên",   exp: "2 - 5 năm", role: "Thiết kế thí nghiệm mới, giải trình tự gen, viết bài báo khoa học." },
      { level: "Nhà khoa học trưởng",exp:"5+ năm",  role: "Xin quỹ tài trợ dự án cấp quốc gia, hướng dẫn nghiên cứu sinh Thạc sĩ/Tiến sĩ." },
    ],
    actionPlan: {
      projects: ["Thực tập tại các viện nghiên cứu hoặc phòng lab của đại học ngay từ năm 2", "Học thao tác pipet chuẩn xác"],
      interviewPrep: "Tiếng Anh chuyên ngành sinh học, tính kiên nhẫn cực cao và chấp nhận làm việc với môi trường độc hại hóa chất.",
    },
  },
  "qc-pharma-bio": {
    title: "Chuyên viên kiểm nghiệm thực phẩm / dược phẩm",
    parentMajor: "Sinh Học & Công Nghệ Sinh Học",
    description: "Phân tích mẫu sữa, thịt, mỹ phẩm, thuốc men để đảm bảo không có vi khuẩn gây bệnh (E.coli, Salmonella) và đạt tiêu chuẩn an toàn sinh học.",
    stats: { salary: "10 - 25 Triệu", growth: "+12% (Ổn định)", environment: "Phòng Lab nhà máy" },
    techStack: [
      { name: "Vi sinh vật học", icon: <Search size={14} />,       color: "bg-green-100 text-green-700" },
      { name: "Tiêu chuẩn GMP",  icon: <CheckCircle size={14} />,  color: "bg-blue-100 text-blue-700" },
      { name: "Quy trình vô trùng",icon:<Shield size={14} />,      color: "bg-slate-100 text-slate-700" },
      { name: "Viết báo cáo QC", icon: <FileText size={14} />,     color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Bắt giun sán", description: "Nghề của họ là soi kính hiển vi cả ngày để đếm số lượng vi khuẩn hoặc tìm ký sinh trùng trong các mẫu thực phẩm." },
      { title: "Sức mạnh phủ quyết", description: "Chuyên viên kiểm nghiệm vi sinh có quyền hủy bỏ cả một lô hàng giá trị hàng tỷ đồng nếu phát hiện mầm bệnh." },
    ],
    progression: [
      { level: "KTV Kiểm nghiệm", exp: "0 - 2 năm", role: "Lấy mẫu từ dây chuyền, cấy chuyền vi khuẩn, ủ mẫu và đọc kết quả đĩa Petri." },
      { level: "Chuyên viên QC",  exp: "2 - 5 năm", role: "Giải quyết sự cố khi mẫu bị nhiễm chéo, xây dựng quy chuẩn vi sinh mới." },
      { level: "Trưởng phòng QC Lab",exp:"5+ năm",  role: "Chịu trách nhiệm pháp lý trước các cơ quan an toàn thực phẩm, y tế của nhà nước." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu về các tiêu chuẩn HACCP, ISO 22000, GMP", "Thực hành nuôi cấy vi khuẩn trên đĩa agar tại trường"],
      interviewPrep: "Nắm vững phân loại vi khuẩn, kỹ thuật cấy vô trùng và cẩn thận, trung thực với số liệu.",
    },
  },
  "agri-biotech": {
    title: "Kỹ sư công nghệ sinh học nông nghiệp",
    parentMajor: "Sinh Học & Công Nghệ Sinh Học",
    description: "Nhà ảo thuật của cây trồng vật nuôi. Lai tạo giống cây chịu hạn, tạo ra phân bón sinh học và chế phẩm sinh học trị sâu bệnh thay cho hóa chất độc hại.",
    stats: { salary: "12 - 35 Triệu", growth: "+15% (Cao)", environment: "Trang trại công nghệ cao / Lab" },
    techStack: [
      { name: "Nuôi cấy mô",     icon: <Leaf size={14} />,         color: "bg-green-100 text-green-700" },
      { name: "Di truyền học",   icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Vi sinh nông nghiệp",icon:<FlaskConical size={14} />,color: "bg-orange-100 text-orange-700" },
      { name: "Thực địa",         icon: <Map size={14} />,          color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Từ ống nghiệm ra ruộng đồng", description: "Họ có thể nhân bản ra hàng vạn cây chuối con giống hệt nhau về gen chỉ từ một mẩu lá nhỏ xíu trong ống nghiệm." },
      { title: "Nông dân mang áo blouse", description: "Nghề này kết hợp giữa việc mặc áo blouse trắng soi kính hiển vi buổi sáng và lội bùn kiểm tra giống lúa ngoài đồng vào buổi chiều." },
    ],
    progression: [
      { level: "Kỹ sư R&D nông nghiệp",exp:"0 - 2 năm",role:"Thực hiện nhân giống in-vitro, pha chế dung dịch dinh dưỡng nuôi cấy mô." },
      { level: "Kỹ sư Nông nghiệp số",exp:"2 - 5 năm",role: "Ứng dụng chế phẩm sinh học trị sâu bệnh ngoài nhà màng, kiểm tra năng suất." },
      { level: "Giám đốc Nông trại CNC",exp:"5+ năm", role: "Quản lý toàn bộ quy trình sản xuất của trang trại thủy canh, dưa lưới công nghệ cao." },
    ],
    actionPlan: {
      projects: ["Thử nghiệm trồng nấm, thủy canh rau mầm tại nhà", "Tìm hiểu về công nghệ vi sinh EM (Effective Microorganisms)"],
      interviewPrep: "Sẵn sàng di chuyển công tác tỉnh, chịu khó lội ruộng, hiểu biết về sinh lý thực vật và di truyền.",
    },
  },
  "clinical-biomedical": {
    title: "Chuyên viên y sinh học lâm sàng",
    parentMajor: "Sinh Học & Công Nghệ Sinh Học",
    description: "Cánh tay đắc lực của bác sĩ. Phân tích mẫu máu, nước tiểu, dịch cơ thể bằng máy móc tối tân để hỗ trợ bác sĩ chẩn đoán chính xác nguyên nhân gây bệnh.",
    stats: { salary: "10 - 25 Triệu", growth: "+10% (Ổn định)", environment: "Phòng xét nghiệm Bệnh viện" },
    techStack: [
      { name: "Huyết học/Sinh hóa",icon:<Activity size={14} />,    color: "bg-red-100 text-red-700" },
      { name: "Vận hành máy XN", icon: <Settings size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Sinh học phân tử",icon: <Database size={14} />,     color: "bg-purple-100 text-purple-700" },
      { name: "Quy chuẩn ISO 15189",icon:<Shield size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Khám bệnh qua máy", description: "Bác sĩ không thể biết bệnh nhân bị tiểu đường hay ung thư máu nếu không có những bản báo cáo xét nghiệm do chuyên viên y sinh thực hiện." },
      { title: "Nhanh và chính xác", description: "Chuyên viên phải thao tác cực nhanh trên hàng trăm mẫu máu mỗi ngày, nhưng không được phép nhầm lẫn kết quả của bất kỳ ai." },
    ],
    progression: [
      { level: "KTV Xét nghiệm", exp: "0 - 3 năm", role: "Tiếp nhận mẫu bệnh phẩm, chạy máy huyết học, sinh hóa, miễn dịch." },
      { level: "Chuyên viên phôi/IVF",exp:"3 - 6 năm", role: "Phân tích sâu về di truyền, làm thụ tinh ống nghiệm (IVF) (đòi hỏi kỹ thuật cực cao)." },
      { level: "Trưởng phòng Xét nghiệm",exp:"6+ năm", role: "Quản lý nhân sự phòng Lab bệnh viện, đánh giá chuẩn định kỳ." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu về cơ chế hoạt động của các máy xét nghiệm huyết học, sinh hóa", "Làm quen với các chỉ số máu cơ bản"],
      interviewPrep: "Sự tập trung cao độ, kiến thức miễn dịch học, di truyền y học và khả năng chịu mùi hóa chất bệnh viện.",
    },
  },
  "environmental-specialist": {
    title: "Chuyên viên môi trường & Xử lý chất thải",
    parentMajor: "Sinh Học & Công Nghệ Sinh Học",
    description: "Bác sĩ của Trái Đất. Dùng vi sinh vật và thực vật để 'ăn' các chất ô nhiễm, làm sạch nguồn nước thải công nghiệp và phục hồi đất đai nhiễm độc.",
    stats: { salary: "10 - 28 Triệu", growth: "+18% (Cao)", environment: "Công trường / Trạm xử lý" },
    techStack: [
      { name: "Xử lý nước thải", icon: <Zap size={14} />,          color: "bg-blue-100 text-blue-700" },
      { name: "Vi sinh môi trường",icon:<Leaf size={14} />,        color: "bg-green-100 text-green-700" },
      { name: "Nuôi cấy bùn hoạt tính",icon:<FlaskConical size={14}/>,color:"bg-orange-100 text-orange-700" },
      { name: "Đánh giá ĐTM",    icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Nuôi vi khuẩn làm việc", description: "Trong bể xử lý nước thải, họ 'nuôi' hàng tỷ con vi khuẩn và cung cấp oxy cho chúng để chúng ăn hết chất bẩn hữu cơ trong nước." },
      { title: "Làm bạn với mùi hôi", description: "Bùn hoạt tính, nước thải rác là môi trường làm việc thường xuyên. Nghề này cần sự hy sinh lớn cho môi trường chung." },
    ],
    progression: [
      { level: "Kỹ sư vận hành trạm",exp:"0 - 2 năm", role: "Trực ca vận hành hệ thống bơm, châm hóa chất, đo nồng độ BOD, COD hàng ngày." },
      { level: "Chuyên viên Tư vấn",exp: "2 - 5 năm", role: "Lập hồ sơ đánh giá tác động môi trường (ĐTM) cho các dự án xây dựng." },
      { level: "Chủ trì thiết kế HT",exp:"5+ năm",   role: "Thiết kế toàn bộ bản vẽ công nghệ hệ thống xử lý nước thải cho nhà máy lớn." },
    ],
    actionPlan: {
      projects: ["Nghiên cứu cách lọc nước sinh hoạt bằng vật liệu đơn giản", "Hiểu các thông số pH, DO, BOD, COD"],
      interviewPrep: "Hiểu biết cơ chế vi sinh hiếu khí/kỵ khí, vẽ AutoCAD cơ bản và nắm Luật bảo vệ môi trường.",
    },
  },

  // ==========================================
  // 19. KỸ THUẬT XÂY DỰNG (CIVIL ENGINEERING)
  // ==========================================
  "structural-engineer": {
    title: "Kỹ sư kết cấu",
    parentMajor: "Kỹ Thuật Xây Dựng",
    description: "Tính toán sức chịu tải, thiết kế khung xương (bê tông, cốt thép) để đảm bảo tòa nhà 100 tầng, cây cầu vượt biển không bị sập trước gió bão, động đất.",
    stats: { salary: "12 - 40 Triệu", growth: "+12% (Ổn định)", environment: "Văn phòng kỹ thuật" },
    techStack: [
      { name: "Tính toán chịu lực",icon:<Calculator size={14} />,  color: "bg-orange-100 text-orange-700" },
      { name: "ETABS / SAP2000", icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Bê tông & Thép", icon: <Box size={14} />,          color: "bg-slate-100 text-slate-700" },
      { name: "AutoCAD/Revit",   icon: <PenTool size={14} />,      color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nỗi ám ảnh mang tên 'Gió'", description: "Với các tòa nhà chọc trời, gió mới là thứ đáng sợ nhất. Kỹ sư phải tính toán để đỉnh tháp có thể lắc lư vài mét mà không gãy." },
      { title: "Người thực tế", description: "Kiến trúc sư vẽ những hình khối uốn lượn bay bổng, nhưng kỹ sư kết cấu là người đau đầu nghĩ cách nhét cốt thép vào để nó đứng vững." },
    ],
    progression: [
      { level: "Họa viên kết cấu", exp: "0 - 2 năm", role: "Vẽ chi tiết bố trí thép (detailing) từ kết quả tính toán của kỹ sư chính." },
      { level: "Kỹ sư thiết kế",   exp: "2 - 5 năm", role: "Trực tiếp mô phỏng tải trọng, thiết kế móng, cột, dầm, sàn." },
      { level: "Chủ trì kết cấu",  exp: "5+ năm",    role: "Ký tên đóng dấu chịu trách nhiệm pháp lý cho độ an toàn của toàn bộ công trình." },
    ],
    actionPlan: {
      projects: ["Thành thạo sức bền vật liệu, cơ học kết cấu", "Học cách sử dụng phần mềm ETABS hoặc SAFE"],
      interviewPrep: "Giải thành thạo các bài toán biểu đồ nội lực, hiểu tiêu chuẩn TCVN, Eurocode trong thiết kế.",
    },
  },
  "site-supervisor": {
    title: "Giám sát thi công công trình",
    parentMajor: "Kỹ Thuật Xây Dựng",
    description: "Đại diện của bộ phận kỹ thuật nằm vùng tại công trường. Quản lý công nhân, đo đạc nghiệm thu từng xe bê tông, từng thanh thép trước khi lấp kín.",
    stats: { salary: "10 - 35 Triệu", growth: "+15% (Cao)", environment: "Công trường (Nắng bụi)" },
    techStack: [
      { name: "Đọc bản vẽ",      icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Nghiệm thu",      icon: <CheckCircle size={14} />,  color: "bg-green-100 text-green-700" },
      { name: "Xử lý thầu phụ",  icon: <Users size={14} />,        color: "bg-orange-100 text-orange-700" },
      { name: "Biện pháp thi công",icon:<Hammer size={14} />,      color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Kỹ sư... dọn rác", description: "Đôi khi nhiệm vụ lớn nhất trong ngày của kỹ sư giám sát là hò hét công nhân dọn dẹp vệ sinh mặt bằng gọn gàng trước khi sếp lớn xuống thăm." },
      { title: "Mặt đen, dạ sáng", description: "Công việc vất vả, dầm mưa dãi nắng nhưng đây là nơi rèn luyện bản lĩnh thực chiến nhanh nhất của dân xây dựng." },
    ],
    progression: [
      { level: "Giám sát thi công",exp: "0 - 3 năm", role: "Chấm công thợ, kiểm tra kích thước ván khuôn, số lượng cốt thép." },
      { level: "Chỉ huy phó",      exp: "3 - 7 năm", role: "Lập biện pháp thi công, gọi vật tư, giải quyết các sự cố đổ bê tông." },
      { level: "Chỉ huy trưởng",   exp: "7+ năm",    role: "Quản lý ngân sách, tiến độ toàn công trường, ngoại giao với thanh tra/công an." },
    ],
    actionPlan: {
      projects: ["Xin đi thực tập công nhân cốt thép/cốp pha để hiểu cách thợ làm việc", "Đọc bản vẽ CAD nhà phố cơ bản"],
      interviewPrep: "Kỹ năng giao tiếp bỗ bã và cứng rắn với thợ thuyền, hiểu biết trình tự thi công từ móng đến mái.",
    },
  },
  "infrastructure-engineer": {
    title: "Kỹ sư giao thông & hạ tầng",
    parentMajor: "Kỹ Thuật Xây Dựng",
    description: "Xây dựng huyết mạch của đất nước. Thiết kế và thi công đường cao tốc, hầm chui, cầu vượt, sân bay và hệ thống cấp thoát nước đô thị ngầm.",
    stats: { salary: "12 - 40 Triệu", growth: "+18% (Cao)", environment: "Công trường hạ tầng lớn" },
    techStack: [
      { name: "Thiết kế cầu đường",icon:<Map size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "AutoCAD Civil 3D",icon: <Monitor size={14} />,      color: "bg-slate-100 text-slate-700" },
      { name: "Trắc địa",        icon: <Target size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Vật liệu Asphalt",icon: <Layers size={14} />,       color: "bg-gray-800 text-white" },
    ],
    funFacts: [
      { title: "Nghề đi phá núi", description: "Kỹ sư cầu đường là những người đầu tiên đặt chân đến những vùng hoang vu nhất để nổ mìn, bạt núi mở đường." },
      { title: "Ăn bờ ngủ bụi", description: "Dự án cao tốc thường nằm xa khu dân cư, kỹ sư phải sống trong các lán trại bằng tôn dựng tạm giữa rừng nhiều năm liền." },
    ],
    progression: [
      { level: "Kỹ sư đo đạc/thiết kế",exp:"0 - 3 năm",role:"Đứng máy toàn đạc ngoài đường, thiết kế độ dốc dọc, trắc ngang mặt đường." },
      { level: "Kỹ sư thi công Cầu/Đường",exp:"3 - 7 năm",role:"Giám sát lu lèn nhựa đường, thi công cọc nhồi mố cầu." },
      { level: "Giám đốc tư vấn/BQL",exp:"7+ năm", role: "Quản lý dự án cao tốc ngàn tỷ, thẩm định thiết kế các nút giao phức tạp." },
    ],
    actionPlan: {
      projects: ["Học cách sử dụng máy Thủy bình, máy Toàn đạc điện tử", "Tìm hiểu phần mềm thiết kế đường NovaTDN hoặc Civil 3D"],
      interviewPrep: "Sức khỏe cực tốt, sẵn sàng sống xa nhà, nắm vững cơ học đất và công nghệ bê tông nhựa.",
    },
  },
  "construction-pm": {
    title: "Quản lý dự án xây dựng (PM)",
    parentMajor: "Kỹ Thuật Xây Dựng",
    description: "Nhà điều hành bao quát toàn dự án. Đại diện cho Chủ đầu tư để kiểm soát ba tam giác vàng: Tiến độ - Chất lượng - Chi phí của một công trình lớn.",
    stats: { salary: "25 - 80+ Triệu", growth: "+12% (Ổn định)", environment: "Văn phòng BQL Dự án" },
    techStack: [
      { name: "Quản trị Ngân sách",icon:<DollarSign size={14} />,  color: "bg-green-100 text-green-700" },
      { name: "Lập Tiến độ",     icon: <Activity size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Hợp đồng (FIDIC)",icon: <FileText size={14} />,     color: "bg-amber-100 text-amber-700" },
      { name: "Đàm phán",        icon: <HeartHandshake size={14}/>,color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Nghề đi đòi nợ và khất nợ", description: "PM liên tục phải đòi tiền Chủ đầu tư để trả cho nhà thầu, và khất nợ nhà cung cấp vật tư để đảm bảo dòng tiền dự án không bị đứt." },
      { title: "Quyền lực bằng cái gật đầu", description: "Chỉ khi PM ký biên bản nghiệm thu, nhà thầu xây dựng mới có thể rút được hàng tỷ đồng từ ngân hàng." },
    ],
    progression: [
      { level: "Kỹ sư QS (Khối lượng)",exp:"0 - 3 năm",role:"Bóc tách khối lượng từ bản vẽ, làm hồ sơ thanh quyết toán tiền." },
      { level: "Điều phối dự án",exp: "3 - 7 năm", role: "Kết nối các nhà thầu Kiến trúc - Cơ điện - Nội thất để không bị 'đá' nhau tiến độ." },
      { level: "Giám đốc Quản lý DA",exp:"7+ năm", role: "Chịu trách nhiệm pháp lý và tài chính cuối cùng, báo cáo trực tiếp cho CEO chủ đầu tư." },
    ],
    actionPlan: {
      projects: ["Học MS Project để vẽ tiến độ Gantt Chart", "Đọc hiểu cơ bản các điều khoản hợp đồng xây dựng"],
      interviewPrep: "Tư duy quản trị dự án (PMP), am hiểu luật xây dựng, luật đấu thầu và kỹ năng ngoại giao xuất sắc.",
    },
  },
  "geotechnical-consultant": {
    title: "Chuyên viên tư vấn địa kỹ thuật",
    parentMajor: "Kỹ Thuật Xây Dựng",
    description: "Bác sĩ bắt mạch lòng đất. Khảo sát địa chất, khoan thăm dò và đưa ra phương án ép cọc, làm móng để tòa nhà không bị lún, nứt, nghiêng.",
    stats: { salary: "12 - 35 Triệu", growth: "+10% (Chuyên môn sâu)", environment: "Hiện trường / Phòng Lab" },
    techStack: [
      { name: "Cơ học đất",      icon: <Layers size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Thiết kế Móng sâu",icon:<Box size={14} />,          color: "bg-blue-100 text-blue-700" },
      { name: "Khoan địa chất",  icon: <Hammer size={14} />,       color: "bg-slate-100 text-slate-700" },
      { name: "Phần mềm Plaxis", icon: <Monitor size={14} />,      color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Rủi ro chôn dưới đất", description: "Sai lầm của kỹ sư kết cấu có thể nhìn thấy bằng mắt thường, nhưng sai lầm của địa kỹ thuật bị chôn vùi dưới đất, khi tòa nhà nứt nghiêng thì đã quá muộn." },
      { title: "Nghề đi móc bùn", description: "Họ phải lấy mẫu đất từ sâu 50m dưới lòng đất mang về phòng lab để ép, nén, vắt nước tìm ra tính chất cơ lý." },
    ],
    progression: [
      { level: "Kỹ sư khảo sát hiện trường",exp:"0 - 2 năm",role:"Giám sát đội khoan địa chất, ghi chép số liệu nhật ký khoan." },
      { level: "Kỹ sư thiết kế nền móng",exp:"2 - 5 năm",role: "Tính toán sức chịu tải của cọc, thiết kế tường chắn đất cho tầng hầm." },
      { level: "Chuyên gia địa kỹ thuật",exp:"5+ năm",   role: "Tư vấn xử lý nền đất yếu cho các dự án sân bay, cảng biển tỷ đô." },
    ],
    actionPlan: {
      projects: ["Thực hành thuần thục các bài thí nghiệm cơ học đất tại trường", "Học phần mềm Geo5 hoặc Plaxis"],
      interviewPrep: "Kiến thức chuyên sâu về đất đá, sức chịu tải móng cọc và sẵn sàng dầm sương dãi nắng tại bãi khoan.",
    },
  },

  // ==========================================
  // 20. NGÔN NGỮ ANH (ENGLISH)
  // ==========================================
  "interpreter": {
    title: "Biên phiên dịch (Interpreter/Translator)",
    parentMajor: "Ngôn Ngữ Anh",
    description: "Cầu nối ngôn ngữ. Chuyển ngữ chính xác, sắc bén văn bản (Biên dịch) hoặc lời nói trực tiếp (Phiên dịch cabin/đuổi) trong các hội nghị quốc tế, đàm phán chính phủ.",
    stats: { salary: "15 - 50+ Triệu", growth: "+15% (Cao)", environment: "Freelance / Hội nghị VIP" },
    techStack: [
      { name: "Dịch cabin (Simultaneous)",icon:<Ear size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Dịch đuổi (Consecutive)",icon:<Users size={14} />,  color: "bg-blue-100 text-blue-700" },
      { name: "Phản xạ ngôn ngữ",icon: <Zap size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Văn hóa đa quốc gia",icon:<Globe size={14} />,      color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề 'cháy não'", description: "Phiên dịch cabin (dịch song song cùng lúc diễn giả nói) căng thẳng đến mức họ phải thay ca mỗi 15-30 phút để não không bị kiệt sức." },
      { title: "Nắm bí mật quốc gia", description: "Đôi khi họ là một trong ba người duy nhất trong phòng kín biết các nguyên thủ quốc gia đang đàm phán bí mật điều gì." },
    ],
    progression: [
      { level: "Biên dịch viên (Translator)",exp:"0 - 2 năm",role:"Dịch tài liệu hợp đồng, văn bản chuyên ngành với tốc độ và độ chính xác cao." },
      { level: "Phiên dịch viên (Interpreter)",exp:"2 - 5 năm",role:"Dịch nói tại các cuộc họp B2B, tháp tùng đoàn công tác nước ngoài." },
      { level: "Phiên dịch Cabin",exp: "5+ năm",   role: "Đỉnh cao nghề nghiệp, ngồi trong buồng kính dịch trực tiếp tại hội nghị cấp cao." },
    ],
    actionPlan: {
      projects: ["Nhận dịch phụ đề phim, video TED Talk tình nguyện", "Luyện trí nhớ ngắn hạn (Shadowing technique)"],
      interviewPrep: "Ngoại ngữ xuất chúng, giọng nói rõ ràng, khả năng xử lý tình huống khi diễn giả nói tiếng lóng/thành ngữ.",
    },
  },
  "english-teacher": {
    title: "Giáo viên tiếng Anh / IELTS",
    parentMajor: "Ngôn Ngữ Anh",
    description: "Truyền cảm hứng và kỹ năng tiếng Anh cho học sinh/người đi làm. Luyện thi các chứng chỉ quốc tế (IELTS, TOEFL) hoặc giảng dạy giao tiếp.",
    stats: { salary: "12 - 50+ Triệu", growth: "+20% (Cao)", environment: "Trường học / Trung tâm / Online" },
    techStack: [
      { name: "TESOL / TEFL",    icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Ngữ âm học",      icon: <Ear size={14} />,          color: "bg-purple-100 text-purple-700" },
      { name: "Kỹ năng Sư phạm", icon: <BookOpen size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Khuấy động lớp",  icon: <Zap size={14} />,          color: "bg-pink-100 text-pink-700" },
    ],
    funFacts: [
      { title: "Ca sĩ bất đắc dĩ", description: "Giáo viên dạy tiếng Anh trẻ em (Kids) thường phải hát, nhảy múa và làm đủ trò hề để giữ sự chú ý của các bé trong 1.5 tiếng đồng hồ." },
      { title: "Nghề thu nhập khủng", description: "Giáo viên luyện thi IELTS tự do có thể thu nhập từ 50 - 100 triệu/tháng nếu xây dựng được thương hiệu cá nhân xuất sắc." },
    ],
    progression: [
      { level: "Trợ giảng (TA)", exp: "0 - 1 năm", role: "Sửa bài tập, điểm danh, giải đáp thắc mắc ngữ pháp cho học viên." },
      { level: "Giáo viên đứng lớp",exp:"1 - 4 năm", role: "Soạn giáo án, trực tiếp giảng dạy và cam kết đầu ra chứng chỉ." },
      { level: "Academic Manager",exp: "4+ năm",   role: "Quản lý đào tạo giáo viên mới, biên soạn bộ giáo trình độc quyền cho trung tâm." },
    ],
    actionPlan: {
      projects: ["Tự học và thi lấy bằng IELTS >= 7.5", "Quay video dạy một điểm ngữ pháp nhỏ trên Tiktok"],
      interviewPrep: "Phát âm (Pronunciation) cực kỳ chuẩn xác, kỹ năng demo lớp học năng lượng cao.",
    },
  },
  "intl-communications": {
    title: "Chuyên viên truyền thông quốc tế",
    parentMajor: "Ngôn Ngữ Anh",
    description: "Quản lý hình ảnh và nội dung truyền thông bằng tiếng Anh cho các tập đoàn đa quốc gia, NGO hoặc doanh nghiệp Việt Nam muốn vươn ra toàn cầu.",
    stats: { salary: "15 - 40 Triệu", growth: "+25% (Rất cao)", environment: "Văn phòng / Công ty đa quốc gia" },
    techStack: [
      { name: "Viết lách (T.Anh)",icon: <PenTool size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Social Media Xuyên QG",icon:<Globe size={14} />,    color: "bg-green-100 text-green-700" },
      { name: "Quan hệ báo chí QT",icon:<Megaphone size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Thấu hiểu Văn hóa",icon:<BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Cấm kỵ văn hóa", description: "Một câu đùa hay ở Mỹ có thể là sự xúc phạm ở Trung Đông. Chuyên viên phải có sự tinh tế văn hóa để không tạo ra khủng hoảng truyền thông." },
      { title: "Global Citizen", description: "Họ thường xuyên làm việc qua email, Zoom với các đồng nghiệp và báo chí từ Mỹ, Châu Âu, Singapore lệch múi giờ liên tục." },
    ],
    progression: [
      { level: "Comms Executive",exp: "0 - 2 năm", role: "Viết thông cáo báo chí, bài đăng LinkedIn, quản trị nội dung website tiếng Anh." },
      { level: "Comms Manager",  exp: "2 - 5 năm", role: "Xây dựng chiến lược truyền thông toàn cầu, làm việc với báo chí quốc tế (Forbes, Bloomberg)." },
      { level: "Global Comms Director",exp:"5+ năm",role: "Định vị thương hiệu quốc tế, bảo vệ danh tiếng tập đoàn trên toàn cầu." },
    ],
    actionPlan: {
      projects: ["Tạo profile LinkedIn bằng tiếng Anh hoàn chỉnh", "Tập viết các bài PR tiếng Anh giới thiệu sản phẩm công nghệ"],
      interviewPrep: "Kỹ năng viết luận học thuật và thương mại (Business Writing) xuất sắc, tư duy sáng tạo.",
    },
  },
  "diplomat": {
    title: "Chuyên viên quan hệ đối ngoại / Ngoại giao",
    parentMajor: "Ngôn Ngữ Anh",
    description: "Đại diện tiếng nói của một cơ quan nhà nước, một tổ chức quốc tế (UN, ASEAN) hoặc doanh nghiệp lớn để đàm phán, kết nối với các đối tác nước ngoài.",
    stats: { salary: "12 - 50 Triệu", growth: "+10% (Cạnh tranh)", environment: "Sự kiện ngoại giao / Đại sứ quán" },
    techStack: [
      { name: "Đàm phán quốc tế",icon:<HeartHandshake size={14}/>,color: "bg-blue-100 text-blue-700" },
      { name: "Lễ tân ngoại giao",icon:<Shield size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Luật pháp QT",    icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
      { name: "Nghiên cứu hồ sơ",icon:<Search size={14} />,        color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghệ thuật sắp xếp bàn tiệc", description: "Trong ngoại giao, việc xếp ai ngồi cạnh ai, quốc kỳ đặt bên nào quan trọng không kém gì nội dung cuộc họp." },
      { title: "Mỗi từ đều là vũ khí", description: "Một thông cáo ngoại giao phải được kiểm duyệt từng dấu phẩy, vì chỉ sai một từ có thể gây leo thang căng thẳng ngoại giao." },
    ],
    progression: [
      { level: "Chuyên viên ĐN", exp: "0 - 3 năm", role: "Soạn thảo thư tín ngoại giao, chuẩn bị hậu cần lễ tân đón đoàn khách VIP." },
      { level: "Trưởng phòng ĐN",exp: "3 - 8 năm", role: "Trực tiếp tham gia đàm phán hợp đồng song phương, thiết lập quan hệ đối tác." },
      { level: "Đại sứ / Tham tán",exp:"8+ năm",   role: "Đại diện cao nhất của tổ chức/quốc gia tại nước ngoài, quyết định chiến lược đối ngoại." },
    ],
    actionPlan: {
      projects: ["Tham gia các hội nghị mô phỏng Liên Hợp Quốc (MUN - Model United Nations)", "Đọc tin tức BBC, CNN hàng ngày"],
      interviewPrep: "Phong thái lịch thiệp chuẩn mực, tiếng Anh chính luận xuất sắc, tư duy chính trị nhạy bén.",
    },
  },
  "english-copywriter": {
    title: "Content Writer / Copywriter tiếng Anh",
    parentMajor: "Ngôn Ngữ Anh",
    description: "Sáng tạo nội dung văn bản (bài blog, kịch bản quảng cáo, slogan, email marketing) bằng tiếng Anh để bán hàng và thu hút độc giả quốc tế.",
    stats: { salary: "10 - 35 Triệu", growth: "+25% (Cao)", environment: "Agency / In-house / Freelance" },
    techStack: [
      { name: "Copywriting",     icon: <PenTool size={14} />,      color: "bg-purple-100 text-purple-700" },
      { name: "SEO (Tiếng Anh)", icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Storytelling",    icon: <FileText size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "UX Writing",      icon: <Monitor size={14} />,      color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Bán hàng bằng chữ", description: "Họ có thể khiến khách hàng quyết định quẹt thẻ mua khóa học 1000 USD chỉ bằng một email giới thiệu dài 300 từ." },
      { title: "Nghề làm móng tay gõ phím", description: "Nhiều copywriter tiếng Anh tại Việt Nam làm freelance 100% cho khách hàng Mỹ, Úc với thu nhập ngàn đô mà không cần ra khỏi nhà." },
    ],
    progression: [
      { level: "Junior Copywriter",exp:"0 - 2 năm",role:"Viết bài chuẩn SEO, viết mô tả sản phẩm (Product Description), caption mạng xã hội." },
      { level: "Senior Copywriter",exp:"2 - 5 năm",role:"Viết trang Sales Page (Landing Page), kịch bản video quảng cáo TVC." },
      { level: "Creative Director",exp:"5+ năm",   role: "Sáng tạo concept chiến dịch, nghĩ ra các câu Slogan để đời cho thương hiệu." },
    ],
    actionPlan: {
      projects: ["Tạo một trang blog cá nhân trên Medium viết hoàn toàn bằng tiếng Anh", "Học nghệ thuật viết Copywriting từ Dan Kennedy"],
      interviewPrep: "Vốn từ vựng linh hoạt, hiểu biết về văn hóa đại chúng (Pop Culture) của phương Tây, kỹ năng viết ngắn gọn.",
    },
  },
  // ==========================================
  // 23. XÃ HỘI HỌC (SOCIOLOGY)
  // ==========================================
  "sociological-researcher": {
    title: "Nghiên cứu viên xã hội học",
    parentMajor: "Xã Hội Học & Nghiên Cứu Cộng Đồng",
    description: "Thực hiện khảo sát, phân tích định tính/định lượng về các vấn đề xã hội (bất bình đẳng giới, biến đổi văn hóa, di cư) tại các viện nghiên cứu hoặc Đại học.",
    stats: { salary: "10 - 25 Triệu", growth: "+10% (Ổn định)", environment: "Viện nghiên cứu / Đi thực địa" },
    techStack: [
      { name: "Nghiên cứu định lượng",icon:<BarChart size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Phỏng vấn sâu",   icon: <Ear size={14} />,          color: "bg-purple-100 text-purple-700" },
      { name: "Viết báo cáo học thuật",icon:<FileText size={14} />,color: "bg-slate-100 text-slate-700" },
      { name: "SPSS / NVivo",    icon: <Monitor size={14} />,      color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Nghề nghe chuyện thiên hạ", description: "Trong các buổi phỏng vấn sâu, nhà xã hội học có thể dành 3 tiếng đồng hồ chỉ để nghe một người lao động nhập cư kể về cuộc đời họ." },
      { title: "Mọi thứ đều là Dữ liệu", description: "Với nhà xã hội học, cách mọi người xếp hàng mua cà phê hay cách tương tác trên mạng xã hội đều phản ánh một cấu trúc xã hội." },
    ],
    progression: [
      { level: "Điều tra viên",  exp: "0 - 2 năm", role: "Đến từng hộ gia đình phát phiếu khảo sát, nhập liệu vào máy tính." },
      { level: "Nghiên cứu viên",exp: "2 - 5 năm", role: "Phân tích số liệu, viết báo cáo nghiên cứu trình bày tại các hội thảo khoa học." },
      { level: "Chủ trì đề tài", exp: "5+ năm",    role: "Lãnh đạo các dự án nghiên cứu cấp quốc gia, cố vấn cho các bộ ngành." },
    ],
    actionPlan: {
      projects: ["Thực hiện một khảo sát nhỏ bằng Google Forms về thói quen chi tiêu của sinh viên", "Học cách dùng SPSS phân tích dữ liệu"],
      interviewPrep: "Nắm vững phương pháp luận nghiên cứu (Methodology), kỹ năng đặt câu hỏi khơi gợi và tư duy khách quan.",
    },
  },
  "market-researcher-soc": {
    title: "Chuyên viên nghiên cứu thị trường",
    parentMajor: "Xã Hội Học & Nghiên Cứu Cộng Đồng",
    description: "Sử dụng các phương pháp của Xã hội học để tìm hiểu hành vi, thái độ và nhu cầu của người tiêu dùng, giúp doanh nghiệp ra mắt sản phẩm đúng Insight.",
    stats: { salary: "12 - 40 Triệu", growth: "+18% (Cao)", environment: "Agency Nghiên cứu / Tập đoàn" },
    techStack: [
      { name: "Focus Group (FGD)",icon:<Users size={14} />,        color: "bg-orange-100 text-orange-700" },
      { name: "Khảo sát Data",   icon: <PieChart size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Phân tích Insight",icon:<BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Thuyết trình",    icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Nghệ thuật quan sát", description: "Họ có thể ngồi im lặng ở siêu thị cả ngày chỉ để ghi chép lại xem khách hàng sẽ với tay lấy chai nước rửa chén ở kệ trên hay kệ dưới." },
      { title: "Giải mã tâm lý mua", description: "Họ giúp doanh nghiệp hiểu tại sao khách hàng lại sẵn sàng trả tiền gấp đôi cho một ly cà phê chỉ vì nó có tên họ trên cốc." },
    ],
    progression: [
      { level: "Research Assistant",exp:"0 - 2 năm",role:"Kiểm tra chất lượng dữ liệu khảo sát, tạo bảng biểu Excel/PowerPoint." },
      { level: "Research Executive",exp:"2 - 5 năm",role:"Điều phối các buổi thảo luận nhóm (FGD), trực tiếp viết báo cáo insight." },
      { level: "Research Manager",exp: "5+ năm",   role: "Tư vấn chiến lược ra mắt sản phẩm mới cho Giám đốc Marketing của khách hàng." },
    ],
    actionPlan: {
      projects: ["Tập viết bảng câu hỏi khảo sát không có tính 'dẫn dắt'", "Phân tích case study thành công của VinFast hoặc Shopee"],
      interviewPrep: "Tư duy nhạy bén với kinh doanh, kỹ năng phân tích số liệu và giải quyết vấn đề (Problem Solving).",
    },
  },
  "csr-specialist": {
    title: "Chuyên viên CSR & Phát triển bền vững",
    parentMajor: "Xã Hội Học & Nghiên Cứu Cộng Đồng",
    description: "Xây dựng và triển khai các chương trình Trách nhiệm xã hội doanh nghiệp (CSR) như xây cầu, học bổng, trồng cây. Đảm bảo kinh doanh đi đôi với giá trị cộng đồng.",
    stats: { salary: "12 - 35 Triệu", growth: "+20% (Cao)", environment: "Văn phòng Tập đoàn / Đi thực địa" },
    techStack: [
      { name: "Quản lý Dự án",   icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Giao tiếp/PR",    icon: <Megaphone size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Kiến thức Môi trường",icon:<Leaf size={14} />,      color: "bg-green-100 text-green-700" },
      { name: "Kết nối cộng đồng",icon:<HeartHandshake size={14}/>,color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Không chỉ là làm từ thiện", description: "CSR hiện đại là ESG (Môi trường - Xã hội - Quản trị). Nếu làm không tốt, công ty có thể bị tẩy chay dù có quyên góp bao nhiêu tiền đi nữa." },
      { title: "Tiêu tiền để tạo uy tín", description: "Công việc của họ là mang ngân sách của công ty đi làm những việc ý nghĩa, nhằm đổi lại 'giấy phép hoạt động xã hội' từ lòng tin của người dân." },
    ],
    progression: [
      { level: "CSR Executive",  exp: "0 - 2 năm", role: "Liên hệ địa phương, tổ chức các chuyến đi tình nguyện, chụp ảnh viết bài PR." },
      { level: "CSR Manager",    exp: "2 - 6 năm", role: "Xây dựng chiến lược phát triển bền vững, đánh giá hiệu quả tác động của quỹ." },
      { level: "Giám đốc Phát triển Bền vững",exp:"6+ năm",role:"Đưa tiêu chuẩn ESG vào mọi ngóc ngách vận hành sản xuất của công ty." },
    ],
    actionPlan: {
      projects: ["Xin gia nhập đội PR/Sự kiện của các CLB Tình nguyện", "Tìm hiểu báo cáo Phát triển bền vững của Vinamilk"],
      interviewPrep: "Kỹ năng lập kế hoạch, ngoại giao khéo léo và hiểu biết về Mục tiêu Phát triển Bền vững (SDGs) của Liên Hợp Quốc.",
    },
  },
  "investigative-journalist": {
    title: "Phóng viên / Nhà báo điều tra xã hội",
    parentMajor: "Xã Hội Học & Nghiên Cứu Cộng Đồng",
    description: "Nhà báo chuyên viết bài phân tích sâu về các vấn đề góc khuất của xã hội (bất bình đẳng, ô nhiễm, tham nhũng). Mang sự thật ra ánh sáng.",
    stats: { salary: "10 - 30+ Triệu", growth: "+10% (Ổn định)", environment: "Tòa soạn / Nguy hiểm" },
    techStack: [
      { name: "Kỹ năng Phỏng vấn",icon:<Ear size={14} />,          color: "bg-blue-100 text-blue-700" },
      { name: "Viết lách sắc bén",icon:<PenTool size={14} />,      color: "bg-slate-100 text-slate-700" },
      { name: "Thu thập chứng cứ",icon:<Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Bảo mật nguồn tin",icon:<ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Nghề đóng giả", description: "Phóng viên điều tra thường xuyên phải đóng giả làm công nhân, người mua hàng, thậm chí là con bạc để thâm nhập vào các đường dây tội phạm lấy tin." },
      { title: "Ngòi bút có thép", description: "Một loạt bài điều tra chất lượng có thể khiến một nhà máy gây ô nhiễm phải đóng cửa hoặc khởi tố những đường dây lừa đảo lớn." },
    ],
    progression: [
      { level: "Phóng viên trẻ", exp: "0 - 3 năm", role: "Đi cơ sở lấy tin tức hàng ngày, viết các mẩu tin ngắn về đời sống dân sinh." },
      { level: "Phóng viên điều tra",exp:"3 - 8 năm",role:"Nhận lệnh làm các tuyến bài dài kỳ (Phóng sự), thâm nhập thực tế rủi ro cao." },
      { level: "Thư ký tòa soạn",exp: "8+ năm",    role: "Biên tập lại bài viết của phóng viên, định hướng nội dung và chịu trách nhiệm pháp lý tờ báo." },
    ],
    actionPlan: {
      projects: ["Thử viết một bài phóng sự về cuộc sống sinh viên làm thêm", "Rèn luyện kỹ năng chụp ảnh, quay phim cơ bản"],
      interviewPrep: "Bản lĩnh chính trị vững vàng, đạo đức nghề báo, nhạy cảm với tin tức và khả năng chịu áp lực bị đe dọa.",
    },
  },
  "ngo-coordinator-soc": {
    title: "Điều phối dự án NGO / Phát triển quốc tế",
    parentMajor: "Xã Hội Học & Nghiên Cứu Cộng Đồng",
    description: "Quản lý các dự án do tổ chức phi chính phủ (NGO) tài trợ, nhằm cải thiện sinh kế, giáo dục, bình đẳng giới cho các khu vực yếu thế.",
    stats: { salary: "12 - 35 Triệu", growth: "+15% (Cao)", environment: "Văn phòng NGO / Vùng sâu" },
    techStack: [
      { name: "Viết Proposal",   icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Quản lý Dự án",   icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Đánh giá Tác động",icon:<BarChart size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Ngoại ngữ giỏi",  icon: <Globe size={14} />,        color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Nghề đi tiêu tiền của Tây", description: "Các NGO nhận tiền tài trợ từ quốc tế. Công việc của điều phối viên là đảm bảo tiền được tiêu đúng mục đích và mang lại lợi ích thật sự cho dân." },
      { title: "Cả đời gắn với chữ 'Nghèo'", description: "Họ dành phần lớn tuổi trẻ để đi đến những vùng đất nghèo khó nhất, đối mặt với sự thiếu thốn về cơ sở vật chất." },
    ],
    progression: [
      { level: "Trợ lý dự án",   exp: "0 - 2 năm", role: "Hỗ trợ hậu cần, thu thập hóa đơn thanh toán, lên lịch đi thực địa." },
      { level: "Điều phối viên", exp: "2 - 5 năm", role: "Trực tiếp triển khai hoạt động, giám sát giải ngân và báo cáo cho nhà tài trợ." },
      { level: "Chuyên gia/Giám đốc",exp:"5+ năm", role: "Thiết kế các chương trình tầm cỡ quốc gia, đàm phán xin quỹ từ UN, EU." },
    ],
    actionPlan: {
      projects: ["Thực tập tại các tổ chức phi lợi nhuận địa phương", "Học cách viết báo cáo dự án (LogFrame)"],
      interviewPrep: "Tiếng Anh làm việc quốc tế, tính kiên cường, thấu hiểu văn hóa địa phương và kỹ năng lập ngân sách.",
    },
  },

  // ==========================================
  // 24. LỊCH SỬ & DI SẢN (HISTORY)
  // ==========================================
  "history-researcher": {
    title: "Cán bộ nghiên cứu / Giảng viên Lịch sử",
    parentMajor: "Lịch Sử & Di Sản Văn Hóa",
    description: "Nghiên cứu sâu về các giai đoạn lịch sử, đào xới các kho lưu trữ để tìm ra sự thật khách quan. Giảng dạy và xuất bản các công trình học thuật.",
    stats: { salary: "8 - 25 Triệu", growth: "+5% (Ổn định)", environment: "Đại học / Viện nghiên cứu" },
    techStack: [
      { name: "Nghiên cứu tài liệu",icon:<BookOpen size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Dịch thuật (Cổ)", icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Viết Sử học",     icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Giảng dạy",       icon: <Users size={14} />,        color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Thám tử thời gian", description: "Họ như những thám tử cố gắng ghép lại bức tranh của 1.000 năm trước chỉ bằng vài mảnh gốm vỡ và vài trang giấy đã mục nát." },
      { title: "Ngoại ngữ cổ", description: "Nhiều nhà nghiên cứu lịch sử Việt Nam phải học thêm chữ Hán Nôm hoặc tiếng Pháp cổ để đọc được các sắc phong, gia phả nguyên bản." },
    ],
    progression: [
      { level: "Trợ lý nghiên cứu",exp: "0 - 3 năm", role: "Sưu tầm tài liệu, gõ lại các bản dịch, hỗ trợ Giáo sư lên lớp." },
      { level: "Nghiên cứu viên",exp: "3 - 8 năm", role: "Thực hiện các đề tài độc lập, viết bài đăng trên Tạp chí Nghiên cứu Lịch sử." },
      { level: "Giảng viên chính/GS",exp:"8+ năm", role: "Chuyên gia đầu ngành, được mời làm cố vấn cho chính phủ hoặc truyền thông." },
    ],
    actionPlan: {
      projects: ["Thử tự nghiên cứu và viết bài về lịch sử hình thành quê hương bạn", "Tham gia các hội thảo khoa học sinh viên"],
      interviewPrep: "Trí nhớ tốt, tư duy phản biện lịch sử (không tin ngay vào những gì sách viết), đam mê với quá khứ.",
    },
  },
  "museum-specialist": {
    title: "Chuyên viên bảo tàng & Di sản văn hóa",
    parentMajor: "Lịch Sử & Di Sản Văn Hóa",
    description: "Quản lý, bảo quản, phục chế các hiện vật vô giá. Thiết kế các không gian trưng bày để kể những câu chuyện lịch sử hấp dẫn cho công chúng.",
    stats: { salary: "8 - 20 Triệu", growth: "+10% (Ổn định)", environment: "Bảo tàng / Khu di tích" },
    techStack: [
      { name: "Bảo quản hiện vật",icon:<Shield size={14} />,       color: "bg-slate-100 text-slate-700" },
      { name: "Giám tuyển (Curating)",icon:<Target size={14} />,   color: "bg-red-100 text-red-700" },
      { name: "Thiết kế trưng bày",icon:<Palette size={14} />,     color: "bg-purple-100 text-purple-700" },
      { name: "Quản lý kho",     icon: <Box size={14} />,          color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Nghề đi nhẹ, nói khẽ", description: "Họ được huấn luyện cách cầm nắm hiện vật bằng găng tay chuyên dụng. Lỡ tay làm rơi một chiếc bình gốm thời Lý có thể phải đền bằng cả sự nghiệp." },
      { title: "Kể chuyện bằng ánh sáng", description: "Họ phải tính toán ánh sáng chiếu vào bức tranh thế nào để vừa tôn lên vẻ đẹp, vừa không làm tia UV phá hủy màu sắc." },
    ],
    progression: [
      { level: "Nhân viên kho cơ sở",exp:"0 - 3 năm",role: "Vệ sinh hiện vật, đánh số kiểm kê, kiểm soát nhiệt độ độ ẩm trong kho." },
      { level: "Giám tuyển/Thiết kế",exp:"3 - 7 năm",role: "Lên concept cho các buổi triển lãm chuyên đề, viết bài giới thiệu hiện vật." },
      { level: "Giám đốc Bảo tàng",exp: "7+ năm",  role: "Quyết định chiến lược phát triển, thu hút du khách và xin ngân sách nhà nước." },
    ],
    actionPlan: {
      projects: ["Thường xuyên đi tham quan bảo tàng và phân tích cách họ sắp xếp hiện vật", "Tình nguyện viên thuyết minh tại bảo tàng"],
      interviewPrep: "Hiểu biết về bảo quản học, kiến thức văn hóa nền tảng tốt và tính cẩn thận cực kỳ cao.",
    },
  },
  "history-editor": {
    title: "Biên tập viên xuất bản / Nhà báo",
    parentMajor: "Lịch Sử & Di Sản Văn Hóa",
    description: "Chỉnh sửa, thẩm định tính chính xác của các bản thảo sách lịch sử, văn hóa trước khi in ấn. Viết các bài báo chuyên đề mảng văn hóa, xã hội.",
    stats: { salary: "10 - 25 Triệu", growth: "+10% (Ổn định)", environment: "Nhà xuất bản / Tòa soạn" },
    techStack: [
      { name: "Thẩm định bản thảo",icon:<Search size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Kỹ năng Biên tập",icon: <PenTool size={14} />,      color: "bg-orange-100 text-orange-700" },
      { name: "Kiến thức Lịch sử",icon:<BookOpen size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Luật Xuất bản",   icon: <Scale size={14} />,        color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Bắt lỗi sai lịch sử", description: "Biên tập viên lịch sử là những người 'soi' lỗi đáng sợ. Nếu tác giả viết một nhân vật dùng súng vào thời điểm súng chưa được phát minh, họ sẽ phát hiện ngay." },
      { title: "Người nắm quyền sinh sát sách", description: "Bản thảo dù hay đến mấy nhưng nếu vi phạm các quan điểm chính trị hoặc sai lệch lịch sử nghiêm trọng sẽ bị BTV gạch bỏ không thương tiếc." },
    ],
    progression: [
      { level: "Trợ lý Biên tập",exp: "0 - 2 năm", role: "Đọc rà soát lỗi chính tả, lỗi câu chữ sơ đẳng, làm thủ tục xin giấy phép in ấn." },
      { level: "Biên tập viên",  exp: "2 - 6 năm", role: "Trực tiếp sửa nội dung, cấu trúc sách, làm việc với tác giả và họa sĩ bìa." },
      { level: "Tổng Biên tập",  exp: "6+ năm",    role: "Lên kế hoạch các tủ sách trọng điểm, chịu trách nhiệm pháp lý trước Cục xuất bản." },
    ],
    actionPlan: {
      projects: ["Thử biên tập lại một bài viết trên Wikipedia cho mạch lạc hơn", "Tham gia ban biên tập kỷ yếu trường/CLB"],
      interviewPrep: "Ngữ pháp tiếng Việt xuất sắc, kiến thức lịch sử chính trị vững chắc và con mắt tỉ mỉ.",
    },
  },
  "archivist": {
    title: "Chuyên viên lưu trữ quốc gia",
    parentMajor: "Lịch Sử & Di Sản Văn Hóa",
    description: "Quản lý các khối tài liệu, mộc bản, châu bản giá trị của quốc gia. Sắp xếp, số hóa và phục vụ việc tra cứu của các nhà nghiên cứu.",
    stats: { salary: "8 - 18 Triệu", growth: "+5% (Đặc thù)", environment: "Trung tâm Lưu trữ Nhà nước" },
    techStack: [
      { name: "Phân loại hồ sơ", icon: <Layers size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Số hóa tài liệu", icon: <Database size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Bảo quản vật lý", icon: <Shield size={14} />,       color: "bg-slate-100 text-slate-700" },
      { name: "Tra cứu thông tin",icon:<Search size={14} />,       color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Người giữ bí mật", description: "Tại Trung tâm Lưu trữ Quốc gia, có những khối tài liệu 'Tối mật' phải sau 30 năm, 50 năm mới được phép công bố cho công chúng." },
      { title: "Chống chọi với thời gian", description: "Tài liệu giấy rất dễ bị mốc, mối mọt ăn. Chuyên viên lưu trữ phải dùng các kỹ thuật bồi giấy để cứu sống những tờ sắc phong mỏng tang sắp mủn nát." },
    ],
    progression: [
      { level: "Nhân viên chỉnh lý",exp:"0 - 3 năm",role:"Phân loại tài liệu, tháo ghim bấm rỉ sét, đóng hộp và nhập dữ liệu vào phần mềm." },
      { level: "Chuyên viên khai thác",exp:"3 - 7 năm",role:"Hỗ trợ các nhà khoa học, cơ quan điều tra tìm kiếm các tài liệu cũ theo yêu cầu." },
      { level: "Quản đốc kho Lưu trữ",exp:"7+ năm", role: "Đảm bảo an ninh, an toàn phòng cháy chữa cháy cho toàn bộ khối di sản." },
    ],
    actionPlan: {
      projects: ["Thử tự sắp xếp, số hóa (scan) và tạo thư mục quản lý toàn bộ giấy tờ, bằng cấp cá nhân khoa học", "Học Excel nâng cao"],
      interviewPrep: "Tính cẩn thận cực cao, thích môi trường làm việc tĩnh lặng, am hiểu nghiệp vụ văn thư lưu trữ.",
    },
  },
  "historical-advisor": {
    title: "Biên kịch / Cố vấn lịch sử phim ảnh",
    parentMajor: "Lịch Sử & Di Sản Văn Hóa",
    description: "Đảm bảo các bộ phim dã sử, cổ trang hoặc game dã sử Việt Nam đi sát với thực tế lịch sử từ trang phục, vũ khí đến bối cảnh xã hội.",
    stats: { salary: "Thu nhập theo dự án", growth: "+20% (Tiềm năng)", environment: "Freelance / Phim trường" },
    techStack: [
      { name: "Kiến thức Cổ phong",icon:<BookOpen size={14} />,    color: "bg-purple-100 text-purple-700" },
      { name: "Cố vấn Trang phục",icon: <Palette size={14} />,     color: "bg-pink-100 text-pink-700" },
      { name: "Sáng tạo nội dung",icon: <PenTool size={14} />,      color: "bg-orange-100 text-orange-700" },
      { name: "Tranh biện",      icon: <Megaphone size={14} />,    color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Vạch lá tìm sâu", description: "Họ sẽ là người báo cho đạo diễn biết rằng: 'Vào triều Trần, người Việt không mặc áo cổ chéo có hoa văn này, và quân lính không dùng loại gươm này'." },
      { title: "Sự trỗi dậy của phim cổ trang", description: "Với xu hướng làm phim và MV ca nhạc mang đậm bản sắc văn hóa Việt Nam (như Hoàng Thùy Linh), vai trò của cố vấn lịch sử đang rất đắt giá." },
    ],
    progression: [
      { level: "Nhà nghiên cứu tự do",exp:"0 - 2 năm",role:"Xây dựng uy tín cá nhân trên các diễn đàn/group về cổ phong, lịch sử Việt." },
      { level: "Cố vấn kịch bản",  exp:"2 - 5 năm", role: "Được các ekip làm phim/MV mời tư vấn về tạo hình nhân vật, lời thoại." },
      { level: "Đạo diễn Nghệ thuật",exp:"5+ năm",  role: "Chỉ đạo toàn bộ thiết kế bối cảnh, mỹ thuật cho các dự án điện ảnh dã sử bom tấn." },
    ],
    actionPlan: {
      projects: ["Thử phân tích đúng sai về trang phục trong một bộ phim cổ trang VN", "Viết blog/Tiktok chia sẻ kiến thức văn hóa cổ"],
      interviewPrep: "Kiến thức chuyên sâu về cổ phong Việt (trang phục, binh khí, kiến trúc), khả năng thỏa hiệp giữa lịch sử và nghệ thuật điện ảnh.",
    },
  },
  // ==========================================
  // 26. QUẢN TRỊ NHÂN SỰ & TỔ CHỨC (MANAGEMENT)
  // ==========================================
  "recruiter": {
    title: "Chuyên viên tuyển dụng (Recruiter / Headhunter)",
    parentMajor: "Quản Trị Nhân Sự & Tổ Chức",
    description: "Người đi 'săn' nhân tài. Tìm kiếm, sàng lọc ứng viên, thuyết phục những người giỏi nhất gia nhập công ty và điều phối toàn bộ quá trình phỏng vấn.",
    stats: { salary: "10 - 40 Triệu (Có hoa hồng)", growth: "+18% (Cao)", environment: "Văn phòng / Tương tác cao" },
    techStack: [
      { name: "Sourcing CV",     icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Phỏng vấn BEI",   icon: <Ear size={14} />,          color: "bg-purple-100 text-purple-700" },
      { name: "Thuyết phục",     icon: <Megaphone size={14} />,    color: "bg-orange-100 text-orange-700" },
      { name: "Employer Branding",icon:<Briefcase size={14} />,    color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Đọc vị trong 6 giây", description: "Theo thống kê, một Recruiter chuyên nghiệp chỉ mất trung bình 6-7 giây để lướt qua và quyết định có giữ lại một CV hay không." },
      { title: "Săn đầu người", description: "Với vị trí Headhunter, họ có thể nhận được khoản hoa hồng (commission) bằng 1-2 tháng lương của ứng viên nếu săn thành công một vị trí Giám đốc." },
    ],
    progression: [
      { level: "Sourcing Executive",exp:"0 - 2 năm",role: "Đăng tin tuyển dụng, cào dữ liệu ứng viên trên LinkedIn, gọi điện sàng lọc sơ bộ." },
      { level: "Talent Acquisition",exp:"2 - 5 năm",role: "Trực tiếp phỏng vấn chuyên sâu, đàm phán lương (Offer) với ứng viên." },
      { level: "Recruitment Manager",exp:"5+ năm",  role: "Lập kế hoạch ngân sách nhân sự năm, xây dựng thương hiệu nhà tuyển dụng." },
    ],
    actionPlan: {
      projects: ["Tạo profile LinkedIn chuẩn chỉnh và kết nối với 500 người trong ngành", "Tập viết Job Description (Mô tả công việc) thu hút"],
      interviewPrep: "Kỹ năng đánh giá hành vi, sự khéo léo trong giao tiếp và khả năng chịu áp lực chạy KPI tuyển dụng.",
    },
  },
  "ld-specialist": {
    title: "Chuyên viên đào tạo & Phát triển (L&D)",
    parentMajor: "Quản Trị Nhân Sự & Tổ Chức",
    description: "Người thầy trong doanh nghiệp. Thiết kế các khóa học kỹ năng, lộ trình thăng tiến giúp nhân viên làm việc hiệu quả hơn và gắn bó lâu dài với công ty.",
    stats: { salary: "12 - 35 Triệu", growth: "+15% (Cao)", environment: "Văn phòng / Đào tạo" },
    techStack: [
      { name: "Thiết kế Bài giảng",icon:<FileText size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Đứng lớp (Trainer)",icon:<Users size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Phân tích nhu cầu", icon: <Search size={14} />,     color: "bg-purple-100 text-purple-700" },
      { name: "Gamification",      icon: <Target size={14} />,     color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Giữ chân nhân tài", description: "Lý do số 1 khiến nhân sự Gen Z nghỉ việc không phải vì lương, mà vì họ cảm thấy không học hỏi thêm được gì. L&D sinh ra để giải quyết việc này." },
      { title: "Người tạo động lực", description: "L&D là bộ phận thường tổ chức các trò chơi, teambuilding và truyền lửa cho toàn bộ công ty." },
    ],
    progression: [
      { level: "L&D Coordinator",  exp: "0 - 2 năm", role: "Set up phòng học, in ấn tài liệu, theo dõi danh sách điểm danh lớp học nội bộ." },
      { level: "Internal Trainer", exp: "2 - 5 năm", role: "Trực tiếp giảng dạy các kỹ năng mềm (Giao tiếp, Quản lý thời gian, Hội nhập)." },
      { level: "L&D Manager",      exp: "5+ năm",    role: "Thiết kế ma trận năng lực (Competency Matrix) và lộ trình phát triển sự nghiệp." },
    ],
    actionPlan: {
      projects: ["Thử tự thiết kế một slide PowerPoint khóa học ngắn về 'Kỹ năng thuyết trình'", "Đọc sách về Adult Learning (Học tập ở người lớn)"],
      interviewPrep: "Kỹ năng nói trước đám đông xuất sắc, năng lượng tích cực và tư duy sư phạm.",
    },
  },
  "cb-specialist": {
    title: "Chuyên viên C&B (Lương thưởng & Phúc lợi)",
    parentMajor: "Quản Trị Nhân Sự & Tổ Chức",
    description: "Bộ não tài chính của phòng HR. Chịu trách nhiệm tính lương, đóng bảo hiểm, quyết toán thuế TNCN và xây dựng chính sách đãi ngộ giữ chân nhân sự.",
    stats: { salary: "12 - 30 Triệu", growth: "+10% (Ổn định)", environment: "Văn phòng / Làm việc với số liệu" },
    techStack: [
      { name: "Excel nâng cao",  icon: <Calculator size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Luật Lao động",   icon: <Scale size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Tính lương (Payroll)",icon:<DollarSign size={14} />,color: "bg-orange-100 text-orange-700" },
      { name: "Bảo mật thông tin",icon:<Lock size={14} />,         color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Cái máy tính sống", description: "Họ có thể phải tính lương, hoa hồng, tăng ca, phạt đi trễ cho hàng ngàn công nhân viên chỉ trong 2-3 ngày cuối tháng mà không được sai 1 đồng." },
      { title: "Kín miệng như bưng", description: "C&B là những người duy nhất biết tường tận thu nhập của tất cả mọi người trong công ty, kể cả Tổng Giám đốc." },
    ],
    progression: [
      { level: "C&B Executive",  exp: "0 - 2 năm", role: "Kiểm tra dữ liệu chấm công, báo tăng/giảm Bảo hiểm Xã hội, làm hợp đồng LĐ." },
      { level: "C&B Specialist", exp: "2 - 5 năm", role: "Phụ trách kỳ tính lương (Payroll), quyết toán thuế TNCN cuối năm." },
      { level: "Total Rewards Mgr",exp:"5+ năm",   role: "Thiết kế hệ thống thang bảng lương, khảo sát mức lương thị trường để giữ lợi thế cạnh tranh." },
    ],
    actionPlan: {
      projects: ["Học thuộc các hàm Excel xử lý dữ liệu: VLOOKUP, INDEX MATCH, IF", "Đọc hiểu cơ bản về Luật Bảo hiểm xã hội"],
      interviewPrep: "Sự tỉ mỉ đến mức cực đoan, không ngại những con số và tính kỷ luật bảo mật cao.",
    },
  },
  "hr-manager": {
    title: "Trưởng phòng nhân sự (HR Manager)",
    parentMajor: "Quản Trị Nhân Sự & Tổ Chức",
    description: "Người cầm trịch chiến lược con người. Tham mưu cho Ban Giám đốc về tổ chức bộ máy, giải quyết các rắc rối nhân sự và định hình văn hóa doanh nghiệp.",
    stats: { salary: "25 - 60+ Triệu", growth: "+12% (Cao)", environment: "Văn phòng / Ban lãnh đạo" },
    techStack: [
      { name: "Hoạch định NS",   icon: <Users size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Quản trị Hiệu suất",icon:<TrendingUp size={14} />,  color: "bg-green-100 text-green-700" },
      { name: "Giải quyết Khủng hoảng",icon:<ShieldAlert size={14}/>,color:"bg-red-100 text-red-700" },
      { name: "Tư duy Kinh doanh",icon:<Target size={14} />,       color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Kẹp giữa hai làn đạn", description: "HR Manager luôn phải tìm cách cân bằng giữa việc bảo vệ quyền lợi của người lao động và bảo vệ quỹ ngân sách của công ty." },
      { title: "Nghệ thuật sa thải", description: "Phải đóng 'vai ác' để sa thải nhân sự kém hiệu quả, nhưng phải làm khéo léo để công ty không bị kiện và người ra đi không oán hận." },
    ],
    progression: [
      { level: "HR Generalist",  exp: "0 - 3 năm", role: "Làm tất cả các mảng HR ở quy mô nhỏ (Tuyển dụng, Lương, Hành chính)." },
      { level: "HR Business Partner",exp:"3 - 7 năm",role:"Đồng hành chiến lược cùng các Giám đốc bộ phận để giải bài toán nhân sự." },
      { level: "HR Director (CHRO)",exp:"7+ năm",  role: "Nằm trong Ban điều hành (C-level), định hình tổ chức để đạt mục tiêu kinh doanh ngàn tỷ." },
    ],
    actionPlan: {
      projects: ["Tham gia các diễn đàn nhân sự (VD: HR Springer) để đọc các tình huống thực tế", "Học cách ứng dụng KPI / OKR"],
      interviewPrep: "Am hiểu luật pháp, có EQ cực cao, khả năng thương thuyết và chịu được áp lực từ cả sếp lẫn nhân viên.",
    },
  },
  "office-admin": {
    title: "Chuyên viên hành chính văn phòng",
    parentMajor: "Quản Trị Nhân Sự & Tổ Chức",
    description: "Quản gia của công ty. Đảm bảo văn phòng luôn hoạt động trơn tru từ hệ thống điện nước, văn phòng phẩm, xe cộ đi lại đến tổ chức tiệc sinh nhật.",
    stats: { salary: "8 - 18 Triệu", growth: "+5% (Ổn định)", environment: "Văn phòng" },
    techStack: [
      { name: "Quản lý Tài sản", icon: <Box size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Soạn thảo VB",    icon: <FileText size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Tổ chức Sự kiện", icon: <Activity size={14} />,     color: "bg-pink-100 text-pink-700" },
      { name: "Chăm sóc NV",     icon: <HeartHandshake size={14}/>,color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Làm dâu trăm họ", description: "Hành chính là người giải quyết mọi tiếng kêu than: Từ máy in kẹt giấy, điều hòa không mát, đến việc bồn cầu bị tắc." },
      { title: "Bảo tàng đồ vặt", description: "Bàn làm việc của Admin thường chứa đầy băng keo, kéo, thuốc đau bụng, kim chỉ... để ứng cứu nhân viên bất cứ lúc nào." },
    ],
    progression: [
      { level: "Lễ tân (Receptionist)",exp:"0 - 1 năm",role:"Trực điện thoại, đón khách, nhận/gửi bưu phẩm thư từ." },
      { level: "Nhân viên Hành chính",exp:"1 - 4 năm",role: "Mua sắm thiết bị, thanh toán chi phí điện nước, quản lý đội vệ sinh/bảo vệ." },
      { level: "Trưởng phòng HC",exp:"4+ năm",    role: "Quản trị ngân sách vận hành văn phòng, tìm kiếm/thuê mặt bằng mở trụ sở mới." },
    ],
    actionPlan: {
      projects: ["Rèn luyện kỹ năng soạn thảo công văn, giấy tờ hành chính chuẩn thể thức", "Học cách lập bảng chi tiêu nội bộ"],
      interviewPrep: "Nhanh nhẹn, tháo vát, trí nhớ tốt và thái độ phục vụ khách hàng (Customer Service) xuất sắc.",
    },
  },

  // ==========================================
  // 27. KỸ THUẬT ĐIỆN / ĐIỆN TỬ (ELECTRICAL ENGINEERING)
  // ==========================================
  "electrical-design": {
    title: "Kỹ sư thiết kế điện",
    parentMajor: "Kỹ Thuật Điện / Điện Tử",
    description: "Phác thảo hệ thống phân phối năng lượng. Tính toán dây dẫn, máy biến áp và tủ điện để đảm bảo tòa nhà/nhà máy vận hành an toàn mà không bị quá tải.",
    stats: { salary: "12 - 35 Triệu", growth: "+15% (Ổn định)", environment: "Văn phòng kỹ thuật" },
    techStack: [
      { name: "AutoCAD Electrical",icon:<Monitor size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Mạch điện",       icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
      { name: "Tiêu chuẩn IEC",  icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Tính toán Tải",   icon: <Calculator size={14} />,   color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Kẻ thù của sự chập cháy", description: "Kỹ sư điện phải tính toán dôi dư công suất để ngay cả khi toàn bộ công ty cắm sạc laptop, bật điều hòa cùng lúc thì CB (Aptomat) vẫn không bị nhảy." },
      { title: "Nghệ thuật vẽ nét", description: "Bản vẽ thiết kế điện trông như một mê cung ma trận với hàng nghìn đường nét đan chéo nhau, chỉ người trong ngành mới 'đọc' được." },
    ],
    progression: [
      { level: "Họa viên điện",  exp: "0 - 2 năm", role: "Triển khai bản vẽ tủ điện, chiếu sáng từ sơ đồ nguyên lý của kỹ sư." },
      { level: "Kỹ sư Thiết kế", exp: "2 - 5 năm", role: "Tự tính toán sụt áp, chọn tiết diện dây cáp, thiết kế chống sét và nối đất." },
      { level: "Chủ trì Thiết kế Điện",exp:"5+ năm",role: "Đại diện công ty thẩm duyệt bản vẽ, làm việc trực tiếp với Điện lực quốc gia." },
    ],
    actionPlan: {
      projects: ["Cài đặt phần mềm AutoCAD và tập vẽ sơ đồ đơn tuyến căn nhà của bạn", "Ôn lại Vật lý dòng điện xoay chiều"],
      interviewPrep: "Nắm vững định luật Ohm, Kirchhoff, công suất biểu kiến và các tiêu chuẩn an toàn điện lưới.",
    },
  },
  "om-engineer": {
    title: "Kỹ sư vận hành và bảo trì (O&M)",
    parentMajor: "Kỹ Thuật Điện / Điện Tử",
    description: "Nhà vô địch về sự bền bỉ. Trực tiếp vận hành các trạm biến áp, máy phát điện và hệ thống truyền tải, sửa chữa hỏng hóc để duy trì nguồn điện không đứt đoạn.",
    stats: { salary: "10 - 28 Triệu", growth: "+10% (Ổn định)", environment: "Trạm điện / Nhà máy" },
    techStack: [
      { name: "Xử lý sự cố",     icon: <Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Vận hành Trạm",   icon: <Server size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "An toàn điện",    icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Đọc sơ đồ mạch",  icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Rủi ro đánh đổi bằng sinh mạng", description: "Làm việc với dòng điện cao thế, một sai sót nhỏ khi quên dập cầu dao hoặc nối đất có thể dẫn đến hậu quả chết người." },
      { title: "Làm ca kíp liên miên", description: "Hệ thống điện hoạt động xuyên ngày đêm, nên kỹ sư O&M phải quen với việc đi làm lúc 10h đêm và về nhà lúc 6h sáng." },
    ],
    progression: [
      { level: "Kỹ thuật viên ca",exp: "0 - 2 năm", role: "Trực máy, ghi chép thông số nhiệt độ, điện áp vào nhật ký vận hành." },
      { level: "Trưởng ca vận hành",exp:"2 - 5 năm",role: "Chỉ đạo xử lý khi có báo động, lên lịch bảo dưỡng máy phát điện dự phòng." },
      { level: "Giám đốc Kỹ thuật",exp:"5+ năm",   role: "Quản lý ngân sách vật tư, cải tiến độ ổn định năng lượng toàn nhà máy." },
    ],
    actionPlan: {
      projects: ["Thực tập tại các nhà máy hoặc tòa nhà lớn ở bộ phận Kỹ thuật điện", "Học cách dùng đồng hồ VOM vạn năng"],
      interviewPrep: "Tuân thủ quy trình LOTO (Lockout/Tagout), nắm chắc các biện pháp an toàn đóng cắt điện cao/hạ thế.",
    },
  },
  "automation-engineer": {
    title: "Kỹ sư điện công nghiệp / Tự động hóa",
    parentMajor: "Kỹ Thuật Điện / Điện Tử",
    description: "Người làm phép cho máy móc. Lập trình PLC, thiết kế tủ điện điều khiển để một dây chuyền sản xuất tự chạy mà không cần con người nhúng tay vào.",
    stats: { salary: "15 - 40 Triệu", growth: "+25% (Cao)", environment: "Xưởng sản xuất / Tích hợp" },
    techStack: [
      { name: "PLC & SCADA",     icon: <Monitor size={14} />,      color: "bg-green-100 text-green-700" },
      { name: "Điều khiển Motor",icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
      { name: "Đấu nối tủ điện", icon: <Box size={14} />,          color: "bg-blue-100 text-blue-700" },
      { name: "Xử lý nhiễu (EMC)",icon:<Activity size={14} />,     color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Code không có nút 'Undo'", description: "Lập trình viên IT nếu code sai thì web bị crash. Lập trình viên PLC nếu code sai, cánh tay robot nặng 1 tấn có thể đập nát một chiếc ô tô thực." },
      { title: "Nghề đa hệ", description: "Họ phải vừa biết thiết kế cơ khí cơ bản, vừa biết đấu dây điện, lại vừa phải biết lập trình C/C++." },
    ],
    progression: [
      { level: "Nhân viên lắp ráp",exp: "0 - 2 năm", role: "Đứng xưởng đấu nối dây điện, khoan cắt vỏ tủ điện theo bản vẽ." },
      { level: "Kỹ sư Tự động hóa",exp:"2 - 5 năm",  role: "Viết chương trình điều khiển, lập trình giao diện HMI màn hình cảm ứng." },
      { level: "Chuyên gia giải pháp",exp:"5+ năm",role: "Đề xuất và đấu thầu các dự án 'Smart Factory' nâng cấp nhà máy truyền thống." },
    ],
    actionPlan: {
      projects: ["Mua một bộ Arduino hoặc Raspberry Pi để làm dự án Smart Home nhỏ", "Học phần mềm TIA Portal"],
      interviewPrep: "Nắm vững sơ đồ rơ-le, Contactor, biến tần (Inverter) và ngôn ngữ lập trình Ladder.",
    },
  },
  "renewable-tech": {
    title: "Chuyên viên kỹ thuật năng lượng tái tạo",
    parentMajor: "Kỹ Thuật Điện / Điện Tử",
    description: "Đón đầu làn sóng xanh. Khảo sát, thi công và bảo trì các dự án điện mặt trời mái nhà (Solar Rooftop) và các trụ tuabin điện gió.",
    stats: { salary: "12 - 35 Triệu", growth: "+35% (Cực cao)", environment: "Công trường / Lắp đặt" },
    techStack: [
      { name: "Hệ thống Solar",  icon: <Sun size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Inverter",        icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
      { name: "Điện 1 chiều (DC)",icon:<Activity size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Trèo cao",        icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Người nhện trên mái nhà", description: "Công việc yêu cầu họ thường xuyên phải đu mình trên các mái tôn nhà xưởng nóng tới 50 độ C để lắp ráp hàng nghìn tấm pin mặt trời." },
      { title: "Dòng điện chết người", description: "Điện một chiều (DC) từ pin mặt trời nguy hiểm hơn điện xoay chiều ở nhà rất nhiều vì không có điểm cắt '0', gây cháy nổ cực lớn nếu đoản mạch." },
    ],
    progression: [
      { level: "Kỹ thuật viên lắp đặt",exp:"0 - 2 năm",role:"Vận chuyển vật tư, bắt ốc vít khung nhôm, cắm giắc nối các tấm pin." },
      { level: "Kỹ sư dự án Solar",exp:"2 - 5 năm",role:"Đo đạc đổ bóng bằng flycam, cấu hình thiết bị Inverter hòa lưới mạng." },
      { level: "Giám đốc kỹ thuật NL",exp:"5+ năm",role: "Thiết kế các trạm điện mặt trời Farm hàng chục MW, tính toán điểm hoàn vốn." },
    ],
    actionPlan: {
      projects: ["Lắp một tấm pin năng lượng mặt trời 100W sạc ắc quy để chạy quạt ở nhà", "Tìm hiểu phần mềm PVSyst"],
      interviewPrep: "Sức khỏe tốt, không sợ độ cao, hiểu rõ sự khác biệt giữa dòng điện AC và DC.",
    },
  },
  "electrical-sales": {
    title: "Kinh doanh thiết bị điện (Sales Engineer)",
    parentMajor: "Kỹ Thuật Điện / Điện Tử",
    description: "Bán hàng bằng kiến thức kỹ thuật. Tư vấn các giải pháp thiết bị đóng cắt, dây cáp, đèn chiếu sáng cho các nhà thầu cơ điện và dự án lớn.",
    stats: { salary: "15 - 50+ Triệu (Có Hoa hồng)", growth: "+15% (Cao)", environment: "Giao tiếp / Khách hàng" },
    techStack: [
      { name: "Sale B2B",        icon: <DollarSign size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Kiến thức Sản phẩm",icon:<FileText size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Networking",      icon: <Users size={14} />,        color: "bg-purple-100 text-purple-700" },
      { name: "Đọc bản vẽ MEP",  icon: <Monitor size={14} />,      color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Mỏ vàng ngành điện", description: "Những kỹ sư không thích ngồi văn phòng gõ code thường chọn Sales. Họ có thể kiếm hàng trăm triệu tiền hoa hồng từ một dự án cấp cáp điện cho tòa nhà." },
      { title: "Bán giải pháp, không bán hàng", description: "Họ phải phân tích bản vẽ của khách hàng để chỉ ra việc dùng máy biến áp của họ sẽ giúp tiết kiệm 20% tiền điện so với đối thủ." },
    ],
    progression: [
      { level: "Sales Executive",exp: "0 - 2 năm", role: "Chăm sóc các đại lý nhỏ, gửi báo giá (Quotation), theo dõi giao hàng." },
      { level: "Key Account Manager",exp:"2 - 5 năm",role: "Đeo bám các dự án trọng điểm, thuyết phục Chủ đầu tư đưa sản phẩm vào danh sách vật tư." },
      { level: "Sales Director", exp: "5+ năm",    role: "Quản lý doanh số cả nước của các hãng lớn như Schneider, Panasonic, ABB." },
    ],
    actionPlan: {
      projects: ["Thử nghiệm buôn bán linh kiện điện tử nhỏ (đèn LED, mạch Arduino) trên mạng", "Học kỹ năng thương thuyết"],
      interviewPrep: "Ngoại hình sáng, giao tiếp lưu loát, năng động và có hiểu biết cơ bản về các thương hiệu thiết bị điện lớn.",
    },
  },

  // ==========================================
  // 28. VẬT LÝ HỌC (PHYSICS)
  // ==========================================
  "physics-researcher": {
    title: "Nghiên cứu viên vật lý",
    parentMajor: "Vật Lý Học / Khoa Học Cơ Bản",
    description: "Nhà khoa học thuần túy. Thực hiện nghiên cứu cơ bản về điện từ, quang học, lượng tử hoặc vật lý chất rắn tại các viện hàn lâm và đại học.",
    stats: { salary: "10 - 25 Triệu", growth: "+5% (Đặc thù)", environment: "Viện Hàn lâm / Phòng Thí nghiệm" },
    techStack: [
      { name: "Nghiên cứu Lý thuyết",icon:<BookOpen size={14} />,  color: "bg-blue-100 text-blue-700" },
      { name: "Toán học Cao cấp",icon:<Calculator size={14} />,    color: "bg-orange-100 text-orange-700" },
      { name: "Xử lý dữ liệu",   icon: <BarChart size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Viết báo khoa học",icon:<FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Đi trước thời đại", description: "Các nghiên cứu của họ đôi khi không có ứng dụng gì ở hiện tại, nhưng có thể là nền tảng để tạo ra cỗ máy thời gian hoặc siêu máy tính lượng tử 50 năm sau." },
      { title: "Đam mê là chính", description: "Nhiều nhà vật lý chấp nhận mức lương khiêm tốn ở Viện nghiên cứu nhà nước chỉ vì được theo đuổi những phương trình mà họ đam mê." },
    ],
    progression: [
      { level: "Trợ lý Nghiên cứu",exp: "0 - 3 năm", role: "Phụ giúp làm thí nghiệm, vận hành thiết bị đo đạc, tổng hợp số liệu." },
      { level: "Nghiên cứu viên",exp: "3 - 8 năm", role: "Đứng tên công bố quốc tế (ISI, Scopus), xin học bổng làm Tiến sĩ nước ngoài." },
      { level: "Phó/Giáo sư",    exp: "8+ năm",    role: "Dẫn dắt các nhóm nghiên cứu (Research Group), chủ trì đề tài cấp quốc gia." },
    ],
    actionPlan: {
      projects: ["Liên hệ các thầy cô trong khoa Vật lý để xin tham gia nhóm nghiên cứu (Lab) từ sớm", "Học ngôn ngữ Python để mô phỏng"],
      interviewPrep: "Khả năng tư duy trừu tượng xuất sắc, tiếng Anh học thuật và định hướng học lên Thạc sĩ/Tiến sĩ.",
    },
  },
  "ic-designer": {
    title: "Kỹ sư thiết kế bán dẫn / Vi mạch (IC Design)",
    parentMajor: "Vật Lý Học / Khoa Học Cơ Bản",
    description: "Ngành nghề hot nhất thập kỷ. Sử dụng kiến thức vật lý linh kiện để thiết kế và mô phỏng các con chip vi xử lý siêu nhỏ nằm trong điện thoại, ô tô điện.",
    stats: { salary: "20 - 100+ Triệu", growth: "+50% (Bùng nổ)", environment: "Văn phòng công nghệ cao" },
    techStack: [
      { name: "Thiết kế Analog/Digital",icon:<Cpu size={14} />,    color: "bg-red-100 text-red-700" },
      { name: "Verilog / VHDL",  icon: <Code size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "Vật lý Bán dẫn",  icon: <Zap size={14} />,          color: "bg-yellow-100 text-yellow-700" },
      { name: "EDA Tools",       icon: <Monitor size={14} />,      color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Vẽ bản đồ thành phố trên móng tay", description: "Kỹ sư vi mạch thiết kế hàng tỷ bóng bán dẫn (transistor) đan xen nhau trên một miếng silicon chỉ bằng kích thước móng tay." },
      { title: "Sai lầm triệu đô", description: "Nếu kỹ sư phần mềm sai, họ có thể tung bản cập nhật sửa lỗi qua mạng. Nếu kỹ sư làm chip sai, cả một lô hàng triệu USD sẽ trở thành rác." },
    ],
    progression: [
      { level: "Junior IC Designer",exp:"0 - 2 năm",role:"Thiết kế mạch vật lý (Layout), chạy mô phỏng kiểm tra lỗi (Verification)." },
      { level: "IC Design Engineer",exp:"2 - 5 năm",role:"Thiết kế kiến trúc khối mạch phức tạp, tối ưu hóa công suất và diện tích chip." },
      { level: "Senior/Principal",exp: "5+ năm",   role: "Quản lý dự án thiết kế chip cho các ông lớn như Marvell, Synopsys, FPT Semi." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu về kiến trúc vi xử lý RISC-V", "Thực hành ngôn ngữ Verilog trên các phần mềm mô phỏng miễn phí"],
      interviewPrep: "Hiểu biết cực kỳ sâu sắc về linh kiện bán dẫn (Diode, MOSFET), mạch điện tử số và kỹ năng giải quyết vấn đề logic.",
    },
  },
  "medical-physicist": {
    title: "Chuyên viên Vật lý y tế (Medical Physicist)",
    parentMajor: "Vật Lý Học / Khoa Học Cơ Bản",
    description: "Người hùng giấu mặt trong cuộc chiến chống ung thư. Tính toán liều lượng tia bức xạ để tiêu diệt khối u mà không làm tổn thương các cơ quan khỏe mạnh xung quanh.",
    stats: { salary: "15 - 45 Triệu", growth: "+18% (Cao)", environment: "Bệnh viện (Khoa Ung bướu)" },
    techStack: [
      { name: "Vật lý Bức xạ",    icon: <Zap size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Lập kế hoạch Xạ trị",icon:<Target size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Vận hành máy gia tốc",icon:<Settings size={14} />,  color: "bg-slate-100 text-slate-700" },
      { name: "An toàn phóng xạ",icon: <ShieldAlert size={14} />,  color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Đồng nghiệp của Bác sĩ", description: "Bác sĩ Ung bướu chỉ định vị trí cần bắn tia X, còn chuyên viên Vật lý y tế là người lập trình cho cỗ máy làm sao để bắn trúng vị trí đó chuẩn xác đến từng milimet." },
      { title: "Hiếm như lá mùa thu", description: "Số lượng kỹ sư Vật lý y tế tại Việt Nam cực kỳ ít. Nếu có chứng chỉ hành nghề, bạn sẽ được các bệnh viện lớn săn đón ráo riết." },
    ],
    progression: [
      { level: "KTV Xạ trị",     exp: "0 - 2 năm", role: "Vận hành máy gia tốc tuyến tính, chụp CT/MRI mô phỏng cho bệnh nhân." },
      { level: "Kỹ sư Vật lý Y tế",exp:"2 - 5 năm",role: "Lập kế hoạch xạ trị (Treatment Planning), tính toán liều bức xạ 3D." },
      { level: "Trưởng phòng VL Y tế",exp:"5+ năm",role: "Hiệu chuẩn định kỳ các máy móc xạ trị hàng triệu đô, quản lý an toàn phóng xạ toàn viện." },
    ],
    actionPlan: {
      projects: ["Nghiên cứu về cơ chế tương tác của tia X, tia Gamma với vật chất", "Tìm hiểu cấu tạo máy chụp CT/PET"],
      interviewPrep: "Nền tảng Vật lý hạt nhân tốt, hiểu biết về giải phẫu người và sự cẩn trọng liên quan đến tính mạng bệnh nhân.",
    },
  },
  "photonics-engineer": {
    title: "Kỹ sư quang học / Photonics",
    parentMajor: "Vật Lý Học / Khoa Học Cơ Bản",
    description: "Nhà khoa học của ánh sáng. Phát triển công nghệ Laser dùng trong phẫu thuật, màn hình OLED, camera smartphone hay cáp quang viễn thông truyền internet tốc độ cao.",
    stats: { salary: "15 - 40 Triệu", growth: "+20% (Cao)", environment: "R&D / Tập đoàn viễn thông" },
    techStack: [
      { name: "Quang hình học",  icon: <Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Laser / Sợi quang",icon:<Zap size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Thiết kế thấu kính",icon:<Target size={14} />,      color: "bg-red-100 text-red-700" },
      { name: "Xử lý tín hiệu quang",icon:<Activity size={14} />,  color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Mạng internet dưới đáy biển", description: "Hầu hết dữ liệu internet toàn cầu được truyền đi bằng ánh sáng bắn qua các sợi cáp quang (sợi thủy tinh nhỏ bằng sợi tóc) nằm sâu dưới đáy đại dương." },
      { title: "Tương lai của máy tính", description: "Giới khoa học quang học đang nghiên cứu để chế tạo máy tính quang tử - dùng ánh sáng thay cho điện để tính toán với tốc độ nhanh gấp hàng vạn lần hiện tại." },
    ],
    progression: [
      { level: "Kỹ sư quang học",exp: "0 - 2 năm", role: "Test các thấu kính, cảm biến camera trong phòng thí nghiệm quang học." },
      { level: "Kỹ sư truyền dẫn",exp:"2 - 5 năm", role: "Bảo trì mạng cáp quang, cấu hình hệ thống thu phát tín hiệu viễn thông." },
      { level: "Nghiên cứu cấp cao",exp:"5+ năm",  role: "Chế tạo vật liệu quang điện tử mới, làm việc tại Samsung, LG, Viettel." },
    ],
    actionPlan: {
      projects: ["Thí nghiệm vật lý vui với khúc xạ, phản xạ và laser", "Tìm hiểu cấu tạo và nguyên lý hoạt động của cáp quang"],
      interviewPrep: "Giỏi vật lý quang học, sóng điện từ và có nền tảng cơ bản về mạch điện tử.",
    },
  },
  "physics-lecturer": {
    title: "Giảng viên Vật lý / Gia sư STEM",
    parentMajor: "Vật Lý Học / Khoa Học Cơ Bản",
    description: "Người gieo hạt đam mê khoa học. Giảng dạy các môn Vật lý, Robotics, lập trình cho sinh viên hoặc học sinh phổ thông theo mô hình giáo dục STEM hiện đại.",
    stats: { salary: "10 - 30+ Triệu", growth: "+25% (Rất cao)", environment: "Trường Đại học / Trung tâm" },
    techStack: [
      { name: "Sư phạm Vật lý",  icon: <BookOpen size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Giáo dục STEM",   icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Robotics cơ bản", icon: <Settings size={14} />,     color: "bg-orange-100 text-orange-700" },
      { name: "Tổ chức thực hành",icon:<FlaskConical size={14} />, color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Không chỉ là bảng đen phấn trắng", description: "Dạy Vật lý hiện nay là để học sinh tự tay lắp ráp mạch điện, phóng tên lửa nước hoặc lập trình xe robot chạy vòng quanh lớp." },
      { title: "Hút bạc nhờ luyện thi", description: "Bên cạnh việc dạy STEM, các gia sư luyện thi đội tuyển học sinh giỏi Vật lý hoặc luyện thi THPT Quốc gia có thu nhập cực kỳ ấn tượng." },
    ],
    progression: [
      { level: "Giáo viên STEM", exp: "0 - 2 năm", role: "Đứng lớp tại các trung tâm ngoại khóa, hướng dẫn học sinh lắp ráp Lego, lập trình Scratch." },
      { level: "Giảng viên Cơ hữu",exp:"2 - 5 năm",role: "Dạy Vật lý đại cương tại các trường kỹ thuật, xuất bản bài báo nghiên cứu." },
      { level: "Quản lý Học thuật",exp:"5+ năm",   role: "Thiết kế giáo trình STEM, đào tạo đội ngũ giáo viên khoa học trẻ." },
    ],
    actionPlan: {
      projects: ["Dạy kèm môn Vật lý cấp 3 cho đàn em", "Tham gia các CLB sáng tạo khoa học kỹ thuật, làm đồ chơi tái chế"],
      interviewPrep: "Khả năng diễn đạt các khái niệm vật lý phức tạp (như lượng tử) bằng ngôn ngữ đời thường đơn giản nhất.",
    },
  },

  // ==========================================
  // 29. ÂM NHẠC / SẢN XUẤT ÂM NHẠC (MUSIC)
  // ==========================================
  "singer": {
    title: "Ca sĩ / Nghệ sĩ biểu diễn",
    parentMajor: "Âm Nhạc / Sản Xuất Âm Nhạc",
    description: "Đứng dưới ánh đèn sân khấu. Biểu diễn thanh nhạc trực tiếp hoặc thu âm album, xây dựng hình ảnh cá nhân và truyền cảm hứng cho hàng triệu khán giả.",
    stats: { salary: "Không giới hạn (Theo show)", growth: "Cực cạnh tranh", environment: "Sân khấu / Truyền thông" },
    techStack: [
      { name: "Thanh nhạc",      icon: <Ear size={14} />,          color: "bg-pink-100 text-pink-700" },
      { name: "Phong cách SK",   icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Xây dựng Fanbase",icon: <Users size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Sức bền vật lý",  icon: <Activity size={14} />,     color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Tập thể dục bằng phổi", description: "Hát đúng kỹ thuật cực kỳ tốn sức. Các ca sĩ chuyên nghiệp phải có chế độ tập luyện cơ hoành và chạy bộ ép xung không kém gì vận động viên." },
      { title: "Thu nhập bất bình đẳng", description: "Âm nhạc là ngành theo quy luật 1/99. 1% nghệ sĩ nổi tiếng kiếm được 99% tiền của cả thị trường." },
    ],
    progression: [
      { level: "Ca sĩ tự do",    exp: "0 - 3 năm", role: "Hát lót phòng trà, quán cafe acoustic, tự chi trả tiền thu âm cover." },
      { level: "Nghệ sĩ Indie",  exp: "3 - 5 năm", role: "Có bản hit đầu tiên trên Spotify/Tiktok, bắt đầu nhận show sự kiện nhỏ." },
      { level: "A-List Star",    exp: "5+ năm",    role: "Chạy tour diễn xuyên quốc gia, đóng hợp đồng quảng cáo đại sứ thương hiệu tỷ đồng." },
    ],
    actionPlan: {
      projects: ["Thường xuyên đi hát giao lưu tại các quán cafe Acoustic để rèn tâm lý sân khấu", "Lập kênh Tiktok khoe giọng"],
      interviewPrep: "Sở hữu giọng hát đặc trưng, ngoại hình chăm chút, tâm lý chịu đựng búa rìu dư luận (antifan) cực kỳ tốt.",
    },
  },
  "composer": {
    title: "Nhạc sĩ sáng tác / Nhà soạn nhạc",
    parentMajor: "Âm Nhạc / Sản Xuất Âm Nhạc",
    description: "Người kể chuyện bằng giai điệu. Viết bài hát cho ca sĩ, phối khí cho dàn nhạc hoặc sáng tác nhạc nền (BGM) cảm xúc cho phim điện ảnh, quảng cáo, game.",
    stats: { salary: "10 - 50+ Triệu (Bán Tác quyền)", growth: "+10% (Cao)", environment: "Phòng thu / Làm việc độc lập" },
    techStack: [
      { name: "Nhạc lý chuyên sâu",icon:<FileText size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Sáng tạo Giai điệu",icon:<BrainCircuit size={14} />,color: "bg-purple-100 text-purple-700" },
      { name: "Chơi nhạc cụ (Piano)",icon:<Monitor size={14} />,   color: "bg-slate-100 text-slate-700" },
      { name: "Viết Lời (Lyric)",icon: <PenTool size={14} />,      color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Nằm không cũng ra tiền", description: "Nếu sáng tác được một bản Hit huyền thoại, nhạc sĩ sẽ nhận được tiền bản quyền mỗi khi bài hát được phát trên TV, quán karaoke hay nhạc chuông suốt phần đời còn lại." },
      { title: "Không cần phải biết hát", description: "Rất nhiều nhà soạn nhạc vĩ đại có giọng hát cực dở. Họ chỉ cần đàn piano hoặc dùng phần mềm để truyền đạt ý tưởng cho ca sĩ hát." },
    ],
    progression: [
      { level: "Songwriter trẻ", exp: "0 - 2 năm", role: "Viết nhạc gửi demo (bản nháp) cho các công ty giải trí, tìm kiếm cơ hội bán bài." },
      { level: "Nhạc sĩ chuyên nghiệp",exp:"2 - 5 năm",role:"Có bài hit, được các ca sĩ nổi tiếng chủ động đặt hàng bài hát (đo ni đóng giày)." },
      { level: "Giám đốc Âm nhạc",exp:"5+ năm",   role: "Định hướng phong cách âm nhạc (concept) cho cả một bộ phim bom tấn hoặc album nghệ sĩ." },
    ],
    actionPlan: {
      projects: ["Tự sáng tác và thu âm thô một ca khúc hoàn chỉnh", "Học thành thạo một nhạc cụ hòa âm (Piano hoặc Guitar)"],
      interviewPrep: "Cảm âm tốt, tư duy văn học để viết lời sắc sảo và am hiểu xu hướng nghe nhạc của giới trẻ.",
    },
  },
  "music-producer": {
    title: "Music Producer / Sound Engineer",
    parentMajor: "Âm Nhạc / Sản Xuất Âm Nhạc",
    description: "Phù thủy âm thanh. Ngồi sau bàn điều khiển studio để thu âm, chọn beat, mix (trộn âm) và master (đánh bóng) để biến một giọng hát thô thành bản nhạc hoàn hảo.",
    stats: { salary: "15 - 60+ Triệu", growth: "+20% (Cao)", environment: "Studio âm thanh" },
    techStack: [
      { name: "Phần mềm DAW",    icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Hòa âm Phối khí", icon: <Layers size={14} />,       color: "bg-green-100 text-green-700" },
      { name: "Vật lý Âm thanh", icon: <Ear size={14} />,          color: "bg-orange-100 text-orange-700" },
      { name: "Sử dụng Synth",   icon: <Settings size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Cứu rỗi giọng hát", description: "Nhiều ca sĩ hát live bị phô, chênh nhịp, nhưng qua tay Sound Engineer kéo Autotune và cắt ghép thì bản audio phát hành vẫn mượt mà như ca sĩ thực thụ." },
      { title: "Phù thủy đứng sau Hit", description: "Ngày nay, sự thành công của một bài hát (nhất là EDM, Rap) phụ thuộc vào con Beat của Producer chiếm đến 60-70%." },
    ],
    progression: [
      { level: "Trợ lý Studio",  exp: "0 - 2 năm", role: "Set up mic, cắm dây cáp, edit cắt ghép các đoạn thu âm phô lỗi." },
      { level: "Beatmaker / Mixer",exp:"2 - 5 năm",role: "Làm beat nhạc, trộn (mix) các lớp âm thanh (vocals, drums, bass) cho cân bằng." },
      { level: "Executive Producer",exp:"5+ năm",  role: "Chỉ đạo nghệ sĩ cách hát, định hướng màu sắc âm thanh cho sản phẩm." },
    ],
    actionPlan: {
      projects: ["Tải phần mềm FL Studio hoặc Ableton và thử mix một đoạn nhạc beat cơ bản", "Học cách thiết lập hệ thống loa Monitor"],
      interviewPrep: "Đôi tai nhạy bén, khả năng thao tác phần mềm nhanh nhẹn và am hiểu đa dạng thể loại nhạc (Genre).",
    },
  },
  "music-teacher": {
    title: "Giáo viên âm nhạc",
    parentMajor: "Âm Nhạc / Sản Xuất Âm Nhạc",
    description: "Gõ nhịp từng phím đàn. Dạy thanh nhạc, nhạc cụ (Piano, Guitar, Trống) cho trẻ em, người đi làm tại các trường học hoặc trung tâm nghệ thuật tư nhân.",
    stats: { salary: "10 - 35 Triệu", growth: "+15% (Ổn định)", environment: "Trường học / Trung tâm" },
    techStack: [
      { name: "Kỹ năng Nhạc cụ", icon: <Target size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Kỹ năng Sư phạm", icon: <BookOpen size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Nhạc lý cơ bản",  icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
      { name: "Kiên nhẫn",        icon: <HeartHandshake size={14}/>,color: "bg-pink-100 text-pink-700" },
    ],
    funFacts: [
      { title: "Nghề chữa điếc tai", description: "Giáo viên âm nhạc phải có thần kinh thép để chịu đựng những âm thanh 'đinh tai nhức óc' khi học sinh mới tập kéo đàn Violin hay gõ Trống sai nhịp." },
      { title: "Giáo dục bằng nghệ thuật", description: "Học nhạc không chỉ để biết đàn hát, mà giúp trẻ em phát triển song não, tăng cường trí nhớ và giảm tỷ lệ tự kỷ." },
    ],
    progression: [
      { level: "Trợ giảng Nhạc", exp: "0 - 1 năm", role: "Hỗ trợ chỉnh thế bấm tay cho học viên, nhắc nhịp, xếp lịch học." },
      { level: "Giáo viên Âm nhạc",exp:"1 - 5 năm",role: "Dạy lớp 1-1 hoặc lớp nhóm, chuẩn bị các tiết mục báo cáo cuối khóa cho học viên." },
      { level: "Mở trung tâm riêng",exp:"5+ năm",  role: "Làm chủ một trung tâm nghệ thuật, nhượng quyền thương hiệu." },
    ],
    actionPlan: {
      projects: ["Nhận dạy kèm guitar/piano cơ bản cho trẻ em trong xóm", "Lấy chứng chỉ sư phạm hoặc chứng chỉ quốc tế (ABRSM)"],
      interviewPrep: "Chuyên môn nhạc cụ vững, thái độ ân cần, vui vẻ và biết cách tổ chức lớp học sinh động.",
    },
  },
  "music-supervisor": {
    title: "Music Supervisor / Content Creator",
    parentMajor: "Âm Nhạc / Sản Xuất Âm Nhạc",
    description: "Giám sát âm nhạc. Chọn bài hát phù hợp ghép vào phim ảnh, quảng cáo (TVC) và thực hiện các thủ tục mua bản quyền hợp pháp. Hoặc tự làm kênh review âm nhạc.",
    stats: { salary: "12 - 30 Triệu", growth: "+20% (Cao)", environment: "Agency Truyền thông / Phim" },
    techStack: [
      { name: "Gu âm nhạc tốt",  icon: <Ear size={14} />,          color: "bg-purple-100 text-purple-700" },
      { name: "Luật Bản quyền",  icon: <Scale size={14} />,        color: "bg-red-100 text-red-700" },
      { name: "Thương lượng giá",icon: <DollarSign size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "Biên tập Video",  icon: <Monitor size={14} />,      color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Tốn tiền nhất bộ phim", description: "Để chèn một bài hát hit thế giới (như của Taylor Swift) vào 15 giây phim, nhà sản xuất có thể phải trả từ vài trăm ngàn đến cả triệu đô la tiền bản quyền." },
      { title: "Nghề đi nghe nhạc dạo", description: "Họ được trả tiền để nghe hàng ngàn bài hát mỗi ngày nhằm tìm ra một giai điệu 'khớp' nhất với cảnh diễn viên đang khóc." },
    ],
    progression: [
      { level: "Nhân viên bản quyền",exp:"0 - 2 năm",role:"Liên hệ với các hãng đĩa, nhạc sĩ để xin báo giá tiền tác quyền." },
      { level: "Music Supervisor",exp: "2 - 5 năm",role: "Đề xuất list nhạc cho Đạo diễn, giải quyết các tranh chấp pháp lý âm thanh." },
      { level: "Reviewer/KOL",   exp: "Phụ thuộc", role: "Trở thành người có sức ảnh hưởng, review định hướng gu nghe nhạc cho cộng đồng." },
    ],
    actionPlan: {
      projects: ["Thử thay đổi nhạc nền của một đoạn phim nổi tiếng xem cảm xúc thay đổi thế nào", "Tìm hiểu luật Sở hữu trí tuệ VN"],
      interviewPrep: "Kiến thức âm nhạc bách khoa toàn thư, kỹ năng đàm phán hợp đồng, hiểu rõ YouTube Copyright.",
    },
  },

  // ==========================================
  // 30. MỸ THUẬT / THIẾT KẾ ĐỒ HỌA (ART)
  // ==========================================
  "freelance-artist": {
    title: "Họa sĩ / Artist tự do",
    parentMajor: "Mỹ Thuật / Thiết Kế Đồ Họa",
    description: "Sống bằng đam mê vẽ. Sáng tác tranh truyền thống (sơn dầu, lụa) hoặc vẽ minh họa kỹ thuật số (Digital Art) và bán tác phẩm qua Gallery hoặc nhận hoa hồng (Commission) online.",
    stats: { salary: "Thu nhập bấp bênh nhưng không trần", growth: "Tùy năng lực", environment: "Freelance / Studio cá nhân" },
    techStack: [
      { name: "Kỹ năng Hội họa", icon: <Palette size={14} />,      color: "bg-pink-100 text-pink-700" },
      { name: "Phong cách cá nhân",icon:<Target size={14} />,      color: "bg-red-100 text-red-700" },
      { name: "Digital Art (Wacom)",icon:<Monitor size={14} />,    color: "bg-blue-100 text-blue-700" },
      { name: "Tự Marketing",    icon: <Megaphone size={14} />,    color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Nổi tiếng qua một đêm", description: "Một bức tranh đăng lên Twitter/Reddit nếu viral có thể giúp họa sĩ nhận được hàng trăm đơn đặt hàng vẽ từ khách quốc tế ngay hôm sau." },
      { title: "Vẽ vì khách", description: "Dù là nghệ sĩ, 80% thu nhập của họ đến từ việc vẽ theo yêu cầu của khách (vẽ chân dung, vẽ thú cưng, nhân vật anime) chứ không phải vẽ theo ý mình." },
    ],
    progression: [
      { level: "Artist mới nổi", exp: "0 - 3 năm", role: "Vẽ luyện tay nghề, mở nhận commission giá rẻ, xây dựng trang cá nhân (ArtStation, DeviantArt)." },
      { level: "Họa sĩ chuyên nghiệp",exp:"3 - 7 năm",role:"Tham gia triển lãm nhóm, vẽ bìa sách cho nhà xuất bản, bán file in tranh." },
      { level: "Bậc thầy (Master)",exp:"7+ năm",   role: "Tranh có giá trị sưu tầm cao, tổ chức triển lãm cá nhân, mở lớp dạy masterclass." },
    ],
    actionPlan: {
      projects: ["Thử nghiệm tham gia thử thách Inktober (vẽ 31 bức tranh trong tháng 10)", "Lập tài khoản Behance/DeviantArt"],
      interviewPrep: "Rèn luyện nét vẽ tay (Anatomy cơ thể người, phối cảnh), kỷ luật tự quản lý thời gian vì không có sếp thúc giục.",
    },
  },
  "concept-artist": {
    title: "Concept Artist / Game Artist",
    parentMajor: "Mỹ Thuật / Thiết Kế Đồ Họa",
    description: "Nhà kiến tạo thế giới ảo. Vẽ phác thảo tạo hình nhân vật (Character), quái vật, bối cảnh vũ trụ (Environment) cho các công ty sản xuất Game và Phim hoạt hình 3D.",
    stats: { salary: "15 - 50+ Triệu", growth: "+30% (Cực cao)", environment: "Game Studio" },
    techStack: [
      { name: "Photoshop (Vẽ máy)",icon:<Monitor size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Tư duy Thiết kế", icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Hiểu 3D cơ bản",  icon: <Box size={14} />,          color: "bg-slate-100 text-slate-700" },
      { name: "Khả năng Tưởng tượng",icon:<Zap size={14} />,       color: "bg-yellow-100 text-yellow-700" },
    ],
    funFacts: [
      { title: "Từ giấy nháp đến Game bom tấn", description: "Hình ảnh một vị tướng trong Liên Minh Huyền Thoại phải trải qua hàng chục bản vẽ nháp của Concept Artist trước khi được dựng thành 3D." },
      { title: "Người tạo ra quy luật", description: "Họ không chỉ vẽ cái cây, họ phải thiết kế xem cái cây đó mọc trên hành tinh không có mặt trời thì lá sẽ màu gì để logic với bối cảnh Game." },
    ],
    progression: [
      { level: "Junior Concept Artist",exp:"0 - 2 năm",role:"Vẽ vũ khí, đạo cụ (Props), chi tiết quần áo nhân vật theo concept có sẵn." },
      { level: "Senior Concept Artist",exp:"2 - 5 năm",role:"Định hình phong cách vẽ chính, thiết kế nhân vật chính (Main Character)." },
      { level: "Lead Artist",    exp: "5+ năm",    role: "Quản lý cả đội ngũ Họa sĩ và Modeler 3D, đảm bảo sự đồng nhất về đồ họa toàn Game." },
    ],
    actionPlan: {
      projects: ["Thử tự nghĩ và vẽ ra một nhân vật siêu anh hùng mang bản sắc Việt Nam", "Làm quen với bảng vẽ điện tử (Wacom/Huion)"],
      interviewPrep: "Portfolio cực kỳ ấn tượng, giỏi tả chất liệu (kim loại, da, vải), khối vóc và hiểu biết về ngành công nghiệp Game.",
    },
  },
  "art-director-art": {
    title: "Giám đốc nghệ thuật (Art Director)",
    parentMajor: "Mỹ Thuật / Thiết Kế Đồ Họa",
    description: "Nhạc trưởng của cái Đẹp. Không trực tiếp ngồi vẽ, họ là người duyệt ý tưởng, chọn màu sắc và chỉ đạo các Designer/Photographer tạo ra một chiến dịch quảng cáo hoàn hảo.",
    stats: { salary: "30 - 80+ Triệu", growth: "+15% (Cao)", environment: "Creative Agency" },
    techStack: [
      { name: "Tư duy Thẩm mỹ",  icon: <Palette size={14} />,      color: "bg-pink-100 text-pink-700" },
      { name: "Lãnh đạo Sáng tạo",icon:<Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Nắm bắt Xu hướng",icon:<TrendingUp size={14} />,    color: "bg-green-100 text-green-700" },
      { name: "Hiểu biết Thương hiệu",icon:<Briefcase size={14} />,color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Nghề làm sếp của sự bay bổng", description: "Quản lý một đội ngũ toàn những người nghệ sĩ cái tôi cao là nhiệm vụ đau đầu nhất của Giám đốc nghệ thuật." },
      { title: "Mắt chim ưng", description: "Họ có thể nhìn lướt qua một tấm poster quảng cáo và chỉ ra ngay lập tức font chữ bị lệch 1 pixel hay màu sắc bị sai mã nhận diện thương hiệu." },
    ],
    progression: [
      { level: "Graphic Designer",exp: "0 - 3 năm",role: "Ngồi máy tính thiết kế banner, logo, chỉnh sửa ảnh dưới sự chỉ đạo của sếp." },
      { level: "Senior Designer",exp: "3 - 6 năm", role: "Tự lên concept chính cho chiến dịch, dẫn dắt các dự án quy mô vừa." },
      { level: "Art Director",   exp: "6+ năm",    role: "Ra quyết định thẩm mỹ cuối cùng, đi thuyết trình bán ý tưởng cho khách hàng lớn." },
    ],
    actionPlan: {
      projects: ["Nghiên cứu các giải thưởng thiết kế Cannes Lions hoặc D&AD", "Phân tích vì sao logo của Apple hay Nike lại thành công"],
      interviewPrep: "Kỹ năng giao tiếp cực tốt để giải thích cái đẹp cho khách hàng không hiểu về nghệ thuật, kỹ năng quản trị thời gian dự án.",
    },
  },
  "fashion-designer": {
    title: "Nhà thiết kế thời trang",
    parentMajor: "Mỹ Thuật / Thiết Kế Đồ Họa",
    description: "Biến vải vóc thành tác phẩm nghệ thuật mặc được. Cập nhật xu hướng thời trang thế giới, vẽ rập, chọn chất liệu và giám sát may mặc tạo ra bộ sưu tập mới.",
    stats: { salary: "15 - 50 Triệu", growth: "+12% (Ổn định)", environment: "Studio thời trang / Xưởng may" },
    techStack: [
      { name: "Vẽ phác thảo (Sketch)",icon:<PenTool size={14} />,  color: "bg-orange-100 text-orange-700" },
      { name: "Dựng rập (Pattern)",icon:<Layers size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Hiểu Chất liệu Vải",icon:<Search size={14} />,      color: "bg-green-100 text-green-700" },
      { name: "May mặc thực hành",icon:<Settings size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Ánh hào quang rực rỡ", description: "Sự kiện Fashion Week là nơi các nhà thiết kế được công nhận nỗ lực hàng tháng trời chỉ qua 15 phút người mẫu sải bước trên sàn Runway." },
      { title: "Ngành công nghiệp ô nhiễm", description: "Thời trang nhanh (Fast Fashion) là ngành gây ô nhiễm thứ 2 thế giới. Thách thức lớn của NTK hiện tại là tìm ra vật liệu xanh có thể tái chế." },
    ],
    progression: [
      { level: "Thực tập sinh thiết kế",exp:"0 - 2 năm",role:"Vẽ mẫu kỹ thuật (Technical Drawing), chạy rập, đi chợ vải chọn phụ liệu." },
      { level: "Nhà thiết kế độc lập",exp:"2 - 5 năm",role: "Đề xuất bộ sưu tập theo mùa, làm việc với xưởng sản xuất để ra hàng mẫu." },
      { level: "Giám đốc Sáng tạo",exp:"5+ năm",   role: "Mở thương hiệu (Local Brand) riêng, định hình phong cách thời trang của hãng." },
    ],
    actionPlan: {
      projects: ["Thử thiết kế và may lại một chiếc áo cũ thành phong cách mới", "Học vẽ phác thảo cơ thể người (Croquis)"],
      interviewPrep: "Hiểu biết về lịch sử thời trang, nhạy bén với màu sắc (Color Palette) và có tư duy kinh doanh bán lẻ.",
    },
  },
  "art-teacher": {
    title: "Giáo viên Mỹ thuật / Workshop Artist",
    parentMajor: "Mỹ Thuật / Thiết Kế Đồ Họa",
    description: "Lan tỏa tình yêu nghệ thuật. Dạy vẽ cho học sinh tại trường học hoặc tổ chức các buổi Workshop trải nghiệm (vẽ tranh canvas, nặn gốm) cho giới trẻ vào cuối tuần.",
    stats: { salary: "10 - 25 Triệu", growth: "+15% (Tiềm năng)", environment: "Trường học / Studio nghệ thuật" },
    techStack: [
      { name: "Kỹ năng Sư phạm", icon: <BookOpen size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Thực hành Đa vật liệu",icon:<Palette size={14} />,  color: "bg-pink-100 text-pink-700" },
      { name: "Tổ chức Sự kiện", icon: <Activity size={14} />,     color: "bg-green-100 text-green-700" },
      { name: "Chăm sóc học viên",icon:<HeartHandshake size={14}/>,color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Chữa lành bằng nghệ thuật", description: "Nhiều buổi Workshop cuối tuần không đặt nặng tính hàn lâm, mà mục đích chính là giúp người đi làm xả stress sau 1 tuần căng thẳng bằng cách quẹt cọ." },
      { title: "Nghề lúc nào cũng bẩn", description: "Quần áo dính đầy màu Acrylic, sơn mài hoặc bột gốm là đồng phục đặc trưng của những người làm nghề này." },
    ],
    progression: [
      { level: "Trợ giảng Workshop",exp:"0 - 1 năm",role:"Chuẩn bị toan vẽ, cọ, pha màu sẵn và dọn dẹp vệ sinh studio sau khi kết thúc." },
      { level: "Giáo viên Đứng lớp",exp:"1 - 3 năm",role:"Hướng dẫn trực tiếp từng học viên các kỹ thuật tán màu, pha sáng tối cơ bản." },
      { level: "Quản lý Studio", exp: "3+ năm",    role: "Lên lịch workshop theo tháng, kinh doanh nhượng quyền các trung tâm dạy vẽ nghệ thuật." },
    ],
    actionPlan: {
      projects: ["Thử mở một buổi dạy vẽ tranh màu nước miễn phí cho các em nhỏ trong xóm", "Tìm hiểu phương pháp giáo dục Reggio Emilia"],
      interviewPrep: "Năng lượng vui vẻ cởi mở, không chê bai tác phẩm của học viên, biết cách truyền đạt kỹ thuật một cách dễ hiểu.",
    },
  },

  // ==========================================
  // 31. TRIẾT HỌC / NGHIÊN CỨU XÃ HỘI (PHILOSOPHY)
  // ==========================================
  "philosophy-researcher": {
    title: "Nghiên cứu viên triết học / Giảng viên",
    parentMajor: "Triết Học / Nghiên Cứu Xã Hội",
    description: "Những nhà hiền triết hiện đại. Đào sâu vào tư tưởng của nhân loại, nghiên cứu các phạm trù về nhận thức, đạo đức học và truyền đạt tại môi trường hàn lâm đại học.",
    stats: { salary: "8 - 20 Triệu", growth: "+5% (Ổn định)", environment: "Đại học / Viện Hàn lâm" },
    techStack: [
      { name: "Tư duy Phản biện",icon:<BrainCircuit size={14} />,  color: "bg-purple-100 text-purple-700" },
      { name: "Nghiên cứu tài liệu",icon:<BookOpen size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Lập luận Logic",  icon: <Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Viết học thuật",  icon: <FileText size={14} />,     color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Nghề đặt câu hỏi", description: "Triết gia không đưa ra câu trả lời tuyệt đối, họ là những người luôn hỏi 'Tại sao điều đó lại đúng?' để lật đổ những định kiến cũ." },
      { title: "Sách cũ là vàng", description: "Họ thường đắm chìm trong thư viện với những cuốn sách cổ bằng tiếng Hy Lạp, Latin hay tiếng Pháp hàng chục năm tuổi." },
    ],
    progression: [
      { level: "Trợ lý Nghiên cứu",exp: "0 - 3 năm", role: "Trích xuất tài liệu, hỗ trợ Giảng viên chính chấm bài tiểu luận." },
      { level: "Nghiên cứu viên",exp: "3 - 8 năm", role: "Viết báo cáo đăng Tạp chí Khoa học, tự bảo vệ luận án Tiến sĩ Triết học." },
      { level: "Giảng viên/Giáo sư",exp:"8+ năm",  role: "Chủ nhiệm đề tài, truyền đạt kiến thức nền tảng (Triết học Mác-Lênin, Logic học)." },
    ],
    actionPlan: {
      projects: ["Đọc thử cuốn sách 'Thế giới của Sophie' (Sophie's World)", "Tập thói quen viết nhật ký suy ngẫm (Reflective Journal)"],
      interviewPrep: "Khả năng đọc hiểu văn bản dài, lý luận chặt chẽ (không ngụy biện), đam mê tìm tòi chân lý.",
    },
  },
  "ai-ethics": {
    title: "Chuyên viên đạo đức AI (AI Ethics Specialist)",
    parentMajor: "Triết Học / Nghiên Cứu Xã Hội",
    description: "Nghề mới của tương lai. Làm việc trong công ty công nghệ để kiểm tra xem thuật toán AI có phân biệt chủng tộc, thiên vị hay xâm phạm quyền riêng tư của con người hay không.",
    stats: { salary: "25 - 80 Triệu", growth: "+45% (Bùng nổ)", environment: "Tập đoàn công nghệ (Big Tech)" },
    techStack: [
      { name: "Đạo đức Công nghệ",icon:<Scale size={14} />,        color: "bg-red-100 text-red-700" },
      { name: "Luật bảo mật (GDPR)",icon:<ShieldAlert size={14} />,color: "bg-slate-100 text-slate-700" },
      { name: "Phân tích Data Bias",icon:<BarChart size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Lý luận Triết học",icon:<BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Người hãm phanh AI", description: "Khi các kỹ sư IT mải mê phát triển AI càng thông minh càng tốt, thì nhà đạo đức học đứng ra phanh lại: 'Liệu AI này có vô tình hủy diệt con người không?'" },
      { title: "Bài toán xe tự lái", description: "Họ phải giải những bài toán đạo đức kinh điển cho lập trình viên: Nếu xe tự lái mất phanh, nó nên đâm vào 5 người già hay 1 em bé?" },
    ],
    progression: [
      { level: "Auditor AI Data",exp: "0 - 2 năm", role: "Kiểm tra bộ dữ liệu huấn luyện AI xem có chứa thành kiến giới tính/màu da không." },
      { level: "Ethics Consultant",exp:"2 - 5 năm",role: "Xây dựng bộ quy tắc đạo đức ứng xử cho sản phẩm AI trước khi ra mắt thị trường." },
      { level: "Giám đốc Đạo đức (CETO)",exp:"5+ năm",role:"Đại diện công ty giải trình trước Chính phủ về tác động xã hội của công nghệ mới." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu về bộ quy tắc GDPR của Châu Âu", "Nghiên cứu các vụ bê bối AI (như AI tuyển dụng của Amazon phân biệt giới tính)"],
      interviewPrep: "Hiểu biết về Data Science cơ bản, kiến thức triết lý đạo đức sâu sắc và khả năng đàm phán với khối Kỹ thuật.",
    },
  },
  "social-commentator": {
    title: "Nhà báo / Nhà bình luận xã hội",
    parentMajor: "Triết Học / Nghiên Cứu Xã Hội",
    description: "Sử dụng nền tảng triết học để viết bài phân tích chuyên sâu về các vấn đề nóng của xã hội, chính trị, văn hóa trên báo chí hoặc mạng xã hội.",
    stats: { salary: "10 - 40 Triệu", growth: "+10% (Ổn định)", environment: "Tòa soạn / Freelance" },
    techStack: [
      { name: "Bút lực sắc bén", icon: <PenTool size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Góc nhìn Đa chiều",icon:<Layers size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Tranh biện (Debate)",icon:<Megaphone size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Phân tích Văn hóa",icon:<Search size={14} />,       color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề tạo sóng dư luận", description: "Một bài bình luận sắc sảo có thể định hướng lại toàn bộ luồng suy nghĩ của đám đông trên mạng xã hội đang bị dẫn dắt sai lệch." },
      { title: "Rủi ro ăn gạch đá", description: "Khi đưa ra góc nhìn ngược dòng đám đông dựa trên lý trí thay vì cảm xúc, họ thường xuyên phải nhận chỉ trích từ cộng đồng mạng." },
    ],
    progression: [
      { level: "Cộng tác viên nội dung",exp:"0 - 2 năm",role:"Viết các bài quan điểm cá nhân (Op-ed) gửi báo mạng, duy trì blog cá nhân." },
      { level: "Nhà báo chuyên mục",exp:"2 - 6 năm",role: "Được giao mảng phụ trách cố định (Ví dụ: Góc nhìn Văn hóa) trên các trang báo lớn (VnExpress, Dân Trí)." },
      { level: "KOL / Chuyên gia", exp: "6+ năm",   role: "Có lượng người theo dõi lớn, xuất hiện trên TV talkshow với tư cách nhà bình luận uy tín." },
    ],
    actionPlan: {
      projects: ["Viết một bài luận 1500 từ lật lại góc nhìn về một sự kiện đang trending", "Mở trang Substack/Spiderum viết lách"],
      interviewPrep: "Tư duy độc lập (không hùa theo số đông), ngữ pháp chuẩn xác và khả năng logic hóa những vấn đề mơ hồ.",
    },
  },
  "strategic-consultant": {
    title: "Chuyên viên tư vấn chiến lược",
    parentMajor: "Triết Học / Nghiên Cứu Xã Hội",
    description: "Ứng dụng tư duy hệ thống và phân tích gốc rễ vấn đề (đặc thù của triết học) để giúp doanh nghiệp nhìn ra định hướng chiến lược dài hạn.",
    stats: { salary: "20 - 60+ Triệu", growth: "+15% (Cao)", environment: "Công ty Tư vấn (Consulting)" },
    techStack: [
      { name: "Problem Solving", icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Lý luận kinh doanh",icon:<Briefcase size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Phân tích Gốc rễ",icon: <Search size={14} />,       color: "bg-orange-100 text-orange-700" },
      { name: "Thuyết phục C-Level",icon:<Target size={14} />,     color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Dân khối C đi làm kinh tế", description: "Các hãng tư vấn lớn (như McKinsey) rất chuộng sinh viên Triết học vì họ có tư duy 'Chẻ sợi tóc làm tư' - nhìn ra bản chất cốt lõi của bài toán." },
      { title: "Bán chất xám", description: "Khách hàng trả hàng tỷ đồng chỉ để mua một bản thuyết trình slide PowerPoint 30 trang chứa đựng định hướng sinh tử của công ty." },
    ],
    progression: [
      { level: "Research Analyst",exp: "0 - 2 năm", role: "Đào xới dữ liệu thị trường, vẽ biểu đồ, chuẩn bị tài liệu họp cho tư vấn viên chính." },
      { level: "Consultant",     exp: "2 - 5 năm", role: "Thực hiện các cuộc phỏng vấn với nội bộ công ty khách hàng, thiết kế khung chiến lược." },
      { level: "Engagement Manager",exp:"5+ năm",  role: "Chỉ đạo dự án, đàm phán với Tổng giám đốc của khách hàng về chi phí tư vấn." },
    ],
    actionPlan: {
      projects: ["Thực hành phương pháp đặt câu hỏi 5 Whys (5 lần tại sao) để giải quyết một vấn đề cá nhân", "Luyện kỹ năng làm slide chuyên nghiệp"],
      interviewPrep: "Luyện giải các Business Case Study, tư duy phân tích ngọn nguồn MECE (Mutually Exclusive, Collectively Exhaustive).",
    },
  },
  "mediator": {
    title: "Chuyên gia đàm phán / Hòa giải (Mediator)",
    parentMajor: "Triết Học / Nghiên Cứu Xã Hội",
    description: "Nhân vật trung lập đứng giữa để hòa giải các tranh chấp thương mại, đình công lao động hoặc dân sự bằng nghệ thuật lập luận và thấu hiểu tâm lý sâu sắc.",
    stats: { salary: "Thu nhập theo vụ việc", growth: "+12% (Cao)", environment: "Tòa án / Trung tâm Trọng tài" },
    techStack: [
      { name: "Hòa giải xung đột",icon:<HeartHandshake size={14}/>,color: "bg-green-100 text-green-700" },
      { name: "Công bằng khách quan",icon:<Scale size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Lý luận thuyết phục",icon:<Megaphone size={14} />,  color: "bg-orange-100 text-orange-700" },
      { name: "Lắng nghe đa chiều",icon:<Ear size={14} />,         color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Nghề làm cho người ta bớt ghét nhau", description: "Mục đích của Hòa giải viên không phải là phân định đúng sai như Tòa án, mà là giúp hai bên thù hằn tìm được tiếng nói chung để cùng có lợi." },
      { title: "Cứu vãn hàng tỷ đồng", description: "Hòa giải thành công một vụ án kinh tế giúp hai doanh nghiệp tiết kiệm được hàng năm trời theo đuổi kiện tụng tốn kém tại Tòa án." },
    ],
    progression: [
      { level: "Thư ký trung tâm hòa giải",exp:"0 - 3 năm",role:"Sắp xếp lịch họp, ghi chép biên bản làm việc giữa các bên tranh chấp." },
      { level: "Hòa giải viên thương mại",exp:"3 - 8 năm",role:"Được Bộ Tư pháp cấp phép, chủ trì các phiên hòa giải, đưa ra phương án thỏa hiệp." },
      { level: "Chuyên gia đàm phán quốc tế",exp:"8+ năm",role:"Xử lý các vụ tranh chấp đình công quy mô hàng vạn công nhân hoặc tranh chấp FDI." },
    ],
    actionPlan: {
      projects: ["Thử làm trọng tài giải quyết một cuộc cãi vã nhỏ giữa hai người bạn", "Đọc cuốn sách kinh điển 'Getting to Yes' (Đàm phán)"],
      interviewPrep: "Cực kỳ điềm tĩnh, không được phép để lộ sự thiên vị, am hiểu luật pháp nền tảng và tâm lý con người.",
    },
  },
  // ==========================================
  // 32. TOÁN HỌC / TOÁN ỨNG DỤNG (MATHEMATICS)
  // ==========================================
  "actuary": {
    title: "Chuyên gia thống kê / Actuary (Chuyên viên bảo hiểm)",
    parentMajor: "Toán Học / Toán Ứng Dụng",
    description: "Nhà tiên tri rủi ro. Sử dụng toán học, thống kê để tính toán xác suất xảy ra tai nạn, thiên tai hay bệnh tật, từ đó xây dựng mô hình định phí bảo hiểm.",
    stats: { salary: "25 - 100+ Triệu", growth: "+20% (Rất cao)", environment: "Tập đoàn Bảo hiểm / Tài chính" },
    techStack: [
      { name: "Xác suất Thống kê", icon: <Calculator size={14} />,   color: "bg-blue-100 text-blue-700" },
      { name: "Mô hình Rủi ro",  icon: <ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Excel / VBA / R", icon: <Monitor size={14} />,      color: "bg-green-100 text-green-700" },
      { name: "Tài chính",       icon: <DollarSign size={14} />,   color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Nghề thi cử cả đời", description: "Để trở thành một Actuary thực thụ (FSA/FCAS), bạn phải vượt qua chuỗi 10 kỳ thi quốc tế cực kỳ khốc liệt kéo dài từ 5 đến 10 năm." },
      { title: "Lương tính bằng đô la", description: "Số lượng Actuary đạt chuẩn quốc tế ở Việt Nam hiện nay chỉ đếm trên đầu ngón tay, do đó họ được săn đón với mức lương cao ngất ngưởng." },
    ],
    progression: [
      { level: "Actuarial Trainee", exp: "0 - 3 năm", role: "Vừa làm vừa học thi chứng chỉ, hỗ trợ chạy dữ liệu bồi thường lịch sử." },
      { level: "Actuarial Analyst", exp: "3 - 7 năm", role: "Thiết kế sản phẩm bảo hiểm mới, định giá phí đóng hàng tháng cho khách hàng." },
      { level: "Chief Actuary",   exp: "7+ năm",    role: "Giám đốc Định phí, chịu trách nhiệm cho sự an toàn tài chính của cả một tập đoàn bảo hiểm." },
    ],
    actionPlan: {
      projects: ["Tìm hiểu về các kỳ thi SOA (Society of Actuaries)", "Học sử dụng thành thạo Excel VBA hoặc ngôn ngữ R"],
      interviewPrep: "Nền tảng Toán Xác suất Thống kê xuất chúng, khả năng chịu áp lực học tập và làm việc cường độ cao.",
    },
  },
  "data-scientist-math": {
    title: "Nhà khoa học dữ liệu (Data Scientist)",
    parentMajor: "Toán Học / Toán Ứng Dụng",
    description: "Khai thác mỏ vàng dữ liệu. Áp dụng các thuật toán máy học và mô hình toán học phức tạp để tìm ra các quy luật ẩn sâu, giúp doanh nghiệp tối ưu hóa doanh thu.",
    stats: { salary: "25 - 80 Triệu", growth: "+35% (Cực cao)", environment: "Công ty Công nghệ / Tài chính" },
    techStack: [
      { name: "Machine Learning",icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Python / SQL",    icon: <Code size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "Data Viz (Tableau)",icon: <PieChart size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Tư duy Kinh doanh",icon:<Target size={14} />,       color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Nghề quyến rũ nhất thế kỷ 21", description: "Đây là danh hiệu mà Tạp chí Harvard Business Review đã ưu ái dành cho Data Scientist nhờ mức lương khủng và sự thú vị của công việc." },
      { title: "Toán học làm ra tiền", description: "Nhờ thuật toán gợi ý do Data Scientist viết ra, Netflix và Amazon đã kiếm thêm hàng tỷ USD mỗi năm vì giữ chân được người dùng lâu hơn." },
    ],
    progression: [
      { level: "Data Analyst",   exp: "0 - 2 năm", role: "Trực quan hóa dữ liệu (vẽ biểu đồ), làm báo cáo BI (Business Intelligence) hàng ngày." },
      { level: "Data Scientist", exp: "2 - 5 năm", role: "Xây dựng mô hình AI dự báo (Ví dụ: Dự báo khách hàng rời bỏ mạng viễn thông)." },
      { level: "Lead Data Scientist",exp:"5+ năm", role: "Định hướng chiến lược dữ liệu, dẫn dắt đội ngũ kỹ sư giải quyết bài toán phức tạp." },
    ],
    actionPlan: {
      projects: ["Tham gia các cuộc thi giải mã dữ liệu trên nền tảng Kaggle", "Xây dựng mô hình dự đoán giá nhà bằng Python"],
      interviewPrep: "Nắm vững Đại số tuyến tính, Tối ưu hóa, thuật toán Machine Learning và khả năng kể chuyện bằng dữ liệu (Data Storytelling).",
    },
  },
  "quant": {
    title: "Quantitative Analyst (Quant)",
    parentMajor: "Toán Học / Toán Ứng Dụng",
    description: "Bộ óc thiên tài của Phố Wall. Sử dụng toán học cao cấp và lập trình để thiết kế các thuật toán giao dịch tự động (Algorithmic Trading) và định giá chứng khoán phái sinh.",
    stats: { salary: "40 - 150+ Triệu", growth: "+15% (Rất cạnh tranh)", environment: "Quỹ đầu tư / Ngân hàng Đầu tư" },
    techStack: [
      { name: "Toán Tài chính",  icon: <TrendingUp size={14} />,   color: "bg-green-100 text-green-700" },
      { name: "C++ / Python",    icon: <Code size={14} />,         color: "bg-blue-100 text-blue-700" },
      { name: "Phân tích Time-Series",icon:<LineChart size={14} />,color: "bg-orange-100 text-orange-700" },
      { name: "Thuật toán Giao dịch",icon:<Zap size={14} />,       color: "bg-red-100 text-red-700" },
    ],
    funFacts: [
      { title: "Máy móc thay thế con người", description: "Hiện nay trên thị trường chứng khoán quốc tế, hơn 70% khối lượng giao dịch được thực hiện tự động bởi các con Bot do Quant viết ra chỉ trong vài mili-giây." },
      { title: "Vương quốc của Toán học", description: "Hầu hết các Quant xuất chúng đều có bằng Tiến sĩ Toán học, Vật lý hoặc Khoa học máy tính thay vì bằng Tài chính." },
    ],
    progression: [
      { level: "Junior Quant",   exp: "0 - 3 năm", role: "Làm sạch dữ liệu tài chính lịch sử, hỗ trợ viết code kiểm thử (Backtesting) mô hình." },
      { level: "Quant Researcher",exp:"3 - 7 năm", role: "Nghiên cứu và tạo ra các chiến lược giao dịch mới sinh lời trong mọi điều kiện thị trường." },
      { level: "Portfolio Manager",exp:"7+ năm",   role: "Trực tiếp điều hành quỹ đầu tư định lượng (Quant Fund), quản lý rủi ro danh mục tỷ đô." },
    ],
    actionPlan: {
      projects: ["Viết một con bot tự động giao dịch tiền ảo/chứng khoán bằng API đơn giản", "Học về mô hình Black-Scholes"],
      interviewPrep: "Giải các bài toán xác suất hóc búa, kỹ năng lập trình tối ưu tốc độ và hiểu biết thị trường tài chính.",
    },
  },
  "ai-researcher": {
    title: "Kỹ sư nghiên cứu AI / ML Researcher",
    parentMajor: "Toán Học / Toán Ứng Dụng",
    description: "Nhà phát minh của kỷ nguyên số. Nghiên cứu và sáng tạo ra các kiến trúc mạng nơ-ron nhân tạo mới (Deep Learning) thay vì chỉ ứng dụng những gì đã có sẵn.",
    stats: { salary: "30 - 100+ Triệu", growth: "+40% (Bùng nổ)", environment: "Viện nghiên cứu / Big Tech" },
    techStack: [
      { name: "Deep Learning",   icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
      { name: "Toán Tối ưu hóa", icon: <Calculator size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "PyTorch/TensorFlow",icon:<Code size={14} />,        color: "bg-blue-100 text-blue-700" },
      { name: "Nghiên cứu học thuật",icon:<BookOpen size={14} />,  color: "bg-slate-100 text-slate-700" },
    ],
    funFacts: [
      { title: "Cuộc đua toàn cầu", description: "Sự xuất hiện của ChatGPT đã châm ngòi cho cuộc đua AI khốc liệt. Các nhà nghiên cứu AI đang được săn đón với mức lương như ngôi sao hạng A." },
      { title: "Ngôn ngữ của AI là Toán học", description: "Bản chất của các mô hình AI thông minh nhất hiện nay đều dựa trên Đạo hàm, Ma trận và Đại số tuyến tính do các nhà toán học phát triển." },
    ],
    progression: [
      { level: "AI Research Assistant",exp:"0 - 3 năm",role:"Đọc hàng trăm bài báo khoa học (paper) mới nhất, tái tạo (reproduce) lại code của họ." },
      { level: "Research Scientist",exp:"3 - 7 năm", role: "Sáng tạo thuật toán mới, công bố bài báo tại các hội nghị AI hàng đầu thế giới (NeurIPS, CVPR)." },
      { level: "Principal Scientist",exp:"7+ năm",   role: "Lãnh đạo Lab nghiên cứu AI của các tập đoàn công nghệ khổng lồ." },
    ],
    actionPlan: {
      projects: ["Xây dựng mạng nơ-ron từ con số 0 (from scratch) bằng Python thuần", "Đọc các paper trên trang ArXiv"],
      interviewPrep: "Đòi hỏi bằng Thạc sĩ/Tiến sĩ, hiểu sâu thấu bản chất toán học của các thuật toán Gradient Descent, Backpropagation.",
    },
  },
  "math-lecturer": {
    title: "Giảng viên / Gia sư Toán chuyên nghiệp",
    parentMajor: "Toán Học / Toán Ứng Dụng",
    description: "Lan tỏa vẻ đẹp của Toán học. Giảng dạy môn Toán tại trường đại học, trường quốc tế hoặc chuyên luyện thi các chứng chỉ chuẩn hóa (SAT, GMAT, IELTS Math).",
    stats: { salary: "15 - 50+ Triệu", growth: "+15% (Cao)", environment: "Đại học / Trung tâm / Tự do" },
    techStack: [
      { name: "Sư phạm Toán",    icon: <BookOpen size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Tiếng Anh chuyên ngành",icon:<Globe size={14} />,   color: "bg-orange-100 text-orange-700" },
      { name: "Toán Cao cấp",    icon: <Calculator size={14} />,   color: "bg-red-100 text-red-700" },
      { name: "Truyền đạt logic",icon: <Megaphone size={14} />,    color: "bg-green-100 text-green-700" },
    ],
    funFacts: [
      { title: "Nghề hái ra tiền mùa du học", description: "Gia sư luyện thi toán SAT/GMAT cho học sinh đi du học thường được trả mức học phí rất cao, tính bằng USD cho mỗi giờ học." },
      { title: "Phá vỡ định kiến", description: "Một giáo viên toán giỏi là người biết cách biến những mớ công thức khô khan, nhức đầu thành những quy luật logic thú vị, dễ hiểu." },
    ],
    progression: [
      { level: "Trợ giảng/Gia sư",exp: "0 - 2 năm", role: "Dạy kèm 1-1, chấm bài tập, chuẩn bị học liệu." },
      { level: "Giảng viên Cơ hữu",exp:"2 - 6 năm", role: "Đứng lớp các môn Giải tích, Xác suất thống kê, tham gia nghiên cứu khoa học." },
      { level: "Chuyên gia Luyện thi",exp:"6+ năm", role: "Xây dựng thương hiệu cá nhân, mở trung tâm luyện thi SAT/A-Level với thu nhập khủng." },
    ],
    actionPlan: {
      projects: ["Thử giải đề thi SAT Math hoặc GMAT", "Viết blog/Làm video giải thích một nghịch lý toán học vui"],
      interviewPrep: "Tiếng Anh học thuật tốt, phong cách giảng dạy truyền cảm hứng, tính kiên nhẫn với học viên mất gốc.",
    },
  },

  // ==========================================
  // 33. TRUYỀN THÔNG & QUAN HỆ CÔNG CHÚNG (COMMUNICATION)
  // ==========================================
  "pr-executive": {
    title: "Chuyên viên Quan hệ Công chúng (PR Specialist)",
    parentMajor: "Truyền Thông & Quan Hệ Công Chúng (PR)",
    description: "Bộ mặt của tổ chức. Xây dựng và duy trì hình ảnh tích cực, viết thông cáo báo chí, tổ chức họp báo và là tuyến đầu 'dập lửa' khi có khủng hoảng truyền thông.",
    stats: { salary: "10 - 35 Triệu", growth: "+18% (Cao)", environment: "Agency / In-house" },
    techStack: [
      { name: "Viết Thông cáo (Press)",icon:<FileText size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Xử lý Khủng hoảng",icon:<ShieldAlert size={14} />,  color: "bg-red-100 text-red-700" },
      { name: "Kể chuyện (Storytelling)",icon:<PenTool size={14} />,color:"bg-purple-100 text-purple-700" },
      { name: "Giao tiếp công chúng",icon:<Megaphone size={14} />, color: "bg-orange-100 text-orange-700" },
    ],
    funFacts: [
      { title: "Nghệ thuật quay xe", description: "Bằng kỹ năng PR khéo léo, nhiều thương hiệu đã biến một cuộc tẩy chay diện rộng thành một chiến dịch ghi điểm tuyệt đối trong mắt công chúng." },
      { title: "Nghề làm bạn với nhà báo", description: "Họ lưu số điện thoại của hàng trăm phóng viên, nhà báo từ các tòa soạn lớn để sẵn sàng gửi tin bài bất cứ lúc nào." },
    ],
    progression: [
      { level: "PR Executive",   exp: "0 - 2 năm", role: "Viết bài PR, gửi thư mời nhà báo, theo dõi đo lường các bài viết trên mạng (Media Clipping)." },
      { level: "PR Manager",     exp: "2 - 5 năm", role: "Lên chiến lược thông điệp cốt lõi, tư vấn cho Giám đốc cách trả lời phỏng vấn báo chí." },
      { level: "Giám đốc Đối ngoại",exp:"5+ năm",  role: "Kiểm soát rủi ro danh tiếng của tập đoàn đa quốc gia, quan hệ với cơ quan chức năng." },
    ],
    actionPlan: {
      projects: ["Phân tích cách một hãng lớn xử lý khủng hoảng (VD: Vụ ruồi trong chai nước)", "Tập viết một Thông cáo báo chí (Press Release)"],
      interviewPrep: "Kỹ năng viết lách đỉnh cao, khéo léo, linh hoạt và biết cách đối phó với áp lực dư luận.",
    },
  },
  "event-manager": {
    title: "Chuyên viên Tổ chức Sự kiện",
    parentMajor: "Truyền Thông & Quan Hệ Công Chúng (PR)",
    description: "Kiến trúc sư của những khoảnh khắc. Lên ý tưởng, lập ngân sách và điều phối hậu cần cho các sự kiện từ họp báo ra mắt sản phẩm đến concert âm nhạc hàng chục ngàn người.",
    stats: { salary: "12 - 40 Triệu", growth: "+20% (Năng động)", environment: "Hay di chuyển / Chạy Deadline" },
    techStack: [
      { name: "Quản lý Dự án",   icon: <Target size={14} />,       color: "bg-red-100 text-red-700" },
      { name: "Điều phối (Logistics)",icon:<Truck size={14} />,    color: "bg-orange-100 text-orange-700" },
      { name: "Sáng tạo Concept",icon: <Sparkles size={14} />,     color: "bg-purple-100 text-purple-700" },
      { name: "Giải quyết Sự cố",icon: <Zap size={14} />,          color: "bg-blue-100 text-blue-700" },
    ],
    funFacts: [
      { title: "Bình chân như vại", description: "Dù hậu trường sự kiện đang cháy, ca sĩ đến trễ hay MC quên kịch bản, chuyên viên sự kiện vẫn phải cười tươi và xử lý gọn gàng không để khán giả biết." },
      { title: "Ngủ tại hiện trường", description: "Trước ngày sự kiện lớn (như Countdown), cả ekip thường xuyên thức trắng đêm tại sân khấu để setup âm thanh, ánh sáng." },
    ],
    progression: [
      { level: "Event Executive",exp: "0 - 2 năm", role: "Xin báo giá nhà cung cấp (loa, đèn, in ấn), đón khách, chạy việc lặt vặt (runner)." },
      { level: "Event Manager",  exp: "2 - 5 năm", role: "Lên kịch bản chương trình (Run-down), quản lý ngân sách, chỉ đạo tổng đạo diễn." },
      { level: "Event Director", exp: "5+ năm",    role: "Làm chủ Agency sự kiện, đấu thầu các mega-event cấp quốc gia hoặc quốc tế." },
    ],
    actionPlan: {
      projects: ["Đứng ra làm Trưởng ban tổ chức một sự kiện nhỏ ở trường/CLB", "Học cách lập bảng dự toán ngân sách trên Excel"],
      interviewPrep: "Thể lực tốt, khả năng bao quát nhiều việc cùng lúc (Multi-tasking), sự sáng tạo và linh hoạt.",
    },
  },
  "internal-comms": {
    title: "Chuyên viên Truyền thông Nội bộ",
    parentMajor: "Truyền Thông & Quan Hệ Công Chúng (PR)",
    description: "Nhịp đập trái tim công ty. Cầu nối gắn kết nhân sự, tổ chức các hoạt động văn hóa và đảm bảo thông điệp từ ban lãnh đạo được truyền tải minh bạch xuống mọi nhân viên.",
    stats: { salary: "10 - 25 Triệu", growth: "+10% (Ổn định)", environment: "Văn phòng công ty" },
    techStack: [
      { name: "Văn hóa Doanh nghiệp",icon:<Users size={14} />,     color: "bg-blue-100 text-blue-700" },
      { name: "Viết lách nội bộ",icon: <PenTool size={14} />,      color: "bg-orange-100 text-orange-700" },
      { name: "Tổ chức Phong trào",icon:<Activity size={14} />,    color: "bg-green-100 text-green-700" },
      { name: "Lắng nghe Nhân viên",icon:<Ear size={14} />,        color: "bg-pink-100 text-pink-700" },
    ],
    funFacts: [
      { title: "Nghề làm MC bất đắc dĩ", description: "Họ thường xuyên bị 'dí' làm MC cho các sự kiện sinh nhật công ty, tiệc cuối năm, hay các minigame hàng tuần." },
      { title: "Biến chỉ thị thành cảm hứng", description: "Nhiệm vụ khó nhất là biến những email thông báo khô khan của Ban Giám đốc thành các bài viết thú vị khiến nhân viên thích đọc." },
    ],
    progression: [
      { level: "Internal Comms Exec",exp:"0 - 2 năm",role:"Viết bản tin nội bộ (Newsletter), lên ý tưởng quà tặng lễ Tết, chụp ảnh sự kiện." },
      { level: "Internal Comms Manager",exp:"2 - 5 năm",role:"Xây dựng cổng thông tin nội bộ (Intranet), lên chiến dịch truyền thông thay đổi văn hóa." },
      { level: "Head of Culture",exp:"5+ năm",   role: "Định hình giá trị cốt lõi, gắn kết hàng chục ngàn nhân viên tại các tập đoàn lớn." },
    ],
    actionPlan: {
      projects: ["Thử xuất bản một bản tin (Newsletter) hàng tháng cho CLB của bạn", "Nghiên cứu văn hóa làm việc của Google, VNG"],
      interviewPrep: "Năng lượng tích cực, sự duyên dáng, kỹ năng viết bài chuẩn mực và tư duy thấu cảm.",
    },
  },
  "media-relations": {
    title: "Chuyên viên Quan hệ Báo chí",
    parentMajor: "Truyền Thông & Quan Hệ Công Chúng (PR)",
    description: "Nhà ngoại giao của ngành PR. Mở rộng và duy trì mạng lưới quan hệ sâu rộng với các nhà báo, đài truyền hình, KOL/Influencer để lan tỏa thông tin có lợi cho công ty.",
    stats: { salary: "15 - 45 Triệu", growth: "+15% (Cao)", environment: "Giao tiếp mạng lưới / Cà phê, sự kiện" },
    techStack: [
      { name: "Networking",      icon: <HeartHandshake size={14}/>,color: "bg-red-100 text-red-700" },
      { name: "Pitching tin bài",icon: <Megaphone size={14} />,    color: "bg-orange-100 text-orange-700" },
      { name: "Phân tích dư luận",icon:<Search size={14} />,       color: "bg-blue-100 text-blue-700" },
      { name: "Quản lý KOLs",    icon: <Users size={14} />,        color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Sức mạnh của một cuộc gọi", description: "Khi công ty dính tin đồn thất thiệt, một cuộc điện thoại của Media Relations cho Tổng biên tập có thể ngăn chặn bài báo tiêu cực được lên trang nhất." },
      { title: "Nghề mời ăn tối", description: "Họ phải liên tục đi cà phê, ăn uống với các phóng viên mảng (nhà báo) để làm thân, xây dựng niềm tin lâu dài." },
    ],
    progression: [
      { level: "Media Executive",exp: "0 - 2 năm", role: "Cập nhật danh sách (Media List) phóng viên, gửi quà báo chí, thu thập tin tức hàng ngày." },
      { level: "Media Relations Mgr",exp:"2 - 5 năm",role: "Xây dựng chiến dịch Booking báo chí/KOLs, xử lý tin bài tiêu cực kịp thời." },
      { level: "Giám đốc Truyền thông",exp:"5+ năm",role: "Làm việc với các Cơ quan ngôn luận lớn nhất, đại diện phát ngôn truyền hình." },
    ],
    actionPlan: {
      projects: ["Thử tự lập một danh sách các nhà báo/KOL nổi tiếng trong mảng bạn thích", "Nghiên cứu cách báo chí đưa tin về một sự kiện hot"],
      interviewPrep: "Khả năng xây dựng mối quan hệ cực đỉnh (Socializing), am hiểu quy trình làm việc của tòa soạn, nhạy bén tin tức.",
    },
  },
  "brand-strategist": {
    title: "Chuyên gia Chiến lược Thương hiệu",
    parentMajor: "Truyền Thông & Quan Hệ Công Chúng (PR)",
    description: "Kiến trúc sư của thương hiệu. Nghiên cứu thị trường và tâm lý khách hàng để định vị xem thương hiệu nên 'trông như thế nào', 'nói giọng gì' để khác biệt với đối thủ.",
    stats: { salary: "20 - 60+ Triệu", growth: "+15% (Cạnh tranh)", environment: "Văn phòng / Sáng tạo & Số liệu" },
    techStack: [
      { name: "Định vị Thương hiệu",icon:<Target size={14} />,     color: "bg-red-100 text-red-700" },
      { name: "Tìm kiếm Insights",icon: <Lightbulb size={14} />,   color: "bg-yellow-100 text-yellow-700" },
      { name: "Phân tích Đối thủ",icon: <Search size={14} />,      color: "bg-blue-100 text-blue-700" },
      { name: "Tư duy Chiến lược",icon: <BrainCircuit size={14} />,color: "bg-purple-100 text-purple-700" },
    ],
    funFacts: [
      { title: "Bán cảm xúc", description: "Volvo bán sự An toàn. BMW bán Hiệu suất. Ferrari bán Sự sang trọng. Tất cả đều là sản phẩm của định vị thương hiệu." },
      { title: "Chiếc la bàn", description: "Mọi quảng cáo, TVC hay sự kiện đều phải tuân thủ nghiêm ngặt Bản sắc Thương hiệu (Brand Guideline) do nhà chiến lược vẽ ra." },
    ],
    progression: [
      { level: "Brand Planner/Analyst",exp:"0 - 3 năm",role: "Phân tích báo cáo thị trường, theo dõi biến động của đối thủ cạnh tranh." },
      { level: "Brand Strategist",exp: "3 - 6 năm", role: "Đề xuất thông điệp chính (Key Message) cho chiến dịch, tái định vị thương hiệu." },
      { level: "Head of Strategy",exp: "6+ năm",    role: "Làm việc tại các Agency hàng đầu, tư vấn chiến lược hình ảnh cho các tập đoàn toàn cầu." },
    ],
    actionPlan: {
      projects: ["Thử phân tích mô hình SWOT và Brand Archetype (Hình mẫu thương hiệu) của một nhãn hàng", "Đọc các báo cáo của Nielsen, Kantar"],
      interviewPrep: "Tư duy logic hệ thống kết hợp với sự sáng tạo, khả năng thuyết trình bằng slide thuyết phục (Pitching).",
    },
  }
};
// ═════════════════════════════════════════════════════════════════════// ═════════════════════════════════════════════════════════════════════
// ═════════════════════════════════════════════════════════════════════// ═════════════════════════════════════════════════════════════════════
export function SpecificJobPage() {
  const navigate = useNavigate();
  const { roleId } = useParams(); 
  
  // Móc data dựa trên ID từ URL (VD: roleId là "ai-ml")
  const data = MOCK_JOB_DATA[roleId as string];

  // 1. NẾU CHƯA CÓ DỮ LIỆU GIẢ LẬP CHO ID NÀY
  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-6">
          <Briefcase size={40} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">AI đang phân tích chuyên sâu... ⏳</h2>
        <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
          Vị trí <span className="font-bold text-indigo-600">"{roleId}"</span> hiện đang được chúng tôi thu thập dữ liệu thực tế. Vui lòng quay lại sau!
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow-sm hover:bg-indigo-700 transition-all active:scale-95"
        >
          ← Quay lại danh sách
        </button>
      </div>
    );
  }

  // 2. NẾU CÓ DỮ LIỆU -> HIỂN THỊ GIAO DIỆN CHI TIẾT
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* NÚT QUAY LẠI */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-6 text-sm font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại phân tích ngành học
        </button>

        {/* ── HEADER / HERO SECTION ── */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
            Thuộc khối: {data.parentMajor}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
            {data.description}
          </p>

          {/* QUICK STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100 transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <DollarSign />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Mức lương tham khảo</p>
                <p className="text-lg font-bold text-slate-900">{data.stats.salary}</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100 transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                <TrendingUp />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Triển vọng tăng trưởng</p>
                <p className="text-lg font-bold text-slate-900">{data.stats.growth}</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100 transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <MapPin />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Môi trường làm việc</p>
                <p className="text-lg font-bold text-slate-900">{data.stats.environment}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── BỐ CỤC CHÍNH (GRID 8 - 4) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* CỘT TRÁI (Nội dung chính) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* FUN FACTS: SỰ THẬT THÚ VỊ */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-bold text-slate-900">Có thể bạn chưa biết? ✨</h2>
              </div>
              
              <p className="text-sm text-slate-500 mb-6">
                Những sự thật bất ngờ và thú vị về nghề nghiệp này:
              </p>

              <div className="space-y-4">
                {data.funFacts.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-amber-50/40 border border-amber-100 hover:bg-amber-50 transition-colors group">
                    <div className="mt-0.5">
                      <Sparkles className="w-5 h-5 text-amber-500 group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CAREER PATH: LỘ TRÌNH THĂNG TIẾN */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-bold text-slate-900">Lộ trình thăng tiến điển hình 🚀</h2>
              </div>
              
              <div className="space-y-4">
                {data.progression.map((level: any, idx: number) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl border border-slate-50 hover:border-indigo-100 hover:bg-slate-50/50 transition-all">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center font-bold text-indigo-600 flex-shrink-0 border border-indigo-100">
                      Lv.{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-900">{level.level}</h3>
                        <span className="text-[10px] uppercase font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full">{level.exp}</span>
                      </div>
                      <p className="text-sm text-slate-600">{level.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (Kỹ năng & Lời khuyên) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* TECH STACK / SKILLS */}
            <div className="bg-slate-900 rounded-3xl p-6 shadow-lg text-white relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-2xl"></div>
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-bold">Kỹ năng & Công cụ</h2>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {data.techStack.map((tech: any, idx: number) => (
                  <div key={idx} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${tech.color} border border-white/10`}>
                    {tech.icon} {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION PLAN */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full opacity-5 blur-3xl"></div>
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <Target className="w-5 h-5 text-indigo-200" />
                <h2 className="text-lg font-bold">Lên Kế Hoạch Thực Chiến ⚔️</h2>
              </div>
              
              <div className="mb-6 relative z-10">
                <h3 className="text-xs font-bold text-indigo-200 mb-3 uppercase tracking-[0.1em]">🔥 Project nên có trong CV</h3>
                <ul className="space-y-3">
                  {data.actionPlan.projects.map((proj: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-indigo-50">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {proj}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10 relative z-10">
                <h3 className="text-xs font-bold text-indigo-200 mb-2 uppercase tracking-wider">💡 Mẹo chuẩn bị phỏng vấn</h3>
                <p className="text-sm text-indigo-50 leading-relaxed italic">
                  "{data.actionPlan.interviewPrep}"
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}