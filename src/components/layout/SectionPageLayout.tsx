import { Link } from "react-router-dom";

import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { FloatingApplyButton } from '../FloatingApplyButton';

import { LanguageProvider } from '../../contexts/LanguageContext';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

interface SectionPageLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  breadcrumbPath: string;
  section: { label: string; href: string };
  showFloatingApply?: boolean;
  brandedBreadcrumb?: boolean;
  contactPhone?: string;
}

export const SectionPageLayout: React.FC<SectionPageLayoutProps> = ({ 
  children, 
  pageTitle, 
  breadcrumbPath,
  section,
  showFloatingApply = true,
  brandedBreadcrumb = false,
  contactPhone,
}) => {
  const breadcrumbLink = brandedBreadcrumb ? 'text-[#177249] hover:underline' : 'text-logo-navy hover:text-logo-blue';

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header contactPhone={contactPhone} />
        
        {/* Breadcrumb Navigation */}
        <div className={`internal-page-breadcrumb border-b border-gray-200 ${brandedBreadcrumb ? 'bg-[#177249]/5' : 'bg-gradient-to-r from-logo-navy/5 to-logo-blue/5'}`}>
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className={breadcrumbLink}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className={breadcrumbLink}>
                    <Link to={section.href}>{section.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className={`font-medium ${brandedBreadcrumb ? 'text-neutral-800' : 'text-logo-navy-dark'}`}>
                    {breadcrumbPath}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Page Hero Section */}
        <div className="internal-page-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              {pageTitle}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        <Footer contactPhone={contactPhone} />
        {showFloatingApply && <FloatingApplyButton />}
      </div>
    </LanguageProvider>
  );
};
