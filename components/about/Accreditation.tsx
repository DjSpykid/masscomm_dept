"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "NUC Accredited",
    logo: "/images/partners/nucLogo.png",
  },
  {
    name: "Channels TV Partner",
    logo: "/images/partners/channels-logo.jpeg",
  },
  {
    name: "CNN Africa Collab",
    logo: "/images/partners/CNN-logo.png",
  },
];

export default function Accreditation() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Accreditation & Media Partners
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Our department is recognized and actively partnered with reputable academic and media institutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center justify-center">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
