import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Plus, ChevronRight, ChevronLeft, Loader2, Sparkles, Brain, Target, ArrowRight, Home } from "lucide-react";
import { personalityQuestions, careers } from "../data/careers";
import { useLocation } from "react-router";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
// Đọc từ biến môi trường Vite. Khi build production, Vercel sẽ inject VITE_API_URL
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

// ─── Types ────────────────────────────────────────────────────────────────────
type SurveyStep = "questions" | "insight" | "personality-result" | "interests";

interface Interest {
  name: string;
  level: number;
}

interface PredictPayload {
  R_Score: number;
  I_Score: number;
  A_Score: number;
  S_Score: number;
  E_Score: number;
  C_Score: number;
  TIPI1: number;
  TIPI2: number;
  TIPI3: number;
  TIPI4: number;
  TIPI5: number;
  TIPI6: number;
  TIPI7: number;
  TIPI8: number;
  TIPI9: number;
  TIPI10: number;
}

// ─── Insight xuất hiện sau câu nào (0-indexed) ───────────────────────────────
const INSIGHT_AFTER: number[] = [4, 9, 14];

// ─── RIASEC trait mapping ─────────────────────────────────────────────────────
const RIASEC_META: Record<string, {
  label: string; short: string; desc: string;
  icon: string; color: string; bg: string; radarLabel: string;
}> = {
  R: { label: "Thực tế", short: "R", radarLabel: "Thực tế (R)", desc: "Yêu thích làm việc tay chân, kỹ thuật, chế tạo và thực hành trực tiếp", icon: "🔧", color: "#16a34a", bg: "#f0fdf4" },
  I: { label: "Nghiên cứu", short: "I", radarLabel: "Nghiên cứu (I)", desc: "Đam mê khám phá, phân tích dữ liệu và giải quyết bài toán phức tạp", icon: "🔬", color: "#2563eb", bg: "#eff6ff" },
  A: { label: "Nghệ thuật", short: "A", radarLabel: "Nghệ thuật (A)", desc: "Thiên hướng sáng tạo, biểu đạt cảm xúc và tư duy độc đáo", icon: "🎨", color: "#9333ea", bg: "#faf5ff" },
  S: { label: "Xã hội", short: "S", radarLabel: "Xã hội (S)", desc: "Giỏi lắng nghe, kết nối con người và mong muốn giúp đỡ cộng đồng", icon: "🤝", color: "#ea580c", bg: "#fff7ed" },
  E: { label: "Lãnh đạo", short: "E", radarLabel: "Lãnh đạo (E)", desc: "Tự tin dẫn dắt, thuyết phục và định hướng mục tiêu cho nhóm", icon: "👑", color: "#ca8a04", bg: "#fefce8" },
  C: { label: "Quy củ", short: "C", radarLabel: "Quy củ (C)", desc: "Thích trật tự, hệ thống, số liệu và quy trình rõ ràng chính xác", icon: "📋", color: "#0891b2", bg: "#ecfeff" },
};

