import { useNavigate } from "react-router";
import { ArrowRight, Target, BarChart3, MapPin } from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               Phân Tích Và Định Hướng Nghề Nghiệp 
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Bạn đang phân vân chọn ngành học gì khi vào đại học? 
              Hãy để chúng tôi giúp bạn khám phá nghề nghiệp phù hợp và ngành học tương ứng!
            </p>
            <button
              onClick={() => navigate("/survey")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              Bắt đầu khám phá ngay
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwcm9mZXNzaW9uYWwlMjBzdWNjZXNzfGVufDF8fHx8MTc3NTQ2ODM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Career Success"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* 3 Steps */}
          <div className="mb-16">
            <h2 className="text-3xl text-center mb-12">
              3 Bước Đơn Giản Để Bắt Đầu
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="inline-block bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    1
                  </div>
                  <h3 className="text-xl mb-3">Làm Bài Test</h3>
                  <p className="text-gray-600">
                    Trả lời các câu hỏi về tính cách và sở thích của bạn
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-center">
                  <div className="inline-block bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    2
                  </div>
                  <h3 className="text-xl mb-3">Nhận Phân Tích</h3>
                  <p className="text-gray-600">
                    AI phân tích profile của bạn và đề xuất các nghề nghiệp phù hợp
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-center">
                  <div className="inline-block bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    3
                  </div>
                  <h3 className="text-xl mb-3">Theo Lộ Trình</h3>
                  <p className="text-gray-600">
                    Nhận roadmap học tập chi tiết với các khóa học được đề xuất
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl mb-4">
              Sẵn sàng tìm ra con đường của bạn?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Hàng nghìn người đã tìm được nghề nghiệp phù hợp. Đến lượt bạn!
            </p>
            <button
              onClick={() => navigate("/survey")}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              Bắt đầu ngay
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}