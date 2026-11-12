
import { aboutMenuData } from './navigation/aboutMenuData';
import { academicsMenuData } from './navigation/academicsMenuData';
import { admissionsMenuData } from './navigation/admissionsMenuData';
import { infrastructureMenuData } from './navigation/infrastructureMenuData';
import { studentServicesPages } from './navigation/studentServicesMenuData';
import { mediaCenterMenuData, mediaCenterPages } from './navigation/mediaCenterMenuData';
import { placementPages, placementsMenuData } from './navigation/placementsMenuData';
import { researchMenuData } from './navigation/researchMenuData';
import { departmentsDropdownData } from './navigation/departmentsMenuData';

// Define proper types for menu items
export interface BaseMenuItem {
  label: string;
  href: string;
  specializations?: string[];
}

export interface MenuItemWithSubmenu extends BaseMenuItem {
  submenu?: BaseMenuItem[];
}

export interface MenuItem extends BaseMenuItem {
  dropdown?: MenuItemWithSubmenu[];
}

export interface MainMenuItem {
  key: string;
  label: string;
  href: string;
  dropdown?: MenuItemWithSubmenu[];
}

export const menuItems: MainMenuItem[] = [
  { key: 'home', label: 'Home', href: '/' },
  { 
    key: 'about', 
    label: 'About', 
    href: '/about/overview',
    dropdown: aboutMenuData
  },
  { 
    key: 'academics', 
    label: 'Academics', 
    href: '/academics',
    dropdown: academicsMenuData
  },
  { 
    key: 'departments', 
    label: 'Departments', 
    href: '/departments',
    dropdown: departmentsDropdownData
  },
  { 
    key: 'admissions', 
    label: 'Admissions', 
    href: '/admissions',
    dropdown: admissionsMenuData
  },
  { 
    key: 'infrastructure', 
    label: 'Infrastructure', 
    href: '/infrastructure',
    dropdown: [...infrastructureMenuData]
  },
  { 
    key: 'student-services', 
    label: 'Student Services', 
    href: '#',
    dropdown: Object.values(studentServicesPages)
  },
  { 
    key: 'media-center', 
    label: 'Media Center', 
    href: mediaCenterPages.events.href,
    dropdown: mediaCenterMenuData
  },
  { 
    key: 'placements', 
    label: 'Placements', 
    href: placementPages.overview.href,
    dropdown: placementsMenuData
  },
  { 
    key: 'research', 
    label: 'Research', 
    href: '/research/activities',
    dropdown: researchMenuData
  }
];
