import React,{useState} from 'react'
import Exp_comp from './exp_comp'
import {useRef,useEffect} from 'react'
const Experience = () => {
   const[experience,setExperience]=useState(1)

  return (
    <>
    <div  id ="experience" className='  font-bold text-[#CCD6F6] text-2xl  ml-3 mt-40 md:text-4xl md:m-12 ms-[4rem]'>
        <span>
            02.
        </span>
        <span>Where I’ve Worked</span>
     
    </div>
    <div className='flex md: md:m-28 md:relative'>
      <span className="md:absolute  md:rotate-90	 md: left-[52%] md:bottom-[80%] md:h-[95%] bg-gray-400 md:w-[0.5px]"></span>
    <span className=" md: absolute  	 md: left-[0.2%] md:top-[2%] md:h-[70%] md:w-[4px] bg-gray-400 "></span>
      
    

       {/* this ul is for bigger screens */}
      <ul className="hidden  md:block text-2xl text-[#8892B0]">
        <li><button className ="experience-button hover:bg-[#112240] focus:bg-[#112240] p-4 w-52" onClick={()=>setExperience(1)}  >StartUp</button></li>
        <li><button className="experience-button  hover:bg-[#112240] p-4 w-52  focus:bg-[#112240] " onClick={()=>setExperience(2)}>Aicte Idealab</button></li>
        <li><button className="experience-button hover:bg-[#112240] p-4 w-52  focus:bg-[#112240]" onClick={()=>setExperience(3)}>KLIC</button></li>
        {/* <li><button className="experience-button hover:bg-[#112240] p-4 w-52  focus:bg-[#112240]" onClick={()=>setExperience(4)}>Starry</button></li> */}
        {/* <li><button className="experience-button hover:bg-[#112240] p-4 w-52  focus:bg-[#112240]" onClick={()=>setExperience(5)}>MullenLowe</button></li> */}
      </ul> 
       {/* big devices ul ends here */}

        <div className=' md:block'>
          {/* small devices ul starts here */}
        <ul className='md:hidden  mb-10 text-[#8892B0] ml-7 mt-12    font-semibold  text-xl flex justify-evenly gap-12 '>
    <li><button  onClick={()=>setExperience(1)}  >StartUp</button></li>
    <li><button  onClick={()=>setExperience(2)}>Aicte Idealab</button></li>
    <li><button  onClick={()=>setExperience(3)}>KLIC</button></li>
      </ul> 
      {/* small devices ul ends here */}
          
          {experience===1 &&
           <Exp_comp title="Software Developer  @KLIC KALCHURI INCUBATION CENTER " dateto="May 24 - Jan 24"
           first_para="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more" 
           second_para="Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements"
           third_para="Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders"
           fourth_para="Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship
           "
           />}
           {experience===2 &&
           <Exp_comp title="Project Developer @ Aicte Idealab
           " dateto="Sept 2023 - April 2024"
           first_para="Developed a fully functional, responsive full-stack website using Next.js Tailwind , providing a seamless user
experience."
           second_para="Implemented an intuitive and efficient admin panel, with keeping Web Security(CSRF,JWT ) in mind
,enhancing the website’s management capabilities." 
           third_para="Utilized version control systems, such as Git, to track and manage project"
           fourth_para="Used Mongo DB as a backend to store data on Atlas server and used Rest Api to integrate systems"
           />}
            {experience===3 && <Exp_comp title=" Frontend Developer @ KLIC KALCHURI INCUBATION CENTER" dateto="April 2023 -Sept 2023"
           first_para="Implemented a dashboard application using MERN stack"
         second_para="Developed 5+ frontend websites using HTML/CSS JavaScript,React"
      third_para=" Implemented responsive web design techniques to ensure compatibility and optimal viewing experience on
mobile devices"
      fourth_para="Work closely under Apeiro medica in Dare to start program and Collaborated with cross-functional teams,
including designers and backend developers,"
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

      {/* this ul is only for small devices */}

    {/* <ul className='md:hidden  text-[#8892B0] ml-7 mt-12  font-semibold  text-xl flex justify-evenly gap-12 '>
    <li><button  onClick={()=>setExperience(1)}  >StartUp</button></li>
    <li><button  onClick={()=>setExperience(2)}>Aicte Idealab</button></li>
    <li><button  onClick={()=>setExperience(3)}>KLIC</button></li>

      </ul> */}
       {/* small devices ul ends here */}
    </>
    
  )
}

export default Experience