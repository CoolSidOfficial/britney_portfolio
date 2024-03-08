const Navbar = () => {
  return (
    <nav className=" flex  justify-end p-10 bg-[#0A192F] text-[#ccd6f6] text-2xl w-[100%] h-[60px] text-lgxl ">
        <a  className="hover:text-white p-8" href="http://">01. About</a>
        <a className="hover:text-white p-8" href="http://">02. Exprience </a>
        <a className="hover:text-white p-8" href="http://">03. Work</a>
        <a  className="hover:text-white p-8"href="http://">04. Contact </a>
        <a   className="hover:text-white p-8  border    " href="http://"> Resume</a>
    </nav>
  )
}

export default Navbar