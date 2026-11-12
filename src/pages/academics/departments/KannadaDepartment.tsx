import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Calendar, Building2, GraduationCap, Clock } from 'lucide-react';

const KannadaDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.name === "Dr. B. PAPANNA" || f.name === "Srinivasa Murthy T"
  );

  const hodFaculty = facultyMembers.find((f) => f.name === "Dr. B. PAPANNA");

  const syllabusFiles = [
    { name: 'QP Scheme', file: '/QP-SCHEME.pdf' },
    { name: 'Syllabus (I–IV Sem)', file: '/syllabus.pdf' },
    { name: 'Syllabus (V–VI Sem)', file: '/syllabus-V-VI-SEM.pdf' },
  ];


  const outcomes = [
    'It helps students develop human values and cultural understanding',
    'Prepares students to face modern technological and academic challenges',
    'Encourages responsible citizenship and social awareness',
    'Motivates students to pursue research and higher studies',
  ];

  return (
    <AcademicsLayout pageTitle="Department of Kannada" breadcrumbPath="Kannada" category="Departments">
      
      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Since the inception of Sri Jagadguru Renukacharya College of Science, Arts & Commerce in the year 1945, the Department of Kannada has played a vital role in the development of the College. The Department of Kannada was fortunate to have one of the most distinguished Kannada scholars of the twentieth century, Prof. A.R. Krishna Shastry, who is considered one of the Ashvini Devathas of Kannada Literature. Later the department was supported by eminent scholars like Prof. K.V. Narayan, Prof. K.R. Nagaraj, Prof. Vidyashankar, Prof. K.N. Nagaraj, and Dr. H.S. Madhava Rao.
            </p>
            <p>
              In 1971 the college started the B.A. (Honours) course as per the directions of Bangalore University. The department had the privilege of teaching Kannada Literature as a major subject. However, in 1972–73 the University withdrew the course.
            </p>
            <p>
              Kannada is taught as a language for B.A, B.Sc, B.C.A, B.Com and B.S undergraduate courses to provide students with a thorough knowledge of the language. Students who wish to study Kannada in depth can opt for Kannada Literature as an optional subject in the three-year B.A. programme. The Post-Graduate Course in Kannada was started in 2009, and the first batch of students passed with ranks and distinctions.
            </p>
            <p>
              The department has four permanent faculty members including the present Principal. Three of the faculty members hold doctoral degrees and two are Ph.D. guides. The department is also supported by experienced visiting professors for Post-Graduate classes.
            </p>
            <p>
              The intake for the Post-Graduate course is restricted to fifteen students to ensure meaningful and effective learning. The syllabus is framed according to present academic requirements and the Board of Studies includes eminent scholars from Bangalore University, University of Mysore and other institutions.
            </p>
            <p>
              The department regularly conducts seminars, lectures, and literary discussions with renowned scholars and writers. Students participate in academic presentations every semester to enhance their analytical and literary skills.
            </p>
            <p>
              The department also organizes literary programmes, educational visits, and cultural activities to provide students with practical exposure and deeper understanding of literature and language studies.
            </p>
            <p>
              A departmental library with reference books, magazines, encyclopedias, and dictionaries is available for students. The department also provides computer facilities with Kannada software such as Baraha, Lipi, and Nudi to support academic work.
            </p>
            <p>
              Students are encouraged to write essays, short stories, and travelogues to improve their writing and communication skills. The department also provides guidance for students preparing for state and national competitive examinations where Kannada is an optional subject.
            </p>
            <p>
              The department continuously strives to introduce innovative teaching methods and quality evaluation systems in line with the guidelines of UGC and Bangalore University.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <div>
            <ul className="space-y-4">
              {outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
                  <span className="text-muted-foreground text-base md:text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {syllabusFiles.map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold text-foreground mb-4">{item.name}</h3>
                <a href={item.file} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Download size={16} /> Download
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOD Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">HOD Message</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {hodFaculty && (
              <div className="w-48 shrink-0 mx-auto md:mx-0">
                <img
                  src={hodFaculty.image}
                  alt={hodFaculty.name}
                  className="w-48 h-56 object-cover object-top rounded-xl shadow-md"
                />
                <h3 className="text-center font-bold text-foreground mt-3">{hodFaculty.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{hodFaculty.designation}</p>
              </div>
            )}
            <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Since the inception of Sri Jagadguru Renukacharya College of Science, Arts & Commerce in 1945, the Department of Kannada has been one of the largest and most active departments, playing a pivotal role in fulfilling the academic aspirations of students. The department has been providing platforms and opportunities for students to showcase their multifaceted talents.
              </p>
              <p>
                We teach Kannada as a language and as a special subject for B.A., B.Sc., B.C.A., B.Com., B.Sc. Animation and B.B.A. students. We are proud to have started the Post-Graduate course in Kannada Literature in 2009. Studying Kannada as a classical and administrative language opens excellent employment opportunities for our graduates.
              </p>
              <p>
                Through literary and cultural competitions — debates, extempore speaking, essay writing, general knowledge quizzes, and guest lectures — we continue to guide, inspire, and encourage our students. I am happy to share that students who have already graduated are serving with distinction in various fields.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 7. Faculty Members */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Faculty Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentFaculty.map((faculty) => (
              <div
                key={faculty.id}
                className="group bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-foreground text-lg leading-tight">{faculty.name}</h3>
                  <p className="text-primary font-medium text-sm">{faculty.designation}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Building2 size={15} className="text-primary shrink-0" />
                    <span>{faculty.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <GraduationCap size={15} className="text-primary shrink-0" />
                    <span>{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock size={15} className="text-primary shrink-0" />
                    <span>{faculty.experience} Experience</span>
                  </div>
                  <Button
                    onClick={() => setSelectedFaculty(faculty)}
                    variant="outline"
                    className="w-full mt-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </AcademicsLayout>
  );
};

export default KannadaDepartment;
