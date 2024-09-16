import { Slide,Fade } from "react-awesome-reveal";
import Resume from "../assets/resume.pdf"
const Navbar = () => {
  return (
    <Fade cascade damping={1} delay={200}>
    <nav className=" hidden  md:flex md:justify-end  md:space-between  md:mt-2 md:p-5 bg-[#0A192F] md:text-[#ccd6f6] md:text-xl md:w-[100%] ,md:h-[60px]  ">
        <a  className="hover:text-white p-3 " href="#about">01. About</a>
        <a className="hover:text-white p-3" href="#experience">02. Experience  </a>
        <a className="hover:text-white p-3" href="#projects">03. Work</a>
        <a  className="hover:text-white p-3"href="#contact">04. Contact </a>
        <a   className="  p-3 border rounded  text-center  w-[150px] h-[60px]   transition-transform duration-300 transform hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] hover:translate-y-[-2px] hover:translate-x-[-2px]  " href={Resume}> Resume</a>
    </nav>
    </Fade>
  )
}

export default Navbar