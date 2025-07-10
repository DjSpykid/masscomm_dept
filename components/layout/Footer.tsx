// components/layout/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Department</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-white">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-white">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics" className="hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-white">
                  Student Life
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  University Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-sm">
              Department of Mass Communication
              <br />
              Leadcity University
              <br />
              Oba Otudeko Avenue, Toll Gate Area, Ibadan
              <br />
              Oyo, Nigeria
              <br />
              Email: info@masscomm.edu.ng
              <br />
              Phone: +234 123 456 7890
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>
            © {new Date().getFullYear()} Mass Communication Department, Leadcity
            University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
