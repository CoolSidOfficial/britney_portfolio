import React from "react";

export const Contact = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText("siddhantjainmvm@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div id="contact" className="flex text-center flex-col p-5 mt-[200px]">

      <div className="text-white text-3xl p-2">
        <span>04.&nbsp;</span>
        <span>What’s Next?</span>
      </div>

      <span className="font-bold text-[#8892B0] text-5xl p-4">
        Get In Touch
      </span>

      <p className="text-2xl text-[#8892B0] p-3">
        Whether you have a question or just want to say hi!
      </p>

      <div className="flex items-center justify-center gap-3 mt-10">

        {/* Send Email */}
        <a
          href="mailto:siddhantjainmvm@gmail.com?subject=Hello"
          className="text-white border px-6 py-4 rounded hover:shadow-[7px_9px_0px_rgba(100,255,218,1)] transition"
        >
         siddhantjainmvm@gmail.com
        </a>

        {/* Copy button */}
        <button
          onClick={copyEmail}
          className="text-white border px-3 py-2 rounded text-sm hover:bg-[#64ffda] hover:text-black transition"
        >
          Copy
        </button>

      </div>

      <span className="mt-80 text-3xl text-[#8892B0] p-3 hover:text-white">
        Designed & Built by Siddhant Jain in React
      </span>

    </div>
  );
};