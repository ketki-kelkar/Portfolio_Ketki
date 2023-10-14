import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Tech from "./Tech";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";

import './App.css';

function App(){
  return (
    <>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero /> 
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Education/>
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div> 
      </div>
    </>
  );
};

export default App;
