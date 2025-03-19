import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VantaBackground from "./components/VantaBackground";
import "./styles/global.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 500); // Fade in welcome text after 0.5s
    setTimeout(() => setShowName(true), 2000); // Show name after 2s
  }, []);

  return (
    <Router>
      <VantaBackground />
      <Navbar />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 
          className={`text-4xl font-bold transition-opacity duration-1000 ${
            showWelcome ? "opacity-100" : "opacity-0"
          }`}
        >
          Welcome!
        </h1>
        <h2 
          className={`text-3xl font-semibold mt-4 text-white transition-opacity duration-1000 ml-6 ${
            showName ? "opacity-100" : "opacity-0"
          }`}
        >
          My name is <span className="text-red-500">Kieran Kinnaird</span>
        </h2>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* Extra height to test scrolling */}
      <div className="h-[200vh]"></div>
    </Router>
  );
}

export default App;