import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { calculateHybridScore } from "../utils/scoring"; 
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
  BookOpen,
  ExternalLink,
  AlertCircle,
  GraduationCap,
  Target,
  Percent,
  CheckCircle2,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { careers } from "../data/careers";

interface AIPrediction {
  major: string;
  matchingScore: number;
}
export function JobDetailPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [userSkills, setUserSkills] = useState<any[]>([]);

  const [matchingScore, setMatchingScore] = useState<number>(0);

  const career = careers.find((c) => c.id === jobId);

  useEffect(() => {
  if (!career) return;

  // 1. Lấy kỹ năng người dùng từ localStorage
  const skillsData = localStorage.getItem("userInterests");
  const parsedSkills = skillsData ? JSON.parse(skillsData) : [];
  setUserSkills(parsedSkills); // cập nhật state để radar chart dùng

  // 2. Lấy điểm AI từ localStorage — ưu tiên aiPredictions, fallback về career.matchingScore
  let aiScore = career.matchingScore || 0;
  const predictionsData = localStorage.getItem("aiPredictions");
  if (predictionsData) {
    const aiResults: AIPrediction[] = JSON.parse(predictionsData);
    const prediction = aiResults.find(
      (p) => p.major.trim().toLowerCase() === career.majorName.trim().toLowerCase()
    );
    if (prediction) {
      aiScore = prediction.matchingScore;
    } else {
      console.warn("Không tìm thấy ngành trong aiPredictions:", career.majorName);
    }
  }

  // 3. Tính hybrid score rồi set vào state
  const finalScore = calculateHybridScore(aiScore, parsedSkills, career.requiredSkills);
  setMatchingScore(finalScore);
}, [career]);


  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Không tìm thấy nghề nghiệp</h2>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-600 hover:underline"
          >
            Quay lại Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Prepare radar chart data
  const getRadarData = () => {
    const skillNames = Object.keys(career.requiredSkills);
    return skillNames.map((skillName) => {
      const userSkill = userSkills.find(
        (s) => s.name.toLowerCase() === skillName.toLowerCase()
      );
      return {
        skill: skillName,
        required: career.requiredSkills[skillName],
        yours: userSkill?.level || 0,
      };
    });
  };

  // Get skill gaps
  const getSkillGaps = () => {
    const gaps: { skill: string; gap: number; required: number; current: number }[] = [];
    Object.keys(career.requiredSkills).forEach((skillName) => {
      const required = career.requiredSkills[skillName];
      const userSkill = userSkills.find(
        (s) => s.name.toLowerCase() === skillName.toLowerCase()
      );
      const current = userSkill?.level || 0;
      const gap = required - current;
      if (gap > 0) {
        gaps.push({ skill: skillName, gap, required, current });
      }
    });
    return gaps.sort((a, b) => b.gap - a.gap);
  };

  const radarData = getRadarData();
  const skillGaps = getSkillGaps();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại Dashboard
          </button>

          {/* Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl mb-2">{career.name}</h1>
                <p className="text-gray-600 text-lg">{career.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mức độ phù hợp</p>
                  <p className="font-semibold">{matchingScore}%</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Triển vọng</p>
                  <p className="font-semibold">{career.jobOutlook}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Kỹ năng cần có</p>
                  <p className="font-semibold">
                    {Object.keys(career.requiredSkills).length} kỹ năng
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* University Majors */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl">Ngành học đại học phù hợp</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Các ngành học bạn nên cân nhắc khi đăng ký vào đại học:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {career.universityMajors.map((major, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-200"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="font-semibold text-gray-800">{major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Radar Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl mb-6">So sánh kỹ năng</h2>
            <p className="text-gray-600 mb-6">
              Biểu đồ dưới đây cho thấy kỹ năng của bạn so với yêu cầu của nghề
            </p>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar
                    name="Yêu cầu nghề"
                    dataKey="required"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Kỹ năng của bạn"
                    dataKey="yours"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Skill Gaps */}
          {skillGaps.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl">Kỹ năng cần bổ sung</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Tập trung vào các kỹ năng sau để phù hợp hơn với nghề này:
              </p>
              <div className="space-y-4">
                {skillGaps.map((gap, idx) => (
                  <div
                    key={idx}
                    className="border border-orange-200 rounded-lg p-4 bg-orange-50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-orange-900">
                        {gap.skill}
                      </span>
                      <span className="text-sm text-orange-700">
                        Cần cải thiện: +{gap.gap} điểm
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Hiện tại: {gap.current}/10</span>
                          <span>Yêu cầu: {gap.required}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{
                              width: `${(gap.current / gap.required) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roadmap Timeline */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl mb-6">Lộ Trình Học Tập</h2>
            <p className="text-gray-600 mb-8">
              Theo lộ trình này để đạt được kỹ năng cần thiết cho nghề{" "}
              {career.name}
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600" />

              {/* Roadmap Phases */}
              <div className="space-y-8">
                {career.roadmap.map((phase, idx) => (
                  <div key={phase.id} className="relative pl-20">
                    {/* Phase Number */}
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                      {idx + 1}
                    </div>

                    {/* Phase Content */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl">{phase.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm whitespace-nowrap">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{phase.description}</p>

                      {/* Courses */}
                      <div className="space-y-3">
                        {phase.courses.map((course) => (
                          <div
                            key={course.id}
                            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold mb-1">
                                  {course.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {course.platform}
                                </p>
                              </div>
                              <a
                                href={course.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                              >
                                Học ngay
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Duration */}
            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <p className="text-center text-gray-700">
                <span className="font-semibold">Tổng thời gian ước tính:</span>{" "}
                {career.roadmap.reduce((acc, phase) => {
                  const months = phase.duration.match(/\d+/)?.[0] || "0";
                  return acc + parseInt(months);
                }, 0)}{" "}
                tháng để hoàn thành lộ trình
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}