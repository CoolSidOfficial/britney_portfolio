import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Aboutme from "./components/Aboutme"
import G_logo from "./assets/github-mark.svg"
import L_logo from "./assets/linkedin.svg"
const App = () => {
  return (
    <>
      <Navbar/>
      <ul className="w-12  fixed bottom-[220px] bg-blend-normal   ">
        <li className="p-2   	"><a href="https://github.com/CoolSidOfficial"><img src="github-mark-white.svg" alt="Github"/></a></li>
        <li className="p-2"><a href="https://www.linkedin.com/in/siddhant-jain-coolsidofficial/"><img src="linkedin-white.png" alt="LinkedIn"/></a></li>
        <li className="p-1  w-20"><a href="https://leetcode.com/CoolSidOfficial/"><img src="leetcode.png" alt="LeetCode"/></a></li>
        <li className="p-2"><a href="https://www.instagram.com/"><img src="instagram.png" alt="Instagram"/></a></li>
        <li className="p-2"><a href=""><img src="x.png" alt="X"/></a></li>

      </ul> 
      <span className="fixed bottom-[1%] left-[25px] h-[28%] bg-gray-400 w-1"></span>

      <a className="fixed bottom-[45%] left-[87%] rotate-90 text-lg text-[#8892B0] font-bold" href="mailto:cooltech@protonmail.com">cooltech@protonmail.com&nbsp;&nbsp;</a>
      <span className="fixed bottom-[1%] right-[56px] h-[26%] bg-gray-400 w-1"></span>
      <Header uname="Siddhant Jain" title="I built things for the &nbsp;&nbsp;&nbsp;&nbsp; web" description={["I 'm a full-stack web developer with a passion ",<br/>," for creating dynamic and interactive web applications.",<br/>,"I have experience in both front-end and back-end technologies",<br/>,"and I m always eager to learn and implement new skills" ] } />
      <Aboutme/>
    </> 
  )

}


export default App
