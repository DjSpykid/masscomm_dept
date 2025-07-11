// // components/news/NewsCard.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { formatDate } from "@/lib/utils";
// import { NewsItem } from "@/types/faculty";


// export default function NewsCard({ item }: { item: NewsItem }) {
//   return (
//     <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
//       <div className="relative h-48">
//         <Image
//           src={item.imageUrl}
//           alt={item.title}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//         <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
//           {item.category}
//         </span>
//       </div>

//       <div className="p-6">
//         <div className="flex items-center text-xs text-gray-500 mb-2">
//           <span>{formatDate(item.date)}</span>
//           <span className="mx-2">•</span>
//           <span>{item.author}</span>
//         </div>

//         <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
//           <Link href={`/news-events/${item.slug}`}>{item.title}</Link>
//         </h3>

//         <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>

//         <Link
//           href={`/news-events/${item.slug}`}
//           className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center text-sm"
//         >
//           Read more
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 ml-1"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </Link>
//       </div>
//     </article>
//   );
// }
