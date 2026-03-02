import { Link } from "react-router-dom";

export default function Hero() {
  const fontStyle = {
    fontFamily: "Ubuntu, sans-serif",
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-[#2d3142] text-center px-6"
      style={fontStyle}
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
        Hello, I'm <span className="text-[#778da9]">Sparshaa</span>
      </h1>

      <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
        I'm a full stack developer
      </h2>

      <Link to="/home">
        <button className="mt-8 bg-white text-[#2d3142] px-6 py-3 rounded-xl font-medium hover:bg-[#778da9] hover:text-white transition duration-300">
          View More
        </button>
      </Link>
    </section>
  );
}
