import React from 'react'

export const Contact = () => {
  return (
    <div  id="contact" className ="flex text-center    flex-col p-5 mt-[200px] ">
    <div className="text-white text-3xl p-2">
        <span className="">04.&nbsp;</span>
        <span className="">What’s Next?</span>
        </div>
        <span className=' font-bold text-[#8892B0] text-5xl p-4'>Get In Touch</span>
        <p className='text-2xl text-[#8892B0] p-3  '>Although I’m not currently looking for any new opportunities, my inbox is always open.<br/> Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
       <a href="https://www.linkedin.com/in/siddhant-jain-coolsidofficial/" className="text-white border p-5  place-self-center  w-60  rounded   transition-transform duration-300 transform hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] hover:translate-y-[-2px] hover:translate-x-[-2px]  mt-10"> Say Hello!</a>
      <span className=' mt-80 text-3xl text-[#8892B0] p-3 hover:text-white'>Designed & Built by Siddhant Jain in React </span>
    </div>

  )
}
