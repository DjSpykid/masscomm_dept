// components/navigation/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import {
  Home,
  Info,
  BookOpen,
  Users,
  FileText,
  Calendar,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Programs", href: "/academics", icon: BookOpen },
  { name: "Faculty", href: "/faculty", icon: Users },
  { name: "Admissions", href: "/admissions", icon: FileText },
  { name: "News & Events", href: "/news-events", icon: Calendar },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-sm shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/school_logo.png"
              alt="Lead City University Logo"
              width={100}
              height={100}
              className="h-10 w-auto -ml-4 sm:h-14 md:h-16 object-contain"
            />
            <div className="leading-tight">
              {/* Mobile: Short brand + motto */}
              <div className="sm:hidden flex flex-col items-start -ml-4">
                <span className="text-base font-semibold text-gray-900">
                  Mass Communication
                </span>
                <span className="text-xs tracking-tight italic text-gray-700">
                  Knowledge for Self-Reliance
                </span>
              </div>

              {/* Desktop: Full brand + motto */}
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Mass Communication
                </span>
                <span className="text-sm italic text-gray-700">
                  Knowledge for Self-Reliance
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className={`text-sm font-medium flex items-center gap-1 transition-all duration-200 border-b-2 border-transparent ${
                  pathname === href
                    ? "text-blue-800 border-blue-800"
                    : "text-blue-900 hover:text-blue-600 hover:border-blue-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                {name}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-800"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
            mobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 px-2">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === href
                    ? "bg-blue-100 text-blue-800"
                    : "text-blue-900 hover:bg-blue-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
