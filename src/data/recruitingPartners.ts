export interface RecruitingPartner {
  id: string;
  name: string;
  fullName: string;
  logo: string;
  order: number;
}

export const recruitingPartners: readonly RecruitingPartner[] = [
  {
    id: 'accenture',
    name: 'Accenture',
    fullName: 'Accenture',
    logo: '/images/placement/Accenture.png',
    order: 1,
  },
  {
    id: 'amazon',
    name: 'Amazon',
    fullName: 'Amazon',
    logo: '/images/placement/Amazon.png',
    order: 2,
  },
  {
    id: 'sap',
    name: 'SAP',
    fullName: 'SAP Labs',
    logo: '/images/placement/SAP.png',
    order: 3,
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    fullName: 'Capgemini',
    logo: '/images/placement/Capgemini.png',
    order: 4,
  },
  {
    id: 'tcs',
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    logo: '/images/placement/TCS.png',
    order: 5,
  },
  {
    id: 'concentrix',
    name: 'Concentrix',
    fullName: 'Concentrix',
    logo: '/images/placement/Concentrix.png',
    order: 6,
  },
  {
    id: 'orchids',
    name: 'Orchids',
    fullName: 'Orchids — The International School',
    logo: '/images/placement/Orchids.png',
    order: 7,
  },
  {
    id: 'infosys',
    name: 'Infosys',
    fullName: 'Infosys',
    logo: '/images/placement/Infosys.jpg',
    order: 8,
  },
  {
    id: 'global-career',
    name: 'Global Career',
    fullName: 'Global Career',
    logo: '/images/placement/Global-Career.png',
    order: 9,
  },
  {
    id: 'begl',
    name: 'BEGL',
    fullName: 'Bangalore Education Guide Line',
    logo: '/images/placement/BEGL.jpg',
    order: 10,
  },
  {
    id: 'dxc',
    name: 'DXC Technology',
    fullName: 'DXC Technology',
    logo: '/images/placement/DXC.png',
    order: 11,
  },
  {
    id: 'qspiders',
    name: 'QSpiders',
    fullName: 'QSpiders Software Testing Training',
    logo: '/images/placement/spiders.jpg',
    order: 12,
  },
  {
    id: 'slk',
    name: 'SLK',
    fullName: 'SLK Software',
    logo: '/images/placement/SLK.png',
    order: 13,
  },
  {
    id: 'united-health-group',
    name: 'UnitedHealth Group',
    fullName: 'UnitedHealth Group (Optum)',
    logo: '/images/placement/UnitedHealthGroup.jpg',
    order: 14,
  },
  {
    id: 'wipro',
    name: 'Wipro',
    fullName: 'Wipro Technologies',
    logo: '/images/placement/Wipro.png',
    order: 15,
  },
];
