export interface SpecificJob {
  id: string
  title: string;       // Tên công việc cụ thể
  description: string; // Mô tả ngắn công việc
}

export interface Career {
  id: string;
  majorName: string; // TÊN NGÀNH TIẾNG ANH (Cực kỳ quan trọng để khớp với AI)
  name: string;      // Tên hiển thị tiếng Việt
  description: string;
  matchingScore: number; // Mặc định là 0, Dashboard sẽ ghi đè số của AI vào đây
  coreSkills: string[];
  requiredSkills: {
    [key: string]: number;
  };
  // salaryRange: string;
  jobOutlook: string;
  universityMajors: string[];
  specificJobs: SpecificJob[]; // Các công việc cụ thể sau khi tốt nghiệp
  roadmap: RoadmapPhase[];
}

export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  duration: string;
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  platform: string;
  url: string;
}
export interface TechStackItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface FunFactItem {
  title: string;
  description: string;
}

export interface ProgressionItem {
  level: string;
  exp: string;
  role: string;
}

export interface SpecificJobDetail {
  title: string;
  parentMajor: string;
  description: string;
  stats: {
    salary: string;
    growth: string;
    environment: string;
  };
  techStack: TechStackItem[];
  funFacts: FunFactItem[];
  progression: ProgressionItem[];
  actionPlan: {
    projects: string[];
    interviewPrep: string;
  };
}
const tipiOptions = [
  { text: "Hoàn toàn đồng ý", score: 7 },
  { text: "Tương đối đồng ý", score: 6 },
  { text: "Hơi đồng ý", score: 5 },
  { text: "Trung lập", score: 4 },
  { text: "Hơi không đồng ý", score: 3 },
  { text: "Tương đối không đồng ý", score: 2 },
  { text: "Hoàn toàn không đồng ý", score: 1 },
];
// ─── DANH SÁCH NGÀNH NGHỀ & LỘ TRÌNH ──────────────────────────────────────────
export const careers: Career[] = [
  {
    id: "computer-science",
    majorName: "computer science",
    name: "Khoa Học Máy Tính / Kỹ Sư Phần Mềm",
    description: "Nghiên cứu về hệ thống máy tính, thuật toán và phát triển phần mềm. Đây là ngành dành cho những người có tư duy logic cao, thích giải quyết vấn đề và đam mê công nghệ.",
    matchingScore: 0,
    coreSkills: ["Lập trình", "Thuật toán", "Tư duy Logic", "Giải quyết vấn đề"],
    requiredSkills: { "Logic": 9, "Toán": 8, "Lập trình": 8, "Phân tích": 9 },
    jobOutlook: "Nhu cầu nhân lực cực kỳ lớn",
    universityMajors: ["Khoa học máy tính", "Kỹ thuật phần mềm", "Trí tuệ nhân tạo"],
    specificJobs: [
      { id: "sw-engineer", title: "Kỹ sư phần mềm (Software Engineer)", description: "Thiết kế, phát triển và bảo trì các ứng dụng web, mobile hoặc hệ thống backend." },
      { id: "ai-ml", title: "Kỹ sư AI / Machine Learning", description: "Xây dựng mô hình học máy, xử lý dữ liệu lớn và triển khai hệ thống AI vào sản phẩm." },
      { id: "devops", title: "Kỹ sư DevOps / Cloud", description: "Quản lý hạ tầng đám mây (AWS, GCP), tự động hóa CI/CD pipeline và đảm bảo hệ thống hoạt động ổn định." },
      { id: "infosec", title: "Chuyên gia An toàn thông tin", description: "Kiểm tra bảo mật, phát hiện lỗ hổng và xây dựng hệ thống phòng thủ cho doanh nghiệp." },
      { id: "data-engineer", title: "Kỹ sư dữ liệu (Data Engineer)", description: "Xây dựng pipeline dữ liệu, quản lý data warehouse phục vụ phân tích và AI." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng CS", description: "Học tư duy lập trình và cấu trúc dữ liệu", duration: "6 tháng", courses: [{ id: "c1", title: "CS50: Introduction to Computer Science", platform: "edX", url: "https://cs50.harvard.edu/" }] }
    ]
  },
  {
    id: "psychology",
    majorName: "psychology",
    name: "Tâm Lý Học",
    description: "Nghiên cứu về tâm trí và hành vi con người. Phù hợp với những bạn có sự thấu cảm (Empathy) cao, thích lắng nghe, phân tích tâm lý và muốn giúp đỡ người khác giải quyết các vấn đề tinh thần.",
    matchingScore: 0,
    coreSkills: ["Thấu cảm", "Lắng nghe tích cực", "Phân tích hành vi", "Giao tiếp"],
    requiredSkills: { "Giao tiếp": 9, "Thấu cảm": 10, "Phân tích": 8, "Lắng nghe": 9 },
    jobOutlook: "Đang phát triển mạnh tại VN",
    universityMajors: ["Tâm lý học", "Tham vấn tâm lý", "Tâm lý học lâm sàng"],
    specificJobs: [
      { id: "psychological-counselor", title: "Chuyên viên tham vấn tâm lý", description: "Lắng nghe, đánh giá và hỗ trợ cá nhân vượt qua lo âu, trầm cảm và các vấn đề tâm lý." },
      { id: "hr-specialist", title: "Chuyên viên nhân sự (HR)", description: "Ứng dụng tâm lý học vào tuyển dụng, đào tạo và xây dựng văn hóa doanh nghiệp." },
      { id: "psychotherapist", title: "Nhà trị liệu tâm lý", description: "Thực hiện các liệu pháp trị liệu (CBT, DBT...) cho bệnh nhân tại bệnh viện hoặc phòng khám tư." },
      { id: "behavioral-researcher", title: "Chuyên viên nghiên cứu hành vi", description: "Thu thập và phân tích dữ liệu hành vi người dùng cho doanh nghiệp hoặc tổ chức nghiên cứu." },
      { id: "school-psychologist", title: "Giáo viên / Chuyên viên tâm lý học đường", description: "Hỗ trợ sức khỏe tinh thần học sinh tại các trường học." },
    ],
    roadmap: [
      { id: "p1", title: "Đại cương Tâm lý", description: "Các học thuyết tâm lý học nền tảng", duration: "1 năm", courses: [{ id: "c1", title: "Introduction to Psychology", platform: "Coursera", url: "https://www.coursera.org/learn/introduction-psychology" }] }
    ]
  },
  {
    id: "business",
    majorName: "business",
    name: "Quản Trị Kinh Doanh",
    description: "Tổ chức, quản lý và điều hành các hoạt động kinh doanh của doanh nghiệp. Đòi hỏi kỹ năng lãnh đạo, tư duy chiến lược, nhạy bén với thị trường và khả năng làm việc với con người xuất sắc.",
    matchingScore: 0,
    coreSkills: ["Lãnh đạo", "Chiến lược", "Đàm phán", "Tài chính cơ bản"],
    requiredSkills: { "Lãnh đạo": 9, "Giao tiếp": 9, "Tư duy chiến lược": 8, "Quản lý thời gian": 8 },
    jobOutlook: "Cơ hội thăng tiến cao",
    universityMajors: ["Quản trị kinh doanh", "Kinh tế quốc tế", "Thương mại"],
    specificJobs: [
      { id: "ceo-coo", title: "Quản lý / Giám đốc điều hành (CEO/COO)", description: "Lãnh đạo và điều phối toàn bộ hoạt động kinh doanh của doanh nghiệp." },
      { id: "bdm", title: "Chuyên viên phát triển kinh doanh (BDM)", description: "Tìm kiếm khách hàng, đối tác và mở rộng thị trường cho công ty." },
      { id: "management-consultant", title: "Chuyên viên tư vấn quản lý (Consultant)", description: "Phân tích vấn đề và đề xuất giải pháp cải thiện hoạt động cho doanh nghiệp." },
      { id: "operations-specialist", title: "Chuyên viên vận hành (Operations)", description: "Tối ưu hóa quy trình nội bộ, quản lý chuỗi cung ứng và hiệu quả sản xuất." },
      { id: "startup-founder", title: "Chủ doanh nghiệp / Startup Founder", description: "Tự khởi nghiệp, xây dựng sản phẩm/dịch vụ và điều hành công ty riêng." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Kinh doanh & Lãnh đạo", description: "Hiểu tổng quan về cách một doanh nghiệp vận hành, từ nhân sự, vận hành đến các nguyên tắc lãnh đạo cơ bản.", duration: "3-4 tháng", courses: [{ id: "c1", title: "Business Foundations", platform: "Coursera (Wharton)", url: "https://www.coursera.org/specializations/wharton-business-foundations" }, { id: "c2", title: "Kỹ năng Lãnh đạo & Quản lý", platform: "YouTube", url: "https://www.youtube.com/results?search_query=k%E1%BB%B9+n%C4%83ng+l%C3%A3nh+%C4%91%E1%BA%A1o+v%C3%A0+qu%E1%BA%A3n+l%C3%BD" }] },
      { id: "p2", title: "Tư duy Chiến lược & Đàm phán", description: "Học cách xây dựng chiến lược cạnh tranh và nghệ thuật giao tiếp, đàm phán trong môi trường kinh doanh B2B/B2C.", duration: "3-5 tháng", courses: [{ id: "c3", title: "Strategic Leadership and Management", platform: "Coursera (UIUC)", url: "https://www.coursera.org/specializations/strategic-leadership" }, { id: "c4", title: "Nghệ thuật Đàm phán Kinh doanh", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ngh%E1%BB%87+thu%E1%BA%ADt+%C4%91%C3%A0m+ph%C3%A1n+kinh+doanh" }] }
    ]
  },
  {
    id: "marketing",
    majorName: "marketing",
    name: "Truyền Thông & Marketing",
    description: "Nghiên cứu thị trường và tìm ra cách truyền tải thông điệp của sản phẩm đến khách hàng. Một ngành năng động, yêu cầu sự kết hợp hoàn hảo giữa tư duy phân tích (Data) và sự sáng tạo (Creative).",
    matchingScore: 0,
    coreSkills: ["Sáng tạo nội dung", "Nghiên cứu thị trường", "SEO/SEM", "Tâm lý khách hàng"],
    requiredSkills: { "Sáng tạo": 9, "Phân tích xu hướng": 8, "Viết lách": 8, "Giao tiếp": 9 },
    jobOutlook: "Luôn khát nhân sự",
    universityMajors: ["Marketing", "Truyền thông đa phương tiện", "Quan hệ công chúng (PR)"],
    specificJobs: [
      { id: "content-creator", title: "Content Creator / Copywriter", description: "Sáng tạo nội dung hấp dẫn cho mạng xã hội, website và các chiến dịch quảng cáo." },
      { id: "digital-marketer", title: "Digital Marketing Specialist", description: "Lên kế hoạch và chạy các chiến dịch quảng cáo trực tuyến (Google Ads, Facebook Ads, TikTok Ads)." },
      { id: "brand-manager", title: "Brand Manager", description: "Quản lý hình ảnh và định vị thương hiệu trên thị trường." },
      { id: "pr-specialist", title: "Chuyên viên PR & Truyền thông", description: "Xây dựng mối quan hệ báo chí, xử lý khủng hoảng truyền thông và tổ chức sự kiện." },
      { id: "market-researcher", title: "Market Research Analyst", description: "Nghiên cứu xu hướng thị trường, phân tích đối thủ cạnh tranh và hành vi người tiêu dùng." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Marketing & Tâm lý Tiêu dùng", description: "Nắm vững các khái niệm cốt lõi của Marketing, hành trình khách hàng và tâm lý học đằng sau các quyết định mua sắm.", duration: "2-4 tháng", courses: [{ id: "c1", title: "Fundamentals of Digital Marketing", platform: "Google Digital Garage", url: "https://skillshop.exceedlms.com/student/collection/654330-digital-marketing" }, { id: "c2", title: "Consumer Behavior / Tâm lý người tiêu dùng", platform: "YouTube", url: "https://www.youtube.com/results?search_query=consumer+behavior+marketing" }] },
      { id: "p2", title: "Thực chiến Content, SEO & Social Media", description: "Học cách viết nội dung thu hút, tối ưu hóa công cụ tìm kiếm và chạy các chiến dịch trên mạng xã hội.", duration: "3-6 tháng", courses: [{ id: "c3", title: "Inbound Marketing Certification", platform: "HubSpot Academy", url: "https://academy.hubspot.com/courses/inbound" }, { id: "c4", title: "Thực hành SEO & Content Marketing", platform: "YouTube", url: "https://www.youtube.com/results?search_query=h%C6%B0%E1%BB%9Bng+d%E1%BA%ABn+seo+t%E1%BB%AB+c%C6%A1+b%E1%BA%A3n" }] }
    ]
  },
  {
    id: "nursing",
    majorName: "nursing",
    name: "Y Tế & Điều Dưỡng",
    description: "Chăm sóc sức khỏe thể chất và tinh thần cho bệnh nhân. Ngành nghề vinh quang đòi hỏi sự cẩn thận cực kỳ cao, sức chịu đựng áp lực tốt và một trái tim nhân ái.",
    matchingScore: 0,
    coreSkills: ["Chăm sóc y tế", "Sơ cứu", "Kiên nhẫn", "Tỉ mỉ"],
    requiredSkills: { "Cẩn thận": 10, "Sức khỏe": 8, "Giao tiếp": 8, "Chịu áp lực": 9 },
    jobOutlook: "Nhu cầu tuyển dụng ổn định",
    universityMajors: ["Điều dưỡng", "Y khoa", "Y tế công cộng"],
    specificJobs: [
      { id: "clinical-nurse", title: "Điều dưỡng lâm sàng", description: "Chăm sóc bệnh nhân nội trú, thực hiện y lệnh và theo dõi tình trạng sức khỏe tại bệnh viện." },
      { id: "community-nurse", title: "Điều dưỡng cộng đồng", description: "Cung cấp dịch vụ y tế và giáo dục sức khỏe cho người dân tại trạm y tế hoặc tại nhà." },
      { id: "public-health", title: "Chuyên viên y tế công cộng", description: "Triển khai các chương trình phòng ngừa dịch bệnh và nâng cao sức khỏe cộng đồng." },
      { id: "specialty-nurse", title: "Điều dưỡng chuyên khoa (ICU, OR, ER)", description: "Làm việc tại các khoa đặc biệt đòi hỏi kỹ năng chuyên sâu như hồi sức cấp cứu, phẫu thuật." },
      { id: "export-nurse", title: "Điều dưỡng xuất khẩu lao động", description: "Làm việc tại các bệnh viện ở Nhật Bản, Đức, Canada với mức thu nhập cao." },
    ],
    roadmap: [
      { id: "p1", title: "Giải phẫu học & Sinh lý học cơ bản", description: "Hiểu về cấu tạo cơ thể người, các hệ cơ quan và cách chúng hoạt động (Anatomy & Physiology).", duration: "4-6 tháng", courses: [{ id: "c1", title: "Health & Medicine - Anatomy", platform: "Khan Academy", url: "https://www.khanacademy.org/science/health-and-medicine" }, { id: "c2", title: "Vital Signs: Understanding What the Body Is Telling Us", platform: "Coursera (University of Pennsylvania)", url: "https://www.coursera.org/learn/vital-signs" }] },
      { id: "p2", title: "Kỹ năng Điều dưỡng lâm sàng & Giao tiếp Y tế", description: "Học các kỹ năng sơ cứu, chăm sóc người bệnh thực tế và thuật ngữ y khoa chuyên ngành.", duration: "3-5 tháng", courses: [{ id: "c3", title: "Clinical Terminology for International Students", platform: "Coursera", url: "https://www.coursera.org/learn/clinical-terminology" }, { id: "c4", title: "Kỹ năng Sơ cứu & Chăm sóc Điều dưỡng", platform: "YouTube", url: "https://www.youtube.com/results?search_query=nursing+skills+fundamentals" }] }
    ]
  },
  {
    id: "accounting",
    majorName: "accounting",
    name: "Kế Toán / Kiểm Toán",
    description: "Thu thập, xử lý, kiểm tra và phân tích thông tin tài chính của tổ chức. Sinh ra dành cho những bạn tỉ mỉ, thích làm việc với những con số, quy tắc và có tính tổ chức (Conventional) cao.",
    matchingScore: 0,
    coreSkills: ["Tin học văn phòng", "Luật thuế", "Phân tích tài chính", "Tính toán"],
    requiredSkills: { "Làm việc với số liệu": 9, "Tỉ mỉ": 10, "Trung thực": 10, "Logic": 8 },
    jobOutlook: "Mọi công ty đều cần",
    universityMajors: ["Kế toán", "Kiểm toán", "Tài chính doanh nghiệp"],
    specificJobs: [
      { id: "corporate-accountant", title: "Kế toán viên doanh nghiệp", description: "Hạch toán, lập báo cáo tài chính và kê khai thuế cho doanh nghiệp." },
      { id: "auditor", title: "Kiểm toán viên (Big4 & Công ty kiểm toán)", description: "Kiểm tra và xác nhận tính trung thực của báo cáo tài chính doanh nghiệp." },
      { id: "cfo", title: "Kế toán trưởng / CFO", description: "Quản lý toàn bộ hoạt động tài chính kế toán và tư vấn chiến lược tài chính." },
      { id: "tax-consultant", title: "Chuyên viên tư vấn thuế", description: "Tư vấn tối ưu hóa nghĩa vụ thuế, lập kế hoạch thuế cho cá nhân và doanh nghiệp." },
      { id: "internal-controller", title: "Chuyên viên kiểm soát nội bộ", description: "Thiết lập và giám sát hệ thống kiểm soát nội bộ để phòng ngừa gian lận tài chính." },
    ],
    roadmap: [
      { id: "p1", title: "Nguyên lý Kế toán & Ghi chép Sổ sách", description: "Nắm vững nguyên lý kế toán kép, các loại tài khoản và cách lập báo cáo tài chính cơ bản.", duration: "3-4 tháng", courses: [{ id: "c1", title: "Financial Accounting Fundamentals", platform: "Coursera (University of Virginia)", url: "https://www.coursera.org/learn/uva-darden-financial-accounting" }, { id: "c2", title: "Nguyên lý Kế toán (Cho người mới bắt đầu)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=nguy%C3%AAn+l%C3%BD+k%E1%BA%BF+to%C3%A1n" }] },
      { id: "p2", title: "Phần mềm Kế toán & Kiểm toán nội bộ", description: "Ứng dụng Excel nâng cao vào kế toán, tìm hiểu quy định về Thuế và nền tảng Kiểm toán.", duration: "3-6 tháng", courses: [{ id: "c3", title: "Auditing I: Conceptual Foundations", platform: "Coursera (UIUC)", url: "https://www.coursera.org/learn/auditing-part1-conceptual-foundations" }, { id: "c4", title: "Excel ứng dụng trong Kế toán", platform: "YouTube", url: "https://www.youtube.com/results?search_query=excel+cho+k%E1%BA%BF+to%C3%A1n" }] }
    ]
  },
  {
    id: "information-technology",
    majorName: "information technology",
    name: "Công Nghệ Thông Tin",
    description: "Quản lý, vận hành và bảo mật hệ thống mạng, cơ sở dữ liệu. Khác với Kỹ sư phần mềm, ngành này thiên về tư duy hệ thống, xử lý sự cố phần cứng/mạng và phù hợp với những bạn thích cấu hình thiết bị, bảo mật dữ liệu.",
    matchingScore: 0,
    coreSkills: ["Quản trị mạng", "Bảo mật", "Hỗ trợ kỹ thuật", "Phân tích hệ thống"],
    requiredSkills: { "Giải quyết vấn đề": 9, "Tư duy hệ thống": 8, "Cẩn thận": 8, "Thích ứng nhanh": 9 },
    jobOutlook: "Cơ hội việc làm đa dạng ở mọi lĩnh vực",
    universityMajors: ["Công nghệ thông tin", "An toàn thông tin", "Hệ thống thông tin quản lý"],
    specificJobs: [
      { id: "sysadmin", title: "Quản trị hệ thống / Mạng", description: "Vận hành, cấu hình và bảo trì hệ thống máy chủ, mạng nội bộ của tổ chức." },
      { id: "cybersecurity", title: "Chuyên gia an ninh mạng (Cybersecurity)", description: "Bảo vệ hệ thống khỏi tấn công mạng, kiểm tra thâm nhập (pentest) và ứng phó sự cố." },
      { id: "dba", title: "Database Administrator (DBA)", description: "Quản lý, tối ưu hóa và bảo mật cơ sở dữ liệu cho doanh nghiệp." },
      { id: "it-support", title: "IT Support / Helpdesk", description: "Hỗ trợ kỹ thuật người dùng, xử lý sự cố phần cứng và phần mềm." },
      { id: "cloud-architect", title: "Cloud Solutions Architect", description: "Thiết kế và triển khai kiến trúc hệ thống trên nền tảng đám mây (AWS, Azure, GCP)." },
    ],
    roadmap: [
      { id: "p1", title: "Căn bản về IT & Mạng", description: "Hiểu về cách máy tính giao tiếp và hoạt động cơ bản", duration: "3 tháng", courses: [{ id: "c1", title: "Google IT Support Professional Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-it-support" }] }
    ]
  },
  {
    id: "chemical-engineering",
    majorName: "chemical engineering",
    name: "Kỹ Thuật Hóa Học / Kỹ Sư Hóa",
    description: "Ứng dụng kiến thức Hóa, Lý và Toán để biến các nguyên liệu thô thành những sản phẩm thiết yếu hàng ngày (mỹ phẩm, thực phẩm, thuốc, năng lượng). Rất phù hợp với những bạn yêu thích khoa học tự nhiên, đam mê làm thí nghiệm (nhóm Investigative) và thích thực hành chế tạo (nhóm Realistic).",
    matchingScore: 0,
    coreSkills: ["Nghiên cứu & Phát triển (R&D)", "Phân tích hóa học", "Vận hành dây chuyền", "Kiểm soát chất lượng (QC/QA)"],
    requiredSkills: { "Hóa học": 10, "Tư duy logic": 8, "Cẩn thận tỉ mỉ": 9, "Thực hành tay chân": 8 },
    jobOutlook: "Nhu cầu cao, thu nhập tốt trong các tập đoàn sản xuất, FMCG",
    universityMajors: ["Kỹ thuật hóa học", "Công nghệ kỹ thuật hóa học", "Hóa dược", "Công nghệ thực phẩm"],
    specificJobs: [
      { id: "rnd-engineer", title: "Kỹ sư nghiên cứu & Phát triển (R&D)", description: "Nghiên cứu công thức, cải tiến sản phẩm mới trong ngành mỹ phẩm, thực phẩm, dược phẩm." },
      { id: "qc-engineer", title: "Kỹ sư kiểm soát chất lượng (QC/QA)", description: "Kiểm tra, đảm bảo chất lượng nguyên liệu và thành phẩm đạt tiêu chuẩn quy định." },
      { id: "process-engineer", title: "Kỹ sư vận hành dây chuyền sản xuất", description: "Giám sát và tối ưu hóa quy trình sản xuất hóa chất, thực phẩm, dầu khí." },
      { id: "hse-specialist", title: "Chuyên viên an toàn môi trường (HSE)", description: "Đảm bảo hoạt động nhà máy tuân thủ tiêu chuẩn an toàn và bảo vệ môi trường." },
      { id: "renewable-energy", title: "Kỹ sư năng lượng tái tạo", description: "Nghiên cứu ứng dụng vật liệu hóa học cho pin năng lượng mặt trời, nhiên liệu sinh học." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Hóa học & Khám phá Kỹ thuật", description: "Ôn tập kiến thức Hóa học cốt lõi và tìm hiểu cách các nhà máy vận hành quy trình sản xuất.", duration: "3-6 tháng", courses: [{ id: "c1", title: "College Chemistry (Hóa học Đại cương)", platform: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry" }, { id: "c2", title: "Introduction to Chemical Engineering", platform: "Coursera", url: "https://www.coursera.org/learn/materials-science" }] }
    ]
  },
  {
    id: "architecture",
    majorName: "architecture",
    name: "Kiến Trúc & Thiết Kế",
    description: "Kết hợp giữa nghệ thuật và kỹ thuật để thiết kế không gian, công trình. Dành cho những người có óc thẩm mỹ (Artistic) cao, tư duy không gian tốt và khả năng sáng tạo vượt ra khỏi những khuôn khổ thông thường.",
    matchingScore: 0,
    coreSkills: ["Vẽ kỹ thuật", "Tư duy không gian", "Sử dụng phần mềm 3D", "Quy hoạch"],
    requiredSkills: { "Sáng tạo": 10, "Thẩm mỹ": 9, "Chịu áp lực": 8, "Chi tiết": 8 },
    jobOutlook: "Nhu cầu ổn định trong ngành xây dựng",
    universityMajors: ["Kiến trúc", "Thiết kế nội thất", "Quy hoạch đô thị"],
    specificJobs: [
      { id: "design-architect", title: "Kiến trúc sư thiết kế", description: "Lên ý tưởng và thiết kế công trình nhà ở, thương mại, văn phòng theo yêu cầu chủ đầu tư." },
      { id: "interior-architect", title: "Kiến trúc sư nội thất", description: "Thiết kế không gian nội thất đẹp, công năng và phù hợp phong cách của gia chủ." },
      { id: "bim-engineer", title: "Kỹ sư BIM (Building Information Modeling)", description: "Xây dựng mô hình 3D công trình và quản lý thông tin dự án bằng phần mềm BIM." },
      { id: "urban-planner", title: "Chuyên gia quy hoạch đô thị", description: "Lập kế hoạch phát triển không gian đô thị, hạ tầng giao thông và khu dân cư." },
      { id: "construction-supervisor", title: "Giám sát thi công & Quản lý dự án", description: "Kiểm tra tiến độ, chất lượng xây dựng và đảm bảo công trình thực hiện đúng thiết kế." },
    ],
    roadmap: [
      { id: "p1", title: "Khai mở tư duy thẩm mỹ & Lịch sử", description: "Xây dựng nền tảng về nghệ thuật, không gian và tìm hiểu các phong cách kiến trúc vĩ đại.", duration: "2-3 tháng", courses: [{ id: "c1", title: "Fundamentals of Graphic Design", platform: "Coursera", url: "https://www.coursera.org/learn/fundamentals-of-graphic-design" }, { id: "c2", title: "Roman Architecture", platform: "Coursera (Yale University)", url: "https://www.coursera.org/learn/roman-architecture" }] },
      { id: "p2", title: "Rèn luyện công cụ & Kỹ thuật Thiết kế 3D", description: "Học cách sử dụng các phần mềm thiết kế chuyên dụng để hiện thực hóa ý tưởng.", duration: "3-6 tháng", courses: [{ id: "c3", title: "Làm quen SketchUp & AutoCAD", platform: "YouTube", url: "https://www.youtube.com/results?search_query=sketchup+tutorial+for+beginners" }, { id: "c4", title: "Kỹ năng Diễn họa Kiến trúc", platform: "Show It Better", url: "https://www.youtube.com/c/ShowItBetter" }] }
    ]
  },
  {
    id: "education",
    majorName: "education",
    name: "Giáo Dục & Sư Phạm",
    description: "Truyền đạt kiến thức, định hướng và phát triển thế hệ trẻ. Ngành nghề đòi hỏi sự kiên nhẫn, kỹ năng sư phạm xuất sắc và tính cách thích kết nối, đam mê học tập suốt đời (Social).",
    matchingScore: 0,
    coreSkills: ["Sư phạm", "Truyền đạt", "Thiết kế bài giảng", "Tâm lý giáo dục"],
    requiredSkills: { "Giao tiếp": 10, "Kiên nhẫn": 10, "Đồng cảm": 9, "Sáng tạo": 7 },
    jobOutlook: "Nghề nghiệp bền vững, ý nghĩa xã hội cao",
    universityMajors: ["Sư phạm Tiếng Anh", "Giáo dục mầm non", "Sư phạm Toán học"],
    specificJobs: [
      { id: "teacher", title: "Giáo viên phổ thông / Đại học", description: "Giảng dạy kiến thức chuyên môn và hướng dẫn học sinh/sinh viên phát triển toàn diện." },
      { id: "language-teacher", title: "Giáo viên trung tâm ngoại ngữ / kỹ năng", description: "Giảng dạy tại các trung tâm tư nhân (Anh văn, kỹ năng mềm, STEM...)." },
      { id: "instructional-designer", title: "Chuyên viên thiết kế chương trình (Instructional Designer)", description: "Xây dựng nội dung và phương pháp giảng dạy cho khóa học trực tuyến (E-learning)." },
      { id: "principal", title: "Quản lý giáo dục / Hiệu trưởng", description: "Điều hành hoạt động của trường học hoặc trung tâm đào tạo." },
      { id: "online-tutor", title: "Giáo viên/Gia sư trực tuyến (Online Tutor)", description: "Giảng dạy qua nền tảng online trong nước và quốc tế, thu nhập linh hoạt." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Sư phạm & Tâm lý học", description: "Hiểu về quá trình học tập của con người và các phương pháp truyền đạt kiến thức hiệu quả.", duration: "2-4 tháng", courses: [{ id: "c1", title: "Foundations of Teaching for Learning", platform: "Coursera", url: "https://www.coursera.org/learn/foundations-of-teaching" }, { id: "c2", title: "Tâm lý học Giáo dục cơ bản", platform: "YouTube", url: "https://www.youtube.com/results?search_query=educational+psychology" }] },
      { id: "p2", title: "Công cụ giảng dạy hiện đại", description: "Ứng dụng công nghệ vào việc thiết kế bài giảng và tăng cường tương tác trong lớp học.", duration: "2-3 tháng", courses: [{ id: "c3", title: "Practical Teaching with Technology", platform: "Coursera", url: "https://www.coursera.org/learn/get-interactive-practical-teaching-with-technology" }, { id: "c4", title: "Kỹ năng thiết kế Slide & Presentation", platform: "YouTube", url: "https://www.youtube.com/results?search_query=powerpoint+presentation+design+tutorial" }] }
    ]
  },
  {
    id: "law",
    majorName: "law",
    name: "Luật & Pháp Lý",
    description: "Nghiên cứu, tư vấn và áp dụng pháp luật để bảo vệ quyền lợi cá nhân hoặc tổ chức. Cần có tư duy phản biện xuất sắc, khả năng đọc hiểu khối lượng tài liệu lớn và tính cách quyết đoán (Enterprising).",
    matchingScore: 0,
    coreSkills: ["Tra cứu luật", "Tranh tụng", "Soạn thảo văn bản", "Tư duy logic"],
    requiredSkills: { "Tư duy phản biện": 10, "Tranh luận": 9, "Đọc hiểu": 9, "Ghi nhớ": 8 },
    jobOutlook: "Lộ trình thăng tiến rõ ràng, danh giá",
    universityMajors: ["Luật kinh tế", "Luật quốc tế", "Luật dân sự"],
    specificJobs: [
      { id: "litigation-lawyer", title: "Luật sư tranh tụng", description: "Đại diện và bảo vệ quyền lợi khách hàng tại tòa án trong các vụ án dân sự, hình sự, kinh tế." },
      { id: "in-house-counsel", title: "Chuyên viên pháp chế doanh nghiệp (In-house Counsel)", description: "Tư vấn pháp lý nội bộ, soạn thảo hợp đồng và đảm bảo tuân thủ pháp luật cho công ty." },
      { id: "notary", title: "Công chứng viên / Thừa phát lại", description: "Xác nhận tính pháp lý các giao dịch dân sự như mua bán bất động sản, thừa kế." },
      { id: "bank-legal", title: "Chuyên viên pháp lý ngân hàng", description: "Quản lý hồ sơ pháp lý tín dụng, thẩm định tài sản đảm bảo và xử lý nợ xấu." },
      { id: "judge-prosecutor", title: "Thẩm phán / Kiểm sát viên / Điều tra viên", description: "Làm việc trong hệ thống tư pháp nhà nước tại tòa án, viện kiểm sát hoặc cơ quan điều tra." },
    ],
    roadmap: [
      { id: "p1", title: "Tư duy Phản biện & Triết lý Luật pháp", description: "Làm quen với các khái niệm luật học, cách tư duy logic và các nguyên tắc công lý cơ bản.", duration: "3-5 tháng", courses: [{ id: "c1", title: "Justice", platform: "edX (Harvard University)", url: "https://www.edx.org/course/justice" }, { id: "c2", title: "An Introduction to American Law", platform: "Coursera", url: "https://www.coursera.org/learn/american-law" }] },
      { id: "p2", title: "Kỹ năng tranh luận & Luật chuyên ngành", description: "Phát triển kỹ năng đàm phán, tranh tụng và tìm hiểu về các bộ luật kinh tế, doanh nghiệp.", duration: "3-6 tháng", courses: [{ id: "c3", title: "Successful Negotiation: Essential Strategies", platform: "Coursera (University of Michigan)", url: "https://www.coursera.org/learn/negotiation-skills" }, { id: "c4", title: "Kiến thức Luật Doanh Nghiệp căn bản", platform: "YouTube", url: "https://www.youtube.com/results?search_query=lu%E1%BA%ADt+doanh+nghi%E1%BB%87p+c%C6%A1+b%E1%BA%A3n" }] }
    ]
  },
  {
    id: "finance",
    majorName: "finance",
    name: "Tài Chính & Đầu Tư",
    description: "Quản lý dòng tiền, định giá tài sản và phân tích đầu tư. Dành cho người có đầu óc tính toán nhạy bén, đam mê tìm hiểu sự biến động của kinh tế vĩ mô và có khả năng quản trị rủi ro tốt.",
    matchingScore: 0,
    coreSkills: ["Phân tích dữ liệu", "Quản trị rủi ro", "Đầu tư", "Mô hình tài chính"],
    requiredSkills: { "Tư duy phân tích": 9, "Làm việc với số": 9, "Quyết đoán": 8, "Nhạy bén": 8 },
    jobOutlook: "Thu nhập hấp dẫn, tính cạnh tranh cao",
    universityMajors: ["Tài chính ngân hàng", "Toán tài chính", "Kinh tế quốc tế"],
    specificJobs: [
      { id: "investment-analyst", title: "Chuyên viên phân tích đầu tư (Investment Analyst)", description: "Nghiên cứu cổ phiếu, trái phiếu, bất động sản để đưa ra khuyến nghị đầu tư." },
      { id: "fund-manager", title: "Quản lý quỹ đầu tư (Fund Manager)", description: "Quản lý danh mục tài sản của quỹ, tối ưu hóa lợi nhuận và kiểm soát rủi ro." },
      { id: "relationship-manager", title: "Chuyên viên ngân hàng (Relationship Manager)", description: "Tư vấn sản phẩm tài chính, quản lý mối quan hệ với khách hàng cá nhân và doanh nghiệp." },
      { id: "corporate-finance", title: "Chuyên viên tài chính doanh nghiệp (Corporate Finance)", description: "Lập kế hoạch tài chính, cấu trúc vốn và hỗ trợ các thương vụ M&A." },
      { id: "risk-manager", title: "Chuyên gia quản trị rủi ro (Risk Manager)", description: "Nhận diện, đo lường và kiểm soát các rủi ro tài chính trong ngân hàng và bảo hiểm." },
    ],
    roadmap: [
      { id: "p1", title: "Thị trường Tài chính & Kinh tế vĩ mô", description: "Nắm vững cách dòng tiền vận hành trong nền kinh tế và các nguyên tắc tài chính doanh nghiệp.", duration: "3-4 tháng", courses: [{ id: "c1", title: "Financial Markets", platform: "Coursera (Yale University)", url: "https://www.coursera.org/learn/financial-markets-global" }, { id: "c2", title: "Corporate Finance Fundamentals", platform: "CFI", url: "https://corporatefinanceinstitute.com/collections/corporate-finance-fundamentals/" }] },
      { id: "p2", title: "Phân tích Dữ liệu & Báo cáo Tài chính", description: "Học cách đọc hiểu báo cáo tài chính và sử dụng Excel để xây dựng các mô hình định giá.", duration: "3-5 tháng", courses: [{ id: "c3", title: "Excel Skills for Business Specialization", platform: "Coursera (Macquarie University)", url: "https://www.coursera.org/specializations/excel" }, { id: "c4", title: "Hướng dẫn đọc hiểu Báo cáo tài chính", platform: "YouTube", url: "https://www.youtube.com/results?search_query=%C4%91%E1%BB%8Dc+hi%E1%BB%83u+b%C3%A1o+c%C3%A1o+t%C3%A0i+ch%C3%ADnh" }] }
    ]
  },
  {
    id: "engineering",
    majorName: "engineering",
    name: "Kỹ Thuật Cốt Lõi (Cơ/Điện)",
    description: "Nghiên cứu, thiết kế và chế tạo máy móc, hệ thống điện tử. Một ngành thực tế (Realistic), yêu cầu khả năng áp dụng lý thuyết toán/lý vào việc giải quyết các bài toán vật lý trong đời sống.",
    matchingScore: 0,
    coreSkills: ["Thiết kế cơ điện", "Vận hành máy", "Bảo trì", "Vẽ kỹ thuật CAD"],
    requiredSkills: { "Giải quyết vấn đề": 9, "Toán": 8,  "Lý": 8, "Cẩn thận": 8 },
    jobOutlook: "Trụ cột không thể thiếu của nền công nghiệp",
    universityMajors: ["Kỹ thuật cơ khí", "Kỹ thuật điện - điện tử", "Kỹ thuật tự động hóa"],
    specificJobs: [
      { id: "mep-engineer", title: "Kỹ sư thiết kế cơ điện", description: "Thiết kế, tính toán kết cấu máy móc, hệ thống điện cho nhà máy và công trình." },
      { id: "plc-engineer", title: "Kỹ sư tự động hóa / PLC", description: "Lập trình PLC, SCADA, điều khiển robot và hệ thống tự động trong dây chuyền sản xuất." },
      { id: "maintenance-engineer", title: "Kỹ sư bảo trì thiết bị (Maintenance Engineer)", description: "Lên kế hoạch và thực hiện bảo dưỡng định kỳ, sửa chữa thiết bị máy móc công nghiệp." },
      { id: "project-engineer", title: "Kỹ sư dự án (Project Engineer)", description: "Quản lý tiến độ, ngân sách và chất lượng kỹ thuật cho các dự án xây lắp cơ điện." },
      { id: "renewable-energy-eng", title: "Kỹ sư năng lượng tái tạo", description: "Thiết kế và vận hành hệ thống điện mặt trời, điện gió, thủy điện nhỏ." },
    ],
    roadmap: [
      { id: "p1", title: "Tư duy Kỹ thuật & Vật lý ứng dụng", description: "Xây dựng nền tảng vững chắc về Cơ học, Điện học và làm quen với công cụ thiết kế mô phỏng (CAD/Mạch điện) dành cho người mới bắt đầu.", duration: "3-6 tháng", courses: [{ id: "c1", title: "Electrical Engineering (Kỹ thuật Điện cơ bản)", platform: "Khan Academy", url: "https://www.khanacademy.org/science/electrical-engineering" }, { id: "c2", title: "Làm quen thiết kế 3D & Mạch điện ảo (Tinkercad)", platform: "Autodesk", url: "https://www.tinkercad.com/" }, { id: "c3", title: "Introduction to Engineering Mechanics (Cơ học kỹ thuật)", platform: "Coursera", url: "https://www.coursera.org/learn/engineering-mechanics-statics" }] }
    ]
  },
  {
    id: "medicine",
    majorName: "medicine",
    name: "Y Khoa & Bác Sĩ",
    description: "Nghiên cứu, chẩn đoán và điều trị bệnh tật để bảo vệ sức khỏe con người. Đòi hỏi sự tận tâm, khả năng học hỏi suốt đời, sự cẩn trọng tuyệt đối và khả năng chịu được áp lực cực kỳ cao.",
    matchingScore: 0,
    coreSkills: ["Chẩn đoán", "Giải phẫu", "Dược lý", "Giao tiếp y khoa"],
    requiredSkills: { "Chịu áp lực": 10, "Trí nhớ": 9, "Giao tiếp": 8, "Giải quyết vấn đề": 9 },
    jobOutlook: "Nhu cầu luôn cao, thu nhập thuộc top đầu",
    universityMajors: ["Y đa khoa", "Răng hàm mặt", "Y học cổ truyền"],
    specificJobs: [
      { id: "general-doctor", title: "Bác sĩ đa khoa / Chuyên khoa", description: "Thăm khám, chẩn đoán và điều trị bệnh tại bệnh viện công, phòng khám tư hoặc phòng mạch riêng." },
      { id: "surgeon", title: "Bác sĩ phẫu thuật", description: "Thực hiện các ca phẫu thuật nội soi, mở bụng, chỉnh hình... tại phòng mổ bệnh viện." },
      { id: "medical-researcher", title: "Nghiên cứu viên y học / Dược học", description: "Nghiên cứu phát triển thuốc mới, vaccine và phương pháp điều trị tại viện nghiên cứu." },
      { id: "public-health-doctor", title: "Bác sĩ y tế công cộng", description: "Xây dựng và triển khai chương trình phòng chống dịch bệnh, sức khỏe cộng đồng." },
      { id: "export-doctor", title: "Bác sĩ xuất khẩu lao động", description: "Làm việc tại bệnh viện nước ngoài (Mỹ, Úc, Đức) với thu nhập $150,000–$400,000/năm." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Cơ thể người & Giải phẫu", description: "Khám phá cấu trúc, chức năng của các hệ cơ quan trong cơ thể người từ góc độ sinh học.", duration: "3-6 tháng", courses: [{ id: "c1", title: "Anatomy Specialization", platform: "Coursera (University of Michigan)", url: "https://www.coursera.org/specializations/anatomy" }, { id: "c2", title: "Crash Course Anatomy & Physiology", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8" }] },
      { id: "p2", title: "Dấu hiệu sinh tồn & Thuật ngữ Lâm sàng", description: "Làm quen với các chỉ số sức khỏe cơ bản và cách giao tiếp chuẩn mực trong môi trường y khoa.", duration: "2-4 tháng", courses: [{ id: "c3", title: "Vital Signs: Understanding What the Body Is Telling Us", platform: "Coursera (University of Pennsylvania)", url: "https://www.coursera.org/learn/vital-signs" }, { id: "c4", title: "Clinical Terminology for International and U.S. Students", platform: "Coursera (University of Pittsburgh)", url: "https://www.coursera.org/learn/clinical-terminology" }] }
    ]
  },
  {
    id: "economics",
    majorName: "economics",
    name: "Kinh Tế Học",
    description: "Nghiên cứu cách thức xã hội sản xuất, phân phối và tiêu dùng tài nguyên. Đòi hỏi khả năng phân tích bức tranh vĩ mô, tư duy logic nhạy bén và kỹ năng làm việc với các mô hình toán học phức tạp.",
    matchingScore: 0,
    coreSkills: ["Phân tích dữ liệu", "Kinh tế vĩ mô/vi mô", "Mô hình hóa", "Nghiên cứu"],
    requiredSkills: { "Phân tích": 10, "Toán học": 8, "Tư duy logic": 9, "Nghiên cứu": 8 },
    jobOutlook: "Cơ hội tốt ở các viện nghiên cứu, tập đoàn đa quốc gia",
    universityMajors: ["Kinh tế học", "Kinh tế quốc tế", "Kinh tế phát triển"],
    specificJobs: [
      { id: "economic-researcher", title: "Chuyên viên nghiên cứu kinh tế", description: "Phân tích kinh tế vĩ mô, dự báo thị trường và viết báo cáo nghiên cứu cho tổ chức tài chính." },
      { id: "policy-advisor", title: "Chuyên gia tư vấn chính sách", description: "Đề xuất và phân tích tác động của các chính sách kinh tế cho chính phủ hoặc tổ chức quốc tế." },
      { id: "industry-analyst", title: "Chuyên viên phân tích ngành (Industry Analyst)", description: "Nghiên cứu xu hướng ngành, đối thủ và cơ hội thị trường cho doanh nghiệp." },
      { id: "econometrician", title: "Chuyên gia kinh tế lượng / Mô hình hóa", description: "Xây dựng mô hình toán kinh tế dự báo tăng trưởng, lạm phát, rủi ro thị trường." },
      { id: "intl-org-specialist", title: "Chuyên viên tổ chức quốc tế (IMF, WB, ADB)", description: "Làm việc tại các tổ chức tài chính quốc tế về chính sách phát triển kinh tế." },
    ],
    roadmap: [
      { id: "p1", title: "Kinh tế Vĩ mô & Vi mô cốt lõi", description: "Nắm vững cung cầu, lạm phát, và cách các cá nhân cũng như quốc gia đưa ra quyết định tài chính.", duration: "3-5 tháng", courses: [{ id: "c1", title: "Microeconomics Principles", platform: "Coursera (University of Illinois)", url: "https://www.coursera.org/learn/microeconomics" }, { id: "c2", title: "Crash Course Economics", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO" }] },
      { id: "p2", title: "Kinh tế lượng & Phân tích Dữ liệu", description: "Học cách dùng dữ liệu thống kê để chứng minh các lý thuyết và dự báo xu hướng kinh tế.", duration: "3-6 tháng", courses: [{ id: "c3", title: "Econometrics: Methods and Applications", platform: "Coursera (Erasmus University Rotterdam)", url: "https://www.coursera.org/learn/erasmus-econometrics" }, { id: "c4", title: "Data Analysis with Excel", platform: "YouTube", url: "https://www.youtube.com/results?search_query=excel+data+analysis+tutorial" }] }
    ]
  },
  {
    id: "mechanical-engineering",
    majorName: "mechanical engineering",
    name: "Kỹ Thuật Cơ Khí",
    description: "Ứng dụng các nguyên lý vật lý, kỹ thuật và khoa học vật liệu để thiết kế, phân tích, chế tạo và bảo trì hệ thống cơ khí. Một ngành mang tính thực tế (Realistic) và yêu cầu chuyên môn cao.",
    matchingScore: 0,
    coreSkills: ["Vẽ kỹ thuật 3D", "Động lực học", "Khoa học vật liệu", "Chế tạo máy"],
    requiredSkills: { "Toán": 9, "Lý": 9, "Sáng tạo": 7, "Cẩn thận": 8 },
    jobOutlook: "Cốt lõi của ngành công nghiệp sản xuất, luôn cần nhân lực",
    universityMajors: ["Cơ khí chế tạo máy", "Cơ điện tử", "Kỹ thuật nhiệt"],
    specificJobs: [
      { id: "cad-cam-engineer", title: "Kỹ sư thiết kế cơ khí (CAD/CAM)", description: "Thiết kế chi tiết máy, khuôn mẫu và dây chuyền sản xuất bằng phần mềm SolidWorks, CATIA." },
      { id: "manufacturing-engineer", title: "Kỹ sư sản xuất / Công nghệ chế tạo", description: "Lên quy trình gia công, vận hành máy CNC và kiểm soát chất lượng sản phẩm cơ khí." },
      { id: "robotics-engineer", title: "Kỹ sư Cơ điện tử / Robotics", description: "Thiết kế và lập trình robot công nghiệp, hệ thống cơ điện tử thông minh." },
      { id: "automotive-engineer", title: "Kỹ sư ô tô & xe điện", description: "Nghiên cứu, thiết kế hệ thống động cơ, hệ thống truyền động cho xe hơi và xe điện." },
      { id: "hvac-engineer", title: "Kỹ sư HVAC (Điều hòa không khí & thông gió)", description: "Thiết kế và thi công hệ thống điều hòa, thông gió cho tòa nhà và nhà máy." },
    ],
    roadmap: [
      { id: "p1", title: "Cơ học Kỹ thuật & Vẽ 2D/3D", description: "Xây dựng tư duy không gian và hiểu các định luật vật lý tác động lên vật rắn.", duration: "3-5 tháng", courses: [{ id: "c1", title: "Introduction to Engineering Mechanics", platform: "Coursera (Georgia Tech)", url: "https://www.coursera.org/learn/engineering-mechanics-statics" }, { id: "c2", title: "AutoCAD 2D & 3D Tutorial for Beginners", platform: "YouTube", url: "https://www.youtube.com/results?search_query=autocad+tutorial+for+beginners" }] },
      { id: "p2", title: "Thiết kế Máy & Vật liệu", description: "Mô phỏng động lực học và thiết kế các chi tiết máy phức tạp bằng phần mềm chuyên dụng.", duration: "4-6 tháng", courses: [{ id: "c3", title: "Machine Design Part I", platform: "Coursera (Georgia Tech)", url: "https://www.coursera.org/learn/machine-design1" }, { id: "c4", title: "SolidWorks Basics Tutorial", platform: "YouTube", url: "https://www.youtube.com/results?search_query=solidworks+tutorial+for+beginners" }] }
    ]
  },
  {
    id: "biology",
    majorName: "biology",
    name: "Sinh Học & Công Nghệ Sinh Học",
    description: "Nghiên cứu về sự sống, các cơ thể sống và ứng dụng chúng vào y học, nông nghiệp và môi trường. Đòi hỏi sự kiên nhẫn cực cao trong phòng thí nghiệm và tư duy nghiên cứu khoa học (Investigative).",
    matchingScore: 0,
    coreSkills: ["Nghiên cứu phòng thí nghiệm", "Phân tích dữ liệu sinh học", "Vi sinh học", "Di truyền học"],
    requiredSkills: { "Nghiên cứu": 10, "Cẩn thận": 9, "Phân tích": 8, "Khoa học tự nhiên": 8 },
    jobOutlook: "Nhu cầu cao trong ngành y tế, nông nghiệp công nghệ cao và R&D",
    universityMajors: ["Công nghệ sinh học", "Sinh học", "Kỹ thuật y sinh"],
    specificJobs: [
      { id: "lab-researcher", title: "Nghiên cứu viên phòng thí nghiệm", description: "Thực hiện các thí nghiệm sinh học phân tử, di truyền học tại viện nghiên cứu hoặc trường đại học." },
      { id: "qc-pharma-bio", title: "Chuyên viên kiểm nghiệm thực phẩm / dược phẩm", description: "Kiểm tra chất lượng, an toàn vệ sinh thực phẩm và dược phẩm theo tiêu chuẩn GMP." },
      { id: "agri-biotech", title: "Kỹ sư công nghệ sinh học nông nghiệp", description: "Nghiên cứu giống cây trồng biến đổi gen, phân bón sinh học và bảo vệ thực vật." },
      { id: "clinical-biomedical", title: "Chuyên viên y sinh học lâm sàng", description: "Phân tích mẫu bệnh phẩm, hỗ trợ chẩn đoán bệnh tại phòng xét nghiệm bệnh viện." },
      { id: "environmental-specialist", title: "Chuyên viên môi trường & Xử lý chất thải sinh học", description: "Xử lý ô nhiễm môi trường bằng phương pháp sinh học tại các công ty môi trường." },
    ],
    roadmap: [
      { id: "p1", title: "Tế bào & Di truyền học", description: "Nắm vững cấu trúc tế bào, DNA, RNA và các nguyên lý di truyền học nền tảng.", duration: "2-4 tháng", courses: [{ id: "c1", title: "Introduction to Genetics and Evolution", platform: "Coursera (Duke University)", url: "https://www.coursera.org/learn/genetics-evolution" }, { id: "c2", title: "Crash Course Biology", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF" }] },
      { id: "p2", title: "Tin sinh học (Bioinformatics) & Kỹ năng Lab", description: "Ứng dụng máy tính để phân tích dữ liệu sinh học và làm quen với thao tác phòng thí nghiệm.", duration: "3-5 tháng", courses: [{ id: "c3", title: "Bioinformatics Specialization", platform: "Coursera (UC San Diego)", url: "https://www.coursera.org/specializations/bioinformatics" }, { id: "c4", title: "Kỹ thuật PCR & Thao tác Phòng thí nghiệm", platform: "YouTube", url: "https://www.youtube.com/results?search_query=pcr+technique+animation" }] }
    ]
  },
  {
    id: "civil-engineering",
    majorName: "civil engineering",
    name: "Kỹ Thuật Xây Dựng",
    description: "Lên kế hoạch, thiết kế, giám sát thi công và bảo trì các công trình hạ tầng như tòa nhà, cầu đường. Yêu cầu tính thực tế (Realistic), khả năng tính toán kết cấu và chịu được môi trường làm việc tại công trường.",
    matchingScore: 0,
    coreSkills: ["Quản lý dự án", "Vẽ kỹ thuật AutoCAD", "Tính toán kết cấu", "Trắc địa"],
    requiredSkills: { "Thực hành": 9, "Toán học & Vật lý": 9, "Làm việc nhóm": 8, "Chịu áp lực": 8 },
    jobOutlook: "Nghề nghiệp ổn định, gắn liền với sự phát triển hạ tầng của quốc gia",
    universityMajors: ["Kỹ thuật công trình xây dựng", "Quản lý xây dựng", "Kỹ thuật hạ tầng đô thị"],
    specificJobs: [
      { id: "structural-engineer", title: "Kỹ sư kết cấu", description: "Tính toán và thiết kế kết cấu bê tông, thép cho nhà cao tầng, cầu đường, hầm chui." },
      { id: "site-supervisor", title: "Giám sát thi công công trình", description: "Kiểm tra chất lượng thi công ngoài công trường, đảm bảo đúng thiết kế và tiến độ." },
      { id: "infrastructure-engineer", title: "Kỹ sư giao thông & hạ tầng", description: "Thiết kế đường bộ, hệ thống thoát nước và hạ tầng đô thị." },
      { id: "construction-pm", title: "Quản lý dự án xây dựng (PM)", description: "Điều phối nhà thầu, ngân sách và tiến độ dự án xây dựng quy mô lớn." },
      { id: "geotechnical-consultant", title: "Chuyên viên tư vấn địa kỹ thuật", description: "Khảo sát nền đất, thiết kế móng và xử lý địa chất yếu cho công trình." },
    ],
    roadmap: [
      { id: "p1", title: "Cơ học Vật liệu & AutoCAD", description: "Tính toán sức chịu tải của vật liệu xây dựng và thành thạo phần mềm vẽ kỹ thuật dân dụng.", duration: "3-5 tháng", courses: [{ id: "c1", title: "Mechanics of Materials I", platform: "Coursera (Georgia Tech)", url: "https://www.coursera.org/learn/mechanics-1" }, { id: "c2", title: "AutoCAD Floor Plan Tutorial", platform: "YouTube", url: "https://www.youtube.com/results?search_query=autocad+floor+plan+tutorial+for+beginners" }] },
      { id: "p2", title: "Quản lý Dự án & Thiết kế BIM (Revit)", description: "Lên lịch trình thi công, dự toán chi phí và dựng mô hình thông tin công trình (BIM).", duration: "4-6 tháng", courses: [{ id: "c3", title: "Construction Project Management", platform: "Coursera (Columbia University)", url: "https://www.coursera.org/learn/construction-project-management" }, { id: "c4", title: "Revit Architecture Tutorial", platform: "YouTube", url: "https://www.youtube.com/results?search_query=revit+architecture+tutorial+for+beginners" }] }
    ]
  },
  {
    id: "english",
    majorName: "english",
    name: "Ngôn Ngữ Anh",
    description: "Nghiên cứu chuyên sâu về tiếng Anh, văn hóa và văn học các nước nói tiếng Anh. Mang đến cơ hội rộng mở làm việc trong môi trường quốc tế, biên phiên dịch, giảng dạy hoặc quan hệ đối ngoại.",
    matchingScore: 0,
    coreSkills: ["Biên phiên dịch", "Viết lách chuyên nghiệp", "Giao tiếp liên văn hóa", "Nghiên cứu ngôn ngữ"],
    requiredSkills: { "Ngôn ngữ": 10, "Giao tiếp": 9, "Thích ứng": 8, "Tư duy phản biện": 7 },
    jobOutlook: "Rất linh hoạt, dễ dàng chuyển đổi sang nhiều lĩnh vực khác nhau",
    universityMajors: ["Ngôn ngữ Anh", "Sư phạm tiếng Anh", "Quốc tế học"],
    specificJobs: [
      { id: "interpreter", title: "Biên phiên dịch (Interpreter/Translator)", description: "Dịch tài liệu, phiên dịch tại hội nghị, đàm phán kinh doanh quốc tế." },
      { id: "english-teacher", title: "Giáo viên tiếng Anh / IELTS", description: "Giảng dạy tiếng Anh tại trường học, trung tâm hoặc dạy online cho học sinh quốc tế." },
      { id: "intl-communications", title: "Chuyên viên truyền thông quốc tế", description: "Quản lý nội dung truyền thông bằng tiếng Anh cho doanh nghiệp đa quốc gia." },
      { id: "diplomat", title: "Chuyên viên quan hệ đối ngoại / Ngoại giao", description: "Làm việc tại đại sứ quán, lãnh sự quán hoặc tổ chức quốc tế (UN, UNESCO...)." },
      { id: "english-copywriter", title: "Content Writer / Copywriter tiếng Anh", description: "Viết nội dung chuyên nghiệp bằng tiếng Anh cho báo chí, marketing, xuất bản." },
    ],
    roadmap: [
      { id: "p1", title: "Viết Học thuật & Ngữ pháp chuyên sâu", description: "Rèn luyện kỹ năng viết luận, email và báo cáo chuyên nghiệp theo chuẩn quốc tế.", duration: "3-4 tháng", courses: [{ id: "c1", title: "Academic English: Writing Specialization", platform: "Coursera (UC Irvine)", url: "https://www.coursera.org/specializations/academic-english" }, { id: "c2", title: "IELTS Writing Task 2 Tips", platform: "YouTube (IELTS Advantage)", url: "https://www.youtube.com/c/Ieltsadvantage" }] },
      { id: "p2", title: "Giao tiếp Đa văn hóa & Nền tảng Biên dịch", description: "Thấu hiểu sự khác biệt văn hóa trong kinh doanh và nhập môn các kỹ năng dịch thuật.", duration: "2-4 tháng", courses: [{ id: "c3", title: "Intercultural Communication", platform: "Coursera (Shanghai International Studies University)", url: "https://www.coursera.org/learn/intercultural-communication" }, { id: "c4", title: "Kỹ năng Biên Phiên Dịch cơ bản", platform: "YouTube", url: "https://www.youtube.com/results?search_query=k%E1%BB%B9+n%C4%83ng+bi%C3%AAn+phi%C3%AAn+d%E1%BB%8Bch" }] }
    ]
  },
  {
    id: "chemistry",
    majorName: "chemistry",
    name: "Hóa Học & Kỹ Thuật Hóa Học",
    description: "Nghiên cứu về cấu tạo, tính chất của các chất và sự biến đổi của chúng. Ngành nghề nền tảng để tạo ra vật liệu mới, dược phẩm, mỹ phẩm và tối ưu hóa các quy trình sản xuất công nghiệp.",
    matchingScore: 0,
    coreSkills: ["Phân tích hóa học", "Thực hành phòng lab", "Kiểm soát chất lượng (QA/QC)", "Nghiên cứu vật liệu"],
    requiredSkills: { "Nghiên cứu": 10, "Cẩn thận": 10, "Toán học & Vật lý": 8, "Giải quyết vấn đề": 8 },
    jobOutlook: "Cơ hội làm việc rộng mở trong các ngành công nghiệp FMCG, dược phẩm và năng lượng",
    universityMajors: ["Công nghệ kỹ thuật hóa học", "Hóa học", "Hóa dược", "Công nghệ thực phẩm"],
    specificJobs: [
      { id: "lab-analyst", title: "Chuyên viên phân tích hóa học (Lab Analyst)", description: "Phân tích thành phần hóa học của nguyên liệu và sản phẩm trong phòng thí nghiệm." },
      { id: "materials-researcher", title: "Kỹ sư nghiên cứu vật liệu mới", description: "Nghiên cứu và phát triển vật liệu polymer, composite, nanomaterial cho công nghiệp." },
      { id: "qc-pharma", title: "Chuyên viên kiểm soát chất lượng dược phẩm (QC Pharma)", description: "Đảm bảo thuốc sản xuất đạt tiêu chuẩn GMP của Bộ Y tế và quốc tế." },
      { id: "chemical-production", title: "Kỹ sư sản xuất sơn, mực in, chất kết dính", description: "Vận hành và cải tiến quy trình sản xuất các sản phẩm hóa chất công nghiệp." },
      { id: "chemistry-lecturer", title: "Giảng viên / Nghiên cứu viên Hóa học", description: "Giảng dạy và thực hiện các đề tài nghiên cứu khoa học tại trường đại học hoặc viện." },
    ],
    roadmap: [
      { id: "p1", title: "Hóa học Vô cơ & Hữu cơ nền tảng", description: "Hiểu bản chất liên kết hóa học, phản ứng và cấu trúc của các hợp chất hữu cơ.", duration: "3-5 tháng", courses: [{ id: "c1", title: "Advanced Chemistry", platform: "Coursera (University of Kentucky)", url: "https://www.coursera.org/learn/advanced-chemistry" }, { id: "c2", title: "Crash Course Chemistry", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr" }] },
      { id: "p2", title: "Hóa Phân tích & An toàn Phòng thí nghiệm", description: "Sử dụng các thiết bị để định lượng chất và nắm vững quy chuẩn an toàn hóa chất.", duration: "2-4 tháng", courses: [{ id: "c3", title: "Analytical Chemistry Basics", platform: "YouTube", url: "https://www.youtube.com/results?search_query=analytical+chemistry+introduction" }, { id: "c4", title: "Chemical Safety & Lab Techniques", platform: "YouTube", url: "https://www.youtube.com/results?search_query=chemistry+lab+safety+and+techniques" }] }
    ]
  },
  {
    id: "sociology",
    majorName: "sociology",
    name: "Xã Hội Học & Nghiên Cứu Cộng Đồng",
    description: "Nghiên cứu về cấu trúc xã hội, các mối quan hệ và hành vi của con người trong các nhóm, cộng đồng. Phù hợp với người thích quan sát các hiện tượng xã hội và phân tích dữ liệu định tính.",
    matchingScore: 0,
    coreSkills: ["Thu thập dữ liệu", "Phân tích xã hội", "Nghiên cứu định tính", "Tư duy phản biện"],
    requiredSkills: { "Phân tích": 9, "Quan sát": 9, "Tư duy phản biện": 8, "Giao tiếp": 8 },
    jobOutlook: "Nhiều cơ hội tại các tổ chức phi chính phủ (NGO), viện nghiên cứu, hoặc bộ phận CSR của doanh nghiệp",
    universityMajors: ["Xã hội học", "Nhân học", "Quốc tế học"],
    specificJobs: [
      { id: "sociological-researcher", title: "Nghiên cứu viên xã hội học", description: "Thực hiện khảo sát, phân tích định tính/định lượng về các vấn đề xã hội tại viện nghiên cứu." },
      { id: "market-researcher-soc", title: "Chuyên viên nghiên cứu thị trường", description: "Tìm hiểu hành vi, thái độ và nhu cầu của người tiêu dùng cho các doanh nghiệp." },
      { id: "csr-specialist", title: "Chuyên viên CSR & Phát triển bền vững", description: "Xây dựng và triển khai các chương trình trách nhiệm xã hội doanh nghiệp." },
      { id: "investigative-journalist", title: "Phóng viên / Nhà báo điều tra xã hội", description: "Viết bài phân tích sâu về các vấn đề xã hội, chính sách công và bất bình đẳng." },
      { id: "ngo-coordinator-soc", title: "Điều phối dự án NGO / Phát triển quốc tế", description: "Quản lý dự án phát triển cộng đồng, giảm nghèo do tổ chức quốc tế tài trợ." },
    ],
    roadmap: [
      { id: "p1", title: "Lý thuyết Xã hội học Cổ điển", description: "Khám phá các tư tưởng nền tảng định hình các cấu trúc và giai cấp trong xã hội.", duration: "2-4 tháng", courses: [{ id: "c1", title: "Classical Sociological Theory", platform: "Coursera (University of Amsterdam)", url: "https://www.coursera.org/learn/classical-sociological-theory" }, { id: "c2", title: "Crash Course Sociology", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMJ-AfB_7J1538YKWkZAnGA" }] },
      { id: "p2", title: "Phương pháp Nghiên cứu & Phân tích Dữ liệu", description: "Học cách thiết kế bảng hỏi, phỏng vấn sâu và xử lý dữ liệu khảo sát bằng phần mềm.", duration: "3-5 tháng", courses: [{ id: "c3", title: "Qualitative Research Methods", platform: "Coursera (UC Davis)", url: "https://www.coursera.org/learn/qualitative-methods" }, { id: "c4", title: "Hướng dẫn phân tích SPSS cơ bản", platform: "YouTube", url: "https://www.youtube.com/results?search_query=spss+for+beginners" }] }
    ]
  },
  {
    id: "history",
    majorName: "history",
    name: "Lịch Sử & Di Sản Văn Hóa",
    description: "Nghiên cứu, bảo tồn và phân tích các sự kiện trong quá khứ để hiểu rõ hiện tại và dự đoán tương lai. Dành cho những người đam mê đọc sách, nghiên cứu tài liệu lưu trữ và có trí nhớ tốt.",
    matchingScore: 0,
    coreSkills: ["Phân tích lịch sử", "Quản lý lưu trữ", "Viết học thuật", "Bảo tồn di sản"],
    requiredSkills: { "Trí nhớ": 9, "Đọc hiểu": 10, "Nghiên cứu": 9, "Tư duy phân tích": 8 },
    jobOutlook: "Làm việc tại bảo tàng, viện nghiên cứu, hoặc làm cố vấn văn hóa, biên kịch, nhà báo",
    universityMajors: ["Lịch sử học", "Bảo tàng học", "Văn hóa học", "Hán Nôm"],
    specificJobs: [
      { id: "history-researcher", title: "Cán bộ nghiên cứu / Giảng viên Lịch sử", description: "Nghiên cứu và giảng dạy lịch sử tại các trường đại học hoặc viện nghiên cứu." },
      { id: "museum-specialist", title: "Chuyên viên bảo tàng & Di sản văn hóa", description: "Quản lý, bảo tồn hiện vật và thiết kế trưng bày tại bảo tàng." },
      { id: "history-editor", title: "Biên tập viên xuất bản / Nhà báo", description: "Viết và biên tập các tác phẩm lịch sử, văn hóa cho báo chí và nhà xuất bản." },
      { id: "archivist", title: "Chuyên viên lưu trữ quốc gia", description: "Bảo quản, phân loại và khai thác tài liệu lịch sử tại các trung tâm lưu trữ nhà nước." },
      { id: "historical-advisor", title: "Biên kịch / Cố vấn lịch sử phim ảnh", description: "Tư vấn về bối cảnh lịch sử cho các dự án phim, game và truyền thông." },
    ],
    roadmap: [
      { id: "p1", title: "Lịch sử Thế giới vĩ mô (Big History)", description: "Nhìn nhận lịch sử nhân loại trong một bức tranh toàn cảnh từ vụ nổ Big Bang đến hiện tại.", duration: "3-5 tháng", courses: [{ id: "c1", title: "Big History: Connecting Knowledge", platform: "Coursera (Macquarie University)", url: "https://www.coursera.org/learn/big-history" }, { id: "c2", title: "Crash Course World History", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9" }] },
      { id: "p2", title: "Lịch sử Hiện đại & Kỹ năng Nghiên cứu", description: "Đi sâu vào các sự kiện toàn cầu từ thế kỷ 18 và rèn luyện kỹ năng phân tích sử liệu học thuật.", duration: "3-5 tháng", courses: [{ id: "c3", title: "The Modern World, Part One: Global History", platform: "Coursera (University of Virginia)", url: "https://www.coursera.org/learn/modern-world" }, { id: "c4", title: "Tóm tắt Lịch sử Việt Nam", platform: "YouTube", url: "https://www.youtube.com/results?search_query=t%C3%B3m+t%E1%BA%AFt+l%E1%BB%8Bch+s%E1%BB%AD+vi%E1%BB%87t+nam" }] }
    ]
  },
  {
    id: "management",
    majorName: "management",
    name: "Quản Trị Nhân Sự & Tổ Chức",
    description: "Chuyên về tuyển dụng, đào tạo, đánh giá và duy trì nguồn nhân lực. Là cầu nối giữa doanh nghiệp và người lao động, yêu cầu kỹ năng thấu hiểu con người và quản trị hiệu suất hiệu quả.",
    matchingScore: 0,
    coreSkills: ["Tuyển dụng", "Đào tạo & Phát triển (L&D)", "Luật lao động", "Quản lý hiệu suất"],
    requiredSkills: { "Lãnh đạo": 8, "Giao tiếp": 10, "Giải quyết xung đột": 9, "Thấu cảm": 8 },
    jobOutlook: "Ngành nghề xương sống của mọi công ty, cơ hội việc làm luôn rộng mở ở mọi lĩnh vực",
    universityMajors: ["Quản trị nhân lực", "Hành chính văn phòng", "Quản lý công nghiệp"],
    specificJobs: [
      { id: "recruiter", title: "Chuyên viên tuyển dụng (Recruiter / Headhunter)", description: "Tìm kiếm, sàng lọc ứng viên và phối hợp phỏng vấn để tuyển đúng người cho vị trí cần." },
      { id: "ld-specialist", title: "Chuyên viên đào tạo & Phát triển (L&D)", description: "Thiết kế chương trình đào tạo, phát triển năng lực và lộ trình sự nghiệp cho nhân viên." },
      { id: "cb-specialist", title: "Chuyên viên C&B (Lương thưởng & Phúc lợi)", description: "Xây dựng thang bảng lương, chính sách thưởng và quản lý phúc lợi nhân sự." },
      { id: "hr-manager", title: "Trưởng phòng nhân sự (HR Manager)", description: "Hoạch định chiến lược nhân sự, quản lý đội ngũ HR và tư vấn cho ban lãnh đạo." },
      { id: "office-admin", title: "Chuyên viên hành chính văn phòng", description: "Quản lý hoạt động văn phòng, hồ sơ, tài sản và hỗ trợ ban lãnh đạo." },
    ],
    roadmap: [
      { id: "p1", title: "Cốt lõi Quản trị Nhân sự", description: "Làm quen với vòng đời nhân sự, chiến lược tạo động lực và các nguyên lý quản trị.", duration: "2-4 tháng", courses: [{ id: "c1", title: "Preparing to Manage Human Resources", platform: "Coursera (University of Minnesota)", url: "https://www.coursera.org/learn/manage-human-resources" }, { id: "c2", title: "Principles of Management", platform: "YouTube", url: "https://www.youtube.com/results?search_query=principles+of+management" }] },
      { id: "p2", title: "Tuyển dụng & Quản lý Hiệu suất", description: "Học cách phỏng vấn, tuyển chọn nhân tài và xây dựng hệ thống đánh giá KPI/OKR.", duration: "3-5 tháng", courses: [{ id: "c3", title: "Recruiting, Hiring, and Onboarding Employees", platform: "Coursera (University of Minnesota)", url: "https://www.coursera.org/learn/recruiting-hiring-onboarding-employees" }, { id: "c4", title: "Luật Lao Động căn bản", platform: "YouTube", url: "https://www.youtube.com/results?search_query=lu%E1%BA%ADt+lao+%C4%91%E1%BB%99ng+c%C6%A1+b%E1%BA%A3n" }] }
    ]
  },
  {
    id: "electrical-engineering",
    majorName: "electrical engineering",
    name: "Kỹ Thuật Điện / Điện Tử",
    description: "Nghiên cứu, thiết kế và ứng dụng các hệ thống điện, vi mạch điện tử và năng lượng. Ngành này phù hợp với người thích làm việc với phần cứng, các bản mạch phức tạp và có tư duy logic cao.",
    matchingScore: 0,
    coreSkills: ["Thiết kế vi mạch", "Hệ thống điện", "Vật lý ứng dụng", "Giải quyết vấn đề"],
    requiredSkills: { "Vật lý": 9, "Toán học": 8, "Logic": 8, "Thực hành kỹ thuật": 7 },
    jobOutlook: "Nhu cầu cực lớn trong kỷ nguyên công nghiệp bán dẫn (Chip/Semiconductor) và xe điện.",
    universityMajors: ["Kỹ thuật điện", "Kỹ thuật điện tử viễn thông", "Tự động hóa", "Thiết kế vi mạch"],
    specificJobs: [
      { id: "electrical-design", title: "Kỹ sư thiết kế điện", description: "Thiết kế hệ thống phân phối điện, sơ đồ mạch điện, điều khiển tự động hóa cho các công trình, nhà máy, xí nghiệp." },
      { id: "om-engineer", title: "Kỹ sư vận hành và bảo trì (O&M)", description: "Vận hành, lắp đặt, bảo dưỡng và sửa chữa các thiết bị điện, máy phát điện, trạm biến áp, và hệ thống truyền tải." },
      { id: "automation-engineer", title: "Kỹ sư điện công nghiệp / Tự động hóa", description: "Làm việc tại các dây chuyền sản xuất, lập trình PLC, SCADA, điều khiển motor và hệ thống tự động trong nhà máy." },
      { id: "renewable-tech", title: "Chuyên viên kỹ thuật năng lượng tái tạo", description: "Thiết kế, lắp đặt và vận hành hệ thống điện mặt trời, điện gió." },
      { id: "electrical-sales", title: "Kinh doanh thiết bị điện", description: "Tư vấn, kinh doanh các loại thiết bị điện, vật tư, máy móc điện cho các đại lý hoặc dự án công nghiệp." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Kỹ thuật Điện", description: "Nắm vững các định luật vật lý điện từ và linh kiện điện tử cơ bản.", duration: "6 tháng", courses: [{ id: "c1", title: "Circuits and Electronics", platform: "edX (MIT)", url: "https://www.edx.org/learn/electronics" }] }
    ]
  },
  {
    id: "physics",
    majorName: "physics",
    name: "Vật Lý Học / Khoa Học Cơ Bản",
    description: "Nghiên cứu về vật chất, năng lượng và các quy luật cơ bản của vũ trụ. Đây là ngành dành cho những bộ óc tò mò, đam mê nghiên cứu khoa học và muốn giải mã các hiện tượng tự nhiên.",
    matchingScore: 0,
    coreSkills: ["Phân tích định lượng", "Nghiên cứu khoa học", "Toán cao cấp", "Tư duy phản biện"],
    requiredSkills: { "Vật lý": 10, "Toán học": 9, "Phân tích": 9, "Nghiên cứu": 8 },
    jobOutlook: "Nền tảng vững chắc để học lên Thạc sĩ/Tiến sĩ, hoặc làm việc trong ngành Khoa học dữ liệu và Vật liệu mới.",
    universityMajors: ["Vật lý học", "Vật lý kỹ thuật", "Sư phạm Vật lý", "Khoa học vật liệu"],
    specificJobs: [
      { id: "physics-researcher", title: "Nghiên cứu viên vật lý", description: "Thực hiện nghiên cứu cơ bản và ứng dụng về quang học, điện từ, vật lý chất rắn tại trường đại học hoặc viện." },
      { id: "ic-designer", title: "Kỹ sư thiết kế bán dẫn / Vi mạch (IC Design)", description: "Thiết kế chip và linh kiện bán dẫn — ngành cực hot với sự bùng nổ của công nghệ chip." },
      { id: "medical-physicist", title: "Chuyên viên Vật lý y tế (Medical Physicist)", description: "Vận hành và hiệu chỉnh thiết bị xạ trị, chụp MRI, CT scan trong bệnh viện." },
      { id: "photonics-engineer", title: "Kỹ sư quang học / Photonics", description: "Phát triển các thiết bị laser, cảm biến quang học và hệ thống truyền thông quang học." },
      { id: "physics-lecturer", title: "Giảng viên Vật lý / Gia sư STEM", description: "Giảng dạy Vật lý tại trường đại học hoặc làm gia sư STEM cho học sinh phổ thông." },
    ],
    roadmap: [
      { id: "p1", title: "Vật lý đại cương & Toán vi tích phân", description: "Xây dựng tư duy không gian và toán học ứng dụng để giải thích các hiện tượng vật lý.", duration: "1 năm", courses: [{ id: "c1", title: "Classical Mechanics", platform: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/physics/" }] }
    ]
  },
  {
    id: "music",
    majorName: "music",
    name: "Âm Nhạc / Sản Xuất Âm Nhạc",
    description: "Khám phá nghệ thuật biểu diễn, sáng tác và sản xuất âm thanh. Lý tưởng cho những người có năng khiếu nghệ thuật, khả năng cảm âm tốt và thích thể hiện cái tôi cá nhân qua giai điệu.",
    matchingScore: 0,
    coreSkills: ["Cảm âm", "Sáng tác", "Biểu diễn", "Sử dụng nhạc cụ", "Sản xuất Audio"],
    requiredSkills: { "Sáng tạo": 9, "Cảm âm": 10, "Thực hành nghệ thuật": 8, "Tự tin": 7 },
    jobOutlook: "Đa dạng cơ hội trong ngành giải trí, truyền thông, quảng cáo và giáo dục.",
    universityMajors: ["Thanh nhạc", "Sáng tác âm nhạc", "Sản xuất âm nhạc", "Sư phạm âm nhạc"],
    specificJobs: [
      { id: "singer", title: "Ca sĩ / Nghệ sĩ biểu diễn", description: "Biểu diễn âm nhạc trực tiếp hoặc thu âm, xây dựng fan base và phát hành tác phẩm." },
      { id: "composer", title: "Nhạc sĩ sáng tác / Nhà soạn nhạc", description: "Viết bài hát, phối khí và sáng tác nhạc phim, quảng cáo, game." },
      { id: "music-producer", title: "Music Producer / Sound Engineer", description: "Sản xuất âm nhạc trong studio, mix và master âm thanh cho ca sĩ và dự án media." },
      { id: "music-teacher", title: "Giáo viên âm nhạc", description: "Dạy đàn, thanh nhạc tại trung tâm âm nhạc hoặc trường học." },
      { id: "music-supervisor", title: "Music Supervisor / Content Creator", description: "Chọn và cấp phép âm nhạc cho phim, TVC, platform streaming; xây dựng kênh âm nhạc online." },
    ],
    roadmap: [
      { id: "p1", title: "Nhạc lý cơ bản", description: "Hiểu về nhịp điệu, hợp âm, cách đọc sheet nhạc và luyện tai nghe.", duration: "3-6 tháng", courses: [{ id: "c1", title: "Fundamentals of Music Theory", platform: "Coursera (UoE)", url: "https://www.coursera.org/learn/edinburgh-music-theory" }] }
    ]
  },
  {
    id: "art",
    majorName: "art",
    name: "Mỹ Thuật / Thiết Kế Đồ Họa",
    description: "Sử dụng màu sắc, hình khối và bố cục để truyền tải thông điệp. Ngành này sinh ra dành cho những tâm hồn bay bổng, có gu thẩm mỹ cao và đam mê sáng tạo hình ảnh.",
    matchingScore: 0,
    coreSkills: ["Tư duy thẩm mỹ", "Thiết kế đồ họa", "Phác thảo", "Sáng tạo ý tưởng"],
    requiredSkills: { "Sáng tạo": 10, "Thiết kế": 9, "Thẩm mỹ": 9, "Công cụ (Software)": 7 },
    jobOutlook: "Cơ hội việc làm rất lớn trong lĩnh vực Digital Marketing, UI/UX Design và Game.",
    universityMajors: ["Thiết kế đồ họa", "Thiết kế mỹ thuật số", "Hội họa", "Thiết kế thời trang"],
    specificJobs: [
      { id: "freelance-artist", title: "Họa sĩ / Artist tự do", description: "Sáng tác tranh, ký họa và bán tác phẩm nghệ thuật qua gallery hoặc nền tảng online." },
      { id: "concept-artist", title: "Concept Artist / Game Artist", description: "Thiết kế nhân vật, bối cảnh và các yếu tố hình ảnh cho game và phim hoạt hình." },
      { id: "art-director-art", title: "Giám đốc nghệ thuật (Art Director)", description: "Định hướng phong cách thị giác cho chiến dịch quảng cáo, tạp chí hoặc dự án sáng tạo." },
      { id: "fashion-designer", title: "Nhà thiết kế thời trang", description: "Sáng tác bộ sưu tập, thiết kế mẫu và giám sát sản xuất quần áo, phụ kiện." },
      { id: "art-teacher", title: "Giáo viên Mỹ thuật / Workshop Artist", description: "Dạy hội họa, vẽ kỹ thuật tại trường học hoặc tổ chức workshop nghệ thuật cộng đồng." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Mỹ thuật & Công cụ", description: "Học quy luật bố cục, màu sắc, Typography và sử dụng thành thạo Adobe Illustrator/Photoshop.", duration: "6 tháng", courses: [{ id: "c1", title: "Graphic Design Specialization", platform: "Coursera (CalArts)", url: "https://www.coursera.org/specializations/graphic-design" }] }
    ]
  },
  {
    id: "philosophy",
    majorName: "philosophy",
    name: "Triết Học / Nghiên Cứu Xã Hội",
    description: "Nghiên cứu các vấn đề căn bản về sự tồn tại, kiến thức, giá trị, lý trí và tư tưởng con người. Dành cho những người thích suy ngẫm sâu sắc, đọc sách và phản biện các vấn đề xã hội.",
    matchingScore: 0,
    coreSkills: ["Tư duy phản biện", "Lập luận logic", "Nghiên cứu tài liệu", "Tranh biện & Viết lách"],
    requiredSkills: { "Tư duy phản biện": 10, "Lập luận": 9, "Đọc hiểu": 9, "Viết": 8 },
    jobOutlook: "Nền tảng tư duy xuất sắc để chuyển tiếp lên các bậc cao hơn hoặc làm việc trong ngành Báo chí, Luật sư, Chính trị.",
    universityMajors: ["Triết học", "Chính trị học", "Xã hội học", "Luật"],
    specificJobs: [
      { id: "philosophy-researcher", title: "Nghiên cứu viên triết học / Giảng viên", description: "Giảng dạy và nghiên cứu triết học, đạo đức học tại trường đại học." },
      { id: "ai-ethics", title: "Chuyên viên đạo đức AI (AI Ethics Specialist)", description: "Đánh giá tác động xã hội và đạo đức của các hệ thống AI trong doanh nghiệp công nghệ." },
      { id: "social-commentator", title: "Nhà báo / Nhà bình luận xã hội", description: "Viết bài phân tích chuyên sâu về xã hội, chính trị và văn hóa cho báo chí." },
      { id: "strategic-consultant", title: "Chuyên viên tư vấn chiến lược", description: "Tư duy hệ thống và phản biện giúp đề xuất giải pháp chiến lược cho doanh nghiệp." },
      { id: "mediator", title: "Chuyên gia đàm phán / Hòa giải (Mediator)", description: "Hòa giải tranh chấp thương mại, lao động và dân sự bằng kỹ năng lập luận và thấu hiểu." },
    ],
    roadmap: [
      { id: "p1", title: "Lịch sử Triết học cơ bản", description: "Tìm hiểu tư tưởng của các triết gia cổ đại và các luồng tư tưởng hiện đại, rèn luyện cách đặt câu hỏi.", duration: "6 tháng", courses: [{ id: "c1", title: "Introduction to Philosophy", platform: "Coursera (UoE)", url: "https://www.coursera.org/learn/philosophy" }] }
    ]
  },
  {
    id: "mathematics",
    majorName: "mathematics",
    name: "Toán Học / Toán Ứng Dụng",
    description: "Không chỉ là giải phương trình trên giấy, Toán học hiện đại là nền tảng để xây dựng Trí tuệ nhân tạo (AI), phân tích dữ liệu và dự báo kinh tế. Ngành này là 'chân ái' của những bạn có tư duy logic sắc bén (Investigative), thích làm việc với con số và giải quyết các bài toán phức tạp bằng mô hình định lượng.",
    matchingScore: 0,
    coreSkills: ["Tư duy logic", "Mô hình hóa toán học", "Thống kê & Xác suất", "Phân tích định lượng"],
    requiredSkills: { "Toán học": 10, "Tư duy Logic": 10, "Phân tích dữ liệu": 8, "Sự kiên nhẫn": 9 },
    jobOutlook: "Nhu cầu khổng lồ trong mảng AI, Data Science và Tài chính định lượng",
    universityMajors: ["Toán ứng dụng", "Toán tin", "Thống kê và Khoa học dữ liệu", "Sư phạm Toán"],
    specificJobs: [
      { id: "actuary", title: "Chuyên gia thống kê / Actuary (Chuyên viên bảo hiểm)", description: "Tính toán rủi ro và xây dựng mô hình định phí bảo hiểm, dự báo tài chính." },
      { id: "data-scientist-math", title: "Nhà khoa học dữ liệu (Data Scientist)", description: "Phân tích dữ liệu lớn, xây dựng mô hình dự báo và AI ứng dụng trong kinh doanh." },
      { id: "quant", title: "Quantitative Analyst (Quant)", description: "Xây dựng mô hình định lượng phục vụ giao dịch tài chính và quản trị rủi ro ngân hàng." },
      { id: "ai-researcher", title: "Kỹ sư nghiên cứu AI / ML Researcher", description: "Nghiên cứu thuật toán học máy mới, tối ưu hóa mô hình tại các lab AI lớn." },
      { id: "math-lecturer", title: "Giảng viên / Gia sư Toán chuyên nghiệp", description: "Giảng dạy toán học tại đại học hoặc dạy IELTS math, SAT, các kỳ thi quốc tế." },
    ],
    roadmap: [
      { id: "p1", title: "Nền tảng Toán học Đại học & Khoa học Dữ liệu", description: "Làm quen với Giải tích, Đại số tuyến tính và cách ứng dụng Toán học vào lập trình hoặc phân tích dữ liệu (Data Science).", duration: "3-6 tháng", courses: [{ id: "c1", title: "Calculus 1 (Giải tích cơ bản)", platform: "Khan Academy", url: "https://www.khanacademy.org/math/calculus-1" }, { id: "c2", title: "Data Science Math Skills (Toán cho Khoa học dữ liệu)", platform: "Coursera", url: "https://www.coursera.org/learn/datasciencemathskills" }] }
    ]
  },
  {
    id: "communication",
    majorName: "communications",
    name: "Truyền Thông & Quan Hệ Công Chúng (PR)",
    description: "Nghệ thuật của ngôn từ và sự kết nối. Đây là sân chơi dành cho những bạn hướng ngoại (Social & Enterprising), thích viết lách, sáng tạo nội dung (Artistic), tự tin giao tiếp trước đám đông và có sự nhạy bén tuyệt vời với các xu hướng (trend) của xã hội.",
    matchingScore: 0,
    coreSkills: ["Sáng tạo nội dung (Content)", "Giao tiếp công chúng", "Kể chuyện (Storytelling)", "Xử lý khủng hoảng"],
    requiredSkills: { "Giao tiếp": 10, "Viết lách": 9, "Nắm bắt tâm lý": 8, "Sáng tạo linh hoạt": 9 },
    jobOutlook: "Cơ hội rộng mở tại các Agency, Đài truyền hình, Doanh nghiệp lớn",
    universityMajors: ["Truyền thông đa phương tiện", "Quan hệ công chúng (PR)", "Báo chí", "Đông phương học"],
    specificJobs: [
      { id: "pr-executive", title: "Chuyên viên Quan hệ Công chúng (PR Specialist)", description: "Xây dựng và duy trì hình ảnh tích cực của tổ chức, xử lý khủng hoảng và viết thông cáo báo chí." },
      { id: "event-manager", title: "Chuyên viên Tổ chức Sự kiện", description: "Lên ý tưởng, lập kế hoạch và điều phối các sự kiện từ họp báo đến sự kiện âm nhạc quy mô lớn." },
      { id: "internal-comms", title: "Chuyên viên Truyền thông Nội bộ", description: "Cầu nối gắn kết nhân sự trong công ty, tổ chức các hoạt động văn hóa và truyền tải thông điệp từ ban lãnh đạo." },
      { id: "media-relations", title: "Chuyên viên Quan hệ Báo chí", description: "Mở rộng và duy trì mạng lưới quan hệ với các nhà báo, đài truyền hình và KOL/Influencer." },
      { id: "brand-strategist", title: "Chuyên gia Chiến lược Thương hiệu", description: "Nghiên cứu thị trường và định vị thương hiệu, đảm bảo thông điệp truyền thông nhất quán trên mọi nền tảng." },
    ],
    roadmap: [
      { id: "p1", title: "Kỹ năng Viết & Nhập môn Truyền thông", description: "Khám phá cách xây dựng chiến lược truyền thông, viết thông cáo báo chí và nghệ thuật kể chuyện thu hút người đọc.", duration: "2-4 tháng", courses: [{ id: "c1", title: "Introduction to Public Relations and the Media", platform: "Coursera", url: "https://www.coursera.org/learn/public-relations" }, { id: "c2", title: "Good with Words: Writing and Editing (Kỹ năng viết lách)", platform: "Coursera", url: "https://www.coursera.org/learn/writing-editing-words" }] }
    ]
  },
  
];
// ─── DỮ LIỆU LÀM GIÀU (ENRICHMENT) CHO TỪNG NGÀNH ────────────────────────────
export const CAREER_ENRICHMENT: Record<string, {
  emoji: string;
  tagline: string;
  highlight: string;
  salaryRange: string;
  careerPath: { year: string; title: string; desc: string}[];
  whyChoose: { icon: string; text: string }[];
  companies: string[];
  funFact: string;
}> = {
  "computer-science": {
    emoji: "💻", tagline: "Xây dựng tương lai bằng những dòng code",
    highlight: "Top 3 ngành có mức lương cao nhất VN 2024",
    salaryRange: "15 – 80 triệu/tháng",
    careerPath: [
      { year: "Năm 1–2", title: "Junior Developer", desc: "Học nền tảng, đóng góp vào dự án thực tế"},
      { year: "Năm 3–5", title: "Software Engineer", desc: "Tự chủ thiết kế tính năng, review code" },
      { year: "Năm 5+", title: "Senior / Tech Lead", desc: "Kiến trúc hệ thống, dẫn dắt team" },
    ],
    whyChoose: [
      { icon: "🚀", text: "Nhu cầu tuyển dụng tăng 25%/năm, luôn thiếu nhân sự" },
      { icon: "🌍", text: "Làm remote cho công ty nước ngoài ngay từ Việt Nam" },
      { icon: "🤖", text: "Đứng đầu làn sóng AI — bạn tạo ra công nghệ, không bị thay thế" },
      { icon: "🎯", text: "1 năm kinh nghiệm có thể kiếm hơn nhiều ngành 5 năm" },
    ],
    companies: ["VNG", "Grab", "Shopee", "FPT", "Viettel Digital", "Google", "Amazon"],
    funFact: "Một Software Engineer giỏi có thể làm việc cho startup Silicon Valley từ Hà Nội với mức lương $3,000–$8,000/tháng.",
  },
  "psychology": {
    emoji: "🧠", tagline: "Hiểu người khác, thay đổi thế giới từ bên trong",
    highlight: "Ngành tăng trưởng mạnh nhất hậu COVID-19",
    salaryRange: "10 – 40 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Chuyên viên Tâm lý", desc: "Tham vấn cá nhân, làm việc tại trung tâm" },
      { year: "Năm 3–6", title: "Nhà Tâm lý lâm sàng", desc: "Trị liệu chuyên sâu, xây dựng case study" },
      { year: "Năm 6+", title: "Chuyên gia / Giảng viên", desc: "Nghiên cứu, đào tạo, mở phòng khám riêng" },
    ],
    whyChoose: [
      { icon: "💙", text: "Giúp hàng trăm người thoát khỏi trầm cảm và lo âu" },
      { icon: "📈", text: "Thị trường chăm sóc sức khỏe tâm thần VN tăng 30%/năm" },
      { icon: "🏢", text: "Cơ hội việc làm tại doanh nghiệp (HR), bệnh viện, trường học" },
      { icon: "🌱", text: "Nghề giúp bạn hiểu chính mình sâu sắc hơn bất kỳ ai" },
    ],
    companies: ["Bệnh viện Tâm thần TW", "Vinmec", "Trường học", "HR các tập đoàn", "Phòng khám tư"],
    funFact: "Tại Mỹ, một nhà tâm lý học lâm sàng kiếm trung bình $90,000/năm. Xu hướng này đang dần hình thành tại VN.",
  },
  "business": {
    emoji: "📊", tagline: "Từ ý tưởng đến đế chế — bạn là người dẫn dắt",
    highlight: "Ngành đào tạo ra nhiều CEO nhất Việt Nam",
    salaryRange: "12 – 100 triệu/tháng",
    careerPath: [
      { year: "Năm 1–2", title: "Business Analyst / Executive", desc: "Phân tích thị trường, hỗ trợ ra quyết định", },
      { year: "Năm 3–5", title: "Manager", desc: "Quản lý team, điều phối chiến lược bộ phận" },
      { year: "Năm 5+", title: "Director / CEO", desc: "Định hướng công ty, quản trị toàn diện" },
    ],
    whyChoose: [
      { icon: "👑", text: "Kỹ năng lãnh đạo áp dụng được cho MỌI ngành nghề" },
      { icon: "💰", text: "Cơ hội khởi nghiệp, tự xây dựng doanh nghiệp của riêng mình" },
      { icon: "🌐", text: "Mạng lưới quan hệ (network) rộng — chìa khóa thành công thực sự" },
      { icon: "🎓", text: "MBA quốc tế mở cửa đến các tập đoàn Fortune 500 toàn cầu" },
    ],
    companies: ["Vingroup", "Masan", "FPT", "Unilever", "P&G", "McKinsey", "BCG"],
    funFact: "70% CEO Fortune 500 xuất thân từ ngành Quản trị Kinh doanh. Tại VN, hầu hết lãnh đạo tập đoàn lớn đều có nền tảng kinh doanh.",
  },
  "marketing": {
    emoji: "📣", tagline: "Biến mọi thứ bình thường thành điều người ta muốn",
    highlight: "Ngành sáng tạo + dữ liệu đang hot nhất hiện nay",
    salaryRange: "10 – 50 triệu/tháng",
    careerPath: [
      { year: "Năm 1–2", title: "Marketing Executive", desc: "Chạy ads, quản lý nội dung, phân tích số liệu" },
      { year: "Năm 3–4", title: "Marketing Specialist", desc: "Lên chiến lược campaign, quản lý ngân sách" },
      { year: "Năm 5+", title: "Marketing Manager / CMO", desc: "Dẫn dắt thương hiệu, xây dựng văn hóa marketing" },
    ],
    whyChoose: [
      { icon: "🎨", text: "Giao điểm hoàn hảo giữa sáng tạo và phân tích dữ liệu" },
      { icon: "📱", text: "Mọi thương hiệu đều cần bạn — từ startup đến tập đoàn" },
      { icon: "💡", text: "Dễ chuyển sang làm freelance hoặc mở agency riêng" },
      { icon: "🌟", text: "Xây dựng personal brand mạnh song song với sự nghiệp" },
    ],
    companies: ["Unilever", "P&G", "Shopee", "Tiki", "Momo", "GS25", "Lotte Mart"],
    funFact: "Một campaign marketing viral có thể tăng doanh thu 300% chỉ trong 1 tuần. Đó là sức mạnh của ngành này.",
  },
  "nursing": {
    emoji: "🏥", tagline: "Nghề cao quý nhất — chữa lành cơ thể và tinh thần",
    highlight: "Nhu cầu nhân lực y tế thiếu hụt 40% tại VN",
    salaryRange: "8 – 35 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Điều dưỡng viên", desc: "Chăm sóc bệnh nhân, thực hiện y lệnh"},
      { year: "Năm 3–7", title: "Điều dưỡng trưởng", desc: "Quản lý khoa, đào tạo nhân viên mới"},
      { year: "Năm 7+", title: "Chuyên gia / Quản lý Y tế", desc: "Nghiên cứu, cố vấn chính sách y tế" },
    ],
    whyChoose: [
      { icon: "❤️", text: "Mỗi ngày làm việc là một ngày bạn cứu sống hoặc cải thiện cuộc đời người khác" },
      { icon: "🌍", text: "Bằng cấp y tế Việt Nam được công nhận rộng rãi, dễ ra nước ngoài làm việc" },
      { icon: "🔒", text: "Nghề không bao giờ bị AI thay thế hoàn toàn — con người cần bàn tay người" },
      { icon: "📈", text: "Dân số già hóa → nhu cầu điều dưỡng tăng mạnh 10-20 năm tới" },
    ],
    companies: ["Vinmec", "Bệnh viện Chợ Rẫy", "Bệnh viện Bạch Mai", "MEDLATEC", "Bệnh viện quốc tế"],
    funFact: "Điều dưỡng viên tại Đức, Nhật, Canada có mức lương từ $2,500–$4,500/tháng và đang cực kỳ thiếu nhân sự.",
  },
  "accounting": {
    emoji: "📋", tagline: "Người nắm giữ bí mật tài chính của mọi doanh nghiệp",
    highlight: "100% doanh nghiệp đều cần kế toán — không bao giờ thất nghiệp",
    salaryRange: "10 – 45 triệu/tháng",
    careerPath: [
      { year: "Năm 1–2", title: "Kế toán viên", desc: "Hạch toán, lập báo cáo tài chính cơ bản" },
      { year: "Năm 3–5", title: "Kế toán trưởng", desc: "Kiểm soát toàn bộ tài chính, tư vấn thuế"},
      { year: "Năm 5+", title: "CFO / Kiểm toán viên cao cấp", desc: "Chiến lược tài chính, quản trị rủi ro" },
    ],
    whyChoose: [
      { icon: "🔢", text: "Chứng chỉ ACCA/CPA mở cửa làm việc tại Big4 toàn cầu" },
      { icon: "💼", text: "Mọi công ty từ startup đến tập đoàn đều cần bạn" },
      { icon: "🧮", text: "Công việc có hệ thống, rõ ràng — phù hợp người thích trật tự" },
      { icon: "📊", text: "Nền tảng tốt để chuyển sang Tài chính, Đầu tư, Kiểm toán" },
    ],
    companies: ["Deloitte", "PwC", "KPMG", "EY", "Vingroup", "Masan", "Ngân hàng các loại"],
    funFact: "Chứng chỉ ACCA (kế toán quốc tế) có thể giúp bạn làm việc tại hơn 180 quốc gia. Đây là hộ chiếu tài chính toàn cầu.",
  },
  "information-technology": {
    emoji: "🌐", tagline: "Kiến trúc sư của hạ tầng số quốc gia",
    highlight: "An ninh mạng — ngành thiếu 3,5 triệu nhân lực toàn cầu",
    salaryRange: "12 – 60 triệu/tháng",
    careerPath: [
      { year: "Năm 1–2", title: "IT Support / Junior Sysadmin", desc: "Vận hành hệ thống, hỗ trợ kỹ thuật" },
      { year: "Năm 3–5", title: "Network Engineer / Security Analyst", desc: "Thiết kế hạ tầng, bảo mật hệ thống"},
      { year: "Năm 5+", title: "IT Manager / CISO", desc: "Quản trị hệ thống toàn tổ chức, chiến lược số" },
    ],
    whyChoose: [
      { icon: "🛡️", text: "An ninh mạng đang là ưu tiên quốc gia — ngân sách khổng lồ" },
      { icon: "🏗️", text: "Mọi doanh nghiệp chuyển đổi số đều cần bạn dẫn đường" },
      { icon: "🔧", text: "Đa dạng chuyên sâu: Cloud, DevOps, Cybersecurity, Database..." },
      { icon: "🌏", text: "Chứng chỉ quốc tế (AWS, CCNA) làm việc được mọi nơi trên thế giới" },
    ],
    companies: ["CMC Telecom", "Viettel", "VNPT", "FPT Telecom", "các ngân hàng", "công ty nước ngoài"],
    funFact: "Một chuyên gia bảo mật mạng (Ethical Hacker) giỏi có thể kiếm $100,000+/năm làm Bug Bounty cho các tập đoàn lớn.",
  },
  "architecture": {
    emoji: "🏛️", tagline: "Nơi nghệ thuật chạm đến kỹ thuật, công trình sống mãi với thời gian",
    highlight: "Đô thị hóa VN mạnh nhất ĐNA — ngành xây dựng bùng nổ",
    salaryRange: "12 – 60 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "KTS Thiết kế", desc: "Vẽ phối cảnh, làm mô hình, hỗ trợ dự án" },
      { year: "Năm 3–7", title: "Kiến trúc sư chính", desc: "Chủ trì thiết kế, làm việc với chủ đầu tư"},
      { year: "Năm 7+", title: "Kiến trúc sư trưởng / Mở văn phòng", desc: "Xây dựng thương hiệu, nhận dự án lớn"},
    ],
    whyChoose: [
      { icon: "🎨", text: "Tác phẩm của bạn tồn tại vật lý, trăm năm sau vẫn còn đó" },
      { icon: "🏙️", text: "Bùng nổ bất động sản và đô thị hóa tạo nhu cầu khổng lồ" },
      { icon: "✏️", text: "Ngành duy nhất kết hợp hoàn hảo nghệ thuật, kỹ thuật và khoa học" },
      { icon: "🌿", text: "Kiến trúc xanh, bền vững — xu hướng của tương lai" },
    ],
    companies: ["Gensler", "Stacked Architecture", "Vo Trong Nghia Architects", "các CĐT lớn", "tự mở studio"],
    funFact: "Kiến trúc sư Võ Trọng Nghĩa người Việt đã thiết kế các công trình đoạt giải thế giới tại 30+ quốc gia.",
  },
  "education": {
    emoji: "📚", tagline: "Bạn không dạy môn học — bạn thay đổi cuộc đời người khác",
    highlight: "EdTech VN tăng trưởng 300% sau 2020 — cơ hội kỷ lục",
    salaryRange: "8 – 40 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Giáo viên", desc: "Giảng dạy, xây dựng giáo án, mentoring HS"},
      { year: "Năm 3–7", title: "Tổ trưởng / Chuyên viên GD", desc: "Quản lý chương trình, đào tạo GV mới" },
      { year: "Năm 7+", title: "Hiệu trưởng / Giám đốc học thuật", desc: "Xây dựng chiến lược giáo dục tổ chức" },
    ],
    whyChoose: [
      { icon: "💡", text: "Tác động nhân rộng: 1 giáo viên giỏi ảnh hưởng hàng nghìn học sinh" },
      { icon: "📱", text: "EdTech đang bùng nổ — cơ hội xây kênh dạy học online thu nhập lớn" },
      { icon: "🎓", text: "Ngành duy nhất mà kiến thức và kỹ năng luôn không bao giờ lỗi thời" },
      { icon: "🌅", text: "Môi trường làm việc ý nghĩa, ổn định và được xã hội trân trọng" },
    ],
    companies: ["IvyPrep", "APAX English", "British Council", "VUS", "Marathon", "Trường quốc tế"],
    funFact: "Các giáo viên dạy online trên các nền tảng như Superprof, Preply hay tự xây kênh YouTube có thể kiếm 30–100 triệu/tháng.",
  },
  "law": {
    emoji: "⚖️", tagline: "Người bảo vệ công lý, giữ vững nền tảng xã hội văn minh",
    highlight: "Hội nhập quốc tế → nhu cầu Luật sư tăng gấp đôi thập kỷ tới",
    salaryRange: "12 – 100 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Tập sự Luật sư / Chuyên viên pháp lý", desc: "Nghiên cứu hồ sơ, soạn thảo văn bản pháp lý" },
      { year: "Năm 3–7", title: "Luật sư", desc: "Tranh tụng, tư vấn pháp lý cho doanh nghiệp"},
      { year: "Năm 7+", title: "Luật sư thành viên / Trưởng văn phòng", desc: "Mở VP luật, xây dựng danh tiếng"},
    ],
    whyChoose: [
      { icon: "🏛️", text: "Hội nhập WTO, EVFTA → doanh nghiệp cần luật sư quốc tế" },
      { icon: "🛡️", text: "Nghề bảo vệ quyền và lợi ích hợp pháp của con người" },
      { icon: "🌐", text: "Kết hợp chuyên môn phụ (IT, Y, Tài chính) → chuyên gia đầu ngành" },
      { icon: "📜", text: "Danh tiếng và uy tín tích lũy theo thời gian — càng lâu càng giá trị" },
    ],
    companies: ["VILAF", "Tilleke & Gibbins", "Allen & Overy", "Baker McKenzie", "Hãng luật tư nhân"],
    funFact: "Luật sư Việt Nam thành thạo tiếng Anh và luật quốc tế đang được săn đón bởi các công ty đa quốc gia với mức lương $3,000–$10,000/tháng.",
  },
  "finance": {
    emoji: "💹", tagline: "Làm cho tiền sinh ra tiền — người chơi chiến lược thực sự",
    highlight: "Thị trường chứng khoán VN tăng 500% — ngành tài chính bùng nổ",
    salaryRange: "15 – 100 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Chuyên viên phân tích", desc: "Nghiên cứu thị trường, lập báo cáo đầu tư" },
      { year: "Năm 3–6", title: "Portfolio Manager", desc: "Quản lý danh mục đầu tư, ra quyết định"},
      { year: "Năm 6+", title: "Fund Manager / CFO", desc: "Quản lý quỹ hàng trăm tỷ, chiến lược tài chính" },
    ],
    whyChoose: [
      { icon: "💎", text: "Chứng chỉ CFA được công nhận toàn cầu — passport vào Wall Street" },
      { icon: "📈", text: "Thu nhập không trần — bonus có thể gấp 10–20 lần lương cơ bản" },
      { icon: "🔍", text: "Hiểu tài chính giúp bạn đầu tư thông minh hơn cho bản thân" },
      { icon: "🌏", text: "Singapore, Hong Kong cần chuyên gia tài chính VN với mức lương top" },
    ],
    companies: ["SSI", "VCSC", "VinaCapital", "Dragon Capital", "MB", "Techcombank Securities"],
    funFact: "Một Fund Manager giỏi tại VN có thể quản lý danh mục 500–1,000 tỷ VND và hưởng phí quản lý hàng chục tỷ mỗi năm.",
  },
  "engineering": {
    emoji: "⚙️", tagline: "Bàn tay kỹ sư tạo ra thứ nuôi sống cả nền công nghiệp",
    highlight: "Công nghiệp hóa mạnh mẽ — kỹ sư cơ điện thiếu hụt 100,000 người",
    salaryRange: "12 – 55 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Kỹ sư thiết kế / vận hành", desc: "Thiết kế chi tiết, giám sát sản xuất"},
      { year: "Năm 3–7", title: "Kỹ sư trưởng", desc: "Chủ trì dự án, tối ưu hóa quy trình" },
      { year: "Năm 7+", title: "Trưởng bộ phận kỹ thuật / Giám đốc nhà máy", desc: "Vận hành toàn nhà máy" },
    ],
    whyChoose: [
      { icon: "🏭", text: "Samsung, LG, Intel đang đổ hàng tỷ USD vào VN — cần kỹ sư gấp" },
      { icon: "🤖", text: "Automation & Robotics — kỹ sư giỏi lập trình robot, không bị robot thay thế" },
      { icon: "⚡", text: "Năng lượng tái tạo bùng nổ — kỹ sư điện là vàng hiện nay" },
      { icon: "🌍", text: "Kinh nghiệm nhà máy VN + tiếng Anh → cơ hội làm việc ở nước ngoài" },
    ],
    companies: ["Samsung Vietnam", "Intel Products Vietnam", "Bosch", "Siemens", "các KCN lớn"],
    funFact: "Samsung Vietnam đang tuyển hàng nghìn kỹ sư mỗi năm với mức lương cạnh tranh và chế độ đãi ngộ quốc tế.",
  },
  "medicine": {
    emoji: "🩺", tagline: "Nghề cao quý nhất nhân loại — cứu người là thiên chức",
    highlight: "Bác sĩ thiếu hụt nghiêm trọng — VN chỉ có 9 BS/10,000 dân",
    salaryRange: "15 – 150 triệu/tháng",
    careerPath: [
      { year: "Năm 1–5", title: "Bác sĩ nội trú / Thực tập", desc: "Học lâm sàng, thực hành dưới giám sát" },
      { year: "Năm 5–10", title: "Bác sĩ chuyên khoa", desc: "Khám và điều trị độc lập, nghiên cứu" },
      { year: "Năm 10+", title: "GS.TS / Trưởng khoa / Mở phòng khám", desc: "Đỉnh cao y học, thu nhập không giới hạn" },
    ],
    whyChoose: [
      { icon: "❤️", text: "Mỗi bệnh nhân phục hồi là thành tựu không tiền bạc nào sánh được" },
      { icon: "🔬", text: "Y học kết hợp AI đang cách mạng hóa chẩn đoán và điều trị" },
      { icon: "💎", text: "Bác sĩ giỏi không bao giờ thiếu việc — dù ở bất kỳ đâu trên thế giới" },
      { icon: "🌟", text: "Địa vị xã hội cao, được cộng đồng tin tưởng và tôn trọng" },
    ],
    companies: ["BV Bạch Mai", "Vinmec", "BV Chợ Rẫy", "BV Quân Y", "Phòng khám tư nhân"],
    funFact: "Bác sĩ Việt Nam làm việc tại Mỹ, Úc, Canada có thể kiếm $200,000–$400,000/năm. Hành trình dài nhưng phần thưởng xứng đáng.",
  },
  "social-work": {
    emoji: "🤝", tagline: "Thay đổi xã hội bắt đầu từ từng cá nhân bạn giúp đỡ",
    highlight: "Phúc lợi xã hội VN đang được đầu tư mạnh mẽ 2025–2030",
    salaryRange: "8 – 30 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Nhân viên CTXH", desc: "Làm việc trực tiếp với đối tượng cần hỗ trợ" },
      { year: "Năm 3–6", title: "Chuyên viên / Quản lý ca", desc: "Điều phối mạng lưới hỗ trợ, theo dõi tiến độ" },
      { year: "Năm 6+", title: "Giám đốc chương trình / Cố vấn chính sách", desc: "Thiết kế chính sách xã hội cấp quốc gia"},
    ],
    whyChoose: [
      { icon: "🌱", text: "Công việc có ý nghĩa sâu sắc — thay đổi được cuộc sống người thực" },
      { icon: "🌍", text: "UN, UNICEF, WHO đang mở rộng ở VN — cơ hội làm việc tổ chức quốc tế" },
      { icon: "📊", text: "Kết hợp data + tâm lý xã hội = profile cực kỳ giá trị với NGO" },
      { icon: "💙", text: "Phát triển EQ và kỹ năng sống mà không ngành nào dạy được" },
    ],
    companies: ["UNICEF", "WHO", "Save the Children", "ActionAid", "Sở LĐTB&XH", "NGO địa phương"],
    funFact: "Chuyên gia CTXH làm việc cho các tổ chức quốc tế như UN tại VN có mức lương từ $2,000–$5,000/tháng và phụ cấp hấp dẫn.",
  },
  "economics": {
    emoji: "🌐", tagline: "Người đọc được ngôn ngữ của nền kinh tế toàn cầu",
    highlight: "Kinh tế VN tăng trưởng top 5 châu Á — nhu cầu chuyên gia bùng nổ",
    salaryRange: "12 – 70 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Chuyên viên nghiên cứu", desc: "Thu thập dữ liệu, phân tích báo cáo kinh tế"},
      { year: "Năm 3–6", title: "Chuyên gia kinh tế", desc: "Tư vấn chính sách, nghiên cứu độc lập" },
      { year: "Năm 6+", title: "Kinh tế trưởng / Cố vấn Chính phủ", desc: "Định hướng chính sách kinh tế quốc gia" },
    ],
    whyChoose: [
      { icon: "📊", text: "Nền tảng để chuyển sang Tài chính, Ngân hàng, Tư vấn chiến lược" },
      { icon: "🎓", text: "Học bổng Fulbright, Chevening ưu tiên sinh viên Kinh tế VN" },
      { icon: "🌏", text: "IMF, World Bank, ADB đang mở rộng hoạt động tại VN" },
      { icon: "🔮", text: "Hiểu kinh tế = hiểu cách thế giới vận hành, đầu tư thông minh hơn" },
    ],
    companies: ["VEPR", "CIEM", "Ngân hàng Thế giới", "ADB", "Bộ Kế hoạch & Đầu tư", "các tập đoàn lớn"],
    funFact: "Tiến sĩ Kinh tế từ trường top VN được IMF và World Bank tuyển dụng với mức lương $80,000–$150,000/năm tại Washington D.C.",
  },
  "chemical-engineering": {
    emoji: "🧪", tagline: "Biến đổi vật chất, kiến tạo tương lai bền vững",
    highlight: "Cốt lõi của ngành công nghiệp FMCG, Dược phẩm và Năng lượng",
    salaryRange: "12 – 50 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Kỹ sư R&D / Kỹ sư QC", desc: "Nghiên cứu công thức, kiểm soát chất lượng" },
      { year: "Năm 3–6", title: "Quản lý Sản xuất", desc: "Vận hành dây chuyền, tối ưu hóa quy trình" },
      { year: "Năm 6+", title: "Giám đốc Nhà máy / Trưởng R&D", desc: "Định hướng phát triển sản phẩm mới" },
    ],
    whyChoose: [
      { icon: "🏭", text: "Đóng vai trò chủ chốt trong ngành mỹ phẩm, thực phẩm, thuốc men" },
      { icon: "🔋", text: "Xu hướng năng lượng sạch (Pin xe điện) đang khát nhân lực" },
      { icon: "💡", text: "Tính ứng dụng thực tế cực cao, có thể tự khởi nghiệp làm sản phẩm riêng" },
      { icon: "🌍", text: "Cơ hội làm việc tại các tập đoàn đa quốc gia với lộ trình rõ ràng" },
    ],
    companies: ["Unilever", "Suntory PepsiCo", "Nestlé", "Dược Hậu Giang", "Petrolimex"],
    funFact: "Kỹ sư Hóa học đứng sau công thức của mọi thứ bạn dùng hàng ngày: từ kem đánh răng, nước hoa đến pin điện thoại!",
  },
  "mathematics": {
    emoji: "📈", tagline: "Giải mã thế giới bằng sức mạnh của những con số",
    highlight: "Nền tảng cốt lõi của Cách mạng AI và Khoa học dữ liệu",
    salaryRange: "15 – 80 triệu/tháng",
    careerPath: [
      { year: "Năm 1–3", title: "Data Analyst / Actuary Trainee", desc: "Phân tích dữ liệu, tính toán rủi ro"},
      { year: "Năm 3–6", title: "Data Scientist / Senior Quant", desc: "Xây dựng mô hình máy học, dự báo kinh tế" },
      { year: "Năm 6+", title: "AI Engineer / Head of Data", desc: "Lãnh đạo bộ phận dữ liệu, xây dựng hệ thống AI" },
    ],
    whyChoose: [
      { icon: "🔮", text: "Data Science được mệnh danh là 'Nghề quyến rũ nhất thế kỷ 21'" },
      { icon: "🧠", text: "Tư duy toán học giúp chuyển đổi sang IT hoặc Tài chính cực kỳ dễ dàng" },
      { icon: "🚀", text: "Nhu cầu nhân lực AI tăng đột biến, không lo thất nghiệp" },
      { icon: "🌍", text: "Ngôn ngữ của Toán là toàn cầu, dễ dàng làm việc remote xuyên quốc gia" },
    ],
    companies: ["FPT.AI", "VNG", "Momo", "Techcombank", "KPMG", "Các quỹ đầu tư"],
    funFact: "Nhiều tỷ phú công nghệ và nhà quản lý quỹ phòng hộ (Hedge Fund) vĩ đại nhất thế giới xuất thân từ cử nhân Toán học, không phải ngành Kinh doanh.",
  },
  "communication": {
    emoji: "🎙️", tagline: "Nghệ thuật của ngôn từ và sự kết nối đại chúng",
    highlight: "Ngành học không bao giờ lỗi thời trong kỷ nguyên số",
    salaryRange: "10 – 60 triệu/tháng",
    careerPath: [
      { year: "Năm 1–2", title: "PR / Content Executive", desc: "Sáng tạo nội dung, hỗ trợ tổ chức sự kiện"},
      { year: "Năm 3–5", title: "PR Manager / Creative Planner", desc: "Lên chiến lược truyền thông, xử lý khủng hoảng" },
      { year: "Năm 5+", title: "Communications Director", desc: "Quản trị danh tiếng thương hiệu toàn tổ chức" },
    ],
    whyChoose: [
      { icon: "🔥", text: "Môi trường năng động, luôn cập nhật những xu hướng mới nhất" },
      { icon: "🤝", text: "Xây dựng được mạng lưới quan hệ (network) siêu khủng" },
      { icon: "✨", text: "Cơ hội làm việc với người nổi tiếng, KOLs và giới báo chí" },
      { icon: "💻", text: "Tính linh hoạt cao, có thể dễ dàng làm Freelancer tự do" },
    ],
    companies: ["Ogilvy", "Dentsu", "VTV", "Đất Việt VAC", "Cát Tiên Sa", "Vingroup"],
    funFact: "Một chuyên gia PR giỏi có thể xoay chuyển tình thế khủng hoảng truyền thông trị giá hàng triệu USD của một tập đoàn chỉ bằng một bài phát biểu.",
  }
};

export const DEFAULT_ENRICHMENT = {
  emoji: "🎓", tagline: "Khám phá tiềm năng của bản thân trong ngành học này",
  highlight: "Ngành nghề đầy tiềm năng phát triển",
  salaryRange: "Phụ thuộc chuyên môn",
  careerPath: [
    { year: "Năm 1–3", title: "Nhân viên", desc: "Học nghề, xây dựng nền tảng", salary: "10–18tr" },
    { year: "Năm 3–6", title: "Chuyên viên", desc: "Làm độc lập, dẫn dắt dự án nhỏ", salary: "20–35tr" },
    { year: "Năm 6+", title: "Quản lý / Chuyên gia", desc: "Dẫn dắt team, định hướng chiến lược", salary: "40tr+" },
  ],
  whyChoose: [
    { icon: "🌱", text: "Nhiều cơ hội phát triển và học hỏi" },
    { icon: "💪", text: "Phù hợp với thế mạnh và đam mê của bạn" },
    { icon: "🌐", text: "Kết nối với cộng đồng chuyên nghiệp rộng lớn" },
    { icon: "🎯", text: "Lộ trình thăng tiến rõ ràng, có thể đo lường" },
  ],
  companies: ["Các doanh nghiệp hàng đầu trong ngành"],
  funFact: "Sự thành công trong bất kỳ ngành nào đều đến từ đam mê kết hợp với kỹ năng không ngừng phát triển.",
};
//───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────//
//───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────//
// ─── BỘ CÂU HỎI TRẮC NGHIỆM ───────────────────────────────────────────────────
export const personalityQuestions = [
  // --- 10 CÂU HỎI RIASEC (Cân bằng: Mỗi nhóm xuất hiện đúng 5 lần) ---
  {
    id: "q1",
    question: "Trong học tập hoặc hoạt động ngoại khóa, bạn thích làm gì nhất?",
    options: [
      { text: "Thực hành trực tiếp, làm thí nghiệm, tự tay lắp ráp/chế tạo đồ vật", traits: ["R"] },
      { text: "Đọc sách, tìm hiểu nguyên lý sâu xa, giải quyết các bài toán khó", traits: ["I"] },
      { text: "Tự do sáng tạo, vẽ vời, thiết kế, viết lách hoặc lên ý tưởng nghệ thuật", traits: ["A"] },
    ],
  },
  {
    id: "q2",
    question: "Điều gì làm bạn cảm thấy hào hứng và có động lực nhất?",
    options: [
      { text: "Được lắng nghe, giúp đỡ bạn bè và tham gia các hoạt động cộng đồng", traits: ["S"] },
      { text: "Được dẫn dắt nhóm, tổ chức sự kiện và khẳng định bản lĩnh cá nhân", traits: ["E"] },
      { text: "Mọi thứ được lên kế hoạch rõ ràng, gọn gàng và hoàn thành đúng hạn", traits: ["C"] },
    ],
  },
  {
    id: "q3",
    question: "Tưởng tượng về môi trường đại học lý tưởng của bạn, nó sẽ trông như thế nào?",
    options: [
      { text: "Có nhiều buổi đi thực địa ngoài trời hoặc làm việc trong xưởng/phòng lab", traits: ["R"] },
      { text: "Môi trường thân thiện, hòa đồng, sinh viên thường xuyên tương tác và hỗ trợ nhau", traits: ["S"] },
      { text: "Môi trường năng động, nhịp độ nhanh, nhiều cuộc thi và thử thách để cạnh tranh", traits: ["E"] },
    ],
  },
  {
    id: "q4",
    question: "Khi làm bài tập nhóm trên lớp, bạn thường tự tin nhận vai trò gì?",
    options: [
      { text: "Người tìm kiếm tài liệu, nghiên cứu thông tin và phân tích số liệu chuyên sâu", traits: ["I"] },
      { text: "Người thiết kế slide PowerPoint, làm video hoặc lên kịch bản thuyết trình độc lạ", traits: ["A"] },
      { text: "Người lập timeline, tổng hợp file Word, chia task và nhắc nhở deadline", traits: ["C"] },
    ],
  },
  {
    id: "q5",
    question: "Khi cần học một kỹ năng mới (ví dụ: dùng một phần mềm học tập), thói quen của bạn là gì?",
    options: [
      { text: "Bắt tay vào làm thử ngay, vừa làm vừa tự rút kinh nghiệm qua những lỗi sai trong quá trình thực hành.", traits: ["R"] },
      { text: "Ưu tiên tìm hiểu xem kỹ năng này có mang lại lợi thế gì để giúp mình đạt được kết quả học tập cao hơn không.", traits: ["E"] },
      { text: "Tìm các video hướng dẫn bài bản, ghi chú cẩn thận và thực hiện tuần tự theo đúng từng bước cơ bản.", traits: ["C"] },
    ],
  },  
  {
    id: "q6",
    question: "Nếu nhóm của bạn xảy ra bất đồng ý kiến khi đang bàn kế hoạch, bạn sẽ xử lý thế nào?",
    options: [
      { text: "Khuyên mọi người bình tĩnh, tìm cách dung hòa các ý kiến để giữ không khí vui vẻ và đoàn kết.", traits: ["S"] },
      { text: "Lắng nghe kỹ từng lập luận, phân tích ưu/nhược điểm một cách logic để chỉ ra giải pháp tốt nhất.", traits: ["I"] },
      { text: "Chuyển hướng sự căng thẳng bằng cách đưa ra một ý tưởng hoàn toàn mới mẻ hoặc một câu nói đùa nhẹ nhàng.", traits: ["A"] },
    ],
  },
  {
    id: "q7",
    question: "Sau một tuần học tập căng thẳng, ngày nghỉ cuối tuần của bạn thường diễn ra như thế nào?",
    options: [
      { text: "Tham gia các môn thể thao vận động, hoặc tự tay sửa chữa, nâng cấp đồ dùng cá nhân trong phòng.", traits: ["R"] },
      { text: "Dọn dẹp góc học tập cho gọn gàng, sắp xếp tài liệu và viết danh sách công việc cần làm cho tuần tới.", traits: ["C"] },
      { text: "Dành thời gian yên tĩnh để nghe nhạc, xem phim, chụp ảnh, vẽ tranh hoặc viết lách theo sở thích.", traits: ["A"] },
    ],
  },
  {
    id: "q8",
    question: "Theo bạn, điều gì làm nên sức hút lớn nhất ở một con người?",
    options: [
      { text: "Sự tự tin, bản lĩnh dẫn dắt và khát vọng đạt được thành công lớn", traits: ["E"] },
      { text: "Trí tuệ sâu sắc, hiểu biết rộng và khả năng suy luận nhạy bén", traits: ["I"] },
      { text: "Lòng nhân ái, sự tử tế và biết cách quan tâm đến những người xung quanh", traits: ["S"] },
    ],
  },
  {
    id: "q9",
    question: "Khi đứng trước quyết định chọn ngành, chọn trường Đại học, bạn thường ưu tiên tìm hiểu thông tin theo cách nào?",
    options: [
      { text: "Xem các video thực tế về công việc, tham quan cơ sở vật chất để biết sinh viên ngành đó trực tiếp làm nghề như thế nào.", traits: ["R"] },
      { text: "Tự mình đọc các bài phân tích chuyên môn, nghiên cứu sâu về bản chất của ngành học và những vấn đề mà ngành đó giải quyết.", traits: ["I"] },
      { text: "Tra cứu kỹ lưỡng về điểm chuẩn các năm, chương trình đào tạo cụ thể và ưu tiên những ngành có cơ hội việc làm ổn định.", traits: ["C"] },
    ],
  },
  {
    id: "q10",
    question: "Hãy thử hình dung về bản thân khi đã tốt nghiệp và đi làm, bạn mong muốn sự nghiệp của mình sẽ trông như thế nào?",
    options: [
      { text: "Một công việc mang lại giá trị tốt đẹp cho xã hội, nơi bạn được làm việc với con người, giúp đỡ và hỗ trợ người khác.", traits: ["S"] },
      { text: "Một vị trí có sức ảnh hưởng (quản lý, điều hành), có lộ trình thăng tiến rõ ràng, làm chủ tài chính và dẫn dắt đội nhóm.", traits: ["E"] },
      { text: "Một công việc linh hoạt, không bị gò bó trong khuôn khổ, cho phép bạn tự do sáng tạo và để lại những dấu ấn cá nhân.", traits: ["A"] },
    ],
  },
  // --- 10 CÂU HỎI TIPI BẮT BUỘC ĐỂ GỬI CHO AI ---
  { id: "tipi_1", question: "Tôi thấy bản thân mình là người: Hướng ngoại, nhiệt tình.", options: tipiOptions },
  { id: "tipi_2", question: "Tôi thấy bản thân mình là người: Hay chỉ trích, thích tranh luận.", options: tipiOptions },
  { id: "tipi_3", question: "Tôi thấy bản thân mình là người: Đáng tin cậy, có kỷ luật tự giác.", options: tipiOptions },
  { id: "tipi_4", question: "Tôi thấy bản thân mình là người: Hay lo âu, dễ bị buồn bực.", options: tipiOptions },
  { id: "tipi_5", question: "Tôi thấy bản thân mình là người: Cởi mở với trải nghiệm mới, suy nghĩ phức tạp/sâu sắc.", options: tipiOptions },
  { id: "tipi_6", question: "Tôi thấy bản thân mình là người: Kín đáo, ít nói.", options: tipiOptions },
  { id: "tipi_7", question: "Tôi thấy bản thân mình là người: Biết cảm thông, ấm áp.", options: tipiOptions },
  { id: "tipi_8", question: "Tôi thấy bản thân mình là người: Vô tổ chức, bất cẩn.", options: tipiOptions },
  { id: "tipi_9", question: "Tôi thấy bản thân mình là người: Bình tĩnh, cảm xúc ổn định.", options: tipiOptions },
  { id: "tipi_10", question: "Tôi thấy bản thân mình là người: Theo khuôn phép truyền thống, ít sáng tạo.", options: tipiOptions }
];
