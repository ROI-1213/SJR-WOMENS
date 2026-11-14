export const instituteName = 'SJR College for Women';
export const instituteNameFull = 'Sri Jagadguru Renukacharya College for Women';
export const instituteNameKannada = 'ಎಸ್.ಜೆ.ಆರ್. ಮಹಿಳಾ ಕಾಲೇಜು, ರಾಜಾಜಿನಗರ';
export const accreditation =
  'Affiliated to Bengaluru City University, recognised by UGC and NAAC Accredited';
export const accreditationFull =
  'Affiliated to Bengaluru City University, recognised by UGC under Sections 2(f) & 12(B), and NAAC Accredited (Cycle 4: B++ Grade, CGPA 2.95, valid 2023–2028; Cycle 3: A Grade, CGPA 3.09)';
export const naacGrade = 'B++';
export const naacCycleLabel = 'Cycle 4 (2023–2028)';
export const principalName = 'Dr. Prema Siddaraju';
export const principalCredentials = 'Principal, SJR College for Women';

export const naacResources = [
  { label: 'Annual Report 2023–24 (PDF)', href: '/documents/Annual-Report-23-24.pdf', pdf: true },
  { label: 'NAAC and IQAC', href: '/naac-iqac', pdf: false },
  { label: 'AQAR 2022–23 Report (PDF)', href: '/documents/AQAR-22-23-Report.pdf', pdf: true },
  { label: 'RTI Disclosure (PDF)', href: '/documents/RTI-SJRCW.pdf', pdf: true },
] as const;

export const availableProgrammes = [
  { id: 'bsc', name: 'B.Sc', fullName: 'Bachelor of Science', href: '/academics/bsc' },
  { id: 'bcom', name: 'B.Com', fullName: 'Bachelor of Commerce', href: '/academics/bcom' },
  { id: 'bba', name: 'BBA', fullName: 'Bachelor of Business Administration', href: '/academics/bba' },
  { id: 'bca', name: 'BCA', fullName: 'Bachelor of Computer Applications', href: '/academics/bca' },
  { id: 'mcom', name: 'M.Com', fullName: 'Master of Commerce', href: '/academics/mcom' },
] as const;

export type AvailableProgramme = (typeof availableProgrammes)[number];

export const programmeTitle = ({ name, fullName }: AvailableProgramme) => `${name} – ${fullName}`;

export const instituteContact = {
  phone: '(+91) 80 2338 1734 / 2335 9474',
  phoneHref: 'tel:+918023381734',
  email: 'sjrwomenscollege@gmail.com',
  principalEmail: 'principal@sjrcw.edu.in',
  iqacEmail: 'iqac.sjrcw@gmail.com',
  address: "1/D, 59th 'C' Cross, IV 'M' Block, Gopalapura, Rajajinagar, Bengaluru – 560010, Karnataka",
  website: 'https://www.sjrcw.edu.in/',
  youtube: 'https://www.youtube.com/channel/UCNfkDEB6xReoJkbGv8kOUOw',
  facebook: 'https://www.facebook.com/sjrcw',
  timings: 'Mon–Fri: 8:30 AM – 4:00 PM | Sat: 8:30 AM – 1:00 PM',
};
