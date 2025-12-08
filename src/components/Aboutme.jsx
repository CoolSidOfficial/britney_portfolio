import Image from "../assets/sid.jpg"
import { Slide,Fade ,Bounce} from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
const Aboutme = () => {
  return (
  <div className="md:relative">
    <Fade triggerOnce delay={100}>
     
        <span className="text-[#C1CAEB]  text-2xl  md:text-5xl md:m-12 m-4  font-bold md:inline">01. About Me</span>
      {/* <span className=" md:absolute  md:rotate-90	 md:left-[48%] md:top-[-250px] md:h-[58%] bg-gray-400 md:w-[0.5px]"></span>  Line  */}

<div className="m-4  flex md:m-24 text-white">  {/*  Creating two side one in left one in right */}

  
<div className= " text-[#818CA9] font-semibold md:text-2xl text-lg md:flex  w-[600px] ">
  My name is Siddhant Jain. I am a very ambitious person who enjoys learning new things and is inherently curious. 
<br/>
<br/>
 I am passionate about understanding how things work, often dismantling items to rebuild them and uncover their inner workings. I believe in a first principle approach. My main goal is to provide value to as many people as I can, and I have found that technology is the most efficient way to achieve this.
 <br/>
 <br/>
As I was growing up, my interest in computers deepened. Despite facing challenges due to the high cost of internet access in 2015, I was determined to pursue my interests. To overcome this obstacle, I began learning about wifi hacking. Gradually, my fascination with ethical hacking grew. I enjoyed watching hacking movies, and eventually, delved into the intricacies of hacking at the age of 13.
<br/>
<br/>
After some time, I realized the importance of creating my own scripts to truly become proficient in hacking. I started with C++ and developed some impressive projects, such as Jarvis (a personal assistant). Subsequently, I dedicated myself to programming, exploring languages like PHP and others.
<br/>
<br/>
During the COVID lockdown, I seized the opportunity to broaden my knowledge base. I delved into various subjects such as macroeconomics, international relations, geopolitics, history, and current affairs. Additionally, I explored medical science-related topics, particularly different types of heart surgeries. I also immersed myself in business books, often watching summaries to gain insights efficiently.
<br/>
<br/>
Despite expanding my interests and becoming a pantomath, I never abandoned my first hobby, computer science. I focused on specializing in this field while maintaining a generalist approach to other subjects.
<br/> 
     
</div>
{/* <div className="text-white  ms-24 text-4xl font-serif  ">Languages and Tools:</div> */}

     <div className="md:grid grid-cols-4 gap-3 w-[600px] h-[200px]">
  {[
    "Python","Cpp","Java","mysql","Sqlite","JavaScript","HTML","CSS",
    "React","express","scikit-learn","request","fastapi",
    "Django","mongo_db","Azure","Tailwind","Docker","git","Bash",
   "matplotlib","pyrogram","jupyter","BurpSuite",
    "next","socket","metasploit"
  ].map((tool, index) => (
    <div key={index} className="relative group w-[100px] h-[100px]">
      <img
        src={`/tools_logo/${tool.toLowerCase().replace(/ /g,'_')}.png`}
        alt={tool}
        className="w-full h-full object-contain"
      />
      {/* Tooltip */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {tool}
      </span>
    </div>
  ))}
</div>


  </div> //

</Fade>
<div className="text-center text-[#76829E] font-mono  m-5    font-semibold text-5xl">Pages I've Turned And Words That Shaped Me
</div>
<Marquee className="bg-[#0A192F]" speed={20}>
  <img src="/books_images/rework.jpg" className="w-64"alt="Rework "></img> 
  <img src="/books_images/elonmusk.jpg" className="w-64"alt="Elon Musk"></img>
  <img src="/books_images/psychology.jpg" className="w-64"alt="psychology  of money"></img>
  <img src="/books_images/thepersonalmba.jpg" className="w-64"alt="personalmba"></img>
  <img src="/books_images/zerotoone.jpg" className="w-64"alt="zerotoone"></img>
  <img src="/books_images/lawsofpower.jpg" className="w-72"alt="48laws"></img>
  <img src="/books_images/richdad.jpg" className="w-72"alt="richdad"></img>
  <img src="/books_images/emythrevised.jpg" className="w-64"alt="emyth revisted"></img>
  <img src="/books_images/whomoved.jpg" className="w-64"alt="whomoved"></img>
  

</Marquee>
</div>  //Main closing
  )
}

export default Aboutme