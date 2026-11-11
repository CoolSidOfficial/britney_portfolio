import { Fade } from "react-awesome-reveal";
import Navbar from "./components/Navbar";
import SideRails from "./components/SideRails";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import CertificateJourney from "./components/CertificateJourney";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

const App = () => (
  <>
    <Navbar />
    <SideRails />

    <main className="mx-auto max-w-7xl">
      <Header />
      <AboutMe />
      <Fade triggerOnce delay={100}>
        <CertificateJourney />
        <Experience />
      </Fade>
      <Fade triggerOnce delay={100}>
        <Projects />
        <OtherProjects />
      </Fade>
      <Fade triggerOnce delay={100}>
        <Writing />
        <Contact />
      </Fade>
    </main>
  </>
);

export default App;
