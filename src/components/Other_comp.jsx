import React from 'react'

const Other_comp = () => {
  return (
    <>
    <div className='bg-[#112240] w-[350px] rounded  h-[380px]  p-5 '>

       <div className="flex  space-x-52">

        <img className="w-14" src="folder.png "></img>
          <a href="">  <img className="w-10 h-7 m-" src="link.png "></img></a>
       </div>

        <span className=" text-[#CCD6F6] p-1 font-semibold text-xl">Integrating Algolia Search<br/> with WordPress Multisite</span>
        <p className='p-2 text-[#A1ACCB] font-semibold'>Building  a custom multisite <br/>compaitable Wordpress Plugin <br/>  to build  global search with Algoia </p>
       
       <span className=" text-[#354462] hover:text-white">Algoria</span>
       <span className="p-2  text-[#354462]  hover:text-white">Wordpress</span>
       <span className="p-2 text-[#354462] text-lg  hover:text-white">PHP</span>

    </div>
    </>
  )
}

export default Other_comp
