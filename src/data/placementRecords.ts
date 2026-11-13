export const placementSources = {
  cell: 'https://www.sjrcw.edu.in/placement/',
  annualReport2324: '/documents/Annual-Report-23-24.pdf',
  reports: '/documents/Annual-Report-23-24.pdf',
  disclosure: '/documents/MANDATORY-DISCLOSURES-2025-26.pdf',
  mandatoryDisclosure: '/documents/MANDATORY-DISCLOSURES-2025-26.pdf',
  progression: '/documents/SSR-2023-24.pdf',
  archive: '/documents/AQAR-22-23-Report.pdf',
  jobFair: '/documents/Annual-Report-23-24.pdf',
} as const;

export interface CampusDriveRecord {
  date: string;
  year: string;
  title: string;
  partner: string;
  eligibility: string;
  outcome?: string;
  type: 'Campus Drive' | 'Training' | 'Job Fair';
}

export const dishaCampusDrives: readonly CampusDriveRecord[] = [
  {
    date: '3 August 2023',
    year: '2023–24',
    title: 'Placement Drive in Association with Magic Bus India Foundation',
    partner: 'Tech Mahindra, Flipkart, Myntra & Paytm',
    eligibility: 'Final-year UG students',
    type: 'Campus Drive',
  },
  {
    date: '4–9 December 2023',
    year: '2023–24',
    title: 'Employability & Soft Skills Training',
    partner: 'Karnataka Skill Development Corporation (Nandi Foundation)',
    eligibility: 'All final-year students',
    type: 'Training',
  },
  {
    date: '13 January 2024',
    year: '2023–24',
    title: 'Q-Spiders Campus Connect Drive (IT & Computing)',
    partner: 'Q-Spiders Campus Connect',
    eligibility: 'BCA and B.Sc (Computer Science) students',
    outcome: '19 students placed',
    type: 'Campus Drive',
  },
  {
    date: '25 March 2024',
    year: '2023–24',
    title: 'Mock Interviews for Final-Year Students',
    partner: 'Nandi Foundation',
    eligibility: 'All final-year students',
    type: 'Training',
  },
  {
    date: '12 April 2024',
    year: '2023–24',
    title: 'Q-Spiders Campus Connect Drive (Commerce & Management)',
    partner: 'Q-Spiders Campus Connect',
    eligibility: 'B.Com and BBA students',
    outcome: '20 students placed',
    type: 'Campus Drive',
  },
  {
    date: '11 May 2024',
    year: '2023–24',
    title: 'ICICI Prudential Life Insurance Campus Drive',
    partner: 'ICICI Prudential Life Insurance',
    eligibility: 'Final-year students',
    type: 'Campus Drive',
  },
  {
    date: '23 May 2024',
    year: '2023–24',
    title: 'Mega Job Fair',
    partner: 'DBWH – Staffing & Payroll Solution',
    eligibility: 'Graduating students',
    type: 'Job Fair',
  },
];

export const recruitmentHighlights = [
  {
    value: '19',
    label: 'BCA & B.Sc (CS) students placed',
    context: 'Q-Spiders Campus Connect, 13 Jan 2024',
    href: placementSources.annualReport2324,
  },
  {
    value: '20',
    label: 'B.Com & BBA students placed',
    context: 'Q-Spiders Campus Connect, 12 Apr 2024',
    href: placementSources.annualReport2324,
  },
  {
    value: '7',
    label: 'Documented Disha drives & trainings',
    context: 'Academic Year 2023–24 Annual Report',
    href: placementSources.annualReport2324,
  },
] as const;

export const progressionByYear = [
  { year: '2023–24 (Drives)', outgoing: 39, progressed: 39 },
] as const;
