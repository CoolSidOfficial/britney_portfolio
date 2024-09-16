import { Fade } from "react-awesome-reveal";

const Header = (props) => {
  return (
    <Fade  delay={100}>
  <header id="about" className="text-white md:font-bold   md:m-28 mt-14 ml-8 ">
 <span className= "block text-2xl "> Hi, my name is </span>
 <span className="leading-[2] block text-4xl md:text-8xl text-[#CCD6F6]">{props.uname}.</span>
 <span className="leading-[1] block text-4xl  md:text-8xl text-[#8892B0]">{props.title}.</span>
 <p className=" md:mb-0 mb-20 p-2  mt-5 text-lg block md:p-6 md:text-xl font-semibold text-[#8892B0]">{props.description}</p>
 <a href="https://www.linkedin.com/in/siddhant-jain-coolsidofficial/" className="text-white  border md:absolute md:left-[130px] md:m-0 p-6 md:p-6 rounded transition-transform duration-300 transform hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] hover:translate-y-[-2px] hover:translate-x-[-2px]  md:text-xl"> Check out my Linkedin!</a>
 </header>
 </Fade>
  )
}

export default Header