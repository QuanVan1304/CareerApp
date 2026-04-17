import { useNavigate } from "react-router";
import { ArrowRight, Target, BarChart3, MapPin, Sparkles, BookOpen, Users, TrendingUp, CheckCircle, Star, Quote, Briefcase, Code, Palette, Heart, HelpCircle, Zap } from "lucide-react";
import { motion } from "motion/react";

export function LandingPage() {
  const navigate = useNavigate();

  const popularCareers = [
    { icon: Code, name: "Lập trình viên", color: "from-blue-500 to-cyan-500", emoji: "💻", desc: "AI, App, Web" },
    { icon: Palette, name: "Thiết kế đồ họa", color: "from-purple-500 to-pink-500", emoji: "🎨", desc: "UI/UX, Đồ họa" },
    { icon: Heart, name: "Y tá/Bác sĩ", color: "from-red-500 to-orange-500", emoji: "⚕️", desc: "Y khoa, Dược" },
    { icon: Briefcase, name: "Kinh doanh", color: "from-green-500 to-emerald-500", emoji: "💼", desc: "Marketing, Quản trị" },
  ];

  // const testimonials = [
  //   {
  //     name: "Minh Anh",
  //     grade: "Học sinh lớp 12",
  //     text: "Mình đã tìm được ngành Công nghệ thông tin phù hợp! App rất dễ hiểu và chi tiết. 5 sao ⭐⭐⭐⭐⭐",
  //     rating: 5
  //   },
  //   {
  //     name: "Quốc Việt",
  //     grade: "Học sinh lớp 11",
  //     text: "Trước giờ mình không biết chọn ngành gì, giờ đã rõ ràng hơn rất nhiều. Cảm ơn app! 🙏",
  //     rating: 5
  //   },
  //   {
  //     name: "Thu Hà",
  //     grade: "Học sinh lớp 12",
  //     text: "Roadmap học tập chi tiết giúp mình biết cần học gì để đạt mục tiêu. Quá tuyệt vời! 🎯",
  //     rating: 5
  //   }
  // ];

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6 border border-blue-200"
            > */}
              {/* <Sparkles className="w-5 h-5 text-blue-600" /> */}
              {/* <span className="text-blue-800 font-semibold">Miễn phí 100% cho học sinh THPT</span> */}
            {/* </motion.div> */}
            
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Định Hướng Nghề Nghiệp<br />
              <span className="text-4xl md:text-6xl">Cho Tương Lai Của Bạn ✨</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              🎓 Đang phân vân chọn ngành học gì khi vào đại học?<br />
              <span className="text-lg">Hãy để AI giúp bạn khám phá nghề nghiệp phù hợp nhất!</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/survey")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Bắt đầu khám phá ngay
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">✨ Chỉ mất 5 phút | Không cần đăng ký</p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { number: "10,000+", label: "Học sinh đã sử dụng", icon: Users },
              { number: "50+", label: "Nghề nghiệp phân tích", icon: Briefcase },
              { number: "98%", label: "Độ chính xác", icon: Target },
              { number: "100%", label: "Miễn phí", icon: CheckCircle }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* 3 Steps with Visual Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3 Bước Đơn Giản 🚀
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Chỉ cần 5 phút để tìm ra con đường sự nghiệp của bạn
            </p>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -z-10"></div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative cursor-pointer"
                >
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">
                    1
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto transform rotate-3 hover:rotate-6 transition-transform">
                    <Target className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl mb-3 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      📝 Làm Bài Test
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trả lời 8 câu hỏi về tính cách, sở thích và môn học yêu thích
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative cursor-pointer"
                >
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">
                    2
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto transform -rotate-3 hover:rotate-0 transition-transform">
                    <Zap className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl mb-3 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                      🤖 Nhận Phân Tích AI
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      AI phân tích và đề xuất top nghề nghiệp phù hợp với bạn nhất
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative cursor-pointer"
                >
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">
                    3
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto transform rotate-3 hover:rotate-6 transition-transform">
                    <MapPin className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl mb-3 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      🗺️ Nhận Lộ Trình
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Roadmap học tập chi tiết với ngành đại học và khóa học đề xuất
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Popular Careers Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-4">
              Nghề Nghiệp Nổi Bật 🌟
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              Khám phá những nghề nghiệp hot nhất hiện nay
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {popularCareers.map((career, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${career.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <career.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-3xl mb-2">{career.emoji}</p>
                    <h3 className="text-lg mb-2">{career.name}</h3>
                    <p className="text-sm text-gray-500">{career.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Tại sao chọn chúng tôi? 💡
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, title: "Phù hợp với học sinh THPT", desc: "Được thiết kế đặc biệt cho các bạn đang chuẩn bị vào đại học", color: "from-blue-500 to-cyan-500" },
                { icon: TrendingUp, title: "Dữ liệu cập nhật 2026", desc: "Thông tin nghề nghiệp và triển vọng thị trường mới nhất", color: "from-purple-500 to-pink-500" },
                { icon: BarChart3, title: "Dễ hiểu & Trực quan", desc: "Giao diện thân thiện, biểu đồ sinh động, dễ theo dõi", color: "from-green-500 to-emerald-500" },
                { icon: CheckCircle, title: "Hoàn toàn miễn phí", desc: "Không mất phí, không cần đăng ký, bắt đầu ngay", color: "from-orange-500 to-red-500" }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-16"
          >
            {/* <h2 className="text-3xl md:text-4xl text-center mb-4">
              Học sinh nói gì về chúng tôi? 💬
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              Hơn 10,000 học sinh đã tin tưởng sử dụng
            </p> */}
            {/* <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                  <div className="mb-4">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.grade}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* FAQs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-4">
              Câu Hỏi Thường Gặp ❓
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              Những thắc mắc phổ biến của học sinh
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-white rounded-full animate-pulse animation-delay-4000"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl mb-4">
                🚀 Sẵn sàng tìm ra con đường của bạn?
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-95">
                Hơn 10,000 học sinh đã tìm được định hướng rõ ràng.<br />
                <span className="text-lg">Đến lượt bạn! 💪</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/survey")}
                className="bg-white px-10 py-5 rounded-full text-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Bắt đầu ngay - Miễn phí
                </span>
                <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <p className="text-sm mt-4 opacity-90">⏱️ Chỉ mất 5 phút | ✨ Không cần đăng ký</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
