// types/faculty.ts
export interface FacultyMember {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone?: string;
  office: string;
  imageUrl: string;
  researchInterests: string[];
  biography: string;
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  publications?: string[];
  website?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
  }
}

// types/news.ts
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
}

// types/events.ts
export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}