import { AnimatedCounter, ComputerCanvas } from "../../components";
import HeroTextContent from "./HeroTextContent";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      {/* FONDO: detrás y sin eventos */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <img
          src="/images/bg.png"
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div className="hero-layout relative z-10">
        {/* LEFT: HERO CONTENT */}
        <HeroTextContent />

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <ComputerCanvas />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
