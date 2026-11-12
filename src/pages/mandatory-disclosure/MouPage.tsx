import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, HandshakeIcon, Building2, Globe } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const MouPage = () => {
  const mouCategories = [
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with leading companies for internships and placements',
      icon: Building2,
      partnerships: [
        { name: 'Tech Mahindra Ltd', type: 'Internship & Placement', year: '2024', status: 'Active' },
        { name: 'Infosys Technologies', type: 'Campus Recruitment', year: '2023', status: 'Active' },
        { name: 'Wipro Limited', type: 'Training & Development', year: '2024', status: 'Active' }
      ]
    },
    {
      title: 'Academic Collaborations',
      description: 'MOUs with educational institutions for academic exchange',
      icon: Globe,
      partnerships: [
        { name: 'University of Melbourne', type: 'Student Exchange', year: '2023', status: 'Active' },
        { name: 'IIM Bangalore', type: 'Research Collaboration', year: '2024', status: 'Active' },
        { name: 'Christ University', type: 'Academic Partnership', year: '2023', status: 'Active' }
      ]
    },
    {
      title: 'Research & Development',
      description: 'Partnerships for research initiatives and innovation projects',
      icon: HandshakeIcon,
      partnerships: [
        { name: 'ISRO', type: 'Research Projects', year: '2024', status: 'Active' },
        { name: 'Karnataka Govt', type: 'Social Research', year: '2023', status: 'Active' },
        { name: 'NGO Partners', type: 'Community Development', year: '2024', status: 'Active' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur px-6 py-3 rounded-full mb-6">
              <HandshakeIcon className="text-yellow-400" size={24} />
              <span className="font-semibold">Partnership & Collaboration</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Memorandum of
              <span className="block text-yellow-400">Understanding</span>
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Strategic partnerships and collaborations that enhance educational quality, 
              research opportunities, and industry connections for our students.
            </p>
          </div>
        </div>
      </section>

      {/* MOU Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Partnership Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strategic collaborations span across industry, academia, and research sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mouCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.partnerships.map((partnership, pIndex) => (
                      <div key={pIndex} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-primary">{partnership.name}</h4>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {partnership.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{partnership.type}</p>
                        <p className="text-xs text-muted-foreground">Established: {partnership.year}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 mt-6">
                    <Button size="sm" className="flex-1">
                      <FileText size={16} className="mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent MOUs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Recent Partnerships</CardTitle>
              <CardDescription className="text-lg">
                Latest memorandums of understanding and strategic collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">2024 Partnerships</h3>
                  <div className="space-y-3">
                    {[
                      'Tech Mahindra - Advanced Training Programs',
                      'ISRO - Satellite Technology Research',
                      'University of Melbourne - Student Exchange Program'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <FileText size={16} className="text-primary" />
                        <span className="text-sm">{item}</span>
                        <Button variant="ghost" size="sm" className="ml-auto">
                          <ExternalLink size={14} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Download Documents</h3>
                  <div className="space-y-3">
                    {[
                      'MOU Master Document 2024.pdf',
                      'Partnership Guidelines.pdf',
                      'Collaboration Framework.pdf'
                    ].map((doc, index) => (
                      <Button key={index} variant="outline" className="w-full justify-start">
                        <Download size={16} className="mr-2" />
                        {doc}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MouPage;