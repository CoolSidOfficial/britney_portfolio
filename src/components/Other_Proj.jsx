import React from 'react'
import Other_comp from './Other_comp'
const Other_Proj = () => {
  return (
    <div className="flex-col  mt-[200px] text-center">
        <span className=" text-[#CCD6F6] block text-4xl font-semibold ">Other Noteworthy Projects</span>
        <a  className="text-white  font-semibold  text-lg" href="https://github.com/CoolSidOfficial?tab=repositories " target='_blank'>view the archive</a>
        <div className=" grid  grid-cols-3 gap-7 m-28 	">
        <Other_comp  title="ImageLoc" desc="This Python-based Telegram bot extracts GPS coordinates of a image , from it's meta data"/>
        <Other_comp title="EasyAircrack"  desc="This Python-based script automate wifi hacking ,this script is made for debian based Operating Sytems"/>
        <Other_comp title="FIQUA " desc="Our fish-selling website frontend, built with HTML5, CSS3, and JavaScript,  Responsive design techniques make it accessible on all devices "/>
        <Other_comp title="Text-Bin" desc="Our python  django  website offers a seamless solution for converting binary data back into text format  "/>
        <Other_comp title="Jfile-Arrangner" desc="Our Java file arranger simplifies offline file organization for various file types. It's a lightweight, user-friendly tool that helps you tidy up your files"/>
        <Other_comp title="GUI-Calc" desc="Our Python GUI calculator provides a simple yet efficient interface for performing basic arithmetic operations. Built with Tkinter, it's a lightweight tool perfect for quick calculations on the go."/>


        </div>


        
        
         </div>
  )
}

export default Other_Proj