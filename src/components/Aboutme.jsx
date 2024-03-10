import Image from "../assets/sid.jpg"
const Aboutme = () => {
  return (
    <>
        <span className="text-white m-14">01.</span>
        <span className="text-white"> About Me</span>
          <div className=" flex m-20 text-white">
        <div className= " text-[#818CA9] text-2xl flex column  ">Hello! My name is Siddhant Jain  and I enjoy creating things that live on the internet.<br/>
       My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom<br/> reblog button taught me a lot about HTML & CSS! Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Quibusdam officiis molestias deserunt quos id ab dicta sequi debitis nesciunt quo.
       Here are a few technologies I’ve been working with recently:     
</div>
<img  src={Image} alt= "Image can't be loaded " width={400}></img></div>
</>
  )
}

export default Aboutme