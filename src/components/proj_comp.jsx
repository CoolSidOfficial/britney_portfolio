import React from 'react'

const Proj_Comp= (props) => {
  return (
    <div className='md:m-20'> 
    <a   href="" >< img src="demo_project.png" alt="random" className=" hidden md:w-[600px] md: h-[300px] md:rounded-lg md:inline-block md: mt-11  md:brightness-50	  md:transition md:duration-300  md:ease-in-out  md:hover:brightness-100  md:ml-32 md: z-0 " /></a>
    <div  dir={props.side} className=" mt-10 mr-56 md:relative z-1 md:mr-[8px] md:-mt-[280px] md:p-2 ">
      <span className="text-white md:p-2 block">Featured Project</span>
      <a  className=" mr-3 text-[#CCD6F6] md:text-2xl md:font-semibold " href={props.link} target='_blank' >{props.title}</a>
      <p className='text-[#8892B0]  bg-[#112240] w-[490px] rounded h-28  p-4 font-semibold   ' >{props.desc}</p>
       <ul className={" text-[#8892B0] flex " }>
       <li  className='p-2'>{props.tags[0]}</li>
       <li className='p-2'>{props.tags[1]}</li>
       <li className='p-2'>{props.tags[2]}</li>
       <li className='p-2'>{props.tags[3]}</li>
       <li className='p-2'>{props.tags[4]}</li> 
      </ul>
      
    </div>
    </div>
  )
}

export default Proj_Comp