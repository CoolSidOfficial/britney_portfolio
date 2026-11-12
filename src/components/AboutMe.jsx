import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import SectionHeading from "./SectionHeading";
import { books, skills } from "../data/site";

const Highlight = ({ children }) => <span className="text-accent">{children}</span>;

const AboutMe = () => (
  <section id="about" className="scroll-mt-24 px-6 py-24 md:px-20">
    <Fade triggerOnce delay={100}>
      <SectionHeading id="about">About Me</SectionHeading>

      <div className="mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-slate">
        <p>
          I’m a backend-focused software engineer who builds scalable APIs, systems, and real-time
          services. I recently finished my B.Tech in Computer Science at LNCT Bhopal.
        </p>
        <p>
          Right now I’m a Junior Full Stack Engineer at <Highlight>Inboxkit</Highlight>. Before
          that I interned as a software engineer at <Highlight>Wyreflow Technologies</Highlight>,
          shipping production features for Hireshala, a jobs and internships platform, with a focus
          on authentication and session handling: JWT access and refresh tokens, HTTP-only cookies,
          and automatic session renewal. I’ve also done bug bounty work on{" "}
          <Highlight>HackerOne</Highlight>, reporting vulnerabilities to companies like Visa,
          Instacart, and MercadoLibre.
        </p>
        <p>
          Before that I was the founding engineer behind <Highlight>CoolGuide</Highlight>, a
          KNN-based electronics recommendation platform, and <Highlight>CoolForums</Highlight>, a
          real-time discussion platform. I owned both end to end, from architecture to deployment.
          At <Highlight>AICTE IDEALab</Highlight> I built a platform used by 4,000+ students.
        </p>
        <p>I’m most at home on backend-heavy systems that need to be fast, reliable, and secure.</p>

        <p className="pt-4">Technologies I’ve been working with recently:</p>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 font-mono text-sm sm:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill} className="flex gap-3">
              <span className="text-accent">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Fade>

    {/* Books */}
    <h3 className="mb-8 mt-24 text-center font-mono text-xl font-semibold text-slate md:text-2xl">
      Books that shaped my thinking
    </h3>
    <Marquee speed={20} pauseOnHover>
      {books.map((b) => (
        <img
          key={b.title}
          src={b.image}
          alt={b.title}
          title={b.title}
          loading="lazy"
          className="mx-3 h-48 w-auto rounded md:h-56"
        />
      ))}
    </Marquee>
  </section>
);

export default AboutMe;
