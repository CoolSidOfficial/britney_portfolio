import { Fragment, useState } from "react";
import SectionHeading from "./SectionHeading";
import { certificates } from "../data/certificates";

const INITIAL_COUNT = 5;

const journey = [
  ...certificates,
  { year: "2026", title: "📚 Still Learning...", issuer: "Every certificate marks another milestone." },
];

const CertificateJourney = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? journey : journey.slice(0, INITIAL_COUNT);

  return (
    <section id="certificates" className="scroll-mt-24 px-6 py-24 md:px-20">
      <SectionHeading id="certificates">Certificate Journey</SectionHeading>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate">
        Every certificate represents another milestone in my journey as a software engineer. From
        my first programming course to cloud computing, databases, machine learning and AI, every
        step reflects my passion for continuous learning.
      </p>

      <div className="mx-auto mt-16 flex w-full max-w-3xl flex-col items-center">
        {shown.map((cert, index) => (
          <Fragment key={cert.title}>
            <div className="flex w-full flex-col items-center text-center">
              <span className="font-mono text-3xl font-bold text-accent md:text-4xl">{cert.year}</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-lightest md:text-3xl">{cert.title}</h3>
              <p className="mt-3 text-lg text-slate">{cert.issuer}</p>
              {cert.image && (
                <a
                  href={cert.link ?? cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate, ${cert.issuer}`}
                    loading="lazy"
                    className="w-full rounded-xl border border-slate-muted shadow-2xl transition duration-500 hover:scale-[1.02] hover:border-accent"
                  />
                </a>
              )}
            </div>

            {index !== shown.length - 1 && (
              <div className="my-14 flex flex-col items-center" aria-hidden="true">
                <div className="h-20 w-0.5 bg-accent/40" />
                <div className="animate-bounce text-4xl text-accent">↓</div>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-md border border-accent px-8 py-3 text-accent transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent/10 hover:shadow-[6px_6px_0px_rgba(100,255,218,1)]"
        >
          {showAll ? "↑ Collapse Journey" : "↓ Continue My Journey"}
        </button>
      </div>
    </section>
  );
};

export default CertificateJourney;
