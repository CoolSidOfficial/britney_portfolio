import { EMAIL, socials } from "../data/site";

// Fixed social links (left) and email (right), desktop only.
const SideRails = () => (
  <>
    <div className="hidden md:flex fixed bottom-0 left-6 z-30 flex-col items-center gap-2">
      <ul className="flex flex-col items-center gap-3">
        {socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="block w-8 p-1 opacity-80 transition hover:-translate-y-1 hover:opacity-100"
            >
              <img src={s.icon} alt={s.name} />
            </a>
          </li>
        ))}
      </ul>
      <span className="mt-2 h-24 w-px bg-slate-light" />
    </div>

    <div className="hidden md:flex fixed bottom-0 right-6 z-30 flex-col items-center gap-6">
      <a
        href={`mailto:${EMAIL}`}
        className="font-mono text-sm tracking-widest text-slate-light transition hover:-translate-y-1 hover:text-accent [writing-mode:vertical-rl]"
      >
        {EMAIL}
      </a>
      <span className="h-24 w-px bg-slate-light" />
    </div>
  </>
);

export default SideRails;
