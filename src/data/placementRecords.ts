export const placementSources = {
  cell: 'https://sjrc.edu.in/placements/',
  progression: 'https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf#page=50',
  jobFair: 'https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf#page=70',
  reports: 'https://sjrc.edu.in/wp-content/uploads/2024/02/Best-Practice-II-Documents.pdf',
  disclosure: 'https://sjrc.edu.in/wp-content/uploads/2026/01/MANDATORY-DISCLOSURES-2025-26.pdf#page=10',
  archive: 'https://sjrc.edu.in/wp-content/uploads/2023/05/Placement-report-2017-18.pdf#page=12',
} as const;

export const recruitmentHighlights = [
  {
    value: '22',
    label: 'SJRC students selected',
    context: 'Infosys campus drive, January 2023',
    href: `${placementSources.reports}#page=26`,
  },
  {
    value: '115',
    label: 'SJRC students shortlisted',
    context: 'Mega Job Fair, 2022',
    href: placementSources.jobFair,
  },
  {
    value: '39.97%',
    label: 'Placed or entered higher education',
    context: 'Combined NAAC measure, 2017–18 to 2021–22',
    href: placementSources.progression,
  },
] as const;

export const progressionByYear = [
  { year: '2021–22', outgoing: 142, progressed: 59 },
  { year: '2020–21', outgoing: 158, progressed: 60 },
  { year: '2019–20', outgoing: 140, progressed: 32 },
  { year: '2018–19', outgoing: 144, progressed: 36 },
  { year: '2017–18', outgoing: 89, progressed: 82 },
] as const;
