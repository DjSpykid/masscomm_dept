// app/(public)/resources/page.tsx
import DocumentDownloads from "@/components/resources/DocumentDownloads";
import EquipmentBooking from "@/components/resources/EquipmentBooking";
import LibraryResources from "@/components/resources/LibraryResources";

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-32 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Student Resources
          </h1>
          <p className="text-xl max-w-3xl">
            Everything you need for academic success
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        <DocumentDownloads />
        <EquipmentBooking />
        <LibraryResources />
      </div>
    </div>
  );
}
