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

export const careers: Career[] = [
  {
    id: "computer-science",
    majorName: "computer science", // Phải khớp với data.csv
    name: "Khoa Học Máy Tính / Kỹ Sư Phần Mềm",
    description: "Nghiên cứu về hệ thống máy tính, thuật toán và phát triển phần mềm. Đây là ngành dành cho những người có tư duy logic cao, thích giải quyết vấn đề và đam mê công nghệ.",
    matchingScore: 0,
    coreSkills: ["Lập trình", "Thuật toán", "Tư duy Logic", "Giải quyết vấn đề"],
    requiredSkills: { "Logic": 9, "Toán học": 8, "Lập trình": 8, "Phân tích": 9 },
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
    requiredSkills: { "Giải quyết vấn đề": 9, "Toán & Lý": 8, "Thực hành": 10, "Cẩn thận": 8 },
    jobOutlook: "Trụ cột không thể thiếu của nền công nghiệp",
    universityMajors: ["Kỹ thuật cơ khí", "Kỹ thuật điện - điện tử", "Kỹ thuật tự động hóa"],
    roadmap: []
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
    requiredSkills: { "Toán & Lý": 9, "Thực hành": 9, "Sáng tạo": 7, "Cẩn thận": 8 },
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
  }
];

export const personalityQuestions = [
  {
    id: "q1",
    question: "Bạn thích làm việc theo cách nào hơn?",
    options: [
      { text: "Độc lập, tự quản lý công việc", traits: ["independent", "analytical"] },
      { text: "Làm việc nhóm, trao đổi nhiều", traits: ["collaborative", "social"] },
      { text: "Kết hợp cả hai", traits: ["flexible"] },
    ],
  },
  {
    id: "q2",
    question: "Điều gì khiến bạn hứng thú nhất trong tương lai?",
    options: [
      { text: "Giải quyết vấn đề logic, kỹ thuật", traits: ["analytical", "technical"] },
      { text: "Sáng tạo nội dung, thiết kế", traits: ["creative", "artistic"] },
      { text: "Làm việc với con người, giao tiếp", traits: ["social", "communicative"] },
    ],
  },
  {
    id: "q3",
    question: "Bạn mô tả bản thân là người như thế nào?",
    options: [
      { text: "Có tư duy logic, thích phân tích", traits: ["analytical", "detail-oriented"] },
      { text: "Sáng tạo, giàu tưởng tượng", traits: ["creative", "innovative"] },
      { text: "Năng động, thích giao tiếp", traits: ["social", "energetic"] },
    ],
  },
  {
    id: "q4",
    question: "Môi trường học tập/làm việc bạn yêu thích?",
    options: [
      { text: "Yên tĩnh, có thể tập trung sâu", traits: ["focused", "independent"] },
      { text: "Năng động, đa dạng hoạt động", traits: ["creative", "flexible"] },
      { text: "Nhiều người, có tương tác", traits: ["social", "dynamic"] },
    ],
  },
  {
    id: "q5",
    question: "Khi học điều mới, bạn thích cách nào?",
    options: [
      { text: "Đọc tài liệu, nghiên cứu kỹ", traits: ["analytical", "studious"] },
      { text: "Thực hành, thử nghiệm ngay", traits: ["practical", "hands-on"] },
      { text: "Trao đổi, học từ bạn bè", traits: ["collaborative", "social"] },
    ],
  },
  {
    id: "q6",
    question: "Bạn cảm thấy tự tin khi làm gì?",
    options: [
      { text: "Làm việc với số liệu, dữ liệu", traits: ["analytical", "technical"] },
      { text: "Sáng tạo ý tưởng mới", traits: ["creative", "innovative"] },
      { text: "Thuyết trình, nói trước đám đông", traits: ["social", "communicative"] },
    ],
  },
  {
    id: "q7",
    question: "Môn học nào bạn thích nhất ở trường?",
    options: [
      { text: "Toán, Lý, Hóa học", traits: ["analytical", "technical"] },
      { text: "Văn, Nghệ thuật, Âm nhạc", traits: ["creative", "artistic"] },
      { text: "Sử, Địa, Ngoại ngữ", traits: ["social", "communicative"] },
    ],
  },
  {
    id: "q8",
    question: "Trong dự án nhóm, bạn thường làm gì?",
    options: [
      { text: "Phân tích vấn đề và tìm giải pháp", traits: ["analytical", "problem-solving"] },
      { text: "Đưa ra ý tưởng sáng tạo", traits: ["creative", "innovative"] },
      { text: "Điều phối và giao tiếp giữa các thành viên", traits: ["leadership", "social"] },
    ],
  },
];