import { useNavigate } from "react-router";
import { X, ArrowRight, Target, BarChart3, MapPin, Sparkles, BookOpen, Users, TrendingUp, 
        CheckCircle, Star, Quote, Briefcase, Code, Palette, 
        Heart, HelpCircle, Zap, Rocket, Brain, Trophy, Clock, Shield, Play,
        BrainCircuit, Cpu, Megaphone, HeartHandshake, Truck, HeartPulse
      } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function LandingPage() {
  const navigate = useNavigate();
  const [hoveredCareer, setHoveredCareer] = useState<number | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // 1. Hàm xử lý điều hướng
  const handleCareerClick = (id: string) => {
    navigate(`/job/${id}`, { state: { from: '/' } }); 
  };

  // 2. Thêm trường 'id' vào tất cả các ngành
  const popularCareers = [
    { 
      id: "computer-science",
      icon: BrainCircuit, 
      name: "Khoa Học Máy Tính & AI", 
      color: "from-blue-500 to-indigo-500", 
      emoji: "🤖", 
      desc: "AI, Machine Learning, Data Science" 
    },
    { 
      id: "electrical-engineering",
      icon: Cpu, 
      name: "Kỹ Thuật Điện / Vi Mạch", 
      color: "from-teal-500 to-emerald-500", 
      emoji: "⚡", 
      desc: "Thiết kế Chip, Tự động hóa, IoT" 
    },
    { 
      id: "marketing",
      icon: Megaphone, 
      name: "Truyền Thông & Marketing", 
      color: "from-purple-500 to-pink-500", 
      emoji: "📣", 
      desc: "Digital Marketing, Sáng tạo nội dung" 
    },
    { 
      id: "psychology",
      icon: HeartHandshake, 
      name: "Tâm Lý Học & Tham Vấn", 
      color: "from-rose-400 to-red-500", 
      emoji: "🧠", 
      desc: "Trị liệu tâm lý, Nhân sự (HR)" 
    },
    { 
      id: "logistics",
      icon: Truck, 
      name: "Logistics & Chuỗi Cung Ứng", 
      color: "from-amber-500 to-orange-500", 
      emoji: "📦", 
      desc: "Xuất nhập khẩu, Thương mại điện tử" 
    },
    { 
      id: "nursing",
      icon: HeartPulse, 
      name: "Y Khoa & Điều Dưỡng", 
      color: "from-red-500 to-rose-600", 
      emoji: "🏥", 
      desc: "Bác sĩ, Chăm sóc sức khỏe, Y tế" 
    },
    { 
      id: "finance",
      icon: TrendingUp, 
      name: "Tài Chính & Đầu Tư", 
      color: "from-emerald-500 to-green-600", 
      emoji: "💹", 
      desc: "Phân tích dữ liệu, Quản lý quỹ, Fintech" 
    },
    { 
      id: "business",
      icon: Briefcase, 
      name: "Quản Trị Kinh Doanh", 
      color: "from-cyan-500 to-blue-600", 
      emoji: "💼", 
      desc: "Khởi nghiệp, Quản lý, Vận hành" 
    }
  ];

  const testimonials = [
    {
      name: "Minh Anh",
      grade: "Học sinh lớp 12",
      text: "Mình đã tìm được ngành Công nghệ thông tin phù hợp! App rất dễ hiểu và chi tiết. 5 sao ⭐⭐⭐⭐⭐",
      rating: 5
    },
    {
      name: "Quốc Việt",
      grade: "Học sinh lớp 11",
      text: "Trước giờ mình không biết chọn ngành gì, giờ đã rõ ràng hơn rất nhiều. Cảm ơn app! 🙏",
      rating: 5
    },
    {
      name: "Thu Hà",
      grade: "Học sinh lớp 12",
      text: "Roadmap học tập chi tiết giúp mình biết cần học gì để đạt mục tiêu. Quá tuyệt vời! 🎯",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "App này có mất phí không?",
      a: "Hoàn toàn miễn phí 100% cho tất cả học sinh THPT!"
    },
    {
      q: "Tôi cần chuẩn bị gì trước khi bắt đầu?",
      a: "Không cần chuẩn bị gì cả! Chỉ cần 5 phút để trả lời các câu hỏi về tính cách và sở thích của bạn."
    },
    {
      q: "Kết quả có chính xác không?",
      a: "App phân tích dựa trên tính cách, sở thích và xu hướng thị trường việc làm 2026. Độ chính xác cao!"
    },
    {
      q: "Tôi có thể làm lại bài test không?",
      a: "Có! Bạn có thể làm lại bất cứ lúc nào để cập nhật kết quả theo sự thay đổi của bạn."
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Hero Section - Full Screen with Gradient Mesh */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
        }}>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [-50, 50, -50],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* Floating Badge
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl border-2 border-white/30"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              {/* <Sparkles className="w-5 h-5 text-yellow-300" />
              {/* <span className="text-white font-semibold">Powered by AI • Miễn phí 100%</span> */}
              {/* <Sparkles className="w-5 h-5 text-yellow-300" /> */} 
            {/* </motion.div> */} 

            {/* Main Headline with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight"
                style={{
                  textShadow: "0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(147,51,234,0.3)"
                }}>
                Tìm Ra Nghề Nghiệp<br />
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Hoàn Hảo Cho Bạn
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Đang phân vân chọn ngành học? AI sẽ phân tích tính cách, sở thích của bạn<br />
                và đề xuất <span className="font-bold text-yellow-300">nghề nghiệp phù hợp nhất</span> chỉ trong 5 phút! ⚡
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/survey")}
                  className="px-10 py-5 rounded-full text-xl font-bold text-purple-600 bg-white hover:bg-yellow-300 transition-all flex items-center gap-3 shadow-2xl group"
                >
                  <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Bắt đầu ngay - Miễn phí
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoOpen(true)}
                  className="px-8 py-5 rounded-full text-lg font-semibold text-white backdrop-blur-xl border-2 border-white/30 hover:bg-white/10 transition-all flex items-center gap-2"
                  style={{ background: "rgba(255, 255, 255, 0.1)" }}
                >
                  <Play className="w-5 h-5" />
                  Xem demo
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 justify-center items-center text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Không cần đăng ký</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-300" />
                  <span>Chỉ 5 phút</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-300" />
                  <span>Bảo mật thông tin</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Bar - Glassmorphism */}
      <div className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 backdrop-blur-2xl rounded-3xl p-8 border border-white/20"
              style={{ background: "rgba(255, 255, 255, 0.95)" }}
            >
              {[
                { icon: Users, number: "10,000+", label: "Học sinh tin dùng", color: "text-blue-600" },
                { icon: Briefcase, number: "50+", label: "Nghề nghiệp", color: "text-purple-600" },
                { icon: Trophy, number: "98%", label: "Độ chính xác", color: "text-emerald-600" },
                { icon: Zap, number: "5 phút", label: "Hoàn thành", color: "text-amber-600" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-2xl hover:bg-white/50 transition-all"
                >
                  <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-4xl font-extrabold mb-1 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">


          {/* How It Works - Bento Box Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                3 Bước Siêu Đơn Giản
              </motion.h2>
              <p className="text-xl text-gray-600">
                Từ không biết gì → Định hướng rõ ràng chỉ trong <span className="font-bold text-purple-600">5 phút</span> ⚡
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: Target,
                  title: "Làm bài test tính cách",
                  desc: "Trả lời 8 câu hỏi về sở thích, điểm mạnh và môn học yêu thích của bạn",
                  color: "from-blue-500 to-cyan-500",
                  emoji: "📝"
                },
                {
                  step: "02",
                  icon: Brain,
                  title: "AI phân tích & gợi ý",
                  desc: "Công nghệ AI phân tích và đưa ra top nghề nghiệp phù hợp nhất",
                  color: "from-purple-500 to-pink-500",
                  emoji: "🤖"
                },
                {
                  step: "03",
                  icon: Rocket,
                  title: "Nhận lộ trình chi tiết",
                  desc: "Lộ trình học tập, ngành đại học và kỹ năng cần có để đạt mục tiêu",
                  color: "from-emerald-500 to-teal-500",
                  emoji: "🎯"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all h-full border-2 border-gray-100 hover:border-purple-200">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg rotate-12 group-hover:rotate-0 transition-transform`}>
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {item.emoji} {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector Arrow (desktop only) */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-purple-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Popular Careers - Interactive Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 pb-2 leading-normal bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nghề Nghiệp Hot
              </h2>
              <p className="text-xl text-gray-600">
                Khám phá những ngành nghề được săn đón nhất hiện nay 🔥
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {popularCareers.map((career, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => handleCareerClick(career.id)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onHoverStart={() => setHoveredCareer(idx)}
                  onHoverEnd={() => setHoveredCareer(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${career.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />

                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all h-full border-2 border-gray-100 overflow-hidden">
                    {/* Background Pattern */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${career.color} rounded-full blur-3xl opacity-10 transform translate-x-10 -translate-y-10 group-hover:opacity-20 transition-opacity`} />

                    {/* Icon */}
                    <div className={`relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${career.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all mx-auto`}>
                      <career.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Emoji */}
                    <div className="text-5xl text-center mb-4 transform group-hover:scale-125 transition-transform">
                      {career.emoji}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 text-center text-gray-900">
                      {career.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      {career.desc}
                    </p>

                    {/* Hover Indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredCareer === idx ? 1 : 0, y: hoveredCareer === idx ? 0 : 10 }}
                      className="mt-4 text-center"
                    >
                      <span className={`text-sm font-semibold bg-gradient-to-r ${career.color} bg-clip-text text-transparent`}>
                        Tìm hiểu thêm →
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features - Bento Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
                Tại Sao 10,000+ Học Sinh Chọn Chúng Tôi? 💫
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Dành riêng cho học sinh THPT",
                  desc: "Câu hỏi và nội dung được thiết kế phù hợp với tâm lý và trình độ học sinh cấp 3",
                  color: "from-blue-500 to-cyan-500",
                  emoji: "🎓"
                },
                {
                  icon: Brain,
                  title: "Phân tích bằng AI tiên tiến",
                  desc: "Công nghệ AI phân tích tính cách, sở thích và đưa ra kết quả chính xác nhất",
                  color: "from-purple-500 to-pink-500",
                  emoji: "🤖"
                },
                {
                  icon: BarChart3,
                  title: "Trực quan & Dễ hiểu",
                  desc: "Biểu đồ radar, roadmap timeline và các visualization giúp bạn nắm bắt nhanh chóng",
                  color: "from-emerald-500 to-teal-500",
                  emoji: "📊"
                },
                {
                  icon: TrendingUp,
                  title: "Dữ liệu cập nhật 2026",
                  desc: "Thông tin mới nhất về xu hướng nghề nghiệp, mức lương và cơ hội việc làm",
                  color: "from-orange-500 to-red-500",
                  emoji: "📈"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />

                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 h-full">
                    <div className="flex gap-5">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl mb-3">{feature.emoji}</div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQs Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
                Câu Hỏi Thường Gặp 🤔
              </h2>
              <p className="text-xl text-gray-600">
                Giải đáp mọi thắc mắc của bạn
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-purple-200"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA - Epic! */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[3rem] p-16 text-center text-white shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
              }}
            >
              {/* Animated Orbs */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-7xl mb-6 inline-block"
                >
                  🚀
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-extrabold mb-6"
                  style={{
                    textShadow: "0 0 40px rgba(0,0,0,0.2)"
                  }}>
                  Bạn Đã Sẵn Sàng Chưa?
                </h2>

                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  Hơn <span className="font-bold text-yellow-300">10,000 học sinh</span> đã tìm được con đường rõ ràng.<br />
                  <span className="text-lg">Giờ là lượt bạn tỏa sáng! ✨</span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/survey")}
                  className="bg-white text-purple-600 px-12 py-6 rounded-full text-2xl font-extrabold shadow-2xl hover:bg-yellow-300 transition-all inline-flex items-center gap-4 group"
                >
                  <Sparkles className="w-7 h-7 group-hover:rotate-180 transition-transform duration-500" />
                  Bắt Đầu Ngay 
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <div className="mt-8 flex flex-wrap gap-6 justify-center text-white/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Không cần đăng ký</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-300" />
                    <span>Chỉ 5 phút</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                    <span>Kết quả chính xác 98%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
       {/* Footer của bạn đang ở đây... */}
      <div className="bg-gray-900 text-white py-8">...</div>

      {/* --- THÊM KHỐI VIDEO MODAL NÀY VÀO TRƯỚC THẺ ĐÓNG CUỐI CÙNG --- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Lớp phủ đen làm mờ background, bấm vào đây sẽ đóng video */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          />

          {/* Khung chứa Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
          >
            {/* Nút Đóng (X) */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* --- CÁCH 1: DÙNG YOUTUBE (Khuyên dùng) --- */}
            {/* Thay "YOUR_YOUTUBE_VIDEO_ID" bằng ID video của bạn */}
            {/* <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GFDkNeq2EXg?autoplay=1"
              title="App Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}

            {/* --- CÁCH 2: DÙNG VIDEO FILE CÓ SẴN TRONG MÁY (Bỏ comment để dùng) --- */}
            
            <video 
              className="w-full h-full object-cover" 
              controls 
              autoPlay 
              playsInline
            >
              <source src="/assets/demo.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video> 
           
          </motion.div>
        </div>
      )}
        
      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Career Compass. Made with 💜 for Vietnamese Students
          </p>
        </div>
      </div>

    </div>
  );
  
}

