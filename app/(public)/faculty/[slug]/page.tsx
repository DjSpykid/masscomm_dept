// import { facultyData } from "@/lib/data/facultyData";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { FacultyMember } from "@/lib/data/facultyData";

// interface FacultyPageProps {
//   params: { slug: string };
// }

// export default async function FacultyDetailPage({ params }: FacultyPageProps) {
//   const member: FacultyMember | undefined = facultyData.find(
//     (f) => f.slug === params.slug
//   );

//   if (!member) return notFound();

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-4xl mx-auto px-4">
//         {/* Back link */}
//         <Link
//           href="/faculty/all"
//           className="text-blue-700 hover:underline text-sm inline-block mt-6 mb-10"
//         >
//           ← Back to All Faculty
//         </Link>

//         {/* Profile header */}
//         <div className="flex flex-col md:flex-row items-start gap-6">
//           <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-md">
//             <Image
//               src={member.image}
//               alt={member.name}
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
//             <p className="text-blue-700 font-medium">{member.position}</p>
//             <p className="text-sm text-gray-700 mt-1">
//               {member.specialization}
//             </p>

//             {member.email && (
//               <p className="text-sm text-gray-600 mt-2">
//                 <strong>Email:</strong>{" "}
//                 <a
//                   href={`mailto:${member.email}`}
//                   className="text-blue-600 underline"
//                 >
//                   {member.email}
//                 </a>
//               </p>
//             )}

//             {member.office && (
//               <p className="text-sm text-gray-600">
//                 <strong>Office:</strong> {member.office}
//               </p>
//             )}

//             {member.joinedYear && (
//               <p className="text-sm text-gray-600">
//                 <strong>Joined:</strong> {member.joinedYear}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Bio */}
//         {member.bio && (
//           <div className="mt-10 space-y-4 text-gray-700 leading-relaxed text-[15px]">
//             {member.bio.split("\n\n").map((p, i) => (
//               <p key={i}>{p}</p>
//             ))}
//           </div>
//         )}

//         {/* Education */}
//         {member.education && member.education.length > 0 && (
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Education
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
//               {member.education.map((degree, i) => (
//                 <li key={i}>{degree}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Research Interests */}
//         {member.researchInterests && member.researchInterests.length > 0 && (
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Research Interests
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
//               {member.researchInterests.map((interest, i) => (
//                 <li key={i}>{interest}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Courses Taught */}
//         {member.coursesTaught && member.coursesTaught.length > 0 && (
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Courses Taught
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
//               {member.coursesTaught.map((course, i) => (
//                 <li key={i}>{course}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Social Links */}
//         {member.socialLinks && (
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Connect
//             </h3>
//             <div className="flex gap-4 text-sm">
//               {member.socialLinks.linkedIn && (
//                 <a
//                   href={member.socialLinks.linkedIn}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   LinkedIn
//                 </a>
//               )}
//               {member.socialLinks.googleScholar && (
//                 <a
//                   href={member.socialLinks.googleScholar}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Google Scholar
//                 </a>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



import { facultyData } from "@/lib/data/facultyData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FacultyMember } from "@/lib/data/facultyData";

// ✅ Fix: define `generateStaticParams` so Next.js knows what slugs are valid
export async function generateStaticParams() {
  return facultyData.map((member) => ({
    slug: member.slug,
  }));
}

// ✅ Page component with fixed type
export default function FacultyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const member: FacultyMember | undefined = facultyData.find(
    (f) => f.slug === params.slug
  );

  if (!member) return notFound();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back link */}
        <Link
          href="/faculty/all"
          className="text-blue-700 hover:underline text-sm inline-block mt-6 mb-10"
        >
          ← Back to All Faculty
        </Link>

        {/* Profile header */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
            <p className="text-blue-700 font-medium">{member.position}</p>
            <p className="text-sm text-gray-700 mt-1">
              {member.specialization}
            </p>

            {member.email && (
              <p className="text-sm text-gray-600 mt-2">
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 underline"
                >
                  {member.email}
                </a>
              </p>
            )}

            {member.office && (
              <p className="text-sm text-gray-600">
                <strong>Office:</strong> {member.office}
              </p>
            )}

            {member.joinedYear && (
              <p className="text-sm text-gray-600">
                <strong>Joined:</strong> {member.joinedYear}
              </p>
            )}
          </div>
        </div>

        {/* Bio */}
        {member.bio && (
          <div className="mt-10 space-y-4 text-gray-700 leading-relaxed text-[15px]">
            {member.bio.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {/* Education */}
        {member.education && member.education.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {member.education.map((degree, i) => (
                <li key={i}>{degree}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Research Interests */}
        {member.researchInterests && member.researchInterests.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Research Interests
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {member.researchInterests.map((interest, i) => (
                <li key={i}>{interest}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Courses Taught */}
        {member.coursesTaught && member.coursesTaught.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Courses Taught
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {member.coursesTaught.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Social Links */}
        {member.socialLinks && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Connect
            </h3>
            <div className="flex gap-4 text-sm">
              {member.socialLinks.linkedIn && (
                <a
                  href={member.socialLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {member.socialLinks.googleScholar && (
                <a
                  href={member.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Scholar
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
