import { NavBar } from "./components";
import { Experience, FeatureCards, Hero, Logo, Showcase } from "./sections";

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
      </div>
    </main>
  );
};

export default App;
