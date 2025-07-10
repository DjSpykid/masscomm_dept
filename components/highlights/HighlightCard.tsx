import { formatDate, truncate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface HighlightCardProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  date?: string;
  link: string;
}

export default function HighlightCard({
  title,
  description,
  image,
  alt = "Highlight image",
  date,
  link,
}: HighlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-blue-800 mb-1">
          {truncate(title, 60)}
        </h3>
        {date && (
          <p className="text-xs text-gray-500 mb-2">{formatDate(date)}</p>
        )}
        <p className="text-sm text-gray-700">{truncate(description, 120)}</p>
        <Link
          href={link}
          className="mt-4 inline-block text-sm text-blue-700 font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}