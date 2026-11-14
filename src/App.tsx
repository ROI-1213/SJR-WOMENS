import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { BackToTop } from "./components/BackToTop";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import { availableProgrammes } from "./data/institute";
import { departmentsDropdownData } from "./data/navigation/departmentsMenuData";
import { researchPages } from "./data/navigation/researchMenuData";
import { placementPages } from "./data/navigation/placementsMenuData";
import { studentServicesPages, type StudentServicesPageKey } from "./data/navigation/studentServicesMenuData";
import { mediaCenterPages } from "./data/navigation/mediaCenterMenuData";
import { mandatoryDisclosureMenuData } from "./data/navigation/mandatoryDisclosureData";

// Lazy-loaded Route Pages for Fast Initial Load
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutCollege = lazy(() => import("./pages/about/AboutCollege"));
const AboutVisionMission = lazy(() => import("./pages/about/VisionMission"));
const PrincipalMessagePage = lazy(() => import("./pages/about/PrincipalMessagePage"));
const ChiefPatronMessage = lazy(() => import("./pages/about/SocietyLeadership").then(m => ({ default: m.ChiefPatronMessage })));
const PresidentsMessage = lazy(() => import("./pages/about/SocietyLeadership").then(m => ({ default: m.PresidentsMessage })));
const SecretarysMessage = lazy(() => import("./pages/about/SocietyLeadership").then(m => ({ default: m.SecretarysMessage })));
const OfficeBearers = lazy(() => import("./pages/about/SocietyLeadership").then(m => ({ default: m.OfficeBearers })));
const ExecutiveCommittee = lazy(() => import("./pages/about/SocietyLeadership").then(m => ({ default: m.ExecutiveCommittee })));
const Faculties = lazy(() => import("./pages/about/Faculties"));
const BangaloreCampus = lazy(() => import("./pages/about/BangaloreCampus"));
const InstitutionMentor = lazy(() => import("./pages/about/InstitutionMentor"));
const EducationSociety = lazy(() => import("./pages/about/EducationSociety"));
const VillageAdoption = lazy(() => import("./pages/about/VillageAdoption"));
const MilestonesPage = lazy(() => import("./pages/about/MilestonesPage"));
const RtiPage = lazy(() => import("./pages/RtiPage"));

const AcademicsHome = lazy(() => import("./pages/academics/AcademicsHome"));
const CoursePage = lazy(() => import("./pages/academics/CoursePage"));
const DepartmentsOverview = lazy(() => import("./pages/academics/DepartmentsOverview"));
const DepartmentPage = lazy(() => import("./pages/academics/DepartmentPage"));
const CertificateOverview = lazy(() => import("./pages/academics/CertificateOverview"));
const BAProgram = lazy(() => import("./pages/academics/graduate/BAProgram"));
const BScAnimation = lazy(() => import("./pages/academics/graduate/BScAnimation"));
const BScProgram = lazy(() => import("./pages/academics/graduate/BScProgram"));
const BComLogistics = lazy(() => import("./pages/academics/graduate/BComLogistics"));
const MCAProgram = lazy(() => import("./pages/academics/postgraduate/MCAProgram"));
const AnimationDepartment = lazy(() => import("./pages/academics/departments/AnimationDepartment"));
const SociologyDepartment = lazy(() => import("./pages/academics/departments/SociologyDepartment"));
const PoliticalScienceDepartment = lazy(() => import("./pages/academics/departments/PoliticalScienceDepartment"));
const ElectronicsDepartment = lazy(() => import("./pages/academics/departments/ElectronicsDepartment"));

const AdmissionsHome = lazy(() => import("./pages/admissions/AdmissionsHome"));
const AdmissionGuidelines = lazy(() => import("./pages/admissions/AdmissionGuidelines"));
const FeeStructure = lazy(() => import("./pages/admissions/FeeStructure"));
const Scholarships = lazy(() => import("./pages/admissions/Scholarships"));
const OnlineApplication = lazy(() => import("./pages/admissions/OnlineApplication"));
const AcademicCalendar = lazy(() => import("./pages/admissions/AcademicCalendar"));
const ManagementScholarship = lazy(() => import("./pages/admissions/ManagementScholarship"));
const ScholarshipPolicy = lazy(() => import("./pages/admissions/ScholarshipPolicy"));
const FeeRefundPolicy = lazy(() => import("./pages/admissions/FeeRefundPolicy"));

