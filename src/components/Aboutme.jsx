import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const skills = {
  "Frontend": [
    "React", "Next.js", "React Native",
    "TailwindCSS", "HTML5", "CSS3",
    "JavaScript", "TypeScript"
  ],

  "Backend": [
    "Node.js", "Express.js", "FastAPI",
    "Django", "REST APIs", "GraphQL",
    "JWT", "Middleware"
  ],

  "Languages": [
    "JavaScript", "TypeScript", "Python", "Java", "C++"
  ],

  "Databases": [
    "MongoDB", "PostgreSQL", "Redis"
  ],

  "Machine Learning": [
    "Scikit-Learn", "Pandas",
    "NumPy", "Matplotlib"
  ],

  "DevOps": [
    "Docker", "Nginx", "Azure",
    "Linux", "WebSockets"
  ],

  "Security": [
    "Burp Suite", "SQLmap",
    "Nmap", "OWASP ZAP"
  ]
};

const Aboutme = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="md:relative">

      <Fade triggerOnce delay={100}>

        <span className="text-[#C1CAEB] text-2xl md:text-5xl md:m-12 m-4 font-bold md:inline">
          01. About Me
        </span>

        <div className="m-4 flex md:m-24 flex-col md:flex-row text-white gap-16">

          {/* BIO */}
          <div className="text-[#818CA9] font-semibold md:text-xl text-lg md:w-[550px]">

            <div>

              Hey, thanks for taking the time — here’s a quick overview of what I’ve been building.

              <br /><br />

              I’m a 22-year-old full-stack developer based in India, focused on building end-to-end systems where backend, data, and machine learning come together in production.

              <br /><br />

              I’ve worked on real-world platforms used by 4000+ students during my time at AICTE IDEALAB, where I focused on improving backend performance, building scalable systems, and ensuring reliability under real usage.

              {expanded && (
                <>
                  <br /><br />

                  Most of my work revolves around solving decision-making and information-overload problems.

                  <br /><br />

                  One of my key projects is CoolGuide, where I built a system to help users decide what electronics to buy based on their needs. The core problem I addressed was decision overload — too many options, not enough clarity. I designed a system that structures product data, ranks options, and delivers relevant recommendations through clean APIs and a user-friendly interface.

                  <br /><br />

                  Then there’s CoolCounsel, which focuses on personalized guidance. Here, I built systems that adapt based on user input by transforming preferences into structured decisions through well-defined data flow and logic.

                  <br /><br />

                  I also built CoolForums, a community-driven platform designed to handle user-generated content at scale, with a focus on backend efficiency, data consistency, and responsiveness.

                  <br /><br />

                  On the ML side, I implemented a KNN-based recommendation system as part of a real-time pipeline, handling data preprocessing, similarity computation, and low-latency API serving.

                  <br /><br />

                  Across these projects, I’ve worked end-to-end with React, Next.js, Node.js, Python, databases, Docker, and Nginx, focusing on building scalable and production-ready systems.

                  <br /><br />

                  I enjoy working on backend-heavy, data-driven systems where performance and intelligent decision-making matter.

                  <br /><br />

                  Looking forward to discussing this further.
                </>
              )}

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 text-[#64FFDA] font-bold hover:underline"
              >
                {expanded ? "Read Less ↑" : "Read More ↓"}
              </button>

            </div>

          </div>

          {/* TECH STACK */}
          <div className="md:w-[600px] space-y-8">

            {Object.entries(skills).map(([category, items]) => (

              <div key={category}>

                <h3 className="text-gray-400 text-lg mb-3">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">

                  {items.map((skill, index) => (

                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-md bg-[#112240] text-[#CCD6F6] hover:bg-[#1c355a] transition"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </Fade>

      {/* BOOKS */}
      <div className="text-center text-[#76829E] font-mono m-10 font-semibold text-4xl">
        Pages I've Turned And Words That Shaped Me
      </div>

      <Marquee className="bg-[#0A192F]" speed={20}>

        <img src="/books_images/rework.jpg" className="w-64" />
        <img src="/books_images/elonmusk.jpg" className="w-64" />
        <img src="/books_images/psychology.jpg" className="w-64" />
        <img src="/books_images/thepersonalmba.jpg" className="w-64" />
        <img src="/books_images/zerotoone.jpg" className="w-64" />
        <img src="/books_images/lawsofpower.jpg" className="w-72" />
        <img src="/books_images/richdad.jpg" className="w-72" />
        <img src="/books_images/emythrevised.jpg" className="w-64" />
        <img src="/books_images/whomoved.jpg" className="w-64" />

      </Marquee>

    </div>
  );
};

export default Aboutme;