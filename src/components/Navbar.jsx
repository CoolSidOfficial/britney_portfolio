import { Slide,Fade } from "react-awesome-reveal";
import Resume from "../assets/resume.pdf"
import React, {useState} from "react";
const Navbar = () => {
  const [show_nav,update_nav]=useState(false)
  return (
    <>
    <Fade cascade damping={1} delay={200}>

    <nav className=" hidden  md:flex md:justify-end  md:space-between  md:mt-2 md:p-5 bg-[#0A192F] md:text-[#ccd6f6] md:text-xl md:w-[100%] ,md:h-[60px]  ">
        <a  className="hover:text-white p-3 " href="#about">01. About</a>
        <a className="hover:text-white p-3" href="#experience">02. Experience  </a>
        <a className="hover:text-white p-3" href="#projects">03. Work</a>
        <a  className="hover:text-white p-3"href="#contact">04. Contact </a>
        <a  className="hover:text-white p-3"href="https://britneybackend2-production.up.railway.app/admin/">05. Admin </a>
        
        <a   className="  p-3 border rounded  text-center  w-[150px] h-[60px]   transition-transform duration-300 transform hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] hover:translate-y-[-2px] hover:translate-x-[-2px]  " href={Resume}> Resume</a>
    </nav>



    </Fade>

    <a href="#" onClick={()=> update_nav(!show_nav)} >
      <img className="w-24 ml-[70%] md:hidden block"  src="/menu_icon.png" />
      </a>
      

          { show_nav &&
    <nav className="bg-[#112240] h-[100%]  text-[#CCD6F6] w-[80%] z-10 flex flex-col  font-mono font-semibold items-center  text-2xl  fixed right-0 ">
        <a  className="hover:text-white  p-7 " href="#about">01. About</a>
        <a className="hover:text-white p-7" href="#experience">02. Experience  </a>
        <a className="hover:text-white p-7" href="#projects">03. Work</a>
        <a  className="hover:text-white p-7"href="#contact">04. Contact </a>
        <a   className=" p-3 border rounded  text-center  w-[150px] h-[60px]   transition-transform duration-300 transform hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] hover:translate-y-[-2px] hover:translate-x-[-2px]  " href={Resume}> Resume</a>
    </nav>}
    
      </>
  )
}

export default Navbar