// ─── Tính RIASEC từ answers ───────────────────────────────────────────────────
function calcModelPayload(answers: Record<string, number>): PredictPayload {
  const scoringTable: Record<string, number[]> = {
    R: [8, 11, 16, 21, 27, 32],
    I: [13, 18, 25, 31, 35, 38],
    A: [12, 17, 24, 29, 34, 38],
    S: [18, 23, 28, 33, 36, 40],
    E: [11, 16, 21, 26, 30, 35],
    C: [9, 13, 19, 25, 31, 36]
  };

  const counts: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  Object.entries(answers).forEach(([qid, optIdx]) => {
    const q = personalityQuestions.find(q => q.id === qid);
    if (!q) return;
    const option = q.options[optIdx] as any;
    if (option?.traits && !qid.startsWith("tipi_")) {
      option.traits.forEach((trait: string) => {
        if (counts[trait] !== undefined) counts[trait] += 1;
      });
    }
  });

  const s: PredictPayload = {
    R_Score: scoringTable.R[counts.R],
    I_Score: scoringTable.I[counts.I],
    A_Score: scoringTable.A[counts.A],
    S_Score: scoringTable.S[counts.S],
    E_Score: scoringTable.E[counts.E],
    C_Score: scoringTable.C[counts.C],
    TIPI1: answers["TIPI1"] !== undefined ? answers["TIPI1"] : 4,
    TIPI2: answers["TIPI2"] !== undefined ? answers["TIPI2"] : 4,
    TIPI3: answers["TIPI3"] !== undefined ? answers["TIPI3"] : 4,
    TIPI4: answers["TIPI4"] !== undefined ? answers["TIPI4"] : 4,
    TIPI5: answers["TIPI5"] !== undefined ? answers["TIPI5"] : 4,
    TIPI6: answers["TIPI6"] !== undefined ? answers["TIPI6"] : 4,
    TIPI7: answers["TIPI7"] !== undefined ? answers["TIPI7"] : 4,
    TIPI8: answers["TIPI8"] !== undefined ? answers["TIPI8"] : 4,
    TIPI9: answers["TIPI9"] !== undefined ? answers["TIPI9"] : 4,
    TIPI10: answers["TIPI10"] !== undefined ? answers["TIPI10"] : 4,
  };

  Object.entries(answers).forEach(([qid, optIdx]) => {
    const q = personalityQuestions.find(q => q.id === qid);
    if (!q) return;
    const option = q.options[optIdx] as any;
    if (qid.startsWith("tipi_") && option?.score !== undefined) {
      const tipiNum = qid.split("_")[1];
      const key = `TIPI${tipiNum}` as keyof PredictPayload;
      (s as any)[key] = option.score;
    }
  });

  return s;
}

// ─── TÍNH ĐIỂM BIG FIVE (OCEAN) ───────────────────────────────────────────────
function calcBigFive(payload: PredictPayload) {
  const reverseScore = (score: number) => 8 - score;
  return {
    Extraversion: (payload.TIPI1 + reverseScore(payload.TIPI6)) / 2,
    Agreeableness: (payload.TIPI7 + reverseScore(payload.TIPI2)) / 2,
    Conscientiousness: (payload.TIPI3 + reverseScore(payload.TIPI8)) / 2,
    EmotionalStability: (payload.TIPI9 + reverseScore(payload.TIPI4)) / 2,
    Openness: (payload.TIPI5 + reverseScore(payload.TIPI10)) / 2,
  };
}

