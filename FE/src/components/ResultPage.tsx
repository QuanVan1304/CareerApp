import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import {
  ArrowRight, ChevronRight, Loader2, Brain, Sparkles,
  TrendingUp, Users, Lightbulb, Zap, Star, BarChart3
} from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer
} from "recharts";

// ─── Types ────────────────────────────────────────────────────────────────────
interface RIASECScores {
  R_Score: number; I_Score: number; A_Score: number;
  S_Score: number; E_Score: number; C_Score: number;
}

interface BigFive {
  Extraversion: number; Agreeableness: number;
  Conscientiousness: number; EmotionalStability: number; Openness: number;
}

// ─── RIASEC meta ──────────────────────────────────────────────────────────────
const RIASEC_META: Record<string, {
  label: string; short: string; desc: string;
  icon: string; color: string; bg: string; radarLabel: string;
}> = {
  R: { label: "Thực tế", short: "R", radarLabel: "Thực tế (R)",
       desc: "Yêu thích làm việc tay chân, kỹ thuật, chế tạo và thực hành trực tiếp",
       icon: "🔧", color: "#16a34a", bg: "#f0fdf4" },
  I: { label: "Nghiên cứu", short: "I", radarLabel: "Nghiên cứu (I)",
       desc: "Đam mê khám phá, phân tích dữ liệu và giải quyết bài toán phức tạp",
       icon: "🔬", color: "#2563eb", bg: "#eff6ff" },
  A: { label: "Nghệ thuật", short: "A", radarLabel: "Nghệ thuật (A)",
       desc: "Thiên hướng sáng tạo, biểu đạt cảm xúc và tư duy độc đáo",
       icon: "🎨", color: "#9333ea", bg: "#faf5ff" },
  S: { label: "Xã hội", short: "S", radarLabel: "Xã hội (S)",
       desc: "Giỏi lắng nghe, kết nối con người và mong muốn giúp đỡ cộng đồng",
       icon: "🤝", color: "#ea580c", bg: "#fff7ed" },
  E: { label: "Lãnh đạo", short: "E", radarLabel: "Lãnh đạo (E)",
       desc: "Tự tin dẫn dắt, thuyết phục và định hướng mục tiêu cho nhóm",
       icon: "👑", color: "#ca8a04", bg: "#fefce8" },
  C: { label: "Quy củ", short: "C", radarLabel: "Quy củ (C)",
       desc: "Thích trật tự, hệ thống, số liệu và quy trình rõ ràng chính xác",
       icon: "📋", color: "#0891b2", bg: "#ecfeff" },
};

const BIG_FIVE_META: Record<string, {
  label: string; low: string; high: string; icon: string; color: string;
}> = {
  Extraversion:       { label: "Hướng ngoại",     low: "Hướng nội",    high: "Hướng ngoại",   icon: "⚡", color: "#f59e0b" },
  Agreeableness:      { label: "Dễ chịu",          low: "Thẳng thắn",   high: "Ân cần",        icon: "💙", color: "#10b981" },
  Conscientiousness:  { label: "Cẩn thận",          low: "Linh hoạt",    high: "Kỷ luật cao",   icon: "🎯", color: "#6366f1" },
  EmotionalStability: { label: "Ổn định cảm xúc",  low: "Nhạy cảm",     high: "Bình tĩnh",     icon: "🧘", color: "#14b8a6" },
  Openness:           { label: "Cởi mở",            low: "Truyền thống", high: "Sáng tạo cao",  icon: "🌟", color: "#a855f7" },
};

