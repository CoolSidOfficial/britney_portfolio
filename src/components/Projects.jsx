import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/projects";

const Projects = () => (
  <section id="projects" className="scroll-mt-24 px-6 py-24 md:px-20">
    <SectionHeading id="projects">Some Things I’ve Built</SectionHeading>
    <div className="mt-10">
      {featuredProjects.map((project, i) => (
        <ProjectCard key={project.title} {...project} reversed={i % 2 === 1} />
      ))}
    </div>
  </section>
);

export default Projects;
