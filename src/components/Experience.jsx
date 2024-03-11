import React,{useState} from 'react'
import Exp_comp from './exp_comp'
const Experience = () => {
   const[experience,setExperience]=useState(1)
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
        <li><button className ="experience-button hover:bg-[#112240] active:bg-[#112240] p-4 w-52" onClick={()=>setExperience(1)}  >Upstament</button></li>
        <li><button className="experience-button  hover:bg-[#112240] p-4 w-52  active:bg-[#112240] " onClick={()=>setExperience(2)}>Apple</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  active:bg-[#112240]" onClick={()=>setExperience(3)}>Scout Studio</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  active:bg-[#112240]" onClick={()=>setExperience(4)}>Starry</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  active:bg-[#112240]" onClick={()=>setExperience(5)}>MullenLowe</button></li>
      </ul> 
        <div>
          {experience===1 &&
           <Exp_comp title="Lead Engineer @ Upstatement" dateto="May 2018 - Present"
           first_para="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more" />}
           {experience===2 &&
           <Exp_comp title="UI Engineer Co-op @ Apple
           " dateto="July - December 2017"
           first_para="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more" />}
            {experience===3 && <Exp_comp title="Developer @ Scout Studio" dateto="Spring 2016 & 2017"
           first_para="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more" />}
          {experience===4&&<Exp_comp title="Software Engineer Co-op @ Starry
         " dateto="July - December 2016"
           first_para="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more" />}
          {experience===5&&<Exp_comp title="Creative Technologist Co-op @ MullenLowe
" dateto="July - December 2015"
           first_para="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more" />}
  </div>
     
    </div>
    </>
    
  )
}

export default Experience