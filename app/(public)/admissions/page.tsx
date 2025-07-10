// app/(public)/admissions/page.tsx
import FeeStructure from '@/components/admissions/FeeStructure';
import ImportantDates from '@/components/admissions/ImportantDates';
import ProcessSteps from '@/components/admissions/ProcessSteps';
import RequirementsCard from '@/components/admissions/RequirementsCard';

export default function AdmissionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Start your journey in mass communication
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <ProcessSteps />
            <ImportantDates />
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <RequirementsCard />
            <FeeStructure />
          </div>
        </div>
      </div>
    </div>
  );
}