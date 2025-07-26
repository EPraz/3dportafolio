import { NavBar, StarsCanvas } from "./components";
import {
  Contact,
  Experience,
  FeatureCards,
  Hero,
  Logo,
  Showcase,
  TechStack,
  Testimonials,
} from "./sections";

const App = () => {
  return (
    <main>
      <div className="relative z-[10]">
        <StarsCanvas />
        <NavBar />
        <Hero />
        <Showcase />
        <Logo />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
};

export default App;
