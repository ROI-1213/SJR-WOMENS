import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { AdmissionsSection } from '../components/AdmissionsSection';
import { EnrichmentCourses } from '../components/EnrichmentCourses';
import { BlessingsGuidance } from '../components/BlessingsGuidance';
import { DiscoverCollege } from '../components/DiscoverCollege';
import { JoinCommunity } from '../components/JoinCommunity';
import { PlacementSection } from '../components/PlacementSection';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Gallery } from '../components/Gallery';
import { PrincipalMessage } from '../components/PrincipalMessage';
import { FacultySection } from '../components/Faculty';
import { Footer } from '../components/Footer';
import { FloatingApplyButton } from '../components/FloatingApplyButton';
import { NaacHighlight } from '../components/NaacHighlight';
import { MarqueeStrip } from '../components/MarqueeStrip';
import './Home.css';

const Index = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const [showFloatingApply, setShowFloatingApply] = useState(false);

  useEffect(() => {
    const intro = introRef.current;
    if (!intro) return;

    const observer = new IntersectionObserver(([entry]) => {
      setShowFloatingApply(entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(intro);
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <div ref={introRef}>
          <Header />
          <Banner />
        </div>
        <MarqueeStrip />
        <AdmissionsSection />
        <EnrichmentCourses />
        <BlessingsGuidance />
        <DiscoverCollege />
        <JoinCommunity />
        <PrincipalMessage />
        <FacultySection />
        <PlacementSection />
        <NaacHighlight />
        <Gallery />
        <Footer />
        {showFloatingApply && <FloatingApplyButton />}
      </div>
    </LanguageProvider>
  );
};

export default Index;
