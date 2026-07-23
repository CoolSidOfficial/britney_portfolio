import { Fade } from "react-awesome-reveal";
import Resume from "../assets/resume.pdf";
import React, { useState } from "react";

const Navbar = () => {
  const [show_nav, update_nav] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <Fade cascade damping={1} delay={200}>
        <nav className="hidden md:flex items-center justify-end gap-8 px-10 py-5 bg-[#0A192F] text-[#CCD6F6] text-lg sticky top-0 z-50">
          <a
            className="hover:text-[#64FFDA] transition-colors duration-300"
            href="#about"
          >
            01. About
          </a>

          <a
            className="hover:text-[#64FFDA] transition-colors duration-300"
            href="#experience"
          >
            02. Experience
          </a>

          <a
            className="hover:text-[#64FFDA] transition-colors duration-300"
            href="#projects"
          >
            03. Work
          </a>

          <a
            className="hover:text-[#64FFDA] transition-colors duration-300"
            href="#writing"
          >
            04. Writing
          </a>

          <a
            className="hover:text-[#64FFDA] transition-colors duration-300"
            href="#contact"
          >
            05. Contact
          </a>

          <a
            className="hover:text-[#64FFDA] transition-colors duration-300"
            href="https://britneybackend2-production.up.railway.app/admin/login/?next=/admin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            06. Admin
          </a>

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#64FFDA] text-[#64FFDA] rounded px-5 py-3 hover:bg-[#64FFDA]/10 transition-all duration-300 hover:shadow-[5px_5px_0px_rgba(100,255,218,1)]"
          >
            Resume
          </a>
        </nav>
      </Fade>

      {/* Mobile Menu Button */}
      <button
        onClick={() => update_nav(!show_nav)}
        className="md:hidden fixed top-4 right-4 z-50"
      >
        <img
          className="w-10"
          src="/menu_icon.png"
          alt="Menu"
        />
      </button>

      {/* Mobile Sidebar */}
      {show_nav && (
        <nav className="fixed top-0 right-0 h-screen w-[80%] bg-[#112240] text-[#CCD6F6] flex flex-col items-center justify-center gap-8 text-2xl font-mono font-semibold z-40 shadow-2xl">

          <a
            onClick={() => update_nav(false)}
            className="hover:text-[#64FFDA]"
            href="#about"
          >
            About
          </a>

          <a
            onClick={() => update_nav(false)}
            className="hover:text-[#64FFDA]"
            href="#experience"
          >
            Experience
          </a>

          <a
            onClick={() => update_nav(false)}
            className="hover:text-[#64FFDA]"
            href="#projects"
          >
            Work
          </a>

          <a
            onClick={() => update_nav(false)}
            className="hover:text-[#64FFDA]"
            href="#writing"
          >
            Writing
          </a>

          <a
            onClick={() => update_nav(false)}
            className="hover:text-[#64FFDA]"
            href="#contact"
          >
            Contact
          </a>

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#64FFDA] text-[#64FFDA] rounded px-6 py-3 hover:bg-[#64FFDA]/10 transition-all duration-300"
          >
            Resume
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;