// app/api/faculty/route.ts
import { NextResponse } from "next/server";
import { FacultyMember } from "@/types/faculty";

export async function GET() {
  const faculty: FacultyMember[] = [
    {
      id: "1",
      name: "Dr. Amina Okafor",
      position: "Professor of Journalism",
      department: "Mass Communication",
      email: "a.okafor@university.edu",
      office: "COM Building, Room 302",
      imageUrl: "/images/faculty/amina-okafor.jpg",
      researchInterests: [
        "Investigative Journalism",
        "Media Ethics",
        "Political Communication",
      ],
      biography:
        "Dr. Okafor has 15 years of experience in broadcast journalism...",
      education: [
        {
          degree: "Ph.D. Communication Studies",
          institution: "University of Lagos",
          year: 2010,
        },
      ],
      website: "https://staff.university.edu/aokafor",
    },
    // Add 5-10 more realistic faculty members
  ];

  return NextResponse.json(faculty);
}
