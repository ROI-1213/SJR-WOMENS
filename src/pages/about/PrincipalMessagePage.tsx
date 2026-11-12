import { AboutLayout } from '@/components/layout/AboutLayout';
import { PrincipalMessage } from '@/components/PrincipalMessage';

export default function PrincipalMessagePage() {
  return (
    <AboutLayout pageTitle="Principal's Message" breadcrumbPath="Principal's Message">
      <PrincipalMessage fullMessage />
    </AboutLayout>
  );
}
