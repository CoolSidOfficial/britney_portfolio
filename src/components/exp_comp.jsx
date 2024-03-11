import React from 'react'

const Exp_comp = (props) => {
  return (
    <div>
        <span className="text-white text-4xl p-1 block">{props.title}</span>
        <span className='text-white text-2xl '>{props.dateto}</span>
       <p>{props.first_para}</p>
       <p>{props.second_para}</p>
       <p>{props.third_para}</p>
       <p>{props.fourth_para}</p>

    </div>
  )
}

export default Exp_comp