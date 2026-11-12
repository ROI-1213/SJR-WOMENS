import type { BaseMenuItem } from '../navigationData';

export const researchPages = {
  activities: { label: 'R&D Activities', href: '/research/activities' },
  publications: { label: 'Faculty Publications', href: '/research/faculty-publications' },
  facultyAchievements: { label: 'Faculty Achievements', href: '/research/faculty-achievements' },
  studentAchievements: { label: 'Student Achievements', href: '/research/student-achievements' },
  enrollment: { label: 'Enrollment', href: '/research/enrollment' },
  guides: { label: 'Research Guides', href: '/research/guides' },
  patents: { label: 'Patents', href: '/research/patents' },
} satisfies Record<string, BaseMenuItem>;

export type ResearchPageKey = keyof typeof researchPages;
export const researchMenuData = Object.values(researchPages);
