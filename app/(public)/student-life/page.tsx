// app/(public)/student-life/page.tsx
import StudentHighlights from '@/components/student-life/StudentHighlights';
import AlumniSpotlight from '@/components/student-life/AlumniSpotlight';
import GalleryPreview from '@/components/student-life/GalleryPreview';
import ClubsOrganizations from '@/components/student-life/ClubsOrganizations';

export default function StudentLifePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-32 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
          <p className="text-xl max-w-3xl">
            Beyond academics - discover our vibrant campus community
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        <StudentHighlights />
        <ClubsOrganizations />
        <AlumniSpotlight />
        <GalleryPreview />
      </div>
    </div>
  );
}