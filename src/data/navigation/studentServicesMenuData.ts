export const studentServicesPages = {
  support: { label: 'Student Support', href: '/student-services/support' },
  clubs: { label: 'Clubs Overview', href: '/student-services/clubs' },
  nss: { label: 'National Service Scheme (NSS)', href: '/student-services/nss' },
  ncc: { label: 'National Cadet Corps (NCC)', href: '/student-services/ncc' },
  film: { label: 'Film Club', href: '/student-services/film-club' },
  health: { label: 'Health Club', href: '/student-services/health' },
  sports: { label: 'Sports Club', href: '/student-services/sports-club' },
  literary: { label: 'Literary Club', href: '/student-services/literary' },
  council: { label: 'Student Council', href: '/student-services/student-council' },
  alumni: { label: 'Alumni Association', href: '/student-services/alumni' },
  placement: { label: 'Placement Cell', href: '/student-services/placement' },
  research: { label: 'Research Promotion Cell', href: '/student-services/research' },
  scst: { label: 'SC/ST Cell', href: '/student-services/sc-st' },
  disciplinary: { label: 'Disciplinary Committee', href: '/student-services/disciplinary' },
  antiRagging: { label: 'Anti-Ragging Cell', href: '/student-services/anti-ragging' },
} as const;

export type StudentServicesPageKey = keyof typeof studentServicesPages;
