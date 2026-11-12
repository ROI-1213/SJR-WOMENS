import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { BackToTop } from "./components/BackToTop";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// About Pages
import AboutCollege from "./pages/about/AboutCollege";
import AboutVisionMission from "./pages/about/VisionMission";
import PrincipalMessagePage from "./pages/about/PrincipalMessagePage";
import { ChiefPatronMessage, PresidentsMessage, SecretarysMessage, OfficeBearers, ExecutiveCommittee } from "./pages/about/SocietyLeadership";
import Faculties from "./pages/about/Faculties";
import BangaloreCampus from "./pages/about/BangaloreCampus";
import InstitutionMentor from "./pages/about/InstitutionMentor";
import EducationSociety from "./pages/about/EducationSociety";
import VillageAdoption from "./pages/about/VillageAdoption";
import MilestonesPage from "./pages/about/MilestonesPage";
import RtiPage from "./pages/RtiPage";

// Academics Pages
import AcademicsHome from "./pages/academics/AcademicsHome";
import CoursePage from "./pages/academics/CoursePage";
import { availableProgrammes } from "./data/institute";
import DepartmentsOverview from "./pages/academics/DepartmentsOverview";
import DepartmentPage from "./pages/academics/DepartmentPage";
import { departmentsDropdownData } from "./data/navigation/departmentsMenuData";
import CertificateOverview from "./pages/academics/CertificateOverview";
import BAProgram from "./pages/academics/graduate/BAProgram";
import BScAnimation from "./pages/academics/graduate/BScAnimation";
import BScProgram from "./pages/academics/graduate/BScProgram";
import BComLogistics from "./pages/academics/graduate/BComLogistics";
import MCAProgram from "./pages/academics/postgraduate/MCAProgram";

import AnimationDepartment from "./pages/academics/departments/AnimationDepartment";
import SociologyDepartment from "./pages/academics/departments/SociologyDepartment";
import PoliticalScienceDepartment from "./pages/academics/departments/PoliticalScienceDepartment";
import ElectronicsDepartment from "./pages/academics/departments/ElectronicsDepartment";

// Admissions Pages
import AdmissionsHome from "./pages/admissions/AdmissionsHome";
import AdmissionGuidelines from "./pages/admissions/AdmissionGuidelines";
import FeeStructure from "./pages/admissions/FeeStructure";
import Scholarships from "./pages/admissions/Scholarships";
import OnlineApplication from "./pages/admissions/OnlineApplication";
import AcademicCalendar from "./pages/admissions/AcademicCalendar";
import ManagementScholarship from "./pages/admissions/ManagementScholarship";
import ScholarshipPolicy from "./pages/admissions/ScholarshipPolicy";
import FeeRefundPolicy from "./pages/admissions/FeeRefundPolicy";

// Infrastructure Pages
import InfrastructureHome from "./pages/infrastructure/InfrastructureHome";
import CampusOverview from "./pages/infrastructure/CampusOverview";
import Library from "./pages/infrastructure/Library";
import Auditorium from "./pages/infrastructure/Auditorium";
import SportsFacilities from "./pages/infrastructure/SportsFacilities";
import HostelFacility from "./pages/infrastructure/HostelFacility";
import ProfessionalStudio from "./pages/infrastructure/ProfessionalStudio";
import Classrooms from "./pages/infrastructure/Classrooms";
import Canteen from "./pages/infrastructure/Canteen";
import ResearchActivities from "./pages/research/ResearchActivities";
import FacultyPublications from "./pages/research/FacultyPublications";
import FacultyAchievements from "./pages/research/FacultyAchievements";
import StudentAchievements from "./pages/research/StudentAchievements";
import ResearchEnrollment from "./pages/research/ResearchEnrollment";
import ResearchGuides from "./pages/research/ResearchGuides";
import ResearchPatents from "./pages/research/ResearchPatents";
import { researchPages } from "./data/navigation/researchMenuData";

// Placements Pages
import PlacementsOverview from "./pages/placements/PlacementsOverview";
import PlacementStatistics from "./pages/placements/PlacementStatistics";
import RecruitingCompanies from "./pages/placements/RecruitingCompanies";
import PlacementTraining from "./pages/placements/PlacementTraining";
import DirectorMessage from "./pages/placements/DirectorMessage";
import VisionMission from "./pages/placements/VisionMission";
import PlacementActivities from "./pages/placements/PlacementActivities";
import PlacementBrochure from "./pages/placements/PlacementBrochure";
import IndustrialCollaboration from "./pages/placements/IndustrialCollaboration";
import PlacementPhotos from "./pages/placements/PlacementPhotos";
import { placementPages } from "./data/navigation/placementsMenuData";

// Student Services Pages
import { StudentServicesPage } from "./pages/student-services/StudentServicesPage";
import { studentServicesPages, type StudentServicesPageKey } from "./data/navigation/studentServicesMenuData";

// Other Pages
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import News from "./pages/News";
import Videos from "./pages/Videos";
import { mediaCenterPages } from "./data/navigation/mediaCenterMenuData";
import NaacIqac from "./pages/NaacIqac";
import { DisclosurePage } from "./pages/mandatory-disclosure/DisclosurePage";
import { mandatoryDisclosureMenuData } from "./data/navigation/mandatoryDisclosureData";
import Sitemap from "./pages/Sitemap";
import Nirf from "./pages/Nirf";

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
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
