// components/admissions/ProcessSteps.tsx
'use client';

import { CheckCircle, FileText, ClipboardList, Mail, UserCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Application Submission',
    description: 'Complete online application form with required documents',
    icon: FileText,
    duration: '1-2 weeks'
  },
  {
    id: 2,
    name: 'Entrance Exam',
    description: 'Take departmental aptitude test (if required)',
    icon: ClipboardList,
    duration: 'Scheduled'
  },
  {
    id: 3,
    name: 'Interview',
    description: 'Faculty review and candidate interview',
    icon: UserCheck,
    duration: '1-3 weeks'
  },
  {
    id: 4,
    name: 'Admission Decision',
    description: 'Receive official acceptance letter',
    icon: Mail,
    duration: '2-4 weeks'
  },
  {
    id: 5,
    name: 'Registration',
    description: 'Complete enrollment and course registration',
    icon: CheckCircle,
    duration: '1 week'
  }
];

export default function ProcessSteps() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission Process</h2>
      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.id} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-100 rounded-full text-blue-700">
                <step.icon className="h-6 w-6" />
              </div>
              {step.id !== steps.length && (
                <div className="w-0.5 h-full bg-gray-200 my-2"></div>
              )}
            </div>
            
            <div className="flex-1 pb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.name}</h3>
              <p className="text-gray-600 mb-3">{step.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium">Typical Duration:</span>
                <span className="ml-2">{step.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}