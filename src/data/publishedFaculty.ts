import nikki from '@/assets/homepage/nikki-kumari.webp';
import shubha from '@/assets/homepage/shubha-bg.webp';
import sujatha from '@/assets/homepage/sujatha-naik.webp';
import jayarama from '@/assets/homepage/jayarama-naik.webp';
import vimala from '@/assets/homepage/vimala-bs.webp';
import sumithra from '@/assets/homepage/sumithra-ks.webp';

const facultyDisclosure = 'https://sjrc.edu.in/wp-content/uploads/2025/01/ANNEXURE-18-MANDATORY-DISCLOSURES.pdf';
const annualReport2022 = 'https://sjrc.edu.in/wp-content/uploads/2023/03/Annual-Report-2021-22.pdf';
const annualReport2023 = 'https://sjrc.edu.in/wp-content/uploads/2024/02/SJRC-Annual-Report-2022-23.pdf';

export const publishedFaculty = [
  { name: 'Dr. Nikki Kumari', field: 'Management', designation: 'Management Studies faculty', programme: 'BBA', image: nikki, detail: 'Listed as permanent faculty for the Bachelor of Business Administration programme.', source: facultyDisclosure },
  { name: 'Shubha B. G.', field: 'Computer Science', designation: 'Computer Applications faculty', programme: 'BCA', image: shubha, detail: 'Listed as permanent faculty for the Bachelor of Computer Applications programme. The college’s annual report records an M.Sc. qualification.', source: facultyDisclosure },
  { name: 'Sujatha Naik', field: 'Computer Science', designation: 'Computer Applications faculty', programme: 'BCA', image: sujatha, detail: 'Listed as permanent faculty for the Bachelor of Computer Applications programme. The college’s annual report records an M.Tech. qualification.', source: facultyDisclosure },
  { name: 'Jayarama Naik', field: 'Hindi', designation: 'Hindi faculty', programme: 'BBA', image: jayarama, detail: 'Listed as permanent faculty for Hindi in the Bachelor of Business Administration programme.', source: facultyDisclosure },
  { name: 'Vimala B. S.', field: 'Commerce', designation: 'Lecturer in Commerce', programme: 'Commerce · 2022–23', image: vimala, detail: 'Listed as a lecturer in the Department of Commerce in the 2022–23 annual report. The report records B.Com and M.Com qualifications.', source: annualReport2023 },
  { name: 'Sumithra K. S.', field: 'Commerce', designation: 'Assistant Professor, Commerce', programme: 'M.Com · 2021–22', image: sumithra, detail: 'Listed as an assistant professor in the M.Com faculty roster in the 2021–22 annual report, with M.Com and NET qualifications.', source: annualReport2022 },
];
