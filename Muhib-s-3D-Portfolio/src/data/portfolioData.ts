export interface ExpertiseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  iconType: "ai" | "cloud" | "distributed" | "database";
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  category: string;
  journal: string;
  year: string;
  description: string;
  doi?: string;
  doiUrl?: string;
  image?: string;
}

export interface AchievementItem {
  title: string;
  organization?: string;
  period?: string;
  badge: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  provider?: string;
  highlight?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  highlight?: boolean;
}

export const portfolioData = {
  personal: {
    name: "Dr. Muhib Anwar Lambay",
    shortName: "Dr. Muhib Lambay",
    initials: "ML",
    honorific: "Dr.",
    degrees: "Ph.D. | M.Tech | B.E.",
    role: "Assistant Professor & Researcher",
    subtitle: "Department of Computer Science & Engineering (AIML)",
    identity: "Educator | Researcher | Admission & Career Guidance Counselor | Oracle Database 10g Certified Associate",
    college: "Anjuman-I-Islam's Saboo Siddik College of Engineering",
    department: "Department of Computer Science & Engineering (AIML)",
    location: "Byculla, Mumbai, India",
    experienceYears: "17+ Years of Academic Experience",
    emailPrimary: "muhib.lambay@mhssce.ac.in",
    emailPersonal: "lambaymuhib@gmail.com",
    phone: "+91 9969599258",
    phoneRaw: "9969599258",
    photoUrl: "/images/muhib_lambay.jpg",
    website: "https://muhiblambay.netlify.app/",
    googleScholar: "https://shorturl.at/bCaaW",
    linkedin: "https://www.linkedin.com/in/dr-muhib-anwar-lambay/",
    status: "Available for Academic Research & Collaboration"
  },

  academicStats: [
    { label: "Academic Experience", value: "17+", suffix: "Years" },
    { label: "International Journals", value: "23", suffix: "Papers" },
    { label: "Conference Papers", value: "6", suffix: "Proceedings" },
    { label: "Intellectual Property", value: "1", suffix: "Patent" },
    { label: "B.E. Project Groups", value: "30+", suffix: "Supervised" }
  ],

  about: {
    heading: "Bridging Academic Rigor with Cutting-Edge Computing & AI",
    bio: [
      "Dr. Muhib Anwar Lambay is a seasoned academician, computer science researcher, and educational leader with over 17 years of distinguished academic experience. He holds a Ph.D. and M.Tech in Computer Science and Engineering, underpinned by a foundational B.E. in Computer Engineering.",
      "Currently serving as Assistant Professor in the Department of Computer Science & Engineering (AIML) at Anjuman-I-Islam's Saboo Siddik College of Engineering, Byculla, Mumbai, he specializes in Machine Learning, Artificial Intelligence, Big Data Analytics, Cloud Computing, Distributed Systems, Web Technologies, and Database Technologies.",
      "An Oracle Database 10g Administrator Certified Associate (DBA_OCA), Dr. Lambay blends deep industry certifications with academic mentorship, having supervised more than 30 undergraduate capstone engineering project groups, spearheaded curriculum design as per NEP and Autonomy, and contributed actively to peer-reviewed international journals."
    ],
    specializations: [
      "Machine Learning",
      "Artificial Intelligence",
      "Big Data Analytics",
      "Cloud Computing",
      "Distributed Systems",
      "Web Technologies",
      "Database Technologies"
    ]
  },

  expertise: [
    {
      id: "ml-ai",
      title: "Machine Learning & Artificial Intelligence",
      category: "Intelligent Systems",
      description: "Extensive teaching and research experience, published in reputed journals, and supervised undergraduate projects in ML/AI.",
      technologies: ["Deep Learning", "Supervised Learning", "Predictive Modeling", "Neural Networks", "Healthcare AI"],
      iconType: "ai"
    },
    {
      id: "big-data-cloud",
      title: "Big Data Analytics & Cloud Computing",
      category: "Scalable Computing",
      description: "Specialized knowledge and publication record; involved in related research and curriculum development.",
      technologies: ["Big Data Analytics", "Cloud Computing", "AWS", "Data Mining", "Large-Scale Processing"],
      iconType: "cloud"
    },
    {
      id: "distributed-web",
      title: "Distributed Systems & Web Technologies",
      category: "System Architectures",
      description: "Academic instruction and research in distributed and web-based systems.",
      technologies: ["Distributed Systems", "Web Architecture", "HTML/JavaScript", "Network Systems", "System Admin"],
      iconType: "distributed"
    },
    {
      id: "databases",
      title: "Database Technologies",
      category: "Data Engineering",
      description: "Skilled in DBMS, data warehousing, and related subjects, with training and Oracle certification.",
      technologies: ["Oracle Database 10g", "MySQL", "SQL", "Data Warehousing (DWM)", "Database Administration (DBA)"],
      iconType: "database"
    }
  ] as ExpertiseItem[],

  technicalSkills: [
    {
      category: "Programming & Query Languages",
      items: ["C", "C++", "Python", "SQL", "HTML", "JavaScript"]
    },
    {
      category: "Tools & Development Environments",
      items: ["Git", "VS Code", "Jupyter"]
    },
    {
      category: "Database Technologies",
      items: ["MySQL", "Oracle"]
    },
    {
      category: "Cloud & Operating Systems",
      items: ["AWS", "Linux", "Windows"]
    }
  ] as SkillCategory[],

  experience: [
    {
      period: "Current",
      role: "Assistant Professor",
      institution: "Anjuman-I-Islam's Saboo Siddik College of Engineering",
      location: "Byculla, Mumbai",
      isCurrent: true,
      responsibilities: [
        "Department of Computer Science & Engineering (AIML).",
        "Instructing advanced coursework in Artificial Intelligence, Machine Learning, and core computing disciplines.",
        "Guiding undergraduate research, projects, and academic development.",
        "Contributing to department academic leadership and institutional excellence."
      ]
    },
    {
      period: "August 2023 — September 2025",
      role: "Assistant Professor & Micro Master Program Coordinator",
      institution: "Anjuman-I-Islam's Kalsekar Technical Campus",
      location: "New Panvel, Navi Mumbai",
      responsibilities: [
        "Project Guide for student capstone projects and technical seminars.",
        "Class Advisor for student academic and career counseling.",
        "NAAC Coordinator for Criteria VII (Institutional Values and Best Practices).",
        "Skill India Development Coordinator.",
        "Taught Operating Systems, Database Management Systems, Machine Learning, and Python Programming."
      ]
    },
    {
      period: "January 2023 — July 2023",
      role: "Assistant Professor & Mini-Project Coordinator",
      institution: "Universal College of Engineering",
      location: "Vasai Road, Palghar",
      responsibilities: [
        "Mini-Project coordination and student mentorship.",
        "Academic instruction in Data Warehousing & Mining, Machine Learning, and Python Programming.",
        "Academic planning and institutional curriculum development.",
        "Conducted seminars, faculty workshops, and assisted in organizing collegiate technical events."
      ]
    },
    {
      period: "July 2010 — January 2023",
      role: "Assistant Professor & Project Coordinator",
      institution: "Theem College of Engineering",
      location: "Boisar, Palghar",
      responsibilities: [
        "System Administrator for comprehensive institute IT infrastructure.",
        "TCS Test Centre Administrator.",
        "NPTEL Nodal Coordinator & Smart India Hackathon (SIH) Nodal Coordinator.",
        "Website Developer and Institutional Administrator.",
        "Conference Convener for national and institutional conferences.",
        "Managed enterprise servers, campus firewalls, and campus-wide software and hardware deployments."
      ]
    },
    {
      period: "October 2009 — July 2010",
      role: "Computer Instructor",
      institution: "Millat School",
      location: "Jogeshwari, Mumbai",
      responsibilities: [
        "Taught basic and advanced Computer applications using modern Educational ICT tools.",
        "Conducted structured practical programming and computer lab sessions."
      ]
    },
    {
      period: "September 2008 — September 2009",
      role: "Web Developer",
      institution: "N.S. Enterprises",
      location: "Mira Road, Mumbai",
      responsibilities: [
        "Designed and developed the company's official website and web-based applications using HTML, CSS, and JavaScript.",
        "Managed transactional database systems and maintained enterprise inventory records."
      ]
    }
  ] as ExperienceItem[],

  publications: {
    summary: {
      journals: 23,
      conferences: 6,
      patents: 1
    },
    featured: [
      {
        id: "pub-1",
        title: "Applying Data Science Approach to Predicting Diseases",
        category: "Healthcare & Machine Learning",
        journal: "Multimedia Tools and Applications",
        year: "2024",
        description: "A comprehensive study on predicting cardiovascular diseases using machine learning models, leveraging sophisticated data science pipelines for diagnostic precision.",
        doi: "10.1007/s11042-023-18035-5",
        doiUrl: "https://doi.org/10.1007/s11042-023-18035-5",
        image: "/images/Applyingdatascience_approach.png"
      },
      {
        id: "pub-2",
        title: "NEURASCAN-AI: Deep Learning for Pneumonia Detection",
        category: "AI & Healthcare",
        journal: "International Journal of Computer Science Trends & Technology",
        year: "2025",
        description: "A web platform for pneumonia and COVID-19 detection from chest X-rays using deep learning, delivering automated multi-class pulmonary radiographic triage.",
        image: "/images/neurascanai.png"
      },
      {
        id: "pub-3",
        title: "The Future of Learning: ML-Powered Educational Platform",
        category: "Machine Learning & Education",
        journal: "International Journal of Computer Science Trends & Technology",
        year: "2025",
        description: "A systematic review and architectural framework exploring machine learning applications in modern adaptive and intelligent educational platforms.",
        image: "/images/the_future_of_learning.png"
      }
    ] as PublicationItem[]
  },

  achievements: [
    {
      title: "Best Coordinator of Career Guidance & Admission Counseling",
      organization: "Theem College of Engineering, Boisar",
      period: "2021 — 2022",
      badge: "Institutional Honor",
      description: "Recognized for exemplary leadership in student career guidance, admissions strategy, and student counseling."
    },
    {
      title: "Best Senior Faculty Award",
      organization: "Novel Research Academy, INDIA",
      period: "2020 — 2021",
      badge: "National Award",
      description: "Conferred for outstanding contributions to teaching, higher education leadership, and engineering research."
    },
    {
      title: "Best Teacher [Faculty] on Institute Level",
      organization: "Theem College of Engineering, Boisar",
      badge: "Faculty Excellence",
      description: "Awarded by institute leadership for exemplary pedagogical delivery, student mentorship, and academic diligence."
    },
    {
      title: "One Day Linux Workshop for Faculty Colleagues",
      organization: "NMEICT — IIT Bombay @ Theem COE",
      period: "August 2019",
      badge: "IIT Bombay NMEICT",
      description: "Conducted specialized hands-on Linux operating system training for collegiate engineering faculty members."
    },
    {
      title: "One Week ISTE Workshop on Computer Networking",
      organization: "NMEICT — IIT Bombay @ Theem COE",
      period: "July 2014",
      badge: "ISTE & IIT Bombay",
      description: "Delivered intensive faculty development instruction on computer networks, protocols, and architectural fundamentals."
    },
    {
      title: "Two Days ISTE Workshop on Oracle Database 10g – SQL",
      organization: "RMCET, Devrukh",
      period: "March 2013",
      badge: "ISTE Workshop",
      description: "Conducted expert two-day database training on Oracle SQL and enterprise database management for Computer Engineering students."
    },
    {
      title: "Supervised 30+ B.E. Project Groups",
      organization: "University of Mumbai Affiliated Colleges",
      badge: "Academic Mentorship",
      description: "Guided and mentored over thirty final-year Bachelor of Engineering capstone project cohorts in AI, Web, and Systems engineering."
    },
    {
      title: "Curriculum Design & Development for NEP and Autonomy",
      organization: "Autonomous Academic Boards",
      badge: "Curriculum Leadership",
      description: "Designed and authored academic syllabi and curricula for DSGT (Discrete Structures & Graph Theory), DBMS, and DWM (Data Warehousing & Mining)."
    }
  ] as AchievementItem[],

  certifications: [
    {
      title: "Oracle Database 10g Administrator Certified Associate (DBA_OCA)",
      provider: "Oracle Corporation",
      highlight: true
    },
    {
      title: "Python and Django Workshop",
      provider: "IIT Bombay"
    },
    {
      title: "One Week ISTE Workshop on Big Data Analytics",
      provider: "MHSS CoE, Mumbai",
      highlight: true
    },
    {
      title: "Oracle DBA Training",
      provider: "Oracle University Authorized Centre — DBA Consultants, Mumbai",
      highlight: true
    },
    {
      title: "One Day Training Workshop on Microsoft Azure",
      provider: "Microsoft Corporation India Pvt. Ltd., Mumbai"
    },
    {
      title: "Two Week ISTE Workshop on Database Management System",
      provider: "IIT Bombay"
    },
    {
      title: "Two Week ISTE Workshop on Computer Networking",
      provider: "IIT Bombay"
    },
    {
      title: "One Week OOAD using UML Workshop (Rational Software)",
      provider: "IBM"
    },
    {
      title: "Two Days Workshop on PHP & MYSQL",
      provider: "IIT Bombay"
    },
    {
      title: "Two Days Workshop on Linux",
      provider: "IIT Bombay"
    },
    {
      title: "Two Days Workshop on N/W Implementation & Security",
      provider: "NNSC & ACM — IIT Delhi"
    }
  ] as CertificationItem[],

  professionalActivities: {
    editorialBoard: [
      { name: "JETIR", full: "Journal of Emerging Technologies and Innovative Research" },
      { name: "IJCST", full: "International Journal of Computer Science Trends and Technology" },
      { name: "IJRSI", full: "International Journal of Research and Scientific Innovation" },
      { name: "IJETA", full: "International Journal of Engineering Trends and Applications" },
      { name: "IJIT", full: "International Journal of Information Technology" }
    ],
    responsibilities: [
      {
        title: "Undergraduate Project Guidance & Supervision",
        desc: "Mentoring 30+ B.E. project groups on cutting-edge AI, machine learning, and database systems."
      },
      {
        title: "Academic & Career Counseling",
        desc: "Guiding engineering students on admissions, higher education, career transitions, and industry certifications."
      },
      {
        title: "Conference & Academic Coordination",
        desc: "Serving as Conference Convener and technical committee organizer for peer-reviewed academic conventions."
      },
      {
        title: "Autonomous Curriculum Engineering",
        desc: "Formulating syllabi for Discrete Mathematics (DSGT), Database Management Systems (DBMS), and Data Warehousing (DWM) aligning with the National Education Policy (NEP)."
      },
      {
        title: "Institutional Quality & Accreditation (NAAC)",
        desc: "Coordinating NAAC Criteria VII initiatives and promoting institutional best practices."
      },
      {
        title: "National Initiatives (NPTEL, SIH & TCS)",
        desc: "Serving as NPTEL Nodal Coordinator, Smart India Hackathon (SIH) Nodal Coordinator, and TCS Test Centre Administrator."
      }
    ]
  },

  education: [
    {
      degree: "Ph.D.",
      field: "Computer Science and Engineering",
      highlight: true
    },
    {
      degree: "M.Tech",
      field: "Computer Science and Engineering",
      highlight: true
    },
    {
      degree: "B.E.",
      field: "Computer Engineering",
      highlight: false
    }
  ] as EducationItem[]
};
