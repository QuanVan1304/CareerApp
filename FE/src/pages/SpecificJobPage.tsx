import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { 
  ArrowLeft, Clock, DollarSign, TrendingUp, MapPin, 
  Terminal, Target, Briefcase, CheckCircle, 
  Code, Database, BrainCircuit, LineChart, Cpu, ShieldCheck
} from "lucide-react";

// ─── DỮ LIỆU ĐƯỢC THIẾT KẾ RIÊNG (MOCK DATA) ─────────────
const MOCK_JOB_DATA: Record<string, any> = {
  "ai-machine-learning-engineer": {
    title: "Kỹ sư AI / Machine Learning",
    parentMajor: "Khoa Học Máy Tính",
    description: "Xây dựng các mô hình học máy, xử lý dữ liệu lớn và triển khai hệ thống AI vào các sản phẩm thực tế. Từ các hệ thống nhận diện hình ảnh, xử lý ngôn ngữ tự nhiên (NLP) đến các mô hình dự báo phức tạp.",
    stats: {
      salary: "20 - 70+ Triệu",
      growth: "+40% (Cực cao)",
      environment: "Hybrid / On-site",
    },
    techStack: [
      { name: "Python", icon: <Code size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "PyTorch/TensorFlow", icon: <BrainCircuit size={14} />, color: "bg-orange-100 text-orange-700" },
      { name: "Scikit-learn", icon: <Cpu size={14} />, color: "bg-amber-100 text-amber-700" },
      { name: "SQL/Git", icon: <Database size={14} />, color: "bg-slate-100 text-slate-700" },
    ],
    timeline: [
      { time: "09:00 AM", task: "Họp Daily Standup, sync tiến độ với Data Team & Backend." },
      { time: "10:00 AM", task: "Tiền xử lý (Pre-processing) dataset ảnh hoặc text để chuẩn bị train mô hình." },
      { time: "01:30 PM", task: "Huấn luyện (Train) mô hình, thử nghiệm các thuật toán như Random Forest hoặc CNN." },
      { time: "04:00 PM", task: "Đánh giá accuracy, F1-score và tối ưu hóa mô hình trước khi deploy." },
    ],
    progression: [
      { level: "AI Intern / Fresher", exp: "0 - 1 năm", role: "Hỗ trợ làm sạch dữ liệu, train các mô hình ML cơ bản." },
      { level: "Junior AI Engineer", exp: "1 - 3 năm", role: "Xây dựng pipeline, tối ưu thuật toán và deploy model." },
      { level: "Senior AI Researcher", exp: "3 - 5+ năm", role: "Thiết kế kiến trúc AI, nghiên cứu thuật toán SOTA." },
    ],
    actionPlan: {
      projects: ["Xây dựng ứng dụng nhận diện cử chỉ tay (Hand Sign Recognition) bằng CNN", "Dự đoán tỷ lệ giữ chân khách hàng bằng Random Forest"],
      interviewPrep: "Nắm chắc lý thuyết Machine Learning cơ bản (Overfitting, Gradient Descent), cấu trúc dữ liệu và giải quyết bài toán thuật toán trên LeetCode."
    }
  },
  "quantitative-analyst": {
    title: "Quantitative Analyst (Quant)",
    parentMajor: "Toán Học / Toán Ứng Dụng",
    description: "Xây dựng các mô hình toán học và định lượng phục vụ giao dịch tài chính thuật toán (Algo-trading) và quản trị rủi ro cho các quỹ đầu tư, ngân hàng.",
    stats: {
      salary: "30 - 100+ Triệu",
      growth: "+25% (Rất cao)",
      environment: "On-site / Văn phòng",
    },
    techStack: [
      { name: "Python / C++", icon: <Code size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "Toán tối ưu", icon: <LineChart size={14} />, color: "bg-emerald-100 text-emerald-700" },
      { name: "Time-series ML", icon: <BrainCircuit size={14} />, color: "bg-purple-100 text-purple-700" },
    ],
    timeline: [
      { time: "08:30 AM", task: "Cập nhật tin tức vĩ mô và kiểm tra các chiến lược trading đang chạy." },
      { time: "10:00 AM", task: "Sử dụng Python để làm sạch dữ liệu giá cổ phiếu (Time-series data)." },
      { time: "02:00 PM", task: "Backtest chiến lược giao dịch mới dựa trên các mô hình định lượng." },
      { time: "05:00 PM", task: "Họp với Fund Manager để review hiệu suất thuật toán (Sharpe ratio)." },
    ],
    progression: [
      { level: "Quant Intern / Junior", exp: "0 - 2 năm", role: "Thu thập dữ liệu, hỗ trợ code backtest chiến lược." },
      { level: "Quant Researcher", exp: "2 - 5 năm", role: "Thiết kế thuật toán, tìm kiếm các tín hiệu giao dịch (Alpha)." },
      { level: "Portfolio Manager", exp: "5+ năm", role: "Quản lý dòng vốn lớn, định hướng chiến lược đầu tư của quỹ." },
    ],
    actionPlan: {
      projects: ["Xây dựng thuật toán giao dịch tự động dựa trên Moving Average", "Mô phỏng rủi ro danh mục đầu tư bằng Monte Carlo"],
      interviewPrep: "Ôn tập cực kỹ Xác suất thống kê, Đại số tuyến tính, Python Pandas/Numpy và các bài toán Brainteasers logic."
    }
  },
  "software-engineer": {
    title: "Kỹ sư phần mềm (Software Engineer)",
    parentMajor: "Khoa Học Máy Tính",
    description: "Thiết kế, phát triển và bảo trì các hệ thống phần mềm quy mô lớn, từ ứng dụng web, mobile cho đến các kiến trúc Microservices phức tạp ở Backend.",
    stats: {
      salary: "15 - 60+ Triệu",
      growth: "+30% (Rất cao)",
      environment: "Hybrid / Remote linh hoạt",
    },
    techStack: [
      { name: "TypeScript/JS", icon: <Code size={14} />, color: "bg-yellow-100 text-yellow-800" },
      { name: "React / Vue", icon: <Terminal size={14} />, color: "bg-cyan-100 text-cyan-700" },
      { name: "Node.js / Java", icon: <Database size={14} />, color: "bg-green-100 text-green-700" },
      { name: "Docker/CI-CD", icon: <ShieldCheck size={14} />, color: "bg-blue-100 text-blue-700" },
    ],
    timeline: [
      { time: "09:30 AM", task: "Cập nhật task trên Jira, họp Daily Scrum với team." },
      { time: "10:30 AM", task: "Bắt tay vào code tính năng mới, kết nối API từ Backend sang Frontend." },
      { time: "02:30 PM", task: "Code review (Kiểm tra chéo code của đồng nghiệp trên GitHub)." },
      { time: "04:00 PM", task: "Fix bugs và viết Unit Test trước khi deploy lên môi trường Staging." },
    ],
    progression: [
      { level: "Fresher / Junior", exp: "0 - 2 năm", role: "Làm các task nhỏ, fix bug, học hỏi quy chuẩn code của công ty." },
      { level: "Mid-level Engineer", exp: "2 - 4 năm", role: "Làm các tính năng phức tạp, thiết kế database cơ bản." },
      { level: "Senior / Tech Lead", exp: "5+ năm", role: "Thiết kế kiến trúc hệ thống, mentor cho các bạn Junior." },
    ],
    actionPlan: {
      projects: ["Xây dựng ứng dụng Web Fullstack (MERN/PERN stack)", "Làm một ứng dụng phân tích dữ liệu có kết nối Backend/Frontend"],
      interviewPrep: "Ôn luyện Data Structures & Algorithms trên Leetcode, chuẩn bị kiến thức System Design cơ bản."
    }
  },
  "data-scientist": {
    title: "Nhà khoa học dữ liệu (Data Scientist)",
    parentMajor: "Khoa Học Dữ Liệu & AI",
    description: "Biến những con số khô khan thành 'mỏ vàng' cho doanh nghiệp. Sử dụng thống kê và học máy để phân tích hành vi, dự báo xu hướng thị trường.",
    stats: {
      salary: "18 - 50+ Triệu",
      growth: "+28% (Cao)",
      environment: "Hybrid / Remote",
    },
    techStack: [
      { name: "Python / R", icon: <Code size={14} />, color: "bg-blue-100 text-blue-700" },
      { name: "SQL", icon: <Database size={14} />, color: "bg-orange-100 text-orange-700" },
      { name: "PowerBI/Tableau", icon: <LineChart size={14} />, color: "bg-emerald-100 text-emerald-700" },
    ],
    timeline: [
      { time: "09:00 AM", task: "Họp với bộ phận Marketing để lấy requirement về chiến dịch mới." },
      { time: "10:30 AM", task: "Truy vấn dữ liệu từ Data Warehouse bằng SQL." },
      { time: "02:00 PM", task: "Xây dựng dashboard trực quan hóa trên Tableau/PowerBI." },
      { time: "04:30 PM", task: "Thuyết trình báo cáo Insight (Insight presentation) cho Ban giám đốc." },
    ],
    progression: [
      { level: "Data Analyst", exp: "0 - 2 năm", role: "Làm báo cáo, xử lý dữ liệu và tạo Dashboard." },
      { level: "Data Scientist", exp: "2 - 5 năm", role: "Xây dựng các mô hình dự đoán (Predictive modeling)." },
      { level: "Head of Data", exp: "5+ năm", role: "Định hướng chiến lược dữ liệu cho toàn tập đoàn." },
    ],
    actionPlan: {
      projects: ["Phân tích tệp khách hàng (Customer Segmentation) bằng K-Means", "Dự báo doanh thu bán lẻ (Sales Forecasting)"],
      interviewPrep: "Chuẩn bị kỹ các case study phân tích nghiệp vụ, thành thạo truy vấn SQL nâng cao (Window Functions)."
    }
  }
};

