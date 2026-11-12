import type { AvailableProgramme } from './institute';

export interface CourseCombination {
  code: string;
  title: string;
  description: string;
  labs?: string[];
}

export interface CourseDetails {
  level: 'undergraduate' | 'postgraduate';
  summary: string;
  durationNote: string;
  eligibility: string;
  affiliation: string;
  introduction: string;
  overview: string;
  combinations?: CourseCombination[];
  learning: { title: string; description: string }[];
  skills: string[];
  careers: string;
  benefits: { title: string; description: string }[];
  syllabi: { label: string; href: string }[];
  sourceUrl: string;
}

export interface EnrichmentCourse {
  title: string;
  category: string;
  description: string;
  partner?: string;
}

export const enrichmentCourses: EnrichmentCourse[] = [
  {
    title: 'Tally Prime with GST',
    category: 'Accounting & Finance',
    description: 'Practical accounting, inventory, voucher entry, and GST return filing skills for commerce and management students.',
  },
  {
    title: 'Advanced Excel',
    category: 'Data & Office Productivity',
    description: 'Spreadsheet modelling, pivot tables, lookup functions, and business data analysis.',
  },
  {
    title: 'Python',
    category: 'Programming',
    description: 'Foundational programming, problem-solving, and scripting skills for science, computer applications, and commerce learners.',
  },
  {
    title: 'Employability and Soft Skill Training',
    category: 'Career Readiness',
    partner: 'Karnataka Skill Development Corporation (KSDC)',
    description: 'Structured employability, workplace readiness, and soft-skills training in association with Karnataka Skill Development Corporation.',
  },
  {
    title: 'Workshop on Tips and Tricks to Crack Competitive Exams',
    category: 'Competitive Examinations',
    description: 'Aptitude, reasoning, time-management, and examination strategy workshops for government and corporate selection tests.',
  },
  {
    title: 'BFSI Training',
    category: 'Banking, Financial Services & Insurance',
    description: 'Domain-oriented training introducing banking operations, financial services, and insurance sector workflows.',
  },
  {
    title: 'Training on Communication Skills',
    category: 'Communication',
    description: 'Focused sessions on spoken English, presentation skills, group discussion, and interview communication.',
  },
];

