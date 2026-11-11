import { useState } from "react";
import OtherProjectCard from "./OtherProjectCard";
import { otherProjects, projectCategories } from "../data/projects";

const OtherProjects = () => {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all" ? otherProjects : otherProjects.filter((p) => p.category.includes(category));

  return (
    <section className="px-6 py-24 text-center md:px-20">
      <h2 className="text-3xl font-semibold text-slate-lightest md:text-4xl">Other Noteworthy Projects</h2>
      <a
        className="mt-3 inline-block font-mono text-accent hover:underline"
        href="https://github.com/CoolSidOfficial?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        view the archive
      </a>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {projectCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            aria-pressed={category === cat.key}
            className={`rounded-lg border px-4 py-2 font-mono text-sm transition-all ${
              category === cat.key
                ? "border-accent bg-accent font-bold text-navy"
                : "border-slate-muted text-slate-lightest hover:border-accent hover:text-accent"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((proj) => (
          <OtherProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
