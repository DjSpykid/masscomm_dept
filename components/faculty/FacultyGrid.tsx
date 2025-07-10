import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface FacultyMember {
  name: string;
  position: string;
  image: string;
  specialization: string;
  slug: string;
}

interface FacultyGridProps {
  faculty: FacultyMember[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FacultyGrid({ faculty }: FacultyGridProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Academic Staff
      </h2>

      {faculty.length === 0 ? (
        <p className="text-center text-gray-600">
          No faculty match your search.
        </p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
        >
          {faculty.map((member, i) => (
            <motion.div key={i} variants={item}>
              <Link href={`/faculty/${member.slug}`}>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition group cursor-pointer border border-gray-100">
                  <div className="w-24 h-24 mx-auto relative rounded-full overflow-hidden shadow mb-4 border-2 border-blue-100 group-hover:scale-105 transition">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-blue-700">{member.position}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
