// src/utils/scoring.ts

// ─── NORMALIZE: bỏ dấu, lowercase, trim ──────────────────────────────────────
const normalize = (str: unknown): string => {
  // Guard: đảm bảo luôn là string dù input là object, number, undefined...
  const safe = typeof str === "string" ? str : String(str ?? "");
  return safe
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
};

// ─── SYNONYM MAP ──────────────────────────────────────────────────────────────
const SYNONYM_MAP: Record<string, string[]> = {
  "lap trinh":  ["code", "coding", "program", "dev", "developer", "software", "phan mem"],
  "toan":       ["toan hoc", "math", "mathematics", "dai so", "giai tich"],
  "vat ly":     ["physics", "co hoc", "dien tu"],
  "hoa hoc":    ["chemistry", "hoa", "chem"],
  "sinh hoc":   ["biology", "bio", "khoa hoc tu nhien"],
  "tieng anh":  ["english", "ngoai ngu", "anh van", "anh ngu"],
  "thiet ke":   ["design", "do hoa", "graphic", "ui", "ux", "ui ux"],
  "sang tao":   ["creative", "creative thinking", "sang kien"],
  "giao tiep":  ["communication", "thuyet trinh", "presentation", "noi chuyen"],
  "quan ly":    ["management", "lanh dao", "leadership", "to chuc"],
  "phan tich":  ["analytics", "analysis", "du lieu", "data", "thong ke"],
  "kinh doanh": ["business", "thuong mai", "mua ban", "ban hang"],
  "marketing":  ["quang cao", "truyen thong", "pr", "brand"],
  "y hoc":      ["bac si", "cham soc suc khoe", "dieu duong", "y te"],
  "luat":       ["luat phap", "phap luat", "tu phap"],
  "am nhac":    ["nhac", "dan", "hat", "music"],
  "ve":         ["ve tranh", "mi thuat", "hoi hoa", "art"],
  "the thao":   ["van dong", "bong da", "boi loi", "gym", "sport"],
  "ky thuat":   ["engineering", "co khi", "dien", "xay dung"],
  "moi truong": ["thien nhien", "sinh thai", "bao ve moi truong"],
  "tam ly":     ["psychology", "tu van", "cam xuc"],
  "giao duc":   ["day hoc", "giao vien", "su pham", "huong dan"],
  "tai chinh":  ["finance", "ke toan", "accounting", "ngan hang", "dau tu"],
};

// ─── FUZZY MATCH: trả về 0.0 → 1.0 ──────────────────────────────────────────
const skillSimilarity = (userSkill: unknown, requiredSkill: unknown): number => {
  const u = normalize(userSkill);
  const r = normalize(requiredSkill);

  if (!u || !r) return 0;
  if (u === r) return 1.0;
  if (u.includes(r) || r.includes(u)) return 0.85;

  for (const [canonical, synonyms] of Object.entries(SYNONYM_MAP)) {
    const allForms = [canonical, ...synonyms];
    const uMatches = allForms.some(f => u.includes(f) || f.includes(u));
    const rMatches = allForms.some(f => r.includes(f) || f.includes(r));
    if (uMatches && rMatches) return 0.8;
  }

  const uWords = u.split(" ").filter(w => w.length > 2);
  const rWords = r.split(" ").filter(w => w.length > 2);
  if (uWords.length > 0 && rWords.length > 0) {
    const shared = uWords.filter(w => rWords.includes(w)).length;
    const ratio = shared / Math.max(uWords.length, rWords.length);
    if (ratio >= 0.5) return 0.65;
  }

  return 0;
};

// ─── EXTRACT TÊN KỸ NĂNG: chấp nhận cả string[] lẫn {name,level}[] ──────────
type SkillInput = string | { name?: unknown; [key: string]: unknown };

const extractSkillNames = (skills: SkillInput[] | null | undefined): string[] => {
  if (!skills || !Array.isArray(skills)) return [];
  return skills
    .map(s => {
      if (typeof s === "string") return s;
      if (typeof s === "object" && s !== null && "name" in s) return String(s.name ?? "");
      return "";
    })
    .filter(Boolean);
};

// ─── HÀM TÍNH ĐIỂM CHÍNH ─────────────────────────────────────────────────────
export const calculateHybridScore = (
  aiScore: number,
  userSkills: SkillInput[] | null | undefined,
  requiredSkills?: Record<string, number>,
  aiWeight: number = 1.0 // Trọng số mặc định: AI chiếm 80%, Kỹ năng chiếm 20%
): number => {
  // 1. Nếu bản thân ngành học đó chưa được định nghĩa kỹ năng yêu cầu, thì đành lấy điểm AI
  if (!requiredSkills || Object.keys(requiredSkills).length === 0) {
    return Math.min(Math.round(aiScore), 100);
  }

  // 2. Trích xuất mảng kỹ năng của người dùng
  const skillNames = extractSkillNames(userSkills);
  const requiredList = Object.keys(requiredSkills);

  // ĐÃ XÓA ĐOẠN IF LÀM THOÁT SỚM Ở ĐÂY.
  // Kể cả khi skillNames.length === 0, hệ thống vẫn sẽ đi tiếp để nhận điểm kỹ năng = 0.

  // 3. Tính điểm kỹ năng người dùng đạt được (Dùng ?? để tránh lỗi Falsy)
  const weightedTotal = requiredList.reduce((total, reqSkill) => {
    const bestMatch = skillNames.reduce((best, userSkill) => {
      const sim = skillSimilarity(userSkill, reqSkill);
      return sim > best ? sim : best;
    }, 0);
    const w = (requiredSkills[reqSkill] ?? 5) / 10;
    return total + bestMatch * w;
  }, 0);

  // 4. Tính tổng trọng số tối đa yêu cầu
  const weightSum = requiredList.reduce(
    (sum, s) => sum + (requiredSkills[s] ?? 5) / 10,
    0
  );

  // 5. Tính % Điểm Kỹ năng 
  // (Nếu người dùng không có kỹ năng nào, weightedTotal = 0 => skillScorePercent = 0)
  let skillScorePercent = 0;
  if (weightSum > 0) {
    skillScorePercent = (weightedTotal / weightSum) * 100;
  }

  // 6. CHỐT ĐIỂM (Công thức Trung bình cộng có trọng số)
  // Ví dụ: AI được 95. Người dùng không có kỹ năng (0đ).
  // Kết quả = (95 * 0.8) + (0 * 0.2) = 76 điểm -> BỊ TỤT XUỐNG ĐÚNG NHƯ BẠN MUỐN!
  const finalScore = (aiScore * aiWeight) + (skillScorePercent * (1 - aiWeight));

  return Math.min(Math.round(finalScore), 100);
};

export { skillSimilarity, normalize };