import meeraKulkarni from '@/assets/about/demo-faculty/meera-kulkarni.webp';
import ananyaRao from '@/assets/about/demo-faculty/ananya-rao.webp';
import kavyaNaik from '@/assets/about/demo-faculty/kavya-naik.webp';
import nishaIyer from '@/assets/about/demo-faculty/nisha-iyer.webp';
import vikramHegde from '@/assets/about/demo-faculty/vikram-hegde.webp';
import rahulPrasad from '@/assets/about/demo-faculty/rahul-prasad.webp';
import arvindShetty from '@/assets/about/demo-faculty/arvind-shetty.webp';

export interface FacultyMember {
  name: string;
  field: string;
  designation: string;
  qualification?: string;
  programme: string;
  image?: string;
  detail: string;
  source: string;
  experience?: string;
}

const iqacPage = 'https://www.sjrcw.edu.in/iqac/';
const annualReport2324 = '/documents/Annual-Report-23-24.pdf';
const botanyPage = 'https://www.sjrcw.edu.in/botany/';

export const facultyDepartments = [
  'All Faculty',
  'Administration',
  'Botany',
  'Bio-Technology',
  'Commerce',
  'Management',
] as const;

export const publishedFaculty: FacultyMember[] = [
  {
    name: 'Dr. Prema Siddaraju',
    field: 'Administration',
    designation: 'Principal & IQAC Chairman',
    qualification: 'M.A., Ph.D.',
    experience: '25+ years',
    programme: 'Institution Head · Kannada',
    image: '/images/principal/dr-prema-siddaraju.jpg',
    detail: 'Head of Institution (SJR College for Women), IQAC Chairman, Chief Custodian (All Languages Unit), and BOS Member. Recipient of Janaspandana Ratna 2023.',
    source: annualReport2324,
  },
  {
    name: 'Chandrakala S. (Chandrakala Shivakumar)',
    field: 'Botany',
    designation: 'Assistant Professor & Head of Department',
    qualification: 'M.Sc., M.Phil.',
    experience: '18 years',
    programme: 'B.Sc · Botany',
    image: meeraKulkarni,
    detail: 'Head of the Department of Botany; IQAC Faculty Member; BOS (NEP/SEP) and BOE Member in Botany (UG), Bengaluru City University.',
    source: botanyPage,
  },
  {
    name: 'Smt. Gayathri M. P.',
    field: 'Botany',
    designation: 'IQAC Co-ordinator & Lecturer',
    qualification: 'M.Sc.',
    experience: '14 years',
    programme: 'B.Sc · Botany',
    image: ananyaRao,
    detail: 'IQAC Co-ordinator and faculty member in the Department of Botany.',
    source: iqacPage,
  },
  {
    name: 'Dr. Roopa B.',
    field: 'Botany',
    designation: 'Faculty, Department of Botany',
    qualification: 'M.Sc., Ph.D.',
    experience: '12 years',
    programme: 'B.Sc · Botany',
    image: kavyaNaik,
    detail: 'Published researcher in plant sciences (European Chemical Bulletin, 2023) and FDP participant in Research Methodology.',
    source: annualReport2324,
  },
  {
    name: 'Dr. Jyothi E.',
    field: 'Bio-Technology',
    designation: 'Faculty, Department of Bio-Technology',
    qualification: 'M.Sc., Ph.D.',
    experience: '15 years',
    programme: 'B.Sc · Bio-Technology',
    image: nishaIyer,
    detail: 'IQAC Faculty Member, Assistant Custodian, BOE Member in Biotechnology (UG), BCU, and question paper setter.',
    source: annualReport2324,
  },
  {
    name: 'Dr. Sujay Kumar S.',
    field: 'Commerce',
    designation: 'Faculty, Department of Commerce',
    qualification: 'M.Com., Ph.D.',
    experience: '16 years',
    programme: 'B.Com / M.Com',
    image: vikramHegde,
    detail: 'IQAC Faculty Member representing the Department of Commerce.',
    source: iqacPage,
  },
  {
    name: 'Punith Kumar',
    field: 'Commerce',
    designation: 'Faculty, Department of Commerce',
    qualification: 'M.Com., KSET',
    experience: '7 years',
    programme: 'B.Com',
    image: rahulPrasad,
    detail: 'Faculty member in Commerce; recipient of the Best Service Award from Seva Hastha Foundation (July 2023).',
    source: annualReport2324,
  },
  {
    name: 'Gurudath M. N.',
    field: 'Management',
    designation: 'Faculty & IQAC Co-ordinator',
    qualification: 'MBA, M.Com.',
    experience: '14 years',
    programme: 'BBA · Management',
    image: arvindShetty,
    detail: 'Faculty member in Management, IQAC Co-ordinator (AQAR 2022–23), and Deputy Custodian for university examinations.',
    source: annualReport2324,
  },
];
