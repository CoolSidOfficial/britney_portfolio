import React from 'react'
import Proj_Comp from './proj_comp'

const Projects = () => {
  return (
    <div  className="m-20" id="projects">
    <div >
      <span className="text-white text-4xl p-2"> 03.</span>
<span className='text-[#CCD6F6]  text-4xl font-semibold'>Some Things I’ve Built</span></div>
<span className=" absolute   rotate-90	  left-[700px] top-[2180px] h-[58%] bg-gray-400 w-[0.5px]"></span>

   <Proj_Comp  side ="rtl" title="Social V" desc="A social media frontend website is built using React, leveraging JavaScript for dynamic content rendering. &nbsp;&nbsp;&nbsp; The application employs state management  with React Router enables seamless navigation" tags={["React Js","CSS ","Npm","Javascript"]} link="https://coolsidofficial.github.io/SocialV/" />
   <Proj_Comp  side ="ltl" title="Py-Keylogger" desc="This  python based keylogger virus is designed to operate undetectably, capturing keystrokes . It logs all user input in real-time and transmits the data to a Go-based file server. and that link is sent to a specified email address" tags={["Python3","Pynput","Smtplib"," Windows OS API"]}  link="https://github.com/CoolSidOfficial/py-keylogger"/>
   <Proj_Comp side="rtl" title="ProofReading-Report-Helper" desc="Report Helper is a CLI tool developed in Python that streamlines proofreading tasks. It handle Excel file operations, it extracts specified questions and maps them to the Ctrl+M key for quick insertion. " tags={["Openpyxl", "Pyperclip","Pynput","PyautoGui"]}  link="https://github.com/CoolSidOfficial/Report_Helper"/>

   {/* <Proj_Comp title="Spotify Profile"/> */}
   {/* <Proj_Comp title="Build a Spotify Connected App"/> */}
   

    </div>
  )
}

export default Projects