const Navbar = () => {
  return (
    <nav className=" flex  justify-end  space-between  mt-2 p-5 bg-[#0A192F] text-[#ccd6f6] text-xl w-[100%] h-[60px]  ">
        <a  className="hover:text-white p-3 " href="#about">01. About</a>
        <a className="hover:text-white p-3" href="#experience">02. Experience  </a>
        <a className="hover:text-white p-3" href="#projects">03. Work</a>
        <a  className="hover:text-white p-3"href="#contact">04. Contact </a>
        <a   className="  p-3 border rounded  text-center  w-[150px] h-[60px]   transition-transform duration-300 transform hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] hover:translate-y-[-2px] hover:translate-x-[-2px]  " href="http://"> Resume</a>
    </nav>
  )
}

export default Navbar