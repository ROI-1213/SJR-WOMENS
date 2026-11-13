export interface PlacementActivity {
  id: string;
  title: string;
  description: string;
  iconName: 'Building2' | 'Target' | 'BookOpenCheck' | 'MessagesSquare' | 'Calculator' | 'FileText';
}

export const dishaActivities: readonly PlacementActivity[] = [
  {
    id: 'campus-recruitment',
    title: 'Campus Recruitment by Leading Companies',
    description:
      'Campus recruitment initiatives that connect students with potential employment opportunities and introduce them to organizational hiring processes.',
    iconName: 'Building2',
  },
  {
    id: 'placement-training',
    title: 'Training for placements & Competitive examinations',
    description:
      'Preparation activities intended to strengthen students’ readiness for recruitment assessments and competitive examinations.',
    iconName: 'Target',
  },
  {
    id: 'knowledge-building',
    title: 'Knowledge Building Sessions',
    description:
      'Learning sessions that support broader professional awareness, knowledge development, and career preparedness.',
    iconName: 'BookOpenCheck',
  },
  {
    id: 'communication-skills',
    title: 'Training in Building Communication Skills',
    description:
      'Activities designed to help students develop clear expression, workplace communication, and professional interaction.',
    iconName: 'MessagesSquare',
  },
  {
    id: 'aptitude-training',
    title: 'Aptitude Test Training',
    description:
      'Preparation focusing on aptitude-related skills such as logical reasoning, numerical ability, and problem-solving approaches.',
    iconName: 'Calculator',
  },
  {
    id: 'resume-writing',
    title: 'Resume Writing Training',
    description:
      'Guidance intended to help students prepare structured and professional resumes for employment opportunities.',
    iconName: 'FileText',
  },
];

export interface DepartmentActivityPhoto {
  id: string;
  title: string;
  image: string;
  caption: string;
}

export const departmentActivitiesPhotos: readonly DepartmentActivityPhoto[] = [
  {
    id: 'tips-and-tricks',
    title: 'Workshop on Tips and Tricks to Crack Competitive Exams',
    image: '/images/placement/Tips-and-Tricks-to-crack-competative-Exam.jpeg',
    caption: 'Strategic exam preparation, quantitative reasoning, and time management session.',
  },
  {
    id: 'employability-soft-skills',
    title: 'Employability and Soft Skill Training',
    image: '/images/placement/Employablity-and-Soft-Skill-training.jpeg',
    caption: 'In association with Karnataka Skill Development Corporation (KSDC).',
  },
  {
    id: 'bfsi-training',
    title: 'BFSI Training Programme',
    image: '/images/placement/BFSI-Training.jpeg',
    caption: 'Banking, Financial Services and Insurance sector career orientation and practical skills.',
  },
];
