import { Home, FileCheck2, Info, Send, Laptop2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const linkStyle =
    "text-[#2d3142] p-2 rounded-md hover:bg-gray-100 hover:text-[#778da9] transition";

  const activeStyle = "bg-[#eef2f7] text-[#778da9] shadow-md scale-105";
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-white shadow-xl rounded-xl py-4 px-3 flex flex-col items-center gap-3">
          <Link
            to="/home"
            className={`${linkStyle} relative group ${
              location.pathname === "/home" ? activeStyle : ""
            }`}
          >
            <Home size={22} />
            <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#2d3142] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              Home
            </span>
          </Link>

          <Link
            to="/about"
            className={`${linkStyle} relative group ${
              location.pathname === "/about" ? activeStyle : ""
            }`}
          >
            <Info size={22} />
            <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#2d3142] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              About
            </span>
          </Link>

          <Link
            to="/projects"
            className={`${linkStyle} relative group ${
              location.pathname === "/projects" ? activeStyle : ""
            }`}
          >
            <Laptop2 size={22} />
            <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#2d3142] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              Projects
            </span>
          </Link>

          <Link
            to="/reach"
            className={`${linkStyle} relative group ${
              location.pathname === "/reach" ? activeStyle : ""
            }`}
          >
            <Send size={22} />
            <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#2d3142] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              Reach Out
            </span>
          </Link>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1ZHjhuXoStQoq7QIET-NvpWFDQbueUaD1/view?usp=sharing"
            className={linkStyle}
          >
            <FileCheck2 size={22} />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_20px_rgba(0,0,0,0.08)]">
        <div className="flex justify-around items-center py-3">
          <Link
            to="/home"
            className={`${linkStyle} ${
              location.pathname === "/home" ? activeStyle : ""
            }`}
          >
            <Home size={22} />
          </Link>

          <Link
            to="/about"
            className={`${linkStyle} ${
              location.pathname === "/about" ? activeStyle : ""
            }`}
          >
            <Info size={22} />
          </Link>

          <Link
            to="/projects"
            className={`${linkStyle} ${
              location.pathname === "/projects" ? activeStyle : ""
            }`}
          >
            <Laptop2 size={22} />
          </Link>

          <Link
            to="/reach"
            className={`${linkStyle} ${
              location.pathname === "/reach" ? activeStyle : ""
            }`}
          >
            <Send size={22} />
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1ZHjhuXoStQoq7QIET-NvpWFDQbueUaD1/view?usp=sharing"
            className={linkStyle}
          >
            <FileCheck2 size={22} />
          </a>
        </div>
      </div>
    </>
  );
}