// ═════════════════════════════════════════════════════════════════════
export function SpecificJobPage() {
  const navigate = useNavigate();
  // Lấy ID công việc từ URL (Ví dụ: /job/computer-science/role/ai-machine-learning-engineer)
  const { roleId } = useParams(); 
  
  // Lấy data dựa trên roleId. Nếu chưa có data giả lập thì dùng mặc định là ai-machine-learning-engineer
  const data = MOCK_JOB_DATA[roleId as string] || MOCK_JOB_DATA["ai-machine-learning-engineer"];

  if (!data) return <div className="text-center py-20">Đang tải dữ liệu...</div>;

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
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <DollarSign />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Mức lương tham khảo</p>
                <p className="text-lg font-bold text-slate-900">{data.stats.salary}</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                <TrendingUp />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Triển vọng tăng trưởng</p>
                <p className="text-lg font-bold text-slate-900">{data.stats.growth}</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
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
            
            {/* TIMELINE: MỘT NGÀY LÀM VIỆC */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-bold text-slate-900">Một ngày làm việc thực tế ☕</h2>
              </div>
              
              <div className="relative pl-4 border-l-2 border-indigo-100 space-y-8 ml-2">
                {data.timeline.map((item: any, idx: number) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-indigo-200 group-hover:bg-indigo-600 rounded-full border-4 border-white shadow-sm transition-colors"></div>
                    <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                      {item.time}
                    </span>
                    <p className="mt-2 text-slate-700 leading-relaxed text-sm">
                      {item.task}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CAREER PATH: LỘ TRÌNH THĂNG TIẾN */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-bold text-slate-900">Lộ trình thăng tiến 🚀</h2>
              </div>
              
              <div className="space-y-4">
                {data.progression.map((level: any, idx: number) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center font-bold text-indigo-600 flex-shrink-0">
                      Lv.{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-900">{level.level}</h3>
                        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{level.exp}</span>
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
            
            {/* TECH STACK */}
            <div className="bg-slate-900 rounded-3xl p-6 shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-2xl"></div>
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-bold">Vũ khí hành nghề</h2>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {data.techStack.map((tech: any, idx: number) => (
                  <div key={idx} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${tech.color}`}>
                    {tech.icon} {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION PLAN */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-6 shadow-lg text-white relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full opacity-5 blur-3xl"></div>
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <Target className="w-5 h-5 text-indigo-200" />
                <h2 className="text-lg font-bold">Góc Thực Chiến ⚔️</h2>
              </div>
              
              <div className="mb-6 relative z-10">
                <h3 className="text-sm font-semibold text-indigo-200 mb-3 uppercase tracking-wider">🔥 Project nên làm vào CV</h3>
                <ul className="space-y-3">
                  {data.actionPlan.projects.map((proj: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-indigo-50">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {proj}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10 relative z-10">
                <h3 className="text-sm font-semibold text-indigo-200 mb-2">💡 Tips Phỏng vấn</h3>
                <p className="text-sm text-indigo-50 leading-relaxed">
                  {data.actionPlan.interviewPrep}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}