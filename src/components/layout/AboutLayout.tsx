import { SectionPageLayout } from './SectionPageLayout';
import type { ComponentProps } from 'react';

type AboutLayoutProps = Omit<ComponentProps<typeof SectionPageLayout>, 'section'>;

export const AboutLayout = (props: AboutLayoutProps) => (
  <SectionPageLayout {...props} section={{ label: 'About', href: '/about/overview' }} />
);
