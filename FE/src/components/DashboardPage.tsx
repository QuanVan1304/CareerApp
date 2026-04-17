import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, BookOpen, Target } from "lucide-react";
import { careers } from "../data/careers"; 
import { calculateHybridScore } from "../utils/scoring"; 
interface AIPrediction {
  major: string;
  matchingScore: number;
}


export function DashboardPage() {
  const navigate = useNavigate();
  const [displayCareers, setDisplayCareers] = useState<any[]>([]);

  useEffect(() => {
    // 2. Lấy dự đoán AI và Kỹ năng người dùng từ LocalStorage
    const predictionsData = localStorage.getItem("aiPredictions");
    const skillsData = localStorage.getItem("userInterests");
    
    const userSkills: string[] = skillsData ? JSON.parse(skillsData) : [];

    if (predictionsData) {
      const aiResults: AIPrediction[] = JSON.parse(predictionsData);

      // 3. HYDRATION & SCORING
      const mergedData = aiResults.map(prediction => {
        const localData = careers.find(
          c => c.majorName?.toLowerCase() === prediction.major.toLowerCase()
        );

        if (localData) {
          // Tính điểm Hybrid thay vì dùng điểm AI gốc
          const finalScore = calculateHybridScore(
            prediction.matchingScore, 
            userSkills, 
            localData.requiredSkills,
          );
          console.log(`Ngành: ${localData.name}`);
          console.log(`- Điểm AI gốc: ${prediction.matchingScore}`);
          console.log(`- Điểm Hybrid cuối: ${finalScore}`);
          console.log(`- Kỹ năng người dùng:`, userSkills);
          return {
            ...localData,
            matchingScore: finalScore, 
            isFound: true
          };
        } else {
          return {
            majorName: prediction.major,
            name: prediction.major,
            description: "Đang cập nhật mô tả chi tiết cho ngành học này...",
            coreSkills: [],
            matchingScore: prediction.matchingScore, // Không tìm thấy data thì giữ nguyên điểm AI
            isFound: false
          };
        }
      });

      // 4. Tối ưu UX: Sắp xếp kết quả từ cao xuống thấp
      mergedData.sort((a, b) => b.matchingScore - a.matchingScore);

      setDisplayCareers(mergedData);
    }
  }, []);

  const getMatchColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 50) return "text-yellow-600 bg-yellow-100";
    return "text-orange-600 bg-orange-100";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-start justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Kết Quả Định Hướng Chuyên Sâu</h1>
            <button 
              onClick={() => navigate("/")} 
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Làm lại bài test
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCareers.map((career, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-shadow">
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getMatchColor(career.matchingScore)}`}>
                    {career.matchingScore}% Phù hợp
                  </span>
                  {/* Sử dụng icon Target như đã bàn */}
                  <Target className="w-5 h-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1 capitalize">
                  {career.name}
                </h3>
                <div className="text-sm text-blue-600 font-medium mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Khối ngành: {career.majorName}
                </div>

                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  {career.description}
                </p>

                {career.coreSkills?.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {career.coreSkills.slice(0, 3).map((skill: string, idx: number) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <button 
                  disabled={!career.isFound}
                  onClick={() => navigate(`/job/${career.id}`)}
                  className={`w-full py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold
                    ${career.isFound 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                >
                  {career.isFound ? 'Xem lộ trình chi tiết' : 'Chưa có lộ trình'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}