// ─── Animated Bar ─────────────────────────────────────────────────────────────
function AnimatedBar({ pct, color, delay = 0 }: { pct: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  useState(() => {
    const t = setTimeout(() => setWidth(pct), 100 + delay);
    return () => clearTimeout(t);
  });
  return (
    <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
      <div className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, background: color }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export function SurveyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isResume = location.state?.resume === true;
  const savedAnswers = JSON.parse(localStorage.getItem("userAnswers") || "{}");
  const answeredCount = Object.keys(savedAnswers).length;

  const [step, setStep] = useState<SurveyStep>("questions");
  const [currentQ, setCurrentQ] = useState(
    isResume && answeredCount < personalityQuestions.length ? answeredCount : 0
  );
  const [answers, setAnswers] = useState<Record<string, number>>(
    isResume ? savedAnswers : {}
  );
  const [insightRoundsShown, setInsightRoundsShown] = useState<Set<number>>(new Set());
  const [insightText, setInsightText] = useState("");
  const [insightLoading, setInsightLoading] = useState(false);
  const [personalityText, setPersonalityText] = useState("");
  const [personalityLoading, setPersonalityLoading] = useState(false);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [newInterest, setNewInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prelimJobs, setPrelimJobs] = useState<any[]>([]);

  const total = personalityQuestions.length;
  const currentAnswered = currentQ + 1;

  const progress =
    step === "questions" || step === "insight" ? (currentAnswered / total) * 70
    : step === "personality-result" ? 82
    : 92;

  const currentPayload = calcModelPayload(answers);
  const riasecSorted = Object.entries(currentPayload)
    .filter(([k]) => k.includes("_Score"))
    .map(([k, v]) => ({
      key: k.replace("_Score", ""),
      score: v as number,
      pct: Math.round(((v as number) / 40) * 100),
      ...RIASEC_META[k.replace("_Score", "")]
    }))
    .sort((a, b) => b.score - a.score);

  // ── Answer ──────────────────────────────────────────────────────────────────
  const handleAnswer = (idx: number) => {
    setAnswers(prev => ({ ...prev, [personalityQuestions[currentQ].id]: idx }));
  };

  // ── Next ────────────────────────────────────────────────────────────────────
  const handleNext = async () => {
    const isLast = currentQ === total - 1;

    if (isLast) {
      setPersonalityLoading(true);
      setStep("personality-result");
      try {
        const payload = calcModelPayload(answers);
        const bigFiveScores = calcBigFive(payload);
        const res = await fetch(`${API_URL}/insight`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            scores: payload,
            bigFive: bigFiveScores,
            answeredCount: total,
            isFinal: true
          }),
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        setPersonalityText(data.insight);

        // Lưu vào localStorage để ResultPage dùng
        localStorage.setItem("riasecPayload", JSON.stringify(payload));
        localStorage.setItem("bigFivePayload", JSON.stringify(bigFiveScores));
        localStorage.setItem("userAnswers", JSON.stringify(answers));
      } catch {
        setPersonalityText(
          "Dựa trên kết quả, bạn có hồ sơ tính cách độc đáo với nhiều tiềm năng phát triển!"
        );
      } finally {
        setPersonalityLoading(false);
      }
      return;
    }

    if (INSIGHT_AFTER.includes(currentQ) && !insightRoundsShown.has(currentQ)) {
      setInsightLoading(true);
      setStep("insight");
      setInsightRoundsShown(prev => new Set([...prev, currentQ]));

      try {
        const payload = calcModelPayload(answers);
        const bigFiveScores = calcBigFive(payload);

        const [insightRes, predictRes] = await Promise.all([
          fetch(`${API_URL}/insight`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              scores: payload,
              bigFive: bigFiveScores,
              answeredCount: currentAnswered,
              isFinal: false
            }),
          }),
          fetch(`${API_URL}/predict`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        ]);

        if (!insightRes.ok || !predictRes.ok) throw new Error("API Error");

        const insightData = await insightRes.json();
        const predictData = await predictRes.json();

        setInsightText(insightData.insight);

        const aiTop3Majors = predictData.predictions.slice(0, 3);
        const matchedJobs = aiTop3Majors.map((aiJob: any) => {
          const foundJob = careers.find(
            c => c.majorName.toLowerCase() === aiJob.major.toLowerCase()
          );
          return foundJob || {
            id: aiJob.major.replace(/\s+/g, '-').toLowerCase(),
            name: aiJob.major,
            description: "AI đang thu thập thêm dữ liệu để phân tích chi tiết ngành này...",
            coreSkills: ["Đang phân tích..."]
          };
        });
        setPrelimJobs(matchedJobs);
      } catch {
        setInsightText("Bạn đang làm rất tốt! Tiếp tục để nhận phân tích chính xác hơn nhé.");
        setPrelimJobs(careers.slice(0, 3));
      } finally {
        setInsightLoading(false);
      }
      return;
    }

    setCurrentQ(q => q + 1);
  };

  const continueFromInsight = () => {
    setStep("questions");
    setCurrentQ(q => q + 1);
  };

  const handleEarlySubmit = async (selectedJob: any) => {
    setIsSubmitting(true);
    localStorage.setItem("userInterests", JSON.stringify(interests));
    localStorage.setItem("userAnswers", JSON.stringify(answers));
    localStorage.setItem("selectedCareerId", selectedJob.id);
    localStorage.setItem("surveyIsInterim", "true");
    const payload = calcModelPayload(answers);
    try {
      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      localStorage.setItem("aiPredictions", JSON.stringify(data.predictions));
      navigate("/dashboard");
    } catch {
      alert("Không thể kết nối Backend AI. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setIsSubmitting(true);
    localStorage.setItem("userInterests", JSON.stringify(interests));
    localStorage.setItem("userAnswers", JSON.stringify(answers));
    localStorage.setItem("surveyIsInterim", "false");
    const payload = calcModelPayload(answers);
    try {
      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      localStorage.setItem("aiPredictions", JSON.stringify(data.predictions));
      navigate("/dashboard");
    } catch {
      alert("Không thể kết nối Backend AI. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addInterest = () => {
    if (!newInterest.trim()) return;
    setInterests(p => [...p, { name: newInterest.trim(), level: 5 }]);
    setNewInterest("");
  };

  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-6">
            <div className="mb-4 flex justify-end">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all text-sm"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Trang chủ</span>
              </button>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-1">Khảo Sát Định Hướng Nghề Nghiệp</h1>
              <p className="text-gray-500 text-sm">AI phân tích tính cách và gợi ý ngành phù hợp</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Câu hỏi</span>
              <span>Phân tích sơ bộ</span>
              <span>Tính cách</span>
              <span>Đánh giá</span>
              <span>Sở thích / Kỹ năng</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* ── QUESTIONS ─────────────────────────────────────────────────── */}
          {step === "questions" && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>Câu {currentQ + 1} / {total}</span>
                <span>{Math.round(((currentQ + 1) / total) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1 mb-6">
                <div
                  className="bg-purple-500 h-1 rounded-full transition-all"
                  style={{ width: `${((currentQ + 1) / total) * 100}%` }}
                />
              </div>

              <h2 className="text-xl font-semibold mb-6 leading-relaxed">
                {personalityQuestions[currentQ].question}
              </h2>

              <div className="space-y-3 mb-8">
                {personalityQuestions[currentQ].options.map((opt, idx) => (
                  <button key={idx} onClick={() => handleAnswer(idx)}
                    className={`w-full p-4 rounded-xl border-2 text-left text-sm transition-all ${
                      answers[personalityQuestions[currentQ].id] === idx
                        ? "border-purple-500 bg-purple-50 text-purple-800"
                        : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                    }`}>
                    {opt.text}
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4 border-t">
                <button
                  onClick={() => currentQ > 0 ? setCurrentQ(q => q - 1) : navigate(-1)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-500 disabled:opacity-30 text-sm"
                >
                  <ChevronLeft className="w-4 h-4" /> Quay lại
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[personalityQuestions[currentQ].id] === undefined}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg disabled:opacity-40 hover:shadow-md transition-all text-sm"
                >
                  {currentQ === total - 1 ? "Xem phân tích tính cách" : "Tiếp tục"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── INSIGHT ──────────────────────────────────────────────────── */}
          {step === "insight" && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">Nhận xét sơ bộ từ AI</h2>
                  <p className="text-xs text-gray-400">Sau {currentQ} câu đầu tiên</p>
                </div>
              </div>

              {insightLoading ? (
                <div className="flex flex-col items-center py-10 gap-3">
                  <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                  <p className="text-gray-400 text-sm">AI đang phân tích câu trả lời...</p>
                </div>
              ) : (
                <>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 mb-5 border border-blue-100">
                    <p className="text-gray-700 leading-relaxed text-sm">{insightText}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-3">Xu hướng tính cách đang nổi lên:</p>
                    <div className="space-y-2">
                      {riasecSorted.slice(0, 3).map(e => (
                        <div key={e.key} className="flex items-center gap-3">
                          <span className="text-xs font-mono text-gray-500 w-6">{e.label}</span>
                          <AnimatedBar pct={e.pct} color={e.color} />
                          <span className="text-xs text-gray-400 w-8 text-right">{e.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top 3 Job Preview */}
                  <div className="mt-6 mb-6 border-t border-dashed border-gray-200 pt-6">
                    <div className="flex justify-between items-end mb-3">
                      <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-500" />
                        Top 3 Ngành phù hợp lúc này:
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {prelimJobs.map((job, index) => (
                        <div
                          key={index}
                          onClick={() => handleEarlySubmit(job)}
                          className="group bg-white border-2 border-gray-100 rounded-xl p-4 shadow-sm hover:border-purple-400 hover:bg-purple-50 hover:shadow-md cursor-pointer transition-all flex flex-col relative overflow-hidden"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 group-hover:bg-purple-600 group-hover:text-white transition-colors text-xs font-bold">
                              {index + 1}
                            </span>
                            <h4 className="font-bold text-blue-700 group-hover:text-purple-700 text-sm leading-tight transition-colors">
                              {job.name}
                            </h4>
                          </div>
                          <p className="text-[11px] text-gray-500 group-hover:text-gray-700 line-clamp-3 mb-3 flex-1 transition-colors">
                            {job.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-auto items-center">
                            {job.coreSkills?.slice(0, 2).map((skill: string, idx: number) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 border border-transparent group-hover:bg-white group-hover:border-purple-200 text-gray-600 text-[9px] rounded font-medium transition-colors">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="absolute -bottom-10 right-2 group-hover:bottom-2 transition-all duration-300 flex items-center gap-1 text-[10px] font-bold text-purple-600">
                            Xem Ngành Học<ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-center text-gray-400 mt-4 italic">
                      *Bạn có thể bấm vào một ngành để dừng sớm và xem lộ trình, HOẶC làm tiếp để kết quả chuẩn xác hơn.
                    </p>
                  </div>

                  <button onClick={continueFromInsight} disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Chưa ưng ý? Trả lời tiếp nhé!"}
                    {!isSubmitting && <ChevronRight className="w-4 h-4" />}
                  </button>
                </>
              )}
            </div>
          )}

          {/* ── PERSONALITY RESULT ────────────────────────────────────────── */}
          {step === "personality-result" && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800">Phân tích tính cách của bạn</h2>
                    <p className="text-xs text-gray-400">Tổng hợp từ {total} câu trả lời</p>
                  </div>
                </div>

                {personalityLoading ? (
                  <div className="flex items-center gap-3 py-6">
                    <Loader2 className="w-6 h-6 text-purple-500 animate-spin flex-shrink-0" />
                    <p className="text-gray-400 text-sm">AI đang tổng hợp hồ sơ tính cách của bạn...</p>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-wrap">
                      {personalityText}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="font-semibold text-gray-800 mb-4">Bảng điểm tính cách RIASEC</h2>
                <div className="space-y-3">
                  {riasecSorted.map((e, i) => (
                    <div key={e.key} className="rounded-xl p-3" style={{ background: e.bg }}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {i === 0 && (
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                              style={{ background: e.color }}>Nổi bật nhất</span>
                          )}
                          <span className="font-semibold text-sm" style={{ color: e.color }}>{e.label}</span>
                        </div>
                        <span className="font-bold text-sm" style={{ color: e.color }}>{e.score}/40</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{e.desc}</p>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="h-2 rounded-full transition-all duration-700"
                          style={{ width: `${e.pct}%`, background: e.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => setStep("interests")}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm">
                Tiếp tục thêm sở thích / kỹ năng <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* ── INTERESTS ─────────────────────────────────────────────────── */}
          {step === "interests" && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Sở thích / Kỹ năng của bạn</h2>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">Không bắt buộc</span>
              </div>
              <p className="text-gray-500 text-sm mb-5">
                Thêm sở thích / kỹ năng để kết quả định hướng chính xác hơn. Bạn có thể bỏ qua.
              </p>

              <div className="flex gap-2 mb-5">
                <input
                  type="text"
                  value={newInterest}
                  onChange={e => setNewInterest(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && addInterest()}
                  placeholder="VD: Lập trình, Vẽ tranh, Âm nhạc..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button onClick={addInterest}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1 text-sm">
                  <Plus className="w-4 h-4" /> Thêm
                </button>
              </div>

              <div className="space-y-3 mb-6">
                {interests.map((s, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">{s.name}</span>
                      <button onClick={() => setInterests(p => p.filter((_, j) => j !== i))}
                        className="text-red-400 hover:text-red-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="range" min="1" max="10" value={s.level}
                        onChange={e => setInterests(p => p.map((x, j) => j === i ? { ...x, level: +e.target.value } : x))}
                        className="flex-1" />
                      <span className="text-sm text-gray-500 w-10 text-center">{s.level}/10</span>
                    </div>
                  </div>
                ))}
                {interests.length === 0 && (
                  <div className="text-center text-gray-400 py-6 border-2 border-dashed border-gray-200 rounded-xl text-sm">
                    Chưa có sở thích. Thêm hoặc nhấn "Xem kết quả" để tiếp tục.
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-4 border-t">
                <button onClick={() => setStep("personality-result")}
                  className="flex items-center gap-2 px-4 py-2 text-gray-500 text-sm">
                  <ChevronLeft className="w-4 h-4" /> Quay lại
                </button>
                <button onClick={handleSubmit} disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg disabled:opacity-50 hover:shadow-md transition-all min-w-[150px] justify-center text-sm">
                  {isSubmitting
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Đang phân tích...</>
                    : <>Xem kết quả ngành <ChevronRight className="w-4 h-4" /></>}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}