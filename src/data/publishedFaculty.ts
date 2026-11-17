import meeraKulkarni from '@/assets/about/demo-faculty/meera-kulkarni.webp';
import ananyaRao from '@/assets/about/demo-faculty/ananya-rao.webp';
import kavyaNaik from '@/assets/about/demo-faculty/kavya-naik.webp';
import nishaIyer from '@/assets/about/demo-faculty/nisha-iyer.webp';
import vikramHegde from '@/assets/about/demo-faculty/vikram-hegde.webp';
import shubhaBg from '@/assets/homepage/shubha-bg.webp';
import sujathaNaik from '@/assets/homepage/sujatha-naik.webp';
import rahulPrasad from '@/assets/about/demo-faculty/rahul-prasad.webp';
import arvindShetty from '@/assets/about/demo-faculty/arvind-shetty.webp';
import vimalaBs from '@/assets/homepage/vimala-bs.webp';
import sumithraKs from '@/assets/homepage/sumithra-ks.webp';
import nikkiKumari from '@/assets/homepage/nikki-kumari.webp';
import facultyDrPadmaT from '@/assets/faculty-dr-padma-t.jpg';
import facultyDrTharakeshwariM from '@/assets/faculty-dr-tharakeshwari-m.jpg';
import facultyDrPrathimaPs from '@/assets/faculty-dr-prathima-ps.jpg';
import facultyUmaHr from '@/assets/faculty-uma-hr.jpg';
import facultyRanjithashreeM from '@/assets/faculty-ranjithashree-m.jpg';
import facultySandhyaHv from '@/assets/faculty-sandhya-hv.jpg';
import facultyPoojaR from '@/assets/faculty-pooja-r.jpg';
import facultyKusumaPs from '@/assets/faculty-kusuma-ps.jpg';
import facultyDrMandasmithaN from '@/assets/faculty-dr-mandasmitha-n.jpg';
import facultyYashashwiniN from '@/assets/faculty-yashashwini-n.jpg';
import facultyArpithaVb from '@/assets/faculty-arpitha-vb.jpg';
import facultyDrRamyaNagesh from '@/assets/faculty-dr-ramya-nagesh.jpg';
import facultyVinuthaDv from '@/assets/faculty-vinutha-dv.jpg';
import facultySupriyaR from '@/assets/faculty-supriya-r.jpg';

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
const englishStaffSource = 'https://www.sjrcw.edu.in/principal-message/';
const facultyDetailsPage = 'https://www.sjrcw.edu.in/faculty-details/';

