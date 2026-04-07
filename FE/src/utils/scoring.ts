// src/utils/scoring.ts

export const calculateHybridScore = (
  aiScore: number, 
  userSkills: string[] | null, 
  requiredSkills?: Record<string, number>,
  aiWeight: number = 0.7 
): number => {
  // 1. CHỈ giữ nguyên điểm AI nếu bản thân NGÀNH ĐÓ chưa có data yêu cầu kỹ năng
  if (!requiredSkills || Object.keys(requiredSkills).length === 0) {
    return aiScore;
  }

  // 2. Chuyển skills của user thành mảng (nếu không chọn gì thì là mảng rỗng)
  const safeUserSkills = userSkills || [];
  const requiredList = Object.keys(requiredSkills);

  // 3. Đếm số kỹ năng khớp (Nếu mảng rỗng thì sẽ tự động đếm = 0)
  const matchCount = requiredList.filter(skill => safeUserSkills.includes(skill)).length;
  
  // 4. Tính điểm phần kỹ năng
  const skillScore = (matchCount / requiredList.length) * 100;
  
  // 5. Tính trọng số (AI 70% - Kỹ năng 30%)
  const skillWeight = 1 - aiWeight; 
  const finalScore = (aiScore * aiWeight) + (skillScore * skillWeight);

  return Math.min(Math.round(finalScore), 100);
};