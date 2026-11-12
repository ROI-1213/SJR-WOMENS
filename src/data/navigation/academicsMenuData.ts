import { availableProgrammes, programmeTitle } from '../institute';

export const academicsMenuData = availableProgrammes.map(programme => ({
  label: programmeTitle(programme),
  href: programme.href,
}));
