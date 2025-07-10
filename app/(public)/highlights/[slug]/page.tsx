import { highlightData } from "@/lib/data/highlightData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import DownloadableSliderGallery from "@/components/highlights/DownloadableSliderGallery";

interface HighlightPageProps {
  params: { slug: string };
}

export default function HighlightDetailPage({ params }: HighlightPageProps) {
  const highlight = params?.slug
    ? highlightData.find((h) => h.slug === params.slug)
    : undefined;

  if (!highlight) return notFound();


  const {
    title,
    date,
    time,
    image,
    fullDescription,
    author,
    gallery,
    category,
    status,
    externalLink,
  } = highlight;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back link */}
        <Link
          href="/highlights"
          className="text-blue-700 hover:underline mt-5 text-sm inline-block mb-6"
        >
          ← Back to Highlights
        </Link>

        {/* Main image */}
        <div className="w-full h-64 relative rounded-lg overflow-hidden shadow mb-6">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Title & Meta */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{title}</h1>

        <div className="text-sm text-gray-600 mb-4 space-y-1">
          {date && (
            <p>
              📅 <strong>Date:</strong> {formatDate(date)}
              {time && (
                <>
                  {" "}
                  • 🕒 <strong>Time:</strong> {time}
                </>
              )}
            </p>
          )}
          {author && (
            <p>
              ✍️ <strong>Author:</strong> {author}
            </p>
          )}
          {(category || status) && (
            <p>
              🏷️{" "}
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                {category}
              </span>{" "}
              {status && (
                <span className="ml-2 inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  {status === "past" ? "Past" : "Upcoming"}
                </span>
              )}
            </p>
          )}
        </div>

        {/* Full Description: Multi-paragraph support */}
        <div className="mb-6">
          {typeof fullDescription === "string" ? (
            fullDescription.split("\n\n").map((para, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed mb-4">
                {para}
              </p>
            ))
          ) : (
            <p className="text-lg text-gray-700 leading-relaxed">
              {fullDescription}
            </p>
          )}
        </div>

        {/* External Link */}
        {externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-medium hover:underline"
          >
            🔗 View official post
          </a>
        )}

        {/* Gallery */}
        <DownloadableSliderGallery gallery={gallery} />
      </div>
    </section>
  );
}
