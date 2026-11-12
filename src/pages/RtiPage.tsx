import { ArrowUpRight, Clock, Download, FileText, Info, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { instituteContact, instituteName } from '@/data/institute';

const RtiPage = () => (
  <SectionPageLayout
    section={{ label: 'Mandatory Disclosure', href: '/mandatory-disclosure' }}
    pageTitle="Right to Information (RTI)"
    breadcrumbPath="RTI"
    showFloatingApply={false}
  >
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <section aria-labelledby="rti-overview-heading" className="rounded-xl border border-neutral-200 border-l-4 border-l-[#ff8c00] bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-[#177249]">
          <ShieldCheck size={20} aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider">Section 4(1)(b) Declaration</span>
        </div>
        <h2 id="rti-overview-heading" className="mt-2 text-2xl font-bold text-[#153b2a]">
          Declaration under Right to Information Act, 2005
        </h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          {instituteName} is a First Grade College set up and managed by the Sri Jagadguru Renukacharya Education Society (registered under the Karnataka Societies Registration Act, 1960). Established as a Pre-University college in 1988, the college started offering undergraduate programmes in 1990 and added the postgraduate M.Com programme in 2013.
        </p>
        <p className="mt-3 leading-relaxed text-neutral-700">
          It is a private unaided college affiliated to Bengaluru City University (BCU) and recognised by the University Grants Commission (UGC) under Sections 2(f) and 12(B). Institutional details including courses offered, admission procedures, faculty details, governing body members, and college activities are placed in the public domain under Section 4(1)(b) of the RTI Act, 2005.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section aria-labelledby="rti-officer-heading" className="rounded-xl border border-neutral-200 bg-[#f8fbf8] p-6">
          <h2 id="rti-officer-heading" className="text-xl font-bold text-[#153b2a]">Head of Institution (RTI Contact)</h2>
          <dl className="mt-4 space-y-3 text-sm text-neutral-700">
            <div>
              <dt className="font-semibold text-[#182d23]">Head of Institution</dt>
              <dd>Dr. Prema, Principal, {instituteName}</dd>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#177249]" aria-hidden="true" />
              <div>
                <dt className="sr-only">Address</dt>
                <dd>{instituteContact.address}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-[#177249]" aria-hidden="true" />
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${instituteContact.email}`} className="font-medium text-[#177249] underline underline-offset-4">
                    {instituteContact.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-[#177249]" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-[#182d23]">College Timings</dt>
                <dd>{instituteContact.timings} (Closed on Sundays and declared public holidays)</dd>
              </div>
            </div>
          </dl>
          <p className="mt-4 flex items-start gap-2 rounded-lg border border-[#e0ddce] bg-[#faf7ef] p-3 text-xs leading-relaxed text-neutral-700">
            <Info size={15} className="mt-0.5 shrink-0 text-[#177249]" aria-hidden="true" />
            <span>
              Note: Separate Public Information Officer (PIO) and First Appellate Authority names beyond the Head of Institution are not separately listed in the published RTI declaration PDF.
            </span>
          </p>
        </section>

        <section aria-labelledby="rti-application-heading" className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6">
          <div>
            <h2 id="rti-application-heading" className="text-xl font-bold text-[#153b2a]">Application Guidance &amp; Official Document</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              As stated in the official RTI declaration, applications under the RTI Act, 2005—along with a postal order or demand draft for <strong>Rs. 10/-</strong> obtained in favour of the <strong>Principal, SJR College for Women</strong>—may be sent to the Principal or the college office at the Rajajinagar address.
            </p>
          </div>
          <div className="mt-6 space-y-3 border-t border-neutral-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#177249]">Official RTI Declaration PDF</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/documents/RTI-SJRCW.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-md bg-[#177249] px-4 py-2 text-sm font-semibold text-white hover:bg-[#135c3b]"
              >
                <FileText size={16} aria-hidden="true" />
                Open RTI-SJRCW.pdf
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href="/documents/RTI-SJRCW.pdf"
                download
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#177249]/30 px-4 py-2 text-sm font-semibold text-[#177249] hover:bg-[#eef4ef]"
              >
                <Download size={16} aria-hidden="true" />
                Download PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </SectionPageLayout>
);

export default RtiPage;
