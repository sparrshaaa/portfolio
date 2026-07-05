import { Link } from "react-router-dom";
import ConnectingDots from "./ConnectingCots";

export default function Hero() {
  const fontStyle = {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "bold",
  };
  const fontStyleB = {
    fontFamily: "Ubuntu, sans-serif",
  };

  return (
    <section
      id="home"
      className="relative overflow:hidden z-10 min-h-screen flex flex-col items-center justify-center bg-[#2d3142] text-center px-6"
    >
      {" "}
      <ConnectingDots />
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
        style={fontStyle}
      >
        Hello, I'm <span className="text-[#778da9]">Sparshaa</span>
      </h1>
      <h2
        className="mt-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-white"
        style={fontStyleB}
      >
        I love creating clean, seamless, and user-first designs.
      </h2>
      <Link to="/home">
        <button className="mt-8 bg-white text-[#2d3142] px-6 py-3 rounded-xl font-medium hover:bg-[#778da9] hover:text-white transition duration-300">
          Explore Portfolio
        </button>
      </Link>
    </section>
  );
}
