export interface ProjectType {
  id: number;
  slug: string;
  projectName: string;
  profile: string;
  summary: string;
  techStack?: {
    tech: string;
    values: string[];
  }[];
  feat?: string[];
  visuals: string[];
  repoLink: string;
  challenges?: { challenge: string; solution: string }[];
  learningOutcome?: string[];
}
export const projects: ProjectType[] = [
  {
    id: 1,
    slug: "blogx-personal-blogging-platform",
    projectName: "Blogx: Seamless and Self-Hosted Personal Blogging Platform",
    profile:
      "https://res.cloudinary.com/safvan/image/upload/v1717294737/blogs/Screenshot_from_2024-06-02_07-30-15_kmnrkd.png",
    summary:
      "Blogx is an open-source blogging platform that allows a single admin to create, manage, and publish blogs. Users visiting the site can view the list of blogs and the admin's profile card, as well as read individual blog posts. This project is designed for ease of self-hosting, enabling users to fork the repository and set up their personal blogging site. Blogx also supports both dark and light themes to enhance user experience.",
    techStack: [
      { tech: "Languages", values: ["JavaScript", "TypeScript"] },
      {
        tech: "Frameworks/Libraries",
        values: ["Next.js 14", "Tailwind CSS", "DaisyUI"],
      },
      { tech: "Database", values: ["PostgreSQL"] },
      { tech: "ORM", values: ["Prisma"] },
    ],
    feat: [
      "Admin account creation and login",
      "Admin dashboard for profile management and blog management",
      "Blog creation, editing, and deletion",
      "Public homepage displaying blog list and admin profile card",
      "Individual blog post viewing",
      "Single admin capability",
      "Dark and light theme support",
      "Open-source with easy self-hosting",
    ],
    repoLink: "https://github.com/Safvan-tsy/blogx",
    visuals: [
      "https://res.cloudinary.com/safvan/image/upload/v1717294737/blogs/Screenshot_from_2024-06-02_07-30-15_kmnrkd.png",
      "https://res.cloudinary.com/safvan/image/upload/v1717294807/blogs/Screenshot_from_2024-06-02_07-44-03_egptn9.png",
      "https://res.cloudinary.com/safvan/image/upload/v1717294818/blogs/Screenshot_from_2024-06-02_07-45-03_zuin6y.png",
      "https://res.cloudinary.com/safvan/image/upload/v1717294821/blogs/Screenshot_from_2024-06-02_07-45-29_f9bjx0.png",
      "https://res.cloudinary.com/safvan/image/upload/v1717294771/blogs/Screenshot_from_2024-06-02_07-43-33_qv3slo.png",
      "https://res.cloudinary.com/safvan/image/upload/v1717294790/blogs/Screenshot_from_2024-06-02_07-43-52_hhzjet.png",
      "https://res.cloudinary.com/safvan/image/upload/v1717294839/blogs/Screenshot_from_2024-06-02_07-45-49_u6l79i.png",
      "https://res.cloudinary.com/safvan/image/upload/v1717294850/blogs/Screenshot_from_2024-06-02_07-45-41_gska6j.png",
    ],
    challenges: [
      {
        challenge: "Implementing user authentication and secure admin access.",
        solution:
          "Utilized NextAuth.js for secure authentication and session management.",
      },
      {
        challenge: "Designing a responsive and attractive UI.",
        solution:
          "Used Tailwind CSS and DaisyUI to create a consistent and aesthetically pleasing design across all devices.",
      },
    ],
    learningOutcome: [
      "Gained hands-on experience with Next.js 14 and its new features.",
      "Improved understanding of Prisma for database management.",
      "Enhanced skills in responsive web design using Tailwind CSS and DaisyUI.",
    ],
  },
  // {
  //   id: 2,
  //   slug: "aix-for-career",
  //   projectName: "aix - for careers",
  //   profile:
  //     "https://res.cloudinary.com/safvan/image/upload/v1717081390/Screenshot_from_2024-05-30_20-32-10_knvv1h.png",
  //   summary:
  //     "I also excel in frontend development incorporating various technologies With strong emphasis on delivering high-quality solutions. My expertise spans both backend and frontend realms, With over 1+ years of experience.",
  //   repoLink: "",
  //   visuals: [],
  // },
];