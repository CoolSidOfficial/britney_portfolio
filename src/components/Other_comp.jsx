import React from 'react'

const Other_comp = (props) => {
  return (
    <>
    <div className='bg-[#112240] w-[350px] rounded p-8 h-[380px]    transition-transform transform hover:-translate-y-4 '>

       <div className="flex  space-x-52">

        <img className="w-12" src="sj.svg "></img>
          <a href="">  <img className="w-12 h-10 text-white " src="icons8-external-link.svg "></img></a>
       </div>
<div className='mt-8'>

        <span className="p-2  text-[#CCD6F6] font-semibold text-xl   ">{props.title}</span>
        <p className=' p-2 mt-3 text-[#A1ACCB] font-semibold'>{props.desc} </p>
       
       <span className=" text-[#354462] hover:text-white">Javascript</span>
       <span className=" p-4 text-[#354462]  hover:text-white">Wordpress</span>
       <span className=" text-[#354462] text-lg  hover:text-white">PHP</span>
</div>

    </div>
    </>
  )
}

export default Other_comp
