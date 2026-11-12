import { ArrowUpRight, Coffee, CookingPot, MapPin, Salad, Sandwich, Soup, Utensils } from 'lucide-react';
import { InfrastructureLayout } from '@/components/layout/InfrastructureLayout';
import canteen from '@/assets/canteen-dining.jpg';
import meal from '@/assets/canteen-service.jpg';
import { FacilityCards, FacilityIntro, FacilitySection } from './FacilityContent';

const cafeteriaSource = 'https://puc.sjres.edu.in/facilities/cafeteria';

const menu = [
  { icon: Coffee, title: 'Breakfast', description: 'Idli with sambar, dosa, upma, poha, tea, and coffee.' },
  { icon: Soup, title: 'Lunch', description: 'South Indian meals, North Indian thalis, biryani, and rice dishes.' },
  { icon: Sandwich, title: 'Evening Snacks', description: 'Samosas, sandwiches, juice, and ice cream.' },
];

const hours = [
  { label: 'Breakfast', time: '8:30 am–10:55 am' },
  { label: 'Lunch', time: '1:00 pm–3:00 pm' },
  { label: 'Evening snacks', time: '3:30 pm–5:00 pm' },
  { label: 'Saturday', time: '8:30 am–3:00 pm' },
];

const Canteen = () => (
  <InfrastructureLayout pageTitle="Canteen">
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:space-y-16 sm:py-14">
      <FacilityIntro title="Campus Dining" photo={canteen} alt="Service counter and tables pictured on the SJR PU College cafeteria page">
        <p>The canteen gives students and staff a place to eat between classes. SJR PU College describes a ventilated dining space with separate seating areas and a menu of meals, snacks, and refreshments.</p>
        <a href={cafeteriaSource} className="inline-flex items-center gap-1 font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]">
          SJR PU College cafeteria details <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
        </a>
      </FacilityIntro>

      <FacilitySection title="Dining Facilities">
        <FacilityCards items={[
          { icon: Utensils, title: 'Dining Hall', description: 'The cafeteria page lists seating for more than 50 people, air conditioning, and natural light.' },
          { icon: Salad, title: 'Meal Options', description: 'Vegetarian and non-vegetarian options are listed, with provisions for special dietary requirements.' },
          { icon: CookingPot, title: 'Meal Plans and Catering', description: 'The cafeteria lists monthly meal packages for students and catering for special events.' },
        ]} />
      </FacilitySection>

      <FacilitySection title="Menu Highlights">
        <div className="grid gap-5 lg:grid-cols-2">
          <FacilityCards items={menu} columns="grid-cols-1" />
          <figure className="overflow-hidden rounded-xl border border-[#177249]/15">
            <img src={meal} alt="Thali meal pictured on the SJR PU College cafeteria page" loading="lazy" className="h-full min-h-48 w-full object-cover" />
          </figure>
        </div>
      </FacilitySection>

      <section className="grid gap-6 rounded-2xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-[#177249]">Published Service Hours</h2>
          <p className="mt-2 text-sm text-neutral-700">Schedule listed by SJR PU College.</p>
          <dl className="mt-4 divide-y divide-[#177249]/15">
            {hours.map(({ label, time }) => (
              <div key={label} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-2.5 text-sm">
                <dt className="font-semibold text-neutral-800">{label}</dt>
                <dd className="text-neutral-700">{time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-neutral-700">Closed on Sundays, public holidays, and the second Saturday of each month.</p>
        </div>
        <div className="rounded-xl bg-white p-5 sm:p-6">
          <MapPin className="mb-3 size-6 text-[#177249]" aria-hidden="true" />
          <h2 className="text-xl font-bold text-[#177249]">Location & Feedback</h2>
          <p className="mt-2 leading-relaxed text-neutral-700">The cafeteria page lists the ground floor of the main building and a suggestion box near the entrance.</p>
          <a href={cafeteriaSource} className="mt-4 inline-block text-sm font-semibold text-[#177249] underline underline-offset-4 hover:decoration-[#ff8c00]">View cafeteria contact details</a>
        </div>
      </section>
    </div>
  </InfrastructureLayout>
);

export default Canteen;
