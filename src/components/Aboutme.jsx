import Image from "../assets/sid.jpg"
const Aboutme = () => {
  return (
    <>
        <span className="text-white m-14">01.</span>
        <span className="text-white"> About Me</span>
          <div className=" flex m-20 text-white">
        <div className= " text-white text-xl flex column  ">Hello! My name is Siddhant Jain  and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
</div>
<img  src={Image} alt= "Image can't be loaded " width={250}></img></div>
</>
  )
}

export default Aboutme