// components/student-life/GalleryPreview.tsx
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  "/images/academics.jpg",
  "/images/academics.jpg",
  "/images/academics.jpg",
  "/images/academics.jpg",
];

export default function GalleryPreview() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Campus Life Gallery
        </h2>
        <Link
          href="/gallery"
          className="text-blue-700 hover:text-blue-800 font-medium"
        >
          View full gallery
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Campus life photo ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
