// lib/data/facultyData.ts
export interface FacultyMember {
  slug: string;
  name: string;
  position: string;
  image: string;
  specialization: string;
  bio: string;
  email?: string;
  office?: string;
  education?: string[];
  researchInterests?: string[];
  coursesTaught?: string[];
  socialLinks?: {
    linkedIn?: string;
    googleScholar?: string;
  };
  joinedYear?: number;
}

export const facultyData: FacultyMember[] = [
  {
    slug: "dr-akintunde-olayemi",
    name: "Dr. Akintunde Olayemi",
    position: "Head of Department",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Broadcast Journalism, Media Policy",
    bio: `Dr. Olayemi has over 20 years of experience in radio broadcasting and academia.

He leads curriculum innovation and industry partnerships for the department.`,
    email: "akintunde.olayemi@university.edu.ng",
    office: "Room 204, Mass Comm Building",
    education: [
      "Ph.D. in Media Studies – University of Lagos",
      "MSc in Communication – University of Ibadan",
      "BSc in Mass Communication – UNILORIN",
    ],
    researchInterests: [
      "Broadcast regulation in Africa",
      "Community radio development",
      "Media policy reform",
    ],
    coursesTaught: [
      "MCM 401 – Media Law & Ethics",
      "MCM 305 – Radio Broadcasting",
      "MCM 102 – Introduction to Mass Communication",
    ],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/akintunde-olayemi",
    },
    joinedYear: 2010,
  },
  {
    slug: "mrs-bola-adediran",
    name: "Mrs. Bola Adediran",
    position: "Senior Lecturer",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Advertising & Public Relations",
    bio: `Mrs. Adediran is a passionate communication strategist and teaches campaigns and audience research.`,
    email: "bola.adediran@university.edu.ng",
    office: "Room 101",
    education: [
      "MSc in Mass Communication – UNILAG",
      "BSc in Public Relations – LASU",
    ],
    researchInterests: ["Brand Communication", "Political Advertising"],
    coursesTaught: ["MCM 302 – Advertising Strategy", "MCM 203 – PR Methods"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/bola-adediran",
    },
    joinedYear: 2013,
  },
  {
    slug: "mr-james-okon",
    name: "Mr. James Okon",
    position: "Lecturer II",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Photojournalism, Visual Communication",
    bio: `Mr. Okon brings industry experience in photojournalism and visual storytelling.`,
    email: "james.okon@university.edu.ng",
    office: "Photo Studio Annex",
    education: ["MFA in Photography – NAU", "BSc in Visual Arts – UNN"],
    researchInterests: ["Documentary Photography", "Visual Culture"],
    coursesTaught: ["MCM 210 – Photojournalism"],
    joinedYear: 2016,
  },
  {
    slug: "dr-chioma-nwankwo",
    name: "Dr. Chioma Nwankwo",
    position: "Senior Lecturer",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Health Communication, Development Media",
    bio: `Dr. Nwankwo researches health narratives and rural media.`,
    email: "chioma.nwankwo@university.edu.ng",
    education: [
      "Ph.D. in Health Comm – Covenant University",
      "MSc – Mass Communication",
    ],
    researchInterests: ["Health Messaging", "Grassroots Campaign Media"],
    coursesTaught: [
      "MCM 310 – Health Communication",
      "MCM 406 – Development Media",
    ],
    joinedYear: 2012,
  },
  {
    slug: "prof-john-odum",
    name: "Prof. John Odum",
    position: "Professor of Mass Communication",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Media Ethics, Communication Theory",
    bio: `Prof. Odum is a respected scholar with over 30 publications.`,
    email: "john.odum@university.edu.ng",
    education: ["Ph.D. – University of Oxford", "MSc – Communication Theory"],
    researchInterests: ["Media Philosophy", "Cultural Semiotics"],
    coursesTaught: ["MCM 501 – Media Ethics", "MCM 410 – Communication Theory"],
    joinedYear: 2005,
  },
  {
    slug: "mrs-hauwa-garba",
    name: "Mrs. Hauwa Garba",
    position: "Assistant Lecturer",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "New Media, Social Media Analysis",
    bio: `Mrs. Garba focuses on digital engagement and online media behavior.`,
    email: "hauwa.garba@university.edu.ng",
    researchInterests: ["TikTok Culture", "Online Audience Analysis"],
    coursesTaught: ["MCM 220 – Social Media Trends"],
    joinedYear: 2020,
  },
  {
    slug: "mr-simeon-ogundeji",
    name: "Mr. Simeon Ogundeji",
    position: "Lecturer I",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Film Studies, Screenwriting",
    bio: `Mr. Ogundeji teaches film production and screenwriting.`,
    email: "simeon.ogundeji@university.edu.ng",
    office: "Film Lab",
    coursesTaught: ["MCM 305 – Scriptwriting", "MCM 310 – Film Editing"],
    joinedYear: 2015,
  },
  {
    slug: "dr-rose-abang",
    name: "Dr. Rose Abang",
    position: "Lecturer I",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Gender & Media, Political Communication",
    bio: `Dr. Abang explores gender representation and political messaging in African media.`,
    email: "rose.abang@university.edu.ng",
    education: ["Ph.D. in Gender Communication – BUK"],
    researchInterests: ["Gender Stereotypes", "Election Media Coverage"],
    joinedYear: 2014,
  },
  {
    slug: "mr-daniel-udeh",
    name: "Mr. Daniel Udeh",
    position: "Technologist",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Studio Operations, Media Technology",
    bio: `Mr. Udeh manages the department’s radio and television studios.`,
    office: "Broadcast Control Room",
    joinedYear: 2018,
  },
  {
    slug: "mrs-rita-ekong",
    name: "Mrs. Rita Ekong",
    position: "Lecturer II",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Public Speaking, Corporate Communication",
    bio: `Mrs. Ekong teaches oral communication and corporate relations.`,
    email: "rita.ekong@university.edu.ng",
    researchInterests: ["Speech Delivery", "Corporate Brand Voice"],
    joinedYear: 2019,
  },
  {
    slug: "mr-isaac-ajayi",
    name: "Mr. Isaac Ajayi",
    position: "Graduate Assistant",
    image: "/images/lecturers/Dean_masscomm.jpg",
    specialization: "Media Research, Writing Skills",
    bio: `Mr. Ajayi assists in teaching academic writing and media literacy.`,
    email: "isaac.ajayi@university.edu.ng",
    joinedYear: 2022,
  },
];
