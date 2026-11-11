import { sectionNumber } from "../data/site";

const SectionHeading = ({ id, children, className = "" }) => (
  <h2
    className={`flex items-baseline gap-3 text-2xl md:text-4xl font-semibold text-slate-lightest ${className}`}
  >
    <span className="font-mono text-xl md:text-3xl text-accent">{sectionNumber(id)}.</span>
    {children}
  </h2>
);

export default SectionHeading;
