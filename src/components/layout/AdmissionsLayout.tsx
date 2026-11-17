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

interface AdmissionsLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  breadcrumbPath: string;
  category: string;
  branded?: boolean;
}

export const AdmissionsLayout: React.FC<AdmissionsLayoutProps> = ({
  children,
  pageTitle,
  breadcrumbPath,
  category,
  branded = false,
}) => {
  const breadcrumbLinkClass = branded ? 'text-[#177249] hover:underline' : 'text-logo-navy hover:text-logo-blue';

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <div className={`internal-page-breadcrumb border-b border-gray-200 ${branded ? 'bg-[#177249]/5' : 'bg-gradient-to-r from-logo-navy/5 to-logo-blue/5'}`}>
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className={breadcrumbLinkClass}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admissions" className={breadcrumbLinkClass}>
                    {category}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className={`font-medium ${branded ? 'text-neutral-800' : 'text-logo-navy-dark'}`}>
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
        <main className={branded ? 'admissions-theme flex-1' : 'flex-1'}>
          {children}
        </main>

        <Footer />
        <FloatingApplyButton />
      </div>
    </LanguageProvider>
  );
};
