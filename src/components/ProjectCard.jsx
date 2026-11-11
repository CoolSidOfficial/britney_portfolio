const ProjectCard = ({ title, desc, tags, github, live, image, reversed = false }) => (
  <article className={`my-20 items-center md:flex md:gap-10 ${reversed ? "md:flex-row-reverse" : ""}`}>
    <a href={live ?? github} target="_blank" rel="noopener noreferrer" className="block md:w-1/2">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        loading="lazy"
        className="w-full rounded-lg brightness-75 transition duration-300 hover:brightness-100"
      />
    </a>

    <div className={`mt-6 md:mt-0 md:w-1/2 ${reversed ? "" : "md:text-right"}`}>
      <p className="font-mono text-sm text-accent">Featured Project</p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-lightest">{title}</h3>
      <p className="mt-4 rounded bg-navy-light p-5 leading-relaxed text-slate shadow-xl">{desc}</p>

      <ul className={`mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-slate ${reversed ? "" : "md:justify-end"}`}>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className={`mt-5 flex gap-6 font-mono ${reversed ? "" : "md:justify-end"}`}>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          GitHub
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-slate-lightest hover:underline">
            Live demo
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
