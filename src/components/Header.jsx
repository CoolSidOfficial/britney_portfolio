
const Header = (props) => {
  return (
  <header className="text-white font-bold  m-28 ">
 <span className="block text-lg "> Hi, my name is </span>
 <span className="block text-6xl text-[#CCD6F6]">{props.uname}.</span>
 <span className=" block text-6xl text-[#8892B0]">{props.title}.</span>
 <p className=" block p-5">{props.description}</p>
 <a href="https://www.linkedin.com/in/siddhant-jain-coolsidofficial/" className="text-white border  p-4 rounded hover:bg-white hover:text-black "> Check out my Linkedin!</a>
 </header>
  )
}

export default Header