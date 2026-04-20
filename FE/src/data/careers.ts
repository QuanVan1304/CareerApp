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

const tipiOptions = [
  { text: "Hoàn toàn đồng ý (Agree strongly)", score: 7 },
  { text: "Tương đối đồng ý (Agree moderately)", score: 6 },
  { text: "Hơi đồng ý (Agree a little)", score: 5 },
  { text: "Trung lập (Neither agree nor disagree)", score: 4 },
  { text: "Hơi không đồng ý (Disagree a little)", score: 3 },
  { text: "Tương đối không đồng ý (Disagree moderately)", score: 2 },
  { text: "Hoàn toàn không đồng ý (Disagree strongly)", score: 1 },
];

// ─── DANH SÁCH NGÀNH NGHỀ & LỘ TRÌNH ──────────────────────────────────────────
export const careers: Career[] = [
  {
    id: "computer-science",
    majorName: "computer science", // Phải khớp với data.csv
    name: "Khoa Học Máy Tính / Kỹ Sư Phần Mềm",
    description: "Nghiên cứu về hệ thống máy tính, thuật toán và phát triển phần mềm. Đây là ngành dành cho những người có tư duy logic cao, thích giải quyết vấn đề và đam mê công nghệ.",
    matchingScore: 0,
    coreSkills: ["Lập trình", "Thuật toán", "Tư duy Logic", "Giải quyết vấn đề"],
    requiredSkills: { "Logic": 9, "Toán": 8, "Lập trình": 8, "Phân tích": 9 },
    jobOutlook: "Nhu cầu nhân lực cực kỳ lớn",
    universityMajors: ["Khoa học máy tính", "Kỹ thuật phần mềm", "Trí tuệ nhân tạo"],
    roadmap: [
      {
        id: "p1", title: "Nền tảng CS", description: "Học tư duy lập trình và cấu trúc dữ liệu", duration: "6 tháng",
        courses: [{ id: "c1", title: "CS50: Introduction to Computer Science", platform: "edX", url: "https://cs50.harvard.edu/" }]
      }
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
    roadmap: [
      {
        id: "p1", title: "Đại cương Tâm lý", description: "Các học thuyết tâm lý học nền tảng", duration: "1 năm",
        courses: [{ id: "c1", title: "Introduction to Psychology", platform: "Coursera", url: "https://www.coursera.org/learn/introduction-psychology" }]
      }
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
    roadmap: []
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
    roadmap: []
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
    roadmap: []
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
    roadmap: []
  },
  {
    id: "information-technology",
    majorName: "information technology", // Khớp với data.csv
    name: "Công Nghệ Thông Tin",
    description: "Quản lý, vận hành và bảo mật hệ thống mạng, cơ sở dữ liệu. Khác với Kỹ sư phần mềm, ngành này thiên về tư duy hệ thống, xử lý sự cố phần cứng/mạng và phù hợp với những bạn thích cấu hình thiết bị, bảo mật dữ liệu.",
    matchingScore: 0,
    coreSkills: ["Quản trị mạng", "Bảo mật", "Hỗ trợ kỹ thuật", "Phân tích hệ thống"],
    requiredSkills: { "Giải quyết vấn đề": 9, "Tư duy hệ thống": 8, "Cẩn thận": 8, "Thích ứng nhanh": 9 },
    jobOutlook: "Cơ hội việc làm đa dạng ở mọi lĩnh vực",
    universityMajors: ["Công nghệ thông tin", "An toàn thông tin", "Hệ thống thông tin quản lý"],
    roadmap: [
      {
        id: "p1", title: "Căn bản về IT & Mạng", description: "Hiểu về cách máy tính giao tiếp và hoạt động cơ bản", duration: "3 tháng",
        courses: [{ id: "c1", title: "Google IT Support Professional Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-it-support" }]
      }
    ]
  },
  {
    id: "chemical-engineering",
    majorName: "chemical engineering", // Khớp với file data.csv
    name: "Kỹ Thuật Hóa Học / Kỹ Sư Hóa",
    description: "Ứng dụng kiến thức Hóa, Lý và Toán để biến các nguyên liệu thô thành những sản phẩm thiết yếu hàng ngày (mỹ phẩm, thực phẩm, thuốc, năng lượng). Rất phù hợp với những bạn yêu thích khoa học tự nhiên, đam mê làm thí nghiệm (nhóm Investigative) và thích thực hành chế tạo (nhóm Realistic).",
    matchingScore: 0,
    coreSkills: ["Nghiên cứu & Phát triển (R&D)", "Phân tích hóa học", "Vận hành dây chuyền", "Kiểm soát chất lượng (QC/QA)"],
    requiredSkills: { "Hóa học": 10, "Tư duy logic": 8, "Cẩn thận tỉ mỉ": 9, "Thực hành tay chân": 8 },
    jobOutlook: "Nhu cầu cao, thu nhập tốt trong các tập đoàn sản xuất, FMCG",
    universityMajors: ["Kỹ thuật hóa học", "Công nghệ kỹ thuật hóa học", "Hóa dược", "Công nghệ thực phẩm"],
    roadmap: [
      {
        id: "p1", 
        title: "Nền tảng Hóa học & Khám phá Kỹ thuật", 
        description: "Ôn tập kiến thức Hóa học cốt lõi và tìm hiểu cách các nhà máy vận hành quy trình sản xuất.", 
        duration: "3-6 tháng",
        courses: [
          { 
            id: "c1", 
            title: "College Chemistry (Hóa học Đại cương)", 
            platform: "Khan Academy", 
            url: "https://www.khanacademy.org/science/chemistry" 
          },
          { 
            id: "c2", 
            title: "Introduction to Chemical Engineering", 
            platform: "Coursera", 
            url: "https://www.coursera.org/learn/materials-science" // Khóa học đại cương về khoa học vật liệu/kỹ thuật
          }
        ]
      }
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
    roadmap: []
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
    roadmap: []
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
    roadmap: []
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
    roadmap: []
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
    roadmap: [
      {
        id: "p1", 
        title: "Tư duy Kỹ thuật & Vật lý ứng dụng", 
        description: "Xây dựng nền tảng vững chắc về Cơ học, Điện học và làm quen với công cụ thiết kế mô phỏng (CAD/Mạch điện) dành cho người mới bắt đầu.", 
        duration: "3-6 tháng",
        courses: [
          { 
            id: "c1", 
            title: "Electrical Engineering (Kỹ thuật Điện cơ bản)", 
            platform: "Khan Academy", 
            url: "https://www.khanacademy.org/science/electrical-engineering" 
          },
          { 
            id: "c2", 
            title: "Làm quen thiết kế 3D & Mạch điện ảo (Tinkercad)", 
            platform: "Autodesk", 
            url: "https://www.tinkercad.com/" 
          },
          { 
            id: "c3", 
            title: "Introduction to Engineering Mechanics (Cơ học kỹ thuật)", 
            platform: "Coursera", 
            url: "https://www.coursera.org/learn/engineering-mechanics-statics" 
          }
        ]
      }
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
    roadmap: []
  },
  {
    id: "social-work",
    majorName: "social work",
    name: "Công Tác Xã Hội",
    description: "Hỗ trợ và nâng cao chất lượng cuộc sống cho các cá nhân, gia đình và cộng đồng đang gặp khó khăn. Rất phù hợp với những người có lòng trắc ẩn, kiên nhẫn và kỹ năng kết nối xã hội (Social) mạnh mẽ.",
    matchingScore: 0,
    coreSkills: ["Tham vấn", "Tổ chức cộng đồng", "Đánh giá nhu cầu", "Lắng nghe sâu"],
    requiredSkills: { "Đồng cảm": 10, "Kiên nhẫn": 9, "Giao tiếp": 9, "Linh hoạt": 8 },
    jobOutlook: "Ngày càng được chú trọng trong xã hội hiện đại",
    universityMajors: ["Công tác xã hội", "Xã hội học"],
    roadmap: []
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
    roadmap: []
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
    roadmap: []
  },
  {
    id: "communication",
    majorName: "communication",
    name: "Truyền Thông Đại Chúng",
    description: "Sáng tạo và lan tỏa thông tin qua các phương tiện truyền thông như báo chí, đài phát thanh, truyền hình và mạng xã hội. Dành cho những người năng động, thích kết nối và có khả năng sử dụng ngôn ngữ linh hoạt.",
    matchingScore: 0,
    coreSkills: ["Viết lách", "Biên tập", "Nói trước công chúng", "Xử lý khủng hoảng"],
    requiredSkills: { "Giao tiếp": 10, "Sáng tạo": 8, "Ngôn ngữ": 9, "Linh hoạt": 9 },
    jobOutlook: "Năng động và mở ra nhiều cơ hội khởi nghiệp",
    universityMajors: ["Báo chí", "Truyền thông đa phương tiện", "Quan hệ công chúng"],
    roadmap: []
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
    roadmap: []
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
    roadmap: []
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
    roadmap: []
  },
  {
    id: "criminal-justice",
    majorName: "criminal justice",
    name: "Tư Pháp Hình Sự & An Ninh",
    description: "Nghiên cứu hệ thống pháp luật, tội phạm học và các cơ quan thực thi pháp luật. Phù hợp cho những ai có tinh thần trượng nghĩa, tư duy logic nhạy bén, dũng cảm và tuân thủ kỷ luật nghiêm ngặt.",
    matchingScore: 0,
    coreSkills: ["Điều tra", "Luật hình sự", "Tâm lý học tội phạm", "Bảo vệ an ninh"],
    requiredSkills: { "Tư duy logic": 9, "Chịu áp lực": 10, "Kỷ luật": 10, "Quan sát": 9 },
    jobOutlook: "Ngành nghề thiết yếu và mang tính đặc thù cao trong bộ máy nhà nước",
    universityMajors: ["Cảnh sát nhân dân", "An ninh nhân dân", "Tội phạm học", "Luật hình sự"],
    roadmap: []
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
    roadmap: []
  },
  {
    id: "counseling",
    majorName: "counseling",
    name: "Tham Vấn Tâm Lý & Trị Liệu",
    description: "Hỗ trợ và đồng hành cùng khách hàng vượt qua các vấn đề tâm lý, cảm xúc hoặc các biến cố trong cuộc sống. Đòi hỏi kỹ năng lắng nghe sâu sắc, sự thấu cảm tuyệt đối và tính kiên nhẫn cao.",
    matchingScore: 0,
    coreSkills: ["Lắng nghe tích cực", "Thấu cảm", "Giải quyết xung đột", "Tâm lý học hành vi"],
    requiredSkills: { "Thấu cảm": 10, "Giao tiếp": 9, "Lắng nghe": 10, "Kiên nhẫn": 9 },
    jobOutlook: "Nhu cầu chăm sóc sức khỏe tinh thần đang tăng vọt trong xã hội hiện đại",
    universityMajors: ["Tham vấn tâm lý", "Tâm lý học lâm sàng", "Công tác xã hội"],
    roadmap: []
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
    roadmap: []
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
    roadmap: []
  },
  {
    id: "political-science",
    majorName: "political science",
    name: "Khoa Học Chính Trị & Ngoại Giao",
    description: "Nghiên cứu về nhà nước, chính phủ, chính sách công và quan hệ quốc tế. Đòi hỏi sự nhạy bén với các vấn đề thời sự, tư duy chiến lược và kỹ năng ngoại giao, đàm phán xuất sắc.",
    matchingScore: 0,
    coreSkills: ["Phân tích chính sách", "Đàm phán", "Quan hệ công chúng", "Luật quốc tế"],
    requiredSkills: { "Tư duy chiến lược": 9, "Đàm phán": 9, "Giao tiếp": 10, "Nhạy bén": 8 },
    jobOutlook: "Môi trường làm việc danh giá tại các cơ quan nhà nước, đại sứ quán và tổ chức quốc tế",
    universityMajors: ["Quan hệ quốc tế", "Khoa học chính trị", "Chính sách công"],
    roadmap: []
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
    roadmap: []
  },
  {
    id: "science",
    majorName: "science",
    name: "Nghiên Cứu Khoa Học Tự Nhiên",
    description: "Khám phá các quy luật của tự nhiên, vật chất và vũ trụ (như Vật lý, Môi trường học). Sinh ra dành cho những bộ óc tò mò (Investigative), đam mê thí nghiệm và muốn giải quyết các thách thức toàn cầu.",
    matchingScore: 0,
    coreSkills: ["Phương pháp nghiên cứu", "Thu thập số liệu", "Suy luận logic", "Viết báo cáo học thuật"],
    requiredSkills: { "Phân tích": 10, "Tư duy logic": 9, "Kiên nhẫn": 9, "Quan sát": 8 },
    jobOutlook: "Rất quan trọng cho chiến lược phát triển bền vững của quốc gia",
    universityMajors: ["Khoa học môi trường", "Vật lý học", "Khoa học vật liệu", "Hải dương học"],
    roadmap: []
  },
  {
    id: "graphic-design",
    majorName: "graphic design",
    name: "Thiết Kế Đồ Họa & Mỹ Thuật",
    description: "Truyền tải thông điệp truyền thông thông qua hình ảnh, màu sắc và typography. Dành cho những bạn có óc thẩm mỹ cao (Artistic), yêu cái đẹp và luôn tràn ngập ý tưởng sáng tạo độc đáo.",
    matchingScore: 0,
    coreSkills: ["Sử dụng phần mềm (Adobe)", "Tư duy hình ảnh", "Phối màu & Bố cục", "UI/UX cơ bản"],
    requiredSkills: { "Sáng tạo": 10, "Thẩm mỹ": 10, "Thấu hiểu người dùng": 8, "Chịu áp lực": 8 },
    jobOutlook: "Nhu cầu cực cao trong kỷ nguyên Digital Marketing",
    universityMajors: ["Thiết kế đồ họa", "Mỹ thuật công nghiệp", "Thiết kế mỹ thuật số"],
    roadmap: []
  },
  {
    id: "logistics",
    majorName: "logistics",
    name: "Logistics & Chuỗi Cung Ứng",
    description: "Quản lý dòng chảy của hàng hóa từ nhà cung cấp đến tay người tiêu dùng cuối cùng. Cực kỳ phù hợp với những người có tư duy hệ thống, nhạy bén và giỏi sắp xếp, tổ chức (Conventional).",
    matchingScore: 0,
    coreSkills: ["Quản lý kho bãi", "Tối ưu hóa vận tải", "Đàm phán quốc tế", "Luật xuất nhập khẩu"],
    requiredSkills: { "Tư duy hệ thống": 9, "Giải quyết vấn đề": 9, "Chịu áp lực": 9, "Cẩn thận": 8 },
    jobOutlook: "Xương sống của thương mại điện tử, tăng trưởng bùng nổ",
    universityMajors: ["Logistics và Quản lý chuỗi cung ứng", "Kinh tế quốc tế", "Thương mại điện tử"],
    roadmap: []
  },
  {
    id: "tourism",
    majorName: "tourism",
    name: "Du Lịch & Quản Trị Khách Sạn",
    description: "Cung cấp trải nghiệm nghỉ dưỡng, vui chơi và dịch vụ lưu trú. Ngành nghề lý tưởng cho những cá nhân hướng ngoại, thân thiện (Social), yêu thích dịch vụ và giao tiếp đa văn hóa.",
    matchingScore: 0,
    coreSkills: ["Dịch vụ khách hàng", "Quản trị sự kiện", "Ngoại ngữ giao tiếp", "Xử lý tình huống"],
    requiredSkills: { "Giao tiếp": 10, "Thấu cảm": 9, "Linh hoạt": 9, "Thể lực": 7 },
    jobOutlook: "Phục hồi mạnh mẽ và luôn khát nhân sự chất lượng cao",
    universityMajors: ["Quản trị dịch vụ du lịch và lữ hành", "Quản trị khách sạn", "Việt Nam học"],
    roadmap: []
  },
  {
    id: "data-science",
    majorName: "data science",
    name: "Khoa Học Dữ Liệu & AI",
    description: "Khai thác 'vàng' từ những mỏ dữ liệu khổng lồ để đưa ra dự đoán và quyết định chiến lược. Đây là ngành giao thoa đỉnh cao giữa Toán học, Thống kê và Khoa học máy tính.",
    matchingScore: 0,
    coreSkills: ["Lập trình Python/R", "Machine Learning", "Thống kê ứng dụng", "Trực quan hóa dữ liệu"],
    requiredSkills: { "Toán học": 10, "Phân tích logic": 10, "Giải quyết vấn đề": 9, "Nhạy bén kinh doanh": 7 },
    jobOutlook: "Được Harvard Business Review ví là 'Nghề quyến rũ nhất thế kỷ 21'",
    universityMajors: ["Khoa học dữ liệu", "Trí tuệ nhân tạo", "Toán tin ứng dụng", "Hệ thống thông tin"],
    roadmap: []
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
    roadmap: [
      {
        id: "p1", title: "Nền tảng Kỹ thuật Điện", description: "Nắm vững các định luật vật lý điện từ và linh kiện điện tử cơ bản.", duration: "6 tháng",
        courses: [{ id: "c1", title: "Circuits and Electronics", platform: "edX (MIT)", url: "https://www.edx.org/learn/electronics" }]
      }
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
    roadmap: [
      {
        id: "p1", title: "Vật lý đại cương & Toán vi tích phân", description: "Xây dựng tư duy không gian và toán học ứng dụng để giải thích các hiện tượng vật lý.", duration: "1 năm",
        courses: [{ id: "c1", title: "Classical Mechanics", platform: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/physics/" }]
      }
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
    roadmap: [
      {
        id: "p1", title: "Nhạc lý cơ bản", description: "Hiểu về nhịp điệu, hợp âm, cách đọc sheet nhạc và luyện tai nghe.", duration: "3-6 tháng",
        courses: [{ id: "c1", title: "Fundamentals of Music Theory", platform: "Coursera (UoE)", url: "https://www.coursera.org/learn/edinburgh-music-theory" }]
      }
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
    roadmap: [
      {
        id: "p1", title: "Nền tảng Mỹ thuật & Công cụ", description: "Học quy luật bố cục, màu sắc, Typography và sử dụng thành thạo Adobe Illustrator/Photoshop.", duration: "6 tháng",
        courses: [{ id: "c1", title: "Graphic Design Specialization", platform: "Coursera (CalArts)", url: "https://www.coursera.org/specializations/graphic-design" }]
      }
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
    roadmap: [
      {
        id: "p1", title: "Lịch sử Triết học cơ bản", description: "Tìm hiểu tư tưởng của các triết gia cổ đại và các luồng tư tưởng hiện đại, rèn luyện cách đặt câu hỏi.", duration: "6 tháng",
        courses: [{ id: "c1", title: "Introduction to Philosophy", platform: "Coursera (UoE)", url: "https://www.coursera.org/learn/philosophy" }]
      }
    ]
  },
  {
    id: "mathematics",
    majorName: "mathematics", // Khớp với file data.csv
    name: "Toán Học / Toán Ứng Dụng",
    description: "Không chỉ là giải phương trình trên giấy, Toán học hiện đại là nền tảng để xây dựng Trí tuệ nhân tạo (AI), phân tích dữ liệu và dự báo kinh tế. Ngành này là 'chân ái' của những bạn có tư duy logic sắc bén (Investigative), thích làm việc với con số và giải quyết các bài toán phức tạp bằng mô hình định lượng.",
    matchingScore: 0,
    coreSkills: ["Tư duy logic", "Mô hình hóa toán học", "Thống kê & Xác suất", "Phân tích định lượng"],
    requiredSkills: { "Toán học": 10, "Tư duy Logic": 10, "Phân tích dữ liệu": 8, "Sự kiên nhẫn": 9 },
    jobOutlook: "Nhu cầu khổng lồ trong mảng AI, Data Science và Tài chính định lượng",
    universityMajors: ["Toán ứng dụng", "Toán tin", "Thống kê và Khoa học dữ liệu", "Sư phạm Toán"],
    roadmap: [
      {
        id: "p1", 
        title: "Nền tảng Toán học Đại học & Khoa học Dữ liệu", 
        description: "Làm quen với Giải tích, Đại số tuyến tính và cách ứng dụng Toán học vào lập trình hoặc phân tích dữ liệu (Data Science).", 
        duration: "3-6 tháng",
        courses: [
          { 
            id: "c1", 
            title: "Calculus 1 (Giải tích cơ bản)", 
            platform: "Khan Academy", 
            url: "https://www.khanacademy.org/math/calculus-1" 
          },
          { 
            id: "c2", 
            title: "Data Science Math Skills (Toán cho Khoa học dữ liệu)", 
            platform: "Coursera", 
            url: "https://www.coursera.org/learn/datasciencemathskills" 
          }
        ]
      }
    ]
  },
  {
    id: "communication",
    majorName: "communication", // Khớp với file data.csv
    name: "Truyền Thông & Quan Hệ Công Chúng (PR)",
    description: "Nghệ thuật của ngôn từ và sự kết nối. Đây là sân chơi dành cho những bạn hướng ngoại (Social & Enterprising), thích viết lách, sáng tạo nội dung (Artistic), tự tự giao tiếp trước đám đông và có sự nhạy bén tuyệt vời với các xu hướng (trend) của xã hội.",
    matchingScore: 0,
    coreSkills: ["Sáng tạo nội dung (Content)", "Giao tiếp công chúng", "Kể chuyện (Storytelling)", "Xử lý khủng hoảng"],
    requiredSkills: { "Giao tiếp": 10, "Viết lách": 9, "Nắm bắt tâm lý": 8, "Sáng tạo linh hoạt": 9 },
    jobOutlook: "Cơ hội rộng mở tại các Agency, Đài truyền hình, Doanh nghiệp lớn",
    universityMajors: ["Truyền thông đa phương tiện", "Quan hệ công chúng (PR)", "Báo chí", "Đông phương học"],
    roadmap: [
      {
        id: "p1", 
        title: "Kỹ năng Viết & Nhập môn Truyền thông", 
        description: "Khám phá cách xây dựng chiến lược truyền thông, viết thông cáo báo chí và nghệ thuật kể chuyện thu hút người đọc.", 
        duration: "2-4 tháng",
        courses: [
          { 
            id: "c1", 
            title: "Introduction to Public Relations and the Media", 
            platform: "Coursera", 
            url: "https://www.coursera.org/learn/public-relations" 
          },
          { 
            id: "c2", 
            title: "Good with Words: Writing and Editing (Kỹ năng viết lách)", 
            platform: "Coursera", 
            url: "https://www.coursera.org/learn/writing-editing-words" 
          }
        ]
      }
    ]
  }
];

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