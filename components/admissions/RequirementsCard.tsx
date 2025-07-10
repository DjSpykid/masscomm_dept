// components/admissions/RequirementsCard.tsx
import { ListChecks, School, FileText, Globe } from 'lucide-react';

export default function RequirementsCard() {
  const requirements = {
    undergraduate: [
      "5 O'Level credits including English",
      "Minimum of 180 UTME score",
      "Post-UTME screening pass",
      "Birth certificate/Age declaration",
      "Medical fitness certificate"
    ],
    postgraduate: [
      "Bachelor's degree (2:1 or above)",
      "Academic transcripts",
      "2 Recommendation letters",
      "Research proposal (M.Phil/PhD)",
      "NYSC discharge certificate"
    ],
    international: [
      "Equivalent academic qualifications",
      "English proficiency (IELTS/TOEFL)",
      "Student visa approval",
      "Medical insurance",
      "Proof of financial support"
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-blue-700 px-6 py-4">
        <h3 className="text-lg font-bold text-white flex items-center">
          <ListChecks className="h-5 w-5 mr-2" />
          Admission Requirements
        </h3>
      </div>
      
      <div className="p-6">
        {/* Undergraduate Requirements */}
        <div className="mb-6">
          <div className="flex items-center text-gray-900 font-medium mb-3">
            <School className="h-5 w-5 text-blue-600 mr-2" />
            <h4>Undergraduate</h4>
          </div>
          <ul className="space-y-2 pl-7">
            {requirements.undergraduate.map((item, index) => (
              <li key={`ug-${index}`} className="relative before:absolute before:left-[-1.2rem] before:content-['•'] before:text-blue-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Postgraduate Requirements */}
        <div className="mb-6">
          <div className="flex items-center text-gray-900 font-medium mb-3">
            <FileText className="h-5 w-5 text-blue-600 mr-2" />
            <h4>Postgraduate</h4>
          </div>
          <ul className="space-y-2 pl-7">
            {requirements.postgraduate.map((item, index) => (
              <li key={`pg-${index}`} className="relative before:absolute before:left-[-1.2rem] before:content-['•'] before:text-blue-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* International Requirements */}
        <div>
          <div className="flex items-center text-gray-900 font-medium mb-3">
            <Globe className="h-5 w-5 text-blue-600 mr-2" />
            <h4>International Students</h4>
          </div>
          <ul className="space-y-2 pl-7">
            {requirements.international.map((item, index) => (
              <li key={`int-${index}`} className="relative before:absolute before:left-[-1.2rem] before:content-['•'] before:text-blue-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <a 
            href="/docs/admission-requirements.pdf" 
            className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center"
            download
          >
            Download Full Requirements (PDF)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}