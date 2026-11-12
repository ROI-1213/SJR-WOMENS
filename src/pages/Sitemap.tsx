import { departmentsDropdownData } from '@/data/navigation/departmentsMenuData';
import { academicsMenuData } from "@/data/navigation/academicsMenuData";
import { aboutMenuData } from "@/data/navigation/aboutMenuData";
import { mediaCenterMenuData } from "@/data/navigation/mediaCenterMenuData";
import { researchMenuData } from "@/data/navigation/researchMenuData";
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExternalLink, FileText, Users, GraduationCap, Building, MapPin } from 'lucide-react';

const Sitemap = () => {
const sitemapSections = [
    {
      title: "About",
      icon: FileText,
      links: [
        ...aboutMenuData,
        { label: "The Institution Mentor", href: "/about/institution-mentor" },
        { label: "Sri Jagadguru Renukacharya Education Society", href: "/about/society" },
        { label: "Campus", href: "/about/campus" },
        { label: "Village Adoption", href: "/about/village-adoption" },
      ]
    },
    {
      title: "Academic Departments",
      icon: GraduationCap,
      links: [{ label: "Departments Overview", href: "/departments" }, ...departmentsDropdownData]
    },
    {
      title: "Academic Programmes",
      icon: GraduationCap,
      links: academicsMenuData,
    },
    {
      title: "Admissions",
      icon: Users,
      links: [
        { label: "Admissions Home", href: "/admissions" },
        { label: "Online Admission Application", href: "/admissions/online-application" },
        { label: "Admission Guidelines", href: "/admissions/guidelines" },
        { label: "International Admissions Process", href: "/admissions/international" },
        { label: "Academic Calendar", href: "/admissions/calendar" },
        { label: "Scholarships & Scholarship Committee", href: "/admissions/scholarships" },
        { label: "Management Scholarship Application", href: "/admissions/management-scholarship" },
        { label: "Scholarship Policy", href: "/admissions/scholarship-policy" },
        { label: "Main Prospectus", href: "/admissions/main-prospectus" },
        { label: "MA Prospectus", href: "/admissions/ma-prospectus" },
        { label: "MSc Prospectus", href: "/admissions/msc-prospectus" },
        { label: "Student Handbook", href: "/admissions/handbook" },
        { label: "Fee Refund Policy", href: "/admissions/fee-refund" },
        { label: "Fee Structure", href: "/admissions/fee-structure" }
      ]
    },
    {
      title: "Infrastructure",
      icon: Building,
      links: [
        { label: "Infrastructure Home", href: "/infrastructure" },
        { label: "Campus Overview", href: "/infrastructure/campus-overview" },
        { label: "Professional Studio", href: "/infrastructure/professional-studio" },
        { label: "Library", href: "/infrastructure/library" },
        { label: "Sports Facilities", href: "/infrastructure/sports-facilities" },
        { label: "Classrooms", href: "/infrastructure/classrooms" },
        { label: "Auditorium", href: "/infrastructure/auditorium" },
        { label: "Canteen", href: "/infrastructure/canteen" }
      ]
    },
    {
      title: "Student Clubs",
      icon: Users,
      links: [
        { label: "Clubs Overview", href: "/student-services/clubs" },
        { label: "National Service Scheme (NSS)", href: "/student-services/nss" },
        { label: "National Cadet Corps (NCC)", href: "/student-services/ncc" },
        { label: "Film Club (Cinephelics)", href: "/student-services/film-club" },
        { label: "Health Club", href: "/student-services/health" },
        { label: "Sports Club", href: "/student-services/sports-club" },
        { label: "Literary Club", href: "/student-services/literary" },
        { label: "Competitive Exams Club", href: "/student-services/competitive-exams" },
        { label: "Environmental Club", href: "/student-services/environmental" },
        { label: "Business Club", href: "/student-services/business" },
        { label: "Management Club", href: "/student-services/management-club" },
        { label: "Photography Club", href: "/student-services/photography-club" },
        { label: "Literary and Cultural Association (LCA)", href: "/student-services/lca" },
        { label: "Fashion Club", href: "/student-services/fashion" },
        { label: "Peer Empowerment Club", href: "/student-services/peer-empowerment" },
        { label: "Young Christian Association (YCANC)", href: "/student-services/ycanc" },
        { label: "Humanities Club", href: "/student-services/humanities-club" },
        { label: "Personality & Public Speaking Club", href: "/student-services/public-speaking" },
        { label: "Commerce Club", href: "/student-services/commerce-club" },
        { label: "Pegasus: Computer Science Association", href: "/student-services/pegasus" },
        { label: "Sarvam: Diversity Promotion Club", href: "/student-services/sarvam" },
        { label: "Bibliophile – Book Club", href: "/student-services/bibliophile" },
        { label: "Language Club", href: "/student-services/language-club" },
        { label: "Rotaract Club", href: "/student-services/rotaract" }
      ]
    },
    {
      title: "Student Cells & Committees",
      icon: Users,
      links: [
        { label: "Student Council", href: "/student-services/student-council" },
        { label: "Alumni Association", href: "/student-services/alumni" },
        { label: "Placement Cell", href: "/student-services/placement" },
        { label: "Research Promotion Cell", href: "/student-services/research" },
        { label: "Library Advisory Committee", href: "/student-services/library-advisory" },
        { label: "Women Empowerment Cell", href: "/student-services/women-empowerment" },
        { label: "Equal Opportunities Cell", href: "/student-services/equal-opportunities" },
        { label: "Internal Compliance Committee (ICC)", href: "/student-services/icc" },
        { label: "Anti Sexual Harassment Cell (ASHC)", href: "/student-services/ashc" },
        { label: "OBC Cell", href: "/student-services/obc" },
        { label: "Minority Cell", href: "/student-services/minority" },
        { label: "SC/ST Cell", href: "/student-services/sc-st" },
        { label: "Grievance Redressal Cell", href: "/student-services/grievance" },
        { label: "Disciplinary Committee", href: "/student-services/disciplinary" },
        { label: "Anti-Ragging Cell", href: "/student-services/anti-ragging" },
        { label: "Human Protection Cell", href: "/student-services/human-protection" },
        { label: "Centre for Social Action", href: "/student-services/social-action" },
        { label: "Gender Equality Cell", href: "/student-services/gender-equality" },
        { label: "Entrepreneurship Cell", href: "/student-services/entrepreneurship" },
        { label: "Counselling Center", href: "/student-services/counselling" },
        { label: "PSDP", href: "/student-services/psdp" },
        { label: "LSDP", href: "/student-services/lsdp" }
      ]
    },
    {
      title: "Media Center",
      icon: FileText,
      links: mediaCenterMenuData
    },
    {
      title: "Research",
      icon: FileText,
      links: researchMenuData
    },
    {
      title: "Mandatory Disclosures",
      icon: FileText,
      links: [
        { label: "MOU", href: "/mandatory-disclosure/mou" },
        { label: "IDP", href: "/mandatory-disclosure/idp" },
        { label: "Academic Policy", href: "/mandatory-disclosure/academics-policy" },
        { label: "Annual Report", href: "/mandatory-disclosure/annual-report" },
        { label: "AICTE", href: "/mandatory-disclosure/aicte" },
        { label: "Notices", href: "/mandatory-disclosure/notices" },
        { label: "Act & Statutes", href: "/mandatory-disclosure/act-statutes" },
        { label: "Sponsoring Body", href: "/mandatory-disclosure/sponsoring-body" }
      ]
    },
    {
      title: "Other Pages",
      icon: MapPin,
      links: [
        { label: "Home", href: "/" },
        { label: "Contact", href: "/contact" },
        { label: "Sitemap", href: "/sitemap" },
        { label: "Page Overview", href: "/page-overview" },
        { label: "Data Inventory", href: "/data-inventory" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="internal-page-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Sitemap
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Navigate through all pages and sections of Sri Jagadguru Renukacharya College of Science, Arts & Commerce website
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg mr-3">
                    <section.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>
                
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                      {link.label}
                      <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-16 bg-card rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Website Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">120+</div>
                <div className="text-muted-foreground">Total Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Main Sections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-muted-foreground">Academic Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-muted-foreground">Departments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;
