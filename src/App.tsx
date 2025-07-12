import { NavBar } from "./components";
import { FeatureCards, Hero, Logo, Showcase } from "./sections";

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <Showcase />
        <Logo />
        <FeatureCards />
      </div>
    </main>
  );
};

export default App;
