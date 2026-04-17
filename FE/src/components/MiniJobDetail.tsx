import { careers } from "../data/careers"; // Nhớ import data ngành học

// Hàm tìm ngành sơ bộ dựa trên chữ cái cao điểm nhất
function getPreliminaryCareer(topTrait: string) {
  const traitToMajorMap: Record<string, string> = {
    "R": "electrical engineering", // R -> Thích hợp Kỹ thuật
    "I": "computer science",       // I -> Khoa học máy tính
    "A": "art",                    // A -> Nghệ thuật / Thiết kế
    "S": "psychology",             // S -> Tâm lý học / Xã hội
    "E": "business",               // E -> Kinh doanh / Quản lý
    "C": "accounting"              // C -> Kế toán / Dữ liệu
  };
  
  const targetMajor = traitToMajorMap[topTrait] || "computer science";
  return careers.find(c => c.majorName === targetMajor) || careers[0];
}