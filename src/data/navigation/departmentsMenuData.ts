export const departmentNames = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Mathematics',
  botany: 'Botany',
  zoology: 'Zoology',
  'computer-science': 'Computer Science',
  english: 'English',
  'kannada-optional-kannada': 'Kannada / Optional Kannada',
  hindi: 'Hindi',
  sanskrit: 'Sanskrit',
  history: 'History',
  economics: 'Economics',
  commerce: 'Commerce',
  'business-administration': 'Business Administration',
  mcom: 'M.Com',
  'physical-education': 'Physical Education',
} as const;

export type DepartmentSlug = keyof typeof departmentNames;

export const departmentsDropdownData = (Object.keys(departmentNames) as DepartmentSlug[]).map(slug => ({
  slug,
  label: departmentNames[slug],
  href: `/departments/${slug}`,
}));
