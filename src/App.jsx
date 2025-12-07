import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Aboutme from "./components/Aboutme"
import Experience from "./components/Experience"
import { Contact } from "./components/Contact"
import Projects from "./components/Projects"
import Other_Proj from "./components/Other_Proj"
import { Slide,Fade ,Bounce} from "react-awesome-reveal";

const App = () => {

   return (
    <>
      <Navbar />
      <Fade triggerOnce delay={100}>
      <ul className="w-12  fixed bottom-[220px] bg-blend-normal z-30 hidden md:block  ">
        <li className="p-2 "><a href="https://github.com/CoolSidOfficial" target="_blank"><img src="github-mark-white.svg" alt="Github"/></a></li>
        <li className="p-2"><a href="https://www.linkedin.com/in/siddhant-jain-coolsidofficial/" target="_blank"><img src="linkedin-white.png" alt="LinkedIn"/></a></li>
        <li className="p-1  w-18"><a href="https://leetcode.com/u/Sid_Jain_2003/" target="_blank"><img src="leetcode.png" alt="LeetCode"/></a></li>
        <li className="p-2"><a href="https://www.instagram.com/coolsid_30/"><img src="instagram.png"   target="_blank" alt="Instagram"/></a></li>
        <li className="p-2"><a href="https://twitter.com/officialcoolsid/" target="_blank"><img src="x.png" alt="X"/></a></li>

      </ul> 
      <span className="md:fixed md:bottom-[1%] md:left-[25px] md:h-[20%] bg-gray-400 md:w-1"></span>
      {/* // right */}
      
      <a className=" hidden md:block fixed md:fixed bottom-[40vh] md:right-[11vh]  translate-x-[50%] rotate-90 text-lg text-[#8892B0] font-bold z-100" href="mailto:siddhantjainmvm@gmail.com">siddhantjainmvm@gmail.com&nbsp;&nbsp;</a> 
      <span className="  md:fixed  md:bottom-[1vh] md:right-[11vh] md:h-[20%] bg-gray-400 md:w-1"></span>



      <Header uname="Siddhant Jain" title="Turning ideas into impact through Web Dev" description={["I 'm a full-stack web developer with a passion ",<br/>," for creating dynamic and interactive web applications.",<br/>,"I have experience in both front-end and back-end technologies",<br/>,"and I m always eager to learn and implement new skills" ] } />
      </Fade  >
      <Aboutme />
     <Fade delay={250}>

      <Experience />
     </Fade>
     <Fade delay={100} cascade damping={1}>
      <Projects/>
      </Fade>
<Fade triggerOnce cascade  delay={100}>
      <Other_Proj/>

</Fade>
<Fade triggerOnce delay={100}>
      <Contact/>

</Fade>
    </> 
  )

}


export default App