// ─── Personality archetype từ top 2 RIASEC ────────────────────────────────────
const ARCHETYPES: Record<string, { name: string; desc: string; emoji: string; traits: string[] }> = {
  "RI": { name: "Nhà Khoa Học Kỹ Thuật", emoji: "⚗️",
    desc: "Bạn kết hợp tư duy phân tích sắc bén với khả năng ứng dụng thực tiễn xuất sắc.",
    traits: ["Tư duy logic cao", "Giải quyết vấn đề", "Độc lập trong công việc", "Chính xác & tỉ mỉ"] },
  "IR": { name: "Nhà Khoa Học Kỹ Thuật", emoji: "⚗️",
    desc: "Bạn kết hợp tư duy phân tích sắc bén với khả năng ứng dụng thực tiễn xuất sắc.",
    traits: ["Tư duy logic cao", "Giải quyết vấn đề", "Độc lập trong công việc", "Chính xác & tỉ mỉ"] },
  "IA": { name: "Nhà Tư Duy Sáng Tạo", emoji: "🧪",
    desc: "Trí tuệ phân tích kết hợp với trí tưởng tượng phong phú tạo ra những ý tưởng đột phá.",
    traits: ["Tư duy đa chiều", "Nghiên cứu chuyên sâu", "Sáng tạo giải pháp", "Ham học hỏi"] },
  "AI": { name: "Nhà Tư Duy Sáng Tạo", emoji: "🧪",
    desc: "Trí tuệ phân tích kết hợp với trí tưởng tượng phong phú tạo ra những ý tưởng đột phá.",
    traits: ["Tư duy đa chiều", "Nghiên cứu chuyên sâu", "Sáng tạo giải pháp", "Ham học hỏi"] },
  "AS": { name: "Nghệ Sĩ Nhân Văn", emoji: "🎭",
    desc: "Tâm hồn nghệ thuật kết hợp với trái tim nhân ái, bạn tạo ra những giá trị có ý nghĩa cho con người.",
    traits: ["Biểu đạt cảm xúc", "Đồng cảm sâu sắc", "Sáng tạo nội dung", "Kết nối cộng đồng"] },
  "SA": { name: "Nghệ Sĩ Nhân Văn", emoji: "🎭",
    desc: "Tâm hồn nghệ thuật kết hợp với trái tim nhân ái, bạn tạo ra những giá trị có ý nghĩa cho con người.",
    traits: ["Biểu đạt cảm xúc", "Đồng cảm sâu sắc", "Sáng tạo nội dung", "Kết nối cộng đồng"] },
  "SE": { name: "Nhà Lãnh Đạo Nhân Ái", emoji: "🌱",
    desc: "Khả năng lãnh đạo của bạn xuất phát từ sự đồng cảm — bạn dẫn dắt bằng trái tim.",
    traits: ["Lãnh đạo có tâm", "Xây dựng đội nhóm", "Giao tiếp xuất sắc", "Giải quyết xung đột"] },
  "ES": { name: "Nhà Lãnh Đạo Nhân Ái", emoji: "🌱",
    desc: "Khả năng lãnh đạo của bạn xuất phát từ sự đồng cảm — bạn dẫn dắt bằng trái tim.",
    traits: ["Lãnh đạo có tâm", "Xây dựng đội nhóm", "Giao tiếp xuất sắc", "Giải quyết xung đột"] },
  "EC": { name: "Nhà Điều Hành Chiến Lược", emoji: "📈",
    desc: "Bạn kết hợp hoàn hảo giữa tầm nhìn lãnh đạo và tư duy hệ thống — một CEO tiềm năng.",
    traits: ["Tư duy chiến lược", "Ra quyết định nhanh", "Quản lý có hệ thống", "Định hướng kết quả"] },
  "CE": { name: "Nhà Điều Hành Chiến Lược", emoji: "📈",
    desc: "Bạn kết hợp hoàn hảo giữa tầm nhìn lãnh đạo và tư duy hệ thống — một CEO tiềm năng.",
    traits: ["Tư duy chiến lược", "Ra quyết định nhanh", "Quản lý có hệ thống", "Định hướng kết quả"] },
  "RA": { name: "Người Kiến Tạo", emoji: "🏗️",
    desc: "Bàn tay tài hoa kết hợp với tâm hồn nghệ thuật, bạn tạo ra những thứ vừa đẹp vừa hữu dụng.",
    traits: ["Thiết kế & Xây dựng", "Thẩm mỹ thực dụng", "Tư duy không gian", "Chăm chỉ & Sáng tạo"] },
  "AR": { name: "Người Kiến Tạo", emoji: "🏗️",
    desc: "Bàn tay tài hoa kết hợp với tâm hồn nghệ thuật, bạn tạo ra những thứ vừa đẹp vừa hữu dụng.",
    traits: ["Thiết kế & Xây dựng", "Thẩm mỹ thực dụng", "Tư duy không gian", "Chăm chỉ & Sáng tạo"] },
  "IC": { name: "Chuyên Gia Phân Tích", emoji: "📊",
    desc: "Tư duy nghiên cứu kết hợp tính hệ thống tạo nên một chuyên gia đáng tin cậy trong lĩnh vực chuyên môn.",
    traits: ["Phân tích dữ liệu", "Chú trọng chi tiết", "Tư duy khoa học", "Làm việc độc lập"] },
  "CI": { name: "Chuyên Gia Phân Tích", emoji: "📊",
    desc: "Tư duy nghiên cứu kết hợp tính hệ thống tạo nên một chuyên gia đáng tin cậy trong lĩnh vực chuyên môn.",
    traits: ["Phân tích dữ liệu", "Chú trọng chi tiết", "Tư duy khoa học", "Làm việc độc lập"] },
};

