import React from "react";

const CertificateJourney = () => {
  const certificates = [
    {
      year: "2017",
      title: "🚀 Started My Journey",
      subtitle: "My first step into programming.",
      image: "/certificates/start.jpg",
      link: "/certificates/start.jpg",
    },
    {
      year: "2018",
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "University of Michigan",
      image: "/certificates/python1.jpg",
      link: "https://coursera.org/share/00a79367910cee77db8d1c11181a179e",
    },
    {
      year: "2018",
      title: "Python Programming",
      subtitle: "SoloLearn",
      image: "/certificates/python.jpg",
      link: "#",
    },
    {
      year: "2019",
      title: "Java Programming",
      subtitle: "Oracle Academy",
      image: "/certificates/java.jpg",
      link: "#",
    },
    {
      year: "2020",
      title: "SQL Fundamentals",
      subtitle: "Oracle",
      image: "/certificates/sql.jpg",
      link: "#",
    },
    {
      year: "2026",
      title: "📚 Still Learning...",
      subtitle: "Every certificate marks another milestone.",
      image: null,
      link: "#",
    },
  ];

  return (
    <section
      className="md:m-20 m-6 flex flex-col items-center"
      id="certificatejourney"
    >
      {/* Heading */}

      <div className="w-full">
        <span className="text-white md:text-4xl text-2xl md:p-2">
          02.
        </span>

        <span className="text-[#CCD6F6] md:text-4xl text-2xl font-semibold">
          Certificate Journey
        </span>

        <p className="mt-8 text-[#8892B0] text-lg max-w-3xl leading-8">
          Every certificate tells a story. From writing my first lines of code
          to exploring databases, cloud computing, machine learning and AI,
          each milestone reflects my passion for continuous learning.
        </p>
      </div>

      {/* Timeline */}

      <div className="mt-20 flex flex-col items-center">

        {certificates.map((cert, index) => (
          <React.Fragment key={index}>
            <div className="text-center">

              <h2 className="text-4xl font-bold text-[#64FFDA]">
                {cert.year}
              </h2>

              <h3 className="mt-3 text-3xl font-semibold text-[#CCD6F6]">
                {cert.title}
              </h3>

              <p className="mt-2 text-[#8892B0] text-lg">
                {cert.subtitle}
              </p>

              {cert.image && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="
                      mt-8
                      w-full
                      md:w-[850px]
                      rounded-xl
                      border
                      border-slate-700
                      shadow-2xl
                      transition-all
                      duration-500
                      hover:scale-[1.02]
                      hover:border-[#64FFDA]
                    "
                  />
                </a>
              )}
            </div>

            {index !== certificates.length - 1 && (
              <div className="flex flex-col items-center my-12">
                <div className="w-[2px] h-20 bg-[#64FFDA]/60"></div>
                <div className="text-[#64FFDA] text-4xl">↓</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CertificateJourney;