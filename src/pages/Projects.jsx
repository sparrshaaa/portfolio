import { Github, Link, Projector } from "lucide-react";
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
        "A streamlined online marketplace designed to provide a seamless shopping experience for pet owners, from browsing premium supplies to secure checkout.",
      tech: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "BootStrap"],
      github: "https://github.com/sparrshaaa/pet-shop-e-commerce",
      live: "#",
      img: "/petshop.png",
    },
    {
      title: "Travel Itinerary Planner with Weather Integration",
      description:
        "An intelligent trip organizer that simplifies vacation logistics by syncing personalized schedules with live weather updates and interactive navigation.",
      tech: [
        "Python",
        "Django",
        "MySQL",
        "Google Maps API",
        "Open Weather API",
      ],
      github: "https://github.com/sparrshaaa/travel_itinerary_app",
      live: "https://sparrshaaa.pythonanywhere.com/",
      img: "/travelit.png",
    },
    {
      title: "Flappy Bird Clone",
      description:
        "A classic arcade-style game that challenges players with physics-based navigation and high-score tracking within a smooth desktop environment.",
      tech: ["Java", "Swing", "JFrame"],
      github: "https://github.com/sparrshaaa/FlappyBirdJava",
      live: "#",
      img: "/flappybird.png",
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
          A curated showcase of my latest development projects, focusing on
          scalable web applications and engaging user interfaces.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2d3142]/80 p-6 rounded-2xl hover:scale-105 transition duration-300 border border-black/10"
            >
              <div className="relative">
                <img
                  src={project.img}
                  className="w-full rounded-xl [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                />
              </div>
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
                <a
                  href={project.live}
                  className="px-2 py-2 bg-white text-black rounded-full text-sm"
                >
                  <Link />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}
