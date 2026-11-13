export interface EnrichmentCourse {
  id: string;
  officialTitle: string;
  displayTitle: string;
  subtitle?: string;
  category: string;
  filterGroup: 'tech' | 'finance' | 'career';
  shortDescription: string;
  learningHighlights: string[];
  iconName: 'Calculator' | 'FileSpreadsheet' | 'Code2' | 'Briefcase' | 'Target' | 'Landmark' | 'MessagesSquare';
  association?: string;
}

export interface EnrichmentFilter {
  id: 'all' | 'tech' | 'finance' | 'career';
  label: string;
}

export const enrichmentFilters: EnrichmentFilter[] = [
  { id: 'all', label: 'All Courses' },
  { id: 'tech', label: 'Technology & Data' },
  { id: 'finance', label: 'Finance & Banking' },
  { id: 'career', label: 'Career & Personal Skills' },
];

export const enrichmentCourses: EnrichmentCourse[] = [
  {
    id: 'tally-prime-gst',
    officialTitle: 'Tally Prime with GST',
    displayTitle: 'Tally Prime with GST',
    category: 'Accounting & Finance',
    filterGroup: 'finance',
    shortDescription:
      'Build practical knowledge of computerized accounting, financial record management, and GST-related accounting processes using Tally Prime.',
    learningHighlights: [
      'Computerized accounting fundamentals',
      'Ledger and voucher management',
      'GST concepts and accounting workflows',
      'Financial reports and statements',
      'Practical accounting applications',
    ],
    iconName: 'Calculator',
  },
  {
    id: 'advanced-excel',
    officialTitle: 'Advanced Excel',
    displayTitle: 'Advanced Excel',
    category: 'Data & Productivity',
    filterGroup: 'tech',
    shortDescription:
      'Strengthen spreadsheet and data management skills with advanced Microsoft Excel techniques useful for academic, administrative, and professional applications.',
    learningHighlights: [
      'Advanced Excel formulas and functions',
      'Data sorting and filtering',
      'Pivot tables and data summarization',
      'Charts and data visualization',
      'Reporting and spreadsheet productivity',
    ],
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'python',
    officialTitle: 'Python',
    displayTitle: 'Python',
    category: 'Programming & Technology',
    filterGroup: 'tech',
    shortDescription:
      'Develop foundational programming and problem-solving abilities through Python, one of the most widely used programming languages in modern technology.',
    learningHighlights: [
      'Introduction to Python programming',
      'Variables and data types',
      'Conditional statements and loops',
      'Functions and programming logic',
      'Practical coding exercises',
    ],
    iconName: 'Code2',
  },
  {
    id: 'employability-soft-skills',
    officialTitle:
      'Employability and Soft Skill Training in association with Karnataka Skill Development Corporation',
    displayTitle: 'Employability & Soft Skills',
    category: 'Career Development',
    filterGroup: 'career',
    association: 'Karnataka Skill Development Corporation',
    shortDescription:
      'Support students in developing professional communication, workplace readiness, interpersonal effectiveness, and essential employability skills.',
    learningHighlights: [
      'Professional communication',
      'Interview preparation',
      'Resume-building fundamentals',
      'Workplace etiquette',
      'Teamwork and interpersonal skills',
      'Confidence and professional development',
    ],
    iconName: 'Briefcase',
  },
  {
    id: 'competitive-exam-prep',
    officialTitle: 'Workshop on Tips and Tricks to Crack Competitive Exams',
    displayTitle: 'Competitive Exam Preparation',
    category: 'Competitive Exam Readiness',
    filterGroup: 'career',
    shortDescription:
      'Help students approach competitive examinations with structured preparation strategies, problem-solving techniques, and effective time management practices.',
    learningHighlights: [
      'Examination preparation strategies',
      'Time management approaches',
      'Aptitude and reasoning practice',
      'Problem-solving techniques',
      'Mock-test strategies and exam confidence',
    ],
    iconName: 'Target',
  },
  {
    id: 'bfsi-training',
    officialTitle: 'BFSI Training',
    displayTitle: 'BFSI Training',
    subtitle: 'Banking, Financial Services and Insurance',
    category: 'Banking & Financial Services',
    filterGroup: 'finance',
    shortDescription:
      'Introduce students to the Banking, Financial Services and Insurance sector through career-oriented learning and an understanding of fundamental financial industry concepts.',
    learningHighlights: [
      'Introduction to banking services',
      'Financial services fundamentals',
      'Insurance industry overview',
      'Customer service practices',
      'Professional awareness of the BFSI sector',
    ],
    iconName: 'Landmark',
  },
  {
    id: 'communication-skills',
    officialTitle: 'Training on Communication Skills',
    displayTitle: 'Communication Skills',
    category: 'Personal & Professional Development',
    filterGroup: 'career',
    shortDescription:
      'Develop effective verbal, written, and interpersonal communication skills to help students express themselves clearly and confidently in academic and professional settings.',
    learningHighlights: [
      'Verbal communication',
      'Written communication',
      'Public speaking fundamentals',
      'Presentation techniques',
      'Group discussion skills',
      'Listening and interpersonal communication',
    ],
    iconName: 'MessagesSquare',
  },
];
