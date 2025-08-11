// types
export interface ExpCardsProps {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string; // Rol — Empresa
  date: string; // Ej: Mar 2023 – Present
  responsibilities: string[];
}

// data
export const expCards: ExpCardsProps[] = [
  {
    review:
      "Ownership técnico en APIs y microservicios con .NET, mejoras de modularidad, calidad y entregas a tiempo.",
    imgPath: "/images/logos/controlrisks.png",
    logoPath: "/images/logos/controlrisks.png",
    title: "Software Engineer — Control Risks",
    date: "Mar 2023 – Present",
    responsibilities: [
      "Desarrollo y mantenimiento de REST APIs y microservicios con ASP.NET Core y Node.js.",
      "Code reviews, pair programming y workshops para elevar estándares de calidad.",
      "Pruebas unitarias con xUnit/Jest (≈60% coverage en módulos asignados).",
      "Contribución a 5 proyectos cross-functional usando React, C#, SQL Server y MongoDB.",
      "Liderazgo en ceremonias Scrum y soporte como Team Lead en ausencias del manager.",
      "Documentación técnica: especificaciones de diseño, contratos OpenAPI/Swagger y RCAs.",
      "Optimización y debugging de funcionalidades críticas en producción.",
    ],
  },
  {
    review:
      "Sitios más rápidos y estables: auditorías, optimizaciones y buenas prácticas de seguridad.",
    imgPath: "/images/logos/lios.jpg",
    logoPath: "/images/logos/lios.jpg",
    title: "Web Specialist — Live And Invest Overseas",
    date: "Sep 2020 – Oct 2022",
    responsibilities: [
      "Desarrollo y mantenimiento de sitios WordPress con plantillas personalizadas.",
      "Auditorías de performance; mejoras de CSS/JS para ≈20% menos de tiempo de carga.",
      "Reducción de bounce rate en ≈23% mediante mejoras UX y rendimiento.",
      "Buenas prácticas de seguridad: gestión de plugins, control de accesos y vulnerabilidades.",
    ],
  },
  {
    review:
      "Proyectos full-stack para aprendizaje continuo y portafolio, emulando estándares enterprise.",
    imgPath: "/images/logos/self-taugh.jpg",
    logoPath: "/images/logos/self-taugh.jpg",
    title: "Self-Taught Web Developer — Personal Projects",
    date: "Apr 2020 – Present",
    responsibilities: [
      "Aplicaciones full-stack con React, React Native, Node.js y Express.",
      "Adopción de patrones, testing y pipelines CI/CD para acercarse a prácticas enterprise.",
      "Enfoque en escalabilidad, DX y documentación.",
    ],
  },
];
