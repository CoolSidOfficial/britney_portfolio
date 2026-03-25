import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "AICTE IDEALab",
    role: "Full Stack Developer Intern",
    date: "Sep 2023 – April 2024",
    points: [
      "Engineered a scalable full-stack platform using Next.js serving 4000+ students, improving usability and streamlining workflows.",
      "Implemented secure admin workflows with JWT authentication and CSRF protection.",
      "Built dynamic content modules (image gallery system) to improve engagement and content discoverability.",
      "Optimized backend APIs using Node.js and MongoDB Atlas for production-level performance.",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind"],
  },
  {
    id: 2,
    company: "KLIC Kalchuri Incubation Center",
    role: "Frontend Developer Intern",
    date: "Apr 2023 – Oct 2023",
    points: [
      "Delivered 5+ production-ready web applications using React, improving UI consistency.",
      "Implemented fully responsive designs across devices (mobile + desktop).",
      "Built dashboard-style applications using MERN stack architecture.",
      "Collaborated with Apeiro Medica team in a startup environment under tight deadlines.",
    ],
    tech: ["React", "MERN", "Tailwind", "JavaScript"],
  },
  {
    id: 3,
    company: "Freelance",
    role: "Full Stack Developer",
    date: "May 2022 – Mar 2023",
    points: [
      "Developed full-stack applications including dashboards, automation tools, and client websites.",
      "Designed scalable architectures using React, Node.js, Express, and MongoDB.",
      "Integrated REST APIs and optimized performance for low-latency experiences.",
      "Handled complete client lifecycle from requirements to deployment.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

const Experience = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="experience" className="text-[#CCD6F6] mt-32 px-6 md:px-20">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        <span className="text-[#64FFDA] mr-2">02.</span>
        Where I’ve Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* LEFT SIDE (Tabs) */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-gray-600">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActive(exp.id)}
              className={`px-6 py-3 text-left whitespace-nowrap md:w-60 transition-all duration-300
                ${
                  active === exp.id
                    ? "bg-[#112240] text-[#64FFDA] border-b-2 md:border-b-0 md:border-l-4 border-[#64FFDA]"
                    : "text-[#8892B0] hover:bg-[#112240]"
                }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE (Content) */}
        <div className="flex-1">
          {experiences
            .filter((exp) => exp.id === active)
            .map((exp) => (
              <div key={exp.id} className="space-y-4 animate-fadeIn">
                
                <h3 className="text-xl md:text-2xl font-semibold">
                  {exp.role}{" "}
                  <span className="text-[#64FFDA]">@ {exp.company}</span>
                </h3>

                <p className="text-sm text-[#8892B0]">{exp.date}</p>

                <ul className="mt-4 space-y-3">
                  {exp.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-[#8892B0]"
                    >
                      <span className="text-[#64FFDA] mt-1">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#112240] px-3 py-1 rounded-full text-[#64FFDA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;