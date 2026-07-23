import React, { useState } from "react";

const CertificateJourney = () => {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      year: "2017",
      title: "Started My Journey in Hacking and Coding at the Age of 13",
      subtitle: "Became a Certified Ethical Hacker from Linux Solutions",
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
      title: "Python Data Structures",
      subtitle: "University of Michigan",
      image: "/certificates/pythondata.jpg",
      link: "https://coursera.org/share/0763ca8af363a43cb297a3f4e52d2bd6",
    },
    {
      year: "2019",
      title: "Using Python to Access Web Data",
      subtitle: "University of Michigan",
      image: "/certificates/python_web.jpg",
      link: "https://coursera.org/share/70297591f2248e0e0c95a818faf276cf",
    },
    {
      year: "2021",
      title: "Using Databases with Python",
      subtitle: "University of Michigan",
      image: "/certificates/pythondb.jpg",
      link: "https://coursera.org/share/7198c9fa6be5c54b18f2223d0d12c3ba",
    },
    {
      year: "2022",
      title: "Introduction to HTML5",
      subtitle: "University of Michigan",
      image: "/certificates/html.jpg",
      link: "https://coursera.org/share/7891c0ba8d3d3658672a4aa491b7b4f1",
    },
    {
      year: "2022",
      title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      subtitle: "University of Michigan",
      image: "/certificates/python5.jpg",
      link: "https://coursera.org/share/519f5f27c0e8103d1a48ce101ce2f1b6",
    },
    {
      year: "2022",
      title: "Introduction to CSS3",
      subtitle: "University of Michigan",
      image: "/certificates/css.jpg",
      link: "https://coursera.org/share/d3adbf4b45c4cee3b187ca12a0f75047",
    },
    {
      year: "2022",
      title: "Interactivity with JavaScript",
      subtitle: "University of Michigan",
      image: "/certificates/js.jpg",
      link: "https://coursera.org/share/3cbeadcf17176ad0d70637f0df6832d5",
    },
    {
      year: "2022",
      title: "Innovation and Entrepreneurship",
      subtitle: "Coding Ninjas",
      image: "/certificates/codingninjas_innovation.jpg",
      link: "/certificates/codingninjas_innovation.jpg",
    },{
      year: "2022",
      title: "Learn to Earn Using C++",
      subtitle: "Coding Ninjas",
      image: "/certificates/learn_to_earn_fromcPP.jpg",
      link: "/certificates/learn_to_earn_fromcPP.jpg",
    },{
      year: "2022",
      title: "Advanced Styling with Responsive Design",
      subtitle: "University of Michigan",
      image: "/certificates/responsive.jpg",
      link: "https://coursera.org/share/addfcbf93710f5426acdcb44d951bf5c",
    },{
      year: "2023",
      title: "Web Application Technologies and Django",
      subtitle: "University of Michigan",
      image: "/certificates/django.jpg",
      link: "https://coursera.org/share/edd7b3ef9462a21421d3668d39150045",
    },
    {
      year: "2023",
      title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
      subtitle: "Google",
      image: "/certificates/gcp.jpg",
      link: "https://www.skills.google/public_profiles/6623c528-761c-46d8-92c5-5882045393d9/badges/5077212",
    },{
      year: "2024",
      title: "Building Web Applications in Django",
      subtitle: "University of Michigan",
      image: "/certificates/django_application.jpg",
      link: "https://coursera.org/share/edd7b3ef9462a21421d3668d39150045",
    },{
      year: "2025",
      title: "Introduction to Networks",
      subtitle: "Cisco",
      image: "/certificates/introduction_to_networks.jpg",
      link: "/certificates/introduction_to_networks.jpg",
    },{
      year: "2025",
      title: "Data Science with Python",
      subtitle: "Wipro",
      image: "/certificates/data_science_wipro.jpg",
      link: "/certificates/data_science_wipro.jpg",
    },



    {
      year: "2026",
      title: "📚 Still Learning...",
      subtitle: "Every certificate marks another milestone.",
      image: null,
      link: "#",
    },
  ];

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 5);

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
          Every certificate represents another milestone in my journey as a
          software engineer. From my first programming course to cloud
          computing, databases, machine learning and AI, every step reflects my
          passion for continuous learning.
        </p>
      </div>

      {/* Timeline */}

      <div className="mt-20 flex flex-col items-center w-[50%]">
        {displayedCertificates.map((cert, index) => (
          <React.Fragment key={index}>
            <div className="w-full flex flex-col items-center text-center">
              <h2 className="text-4xl font-bold text-[#64FFDA]">
                {cert.year}
              </h2>

              <h3 className="mt-3 text-3xl font-semibold text-[#CCD6F6] max-w-4xl">
                {cert.title}
              </h3>

              <p className="mt-3 text-[#8892B0] text-lg">
                {cert.subtitle}
              </p>

              {cert.image && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="
                      w-full
                      md:max-w-5xl
                      rounded-xl
                      border
                      border-slate-700
                      shadow-2xl
                      transition-all
                      duration-500
                      hover:scale-[1.02]
                      hover:border-[#64FFDA]
                      cursor-pointer
                    "
                  />
                </a>
              )}
            </div>

            {index !== displayedCertificates.length - 1 && (
              <div className="flex flex-col items-center my-14">
                <div className="w-[2px] h-20 bg-[#64FFDA]/40"></div>
                <div className="text-[#64FFDA] text-4xl animate-bounce">
                  ↓
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Expand / Collapse */}

      {certificates.length > 5 && (
        <div className="mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              border
              border-[#64FFDA]
              text-[#64FFDA]
              px-8
              py-3
              rounded-md
              transition-all
              duration-300
              hover:bg-[#64FFDA]/10
              hover:shadow-[6px_6px_0px_rgba(100,255,218,1)]
              hover:-translate-x-1
              hover:-translate-y-1
            "
          >
            {showAll
              ? "↑ Collapse Journey"
              : "↓ Continue My Journey"}
          </button>
        </div>
      )}
    </section>
  );
};

export default CertificateJourney;