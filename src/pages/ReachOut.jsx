import Navbar from "../components/Navbar";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ReachOut() {
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
        className="min-h-screen bg-[#2d3142] text-white mx-auto px-6 sm:px-10 lg:px-30 py-15"
        style={fontStyle}
      >
        <Navbar />

        <div className="max-w-5xl mx-auto mt-20">
          <h1 className="text-7xl font-bold mb-4">Reach Out</h1>
          <div className="relative">
            {" "}
            <div className="absolute w-20 h-20 bottom-13 left-90 -bottom-6 left-0 z-[9999]">
              <img
                src="/blob2.png"
                alt="blob"
                className="w-full h-full object-contain animate-[slowRotate_10s_linear_infinite]"
              />
            </div>
          </div>
          <p className="text-[#bfc0c0] text-lg mb-16 max-w-3xl">
            Whether you have a project idea, collaboration opportunity, or just
            want to connect — I’d love to hear from you.
          </p>

          <div className="flex flex-col md:flex-row gap-16">
            {/* github */}
            <a
              href="https://github.com/sparrshaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <Github size={32} className="text-white" />
              <ArrowUpRight
                size={22}
                className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
              <span className="text-2xl font-medium group-hover:underline">
                code & projects
              </span>
            </a>

            {/* linkedin */}
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <Linkedin size={32} />
              <ArrowUpRight
                size={22}
                className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
              <span className="text-2xl font-medium group-hover:underline">
                linkedin
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:sparshauk0207@gmail.com"
              className="flex items-center gap-4 group"
            >
              <Mail size={32} />
              <ArrowUpRight
                size={22}
                className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
              <span className="text-2xl font-medium group-hover:underline">
                email me
              </span>
            </a>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