function getArchetype(sortedKeys: string[]) {
  const key = sortedKeys[0] + sortedKeys[1];
  return ARCHETYPES[key] || {
    name: "Đa Năng & Linh Hoạt", emoji: "🌈",
    desc: "Bạn sở hữu sự kết hợp tính cách đa chiều, thích nghi tốt với nhiều môi trường và vai trò khác nhau.",
    traits: ["Linh hoạt cao", "Thích nghi nhanh", "Tư duy toàn diện", "Nhiều tiềm năng"]
  };
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimatedBar({ pct, color, delay = 0 }: { pct: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 100 + delay);
    return () => clearTimeout(t);
  }, [pct, delay]);
  return (
    <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
      <div className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, background: color }} />
    </div>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────
function StepDot({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
        done ? "bg-green-500" : active ? "bg-blue-600 ring-4 ring-blue-100" : "bg-gray-200"
      }`} />
      <span className={`text-[10px] hidden sm:block ${active ? "text-blue-600 font-medium" : "text-gray-400"}`}>
        {label}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export function ResultPage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"analyzing" | "reveal" | "bigfive" | "archetype">("analyzing");
  const [analyzeStep, setAnalyzeStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [personalityText, setPersonalityText] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  // Load data from localStorage
  const rawAnswers: Record<string, number> = JSON.parse(localStorage.getItem("userAnswers") || "{}");
  const rawScores: RIASECScores = JSON.parse(localStorage.getItem("riasecPayload") || "{}") as RIASECScores;
  const rawBigFive: BigFive = JSON.parse(localStorage.getItem("bigFivePayload") || "{}") as BigFive;

  // Fallback scores nếu chưa có
  const scores: RIASECScores = rawScores.R_Score !== undefined ? rawScores : {
    R_Score: 16, I_Score: 25, A_Score: 24, S_Score: 18, E_Score: 11, C_Score: 13
  };
  const bigFive: BigFive = rawBigFive.Extraversion !== undefined ? rawBigFive : {
    Extraversion: 4, Agreeableness: 5.5, Conscientiousness: 5, EmotionalStability: 4.5, Openness: 6
  };

  // Sorted RIASEC
  const riasecList = (["R","I","A","S","E","C"] as const).map(k => ({
    key: k,
    score: scores[`${k}_Score` as keyof RIASECScores] as number,
    pct: Math.round(((scores[`${k}_Score` as keyof RIASECScores] as number) / 40) * 100),
    ...RIASEC_META[k],
  })).sort((a, b) => b.score - a.score);

  const sortedKeys = riasecList.map(r => r.key);
  const archetype = getArchetype(sortedKeys);

  // Radar data
  const radarData = riasecList.map(r => ({
    subject: r.radarLabel,
    score: r.score,
    fullMark: 40,
  }));

  // Big Five list
  const bigFiveList = Object.entries(bigFive).map(([k, v]) => ({
    key: k, value: v as number, pct: Math.round(((v as number) / 7) * 100),
    ...BIG_FIVE_META[k],
  }));

  // ── Analyzing animation ──────────────────────────────────────────────────
  const ANALYZE_STEPS = [
    "Đang xử lý 20 câu trả lời...",
    "Tính toán điểm RIASEC...",
    "Phân tích tính cách Big Five...",
    "Xác định hồ sơ cá nhân...",
    "Tổng hợp kết quả...",
  ];

  useEffect(() => {
    if (phase !== "analyzing") return;
    const interval = setInterval(() => {
      setAnalyzeStep(s => {
        if (s >= ANALYZE_STEPS.length - 1) {
          clearInterval(interval);
          setTimeout(() => setPhase("reveal"), 600);
          return s;
        }
        return s + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [phase]);

  // ── Fetch personality insight ────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "reveal") return;
    const fetchInsight = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/insight", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scores, bigFive, answeredCount: 20, isFinal: true }),
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        setPersonalityText(data.insight);
      } catch {
        const top = riasecList[0];
        setPersonalityText(
          `Bạn nổi bật ở nhóm ${top.label} (${top.short}) — ${top.desc.toLowerCase()}. ` +
          `Kết hợp với ${riasecList[1].label} (${riasecList[1].short}), bạn có tiềm năng rất lớn trong những ngành đòi hỏi sự kết hợp giữa ${riasecList[0].label.toLowerCase()} và ${riasecList[1].label.toLowerCase()}.`
        );
      }
    };
    fetchInsight();
  }, [phase]);

  // ── Navigate to phases ───────────────────────────────────────────────────
  const goNext = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
    if (phase === "reveal") setPhase("bigfive");
    else if (phase === "bigfive") setPhase("archetype");
  };

  // ── Submit to dashboard ──────────────────────────────────────────────────
  const handleGoToDashboard = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scores),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      localStorage.setItem("aiPredictions", JSON.stringify(data.predictions));
      localStorage.setItem("surveyIsInterim", "false");
      navigate("/dashboard");
    } catch {
      // Fallback: navigate anyway with empty predictions
      localStorage.setItem("surveyIsInterim", "false");
      navigate("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #fafafa 50%, #f5f0ff 100%)" }}>
      <div ref={topRef} className="max-w-2xl mx-auto px-4 py-8">

        {/* ── Top stepper ───────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {["Khảo sát", "Tính cách", "Big Five", "Chân dung", "Dashboard"].map((label, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <StepDot
                label={label}
                done={
                  i === 0 ||
                  (i === 1 && ["bigfive","archetype"].includes(phase)) ||
                  (i === 2 && phase === "archetype")
                }
                active={
                  (i === 1 && phase === "reveal") ||
                  (i === 2 && phase === "bigfive") ||
                  (i === 3 && phase === "archetype") ||
                  (i === 4 && isSubmitting)
                }
              />
              {i < 4 && <div className="w-6 sm:w-10 h-px bg-gray-200" />}
            </div>
          ))}
        </div>

        {/* ── PHASE: ANALYZING ──────────────────────────────────────────── */}
        {phase === "analyzing" && (
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Đang phân tích kết quả</h1>
            <p className="text-gray-500 text-sm mb-8">AI đang xử lý 20 câu trả lời của bạn...</p>
            <div className="space-y-3 text-left max-w-xs mx-auto">
              {ANALYZE_STEPS.map((step, i) => (
                <div key={i} className={`flex items-center gap-3 text-sm transition-all duration-500 ${
                  i < analyzeStep ? "text-green-600" : i === analyzeStep ? "text-blue-600 font-medium" : "text-gray-300"
                }`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                    i < analyzeStep ? "bg-green-100 text-green-600" :
                    i === analyzeStep ? "bg-blue-100" : "bg-gray-100"
                  }`}>
                    {i < analyzeStep ? "✓" : i === analyzeStep ? <Loader2 className="w-3 h-3 animate-spin text-blue-500" /> : "·"}
                  </div>
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PHASE: RIASEC REVEAL ──────────────────────────────────────── */}
        {phase === "reveal" && (
          <div className="space-y-5 animate-in fade-in duration-500">
            {/* Header card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-white font-bold text-lg">Hồ sơ RIASEC của bạn</h1>
                    <p className="text-blue-100 text-xs">Dựa trên 20 câu trả lời</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Radar chart */}
                <div className="mb-5" style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6b7280" }} />
                      <PolarRadiusAxis domain={[0, 40]} tick={false} axisLine={false} />
                      <Radar name="Điểm" dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.18} strokeWidth={2} dot={{ r: 3, fill: "#6366f1" }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* Bars */}
                <div className="space-y-3">
                  {riasecList.map((item, i) => (
                    <div key={item.key} className="flex items-center gap-3">
                      <span className="text-base w-6 text-center">{item.icon}</span>
                      <div className="w-24 flex-shrink-0">
                        <div className="text-xs font-medium text-gray-700">{item.label}</div>
                        {i === 0 && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full text-white font-medium"
                            style={{ background: item.color }}>★ Nổi bật</span>
                        )}
                      </div>
                      <AnimatedBar pct={item.pct} color={item.color} delay={i * 100} />
                      <span className="text-xs font-bold w-8 text-right" style={{ color: item.color }}>
                        {item.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI insight */}
            {personalityText ? (
              <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-purple-400">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-800">Nhận xét từ AI</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{personalityText}</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow p-5 flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-purple-400 animate-spin flex-shrink-0" />
                <span className="text-sm text-gray-400">AI đang tổng hợp nhận xét...</span>
              </div>
            )}

            {/* Top traits */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" /> 3 tính cách nổi bật nhất
              </h3>
              <div className="space-y-3">
                {riasecList.slice(0, 3).map((item) => (
                  <div key={item.key} className="rounded-xl p-3.5" style={{ background: item.bg }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-sm font-semibold" style={{ color: item.color }}>{item.label}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={goNext}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Xem phân tích tính cách Big Five <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ── PHASE: BIG FIVE ───────────────────────────────────────────── */}
        {phase === "bigfive" && (
          <div className="space-y-5 animate-in fade-in duration-500">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-white font-bold text-lg">Chỉ số Big Five (OCEAN)</h1>
                    <p className="text-emerald-100 text-xs">5 chiều tính cách tâm lý học quốc tế</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {bigFiveList.map((item, i) => (
                  <div key={item.key}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: item.color }}>
                        {item.value.toFixed(1)}/7
                      </span>
                    </div>
                    <AnimatedBar pct={item.pct} color={item.color} delay={i * 120} />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[10px] text-gray-400">{item.low}</span>
                      <span className="text-[10px] font-medium" style={{ color: item.color }}>
                        {item.pct >= 65 ? item.high : item.pct >= 40 ? "Cân bằng" : item.low}
                      </span>
                      <span className="text-[10px] text-gray-400">{item.high}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Big Five insight cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-1">
                <Users className="w-5 h-5 text-blue-500 mb-1" />
                <div className="text-xs font-semibold text-gray-700">Làm việc nhóm</div>
                <div className="text-xs text-gray-500">
                  {bigFive.Agreeableness >= 5 ? "Bạn là người cộng tác tốt, dễ hòa hợp với mọi người." : "Bạn có xu hướng thẳng thắn, phù hợp vai trò phản biện."}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-1">
                <Zap className="w-5 h-5 text-amber-500 mb-1" />
                <div className="text-xs font-semibold text-gray-700">Năng lượng</div>
                <div className="text-xs text-gray-500">
                  {bigFive.Extraversion >= 4.5 ? "Năng động, thích môi trường nhộn nhịp và tiếp xúc nhiều người." : "Hiệu quả hơn khi làm việc trong yên tĩnh và tập trung."}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-1">
                <TrendingUp className="w-5 h-5 text-green-500 mb-1" />
                <div className="text-xs font-semibold text-gray-700">Kỷ luật</div>
                <div className="text-xs text-gray-500">
                  {bigFive.Conscientiousness >= 4.5 ? "Đáng tin cậy, hoàn thành công việc đúng hạn và có tổ chức." : "Linh hoạt, sáng tạo, phù hợp môi trường ít cấu trúc cứng."}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-1">
                <Lightbulb className="w-5 h-5 text-purple-500 mb-1" />
                <div className="text-xs font-semibold text-gray-700">Sáng tạo</div>
                <div className="text-xs text-gray-500">
                  {bigFive.Openness >= 5 ? "Cởi mở, dễ tiếp nhận ý tưởng mới, thích trải nghiệm đa dạng." : "Thực tế, ưa sự ổn định và phương pháp đã được kiểm chứng."}
                </div>
              </div>
            </div>

            <button onClick={goNext}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Xem chân dung tính cách của bạn <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ── PHASE: ARCHETYPE / FINAL ──────────────────────────────────── */}
        {phase === "archetype" && (
          <div className="space-y-5 animate-in fade-in duration-500">
            {/* Archetype hero */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 px-6 py-8 text-center">
                <div className="text-5xl mb-3">{archetype.emoji}</div>
                <div className="text-white/70 text-xs mb-1">Chân dung tính cách của bạn</div>
                <h1 className="text-white font-bold text-2xl mb-3">{archetype.name}</h1>
                <div className="flex justify-center gap-2 flex-wrap">
                  {sortedKeys.slice(0, 3).map(k => (
                    <span key={k} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {RIASEC_META[k].icon} {RIASEC_META[k].label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{archetype.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {archetype.traits.map((trait, i) => (
                    <div key={i} className="flex items-center gap-2 bg-purple-50 rounded-xl p-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      <span className="text-xs text-purple-800 font-medium">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick RIASEC recap */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Điểm mạnh tổng hợp</h3>
              <div className="flex gap-2 flex-wrap">
                {riasecList.map((item) => (
                  <div key={item.key} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: item.bg, color: item.color }}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                    <span className="font-bold">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility note */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border border-blue-100">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">Bước tiếp theo</div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    AI sẽ đối chiếu hồ sơ tính cách của bạn với dữ liệu hàng chục nghìn sinh viên để tìm ra
                    những ngành học có tỉ lệ phù hợp cao nhất. Kết quả sẽ hiển thị đầy đủ ở trang Dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button onClick={handleGoToDashboard} disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-base hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60">
              {isSubmitting
                ? <><Loader2 className="w-5 h-5 animate-spin" /> Đang tải ngành phù hợp...</>
                : <><ArrowRight className="w-5 h-5" /> Xem ngành nghề phù hợp với tôi</>
              }
            </button>

            <p className="text-center text-xs text-gray-400">
              Kết quả được phân tích bởi AI · Dựa trên dữ liệu RIASEC & Big Five
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
