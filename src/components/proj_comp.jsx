import React from 'react'

const Proj_Comp= (props) => {
  return (
    <div className='m-20'> 
    <a  href="" >< img src="demo_project.png" alt="random" className="  w-[600px] h-[300px] rounded-lg inline-block mt-11  ml-32  z-0 " /></a>
    <div  dir={props.side} className=" relative z-1  mr-[8px]  -mt-[280px] p-2 ">
      <span className="text-white p-2 block ">Featured Project</span>
      <a  className="text-[#CCD6F6] text-2xl font-semibold" href="https://github.com" >{props.title}</a>
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