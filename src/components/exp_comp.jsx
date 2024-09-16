import React from 'react'

const Exp_comp = (props) => {
  return (
    <div className='m-4'>
        <span className="text-[#CCD6F6] font-semibold text-lg md:text-2xl p-1 block">{props.title}</span>
        <span className='text-[#8892B0]   font-semibold   text-xl '>{props.dateto}</span>
       <p className='text-[#8892B0] p-5 text-lg font-semibold  before:content-["▹"] before:text-white '>{props.first_para}</p>
       <p   className='text-[#8892B0] p-5 text-lg   font-semibold before:content-["▹"]  before:text-white '>{props.second_para}</p>
       <p className='text-[#8892B0] p-5 text-lg   font-semibold before:content-["▹"]  before:text-white '>{props.third_para}</p>
       <p className='text-[#8892B0]  p-5 text-lg  font-semibold  before:content-["▹"]  before:text-white '>{props.fourth_para}</p>

    </div>
  )
}

export default Exp_comp