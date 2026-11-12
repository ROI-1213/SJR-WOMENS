import { naacResources } from './institute';

const uploads = 'https://sjrc.edu.in/wp-content/uploads/';

export interface IqacDocument {
  title: string;
  href: string;
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

const pdf = (title: string, path: string, year?: string): IqacDocument => ({
  title,
  href: `${uploads}${path}`,
  year,
  format: 'PDF',
});

const annualDocuments = (title: string, files: readonly (readonly [string, string])[]) =>
  files.map(([year, path]) => pdf(title, path, year));

export const iqacCertificate: IqacDocument = {
  title: 'NAAC Cycle IV Accreditation Certificate',
  href: `${uploads}2026/01/NAAC-IV-Cycle-Certificate-1-scaled.jpg`,
  format: 'JPG',
};

// Download copies retain the source filenames and file contents.
export const iqacDownloadUrl = (document: IqacDocument) =>
  `${import.meta.env.BASE_URL}iqac/documents/${new URL(document.href).pathname.split('/').pop()}`;

export const iqacDocumentGroups: readonly IqacDocumentGroup[] = [
  {
    id: 'aqar',
    label: 'AQAR',
    heading: 'Annual Quality Assurance Reports',
    description: 'Yearly reports documenting quality initiatives, institutional performance and progress against academic and administrative plans.',
    documents: annualDocuments('Annual Quality Assurance Report', [
      ['2022–23', '2024/12/AQAR-2022-23.pdf'],
      ['2021–22', '2023/07/AQAR-2021-2022.pdf'],
      ['2020–21', '2022/03/AQAR-Report-20-21.pdf'],
      ['2019–20', '2021/08/AQAR-Report-2019-20.pdf'],
      ['2018–19', '2021/07/AQAR-Report-2018-19.pdf'],
      ['2017–18', '2021/08/AQAR-Report-2017-18.pdf'],
      ['2016–17', '2021/08/AQAR-Report-2016-17.pdf'],
      ['2015–16', '2021/08/AQAR-2015-16-final.pdf'],
      ['2014–15', '2021/08/AQAR-Report-2014-15.pdf'],
    ]),
  },
  {
    id: 'iqac-policy',
    label: 'Policy',
    heading: 'IQAC Policy',
    description: 'The college’s policy sets out the role of the IQAC and its framework for planning, monitoring and improving institutional quality.',
    documents: [pdf('IQAC Policy', '2023/04/IQAC-Policy.pdf')],
  },
  {
    id: 'iqac-composition',
    label: 'Composition',
    heading: 'Composition of IQAC',
    description: 'Committee membership and representation by academic year.',
    documents: annualDocuments('IQAC Composition', [
      ['2023–24', '2025/01/IQAC-composition-23-24.pdf'],
      ['2022–23', '2025/01/IQAC-composition-22-23.pdf'],
      ['2021–22', '2022/12/IQAC-Composition-2021-22.pdf'],
      ['2020–21', '2022/11/IQAC-composition-2020-21.pdf'],
      ['2019–20', '2022/11/IQAC-composition-2019-20.pdf'],
      ['2018–19', '2022/11/IQAC-composition-2018-19.pdf'],
      ['2017–18', '2022/11/IQAC-composition-2017-18.pdf'],
      ['2016–17', '2022/11/IQAC-composition-2016-17.pdf'],
    ]),
  },
  {
    id: 'iqac-meetings',
    label: 'Meetings & ATR',
    heading: 'IQAC Meetings & Action Taken Reports',
    description: 'Meeting records and follow-up reports documenting decisions and action taken.',
    documents: annualDocuments('Meeting Minutes & Action Taken Report', [
      ['2023–24', '2025/01/IQAC-2023-2024.pdf'],
      ['2022–23', '2025/01/IQAC-2022-2023.pdf'],
      ['2021–22', '2023/01/Meeting-minutes-and-action-taken-report-2021-22.pdf'],
      ['2020–21', '2022/12/Minutes-of-the-meeting-anf-Action-taken-report-20-21.pdf'],
      ['2019–20', '2022/12/Meeting-minutes-and-action-taken-report-2019-20.pdf'],
      ['2018–19', '2022/12/Meeting-minutes-and-action-taken-report-2018-19.pdf'],
      ['2017–18', '2022/12/Meeting-minutes-and-action-taken-report-2017-18.pdf'],
      ['2016–17', '2022/12/Meeting-minutes-and-action-taken-report-2016-17.pdf'],
    ]),
  },
  {
    id: 'institutional-documents',
    label: 'Accreditation & disclosures',
    heading: 'Accreditation & Institutional Documents',
    description: 'Official accreditation, university affiliation, approval and disclosure records.',
    documents: [
      iqacCertificate,
      pdf('Affiliation Copy', '2026/01/Affiliation-copy-2025-26.pdf', '2025–26'),
      pdf('Mandatory Disclosure', '2026/01/MANDATORY-DISCLOSURES-2025-26.pdf', '2025–26'),
      pdf('Mandatory Disclosure (Annexure 18)', '2025/01/ANNEXURE-18-MANDATORY-DISCLOSURES.pdf'),
      pdf('Letter of Approval (LOA)', '2025/01/LOA-Report-2024-25_1-44239170107.pdf', '2024–25'),
      pdf('Intake / Affiliation Order', '2025/01/BCU-Affiliation-order-2023-24-2_11zon.pdf', '2023–24'),
    ],
  },
  {
    id: 'academic-records',
    label: 'Academic records',
    heading: 'Academic & Assessment Records',
    description: 'The college’s programme and course outcomes and its institutional self-assessment for NAAC.',
    documents: [
      pdf('Programme and Course Outcomes', '2025/01/CO-PO.pdf'),
      { title: 'Self-Study Report (SSR)', href: naacResources[0].href, format: 'PDF' },
    ],
  },
];
