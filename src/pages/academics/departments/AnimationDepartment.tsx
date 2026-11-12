import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { Faculty } from '../../../components/faculty/types';
import { CheckCircle, FileText, Download, Calendar, Building2, GraduationCap, Clock } from 'lucide-react';

const AnimationDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const outcomes = [
    'Develop creative and technical skills in animation and visual storytelling',
    'Gain proficiency in 2D and 3D animation software and tools',
    'Understand the principles of design, color theory, and composition',
    'Prepare for careers in animation studios, gaming, and multimedia industries',
  ];

  const activities = [
    { name: 'Animation Workshop 2025', file: '#' },
    { name: 'Student Showcase Exhibition', file: '#' },
  ];

  return (
    <AcademicsLayout pageTitle="Department of Animation" breadcrumbPath="Animation" category="Departments">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>The Department of Animation at Sri Jagadguru Renukacharya College of Science, Arts & Commerce offers a comprehensive program that blends artistic creativity with cutting-edge technology. Students learn 2D and 3D animation, visual effects, motion graphics, and digital storytelling.</p>
            <p>The department is equipped with state-of-the-art animation labs and professional-grade software. Industry experts and experienced faculty guide students through practical projects and real-world applications.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <ul className="space-y-4">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
                <span className="text-muted-foreground text-base md:text-lg">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">Syllabus</h3>
              <Button variant="outline" className="gap-2" disabled><Download size={16} /> Coming Soon</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">HOD Message</h2>
          <div className="text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>Welcome to the Department of Animation. Our department strives to nurture creative talent and technical proficiency in our students, preparing them for successful careers in the ever-evolving animation and multimedia industry.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Time Table</h2>
          <div className="max-w-lg mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Calendar className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-2">Current Semester Time Table</h3>
              <Button variant="outline" className="gap-2" disabled><Download size={16} /> Coming Soon</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Activities</h2>
          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="font-bold text-foreground">Activity</TableHead>
                  <TableHead className="font-bold text-foreground text-right">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((act, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{act.name}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-1 text-primary" disabled>
                        <Download size={14} /> PDF
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Faculty Members</h2>
          <p className="text-center text-muted-foreground">Faculty information will be updated soon.</p>
        </div>
      </section>

      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </AcademicsLayout>
  );
};

export default AnimationDepartment;
