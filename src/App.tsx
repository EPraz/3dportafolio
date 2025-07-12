import { NavBar } from "./components";
import { Hero, Logo, Showcase } from "./sections";

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <Showcase />
        <Logo />
      </div>
    </main>
  );
};

export default App;
