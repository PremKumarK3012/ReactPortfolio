import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      // Add any other options here
    });
  }, []);

  return (
    <div>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className={`${isDark ? "bg-gray-800 text-white" : "bg-zinc-700 "}`}>
        <Home isDark={isDark} setIsDark={setIsDark} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;