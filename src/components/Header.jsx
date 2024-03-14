
const Header = (props) => {
  return (
  <header id="about" className="text-white font-bold  m-28 ">
 <span className="block text-2xl "> Hi, my name is </span>
 <span className="block text-8xl text-[#CCD6F6]">{props.uname}.</span>
 <span className=" block text-8xl text-[#8892B0]">{props.title}.</span>
 <p className=" block p-6 text-lg font-semibold text-[#8892B0]">{props.description}</p>
 <a href="https://www.linkedin.com/in/siddhant-jain-coolsidofficial/" className="text-white border absolute left-[130px]   p-6 rounded hover:bg-white hover:text-black  text-xxl"> Check out my Linkedin!</a>
 </header>
  )
}

export default Header