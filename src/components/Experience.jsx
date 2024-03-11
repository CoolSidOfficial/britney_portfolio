import React from 'react'
import { useState } from 'react'
const exp1=""
const exp2=""
const exp3=""
const exp4=""
const exp5="" 
const Experience = () => {
   const[experience,setExperience]=useState('true')
  return (
    <>
    <div className='font-bold text-[#8892B0] text-5xl m-12'>
        <span>
            02.
        </span>
        <span>Where I’ve Worked</span>

    </div>
      <span className=" absolute   rotate-90	  left-[55%] top-[1332px] h-[58%] bg-gray-400 w-[0.5px]"></span>
    <div className='flex m-28'>
    <span className=" absolute  	  left-[8%] top-[1649px] h-[49%] w-[4px] bg-gray-400 "></span>

      <ul className="  text-2xl text-[#8892B0] ">
        <li><button className ="experience-button hover:bg-[#112240] active:bg-[#112240] p-4 w-52" >Upstament</button></li>
        <li><button className="experience-button  hover:bg-[#112240] p-4 w-52  active:bg-[#112240]">Apple</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  active:bg-[#112240]">Scout Studio</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  active:bg-[#112240]">Starry</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  active:bg-[#112240]">MullenLowe</button></li>
      </ul> 
        <div>
      <span className='text-white text-4xl p-10 hidden '>Lead Engineer @ Upstatement</span> 
      
        </div>

    </div>
    </>
    
  )
}

export default Experience