import React from 'react'
import Proj_Comp from './proj_comp'

const Projects = () => {
  return (
    <div  className="m-20" id="projects">
    <div >
      <span className="text-white text-4xl p-2"> 03.</span>
<span className='text-[#CCD6F6]  text-4xl font-semibold'>Some Things I’ve Built</span></div>
<span className=" absolute   rotate-90	  left-[700px] top-[2180px] h-[58%] bg-gray-400 w-[0.5px]"></span>

   <Proj_Comp  side ="rtl" title="Halcyon theme" desc="A minimal, dark blue theme for VS Code, Sublime Text, &nbsp;&nbsp;&nbsp;Atom,iTerm, and more. Available on Visual Studio &nbsp;&nbsp;&nbsp;&nbsp; Marketplace, Package Control, Atom Package Manager" tags={["VsCode","Sublime Text","Atom","iTerm"]} />
   <Proj_Comp  side ="ltl" title="Halcyon theme" desc="A minimal, dark blue theme for VS Code, Sublime Text, &nbsp;&nbsp;&nbsp;Atom,iTerm, and more. Available on Visual Studio &nbsp;&nbsp;&nbsp;&nbsp; Marketplace, Package Control, Atom Package Manager" tags={["VsCode","Sublime Text","Atom","iTerm"]} />
   <Proj_Comp side="rtl" title="Halcyon theme" desc="A minimal, dark blue theme for VS Code, Sublime Text, &nbsp;&nbsp;&nbsp;Atom,iTerm, and more. Available on Visual Studio &nbsp;&nbsp;&nbsp;&nbsp; Marketplace, Package Control, Atom Package Manager" tags={["VsCode","Sublime Text","Atom","iTerm"]} />

   {/* <Proj_Comp title="Spotify Profile"/> */}
   {/* <Proj_Comp title="Build a Spotify Connected App"/> */}
   

    </div>
  )
}

export default Projects