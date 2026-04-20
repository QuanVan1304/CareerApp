import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, Home, GraduationCap, Filter, ChevronRight, FlaskConical } from "lucide-react";
import { careers } from "../data/careers";
import { calculateHybridScore } from "../utils/scoring";

interface AIPrediction {
  major: string;
  matchingScore: number;
}

export function DashboardPage() {
  const navigate = useNavigate();
  const [displayCareers, setDisplayCareers] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<"match" | "hot">("match");

  // Kiểm tra có phải kết quả tạm (user chưa làm hết bài) không
  const isInterim = localStorage.getItem("surveyIsInterim") === "true";

  useEffect(() => {
    const predictionsData = localStorage.getItem("aiPredictions");
    const skillsData      = localStorage.getItem("userInterests");
    const userSkills      = skillsData ? JSON.parse(skillsData) : [];

    if (predictionsData) {
      const aiResults: AIPrediction[] = JSON.parse(predictionsData);

      const merged = aiResults.map(prediction => {
        const localData = careers.find(
          c => c.majorName.toLowerCase() === prediction.major.toLowerCase()
        );

        if (localData) {
          const finalScore = calculateHybridScore(
            prediction.matchingScore,
            userSkills,
            localData.requiredSkills
          );
          return { ...localData, matchingScore: finalScore, isFound: true };
        }

        return {
          majorName: prediction.major,
          name: prediction.major,
          description: "Đang cập nhật mô tả chi tiết cho ngành học này...",
          coreSkills: [],
          matchingScore: prediction.matchingScore,
          isFound: false,
        };
      });

      merged.sort((a, b) => {
        if (sortBy === "match") return b.matchingScore - a.matchingScore;
        return a.name.localeCompare(b.name);
      });

      setDisplayCareers(merged);
    }
  }, [sortBy]);

  const getMatchColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-orange-600 bg-orange-100";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-1">
                Kết Quả Định Hướng
                {isInterim}
              </h1>
              <p className="text-gray-500 text-sm">
                {isInterim
                  ? "Đây là kết quả dựa trên phần bài đã làm — bạn có thể tiếp tục để AI phân tích chính xác hơn"
                  : "Dựa trên toàn bộ bài khảo sát và sở thích của bạn"}
              </p>
            </div>
            <button onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all flex-shrink-0 text-sm">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Trang chủ</span>
            </button>
          </div>

          {/* Banner "Tiếp tục làm test" */}
          {isInterim && (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-white">
                <FlaskConical className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Bạn chưa làm hết bài!</p>
                  <p className="text-sm opacity-85">
                    Tiếp tục trả lời các câu còn lại để kết quả chính xác và đầy đủ hơn
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/survey", { state: { resume: true } })}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all text-sm flex-shrink-0">
                Tiếp tục làm test
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Filter/Sort */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Định hướng ngành nghề </h2>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                Mỗi ngành kèm theo gợi ý ngành học đại học phù hợp
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select value={sortBy}
                onChange={e => setSortBy(e.target.value as "match" | "hot")}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                <option value="match">Phù hợp nhất với bạn</option>
                <option value="hot">Ngành hot &amp; nhiều cơ hội</option>
              </select>
            </div>
          </div>

          {/* Career cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCareers.map((career, index) => (
              <div key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow">

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getMatchColor(career.matchingScore)}`}>
                    {career.matchingScore}% phù hợp
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1 capitalize">{career.name}</h3>

                {career.majorName && (
                  <div className="text-sm text-blue-600 font-medium mb-3 flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" /> {career.majorName}
                  </div>
                )}

                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{career.description}</p>

                {career.coreSkills?.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1.5">
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
                  className={`w-full py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold text-sm
                    ${career.isFound
                      ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}>
                  {career.isFound ? "Xem ngành học & lộ trình" : "Chưa có lộ trình"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA cuối */}
          <div className="mt-10 text-center">
            {isInterim ? (
              <button 
                // 👉 SỬA Ở ĐÂY: Truyền thêm { state: { resume: true } }
                onClick={() => navigate("/survey", { state: { resume: true } })}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium">
                Tiếp tục làm test để nhận kết quả đầy đủ
              </button>
            ) : (
              <button 
                // Nút "Làm lại" thì không truyền gì cả để nó chạy lại từ đầu
                onClick={() => navigate("/survey")}
                className="px-6 py-2 border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-sm">
                Làm lại bài khảo sát
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}