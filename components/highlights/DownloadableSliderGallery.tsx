"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface Props {
  gallery: string[];
}

export default function DownloadableSliderGallery({ gallery }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Only initialize the slider if more than one image
  const shouldUseSlider = gallery.length > 1;
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(sliderInstance) {
      setCurrentSlide(sliderInstance.track.details.rel);
    },
  });

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="mt-10 relative">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">📸 Event Gallery</h3>

      {shouldUseSlider ? (
        <>
          {/* Carousel Mode */}
          <div
            ref={sliderRef}
            className="keen-slider relative rounded-lg overflow-hidden shadow"
          >
            {gallery.map((img, i) => (
              <div
                key={i}
                className="keen-slider__slide relative h-64 sm:h-80 md:h-96"
              >
                <Image
                  src={img}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <a
                  href={img}
                  download
                  title="Download image"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.success("Download started", {
                      description: "Image is downloading to your device.",
                    });
                  }}
                  className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/80 text-gray-700 text-sm px-3 py-1 rounded shadow transition hover:bg-white"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => slider.current?.moveToIdx(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentSlide === i
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      ) : (
        // Static Mode for 1 image only
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow">
          <Image
            src={gallery[0]}
            alt="Single gallery image"
            fill
            className="object-cover"
          />
          <a
            href={gallery[0]}
            download
            title="Download image"
            onClick={(e) => {
              e.stopPropagation();
              toast.success("Download started", {
                description: "Image is downloading to your device.",
              });
            }}
            className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/80 text-gray-700 text-sm px-3 py-1 rounded shadow transition hover:bg-white"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      )}
    </div>
  );
}
