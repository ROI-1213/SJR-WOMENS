export const instituteName = 'Sri Jagadguru Renukacharya College of Science, Arts & Commerce';
export const instituteNameKannada = 'ಶ್ರೀ ಜಗದ್ಗುರು ರೇಣುಕಾಚಾರ್ಯ ವಿಜ್ಞಾನ, ಕಲೆ ಮತ್ತು ವಾಣಿಜ್ಯ ಕಾಲೇಜು';
export const accreditation = 'Re-Accredited by NAAC, Recognized by UGC as "College with Potential for Excellence"';
export const naacGrade = 'B+';
export const principalName = 'Dr. Sheelwant SanjeevKumar';
export const principalCredentials = 'M.A., M.Phil., NET, Ph.D.';

export const naacResources = [
  { label: 'Self Study Report (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf', pdf: true },
  { label: 'NAAC and IQAC', href: '/naac-iqac', pdf: false },
  { label: 'Mandatory Disclosure (PDF)', href: 'https://sjrc.edu.in/wp-content/uploads/2025/01/ANNEXURE-18-MANDATORY-DISCLOSURES.pdf', pdf: true },
] as const;

export const availableProgrammes = [
  { id: 'bcom', name: 'B.Com', fullName: 'Bachelor of Commerce', href: '/academics/bcom' },
  { id: 'bba', name: 'BBA', fullName: 'Bachelor of Business Administration', href: '/academics/bba' },
  { id: 'bca', name: 'BCA', fullName: 'Bachelor of Computer Applications', href: '/academics/bca' },
  { id: 'mcom', name: 'M.Com', fullName: 'Master of Commerce', href: '/academics/mcom' },
] as const;

export type AvailableProgramme = (typeof availableProgrammes)[number];

export const programmeTitle = ({ name, fullName }: AvailableProgramme) => `${name} – ${fullName}`;

export const instituteContact = {
  phone: '080 2226 4952',
  phoneHref: 'tel:+918022264952',
  email: 'principal@sjrc.edu.in',
  address: '9, Race Course Road, Ananda Rao Circle, Bengaluru 560009, Karnataka',
  website: 'https://sjrc.edu.in/',
};
