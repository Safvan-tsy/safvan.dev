export interface ProjectType {
  id: number;
  slug: string;
  projectName: string;
  profile: string;
  summary: string;
  techStack: {
    tech: string;
    values: string[];
  }[];
  feat: string[];
  visuals: string[];
  repoLink: string;
  challenges: { challenge: string; solution: string }[];
  learningOutcome: string[];
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
        values: ["Next.js 14", "Tailwind CSS", "DaisyUI", "NextAuth.js"],
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
      "Utilizes NextAuth for secure user authentication.",
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
      "Gained experience with managing a monorepo setup using Turbo Repo for streamlined development and deployment processes.",
      "Improved understanding of Prisma for database management.",
      "Enhanced skills in responsive web design using Tailwind CSS and DaisyUI.",
    ],
  },
  {
    id: 2,
    slug: "ai-for-job-seekers",
    projectName: "AIx: AI-Powered Resume and Job Search Optimization Platform",
    profile:
      "https://res.cloudinary.com/safvan/image/upload/v1717429077/Screenshot_from_2024-06-03_21-02-57_upmamg.png",
    summary:
      "Aix is a web application developed for the Instill AI Hackathon, designed to assist job seekers by generating optimized resumes and Boolean search texts for advanced job searches. Users can input their basic details, experience, education, and skills into the platform. Aix leverages AI pipelines and GPT-3.5 within Instill AI's pipeline builder to process and refine this data, making it ATS-friendly and generating the required documents.",
    techStack: [
      { tech: "Languages", values: ["JavaScript", "TypeScript"] },
      {
        tech: "Frameworks/Libraries",
        values: ["Next.js 14", "Tailwind CSS", "shadcn", "Express.js"],
      },
      {
        tech: "AI and Automation",
        values: ["Instill AI", "GPT-3.5", "Puppeteer"],
      },
      { tech: "Monorepo Tooling", values: ["Turbo Repo"] },
    ],
    feat: [
      "User input of basic details, experience, education, and skills",
      "AI-driven resume generation",
      "AI-generated Boolean search texts for advanced job searching",
      "Instill AI pipeline for data optimization and ATS-friendly resume creation",
      "Backend endpoint to refactor data into a PDF resume",
      "Instill AI pipeline to generate Boolean search texts from user data",
    ],
    repoLink: "https://github.com/Safvan-tsy/aix",
    visuals: [
      "https://res.cloudinary.com/safvan/image/upload/v1717429077/Screenshot_from_2024-06-03_21-02-57_upmamg.png",
    ],
    challenges: [
      {
        challenge:
          "Integrating AI models and ensuring accurate data processing.",
        solution:
          "Developed and fine-tuned two Instill AI pipelines using GPT-3.5 within the pipeline builder for data optimization and document generation.",
      },
      {
        challenge: "Generating ATS-friendly resumes automatically",
        solution:
          "Implemented an AI pipeline to format user data into an ATS-compliant resume, processed via Puppeteer for PDF conversion.",
      },
    ],
    learningOutcome: [
      "Enhanced proficiency with Next.js 14 and modern frontend development practices.",
      "Deepened understanding of integrating AI models into web applications using GPT-3.5 and Instill AI.",
      "Improved backend skills with Express.js and automated document generation with Puppeteer.",
    ],
  },
];
