import { NavBar } from "./components";
import { Hero, Showcase } from "./sections";

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <Showcase />
      </div>
    </main>
  );
};

export default App;
