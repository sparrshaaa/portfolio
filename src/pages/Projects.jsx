import { Github, Projector } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
export default function Projects() {
  const fontStyle = {
    fontFamily: "Ubuntu,sans-serif",
  };
  const projects = [
    {
      title: "E-commerce Website for Pet Shop",
      description:
        "A full stack task management app with authentication and CRUD operations.",
      tech: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "BootStrap"],
      github: "#",
      live: "#",
    },
    {
      title: "Travel Itinerary Planner with Weather Integration",
      description:
        "Personal portfolio built using React and Tailwind CSS with smooth animations.",
      tech: [
        "Python",
        "Django",
        "MySQL",
        "Google Maps API",
        "Open Weather API",
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Flappy Bird Clone",
      description:
        "Real-time weather app using public API with dynamic UI updates.",
      tech: ["Java", "Swing", "JFrame"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F4F4F4]"
    >
      <section
        className="min-h-screen bg-[#ced4da]  mx-auto px-6 sm:px-10 lg:px-30 py-15"
        style={fontStyle}
      >
        <Navbar />
        <div className="flex items-center gap-4 mb-8">
          <Projector className="w-10 h-10 sm:w-12 sm:h-12 text-[#2d3142]" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-[#2d3142] font-semibold">
            Projects
          </h1>
        </div>

        <p className="text-[#2d3142]/70 text-lg max-w-5xl mb-16">
          A collection of projects showcasing my skills in frontend, backend,
          and database development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2d3142]/80 p-6 rounded-2xl hover:scale-105 transition duration-300 border border-black/10"
            >
              <h2 className="text-2xl font-semibold text-white mb-10">
                {project.title}
              </h2>

              <p className="text-white/90 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-16">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/90 text-black px-3 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex justify-end gap-4">
                <a
                  href={project.github}
                  className="px-2 py-2 bg-white text-black rounded-full text-sm"
                >
                  <Github />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}
