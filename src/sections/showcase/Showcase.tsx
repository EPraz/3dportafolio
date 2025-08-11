// Showcase.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { projects, type Status } from "../../contants";
import LiveCTA from "./LiveCTA";
import StatusBadge from "./StatusBadge";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );
    gsap.utils.toArray(".project-card").forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.12 * (i + 1),
          ease: "power2.inOut",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });
  }, []);

  const featured = projects[0];
  const others = projects.slice(1, 3);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="app-showcase section-padding"
    >
      <div className="w-full showcaselayout gap-8 md:gap-10">
        {/* LEFT — Featured */}
        <article className="project-card card-border rounded-xl overflow-hidden">
          <div className="relative w-full h-64 md:h-80 lg:h-96 bg-black/10">
            <StatusBadge status={featured.status as Status} />
            <img
              src={featured.cover}
              alt={featured.title}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition
                ${featured.status === "coming-soon" ? "grayscale" : ""}`}
            />
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-white text-2xl md:text-3xl font-semibold">
              {featured.title}
            </h3>
            {featured.subtitle && (
              <p className="text-white/70 mt-1">{featured.subtitle}</p>
            )}
            <p className="text-white-50 md:text-lg mt-3">{featured.summary}</p>

            <div className="mt-3 text-sm text-white/60">
              <span className="font-medium">{featured.role}</span> ·{" "}
              {featured.stack.join(" · ")}
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              <LiveCTA
                status={featured.status as Status}
                url={featured.liveUrl}
                id="live-featured"
              />
              <a
                href={featured.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center h-10 px-4 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition"
              >
                Repo
              </a>
              {featured.demoUrl && (
                <a
                  href={featured.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center h-10 px-4 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition"
                >
                  Demo video
                </a>
              )}
              {featured.caseStudyUrl && (
                <a
                  href={featured.caseStudyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center h-10 px-4 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition"
                >
                  Case study
                </a>
              )}
            </div>
          </div>
        </article>

        {/* RIGHT — Compact cards */}
        <div className="project-list-wrapper grid gap-6">
          {others.map((p, idx) => (
            <article
              key={idx}
              className="project project-card card-border rounded-xl overflow-hidden"
            >
              <div className="relative w-full h-48 md:h-56 bg-black/10">
                <StatusBadge status={p.status as Status} />
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition
                    ${p.status === "coming-soon" ? "grayscale" : ""}`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl font-semibold">{p.title}</h3>
                {p.subtitle && (
                  <p className="text-white/70 mt-0.5">{p.subtitle}</p>
                )}
                <p className="text-white-50 text-sm mt-2">{p.summary}</p>
                <div className="mt-2 text-xs text-white/60">
                  {p.stack.join(" · ")}
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  <LiveCTA
                    status={p.status as Status}
                    url={p.liveUrl}
                    id={`live-${idx}`}
                    size="sm"
                  />
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center h-9 px-3 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition"
                  >
                    Repo
                  </a>
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center h-9 px-3 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition"
                    >
                      Demo video
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
