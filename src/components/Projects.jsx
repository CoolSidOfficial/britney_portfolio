import React from "react";
import Proj_Comp from "./proj_comp";

const Projects = () => {

  const projects = [
    {
      side: "left",
      title: "CoolGuide",
      desc: "CoolGuide helps you find the perfect electronics for your needs. It features a recommendation engine, product search, and real-time chat between users.",
      tags: ["Next.js", "FastAPI", "Tailwind", "MongoDB", "Socket.io"],
      github: "https://github.com/CoolSidOfficial/CoolGuide",
      live: "https://coolguide.live",
      image: "/project_images/coolguide.png"
    },

    {
      side: "rtl",
      title: "CoolCounsel",
      desc: "MP DTE college predictor that analyzes previous admission data and recommends suitable engineering colleges and branches for students.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com/CoolSidOfficial/mp-dte-Counsel",
      live: "https://coolcounsel.netlify.app",
      image: "/project_images/coolcounsel.png"
    },

    {
      side: "left",
      title: "CoolForums",
      desc: "A scalable discussion platform supporting topic-based threads, nested replies and real-time updates using WebSockets and Redis pub/sub.",
      tags: ["Next.js", "PostgreSQL", "WebSockets", "Docker"],
      github: "https://github.com/CoolSidOfficial/FORUMS",
      live: "https://forums-self.vercel.app/tabs/categories",
      image: "/project_images/coolforums.png"
    },

    {
      side: "rtl",
      title: "KNNFitSense",
      desc: "Fitness level prediction platform using a K-Nearest Neighbors machine learning model with real-time predictions through a React + Flask stack.",
      tags: ["React", "Flask", "Scikit-learn", "Tailwind"],
      github: "https://github.com/CoolSidOfficial/KNNFitSense",
      live: "https://ml-fitness-sense.vercel.app/",
      image: "/project_images/knnfitsense.png"
    }
  ];

  return (
    <section className="md:m-20 m-6 relative" id="projects">

      {/* Section Title */}
      <div>
        <span className="text-white md:text-4xl text-2xl md:p-2">
          03.
        </span>

        <span className="text-[#CCD6F6] md:text-4xl text-2xl font-semibold">
          Some Things I’ve Built
        </span>
      </div>

      {/* Decorative line */}
      <span className="absolute rotate-90 left-[98%] bottom-[95%] md:left-[55%] md:bottom-[77%] h-[7%] md:h-[40%] bg-gray-400 w-[0.5px]"></span>

      {/* Projects */}
      <div className="mt-10">

        {projects.map((project, index) => (

          <Proj_Comp
            key={index}
            side={project.side}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            github={project.github}
            live={project.live}
            image={project.image}
          />

        ))}

      </div>

    </section>
  );
};

export default Projects;