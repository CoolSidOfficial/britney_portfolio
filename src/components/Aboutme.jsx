import Image from "../assets/sid.jpg"
import { Slide,Fade ,Bounce} from "react-awesome-reveal";
const Aboutme = () => {
  return (
    <div className="md:relative">
    <Fade triggerOnce delay={100}>
      <div className="bg-[#0A192] h-56 md:hidden ">
  
      </div>
        <span className="text-[#C1CAEB]  text-2xl  md:text-5xl md:m-12 m-4 font-bold md:inline">01. About Me</span>
        {/* <span className=" text-3xl text-[#C1CAEB]  font-bold  "> About Me&nbsp; </span> */}
      <span className=" md:absolute  md:rotate-90	 md:left-[48%] md:top-[-250px] md:h-[58%] bg-gray-400 md:w-[0.5px]"></span>

      <div className="m-4  flex md:m-24 text-white">
       <div className= " text-[#818CA9] md:text-xl text-lg flex column w-110 ">
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
<br/> Here are a few technologies I’ve been working with recently:     
       {/* <div className="h-[600px/] "></div> */}
</div>
  <div className=" hidden md:block  w-[150rem] p-4  ">
<img  src={Image} alt= "Image can't be loaded " ></img>
    </div>
  </div>
</Fade>
</div>
  )
}

export default Aboutme