import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Work from './routes/Work/Work';
import Project from './routes/Work/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeSetup } from "./styles/theme";
import 'react-photo-view/dist/react-photo-view.css';
import 'lenis/dist/lenis.css'

import { useEffect, useRef } from "react";

import PageTransition from "./components/PageTransition";

import { gsap } from "gsap";
import Lenis from 'lenis'


function App() {
  const location = useLocation();

  const transitionRef = useRef(null);

  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  // 👉 TRANSITION NAVIGATION
  const handleNavigate = (to) => {

    // 👉 normaliza (caso haja trailing slash) 
    const currentPath = location.pathname.replace(/\/$/, "");
    const targetPath = to.replace(/\/$/, "");

    // 👉 se for a mesma página, não faz nada
    if (currentPath === targetPath) return;

    transitionRef.current.play(() => {
      if (to === "back") {
        window.history.back();
      } else {
        window.location.href = to;
      }
    });
  };

  useEffect(() => {
    const el = document.getElementById("page-overlay");

    if (!el) return;

    gsap.to(el, {
      y: "-100%",
      duration: 1,
      delay: 0.6,
      ease: "power4.inOut"
    });
  }, []);

  return (
    <ThemeSetup>
      <Navbar onNavigate={handleNavigate} />
      <Box sx={{ px: "30px", maxWidth: "1920px", mx: "auto" }}>
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Work onNavigate={handleNavigate} />} />
          <Route path="/projects/:slug" element={<Project onNavigate={handleNavigate} />} />
        </Routes>
      </Box>
      <Footer onNavigate={handleNavigate} />

      {/* OVERLAY GLOBAL */}
      <PageTransition ref={transitionRef} />
    </ThemeSetup>
  );
}

export default App;
