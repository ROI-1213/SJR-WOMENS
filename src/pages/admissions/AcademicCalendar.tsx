import { Link } from 'react-router-dom';
import { AdmissionsLayout } from '@/components/layout/AdmissionsLayout';

export default function AcademicCalendar() {
  return (
    <AdmissionsLayout pageTitle="Academic Calendar" breadcrumbPath="Academic Calendar" category="Admissions">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="mb-4 text-muted-foreground">Contact the college office for the current academic calendar.</p>
        <Link to="/contact" className="font-semibold text-primary underline">Contact the college</Link>
      </section>
    </AdmissionsLayout>
  );
}
