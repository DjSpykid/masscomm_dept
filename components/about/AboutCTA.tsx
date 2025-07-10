import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Explore our academic programs or start your application process today
          and be part of a department shaping the future of media in Nigeria and
          beyond.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/academics">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Programs
            </Button>
          </Link>
          <Link href="https://admissions.lcu.edu.ng" target="_blank">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Apply Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
