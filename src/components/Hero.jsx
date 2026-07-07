import { Link } from "react-router-dom";
import ConnectingDots from "./ConnectingCots";
import { motion } from "framer-motion";

export default function Hero() {
  const fontStyle = {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "bold",
  };
  const fontStyleB = {
    fontFamily: "Ubuntu, sans-serif",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F4F4F4]"
    >
      <section
        id="home"
        className="relative overflow-hidden z-10 min-h-screen flex flex-col justify-center items-start bg-[#2d3142] px-6 sm:px-10 lg:px-20"
      >
        {" "}
        <ConnectingDots />
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
          style={fontStyle}
        >
          Hello,
          <br /> I'm <span className="text-[#8397b1]">Sparshaa</span>
        </h1>
        <h2
          className="mt-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-white/60"
          style={fontStyleB}
        >
          I love creating clean, seamless and user-friendly designs.
        </h2>
        <Link to="/home">
          <button className="mt-8 bg-white/70 text-[#2d3142] px-6 py-3  font-medium hover:bg-[#778da9] hover:text-white transition duration-300 border border-white">
            Explore Portfolio
          </button>
        </Link>
      </section>
    </motion.section>
  );
}
