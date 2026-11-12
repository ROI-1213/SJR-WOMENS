import { ArrowUpRight, Building2, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactEnquiryForm } from '@/components/ContactEnquiryForm';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { instituteContact, instituteName } from '@/data/institute';

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8453637325783!2d77.57355497484156!3d12.981740587334896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1610ef2a42a9%3A0x3ab2ebaed5a7fb32!2sSri%20Jagadguru%20Renukacharya%20College%20of%20Science%20Arts%20And%20Commerce!5e0!3m2!1sen!2sin!4v1794468228964!5m2!1sen!2sin';
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=9%20Race%20Course%20Road%2C%20Ananda%20Rao%20Circle%2C%20Bengaluru%20560009';
const hours = [
  { days: 'Monday–Friday', time: '9:00 AM–5:00 PM' },
  { days: 'Saturday', time: '9:00 AM–1:00 PM' },
  { days: 'Sunday', time: 'Closed' },
];
const offices = ['Admissions Office', 'Academic Office', 'Student Services', 'Placement Cell'];
const linkStyle = 'rounded-sm font-semibold text-[#177249] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#177249]';

const details = [
  {
    title: 'Campus address',
    icon: MapPin,
    content: (
      <address className="space-y-1.5 not-italic">
        <p className="font-semibold text-[#153b2a]">{instituteName}</p>
        <p>{instituteContact.address}</p>
      </address>
    ),
  },
  {
    title: 'Phone',
    icon: Phone,
    content: <a href={instituteContact.phoneHref} className={linkStyle}>{instituteContact.phone}</a>,
  },
  {
    title: 'Email',
    icon: Mail,
    content: <a href={`mailto:${instituteContact.email}`} className={`${linkStyle} [overflow-wrap:anywhere]`}>{instituteContact.email}</a>,
  },
  {
    title: 'Working hours',
    icon: Clock3,
    content: (
      <dl className="space-y-1.5">
        {hours.map(({ days, time }) => (
          <div key={days} className="flex flex-wrap justify-between gap-x-2">
            <dt>{days}</dt>
            <dd className="font-medium tabular-nums text-[#153b2a]">{time}</dd>
          </div>
        ))}
      </dl>
    ),
  },
];

const Contact = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <div className="internal-page-breadcrumb border-b border-[#177249]/15 bg-[#177249]/5">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild className="text-[#177249] hover:underline"><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Contact Us</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
    <main>
      <section className="internal-page-hero text-center" aria-labelledby="contact-title">
        <div className="mx-auto max-w-5xl px-4">
          <h1 id="contact-title" className="font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-base font-medium text-white/95 sm:text-lg">Get in Touch With Us.</p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-white" aria-hidden="true" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-7 px-4 py-8 sm:space-y-9 sm:px-6 sm:py-12 lg:px-10">
        <section aria-labelledby="contact-details-title">
          <h2 id="contact-details-title" className="mb-4 text-2xl font-bold tracking-tight text-[#153b2a] sm:mb-5 sm:text-3xl">College contact details</h2>
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-[1.2fr_0.8fr_1fr_1.1fr]">
            {details.map(({ title, icon: Icon, content }) => (
              <li key={title} className="min-w-0 rounded-xl border border-[#177249]/15 bg-white p-4 shadow-sm transition-colors hover:border-[#177249]/40 sm:p-5">
                <span className="grid size-10 place-items-center rounded-lg border-b-2 border-[#ff8c00] bg-[#177249]/10 text-[#177249]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-bold text-[#153b2a]">{title}</h3>
                <div className="mt-1.5 text-sm leading-relaxed text-neutral-700">{content}</div>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <section aria-labelledby="contact-map-title" className="min-w-0 overflow-hidden rounded-2xl border border-[#177249]/15 bg-white shadow-sm">
            <div className="p-4 sm:p-6">
              <h2 id="contact-map-title" className="text-xl font-bold tracking-tight text-[#153b2a] sm:text-2xl">Find Us on Google Maps</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">{instituteContact.address}</p>
            </div>
            <iframe
              src={mapEmbedUrl}
              title="Google Maps location of Sri Jagadguru Renukacharya College"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block aspect-[4/3] h-auto min-h-64 w-full bg-[#177249]/5"
            />
            <div className="flex items-center border-t border-[#177249]/15 bg-[#177249]/5 px-4 py-3 sm:px-6">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={`${linkStyle} inline-flex min-h-10 items-center gap-2 text-sm`}>
                Open directions in Google Maps <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </section>

          <section aria-labelledby="contact-form-title" className="min-w-0 rounded-2xl border border-[#177249]/15 border-t-4 border-t-[#ff8c00] bg-[#177249]/5 p-4 shadow-sm sm:p-6">
            <h2 id="contact-form-title" className="text-xl font-bold tracking-tight text-[#153b2a] sm:text-2xl">Send us a message</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">All fields are required.</p>
            <ContactEnquiryForm />
          </section>
        </div>

        <section aria-labelledby="contact-offices-title" className="flex flex-wrap items-start gap-3 rounded-xl border border-[#177249]/15 bg-white px-4 py-4 sm:items-center sm:px-6">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#177249]/10 text-[#177249]">
            <Building2 size={20} aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="contact-offices-title" className="font-bold text-[#153b2a]">Department contacts</h2>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700">Use the college phone or email above for these offices.</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-[#153b2a]">
              {offices.map(office => <li key={office}>{office}</li>)}
            </ul>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
