import { availableProgrammes } from '@/data/institute';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap, User, Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdmissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionDialog: React.FC<AdmissionDialogProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours with admission details.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4 border-b">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="bg-logo-navy/10 p-2 rounded-full">
              <GraduationCap className="text-logo-navy" size={24} />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Admission Enquiry
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <User size={18} className="text-logo-navy" />
              <span>Personal Information</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <Input 
                  placeholder="Enter your full name" 
                  required 
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <Input 
                  type="date" 
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <Phone size={18} className="text-logo-navy" />
              <span>Contact Information</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <Input 
                  type="tel" 
                  placeholder="+91 9876543210" 
                  required 
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Textarea 
                placeholder="Enter your complete address" 
                className="focus:ring-logo-navy focus:border-logo-navy"
                rows={3}
              />
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <BookOpen size={18} className="text-logo-navy" />
              <span>Academic Information</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program of Interest *
                </label>
                <Select required>
                  <SelectTrigger className="focus:ring-logo-navy focus:border-logo-navy">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableProgrammes.map(programme => (
                      <SelectItem key={programme.id} value={programme.id}>{programme.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Qualification
                </label>
                <Input 
                  placeholder="e.g., 12th Grade, Graduation" 
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message
              </label>
              <Textarea 
                placeholder="Any specific questions or requirements?" 
                className="focus:ring-logo-navy focus:border-logo-navy"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-4 border-t">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-logo-navy hover:bg-logo-navy-dark"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
