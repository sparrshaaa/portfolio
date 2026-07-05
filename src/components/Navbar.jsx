import { Home, FileCheck2, Info, Send, Laptop2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const linkStyle =
    "text-[#2d3142] p-2 rounded-md hover:bg-gray-100 hover:text-[#778da9] transition";

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-white shadow-xl rounded-xl py-4 px-3 flex flex-col items-center gap-3">
          <Link to="/home" className={linkStyle}>
            <Home size={22} />
          </Link>

          <Link to="/about" className={linkStyle}>
            <Info size={22} />
          </Link>

          <Link to="/projects" className={linkStyle}>
            <Laptop2 size={22} />
          </Link>

          <Link to="/reach" className={linkStyle}>
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

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_20px_rgba(0,0,0,0.08)]">
        <div className="flex justify-around items-center py-3">
          <Link to="/home" className={linkStyle}>
            <Home size={22} />
          </Link>

          <Link to="/about" className={linkStyle}>
            <Info size={22} />
          </Link>

          <Link to="/projects" className={linkStyle}>
            <Laptop2 size={22} />
          </Link>

          <Link to="/reach" className={linkStyle}>
            <Send size={22} />
          </Link>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/14rzjKB2kyW9cjEN-dSwmOpDO-rgTS90t/view?usp=sharing"
            className={linkStyle}
          >
            <FileCheck2 size={22} />
          </a>
        </div>
      </div>
    </>
  );
}
