// constants/projects.ts
export type Project = {
  title: string;
  subtitle?: string;
  cover: string;
  bg?: string;
  role: string;
  stack: string[];
  summary: string;
  liveUrl?: string;
  repoUrl: string;
  demoUrl?: string; // Loom/YouTube
  caseStudyUrl?: string; // Notion/README
  status?: Status;
  layout?: "featured" | "compact"; // para el primero grande
};
export type Status = "live" | "coming-soon" | undefined;

export const projects: Project[] = [
  {
    title: "Project Management App",
    subtitle: "Sprints, roles, taskboard, charts",
    cover: "/images/project1.png",
    bg: "#0f172a",
    role: "Full Stack Developer",
    stack: [
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase Auth",
      "Charts",
    ],
    summary:
      "Gestión de proyectos con sprints y tablero drag & drop. Metricas y reportes.",
    liveUrl: "https://tu-dominio.app", // cuando re-actives
    repoUrl: "https://github.com/EPraz/pm-app",
    // caseStudyUrl: "https://www.notion.so/tu-caso",
    status: "live",
    layout: "featured",
  },
  {
    title: "Services Marketplace (RN)",
    subtitle: "Web + Mobile (Expo)",
    cover: "/images/project2.png",
    bg: "#ffefdb",
    role: "Full Stack (WIP)",
    stack: ["React Native", "Expo", "TypeScript"],
    summary:
      "MVP para conectar clientes y proveedores. Búsqueda, perfiles y contacto.",
    // demoUrl: "https://loom.com/share/tu-video",
    repoUrl: "https://github.com/EPraz/marketplace-rn",
    status: "coming-soon",
  },
  {
    title: "Orders/Kitchen POS (RN)",
    subtitle: "Offline-first concept",
    cover: "/images/project3.png",
    bg: "#ffe7eb",
    role: "Mobile Developer",
    stack: ["React Native", "Expo"],
    summary:
      "Tomas de pedido y flujo cocina. Enfoque usabilidad y rapidez en punto de venta.",
    // demoUrl: "https://loom.com/share/tu-video2",
    repoUrl: "https://github.com/EPraz/pos-rn",
    status: "coming-soon",
  },
];
