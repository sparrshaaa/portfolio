import Navbar from "../components/Navbar";
import PolygonHero from "../components/PolygonHero";
import { motion } from "framer-motion";

export default function Home() {
  const fontStyle = {
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
        className="relative overflow-hidden z-10 min-h-screen bg-[#E0DBD1] text-[#22223b]"
        style={fontStyle}
      >
        {" "}
        <Navbar />
        <div className="relative z-10 max-w-none mx-auto px-6 sm:px-10 lg:px-24 pt-10 pb-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#778da9]/20 text-[#4f5d75] text-sm font-medium mb-2">
              👋 Computer Science Graduate
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-2">
              Sparsha UK
            </h1>

            <p className="text-lg leading-8 text-[#4f5d75] max-w-xl ">
              An aspiring Full Stack Developer based in Bengaluru, India.
              <br /> I build responsive, scalable and user-focused web
              applications using React, Java and MySQL. <br />
              Passionate about creating intuitive digital experiences and
              continuously learning modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 ">
              {[
                "Java",
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind",
                "MySQL",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className=" px-4 py-2 rounded-full shadow-md text-white font-medium bg-[#2d3144] hover:-translate-y-1 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 mt-10 text-[#4f5d75]">
              <div>
                <p className="text-3xl font-bold text-[#2d3142]">8.65</p>
                <p>CGPA</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#2d3142]">3+</p>
                <p>Projects</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#2d3142]">1</p>
                <p>Internship</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-end overflow-visible">
            <div className="absolute -right-44 top-1/2 -translate-y-1/2 w-[900px] h-[900px]">
              <PolygonHero />
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
