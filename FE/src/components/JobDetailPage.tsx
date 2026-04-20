import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { calculateHybridScore } from "../utils/scoring";
import {
  ArrowLeft, TrendingUp, DollarSign, ExternalLink, AlertCircle,
  GraduationCap, Target, CheckCircle, Lightbulb, Building2,
  Calendar, Award, ChevronDown, Sparkles, Users, Flame,
} from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";
import { careers, CAREER_ENRICHMENT, DEFAULT_ENRICHMENT } from "../data/careers";

interface AIPrediction { major: string; matchingScore: number; }
// ─── Score badge color ────────────────────────────────────────────────────────
function getScoreMeta(score: number) {
  if (score >= 85) return { label: "Phù hợp xuất sắc", color: "#059669", bg: "#d1fae5", ring: "#6ee7b7" };
  if (score >= 70) return { label: "Phù hợp tốt", color: "#2563eb", bg: "#dbeafe", ring: "#93c5fd" };
  return { label: "Tiềm năng phát triển", color: "#d97706", bg: "#fef3c7", ring: "#fcd34d" };
}

// ═════════════════════════════════════════════════════════════════════════════
export function JobDetailPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [matchingScore, setMatchingScore] = useState(0);
  const [surveyCompleted, setSurveyCompleted] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const career = careers.find((c) => c.id === jobId);
  const enrichment = CAREER_ENRICHMENT[jobId ?? ""] ?? DEFAULT_ENRICHMENT;
  const scoreMeta = getScoreMeta(matchingScore);

  useEffect(() => {
    if (!career) return;
    const skillsData = localStorage.getItem("userInterests");
    const parsedSkills = skillsData ? JSON.parse(skillsData) : [];
    setUserSkills(parsedSkills);

    const completed = localStorage.getItem("surveyCompleted");
    setSurveyCompleted(completed !== "false");

    let aiScore = career.matchingScore || 0;
    const predictionsData = localStorage.getItem("aiPredictions");
    if (predictionsData) {
      const aiResults: AIPrediction[] = JSON.parse(predictionsData);
      const byMajor = aiResults.find(p => p.major?.trim().toLowerCase() === career.majorName.trim().toLowerCase());
      const byId    = aiResults.find((p: any) => p.id === career.id);
      if (byMajor) aiScore = byMajor.matchingScore;
      else if (byId) aiScore = (byId as any).matchingScore;
    }
    const finalScore = calculateHybridScore(aiScore, parsedSkills, career.requiredSkills);
    setMatchingScore(finalScore);
  }, [career]);

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Không tìm thấy ngành này</h2>
          <button onClick={() => navigate("/dashboard")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
            ← Quay lại Dashboard
          </button>
        </div>
      </div>
    );
  }

  const radarData = Object.keys(career.requiredSkills).map(skill => ({
    skill,
    required: career.requiredSkills[skill],
    yours: userSkills.find(s => s.name.toLowerCase() === skill.toLowerCase())?.level || 0,
  }));

  const skillGaps = Object.keys(career.requiredSkills)
    .map(skill => {
      const required = career.requiredSkills[skill];
      const current = userSkills.find(s => s.name.toLowerCase() === skill.toLowerCase())?.level || 0;
      return { skill, required, current, gap: required - current };
    })
    .filter(g => g.gap > 0)
    .sort((a, b) => b.gap - a.gap);

  const totalMonths = career.roadmap.reduce((acc, p) => {
    return acc + parseInt(p.duration.match(/\d+/)?.[0] || "0");
  }, 0);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #fafafa 50%, #f5f0ff 100%)" }}>

      {/* ── INCOMPLETE SURVEY BANNER ─────────────────────────────────────── */}
      {!surveyCompleted && (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-400 to-orange-400 text-white py-2.5 px-4 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <p className="text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              Đây là kết quả <strong>sơ bộ</strong> sau vài câu hỏi. Hoàn thành bài test để nhận phân tích chính xác hơn!
            </p>
            <button onClick={() => navigate("/survey")}
              className="flex-shrink-0 px-4 py-1.5 bg-white text-orange-600 rounded-lg text-sm font-bold hover:bg-orange-50 transition-colors">
              Làm tiếp →
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Back */}
        <button onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6 text-sm font-medium transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại Dashboard
        </button>

        {/* ── HERO CARD ──────────────────────────────────────────────────── */}
        <div ref={heroRef} className="relative bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          {/* Decorative bg */}
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 20%, #6366f1 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #8b5cf6 0%, transparent 60%)" }} />

          <div className="relative p-8">
            {/* Emoji + score badge row */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-sm"
                  style={{ background: scoreMeta.bg, border: `2px solid ${scoreMeta.ring}` }}>
                  {enrichment.emoji}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: scoreMeta.color }}>
                    {enrichment.highlight}
                  </p>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                    {career.name}
                  </h1>
                </div>
              </div>

              {/* Score ring */}
              <div className="flex-shrink-0 text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#e5e7eb" strokeWidth="7" />
                    <circle cx="40" cy="40" r="34" fill="none" strokeWidth="7"
                      stroke={scoreMeta.color}
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 34}`}
                      strokeDashoffset={`${2 * Math.PI * 34 * (1 - matchingScore / 100)}`}
                      style={{ transition: "stroke-dashoffset 1.5s ease" }} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-extrabold" style={{ color: scoreMeta.color }}>{matchingScore}%</span>
                  </div>
                </div>
                <p className="text-[10px] font-semibold mt-1" style={{ color: scoreMeta.color }}>{scoreMeta.label}</p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-gray-500 italic text-sm mb-4">"{enrichment.tagline}"</p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">{career.description}</p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl p-3 text-center" style={{ background: "#f0fdf4" }}>
                <p className="text-xs text-gray-500 mb-1">💰 Mức lương</p>
                <p className="text-xs font-bold text-emerald-700">{enrichment.salaryRange}</p>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ background: "#eff6ff" }}>
                <p className="text-xs text-gray-500 mb-1">📈 Triển vọng</p>
                <p className="text-xs font-bold text-blue-700">{career.jobOutlook}</p>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ background: "#faf5ff" }}>
                <p className="text-xs text-gray-500 mb-1">⏱️ Lộ trình</p>
                <p className="text-xs font-bold text-purple-700">{totalMonths > 0 ? `~${totalMonths} tháng` : "Linh hoạt"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FUN FACT BANNER ────────────────────────────────────────────── */}
        <div className="rounded-2xl p-5 mb-6 flex items-start gap-4"
          style={{ background: "linear-gradient(135deg, #1e1b4b, #312e81)", color: "white" }}>
          <div className="text-3xl flex-shrink-0">💡</div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-1">Bạn có biết không?</p>
            <p className="text-sm leading-relaxed text-indigo-100">{enrichment.funFact}</p>
          </div>
        </div>

        {/* ── WHY CHOOSE ─────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Flame className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-bold text-gray-900">Tại sao chọn ngành này? 🔥</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {enrichment.whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "linear-gradient(135deg, #f8faff, #f3f4f6)" }}>
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CAREER PATH ────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900">Lộ trình thăng tiến điển hình 📈</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400 rounded-full" />
            <div className="space-y-4 pl-14">
              {enrichment.careerPath.map((stage, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[3.25rem] w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                    style={{ background: i === 0 ? "#3b82f6" : i === 1 ? "#8b5cf6" : "#10b981" }}>
                    {i + 1}
                  </div>
                  <div className="rounded-xl p-4 border border-gray-100"
                    style={{ background: i === 0 ? "#eff6ff" : i === 1 ? "#faf5ff" : "#f0fdf4" }}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{stage.year}</span>
                        <h3 className="font-bold text-gray-900">{stage.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── UNIVERSITY MAJORS ──────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900">Ngành học đại học phù hợp 🎓</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Các ngành học bạn nên cân nhắc đăng ký:</p>
          <div className="grid md:grid-cols-3 gap-3">
            {career.universityMajors.map((major, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl p-4 border-2"
                style={{ borderColor: i === 0 ? "#93c5fd" : i === 1 ? "#c4b5fd" : "#86efac",
                         background: i === 0 ? "#eff6ff" : i === 1 ? "#faf5ff" : "#f0fdf4" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: i === 0 ? "#3b82f6" : i === 1 ? "#8b5cf6" : "#10b981" }}>
                  {i + 1}
                </div>
                <p className="font-semibold text-sm text-gray-800">{major}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CORE SKILLS ────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Target className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-gray-900">Kỹ năng cốt lõi 🎯</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {career.coreSkills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl p-3 bg-emerald-50 border border-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="font-medium text-gray-800 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── TOP COMPANIES ──────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Building2 className="w-5 h-5 text-slate-600" />
            <h2 className="text-lg font-bold text-gray-900">Công ty đang tuyển dụng 🏢</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {enrichment.companies.map((company, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all hover:scale-105 cursor-default"
                style={{ borderColor: "#c7d2fe", background: "#eef2ff", color: "#3730a3" }}>
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* ── SKILL COMPARISON RADAR ─────────────────────────────────────── */}
        {userSkills.length > 0 && radarData.some(d => d.yours > 0) && (
          <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-gray-900">Kỹ năng của bạn vs Yêu cầu ngành</h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">Dựa trên sở thích bạn đã nhập</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: "#6b7280" }} />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} tick={false} axisLine={false} />
                  <Radar name="Yêu cầu ngành" dataKey="required" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} strokeWidth={2} />
                  <Radar name="Kỹ năng của bạn" dataKey="yours" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* ── SKILL GAPS ─────────────────────────────────────────────────── */}
        {skillGaps.length > 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
            <div className="flex items-center gap-2 mb-5">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg font-bold text-gray-900">Kỹ năng cần bổ sung</h2>
            </div>
            <div className="space-y-3">
              {skillGaps.map((g, i) => (
                <div key={i} className="rounded-xl p-4 bg-amber-50 border border-amber-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm text-amber-900">{g.skill}</span>
                    <span className="text-xs text-amber-700 font-medium">+{g.gap} điểm cần cải thiện</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 w-14">Hiện tại</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-400 h-2 rounded-full transition-all"
                        style={{ width: `${(g.current / g.required) * 100}%` }} />
                    </div>
                    <span className="text-xs text-gray-400 w-14 text-right">Cần: {g.required}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ROADMAP ────────────────────────────────────────────────────── */}
        {career.roadmap.length > 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-bold text-gray-900">Lộ trình học tập chi tiết 📚</h2>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Theo lộ trình này để bước vào ngành <strong>{career.name}</strong> một cách tự tin nhất
            </p>

            <div className="relative">
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400" />
              <div className="space-y-6 pl-14">
                {career.roadmap.map((phase, i) => (
                  <div key={phase.id} className="relative">
                    <div className="absolute -left-[3.25rem] w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
                      style={{ background: `hsl(${220 + i * 40}, 70%, 55%)` }}>
                      {i + 1}
                    </div>
                    <div className="rounded-2xl p-5 border border-blue-100"
                      style={{ background: "linear-gradient(135deg, #f0f9ff, #faf5ff)" }}>
                      <div className="flex items-center justify-between mb-2 gap-2">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="flex-shrink-0 text-xs px-3 py-1 bg-blue-600 text-white rounded-full font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{phase.description}</p>

                      <div className="space-y-2">
                        {phase.courses.map(course => (
                          <div key={course.id}
                            className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100 hover:shadow-sm transition-shadow gap-3">
                            <div className="min-w-0">
                              <p className="font-semibold text-sm text-gray-800 truncate">{course.title}</p>
                              <p className="text-xs text-gray-400">{course.platform}</p>
                            </div>
                            <a href={course.url} target="_blank" rel="noopener noreferrer"
                              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
                              Học ngay <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {totalMonths > 0 && (
              <div className="mt-6 rounded-xl p-4 text-center"
                style={{ background: "linear-gradient(135deg, #f0fdf4, #eff6ff)", border: "2px solid #bbf7d0" }}>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">⏱️ Tổng thời gian ước tính:</span>{" "}
                  <span className="font-bold text-emerald-700">~{totalMonths} tháng</span> để hoàn thành toàn bộ lộ trình
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── CTA BOTTOM ─────────────────────────────────────────────────── */}
        <div className="rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #1e1b4b, #312e81, #4c1d95)" }}>
          <p className="text-3xl mb-3">{enrichment.emoji}</p>
          <h3 className="text-xl font-extrabold text-white mb-2">
            {matchingScore >= 70 ? "Ngành này sinh ra dành cho bạn! 🚀" : "Bạn hoàn toàn có thể chinh phục ngành này! 💪"}
          </h3>
          <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto">
            {surveyCompleted
              ? "Hãy bắt đầu hành trình của bạn ngay hôm nay — mỗi ngày học đều là một bước tiến."
              : "Hoàn thành bài test để nhận phân tích đầy đủ và chính xác hơn cho ngành này."}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => navigate("/dashboard")}
              className="px-6 py-3 bg-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors border border-white/20">
              ← Xem các ngành khác
            </button>
            {!surveyCompleted && (
              <button onClick={() => navigate("/survey")}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-lg">
                Làm tiếp bài test ✨
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
