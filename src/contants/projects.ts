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
  layout?: "featured" | "compact";
};
export type Status = "live" | "coming-soon" | undefined;

export const projects: Project[] = [
  {
    title: "Project Management App",
    subtitle: "Sprints, roles, taskboard, charts",
    cover: "/images/elementor-placeholder-image.png",
    bg: "#0f172a",
    role: "Full Stack Developer",
    stack: [
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase Auth",
      "Charts.js",
    ],
    summary:
      "Comprehensive project management platform with role-based access, sprint planning, and an interactive drag-and-drop taskboard. Includes progress tracking through charts and reports.",
    liveUrl: "https://your-domain.app",
    repoUrl: "https://github.com/EPraz/projectManagement",
    status: "coming-soon",
    layout: "featured",
  },
  {
    title: "Multi-Tenant E-commerce Admin",
    subtitle: "Vendor dashboard & management tools",
    cover: "/images/elementor-placeholder-image.png",
    bg: "#f0f4ff",
    role: "Full Stack Developer",
    stack: ["React Native", "Expo", "NestJS", "PostgreSQL"],
    summary:
      "Admin dashboard for multi-tenant e-commerce. Vendors can manage products, orders, customers, staff, and track sales analytics. Scalable architecture to support multiple storefronts per vendor.",
    repoUrl: "https://github.com/EPraz/ecom-frontend-native",
    status: "coming-soon",
  },
  {
    title: "Camera Viewer App",
    subtitle: "Prototype UI for multi-camera monitoring",
    cover: "/images/elementor-placeholder-image.png",
    bg: "#ddeeff",
    role: "Mobile UI Developer",
    stack: ["React Native", "Expo", "TypeScript"],
    summary:
      "Prototype app to visualize multiple camera feeds in one place. Users can select a device (e.g., boat or location) and view its associated cameras, with the ability to focus on a specific stream. Designed to integrate real-time video in future iterations.",
    repoUrl: "https://github.com/EPraz/camera-ui-mvp",
    status: "coming-soon",
  },
  // {
  //   title: "Services Marketplace",
  //   subtitle: "Connect clients with service providers",
  //   cover: "/images/elementor-placeholder-image.png",
  //   bg: "#ffefdb",
  //   role: "Full Stack Developer",
  //   stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeScript"],
  //   summary:
  //     "MVP platform to connect clients and providers. Includes service listings, provider profiles, search with filters, and direct contact. Architecture prepared for future features like payments and geolocation.",
  //   repoUrl: "https://github.com/EPraz/marketplace-rn",
  //   status: "coming-soon",
  // },
  {
    title: "Offline Orders System",
    subtitle: "POS-style offline-first ordering",
    cover: "/images/elementor-placeholder-image.png",
    bg: "#ffe7eb",
    role: "Full Stack Developer",
    stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "AsyncStorage"],
    summary:
      "Ordering system designed for low-connectivity environments. Allows capturing orders with photos and notes, storing them offline, and automatically syncing when internet is available. Ideal for field operations.",
    repoUrl: "https://github.com/EPraz/offline-uploader-mvp",
    status: "coming-soon",
  },
  // {
  //   title: "Organization Admin Hub",
  //   subtitle: "Centralized management for organizations",
  //   cover: "/images/elementor-placeholder-image.png",
  //   bg: "#e9f7ef",
  //   role: "Full Stack Developer",
  //   stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeScript"],
  //   summary:
  //     "Platform for managing organizations and their members in one place. Includes data management, role assignments, and integration with related entities. Built for scalability and easy feature expansion.",
  //   repoUrl: "https://github.com/EPraz/admin-hub-rn",
  //   status: "coming-soon",
  // },
];