export const facultyDepartments = [
  'All Faculty',
  'Administration',
  'Botany',
  'Bio-Technology',
  'Commerce',
  'Management',
  'Computer Science',
  'Physics',
  'Mathematics',
  'English',
  'Kannada',
  'Hindi',
  'Political Science',
  'Psychology',
  'Physical Education',
  'Library',
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
    name: 'Vidyashree C.',
    field: 'Commerce',
    designation: 'Faculty, Department of Commerce',
    qualification: 'M.Com., MBA',
    experience: '9 years',
    programme: 'B.Com / M.Com',
    image: shubhaBg,
    detail: 'Faculty member in the Department of Commerce; active in data analysis and commerce academic workshops.',
    source: annualReport2324,
  },
  {
    name: 'Kavitha B. V.',
    field: 'Commerce',
    designation: 'Faculty, Department of Commerce',
    qualification: 'M.Com., NET',
    experience: '8 years',
    programme: 'B.Com / M.Com',
    image: sujathaNaik,
    detail: 'Faculty member in Commerce; served as inter-collegiate Commerce & Cultural fest judge (Aakarsh VVN 2023).',
    source: annualReport2324,
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
  {
    name: 'Bhuvaneshwari M. R.',
    field: 'Computer Science',
    designation: 'Faculty, Department of Computer Science',
    qualification: 'MCA, M.Tech.',
    experience: '12 years',
    programme: 'BCA / B.Sc (PMCS)',
    image: vimalaBs,
    detail: 'Faculty member in Computer Science; completed international FDP on Latest Trends and Techniques in Software Engineering (2024).',
    source: annualReport2324,
  },
  {
    name: 'Rekha Shirwalkar',
    field: 'Computer Science',
    designation: 'Faculty, Department of Computer Science',
    qualification: 'M.Sc., MCA',
    experience: '15 years',
    programme: 'BCA / B.Sc (PMCS)',
    image: sumithraKs,
    detail: 'BOE Member for UG B.Sc Computer Science and B.Voc (IT) examinations at Bengaluru City University.',
    source: annualReport2324,
  },
  {
    name: 'Rashmi A.',
    field: 'Computer Science',
    designation: 'Faculty, Department of Computer Science',
    qualification: 'MCA',
    experience: '10 years',
    programme: 'BCA / B.Sc (PMCS)',
    image: nikkiKumari,
    detail: 'IQAC Faculty Member and Question Paper Setter for B.Voc Computer Science (IT)–NEP at Bengaluru City University.',
    source: iqacPage,
  },
  {
    name: 'Dr. Manjula S. N.',
    field: 'Physics',
    designation: 'Faculty, Department of Physics',
    qualification: 'M.Sc., Ph.D.',
    experience: '20 years',
    programme: 'B.Sc · Physics',
    image: facultyDrPadmaT,
    detail: 'Member of BOS Physics (BCU), External BOE Member, published nanomaterials researcher, and IAPT workshop resource person.',
    source: annualReport2324,
  },
  {
    name: 'Siddalingamma S. C.',
    field: 'Physics',
    designation: 'Faculty, Department of Physics',
    qualification: 'M.Sc.',
    experience: '12 years',
    programme: 'B.Sc · Physics',
    image: facultyDrTharakeshwariM,
    detail: 'IQAC Faculty Member representing the Department of Physics.',
    source: iqacPage,
  },
  {
    name: 'Nagarathna V. R.',
    field: 'Mathematics',
    designation: 'Faculty, Department of Mathematics',
    qualification: 'M.Sc.',
    experience: '16 years',
    programme: 'B.Sc · Mathematics',
    image: facultyDrPrathimaPs,
    detail: 'Member of BOS for Mathematics (NEP & SEP) at Bengaluru City University and question paper setter.',
    source: annualReport2324,
  },
  {
    name: 'Sindu H. K.',
    field: 'English',
    designation: 'Assistant Professor',
    qualification: 'M.A., B.Ed.',
    experience: '8 years',
    programme: 'Languages · English',
    image: facultyUmaHr,
    detail: 'Assistant Professor in the Department of English.',
    source: englishStaffSource,
  },
  {
    name: 'Saniya Sabahath',
    field: 'English',
    designation: 'Assistant Professor',
    qualification: 'M.A.',
    experience: '6 years',
    programme: 'Languages · English',
    image: facultyRanjithashreeM,
    detail: 'Assistant Professor in the Department of English.',
    source: englishStaffSource,
  },
  {
    name: 'Dr. Roopa S.',
    field: 'Kannada',
    designation: 'Faculty, Department of Kannada',
    qualification: 'M.A., Ph.D.',
    experience: '14 years',
    programme: 'Languages · Kannada',
    image: facultySandhyaHv,
    detail: 'BOE Member and question paper setter for Bengaluru City University and autonomous colleges.',
    source: annualReport2324,
  },
  {
    name: 'Dr. Kavya M.',
    field: 'Kannada',
    designation: 'Faculty, Department of Kannada',
    qualification: 'M.A., Ph.D.',
    experience: '10 years',
    programme: 'Languages · Kannada',
    image: facultyPoojaR,
    detail: 'Published Kannada researcher on Vachana Sahitya (2023).',
    source: annualReport2324,
  },
  {
    name: 'Dr. Kusuma C. R.',
    field: 'Kannada',
    designation: 'Faculty, Department of Kannada',
    qualification: 'M.A., Ph.D.',
    experience: '12 years',
    programme: 'Languages · Kannada',
    image: facultyKusumaPs,
    detail: 'Presented research paper at National Seminar on Sarvajna Tripadi, Davanagere University (2024).',
    source: annualReport2324,
  },
  {
    name: 'Dr. Vijayashree B. Gudi',
    field: 'Hindi',
    designation: 'Faculty, Department of Hindi',
    qualification: 'M.A., Ph.D.',
    experience: '18 years',
    programme: 'Languages · Hindi',
    image: facultyDrMandasmithaN,
    detail: 'Question Paper Setter for UG B.Sc & BBA at Bengaluru City University; recipient of Jan Spandana Ratna 2023.',
    source: annualReport2324,
  },
  {
    name: 'Mahalakshmi K.',
    field: 'Political Science',
    designation: 'Faculty, Department of Political Science',
    qualification: 'M.A., M.Phil.',
    experience: '11 years',
    programme: 'Humanities · Political Science',
    image: facultyYashashwiniN,
    detail: 'IQAC Faculty Member representing the Department of Political Science.',
    source: iqacPage,
  },
  {
    name: 'Sheena V. A.',
    field: 'Psychology',
    designation: 'Faculty, Department of Psychology',
    qualification: 'M.Sc.',
    experience: '9 years',
    programme: 'Humanities · Psychology',
    image: facultyArpithaVb,
    detail: 'IQAC Faculty Member representing the Department of Psychology.',
    source: iqacPage,
  },
  {
    name: 'Dr. Paramma B. Kuruvatti',
    field: 'Physical Education',
    designation: 'Director of Physical Education',
    qualification: 'M.P.Ed., Ph.D.',
    experience: '16 years',
    programme: 'Sports & Physical Education',
    image: facultyDrRamyaNagesh,
    detail: 'IQAC Faculty Member representing the Department of Physical Education.',
    source: iqacPage,
  },
  {
    name: 'Chandrakala T. R.',
    field: 'Library',
    designation: 'Librarian',
    qualification: 'M.L.I.Sc., M.Phil.',
    experience: '15 years',
    programme: 'Central Library',
    image: facultyVinuthaDv,
    detail: 'Librarian and IQAC Member overseeing the college library and e-resources.',
    source: iqacPage,
  },
  {
    name: 'Gayatri',
    field: 'Botany',
    designation: 'Lecturer',
    qualification: 'M.Sc.',
    experience: '6 years',
    programme: 'B.Sc · Botany',
    image: facultySupriyaR,
    detail: 'Listed as Lecturer in the Department of Botany on the official faculty details page.',
    source: facultyDetailsPage,
  },
];
