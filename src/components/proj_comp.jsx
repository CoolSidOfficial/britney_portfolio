import React from "react";

const Proj_Comp = ({
  side = "left",
  title,
  desc,
  tags,
  github,
  live,
  image
}) => {

  const isRight = side === "rtl";

  return (

    <div className={`md:flex items-center md:gap-10 my-20 ${isRight ? "md:flex-row-reverse" : ""}`}>

      {/* Screenshot */}
      <div className="md:w-1/2">

        <img
          src={image}
          alt={title}
          className="rounded-lg brightness-75 hover:brightness-100 transition duration-300 w-full"
        />

      </div>

      {/* Project Content */}
      <div className="md:w-1/2 mt-6 md:mt-0">

        <span className="text-[#64FFDA] text-sm">
          Featured Project
        </span>

        <h3 className="text-[#CCD6F6] text-2xl font-semibold mt-2">
          {title}
        </h3>

        <p className="bg-[#112240] text-[#8892B0] p-4 rounded mt-4 leading-relaxed">
          {desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-4 text-[#8892B0] text-sm">

          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}

        </div>

        {/* Links */}
        <div className="flex gap-6 mt-5">

          <a
            href={github}
            target="_blank"
            className="text-[#64FFDA] hover:underline"
          >
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              className="text-white hover:underline"
            >
              Live
            </a>
          )}

        </div>

      </div>

    </div>

  );
};

export default Proj_Comp;