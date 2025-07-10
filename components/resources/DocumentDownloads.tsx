// components/resources/DocumentDownloads.tsx
import { FileText, Download } from 'lucide-react';

const documents = [
  {
    name: "Course Handbook 2024",
    category: "Academic",
    size: "2.4 MB",
    format: "PDF",
    url: "/docs/handbook.pdf"
  },
  {
    name: "Internship Application Form",
    category: "Forms",
    size: "1.1 MB",
    format: "DOCX",
    url: "/docs/internship-form.docx"
  },
  {
    name: "Media Lab Safety Guidelines",
    category: "Safety",
    size: "3.2 MB",
    format: "PDF",
    url: "/docs/safety-guidelines.pdf"
  },
  {
    name: "Thesis Submission Guidelines",
    category: "Research",
    size: "1.8 MB",
    format: "PDF",
    url: "/docs/thesis-guidelines.pdf"
  }
];

export default function DocumentDownloads() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Document Downloads</h2>
      
      <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
          <div className="col-span-6">Document Name</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Format</div>
          <div className="col-span-2">Size</div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {documents.map((doc, index) => (
            <div key={index} className="grid grid-cols-12 p-4 items-center hover:bg-gray-50">
              <div className="col-span-6 flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span>{doc.name}</span>
              </div>
              <div className="col-span-2 text-gray-600">{doc.category}</div>
              <div className="col-span-2 text-gray-600">{doc.format}</div>
              <div className="col-span-2 flex justify-between items-center">
                <span className="text-gray-600">{doc.size}</span>
                <a 
                  href={doc.url} 
                  download
                  className="text-blue-700 hover:text-blue-800 p-2"
                  aria-label={`Download ${doc.name}`}
                >
                  <Download className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}