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

export const photos: Photo[] = [
  { id: 1, src: campus, previewSrc: campusPreview, title: 'Administrative Block', category: 'campus' },
  { id: 2, src: teacher, previewSrc: guidancePreview, title: 'Classroom Guidance', category: 'academics' },
  { id: 3, src: project, previewSrc: labPreview, title: 'Computer Lab Project', category: 'academics' },
  { id: 4, src: sports, previewSrc: tableTennisPreview, title: 'Table Tennis', category: 'sports' },
  { id: 5, src: library, previewSrc: libraryPreview, title: 'Library Reading Room', category: 'facilities' },
  { id: 6, src: classroom, previewSrc: classroomPreview, title: 'Classroom', category: 'academics' },
  { id: 7, src: workshop, previewSrc: workshopPreview, title: 'Campus interview preparation workshop', category: 'events' },
  { id: 8, src: gym, previewSrc: gymPreview, title: 'Campus gymnasium', category: 'facilities' },
  { id: 9, src: carrom, previewSrc: carromPreview, title: 'A game of carrom', category: 'student life' },
];
