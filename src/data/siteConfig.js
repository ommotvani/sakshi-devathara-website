export const SITE_CONFIG = {
  profile: {
    name: "Sakshi Devathara",
    brandTitle: "LTech Sakshi Devathara",
    role: "Government Exam Aspirant & Study Content Creator",
    focus: "Gujarat Competitive Exams • Gujarat CCE & GPSC",
    heroQuote: "Dream Big. Study Smart. Stay Consistent. Achieve Your Goals. 🎯📚",
    instagramUrl: "https://www.instagram.com/ltech_sakshi_devathara/",
    telegramUrl: "https://t.me/+qxFd09XOPb9jMWQ1",
    email: "sakshidevathara303@gmail.com"
  },

  // 3 INSTAGRAM REELS (as specified in user requirements)
  reels: [
    {
      id: "reel-1",
      url: "https://www.instagram.com/reel/Dc8S6PcN09r/?obrf=MTlheTd0ZDl6cWc5eg==",
      embedUrl: "https://www.instagram.com/reel/Dc8S6PcN09r/embed",
      title: "Mock Test Analysis & Mistake Notebook Guide",
      category: "Mock Analysis",
      duration: "0:38",
      coverImage: "/study_pic.jpg",
      fallbackImage: "/reel3.jpg",
      highlightQuote: "Every wrong question is your stepping stone to selection. 📝"
    },
    {
      id: "reel-2",
      url: "https://www.instagram.com/p/DbybguIDVOw/?srtk=MWt6NWMxb3k1cGo1",
      embedUrl: "https://www.instagram.com/p/DbybguIDVOw/embed",
      title: "Polity & Constitution High-Yield Revision Framework",
      category: "Polity Revision",
      duration: "0:52",
      coverImage: "/image_5.jpeg",
      fallbackImage: "/reel2.jpg",
      highlightQuote: "Articles, Amendments & Landmark Judgments made simple! 🏛️"
    },
    {
      id: "reel-3",
      url: "https://www.instagram.com/reel/Dc9SttqtDPs/?cplk=MTRlc284MnpoeTNqag==",
      embedUrl: "https://www.instagram.com/reel/Dc9SttqtDPs/embed",
      title: "CCE Preparation Strategy & Geography Study Routine",
      category: "Strategy & Notes",
      duration: "0:45",
      coverImage: "/image_1.jpeg",
      fallbackImage: "/reel1.jpg",
      highlightQuote: "Target consistency over marathon hours. 🎯"
    }
  ],

  // 9 FLIP SUBJECT CARDS
  subjects: [
    {
      id: "geography",
      title: "Gujarat & India Geography",
      icon: "🗺️",
      weightage: "High Weightage • 25+ Marks",
      topics: [
        "Physical Geography of Gujarat & India",
        "River Systems, Dams & Drainage Basins",
        "Climate, Monsoon & Soil Classification",
        "Mineral Wealth, Sanctuaries & National Parks"
      ],
      tip: "Study river courses alongside district maps. Our official Geography PDF covers the complete map framework.",
      category: "geography"
    },
    {
      id: "polity",
      title: "Indian Constitution & Polity",
      icon: "🏛️",
      weightage: "High Weightage • 25-30 Marks",
      topics: [
        "Preamble & Fundamental Rights (Arts 12-35)",
        "Directive Principles & Fundamental Duties",
        "Parliament, Governor & State Legislature",
        "Judiciary, Panchayati Raj & Constitutional Bodies"
      ],
      tip: "Focus heavily on Articles 12 to 51A, recent constitutional amendments, and landmark Supreme Court verdicts.",
      category: "polity"
    },
    {
      id: "gujarat-history",
      title: "Gujarat History & Heritage",
      icon: "🦁",
      weightage: "Core Gujarat • 30+ Marks",
      topics: [
        "Solanki Era, Chavda & Maitraka Dynasties",
        "Mahagujarat Movement & Freedom Struggle",
        "Gujarat Fairs, Folk Traditions & Architecture",
        "Tribal Culture & Craft Heritage"
      ],
      tip: "Prepare district-wise cultural heritage charts for rapid memory retention before mock tests.",
      category: "gujarat-gk"
    },
    {
      id: "economy",
      title: "Indian Economy & Budget",
      icon: "📈",
      weightage: "Analytical • 15-20 Marks",
      topics: [
        "Union Budget & Gujarat State Budget",
        "Monetary Policy & RBI Key Rates",
        "GST, Taxation & Fiscal Deficit",
        "NITI Aayog & Flagship Economic Schemes"
      ],
      tip: "Connect macroeconomic concepts with the latest economic surveys of Gujarat and India.",
      category: "polity"
    },
    {
      id: "science-tech",
      title: "Science & Technology",
      icon: "🔬",
      weightage: "Conceptual • 15-20 Marks",
      topics: [
        "Everyday Physics & Applied Chemistry",
        "Human Biology, Immunology & Disease Vectors",
        "ISRO Space Missions & Defense Technology",
        "Emerging Tech, AI & Cyber Security"
      ],
      tip: "Public health, immunology, and recent space missions have frequent questions in CCE exams.",
      category: "science"
    },
    {
      id: "maths-reasoning",
      title: "Mathematics & Reasoning",
      icon: "🔢",
      weightage: "Scoring • 30-40 Marks",
      topics: [
        "Number Series, Syllogisms & Coding",
        "Percentages, Profit & Loss, Ratio",
        "Time, Work & Distance Calculations",
        "Data Interpretation (DI) Charts"
      ],
      tip: "Dedicate 30 minutes daily to calculation shortcuts and speed math to save crucial minutes.",
      category: "maths"
    },
    {
      id: "current-affairs",
      title: "Current Affairs & Events",
      icon: "📰",
      weightage: "Crucial • 25+ Marks",
      topics: [
        "Monthly National & State Affairs",
        "Sports Honors, Summits & Bilateral Pacts",
        "Key Committees, Appointments & Indices",
        "Gujarat Government Initiatives"
      ],
      tip: "Revise last 6 months current affairs using active recall and concise monthly summaries.",
      category: "current-affairs"
    },
    {
      id: "schemes",
      title: "Government Welfare Schemes",
      icon: "📜",
      weightage: "High Impact • 12-15 Marks",
      topics: [
        "Gujarat State Welfare Schemes",
        "Central Flagship Schemes (PM-KISAN, PMJAY)",
        "Eligibility Criteria & Nodal Ministries",
        "Budget Outlays & Beneficiary Portals"
      ],
      tip: "Build a 3-column table: Scheme Name | Launch Year & Ministry | Beneficiary Eligibility.",
      category: "schemes"
    },
    {
      id: "gujarati-lang",
      title: "Gujarati Language & Grammar",
      icon: "✍️",
      weightage: "Language Paper • High Scoring",
      topics: [
        "Jodni, Sandhi & Samas Rules",
        "Chhand, Alankar & Proverbs (Kahavat)",
        "Synonyms, Antonyms & Shabdsamuh",
        "Essay Structuring & Comprehension"
      ],
      tip: "Study standard Gujarati Bhasha Niyamavali and write one precise comprehension piece each week.",
      category: "gujarat-gk"
    }
  ],

  // 4 JOURNEY MILESTONES
  journey: [
    {
      number: "01",
      title: "The Healthcare Foundation",
      subtitle: "Discipline, Precision & Care",
      desc: "Graduated with B.Sc. in Microbiology with Top 5 University Distinction, followed by Top 10 rank in Medical Laboratory Technology. Practical experience at U.N. Mehta Institute and Ahmedabad Civil Hospital taught me focus under pressure.",
      icon: "🏥"
    },
    {
      number: "02",
      title: "The Pivot to Public Service",
      subtitle: "A Broader Calling",
      desc: "Realizing that public administration allows systemic impact on people's lives, I shifted full focus towards Gujarat civil services exams (CCE & GPSC), bringing scientific discipline to civil preparation.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Discipline Over Motivation",
      subtitle: "Overcoming Setbacks",
      desc: "Preparation is rarely a straight line. Dealing with vast syllabi and long exam cycles requires structured routines, active retrieval, and an unwavering commitment to daily study targets.",
      icon: "⏳"
    },
    {
      number: "04",
      title: "Giving Back to Aspirants",
      subtitle: "LTech Sakshi Devathara",
      desc: "Founded LTech Sakshi Devathara to share transparent strategies, authentic handwritten study notes, and honest guidance to help every sincere aspirant realize their government job dream.",
      icon: "🌟"
    }
  ],

  // 9 STRATEGIC TIPS
  tips: [
    { num: 1, title: "Understand Syllabus & Pattern", desc: "Print the official syllabus and keep it on your desk. Don't read a single topic outside the exam boundaries." },
    { num: 2, title: "Set Realistic Daily Targets", desc: "Break your weekly goals into manageable 2-hour slots. Achieving smaller targets builds continuous momentum." },
    { num: 3, title: "Concepts Before Memorizing", desc: "Rote learning fails in application-based questions. Understand the logic and mechanism behind concepts first." },
    { num: 4, title: "Practise Question Banks Regularly", desc: "Reading is passive; solving questions is active retrieval. Solve topic-wise practice sets daily with a timer." },
    { num: 5, title: "Revise Multiple Times", desc: "Adopt the 1-7-30 revision rule: revise notes after 1 day, 7 days, and 30 days to cement into long-term memory." },
    { num: 6, title: "Analyse Every Mock Test", desc: "Spend twice the time analyzing a test as you did taking it. Maintain an error notebook for silly mistakes." },
    { num: 7, title: "Follow Reliable Current Affairs", desc: "Rely strictly on authentic PIB releases, government portals, and standard monthly compilations." },
    { num: 8, title: "Avoid Unnecessary Resources", desc: "10 books read once is a disaster; 1 standard book read 10 times is guaranteed selection." },
    { num: 9, title: "Stay Relentlessly Consistent", desc: "6 focused hours every single day beats 14 erratic hours once a week. Discipline is your superpower." }
  ],

  mistakesToAvoid: [
    "Collecting too many books and study materials without completing one standard source.",
    "Ignoring revision cycles and moving blindly to new topics every week.",
    "Neglecting previous years' question papers (PYQs) and exam pattern analysis.",
    "Procrastinating on weak subjects like Maths, Reasoning, or Gujarati grammar.",
    "Skipping mock test analysis and repeating the exact same errors."
  ],

  // ACHIEVEMENTS
  achievements: [
    {
      id: "ach-1",
      badge: "Academic Excellence",
      title: "B.Sc. Microbiology — Distinction (Top 5)",
      desc: "Ranked among the Top 5 in university examinations with distinction, establishing a rigorous foundation in analytical thinking and biological sciences.",
      icon: "🏆"
    },
    {
      id: "ach-2",
      badge: "State Ranking",
      title: "Top 10 in Medical Laboratory Tech (MLT)",
      desc: "Secured a prestigious Top 10 state rank in Medical Laboratory Technology, demonstrating precision and high-level execution under strict criteria.",
      icon: "🔬"
    },
    {
      id: "ach-3",
      badge: "Clinical Experience",
      title: "OT Management & Ahmedabad Civil Hospital",
      desc: "Clinical studies and high-stakes operation theatre management training at U. N. Mehta Institute of Cardiology and Ahmedabad Civil Hospital.",
      icon: "🏥"
    },
    {
      id: "ach-4",
      badge: "Target Milestone",
      title: "Gujarat CCE Rank & Scorecard Milestone",
      desc: "Official Gujarat CCE selection results and merit milestones will be published directly here as ongoing recruitment cycles conclude.",
      icon: "🎯"
    }
  ],

  // STUDY MATERIALS & PDFS (2 Currently Active Official PDFs on Sakshi's Profile)
  notes: [
    {
      id: "geo-pdf",
      title: "Geography by Sakshi Devathara",
      filename: "GEO BY SAKSHI DEVATHARA.pdf",
      subject: "Gujarat & India Geography",
      category: "geography",
      language: "Gujarati & English",
      langBadge: "Official Google Drive 🇮🇳",
      size: "Complete PDF Document",
      pages: "Full Syllabus",
      downloads: "Verified Direct Link",
      isAvailable: true,
      badge: "Verified Material",
      coverImage: "/geography-cover.jpg",
      fileId: "17EtVk-3UMIjkB8mk5zUtjEqKQkOJW-6o",
      driveUrl: "https://drive.google.com/file/d/17EtVk-3UMIjkB8mk5zUtjEqKQkOJW-6o/view?usp=sharing",
      driveDirectUrl: "https://drive.google.com/uc?export=download&id=17EtVk-3UMIjkB8mk5zUtjEqKQkOJW-6o",
      reelUrl: "https://www.instagram.com/reel/Dc9SttqtDPs/?cplk=MTRlc284MnpoeTNqag==",
      description: "Official comprehensive handwritten notes covering Gujarat & India physical geography, river basins, climate, soil zones, district map framework, and high-yield CCE & GPSC questions. Free to view and download on Google Drive."
    },
    {
      id: "panchayat-raj-pdf",
      title: "Panchayati Raj by Sakshi Devathara",
      filename: "PANCHAYAT RAJ BY SAKSHI DEVATHARA .pdf",
      subject: "Indian Constitution & Panchayati Raj",
      category: "panchayati-raj",
      language: "Gujarati & English",
      langBadge: "Official Google Drive 🇮🇳",
      size: "Complete PDF Document",
      pages: "Full Syllabus",
      downloads: "Verified Direct Link",
      isAvailable: true,
      badge: "Verified Material",
      coverImage: "/panchayat-raj-cover.jpg",
      fileId: "1Bp1yejXOTMGZDvlb4LvPYnPteSvD3EAE",
      driveUrl: "https://drive.google.com/file/d/1Bp1yejXOTMGZDvlb4LvPYnPteSvD3EAE/view?usp=drivesdk",
      driveDirectUrl: "https://drive.google.com/uc?export=download&id=1Bp1yejXOTMGZDvlb4LvPYnPteSvD3EAE",
      reelUrl: "https://www.instagram.com/p/DbybguIDVOw/?srtk=MWt6NWMxb3k1cGo1",
      description: "Official complete study guide on the 73rd Constitutional Amendment Act, Gujarat Panchayati Raj Act 1993, 3-tier local self-governance (Gram, Taluka & District Panchayat), committees, finances, and high-yield exam provisions."
    },
    {
      id: "polity-notes",
      title: "Indian Constitution Articles 1 to 51A Mindmap & Summary",
      filename: "Polity_Summary_Notes.pdf",
      subject: "Polity & Constitution",
      category: "polity",
      language: "Gujarati",
      langBadge: "In Preparation ⏳",
      size: "Coming Soon",
      pages: "In Compilation",
      downloads: "Releasing Soon",
      isAvailable: false,
      badge: "In Preparation",
      coverImage: null,
      driveUrl: null,
      reelUrl: null,
      description: "High-yield summary of Fundamental Rights, DPSP, Parliament, and Constitutional amendments. Currently being compiled by Sakshi."
    },
    {
      id: "guj-history",
      title: "Gujarat History & Solanki Dynasty Cultural Heritage",
      filename: "Gujarat_History_Notes.pdf",
      subject: "Gujarat History & Heritage",
      category: "gujarat-gk",
      language: "Gujarati",
      langBadge: "In Preparation ⏳",
      size: "Coming Soon",
      pages: "In Compilation",
      downloads: "Releasing Soon",
      isAvailable: false,
      badge: "In Preparation",
      coverImage: null,
      driveUrl: null,
      reelUrl: null,
      description: "Chronological Gujarat history, Mahagujarat movement, and heritage monuments. In preparation for upload."
    },
    {
      id: "science-tech",
      title: "Science & Technology High-Yield Exam Review (Microbiology & Tech)",
      filename: "Science_Tech_Review.pdf",
      subject: "Science & Technology",
      category: "science",
      language: "English",
      langBadge: "In Preparation ⏳",
      size: "Coming Soon",
      pages: "In Compilation",
      downloads: "Releasing Soon",
      isAvailable: false,
      badge: "In Preparation",
      coverImage: null,
      driveUrl: null,
      reelUrl: null,
      description: "Applied biology, disease vectors, ISRO space missions, and defense technology for Gujarat CCE Group A/B."
    }
  ],

  // EXAM NOTICES
  updates: [
    {
      id: "up-1",
      day: "12",
      month: "Oct",
      year: "2026",
      title: "Gujarat CCE (Combined Competitive Exam) Group A & B Prelims Schedule",
      desc: "GSSSB released tentative schedule and updated call letter instructions for Group A & Group B posts.",
      status: "Important Notice",
      statusClass: "tag-active",
      link: "https://gsssb.gujarat.gov.in/"
    },
    {
      id: "up-2",
      day: "28",
      month: "Sep",
      year: "2026",
      title: "GPSC Class 1 & 2 Preliminary Examination Calendar Published",
      desc: "Gujarat Public Service Commission announces the annual recruitment calendar for administrative services.",
      status: "Calendar Out",
      statusClass: "tag-upcoming",
      link: "https://gpsc.gujarat.gov.in/"
    },
    {
      id: "up-3",
      day: "15",
      month: "Sep",
      year: "2026",
      title: "Revised Syllabus & Negative Marking Guidelines for Gujarat Recruitment Exams",
      desc: "Official clarification regarding 0.25 negative marking format and section-wise time distribution.",
      status: "Official Rule",
      statusClass: "tag-active",
      link: "https://gsssb.gujarat.gov.in/"
    }
  ]
};

