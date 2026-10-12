import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper text-espresso">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Menu />
        <About />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
