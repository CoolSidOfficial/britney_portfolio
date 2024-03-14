import React from 'react'
import Other_comp from './Other_comp'
const Other_Proj = () => {
  return (
    <div className="flex-col  mt-[400px] text-center">
        <span className=" text-[#CCD6F6] block text-4xl font-semibold ">Other Noteworthy Projects</span>
        <a  className="text-white  font-semibold  text-lg" href="">view the archive</a>
        <div className=" grid  grid-cols-3 gap-8 m-24	">
        <Other_comp/>
        <Other_comp/>
        <Other_comp/>
        <Other_comp/>
        <Other_comp/>
        <Other_comp/>


        </div>


        
        
         </div>
  )
}

export default Other_Proj