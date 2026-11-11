import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data/experience";

const Experience = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const exp = experiences.find((e) => e.id === activeId);

  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24 md:px-20">
      <SectionHeading id="experience" className="mb-14">Where I’ve Worked</SectionHeading>

      <div className="flex flex-col gap-10 md:flex-row">
        {/* Tabs */}
        <div
          role="tablist"
          className="flex overflow-x-auto border-b border-slate-muted md:flex-col md:overflow-visible md:border-b-0 md:border-l"
        >
          {experiences.map((e) => (
            <button
              key={e.id}
              role="tab"
              aria-selected={activeId === e.id}
              onClick={() => setActiveId(e.id)}
              className={`whitespace-nowrap px-6 py-3 text-left font-mono text-sm transition-all md:w-72 ${
                activeId === e.id
                  ? "border-b-2 border-accent bg-navy-light text-accent md:-ml-px md:border-b-0 md:border-l-2"
                  : "text-slate hover:bg-navy-light hover:text-accent"
              }`}
            >
              {e.company}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div key={exp.id} role="tabpanel" className="flex-1 animate-fadeIn space-y-4">
          <h3 className="text-xl font-semibold text-slate-lightest md:text-2xl">
            {exp.role} <span className="text-accent">@ {exp.company}</span>
          </h3>
          <p className="font-mono text-sm text-slate">{exp.date}</p>

          <ul className="mt-4 space-y-3">
            {exp.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 text-accent">▹</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {exp.tech.map((t) => (
              <span key={t} className="rounded-full bg-navy-light px-3 py-1 font-mono text-xs text-accent">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
