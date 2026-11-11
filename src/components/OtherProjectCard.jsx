const OtherProjectCard = ({ title, desc, stack, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-full flex-col rounded bg-navy-light p-7 shadow-lg transition-transform hover:-translate-y-2"
  >
    <div className="flex items-center justify-between">
      <img className="w-10" src="/sj.svg" alt="" />
      <img className="w-7" src="/icons8-external-link.svg" alt="" />
    </div>

    <h3 className="mt-7 text-xl font-semibold text-slate-lightest transition-colors group-hover:text-accent">
      {title}
    </h3>
    <p className="mt-3 flex-1 leading-relaxed text-slate">{desc}</p>

    <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-slate-light">
      {stack.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  </a>
);

export default OtherProjectCard;
