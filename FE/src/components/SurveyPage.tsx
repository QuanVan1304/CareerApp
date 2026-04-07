import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Plus, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { personalityQuestions } from "../data/careers";

type SurveyStep = "personality" | "interests";

interface Interest {
  name: string;
  level: number;
}

export function SurveyPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<SurveyStep>("personality");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  
  // State tạo hiệu ứng loading khi chờ AI trả kết quả
  const [isAnalyzing, setIsAnalyzing] = useState(false); 

  // Interests state
  const [interests, setInterests] = useState<Interest[]>([]);
  const [newInterestName, setNewInterestName] = useState("");

  const addInterest = () => {
    if (newInterestName.trim()) {
      setInterests([...interests, { name: newInterestName.trim(), level: 5 }]);
      setNewInterestName("");
    }
  };

  const removeInterest = (index: number) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  const updateInterestLevel = (index: number, level: number) => {
    const updated = [...interests];
    updated[index].level = level;
    setInterests(updated);
  };

  // --- HÀM LOGIC MỚI: CHUYỂN ĐỔI ĐÁP ÁN SANG ĐIỂM RIASEC ---
  const calculateRIASEC = () => {
    // 1. Nâng điểm Baseline lên 15 (Mức trung lập của bài test 48 câu)
    const scores = {
      R_Score: 15, I_Score: 15, A_Score: 15, 
      S_Score: 15, E_Score: 15, C_Score: 15
    };

    const traitToRIASEC: Record<string, string> = {
      "technical": "R", "practical": "R", "hands-on": "R",
      "analytical": "I", "problem-solving": "I", "studious": "I", "focused": "I", "independent": "I",
      "creative": "A", "artistic": "A", "innovative": "A", "flexible": "A",
      "social": "S", "collaborative": "S", "communicative": "S", "dynamic": "S",
      "leadership": "E", "energetic": "E",
      "detail-oriented": "C"
    };

    // 2. Cộng điểm
    Object.entries(answers).forEach(([questionId, optionIdx]) => {
      const question = personalityQuestions.find(q => q.id === questionId);
      if (question) {
        const traits = question.options[optionIdx].traits;
        traits.forEach(trait => {
          const bucket = traitToRIASEC[trait];
          if (bucket) {
            // Tăng hệ số nhân lên 8 để bù đắp cho số lượng câu hỏi ít
            scores[`${bucket}_Score` as keyof typeof scores] += 8;
          }
        });
      }
    });

    // 3. Đảm bảo không điểm nào vượt quá 40 (Mức tối đa của AI)
    Object.keys(scores).forEach(key => {
      if (scores[key as keyof typeof scores] > 40) {
        scores[key as keyof typeof scores] = 40;
      }
    });

    return scores;
  };

  // --- HÀM CHUYỂN BƯỚC ĐƯỢC CẬP NHẬT THÀNH ASYNC ĐỂ GỌI API ---
  const handleNextStep = async () => {
    if (currentStep === "personality") {
      if (currentQuestion < personalityQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCurrentStep("interests");
      }
    } else if (currentStep === "interests") {
      setIsAnalyzing(true); // Bật trạng thái loading
      
      // Lưu dữ liệu thô vào máy
      localStorage.setItem("userInterests", JSON.stringify(interests));
      localStorage.setItem("userAnswers", JSON.stringify(answers));

      // Tính điểm chuẩn bị gửi cho AI
      const payload = calculateRIASEC();

      try {
        // GỌI API BACKEND
        const response = await fetch("http://127.0.0.1:8000/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Lỗi mạng từ Backend");

        const data = await response.json();

        // Lưu kết quả dự đoán của AI vào máy
        localStorage.setItem("aiPredictions", JSON.stringify(data.predictions));
        
        // Chuyển trang sang Dashboard hiển thị
        navigate("/dashboard");

      } catch (error) {
        console.error("Lỗi AI Backend:", error);
        alert("Không thể kết nối đến Backend AI. Hãy chắc chắn bạn đã chạy lệnh 'uvicorn main:app --reload' ở Terminal Python!");
      } finally {
        setIsAnalyzing(false); // Tắt trạng thái loading
      }
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep === "personality" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentStep === "interests") {
      setCurrentStep("personality");
      setCurrentQuestion(personalityQuestions.length - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === "personality")
      return answers[personalityQuestions[currentQuestion].id] !== undefined;
    if (currentStep === "interests") return true;
    return false;
  };

  const getStepProgress = () => {
    if (currentStep === "personality") {
      return 33 + (currentQuestion / personalityQuestions.length) * 33;
    }
    return 66;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl mb-2">Khảo Sát Nghề Nghiệp</h1>
            <p className="text-gray-600">
              Hoàn thành các bước sau để nhận phân tích chi tiết
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm">
              <span
                className={currentStep === "personality" ? "text-blue-600" : "text-gray-500"}
              >
                Trắc nghiệm tính cách
              </span>
              <span className={currentStep === "interests" ? "text-blue-600" : "text-gray-500"}>
                Sở thích
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${getStepProgress()}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Personality Test Step */}
            {currentStep === "personality" && (
              <div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Câu hỏi {currentQuestion + 1}/{personalityQuestions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / personalityQuestions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-purple-600 h-1 rounded-full transition-all"
                      style={{
                        width: `${((currentQuestion + 1) / personalityQuestions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl mb-8">
                  {personalityQuestions[currentQuestion].question}
                </h2>

                <div className="space-y-4">
                  {personalityQuestions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setAnswers({
                          ...answers,
                          [personalityQuestions[currentQuestion].id]: idx,
                        });
                      }}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        answers[personalityQuestions[currentQuestion].id] === idx
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Interests Step */}
            {currentStep === "interests" && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl">Điểm mạnh của bạn</h2>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                    Không bắt buộc
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Thêm sở thích để kết quả định hướng chính xác hơn. Bạn có thể bỏ qua nếu chưa rõ.
                </p>

                {/* Add Interest Input */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    value={newInterestName}
                    onChange={(e) => setNewInterestName(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") addInterest();
                    }}
                    placeholder="Nhập tên sở thích (VD: Thể thao, Nghệ thuật...)"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={addInterest}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Thêm
                  </button>
                </div>

                {/* Interests List */}
                <div className="space-y-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {interest.name}
                        </span>
                        <button
                          onClick={() => removeInterest(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={interest.level}
                          onChange={(e) =>
                            updateInterestLevel(index, parseInt(e.target.value))
                          }
                          className="flex-1"
                        />
                        <span className="text-lg w-12 text-center">
                          {interest.level}/10
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {interests.length === 0 && (
                  <div className="text-center text-gray-400 py-8 border-2 border-dashed border-gray-200 rounded-xl">
                    <p className="mb-1">Chưa có sở thích nào.</p>
                    <p className="text-sm">Thêm sở thích hoặc nhấn "Xem kết quả" để tiếp tục.</p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                onClick={handlePrevStep}
                disabled={(currentStep === "personality" && currentQuestion === 0) || isAnalyzing}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                Quay lại
              </button>
              
              {/* Nút Tiếp tục / Xem kết quả có hiệu ứng Loading */}
              <button
                onClick={handleNextStep}
                disabled={!canProceed() || isAnalyzing}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] justify-center"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Đang AI phân tích...
                  </>
                ) : (
                  <>
                    {currentStep === "interests" ? "Xem kết quả" : "Tiếp tục"}
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}