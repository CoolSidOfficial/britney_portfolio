import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Aboutme from "./components/Aboutme"
const App = () => {
  return (
    <>
    <Navbar/>
    {/* <hr/> */}
    {/* <ul>
      <li><img src="" alt="" /></li>
      <li><img src="" alt="" /></li>
      <li><img src="" alt="" /></li>
      <li><img src="" alt="" /></li>
      <li><img src="" alt="" /></li>
      b

    </ul> */}
    <a className="fixed   bottom-[50%]  left-[87%] rotate-90 text-white font-bold" href="mailto:cooltech@protonmail.com">cooltech@protonmail.com</a>
    <span className=""></span>
    <Header  uname="Siddhant Jain" title="I built things for the web" description="I love creating new stuff ,to provide value to other people"  />
<Aboutme/>
    </>
  )

}


export default App
