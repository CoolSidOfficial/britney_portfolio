import React from "react";

const Writing = () => {
  const articles = [
    {
      title: "The Great Miscalculation: Why America Isn’t Falling",
      desc: "For years, commentators have predicted the decline of American power. This article explores why those predictions repeatedly overlook the structural advantages that continue to sustain America's position as the world's leading superpower.",
      date: "June 24, 2026",
      link: "https://medium.com/@coolsj/the-great-miscalculation-why-america-isnt-falling-92a3657b1116",
    },
    {
      title:
        "Why GDP Alone Fails — And Why Most Other Indicators Also Miss True Economic Power",
      desc: "GDP is one of the world's most cited economic indicators, but it often fails to capture the true strength of a nation. This article examines its shortcomings and discusses better ways to evaluate economic power.",
      date: "March 18, 2026",
      link: "https://medium.com/@coolsj/why-gdp-alone-fails-and-why-most-other-indicators-also-miss-true-economic-power-07617f6ade9b",
    },
    {
      title:
        "No, Trump Didn’t Bomb Venezuela for Its Oil Reserves — Here's Why",
      desc: "A geopolitical analysis of the 2026 U.S. intervention in Venezuela, examining strategic and security considerations beyond the common 'oil' explanation.",
      date: "January 25, 2026",
      link: "https://medium.com/@coolsj/no-trump-didnt-bomb-venezuela-for-its-oil-reserves-here-s-why-86079fe7c462",
    },
  ];

  return (
    <section   className="md:m-20 m-6 relative pr-8" id="writing">
      {/* Section Title */}
      <div>
        <span className="text-white md:text-4xl text-2xl md:p-2">
          05.
        </span>

        <span className="text-[#CCD6F6] md:text-4xl text-2xl font-semibold">
          Writing
        </span>
      </div>

      {/* Decorative Line */}
    
      {/* Description */}
      <p className="mt-8 text-[#8892B0] text-lg leading-8 max-w-3xl">
        I enjoy writing about geopolitics, economics, history, technology,
        and software engineering. Here are a few of my recent articles on
        Medium.
      </p>

      {/* Articles */}
      <div className="grid md:grid-cols-1 gap-6 mt-14">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#112240] rounded-md p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64FFDA]/10"
          >
            <p className="text-[#64FFDA] text-sm font-mono">
              {article.date}
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors">
              {article.title}
            </h3>

            <p className="mt-5 text-[#8892B0] leading-7">
              {article.desc}
            </p>

            <span className="inline-block mt-8 text-[#64FFDA] font-semibold">
              Read Article →
            </span>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-14">
        <a
          href="https://medium.com/@coolsj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded hover:bg-[#64FFDA]/10 transition-all"
        >
          View All Articles
        </a>
      </div>
    </section>
  );
};

export default Writing;