import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import MadeWith from "./components/sections/MadeWith";

function App() {
  return (
    <div className="font-mooli bg-dark bg-cover bg-fixed bg-no-repeat text-white">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <MadeWith />
    </div>
  );
}

export default App;