export const courseDetails: Record<AvailableProgramme['id'], CourseDetails> = {
  bsc: {
    level: 'undergraduate',
    summary: 'Physical sciences, life sciences, mathematics, biotechnology and computer science combinations.',
    durationNote: 'Historical official scheme: 4 Years full-time as per NEP 2020 (CBCS / Semester scheme; verify current BCU admission intake structure with the college office).',
    eligibility: '10+2 / II PUC (Science stream) or equivalent',
    affiliation: 'Bengaluru City University',
    introduction:
      'The Bachelor of Science (B.Sc) programme at SJR College for Women offers four verified triple-subject combinations across physical, mathematical, biological, and computing sciences. The programme aims to build scientific temperament, analytical observation, and research readiness.',
    overview:
      'Students combine theoretical foundations with hands-on laboratory work in Physics, Chemistry, Botany, Biotechnology, Zoology, Mathematics, and Wi-Fi enabled Computer Science labs, alongside research projects and interdisciplinary open electives.',
    combinations: [
      {
        code: 'PMCS',
        title: 'Physics, Mathematics and Computer Science',
        description:
          'Integrates fundamental physics, analytical mathematics, and modern computing to prepare students for IT, electronics, aerospace, defence communications, and research.',
        labs: ['Physics Laboratory', 'Mathematics Lab', 'Wi-Fi Enabled Computer Lab'],
      },
      {
        code: 'PCM',
        title: 'Physics, Chemistry and Mathematics',
        description:
          'Classical physical sciences combination building strong quantitative, experimental, and analytical problem-solving capabilities for industry, teaching, and research.',
        labs: ['Physics Laboratory', 'Chemistry Laboratory', 'Mathematics Lab'],
      },
      {
        code: 'CBBt',
        title: 'Chemistry, Botany and Biotechnology',
        description:
          'Combines chemical sciences and plant biology with applied biotechnology, including exposure to radiochemistry, nanoscience, environmental & green chemistry, and food biotechnology.',
        labs: ['Chemistry Laboratory', 'Botany Laboratory', 'Biotechnology Laboratory'],
      },
      {
        code: 'CBZ',
        title: 'Chemistry, Botany and Zoology',
        description:
          'Comprehensive life-sciences combination exploring chemical reactions, plant diversity, and animal biology for careers in research, pharmaceuticals, quality control, and biological sciences.',
        labs: ['Chemistry Laboratory', 'Botany Laboratory', 'Zoology Laboratory'],
      },
    ],
    learning: [
      { title: 'Analytical & Experimental Science', description: 'Conduct laboratory experiments using analytical equipment, biological specimens, and computing tools.' },
      { title: 'Mathematical & Computational Modelling', description: 'Solve mathematical problems manually and verify outputs using Mathematics Lab computing facilities.' },
      { title: 'Biotechnology & Environmental Sciences', description: 'Explore radiochemistry, nanoscience, green chemistry, microbiology, and plant/animal sciences.' },
      { title: 'Research Projects & Open Electives', description: 'Undertake research projects and electives such as Plants and Human Welfare, Chemistry in Daily Life, and Physics for All.' },
    ],
    skills: [
      'Observation, analytical reasoning, and scientific problem-solving',
      'Laboratory experimentation, instrumentation, and safety practices',
      'Computational analysis and research project documentation',
    ],
    careers:
      'Graduates pursue roles as research scientists, project assistants, quality control analysts, and professionals in IT, electronics, aerospace, defence communications, pharmaceuticals, aquaculture, food & agri-products, herbal and bio-processing units, microbiological labs, and teaching.',
    benefits: [
      { title: 'Dedicated Science & Computing Labs', description: 'Well-equipped Physics, Chemistry, Botany, Biotechnology, Mathematics, and Computer Science laboratories.' },
      { title: 'Research & Academic Mentorship', description: 'Guided research projects, science exhibitions, seminars, and industrial/institutional visits.' },
    ],
    syllabi: [
      { label: 'UG Courses Overview (sjrcw.edu.in)', href: 'https://www.sjrcw.edu.in/ug-courses/' },
      { label: 'SJRCW Syllabus Archive', href: 'https://www.sjrcw.edu.in/syllabus/' },
    ],
    sourceUrl: 'https://www.sjrcw.edu.in/ug-courses/',
  },
  bcom: {
    level: 'undergraduate',
    summary: 'Accounting, taxation, finance, business management and commercial regulation.',
    durationNote: 'Historical official scheme: 4 Years full-time as per NEP 2020 (CBCS / Semester scheme; verify current BCU admission structure with the college office).',
    eligibility: '10+2 / II PUC or equivalent',
    affiliation: 'Bengaluru City University',
    introduction:
      'The Bachelor of Commerce (B.Com) programme provides comprehensive managerial, accounting, and organizational skills alongside a strong grounding in business principles, finance, taxation, human resources, marketing, and economics.',
    overview:
      'Students develop an understanding of financial concepts, corporate and management accounting, strategic and risk management, and taxation, supported by a functional Business Laboratory and industry-oriented add-on courses such as Tally Prime with GST and Advanced Excel.',
    learning: [
      { title: 'Financial & Management Accounting', description: 'Master financial concepts, corporate reporting, and management accounting skills.' },
      { title: 'Finance & Taxation', description: 'Develop advanced skills in finance, income tax, GST, and auditing.' },
      { title: 'Strategic & Risk Management', description: 'Understand strategic business decisions, risk management, and commercial regulation.' },
      { title: 'Business Lab & Add-On Courses', description: 'Apply commerce concepts in the Business Laboratory alongside Tally Prime with GST and BFSI training.' },
    ],
    skills: [
      'Financial accounting, taxation, and audit preparation',
      'Strategic, risk, and management accounting analysis',
      'Business communication and industry-standard spreadsheet tools',
    ],
    careers:
      'Graduates find opportunities in Tax, Audit & Assurance, Practice Management, Business Valuation, Banking & Financial Services, Marketing, Sales, Organizational Advisory, IT Corporate Training, Teaching, and higher studies such as M.Com or CA/CMA.',
    benefits: [
      { title: 'Functional Business Laboratory', description: 'Hands-on exposure to commercial documents, banking workflows, and financial analysis.' },
      { title: 'Career & Add-On Support', description: 'Integrated enrichment programmes including Tally Prime with GST, Advanced Excel, and Disha placement support.' },
    ],
    syllabi: [
      { label: 'B.Com Course Page (sjrcw.edu.in)', href: 'https://www.sjrcw.edu.in/bcom/' },
      { label: 'UG Courses Overview (sjrcw.edu.in)', href: 'https://www.sjrcw.edu.in/ug-courses/' },
    ],
    sourceUrl: 'https://www.sjrcw.edu.in/ug-courses/',
  },
  bba: {
    level: 'undergraduate',
    summary: 'Management, finance, marketing, human resource management and entrepreneurship.',
    durationNote: 'Historical official scheme: 4 Years full-time as per NEP 2020 (CBCS / Semester scheme; verify current BCU admission structure with the college office).',
    eligibility: '10+2 / II PUC or equivalent',
    affiliation: 'Bengaluru City University',
    introduction:
      'The Bachelor of Business Administration (BBA) programme is designed to help students relate their skills to real-world business needs and build a strong business outlook across Finance, Marketing, Human Resource Management (HRM), and Entrepreneurship.',
    overview:
      'Through classroom instruction, management forum activities ("Enable"), seminars, workshops, and industrial visits, students learn to apply theoretical management concepts to practical business situations while strengthening confidence and interpersonal skills.',
    learning: [
      { title: 'Finance & Business Concepts', description: 'Build a solid understanding of financial concepts and core aspects of business operations.' },
      { title: 'Marketing & Market Strategy', description: 'Examine customer behaviour, market dynamics, and product/brand positioning.' },
      { title: 'Human Resource Management', description: 'Study people management, organizational behaviour, and workplace leadership.' },
      { title: 'Entrepreneurship & Practical Activities', description: 'Apply theory to real-life business solutions through seminars, workshops, and forum activities.' },
    ],
    skills: [
      'Applying theoretical management concepts to real-life business solutions',
      'Interpersonal communication, leadership, and presentation skills',
      'Domain readiness in Finance, Marketing, HRM, and Entrepreneurship',
    ],
    careers:
      'Skilled BBA graduates are prepared for roles such as Marketing Executive, General Administrator, Accounts Executive, Sales & Marketing Specialist, Organizational Advisor, IT Corporate Trainer, Entrepreneurship, or postgraduate study (MBA/M.Com).',
    benefits: [
      { title: 'Enable Management Forum', description: 'Regular debates, business quizzes, case discussions, and management games build practical acumen.' },
      { title: 'Industry-Aligned Enrichment', description: 'Supported by add-on courses in Advanced Excel, Soft Skills, and BFSI training.' },
    ],
    syllabi: [
      { label: 'BBA Course Page (sjrcw.edu.in)', href: 'https://www.sjrcw.edu.in/bba/' },
      { label: 'UG Courses Overview (sjrcw.edu.in)', href: 'https://www.sjrcw.edu.in/ug-courses/' },
    ],
    sourceUrl: 'https://www.sjrcw.edu.in/ug-courses/',
  },
  bca: {
    level: 'undergraduate',
    summary: 'Computer applications, programming, analytical skills and software ethics.',
    durationNote: 'Historical official scheme: 4 Years full-time as per NEP 2020 (CBCS / Semester scheme; verify current BCU admission structure with the college office).',
    eligibility: '10+2 / II PUC or equivalent',
    affiliation: 'Bengaluru City University',
    introduction:
      'The Bachelor of Computer Applications (BCA) programme empowers women students with the knowledge, technical skills, and professional attitude required to develop competency in computer applications through a structured curriculum and active industry collaboration.',
    overview:
      'Combining innovative teaching-learning methods with modern laboratory tools and self-study, the programme strengthens programming, analytical, and logical skills while instilling interdisciplinary technology awareness, professional ethics, and teamwork.',
    learning: [
      { title: 'Computational Knowledge', description: 'Apply computing, mathematical, and domain knowledge to identify and capture requirements of specific problems.' },
      { title: 'Problem Investigation & Modern Tools', description: 'Conduct computing experiments, analyse and interpret data, and apply modern software tools effectively.' },
      { title: 'Professional Ethics & Teamwork', description: 'Commit to cyber regulations, professional ethics, and effective individual and team leadership.' },
      { title: 'Innovation & Continuous Upgradation', description: 'Engage in continuous technical certification (such as Python) and interdisciplinary innovation.' },
    ],
    skills: [
      'Programming, logical reasoning, and analytical problem-solving',
      'Modern software tool usage and experimental investigation',
      'Teamwork, cyber ethics, and entrepreneurial technology thinking',
    ],
    careers:
      'Graduates pursue careers in the IT industry (software development, testing, application support), teaching, research, and technology entrepreneurship, or advance to postgraduate programmes such as MCA and M.Sc.',
    benefits: [
      { title: 'Wi-Fi Enabled Computer Lab & Techno-Vision Club', description: 'Hands-on coding, debugging competitions, technical seminars, and Industry 4.0 workshops.' },
      { title: 'Placement Track Record', description: 'Active campus recruitment drives by IT employers and Q-Spiders Campus Connect.' },
    ],
    syllabi: [
      { label: 'UG Courses Overview (sjrcw.edu.in)', href: 'https://www.sjrcw.edu.in/ug-courses/' },
      { label: 'Computer Science Department', href: 'https://www.sjrcw.edu.in/computer-science/' },
    ],
    sourceUrl: 'https://www.sjrcw.edu.in/ug-courses/',
  },
  mcom: {
    level: 'postgraduate',
    summary: '4-semester postgraduate commerce programme in Accounting & Taxation and Finance & Banking.',
    durationNote: '2 Years (4 Semesters) under Choice Based Credit System (CBCS), Bengaluru City University.',
    eligibility: 'B.Com / BBA or equivalent Commerce/Management undergraduate degree as per BCU norms',
    affiliation: 'Bengaluru City University',
    introduction:
      'Established in 2013–14, the Master of Commerce (M.Com) department educates and trains women graduates in advanced business, accounting, finance, and research to meet national and global industry challenges with high ethical values.',
    overview:
      'The 4-semester CBCS programme offers specializations in Accounting & Taxation and Finance & Banking. With an annual intake of 40 students, the department conducts workshops on Research Methodology and Stock Markets, publishes the newsletter "Utkarsha", arranges final-semester industrial trips with industrial report preparation, and maintains a 100% pass record since 2014–15.',
    learning: [
      { title: 'Accounting and Taxation', description: 'Advanced corporate accounting, direct and indirect tax frameworks, and financial reporting.' },
      { title: 'Finance and Banking', description: 'Corporate finance, financial markets, banking operations, and investment analysis.' },
      { title: 'Research Methodology & Industrial Report', description: 'Research methodology workshops, brainstorming sessions, and final-semester industrial visits and reports.' },
      { title: 'Value-Added Certifications', description: 'Skill certifications including Tally Prime and Python alongside personality development.' },
    ],
    skills: [
      'Advanced financial, tax, and banking analysis',
      'Research methodology and industrial project reporting',
      'Managerial decision-making and entrepreneurial leadership',
    ],
    careers:
      'Graduates are equipped for careers in corporate accounting, taxation, banking, financial analysis, entrepreneurship, and academic teaching/research.',
    benefits: [
      { title: 'Consistent Academic Excellence', description: 'Documented 100% pass percentage since 2014–15 with 90%+ students passing with distinction (CGPA).' },
      { title: 'Utkarsha Newsletter & Rank Honours', description: 'Student-faculty newsletter "Utkarsha" and departmental recognition of university toppers.' },
    ],
    syllabi: [
      { label: 'PG Courses Overview (sjrcw.edu.in)', href: 'https://www.sjrcw.edu.in/pg-courses/' },
      { label: 'Annual Report 2023–24 (PDF)', href: '/documents/Annual-Report-23-24.pdf' },
    ],
    sourceUrl: 'https://www.sjrcw.edu.in/pg-courses/',
  },
};
