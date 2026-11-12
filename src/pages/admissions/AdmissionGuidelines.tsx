
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { CheckCircle, AlertTriangle, FileText, Calendar } from 'lucide-react';
import { availableProgrammes, programmeTitle, type AvailableProgramme } from '@/data/institute';

const eligibilityByProgramme: Record<AvailableProgramme['id'], { requirement: string; source: string }> = {
  bcom: {
    requirement: 'Complete the two-year Karnataka PUC, 10+2 in Karnataka or another state, or an equivalent qualification. Students who pass the second PUC examination directly through open schooling are also eligible.',
    source: 'https://bcu.ac.in/uploads/syllabus/UG_Syllabus/commerce/B.Com_Regular_V_&_VI_Sem.pdf#page=10',
  },
  bba: {
    requirement: 'Complete the two-year Karnataka PUC, 10+2 in Karnataka or another state, or an equivalent qualification.',
    source: 'https://bcu.ac.in/uploads/syllabus/UG_Syllabus/commerce/BBA_Regular_V_&_VI_Sem.pdf#page=11',
  },
  bca: {
    requirement: 'Pass the Pre-University Course (PUC) or an equivalent qualification.',
    source: 'https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf#page=11',
  },
  mcom: {
    requirement: 'Pass a three-year B.Com or B.B.M. degree from Dr. Manmohan Singh Bengaluru City University, or an equivalent degree recognised by the university. The minimum aggregate in Commerce subjects is 50%, or 45% for SC, ST and Category I applicants.',
    source: 'https://bcu.ac.in/apscms/public/uploads/announcements/news_ans-1783424161_.pdf#page=11',
  },
};

const AdmissionGuidelines = () => {
  const admissionSteps = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill the online application form with accurate details'
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit required documents for verification'
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Pay admission fees to confirm your seat'
    }
  ];

  const requiredDocuments = [
    '10th Standard Marksheet and Certificate',
    '12th Standard Marksheet and Certificate',
    'Transfer Certificate from previous institution',
    'Migration Certificate (if applicable)',
    'Conduct Certificate',
    'Passport size photographs (6 copies)',
    'Caste Certificate (if applicable)',
    'Income Certificate (for scholarship)',
    'Aadhar Card copy',
    'Medical Fitness Certificate'
  ];

  return (
    <AdmissionsLayout pageTitle="Admission Guidelines" breadcrumbPath="Guidelines" category="Admissions" branded>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Admission Guidelines 2026-27</h2>
            <p className="text-lg text-gray-700">
              Complete guide to the admission process at Sri Jagadguru Renukacharya College of Science, Arts & Commerce. 
              Please read all guidelines carefully before applying.
            </p>
          </div>

          {/* Eligibility Criteria */}
          <section aria-labelledby="admission-eligibility" className="mb-12">
            <h3 id="admission-eligibility" className="text-2xl font-bold text-primary mb-6 flex items-center">
              <FileText className="mr-3 shrink-0" size={24} aria-hidden="true" />
              Eligibility Criteria
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {availableProgrammes.map((programme) => {
                const { requirement, source } = eligibilityByProgramme[programme.id];

                return (
                  <Card key={programme.id} className="flex flex-col p-6">
                    <h4 className="mb-3 text-lg font-semibold text-primary">{programmeTitle(programme)}</h4>
                    <p className="mb-3 text-gray-600">{requirement}</p>
                    <a
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Eligibility source for ${programme.name} (PDF)`}
                      className="mt-auto self-start text-sm font-medium text-primary underline underline-offset-4 hover:decoration-[#ff8c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Eligibility source (PDF)
                    </a>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Admission Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Calendar className="mr-3" size={24} />
              Admission Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Required Documents</h3>
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Important Notes */}
          <Card className="p-6 bg-[#ff8c00]/10 border-[#ff8c00]/40">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-destructive mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-primary mb-2">Important Notes</h3>
                <ul className="text-neutral-800 space-y-1 text-sm">
                  <li>• All documents must be original for verification</li>
                  <li>• Admission is subject to verification of documents</li>
                  <li>• Seats are allotted on merit basis</li>
                  <li>• Fee once paid is non-refundable except as per refund policy</li>
                  <li>• Last date for admission may vary for different courses</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default AdmissionGuidelines;
