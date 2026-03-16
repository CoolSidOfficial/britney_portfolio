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

              My name is Siddhant Jain. I am a very ambitious person who enjoys
              learning new things and is inherently curious.

              <br /><br />

              I am passionate about understanding how things work, often
              dismantling items to rebuild them and uncover their inner
              workings. I believe in a first principle approach.

              {expanded && (
                <>
                  <br /><br />

                  As I was growing up, my interest in computers deepened.
                  Despite facing challenges due to the high cost of internet
                  access in 2015, I began exploring WiFi security and ethical
                  hacking.

                  <br /><br />

                  Eventually I realized that real skill comes from building
                  tools. I started programming with C++ and created projects
                  like a personal assistant called Jarvis.

                  <br /><br />

                  During COVID lockdown I expanded my curiosity into
                  macroeconomics, geopolitics, history, international relations
                  and business.

                  <br /><br />

                  While I enjoy learning across many disciplines, I continue to
                  specialize deeply in computer science.
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