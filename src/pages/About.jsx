import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  function Skill({ name, color }) {
    return (
      <span className={`${color} text-black px-4 py-2 rounded-xl font-medium`}>
        {name}
      </span>
    );
  }
  const fontStyle = {
    fontFamily: "Ubuntu,sans-serif",
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
        className="min-h-screen bg-gray-800 bg-[#bfc0c0]   text-[#ffffff] mx-auto px-6 sm:px-10 lg:px-30 py-15"
        style={fontStyle}
      >
        <Navbar />

        <h1 className="text-7xl font-bold mb-6">About</h1>

        {/* intro */}
        <p className="text-xl    max-w-7xl mb-4">
          I am a passionate Full Stack Developer with strong fundamentals in
          Object-Oriented Programming and Web Development. My primary focus is
          building efficient backend systems using Java and creating dynamic
          front-end applications using React.{" "}
        </p>
        <p className="text-xl    max-w-7xl mb-16">
          Designing interfaces that are simple, modern, and intuitive excites
          me. I believe great software is not only functional but also
          aesthetically pleasing and easy to use.
        </p>

        {/* timeline like */}
        <div className="relative  border-gray-700 pl-10 space-y-16">
          {/* education */}
          <div className="relative mb-20">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white"></div>

            <div className="absolute left-4 top-1  w-5 h-5 bg-white rounded-full -translate-x-1/2"></div>

            <div className="pl-12 mb-8">
              <h1 className="text-2xl sm:text-3xl    font-serif italic">
                Education
              </h1>
            </div>

            <div className="relative pl-12">
              <div className="absolute w-16 sm:w-20 h-16 sm:h-20 bottom-[110%] right-[73%] z-0">
                <img
                  src="/blob2.png"
                  alt="blob"
                  className="w-full h-full object-contain animate-[slowRotate_10s_linear_infinite]"
                />
              </div>

              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-lg font-semibold   ">
                SJB Institute Of Technology
              </h3>

              <p className="text-sm    mt-1 max-w-md">
                2022 - 26 | Final year student | Pursuing BE in Computer Science
              </p>
            </div>
          </div>

          {/* skills */}
          <div className="relative mb-20">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white"></div>
            <div className="absolute left-4 top-1  w-5 h-5 bg-white rounded-full -translate-x-1/2"></div>
            <div className="pl-12 mb-8">
              <h1 className="text-2xl sm:text-3xl    font-serif italic">
                Skills
              </h1>
            </div>

            {/* Languages */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-2xl mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <Skill color="bg-yellow-200" name="Java" />
                <Skill color="bg-blue-200" name="JavaScript" />
              </div>
            </div>

            {/* others */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-2xl mb-4">FrontEnd Development</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <Skill color="bg-green-200" name="Figma" />
                <Skill color="bg-red-200" name="HTML" />
                <Skill color="bg-blue-200" name="CSS" />
                <Skill color="bg-yellow-200" name="JavaScript" />
                <Skill color="bg-indigo-200" name="React.js" />
              </div>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-2xl mb-4">Database</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <Skill color="bg-red-200" name="Figma" />
              </div>
            </div>
          </div>
          <div className="relative">
            {" "}
            <div className="absolute sm:w-20 sm:h-20 bottom-0 right-[94%] z-[9999]">
              <img
                src="/blob2.png"
                alt="blob"
                className="w-full h-full object-contain animate-[slowRotate_10s_linear_infinite]"
              />
            </div>
          </div>

          {/* exp */}
          <div className="relative mb-20">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white"></div>
            <div className="absolute left-4 top-1  w-5 h-5 bg-white rounded-full -translate-x-1/2"></div>
            <div className="pl-12 mb-8">
              <h1 className="text-2xl sm:text-3xl    font-serif italic">
                Experience
              </h1>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <p className="text-xl font-semibold">
                Full Stack Developer Intern
              </p>
              <p className="text-gray-400">
                Built responsive web apps using React & Ext.js.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
