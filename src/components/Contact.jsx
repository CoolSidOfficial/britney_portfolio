import { useState } from "react";
import { EMAIL, sectionNumber, socials } from "../data/site";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); the mailto link still works.
    }
  };

  return (
    <>
      <section id="contact" className="mx-auto max-w-2xl scroll-mt-24 px-6 py-32 text-center">
        <p className="font-mono text-accent">{sectionNumber("contact")}. What’s Next?</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-lightest md:text-6xl">Get In Touch</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate md:text-xl">
          I’m open to full-time roles and interesting projects. Whether you have an opportunity, a
          question, or just want to say hi, my inbox is open.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${EMAIL}?subject=Hello`}
            className="rounded border border-accent px-7 py-4 font-mono text-accent transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(100,255,218,1)]"
          >
            Say hello
          </a>
          <button
            onClick={copyEmail}
            className="rounded border border-slate-muted px-4 py-4 font-mono text-sm text-slate-lightest transition hover:border-accent hover:text-accent"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </div>
      </section>

      <footer className="px-6 pb-8 text-center font-mono text-xs text-slate">
        {/* Social links for mobile, where the side rails are hidden */}
        <ul className="mb-6 flex justify-center gap-5 md:hidden">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="block w-6">
                <img src={s.icon} alt={s.name} />
              </a>
            </li>
          ))}
        </ul>
        <p>Built by Siddhant Jain with React &amp; Tailwind.</p>
        <p className="mt-1">
          Design inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Brittany Chiang
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Contact;
