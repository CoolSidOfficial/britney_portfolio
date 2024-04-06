import { Fade } from "react-awesome-reveal";

const Header = (props) => {
  return (
    <Fade  delay={100}>
  <header id="about" className="text-white font-bold  m-28 ">
 <span className="block text-2xl "> Hi, my name is </span>
 <span className="block text-8xl text-[#CCD6F6]">{props.uname}.</span>
 <span className=" block text-8xl text-[#8892B0]">{props.title}.</span>
 <p className=" block p-6 text-xl font-semibold text-[#8892B0]">{props.description}</p>
 <a href="https://www.linkedin.com/in/siddhant-jain-coolsidofficial/" className="text-white border absolute left-[130px]   p-6 rounded  transition-transform duration-300 transform hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] hover:translate-y-[-2px] hover:translate-x-[-2px]   text-xxl"> Check out my Linkedin!</a>
 </header>
 </Fade>
  )
}

export default Header