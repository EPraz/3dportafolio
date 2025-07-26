import { NavBar } from "./components";
import {
  Experience,
  FeatureCards,
  Hero,
  Logo,
  Showcase,
  TechStack,
} from "./sections";

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <Showcase />
        <Logo />
        <FeatureCards />
        <Experience />
        <TechStack />
      </div>
    </main>
  );
};

export default App;
