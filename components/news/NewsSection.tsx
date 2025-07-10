// components/news/NewsSection.tsx
"use client";

// import { NewsItem } from "@/types/news";
// import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { NewsItem } from "@/types/faculty";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const url = `/api/news${
          category !== "all" ? `?category=${category}` : ""
        }`;
        const res = await fetch(url);
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl h-80 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {news.length > 0 && (
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Load More Articles
          </button>
        </div>
      )}

      {news.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found in this category</p>
        </div>
      )}
    </div>
  );
}
