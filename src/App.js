import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Companion from "./components/Companion";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

const useActiveSection = (refs) => {
  const [active, setActive] = React.useState(refs[0]);

  React.useEffect(() => {
    const handleScroll = () => {
      let current = null;

      refs.forEach((ref) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.4 && rect.bottom > 0) {
          current = ref;
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  return active;
};

function App() {
  const { theme } = useTheme();

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);
  const activeRef = useActiveSection([heroRef, skillsRef, expRef, projRef, contactRef]);

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <main>
        <Companion targetRef={activeRef} />

        <Hero heroRef={heroRef} />
        <Skills skillsRef={skillsRef} />
        <Experience expRef={expRef} />

        <Projects projRef={projRef} />
        <Contact contactRef={contactRef} />
      </main>

      <Footer />
    </div>
  );
}

export default App;