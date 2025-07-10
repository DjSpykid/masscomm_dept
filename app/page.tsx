import HeroSection from "@/components/home/HeroSection";
import DepartmentHighlights from "@/components/home/DepartmentHighlights";
import AboutPreview from "@/components/home/AboutPreview";
import ProgramsOffered from "@/components/home/ProgramsOffered";
import Testimonials from "@/components/home/Testimonials";
import QuickLinks from "@/components/home/QuickLinks";
// import UpcomingEvents from "@/components/events/UpcomingEvents";

export default function Home() {
  return (
    <div>
      <HeroSection />
     
      {/* Quick Links Section */}
      <QuickLinks/>

      {/* Department Highlights */}
      <DepartmentHighlights />

      {/* About Preview Section */}
      <AboutPreview/>

      {/* Programs Offered Section */}
      <ProgramsOffered />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Upcoming Events Section */}
        {/* <UpcomingEvents/>       */}
    </div>
  );
}
