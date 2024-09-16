import React from 'react'

function Mob_Proj_Comp(props) {
  return (
    <div className='flex flex-col w-86 bg-[#112240] mt-12 h-96   p-6  '>
        <div className='text-white text-xl '>Featured Project</div>
        <div className=' text-2xl text-white '>{props.title}</div>
        <div className=' text-white p-5'>{props.desc}</div>
        <div className=' text-white flex space-x-5'>
          <span>{props.tags[0]}</span> 
        <span>{props.tags[1]}</span>
        <span>
          {props.tags[2]}
        </span>
        <span>{props.tags[3]}</span>
        <span>{props.tags[4]}</span>
        <span></span></div>
        <div>
            <span></span>
            <span>
                </span>
                </div>

    </div>
  )
}

export default Mob_Proj_Comp