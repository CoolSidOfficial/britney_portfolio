import Image from "../assets/sid.jpg"
import { Slide,Fade ,Bounce} from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
const Aboutme = () => {
  return (
  <div className="md:relative">
    <Fade triggerOnce delay={100}>
     
        <span className="text-[#C1CAEB]  text-2xl  md:text-5xl md:m-12 m-4 font-bold md:inline">01. About Me</span>
      {/* <span className=" md:absolute  md:rotate-90	 md:left-[48%] md:top-[-250px] md:h-[58%] bg-gray-400 md:w-[0.5px]"></span>  Line  */}

<div className="m-4  flex md:m-24 text-white">  {/*  Creating two side one in left one in right */}

  
<div className= " text-[#818CA9] font-semibold md:text-2xl text-lg flex  w-[600px] ">
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
<div className="  grid grid-cols-4 gap-3  w-[600px] h-[200px]">

    <img src="/tools_logo/python.png" alt="Python"></img>
    <img src="/tools_logo/cpp.png"  className="" alt="C++"></img>
    <img src="/tools_logo/java.png" className="" alt="Java"></img>
    <img src="/tools_logo/mysql.png"  className="" alt="MY-SQL"></img>
    <img src="/tools_logo/sqlite.png"  className="" alt="Sqlite"></img>
    <img src="/tools_logo/javascript.png"  className="" alt="JavaScript"></img>
    <img src="/tools_logo/html.png"  className="" alt="HTML"></img>
    <img src="/tools_logo/css.png"  className="" alt="CSS"></img>
    <img src="/tools_logo/react.png"  className="" alt="React"></img>
    <img src="/tools_logo/express.png"  className="" alt="Express Js"></img>
    <img src="/tools_logo/scikit-learn.svg"  className="" alt="scikit-learn"></img>
    <img src="/tools_logo/request.png"  className="" alt="request module"></img>
    <img src="/tools_logo/fastapi.svg"  className="" alt="Fast Api"></img>
    <img src="/tools_logo/django.png"  className="" alt="Django"></img>
    <img src="/tools_logo/mongo_db.png"  className="" alt="MongoDb"></img>
    <img src="/tools_logo/azure.png"  className="" alt="Azure"></img>
    <img src="/tools_logo/tailwind.png"  className="" alt="Tailwind"></img>
    <img src="/tools_logo/docker.png"  className="" alt="Docker"></img>
    <img src="/tools_logo/git.svg"  className="" alt="Git"></img>
    <img src="/tools_logo/bash.svg"  className="" alt="Bash"></img>
    <img src="/tools_logo/kali.svg"  className="" alt="Kali linux"></img>
    <img src="/tools_logo/matplotlib.png"  className="" alt="matplotlib"></img>
    <img src="/tools_logo/pyrogram.png"  className="" alt="pyrogram"></img>
    <img src="/tools_logo/jupyter.png"  className="" alt="jupter-notebook"></img>
    <img src="/tools_logo/burpsuite.svg"  className="" alt="BurpSuite"></img>
    <img src="/tools_logo/next.svg"  className="" alt="Next Js"></img>
    <img src="/tools_logo/socket.svg"  className="" alt="socket"></img>
    <img src="/tools_logo/metasploit.png"  className="" alt="metasploit"></img>



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