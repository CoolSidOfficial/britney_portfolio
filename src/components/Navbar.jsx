import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Resume from "../assets/resume.pdf";
import { sections } from "../data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex sticky top-0 z-50 items-center justify-end gap-8 bg-navy/90 px-10 py-5 text-slate-lightest backdrop-blur">
        <Fade cascade damping={0.1} triggerOnce>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="transition-colors hover:text-accent">
              <span className="font-mono text-accent">{s.number}.</span> {s.label}
            </a>
          ))}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-accent px-5 py-3 text-accent transition-all hover:bg-accent/10 hover:shadow-[5px_5px_0px_rgba(100,255,218,1)]"
          >
            Resume
          </a>
        </Fade>
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="fixed right-4 top-4 z-50 md:hidden"
      >
        <img className="w-10" src="/menu_icon.png" alt="" />
      </button>

      {/* Mobile drawer */}
      {open && (
        <>
          <div className="fixed inset-0 z-30 bg-navy/60 backdrop-blur-sm md:hidden" onClick={close} />
          <nav className="fixed right-0 top-0 z-40 flex h-screen w-[80%] flex-col items-center justify-center gap-8 bg-navy-light text-xl text-slate-lightest shadow-2xl md:hidden">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={close} className="text-center hover:text-accent">
                <span className="block font-mono text-sm text-accent">{s.number}.</span>
                {s.label}
              </a>
            ))}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-accent px-6 py-3 text-accent transition-all hover:bg-accent/10"
            >
              Resume
            </a>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
