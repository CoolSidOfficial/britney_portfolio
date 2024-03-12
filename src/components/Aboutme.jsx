import Image from "../assets/sid.jpg"
const Aboutme = () => {
  return (
    <>
        <span className="text-[#C1CAEB]   text-5xl m-12 font-bold">01.</span>
        <span className=" text-5xl text-[#C1CAEB]  font-bold  "> About Me&nbsp; </span>
      <span className=" absolute   rotate-90	  left-[600px] top-[97%] h-[58%] bg-gray-400 w-[0.5px]"></span>

          <div className=" flex m-20 text-white">
        <div className= " text-[#818CA9] text-2xl flex column  ">Hello! My name is Siddhant Jain  and I enjoy creating things that live on the internet.<br/>
       My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom<br/> reblog button taught me a lot about HTML & CSS! Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Quibusdam officiis molestias deserunt quos id ab dicta sequi debitis nesciunt quo.
       Here are a few technologies I’ve been working with recently:     
       {/* <div className="h-[600px/] "></div> */}
</div>
<img  src={Image} alt= "Image can't be loaded " width={500}></img></div>
</>
  )
}

export default Aboutme