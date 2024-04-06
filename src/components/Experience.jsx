import React,{useState} from 'react'
import Exp_comp from './exp_comp'
import {useRef,useEffect} from 'react'
const Experience = () => {
   const[experience,setExperience]=useState(1)

  return (
    <>
    <div  id ="experience" className='font-bold text-[#CCD6F6] text-4xl m-12 ms-[4rem]'>
        <span>
            02.
        </span>
        <span>Where I’ve Worked</span>

    </div>
      <span className=" absolute   rotate-90	  left-[48%] top-[1691px] h-[58%] bg-gray-400 w-[0.5px]"></span>
    <div className='flex m-28'>
    <span className=" absolute  	  left-[8%] top-[1997px] h-[49%] w-[4px] bg-gray-400 "></span>

      <ul className="  text-2xl text-[#8892B0] ">
        <li><button className ="experience-button hover:bg-[#112240] focus:bg-[#112240] p-4 w-52" onClick={()=>setExperience(1)}  >Upstament</button></li>
        <li><button className="experience-button  hover:bg-[#112240] p-4 w-52  focus:bg-[#112240] " onClick={()=>setExperience(2)}>Apple</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  focus:bg-[#112240]" onClick={()=>setExperience(3)}>Scout Studio</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  focus:bg-[#112240]" onClick={()=>setExperience(4)}>Starry</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  focus:bg-[#112240]" onClick={()=>setExperience(5)}>MullenLowe</button></li>
      </ul> 
        <div>
          {experience===1 &&
           <Exp_comp title="Lead Engineer @ Upstatement" dateto="May 2018 - Present"
           first_para="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more" 
           second_para="Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements"
           third_para="Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders"
           fourth_para="Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship
           "
           />}
           {experience===2 &&
           <Exp_comp title="UI Engineer Co-op @ Apple
           " dateto="July - December 2017"
           first_para="Developed and styled interactive web applications for Apple Music using Ember and SCSS"
           second_para="Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations" 
           third_para="Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback"
           fourth_para="Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications"
           />}
            {experience===3 && <Exp_comp title="Developer @ Scout Studio" dateto="Spring 2016 & 2017"
           first_para="Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community"
         second_para="Developed and styled interactive web applications for Apple Music using Ember and SCSS"
      third_para="Worked on the development of a new website, improving its performance and user experience"
      fourth_para="Participated in brainstorming sessions and contributed innovative ideas for new features and improvements"
        />}
          {experience===4&&<Exp_comp title="Software Engineer Co-op @ Starry
         " dateto="July - December 2016"
         first_para="Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS"
            second_para="Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements"
           third_para="Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders"
           fourth_para="Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
       />}
          {experience===5&&<Exp_comp title="Creative Technologist Co-op @ MullenLowe
" dateto="July - December 2015"
           first_para="Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery"
          second_para="Worked alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements"
          third_para="Collaborated with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders"
         fourth_para="Provided leadership within engineering department through close collaboration, knowledge shares, and mentorship"
         />}
  </div>
     
    </div>
    </>
    
  )
}

export default Experience