const Navbar = () => {
  return (
    <nav className=" flex  justify-end p-10 bg-[#0A192F] text-[#ccd6f6] text-2xl w-[100%] h-[60px]  ">
        <a  className="hover:text-white p-8" href="#about">01. About</a>
        <a className="hover:text-white p-8" href="#experience">02. Experience  </a>
        <a className="hover:text-white p-8" href="#projects">03. Work</a>
        <a  className="hover:text-white p-8"href="#contact">04. Contact </a>
        <a   className="hover:text-white p-8   " href="http://"> Resume</a>
    </nav>
  )
}

export default Navbar