const InfrastructureHome = lazy(() => import("./pages/infrastructure/InfrastructureHome"));
const CampusOverview = lazy(() => import("./pages/infrastructure/CampusOverview"));
const Library = lazy(() => import("./pages/infrastructure/Library"));
const Auditorium = lazy(() => import("./pages/infrastructure/Auditorium"));
const SportsFacilities = lazy(() => import("./pages/infrastructure/SportsFacilities"));
const HostelFacility = lazy(() => import("./pages/infrastructure/HostelFacility"));
const ProfessionalStudio = lazy(() => import("./pages/infrastructure/ProfessionalStudio"));
const Classrooms = lazy(() => import("./pages/infrastructure/Classrooms"));
const Canteen = lazy(() => import("./pages/infrastructure/Canteen"));

const ResearchActivities = lazy(() => import("./pages/research/ResearchActivities"));
const FacultyPublications = lazy(() => import("./pages/research/FacultyPublications"));
const FacultyAchievements = lazy(() => import("./pages/research/FacultyAchievements"));
const StudentAchievements = lazy(() => import("./pages/research/StudentAchievements"));
const ResearchEnrollment = lazy(() => import("./pages/research/ResearchEnrollment"));
const ResearchGuides = lazy(() => import("./pages/research/ResearchGuides"));
const ResearchPatents = lazy(() => import("./pages/research/ResearchPatents"));

const PlacementsOverview = lazy(() => import("./pages/placements/PlacementsOverview"));
const PlacementStatistics = lazy(() => import("./pages/placements/PlacementStatistics"));
const RecruitingCompanies = lazy(() => import("./pages/placements/RecruitingCompanies"));
const PlacementTraining = lazy(() => import("./pages/placements/PlacementTraining"));
const DirectorMessage = lazy(() => import("./pages/placements/DirectorMessage"));
const VisionMission = lazy(() => import("./pages/placements/VisionMission"));
const PlacementActivities = lazy(() => import("./pages/placements/PlacementActivities"));
const PlacementBrochure = lazy(() => import("./pages/placements/PlacementBrochure"));
const IndustrialCollaboration = lazy(() => import("./pages/placements/IndustrialCollaboration"));
const PlacementPhotos = lazy(() => import("./pages/placements/PlacementPhotos"));

const StudentServicesPage = lazy(() => import("./pages/student-services/StudentServicesPage").then(m => ({ default: m.StudentServicesPage })));
const Gallery = lazy(() => import("./pages/Gallery"));
const Events = lazy(() => import("./pages/Events"));
const News = lazy(() => import("./pages/News"));
const Videos = lazy(() => import("./pages/Videos"));
const NaacIqac = lazy(() => import("./pages/NaacIqac"));
const DisclosurePage = lazy(() => import("./pages/mandatory-disclosure/DisclosurePage").then(m => ({ default: m.DisclosurePage })));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Nirf = lazy(() => import("./pages/Nirf"));

const queryClient = new QueryClient();

