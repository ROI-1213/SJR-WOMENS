export interface ImageManifestEntry {
  localPath: string;
  sourceUrl: string;
  category: string;
  caption: string;
  usedIn: string;
}

export const imageManifest: readonly ImageManifestEntry[] = [
  {
    localPath: '/images/principal/dr-prema-siddaraju.jpg',
    sourceUrl: 'http://www.sjrcw.edu.in/wp-content/uploads/2023/02/Principal-SJRCW-270x270_c.jpeg',
    category: 'Principal',
    caption: 'Dr. Prema Siddaraju, Principal, SJR College for Women',
    usedIn: 'PrincipalMessage, Faculties',
  },
  {
    localPath: '/images/campus/college-view.jpg',
    sourceUrl: 'http://www.sjrcw.edu.in/wp-content/uploads/2020/04/college-view.jpg',
    category: 'Campus',
    caption: 'SJR College for Women Main Campus Building, Rajajinagar',
    usedIn: 'Banner, NaacIqac, Gallery',
  },
  {
    localPath: '/images/campus/sjrcw-banner.jpg',
    sourceUrl: 'http://www.sjrcw.edu.in/wp-content/uploads/2021/12/SJRCW-Banner.jpeg',
    category: 'Campus',
    caption: 'SJR College for Women Campus Banner',
    usedIn: 'Banner',
  },
  {
    localPath: '/images/campus/campus-event.jpg',
    sourceUrl: 'http://www.sjrcw.edu.in/wp-content/uploads/2020/04/DSC_6561.jpg',
    category: 'Campus',
    caption: 'Campus Academic & Student Life Gathering',
    usedIn: 'Banner',
  },
  {
    localPath: '/images/infrastructure/library.jpg',
    sourceUrl: 'https://www.sjrcw.edu.in/wp-content/uploads/2020/07/Library-Copy.jpg',
    category: 'Infrastructure',
    caption: 'Central Library Reading Room',
    usedIn: 'NaacIqac, Gallery',
  },
  {
    localPath: '/images/infrastructure/computer-lab.jpg',
    sourceUrl: 'https://www.sjrcw.edu.in/wp-content/uploads/2020/07/CS-Lab-Copy.jpg',
    category: 'Infrastructure',
    caption: 'Wi-Fi Enabled Computer Science Laboratory',
    usedIn: 'Gallery',
  },
  {
    localPath: '/images/infrastructure/physics-lab.jpg',
    sourceUrl: 'https://www.sjrcw.edu.in/wp-content/uploads/2020/07/Physics-Lab-Copy.jpg',
    category: 'Infrastructure',
    caption: 'Physics Laboratory',
    usedIn: 'Gallery',
  },
  {
    localPath: '/images/infrastructure/chemistry-lab.jpg',
    sourceUrl: 'https://www.sjrcw.edu.in/wp-content/uploads/2020/07/Chemistry-Lab-Copy.jpg',
    category: 'Infrastructure',
    caption: 'Chemistry Laboratory',
    usedIn: 'Gallery',
  },
  {
    localPath: '/images/infrastructure/botany-lab.jpg',
    sourceUrl: 'https://www.sjrcw.edu.in/wp-content/uploads/2020/07/Botany-Lab-Copy.jpg',
    category: 'Infrastructure',
    caption: 'Botany Laboratory',
    usedIn: 'Gallery',
  },
  {
    localPath: '/images/infrastructure/business-lab.jpg',
    sourceUrl: 'https://www.sjrcw.edu.in/wp-content/uploads/2020/07/Business-Lab-Copy.jpg',
    category: 'Infrastructure',
    caption: 'Functional Business Laboratory',
    usedIn: 'Gallery',
  },
  {
    localPath: '/images/infrastructure/seminar-hall.jpg',
    sourceUrl: 'https://www.sjrcw.edu.in/wp-content/uploads/2020/07/Seminar-Hall-Copy.jpg',
    category: 'Infrastructure',
    caption: 'Seminar Hall & Auditorium',
    usedIn: 'Gallery',
  },
  {
    localPath: '/images/placements/soft-skills-training.jpg',
    sourceUrl: 'http://www.sjrcw.edu.in/wp-content/uploads/2023/02/Employablity-and-Soft-Skill-training.jpeg',
    category: 'Placements',
    caption: 'Employability and Soft Skill Training Session',
    usedIn: 'PlacementsOverview',
  },
];
