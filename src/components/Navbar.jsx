const Navbar = () => {
  return (
    <nav className=" flex    justify-end  bg-[#0A192F] text-[#49B9A7] w-screen h-[60px] text-lgxl ">
        <a  className="hover:text-white p-4" href="http://">01. About</a>
        <a className="hover:text-white p-4" href="http://">02. Exprience </a>
        <a className="hover:text-white p-4" href="http://">03. Work</a>
        <a  className="hover:text-white p-4"href="http://">04. Contact </a>
        <a   className="hover:text-white p-4  border    " href="http://"> Resume</a>
    </nav>
  )
}

export default Navbar