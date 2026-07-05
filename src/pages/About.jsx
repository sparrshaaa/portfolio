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
        <p className="text-xl    max-w-7xl mb-4  text-gray-300">
          I'm a Computer Science graduate passionate about creating modern web
          applications with clean UI and scalable backend solutions.{" "}
        </p>
        <p className="text-xl   text-gray-300  max-w-7xl mb-16">
          During my internship, I contributed to responsive interfaces and
          government web platforms while gaining experience with React, Flask,
          REST APIs and Git. I enjoy solving real-world problems through
          intuitive design and efficient development.
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
              <div className="absolute w-16 sm:w-20 h-16 sm:h-20 bottom-[118%] right-[64%] z-0">
                <img
                  src="/blob2.png"
                  alt="blob"
                  className="w-full h-full object-contain animate-[slowRotate_10s_linear_infinite]"
                />
              </div>

              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-lg font-semibold   ">
                {" "}
                BE in Computer Science
              </h3>

              <p className="text-sm  text-gray-300   mt-1 max-w-md">
                SJB Institute Of Technology<br></br> Academic year 2022 - 2026{" "}
                <br></br> CGPA - 8.65
              </p>
            </div>
          </div>

          {/* skills */}
          <div className="relative mb-20">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white"></div>
            <div className="absolute left-4 top-1 w-5 h-5 bg-white rounded-full -translate-x-1/2"></div>

            <div className="pl-12 mb-8">
              <h1 className="text-2xl sm:text-3xl font-serif italic">Skills</h1>
            </div>

            {/* Programming Languages */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-2 w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>

              <h3 className=" text-gray-300 text-2xl mb-4">
                Programming Languages
              </h3>

              <div className="flex flex-wrap gap-4 mb-8">
                <Skill color="bg-yellow-200" name="Java" />
                <Skill color="bg-blue-200" name="JavaScript" />
                <Skill color="bg-red-200" name="SQL" />
              </div>
            </div>
            <div className="absolute w-16 sm:w-20 h-16 sm:h-20 bottom-[92%] right-[75%] z-0">
              <img
                src="/blob2.png"
                alt="blob"
                className="w-full h-full object-contain animate-[slowRotate_10s_linear_infinite]"
              />
            </div>

            {/* Frontend */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-2 w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>

              <h3 className=" text-gray-300 text-2xl mb-4">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-4 mb-8">
                <Skill color="bg-orange-200" name="HTML5" />
                <Skill color="bg-blue-200" name="CSS3" />
                <Skill color="bg-yellow-200" name="JavaScript" />
                <Skill color="bg-cyan-200" name="React.js" />
                <Skill color="bg-teal-200" name="Tailwind CSS" />
                <Skill color="bg-indigo-200" name="Responsive Design" />
              </div>
            </div>

            {/* Database */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-2 w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>

              <h3 className=" text-gray-300 text-2xl mb-4">Database</h3>

              <div className="flex flex-wrap gap-4 mb-8">
                <Skill color="bg-green-200" name="MySQL" />
              </div>
            </div>

            {/* Tools */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-2 w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>

              <h3 className=" text-gray-300 text-2xl mb-4">
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-4 mb-8">
                <Skill color="bg-red-200" name="Git" />
                <Skill color="bg-gray-300" name="GitHub" />
                <Skill color="bg-purple-200" name="VS Code" />
                <Skill color="bg-pink-200" name="Figma" />
              </div>
            </div>

            {/* Concepts */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-2 w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>

              <h3 className=" text-gray-300 text-2xl mb-4">Concepts</h3>

              <div className="flex flex-wrap gap-4">
                <Skill color="bg-blue-100" name="OOP" />
                <Skill color="bg-yellow-100" name="REST APIs" />
                <Skill color="bg-green-100" name="Client-Server Architecture" />
                <Skill color="bg-purple-100" name="UI/UX Design" />
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
                Junior Full Stack Developer Intern
              </p>
              <p className="text-gray-400">
                Inventech Info Solutions Pvt Ltd. <br></br> February 2026 - May
                2026
              </p>
              <p className="text-gray-300 mt-4 ">
                Developed responsive UI components using React and contributed
                to BDA and CAS government web platforms. Debugged and optimized
                application performance through agile development practices.
              </p>
            </div>
          </div>

          {/* certificates */}
          <div className="relative mb-20">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white"></div>
            <div className="absolute left-4 top-1  w-5 h-5 bg-white rounded-full -translate-x-1/2"></div>
            <div className="pl-12 mb-8">
              <h1 className="text-2xl sm:text-3xl  font-serif italic">
                Certificates
              </h1>
            </div>
            <div className="relative pl-12 mb-8">
              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-xl font-semibold">Cloud Computing - NPTEL</h3>
              <p className="text-gray-300">
                Gained hands-on knowledge of distributed systems, cloud
                architectures, and virtualization technologies through a
                structured, academic curriculum
              </p>
              <div className="absolute w-16 sm:w-20 h-16 sm:h-20 bottom-[118%] right-[64%] z-0">
                <img
                  src="/blob2.png"
                  alt="blob"
                  className="w-full h-full object-contain animate-[slowRotate_10s_linear_infinite]"
                />
              </div>
            </div>
            <div className="relative pl-12 mb-8">
              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-xl font-semibold">
                Full Stack Web Development(Tequed Labs)
              </h3>
              <p className="text-gray-300">
                Developed responsive front-ends and robust server-side logic
                while building dynamic web applications in an intensive training
                environment
              </p>
            </div>
            <div className="relative pl-12 ">
              <div className="absolute left-4 top-2  w-3 h-3 bg-white rounded-full -translate-x-1/2"></div>
              <h3 className="text-xl font-semibold">
                Software Development (Edutainer)
              </h3>
              <p className="text-gray-300">
                Gained hands-on experience in software development methodologies
                and best practices through practical training and real-world
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