const LegacyRedirect = ({ to }: { to: string }) => {
  const { search, hash } = useLocation();
  return <Navigate to={{ pathname: to, search, hash }} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-[#faf8f2]" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* About Routes */}
            <Route path="/about/overview" element={<AboutCollege />} />
            <Route path="/about/chief-patrons-message" element={<ChiefPatronMessage />} />
            <Route path="/about/presidents-message" element={<PresidentsMessage />} />
            <Route path="/about/secretarys-message" element={<SecretarysMessage />} />
            <Route path="/about/office-bearers" element={<OfficeBearers />} />
            <Route path="/about/ec-members" element={<ExecutiveCommittee />} />
            <Route path="/about" element={<LegacyRedirect to="/about/overview" />} />
            <Route path="/about/college" element={<LegacyRedirect to="/about/overview" />} />
            <Route path="/about/management" element={<LegacyRedirect to="/about/office-bearers" />} />
            <Route path="/about/chief-patron-message" element={<LegacyRedirect to="/about/chief-patrons-message" />} />
            <Route path="/about/president-message" element={<LegacyRedirect to="/about/presidents-message" />} />
            <Route path="/about/secretary-message" element={<LegacyRedirect to="/about/secretarys-message" />} />
            <Route path="/about/principal-message" element={<LegacyRedirect to="/about/principals-message" />} />
            <Route path="/about/vision-mission" element={<AboutVisionMission />} />
            <Route path="/about/institution-mentor" element={<InstitutionMentor />} />
            <Route path="/about/society" element={<EducationSociety />} />
            <Route path="/about/principals-message" element={<PrincipalMessagePage />} />
            <Route path="/principal-message" element={<PrincipalMessagePage />} />
            <Route path="/about/faculties" element={<Faculties />} />
            <Route path="/faculty" element={<Faculties />} />
            <Route path="/about/milestones" element={<MilestonesPage />} />
            <Route path="/milestones" element={<MilestonesPage />} />
            <Route path="/about/campus" element={<BangaloreCampus />} />
            <Route path="/about/village-adoption" element={<VillageAdoption />} />
            
            {/* Academics Routes */}
            <Route path="/academics" element={<AcademicsHome />} />
            <Route path="/courses" element={<AcademicsHome />} />
            <Route path="/departments" element={<DepartmentsOverview />} />
            <Route path="/academics/departments" element={<LegacyRedirect to="/departments" />} />
            {departmentsDropdownData.map(department => (
              <Route key={department.slug} path={department.href} element={<DepartmentPage slug={department.slug} />} />
            ))}
            {departmentsDropdownData.map(({ slug, href }) => (
              <Route
                key={slug}
                path={`/academics/departments/${slug === "kannada-optional-kannada" ? "kannada" : slug}`}
                element={<LegacyRedirect to={href} />}
              />
            ))}
            <Route path="/academics/departments/management" element={<LegacyRedirect to="/departments/business-administration" />} />
            <Route path="/academics/graduate" element={<AcademicsHome level="undergraduate" />} />
            <Route path="/academics/postgraduate" element={<AcademicsHome level="postgraduate" />} />
            <Route path="/academics/certificate" element={<CertificateOverview />} />
            <Route path="/academics/graduate/ba" element={<BAProgram />} />
            <Route path="/academics/graduate/bsc-animation" element={<BScAnimation />} />
            <Route path="/academics/graduate/bsc" element={<BScProgram />} />
            <Route path="/academics/graduate/bcom-logistics" element={<BComLogistics />} />
            {availableProgrammes.map(programme => (
              <Route key={programme.id} path={programme.href} element={<CoursePage programme={programme} />} />
            ))}
            <Route path="/academics/graduate/bcom" element={<LegacyRedirect to="/academics/bcom" />} />
            <Route path="/academics/graduate/bba" element={<LegacyRedirect to="/academics/bba" />} />
            <Route path="/academics/graduate/bca" element={<LegacyRedirect to="/academics/bca" />} />
            <Route path="/academics/postgraduate/mcom" element={<LegacyRedirect to="/academics/mcom" />} />
            <Route path="/academics/postgraduate/mca" element={<MCAProgram />} />
            <Route path="/academics/departments/animation" element={<AnimationDepartment />} />
            <Route path="/academics/departments/sociology" element={<SociologyDepartment />} />
            <Route path="/academics/departments/political-science" element={<PoliticalScienceDepartment />} />
            <Route path="/academics/departments/electronics" element={<ElectronicsDepartment />} />
            
            {/* Admissions Routes */}
            <Route path="/admissions" element={<AdmissionsHome />} />
            <Route path="/admissions/guidelines" element={<AdmissionGuidelines />} />
            <Route path="/admissions/fee-structure" element={<FeeStructure />} />
            <Route path="/admissions/scholarships" element={<Scholarships />} />
            <Route path="/admissions/online-application" element={<OnlineApplication />} />
            <Route path="/admissions/calendar" element={<AcademicCalendar />} />
            <Route path="/admissions/management-scholarship" element={<ManagementScholarship />} />
            <Route path="/admissions/scholarship-policy" element={<ScholarshipPolicy />} />
            <Route path="/admissions/fee-refund" element={<FeeRefundPolicy />} />
            
            {/* Infrastructure Routes */}
            <Route path="/infrastructure" element={<InfrastructureHome />} />
            <Route path="/infrastructure/campus" element={<CampusOverview />} />
            <Route path="/infrastructure/campus-overview" element={<CampusOverview />} />
            <Route path="/infrastructure/library" element={<Library />} />
            <Route path="/infrastructure/auditorium" element={<Auditorium />} />
            <Route path="/infrastructure/sports" element={<SportsFacilities />} />
            <Route path="/infrastructure/sports-facilities" element={<SportsFacilities />} />
            <Route path="/infrastructure/hostel-facility" element={<HostelFacility />} />
            <Route path="/infrastructure/professional-studio" element={<ProfessionalStudio />} />
            <Route path="/infrastructure/classrooms" element={<Classrooms />} />
            <Route path="/infrastructure/canteen" element={<Canteen />} />
            <Route path="/infrastructure/mini-auditorium" element={<LegacyRedirect to="/infrastructure/canteen" />} />
            
            {/* Research Routes */}
            <Route path={researchPages.activities.href} element={<ResearchActivities />} />
            <Route path={researchPages.publications.href} element={<FacultyPublications />} />
            <Route path={researchPages.facultyAchievements.href} element={<FacultyAchievements />} />
            <Route path={researchPages.studentAchievements.href} element={<StudentAchievements />} />
            <Route path={researchPages.enrollment.href} element={<ResearchEnrollment />} />
            <Route path={researchPages.guides.href} element={<ResearchGuides />} />
            <Route path={researchPages.patents.href} element={<ResearchPatents />} />
            <Route path="/research/publications" element={<LegacyRedirect to={researchPages.publications.href} />} />
            
            {/* Placements Routes */}
            <Route path="/placement" element={<PlacementsOverview />} />
            <Route path="/placements" element={<PlacementsOverview />} />
            <Route path={placementPages.overview.href} element={<PlacementsOverview />} />
            <Route path={placementPages.brochure.href} element={<PlacementBrochure />} />
            <Route path={placementPages.director.href} element={<DirectorMessage />} />
            <Route path={placementPages.vision.href} element={<VisionMission />} />
            <Route path={placementPages.activities.href} element={<PlacementActivities />} />
            <Route path={placementPages.statistics.href} element={<PlacementStatistics />} />
            <Route path={placementPages.companies.href} element={<RecruitingCompanies />} />
            <Route path={placementPages.training.href} element={<PlacementTraining />} />
            <Route path={placementPages.collaboration.href} element={<IndustrialCollaboration />} />
            <Route path={placementPages.photos.href} element={<PlacementPhotos />} />
            
            {/* Student Services Routes */}
            {(Object.keys(studentServicesPages) as StudentServicesPageKey[]).map(pageKey => (
              <Route key={pageKey} path={studentServicesPages[pageKey].href} element={<StudentServicesPage pageKey={pageKey} />} />
            ))}
            <Route path="/student-services/film" element={<LegacyRedirect to={studentServicesPages.film.href} />} />
            
            {/* Media Center Routes */}
            <Route path={mediaCenterPages.events.href} element={<Events />} />
            <Route path={mediaCenterPages.news.href} element={<News />} />
            <Route path={mediaCenterPages.gallery.href} element={<Gallery />} />
            <Route path={mediaCenterPages.video.href} element={<Videos />} />

            {/* Other Routes */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/naac" element={<NaacIqac />} />
            <Route path="/naac-iqac" element={<NaacIqac />} />
            <Route path="/rti" element={<RtiPage />} />
            <Route path="/mandatory-disclosure" element={<DisclosurePage />} />
            {mandatoryDisclosureMenuData.filter(item => item.href !== '/rti').map(item => (
              <Route key={item.href} path={item.href} element={<DisclosurePage item={item} />} />
            ))}
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/nirf" element={<Nirf />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
