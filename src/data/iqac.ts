const uploads = 'https://www.sjrcw.edu.in/wp-content/uploads/';

export interface IqacDocument {
  title: string;
  href: string;
  localHref?: string;
  year?: string;
  format: 'PDF' | 'JPG';
}

interface IqacDocumentGroup {
  id: string;
  label: string;
  heading: string;
  description: string;
  documents: readonly IqacDocument[];
}

export interface NaacCycleRecord {
  cycle: string;
  year: string;
  grade: string;
  cgpa: string;
  validity: string;
  source: string;
}

export const naacAccreditationHistory: readonly NaacCycleRecord[] = [
  {
    cycle: 'Cycle 1',
    year: '2003',
    grade: 'B',
    cgpa: '—',
    validity: 'First cycle accreditation',
    source: 'https://www.sjrcw.edu.in/naac/',
  },
  {
    cycle: 'Cycle 2',
    year: '2009',
    grade: 'B',
    cgpa: '2.62',
    validity: 'Second cycle accreditation',
    source: 'https://www.sjrcw.edu.in/naac/',
  },
  {
    cycle: 'Cycle 3',
    year: '2016',
    grade: 'A',
    cgpa: '3.09',
    validity: 'Jan 2016 – Jan 2021',
    source: '/documents/RTI-SJRCW.pdf',
  },
  {
    cycle: 'Cycle 4',
    year: '2023',
    grade: 'B++',
    cgpa: '2.95',
    validity: '10 April 2023 – 09 April 2028',
    source: '/documents/AQAR-22-23-Report.pdf',
  },
];

const pdf = (title: string, path: string, year?: string, localHref?: string): IqacDocument => ({
  title,
  href: `${uploads}${path}`,
  localHref,
  year,
  format: 'PDF',
});

const annualDocuments = (title: string, files: readonly (readonly [string, string, string?])[]) =>
  files.map(([year, path, localHref]) => pdf(title, path, year, localHref));

export const iqacDownloadUrl = (document: IqacDocument) => document.localHref ?? document.href;

export const iqacDocumentGroups: readonly IqacDocumentGroup[] = [
  {
    id: 'aqar',
    label: 'AQAR',
    heading: 'Annual Quality Assurance Reports (AQAR)',
    description: 'Yearly NAAC AQAR reports documenting quality initiatives, student support, faculty profile, and institutional performance.',
    documents: annualDocuments('Annual Quality Assurance Report (AQAR)', [
      ['2022–23', '2025/01/AQAR-22-23-Report.pdf', '/documents/AQAR-22-23-Report.pdf'],
      ['2021–22', '2025/01/AQAR-21-22-Report-1.pdf'],
      ['2020–21', '2022/05/aqar2020-2021.pdf'],
      ['2019–20', '2021/11/AQAR-19-20.pdf'],
      ['2018–19', '2020/07/AQAR-18-19-Submitted.pdf'],
      ['2017–18', '2020/07/AQAR-17-18.pdf'],
      ['2016–17', '2020/03/AQAR-16-17.pdf'],
    ]),
  },
  {
    id: 'annual-reports',
    label: 'Annual Reports',
    heading: 'Institutional Annual Reports',
    description: 'Comprehensive yearly reports covering admissions, results, Disha placement drives, faculty academic work, and co-curricular activities.',
    documents: [
      pdf('Annual Report 2023–24', '2025/01/Annual-Report-23-24.pdf', '2023–24', '/documents/Annual-Report-23-24.pdf'),
      pdf('Annual Report 2020–21', '2022/01/annual-report-2020-21.pdf', '2020–21'),
    ],
  },
  {
    id: 'best-practices',
    label: 'Best Practices & Distinctiveness',
    heading: 'Best Practices & Institutional Distinctiveness',
    description: 'NAAC Criterion VII documents on institutional best practices, distinctiveness, and gender sensitization.',
    documents: [
      pdf('Best Practices (2023–24)', '2025/01/Best-Practices-23-24.pdf', '2023–24'),
      pdf('Institutional Distinctiveness (2023–24)', '2025/01/Institutional-Distinctiveness-23-24.pdf', '2023–24'),
      pdf('Best Practice 7.2.1', '2022/07/7.2.1-Best-practice.pdf', '2021–22'),
      pdf('Institutional Distinctiveness 7.3.1', '2022/07/7.3.1-Institutional-distinctiveness.pdf', '2021–22'),
      pdf('Annual Gender Sensitization Plan', '2021/12/Annual-gender-sensitization-plan.pdf', '2021'),
      pdf('Facilities Provided for Women', '2021/12/Facilties-provided-for-women.pdf', '2021'),
    ],
  },
  {
    id: 'governance',
    label: 'Governance & IQAC',
    heading: 'Governance, Organogram & IQAC Records',
    description: 'Code of conduct, organogram, strategic plan, IQAC meeting minutes, and calendar of events.',
    documents: [
      pdf('Code of Conduct (2023–24)', '2025/01/Code_of_Conduct-23-24.pdf', '2023–24'),
      pdf('Organogram (2023–24)', '2025/01/Organogram_23-24.pdf', '2023–24'),
      pdf('Calendar of Events (2025)', '2025/02/Calendar-of-Events.pdf', '2024–25'),
      pdf('IQAC Minutes of Meeting (2020–21)', '2022/05/MOM-20-21.pdf', '2020–21'),
      pdf('Strategy Plan', '2022/07/strategy-plan.pdf'),
      pdf('Organogram', '2022/07/organogram.pdf'),
      pdf('Code of Conduct', '2022/07/Code-of-conduct.pdf'),
    ],
  },
  {
    id: 'iiqa-rti',
    label: 'IIQA, Affiliation & RTI',
    heading: 'IIQA, University Affiliation & Statutory Disclosures',
    description: 'Institutional Information for Quality Assessment (IIQA), affiliation records, Programme/Course Outcomes, and RTI disclosure.',
    documents: [
      pdf('RTI Declaration (SJRCW)', '2022/05/RTI-SJRCW.pdf', '2022', '/documents/RTI-SJRCW.pdf'),
      pdf('Programme & Course Outcomes (CO-PO)', '2025/01/COPO-23-24.pdf', '2023–24'),
      pdf('Skill Enhancement Initiatives', '2025/01/Skill-Enhancement-Initiatives-23-24.pdf', '2023–24'),
      pdf('Affiliation Combined Record', '2022/05/affiliation-combined.pdf'),
      pdf('IIQA Self Declaration', '2022/05/self-decleration.pdf'),
      pdf('IIQA Undertaking', '2022/05/undertaking.pdf'),
    ],
  },
];
