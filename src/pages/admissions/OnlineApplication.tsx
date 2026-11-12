import { availableProgrammes } from '@/data/institute';

import React, { useState } from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { useToast } from '../../hooks/use-toast';
import { GraduationCap, User, BookOpen, Upload, FileCheck, AlertCircle } from 'lucide-react';

const OnlineApplication = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', gender: '', dob: '', aadhaar: '', category: '', nationality: '', religion: '', caste: '', bloodGroup: '',
    mobile: '', altContact: '', email: '', parentName: '', parentContact: '', parentOccupation: '', annualIncome: '',
    permanentAddress: '', correspondenceAddress: '',
    tenthBoard: '', tenthYear: '', tenthPercentage: '',
    twelfthBoard: '', twelfthYear: '', twelfthStream: '', twelfthPercentage: '', subjectsStudied: '', registerNumber: '',
    course: '', specialization: '', medium: '',
  });

  const [files, setFiles] = useState<Record<string, File | null>>({
    tenthMarks: null, twelfthMarks: null, transferCert: null, casteCert: null, incomeCert: null, photo: null,
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 2 * 1024 * 1024) {
      toast({ title: 'File too large', description: 'Maximum file size is 2MB', variant: 'destructive', className: 'admissions-theme' });
      return;
    }
    setFiles(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ['fullName', 'gender', 'dob', 'mobile', 'email', 'parentName', 'parentContact', 'permanentAddress',
      'tenthBoard', 'tenthYear', 'tenthPercentage', 'twelfthBoard', 'twelfthYear', 'twelfthStream', 'twelfthPercentage',
      'course', 'medium'];
    const missing = required.filter(f => !formData[f as keyof typeof formData]);
    if (missing.length > 0) {
      toast({ title: 'Missing fields', description: 'Please fill all mandatory fields marked with *', variant: 'destructive', className: 'admissions-theme' });
      return;
    }
    if (!declarationChecked) {
      toast({ title: 'Declaration required', description: 'Please accept the declaration to proceed', variant: 'destructive', className: 'admissions-theme' });
      return;
    }
    setSubmitted(true);
    toast({ title: 'Application Submitted!', description: 'Your admission application has been submitted successfully. You will receive a confirmation email shortly.', className: 'admissions-theme border-primary/20' });
  };

  if (submitted) {
    return (
      <AdmissionsLayout pageTitle="Online Admission Application" breadcrumbPath="Online Application" category="Admissions" branded>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12">
              <FileCheck className="w-20 h-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">Application Submitted Successfully!</h2>
              <p className="text-gray-700 mb-2">Thank you for applying to Sri Jagadguru Renukacharya College of Science, Arts & Commerce.</p>
              <p className="text-gray-600 mb-6">A confirmation email has been sent to <strong>{formData.email}</strong>.</p>
              <p className="text-sm text-gray-500">Our admissions team will review your application and contact you within 5-7 working days.</p>
              <Button className="mt-8" onClick={() => { setSubmitted(false); setFormData({ fullName: '', gender: '', dob: '', aadhaar: '', category: '', nationality: '', religion: '', caste: '', bloodGroup: '', mobile: '', altContact: '', email: '', parentName: '', parentContact: '', parentOccupation: '', annualIncome: '', permanentAddress: '', correspondenceAddress: '', tenthBoard: '', tenthYear: '', tenthPercentage: '', twelfthBoard: '', twelfthYear: '', twelfthStream: '', twelfthPercentage: '', subjectsStudied: '', registerNumber: '', course: '', specialization: '', medium: '' }); setDeclarationChecked(false); }}>
                Submit Another Application
              </Button>
            </div>
          </div>
        </section>
      </AdmissionsLayout>
    );
  }

  const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
    <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/20">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
    </div>
  );

  return (
    <AdmissionsLayout pageTitle="Online Admission Application" breadcrumbPath="Online Application" category="Admissions" branded>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-3">Online Admission Application</h2>
            <p className="text-gray-600">Fill in all the required details accurately. Fields marked with <span className="text-destructive">*</span> are mandatory.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* A. Personal Details */}
            <Card className="p-6">
              <SectionHeader icon={User} title="A. Personal Details" />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label>Full Name (as per records) <span className="text-destructive">*</span></Label>
                  <Input value={formData.fullName} onChange={e => handleChange('fullName', e.target.value)} placeholder="Enter full name" />
                </div>
                <div>
                  <Label>Gender <span className="text-destructive">*</span></Label>
                  <Select value={formData.gender} onValueChange={v => handleChange('gender', v)}>
                    <SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger>
                    <SelectContent className="admissions-theme">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Date of Birth <span className="text-destructive">*</span></Label>
                  <Input type="date" value={formData.dob} onChange={e => handleChange('dob', e.target.value)} />
                </div>
                <div>
                  <Label>Aadhaar Number</Label>
                  <Input value={formData.aadhaar} onChange={e => handleChange('aadhaar', e.target.value)} placeholder="12-digit Aadhaar" maxLength={12} />
                </div>
                <div>
                  <Label>Category</Label>
                  <Select value={formData.category} onValueChange={v => handleChange('category', v)}>
                    <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
                    <SelectContent className="admissions-theme">
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Nationality</Label>
                  <Input value={formData.nationality} onChange={e => handleChange('nationality', e.target.value)} placeholder="e.g. Indian" />
                </div>
                <div>
                  <Label>Religion</Label>
                  <Input value={formData.religion} onChange={e => handleChange('religion', e.target.value)} placeholder="Enter religion" />
                </div>
                <div>
                  <Label>Caste</Label>
                  <Input value={formData.caste} onChange={e => handleChange('caste', e.target.value)} placeholder="Enter caste" />
                </div>
                <div>
                  <Label>Blood Group</Label>
                  <Select value={formData.bloodGroup} onValueChange={v => handleChange('bloodGroup', v)}>
                    <SelectTrigger><SelectValue placeholder="Select Blood Group" /></SelectTrigger>
                    <SelectContent className="admissions-theme">
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                        <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Mobile Number <span className="text-destructive">*</span></Label>
                  <Input value={formData.mobile} onChange={e => handleChange('mobile', e.target.value)} placeholder="10-digit mobile" maxLength={10} />
                </div>
                <div>
                  <Label>Alternate Contact Number</Label>
                  <Input value={formData.altContact} onChange={e => handleChange('altContact', e.target.value)} placeholder="Alternate number" maxLength={10} />
                </div>
                <div>
                  <Label>Email ID <span className="text-destructive">*</span></Label>
                  <Input type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="email@example.com" />
                </div>
                <div>
                  <Label>Parent/Guardian Name <span className="text-destructive">*</span></Label>
                  <Input value={formData.parentName} onChange={e => handleChange('parentName', e.target.value)} placeholder="Parent/Guardian name" />
                </div>
                <div>
                  <Label>Parent Contact Number <span className="text-destructive">*</span></Label>
                  <Input value={formData.parentContact} onChange={e => handleChange('parentContact', e.target.value)} placeholder="Parent contact" maxLength={10} />
                </div>
                <div>
                  <Label>Occupation of Parent/Guardian</Label>
                  <Input value={formData.parentOccupation} onChange={e => handleChange('parentOccupation', e.target.value)} placeholder="Occupation" />
                </div>
                <div>
                  <Label>Annual Family Income</Label>
                  <Input value={formData.annualIncome} onChange={e => handleChange('annualIncome', e.target.value)} placeholder="e.g. 5,00,000" />
                </div>
                <div className="md:col-span-2">
                  <Label>Permanent Address <span className="text-destructive">*</span></Label>
                  <Textarea value={formData.permanentAddress} onChange={e => handleChange('permanentAddress', e.target.value)} placeholder="Full permanent address with pin code" rows={2} />
                </div>
                <div className="md:col-span-2">
                  <Label>Correspondence Address</Label>
                  <Textarea value={formData.correspondenceAddress} onChange={e => handleChange('correspondenceAddress', e.target.value)} placeholder="Leave blank if same as permanent address" rows={2} />
                </div>
              </div>
            </Card>

            {/* B. Academic Details */}
            <Card className="p-6">
              <SectionHeader icon={BookOpen} title="B. Academic Details" />
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">10th Standard</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>Board Name <span className="text-destructive">*</span></Label>
                    <Input value={formData.tenthBoard} onChange={e => handleChange('tenthBoard', e.target.value)} placeholder="e.g. CBSE, ICSE, State Board" />
                  </div>
                  <div>
                    <Label>Year of Passing <span className="text-destructive">*</span></Label>
                    <Input value={formData.tenthYear} onChange={e => handleChange('tenthYear', e.target.value)} placeholder="e.g. 2022" maxLength={4} />
                  </div>
                  <div>
                    <Label>Percentage / CGPA <span className="text-destructive">*</span></Label>
                    <Input value={formData.tenthPercentage} onChange={e => handleChange('tenthPercentage', e.target.value)} placeholder="e.g. 85% or 8.5 CGPA" />
                  </div>
                </div>
                <h4 className="font-semibold text-primary pt-4">12th Standard / PUC</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>Board Name <span className="text-destructive">*</span></Label>
                    <Input value={formData.twelfthBoard} onChange={e => handleChange('twelfthBoard', e.target.value)} placeholder="e.g. PUC Board, CBSE" />
                  </div>
                  <div>
                    <Label>Year of Passing <span className="text-destructive">*</span></Label>
                    <Input value={formData.twelfthYear} onChange={e => handleChange('twelfthYear', e.target.value)} placeholder="e.g. 2024" maxLength={4} />
                  </div>
                  <div>
                    <Label>Stream <span className="text-destructive">*</span></Label>
                    <Select value={formData.twelfthStream} onValueChange={v => handleChange('twelfthStream', v)}>
                      <SelectTrigger><SelectValue placeholder="Select Stream" /></SelectTrigger>
                      <SelectContent className="admissions-theme">
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                        <SelectItem value="arts">Arts / Humanities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Percentage / CGPA <span className="text-destructive">*</span></Label>
                    <Input value={formData.twelfthPercentage} onChange={e => handleChange('twelfthPercentage', e.target.value)} placeholder="e.g. 78% or 7.8 CGPA" />
                  </div>
                  <div>
                    <Label>Register Number</Label>
                    <Input value={formData.registerNumber} onChange={e => handleChange('registerNumber', e.target.value)} placeholder="Board register number" />
                  </div>
                </div>
                <div>
                  <Label>Subjects Studied</Label>
                  <Input value={formData.subjectsStudied} onChange={e => handleChange('subjectsStudied', e.target.value)} placeholder="e.g. Physics, Chemistry, Mathematics, English, Kannada" />
                </div>
              </div>
            </Card>

            {/* C. Course Selection */}
            <Card className="p-6">
              <SectionHeader icon={GraduationCap} title="C. Course Selection" />
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label>Applying for Course <span className="text-destructive">*</span></Label>
                  <Select value={formData.course} onValueChange={v => handleChange('course', v)}>
                    <SelectTrigger><SelectValue placeholder="Select Course" /></SelectTrigger>
                    <SelectContent className="admissions-theme">
                      {availableProgrammes.map(programme => (
                        <SelectItem key={programme.id} value={programme.id}>{programme.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Combination / Specialization</Label>
                  <Input value={formData.specialization} onChange={e => handleChange('specialization', e.target.value)} placeholder="e.g. PCM, Economics" />
                </div>
                <div>
                  <Label>Medium of Instruction <span className="text-destructive">*</span></Label>
                  <Select value={formData.medium} onValueChange={v => handleChange('medium', v)}>
                    <SelectTrigger><SelectValue placeholder="Select Medium" /></SelectTrigger>
                    <SelectContent className="admissions-theme">
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* D. Document Upload */}
            <Card className="p-6">
              <SectionHeader icon={Upload} title="D. Document Upload" />
              <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                <AlertCircle size={14} /> Accepted formats: PDF, JPG, PNG. Maximum size: 2MB per file.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: 'tenthMarks', label: '10th Marks Card' },
                  { key: 'twelfthMarks', label: '12th Marks Card' },
                  { key: 'transferCert', label: 'Transfer Certificate' },
                  { key: 'casteCert', label: 'Caste Certificate (if applicable)' },
                  { key: 'incomeCert', label: 'Income Certificate (if applicable)' },
                  { key: 'photo', label: 'Passport Size Photograph' },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <Label>{label}</Label>
                    <Input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => handleFileChange(key, e)} className="mt-1" />
                    {files[key] && <p className="text-xs text-primary mt-1">✓ {files[key]!.name}</p>}
                  </div>
                ))}
              </div>
            </Card>

            {/* E. Declaration */}
            <Card className="p-6">
              <SectionHeader icon={FileCheck} title="E. Declaration" />
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="declaration"
                  checked={declarationChecked}
                  onCheckedChange={(checked) => setDeclarationChecked(checked === true)}
                  className="mt-1"
                />
                <label htmlFor="declaration" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                  I hereby declare that all the information provided in this application is true and correct to the best of my knowledge and belief. I understand that any false information or suppression of facts may lead to the cancellation of my admission. I agree to abide by the rules and regulations of Sri Jagadguru Renukacharya College of Science, Arts & Commerce, Bengaluru.
                </label>
              </div>
              <div className="mt-6 text-center">
                <Button type="submit" size="lg" className="px-12">
                  Submit Application
                </Button>
              </div>
            </Card>
          </form>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default OnlineApplication;
