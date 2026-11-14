import { Photo } from './types';
import campus from '@/assets/sjr-administrative-block.jpg';
import teacher from '@/assets/sjr-teacher-guidance.jpg';
import project from '@/assets/sjr-computer-project.jpg';
import sports from '@/assets/sjr-table-tennis.jpg';
import library from '@/assets/sjr-library.jpg';
import classroom from '@/assets/sjr-classroom.jpg';
import workshop from '@/assets/homepage/placement-workshop.webp';
import gym from '@/assets/homepage/campus-gym.webp';
import carrom from '@/assets/hero/student-life-1440.webp';
import campusPreview from '@/assets/homepage/gallery/campus.webp';
import guidancePreview from '@/assets/homepage/gallery/guidance.webp';
import labPreview from '@/assets/homepage/gallery/lab.webp';
import tableTennisPreview from '@/assets/homepage/gallery/table-tennis.webp';
import libraryPreview from '@/assets/homepage/gallery/library.webp';
import classroomPreview from '@/assets/homepage/gallery/classroom.webp';
import workshopPreview from '@/assets/homepage/gallery/workshop.webp';
import gymPreview from '@/assets/homepage/gallery/gym.webp';
import carromPreview from '@/assets/homepage/gallery/carrom.webp';

export const galleryCategories = [
  'All',
  'Campus',
  'Academics',
  'Facilities',
  'Sports',
  'Events',
  'Student Life',
  'Cultural – Samskruti',
  'Youth Red Cross',
  'Gandhi Study Centre',
  'NSS',
  'Blood Donation Camp',
  'National Mathematics Day',
  'Inauguration of Forum Activities',
  'Orientation Programme',
  'Republic Day Celebration',
  'Ganesha Pooja Celebration',
] as const;

export const photos: Photo[] = [
  // Primary 9 Campus Life & Infrastructure Showcase (Featured 2x2 grid layout)
  { id: 1, src: campus, previewSrc: campusPreview, title: 'Administrative Block', category: 'Campus' },
  { id: 2, src: teacher, previewSrc: guidancePreview, title: 'Classroom Guidance', category: 'Academics' },
  { id: 3, src: project, previewSrc: labPreview, title: 'Computer Lab Project', category: 'Academics' },
  { id: 4, src: sports, previewSrc: tableTennisPreview, title: 'Table Tennis', category: 'Sports' },
  { id: 5, src: library, previewSrc: libraryPreview, title: 'Library Reading Room', category: 'Facilities' },
  { id: 6, src: classroom, previewSrc: classroomPreview, title: 'Classroom', category: 'Academics' },
  { id: 7, src: workshop, previewSrc: workshopPreview, title: 'Campus interview preparation workshop', category: 'Events' },
  { id: 8, src: gym, previewSrc: gymPreview, title: 'Campus gymnasium', category: 'Facilities' },
  { id: 9, src: carrom, previewSrc: carromPreview, title: 'A game of carrom', category: 'Student Life' },

  // Subsequent Event Photos (Revealed when "View More" is clicked)
  { id: 10, src: '/images/gallery/culturals-1.jpg', title: 'Cultural Activities – Samskruti', category: 'Cultural – Samskruti' },
  { id: 11, src: '/images/gallery/culturals-2.jpg', title: 'Samskruti Cultural Performance', category: 'Cultural – Samskruti' },
  { id: 12, src: '/images/gallery/culturals-3.jpg', title: 'Student Cultural Programme', category: 'Cultural – Samskruti' },
  { id: 13, src: '/images/gallery/yrc-1.jpg', title: 'Youth Red Cross Wing Activity', category: 'Youth Red Cross' },
  { id: 14, src: '/images/gallery/yrc-2.jpg', title: 'Youth Red Cross Health & Outreach Initiative', category: 'Youth Red Cross' },
  { id: 15, src: '/images/gallery/yrc-3.jpg', title: 'Youth Red Cross Volunteers', category: 'Youth Red Cross' },
  { id: 16, src: '/images/gallery/gandhi-study-1.jpg', title: 'Gandhi Study Centre Programme', category: 'Gandhi Study Centre' },
  { id: 17, src: '/images/gallery/gandhi-study-2.jpg', title: 'Gandhi Study Centre Activity', category: 'Gandhi Study Centre' },
  { id: 18, src: '/images/gallery/nss-1.jpg', title: 'NSS Unit Activity', category: 'NSS' },
  { id: 19, src: '/images/gallery/nss-2.jpg', title: 'NSS Volunteers Programme', category: 'NSS' },
  { id: 20, src: '/images/gallery/blood-donation-1.jpg', title: 'Blood Donation Camp at SJRCW', category: 'Blood Donation Camp' },
  { id: 21, src: '/images/gallery/blood-donation-2.jpg', title: 'Blood Donation Camp Volunteers & Donors', category: 'Blood Donation Camp' },
  { id: 22, src: '/images/gallery/maths-day-1.jpg', title: 'National Mathematics Day Celebration', category: 'National Mathematics Day' },
  { id: 23, src: '/images/gallery/maths-day-2.jpg', title: 'National Mathematics Day Activity', category: 'National Mathematics Day' },
  { id: 24, src: '/images/gallery/forum-inauguration-1.jpg', title: 'Inauguration of Forum Activities', category: 'Inauguration of Forum Activities' },
  { id: 25, src: '/images/gallery/forum-inauguration-2.jpg', title: 'Student Forum Inaugural Session', category: 'Inauguration of Forum Activities' },
  { id: 26, src: '/images/gallery/orientation-1.jpg', title: 'Orientation Programme for First-Year Students', category: 'Orientation Programme' },
  { id: 27, src: '/images/gallery/orientation-2.jpg', title: 'Student Orientation Session', category: 'Orientation Programme' },
  { id: 28, src: '/images/gallery/republic-day-1.jpg', title: 'Republic Day Celebration at Campus', category: 'Republic Day Celebration' },
  { id: 29, src: '/images/gallery/ganesha-pooja-1.jpg', title: 'Ganesha Pooja Celebration', category: 'Ganesha Pooja Celebration' },
  { id: 30, src: '/images/gallery/ganesha-pooja-2.jpg', title: 'Ganesha Pooja Cultural Gathering', category: 'Ganesha Pooja Celebration' },
  { id: 31, src: '/images/gallery/sports-1.jpg', title: 'Sports & Physical Education Activities', category: 'Sports' },
  { id: 32, src: '/images/gallery/sports-2.jpg', title: 'Inter-Collegiate & Campus Sports', category: 'Sports' },
];
