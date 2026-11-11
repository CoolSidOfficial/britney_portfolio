import { Fade } from "react-awesome-reveal";
import Resume from "../assets/resume.pdf";

const Header = () => (
  <header className="flex min-h-[85vh] flex-col justify-center px-6 py-20 md:px-28">
    <Fade cascade damping={0.15} triggerOnce>
      <p className="mb-4 font-mono text-accent md:text-lg">Hi, my name is</p>
      <h1 className="text-4xl font-bold text-slate-lightest md:text-7xl">Siddhant Jain.</h1>
      <p className="mt-3 text-3xl font-bold leading-tight text-slate md:text-6xl">
        I turn ideas into impact through software.
      </p>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
        I’m a backend software engineer building scalable APIs, systems, and real-time services.
        Currently a Software Development Engineer Intern at Wyreflow Technologies, working on
        Hireshala with Node.js, Next.js, and MongoDB.
      </p>
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded border border-accent px-7 py-4 font-mono text-accent transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(100,255,218,1)]"
        >
          See my work
        </a>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-slate px-7 py-4 font-mono text-slate-lightest transition-colors hover:border-accent hover:text-accent"
        >
          Résumé
        </a>
      </div>
    </Fade>
  </header>
);

export default Header;
