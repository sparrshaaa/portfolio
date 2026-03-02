import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Cursor from "./components/Cursor";
import ReachOut from "./pages/ReachOut";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  const showCursor =
    location.pathname === "/about" ||
    location.pathname === "/projects" ||
    location.pathname === "/reach" ||
    location.pathname === "/";

  return (
    <>
      {showCursor && <Cursor />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reach" element={<ReachOut />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
