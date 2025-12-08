import React, { useState } from "react";
import Other_comp from "./Other_comp";

const categories = [
  { key: "all", label: "All" },
  { key: "web", label: "Frontend/Backend " },
  { key: "ml", label: "Machine Learning" },
  { key: "python", label: "Python CLI/GUI" },
  { key: "cyber", label: "Cybsersecurity/Linux Scripts" },
  { key: "java/c++", label: "Java/C++ Scripts" },
  { key: "app", label: "Android Apps" },
  { key: "Iot", label: "IOT/Robotics" },


];

const allProjects = [
  {
    title: "CrimeInsight",
    stack: ["Scikit-Learn", "Jupyter Notebook", "Numpy"],
    desc: "CrimeInsight is an advanced crime prediction tool that leverages key factors such as age, city, and time to forecast potential crime incidents. By utilizing a decision tree algorithm, the system analyzes historical crime data to provide predictions.",
    weblink: "https://github.com/CoolSidOfficial/CrimeInsight",
    category: ["ml","python"]

  },

  {
    title: "ImageLoc",
    stack: ["Python3", "Pyrogram", "Mongo Db"],
    desc: "This Python-based Telegram bot extracts GPS coordinates of an image from its metadata and presents exact location details.",
    weblink: "https://github.com/CoolSidOfficial/Image_Loc",
    category: ["python"]
  },

  {
    title: "FIQUA",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Our fish-selling website frontend, built with HTML5, CSS3, and JavaScript. Responsive design techniques make it accessible on all devices and offer a clean UI for product browsing.",
    weblink: "https://github.com/CoolSidOfficial/fiqua",
    category: ["web"]
  },

  {
    title: "Indian_Gdp_Predictor",
    stack: ["Scikit-Learn", "Jupyter Notebook", "Numpy"],
    desc: "This is a machine learning model that uses a simple regression model to predict India's GDP using historical data trends.",
    weblink: "https://github.com/CoolSidOfficial/Indian_Gdp_Predictor",
    category: ["ml","python"]
  },

  {
    title: "KNNFitSense",
    stack: ["Scikit-Learn", "Jupyter Notebook", "Numpy"],
    desc: "Predict someone's fitness level using a KNN classifier model, with Flask as the backend to process model predictions.",
    weblink: "https://github.com/CoolSidOfficial/KNNFitSense",
    category: ["ml","python","web"]
  },

  {
    title: "EasyAircrack",
    stack: ["Python3", "bash", "os"],
    desc: "This Python-based script automates WiFi hacking tasks. Built for Debian-based operating systems, it simplifies the aircrack-ng workflow for auditing wireless networks.",
    weblink: "https://github.com/CoolSidOfficial/easy_aircrack-ng",
    category: ["cyber","python"]
  },

  {
    title: "py-keylogger",
    stack: ["Pyinput", "Smtplib", "Python3"],
    desc: "This tool logs all user input in real time and transmits the data to a Go-based file server. The server link is then sent to a specified email address for remote log retrieval.",
    weblink: "https://github.com/CoolSidOfficial/easy_aircrack-ng",
    category: ["cyber","python"]
  },

  {
    title: "ProofReading-Report-Helper",
    stack: ["OpenPyxl", "PyperClip", "PyAutoGui"],
    desc: "Report Helper is a CLI tool developed in Python that streamlines proofreading tasks. It handles Excel file operations, extracts specified questions, and maps them to the Ctrl+M key for quick insertion.",
    weblink: "https://github.com/CoolSidOfficial/Report_Helper",
    category: ["python"]
  },

  {
    title: "CoolWeather Mobile App",
    stack: ["React Native", "Weather Api", "JavaScript"],
    desc: "CoolWeather is a mobile app that provides basic weather information using your location. Built with React Native, it offers real-time weather updates with a simple and intuitive UI.",
    weblink: "https://github.com/CoolSidOfficial/CoolWeather_Android",
    category: ["app"]
  },

  {
    title: "GUI-Calc",
    stack: ["Python3", "Tkinter", "colorama"],
    desc: "Our Python GUI calculator provides a simple yet efficient interface for performing basic arithmetic operations. Built with Tkinter, it's a lightweight tool perfect for quick calculations on the go.",
    weblink: "https://github.com/CoolSidOfficial/gui_calc",
    category: ["python"]
  },

  {
    title: "Text-Bin",
    stack: ["Django", "Python3", "Base64"],
    desc: "Our Python Django website offers a seamless solution for converting binary data back into text format with a clean, functional web interface.",
    weblink: "https://github.com/CoolSidOfficial/TextBin",
    category: ["web","python"]
  },

  {
    title: "Jfile-Arrangner",
    stack: ["Java"],
    desc: "Our Java file arranger simplifies offline file organization for various file types. It's a lightweight, user-friendly tool that helps you tidy up your files efficiently.",
    weblink: "https://github.com/CoolSidOfficial/Java_file_Arranger",
    category: ["java/c++"]
  },
   {
    title: "Indinum-gen",
    stack: ["C++"],
    desc: "This C++ script generates Indian phone numbers along with their state-wise codes and includes special ISP prefixes. It's intended for dictionary attacks, commonly used in security testing to brute force phone number-based authentication systems.",
    weblink: "https://github.com/CoolSidOfficial/indinum-gen",
    category: ["java/c++","cyber"]
  },
   {
    title: "Cool Encrypt",
    stack: ["python"],
    desc: "CoolEncrypt is a lightweight, fast, and user-friendly tool that instantly converts your text into secure encrypted form using a secret key. It supports quick one-click encryption and decryption, requires no setup, and works in real time",
    weblink: "https://github.com/CoolSidOfficial/coolencrypt",
    category: ["cyber","python"]
  },
   {
    title: "Python File Arranger",
    stack: ["python"],
    desc: "This is a small Python script that scans a given folder and automatically organizes its files based on their extensions. It creates folders for each file type (like .jpg, .pdf, .txt) and moves the files into their respective directories, helping keep the path clean and neatly arranged.",
    weblink: "https://github.com/CoolSidOfficial/File_Arranger",
    category: ["python"]
  },
   {
    title: "Python File Arranger",
    stack: ["python"],
    desc: "This is a small Python script that scans a given folder and automatically organizes its files based on their extensions. It creates folders for each file type (like .jpg, .pdf, .txt) and moves the files into their respective directories, helping keep the path clean and neatly arranged.",
    weblink: "https://github.com/CoolSidOfficial/File_Arranger",
    category: ["python"]
  },
   {
    title: "ClsColor.h",
    stack: ["c++"],
    desc: "This is small c++ library created for myself to avoid writing verbose ansi code you can import it by adding it to the same folder where your c++ code is lying",
    weblink: "https://github.com/CoolSidOfficial/clscolor.h",
    category: ["java/c++"]
  },
  {
    title: "Lnct Placement Extractor/Analyzer",
    stack: ["python"],
    desc: "This is small c++ library created for myself to avoid writing verbose ansi code you can import it by adding it to the same folder where your c++ code is lying",
    weblink: "https://github.com/CoolSidOfficial/Lnct_Placement_data",
    category: ["python"]
  },
  
  {
    title: "Esp32_weather_station",
    stack: ["Electronics"],
    desc: "An ESP-based weather station that collects environmental data like temperature, humidity, and pressure using sensors and sends it to the cloud or displays it locally.",
    weblink: "https://github.com/CoolSidOfficial/iot-stuff/tree/main/esp32_weather_station",
    category: ["Iot"]
  },
  {
    title: "Legal Gyaan",
    stack: ["Mern Stack"],
    desc: "Legal Gyaan is an AI-driven platform designed to simplify legal understanding for students, citizens, and professionals",
    weblink: "https://github.com/LegalGyaan",
    category: ["web"]
  },
    {
    title: "Geo Track",
    stack: ["React Native"],
    desc: "Legal Gyaan is an AI-driven platform designed to simplify legal understanding for students, citizens, and professionals",
    weblink: "https://github.com/SIH24-KEENDEVS/GeoTrack_app",
    category: ["app"]
  },
{
    title: "Esp32_weather_station",
    stack: ["Electronics"],
    desc: "An ESP-based weather station that collects environmental data like temperature, humidity, and pressure using sensors and sends it to the cloud or displays it locally.",
    weblink: "https://github.com/CoolSidOfficial/iot-stuff/tree/main/esp32_weather_station",
    category: ["Iot"]
  },


];

const Other_Proj = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

const filteredProjects = selectedCategory === "all"
    ? allProjects
    : allProjects.filter(p => p.category.includes(selectedCategory));

  return (
    <div className="flex-col mt-[200px] text-center">
      <span className="text-[#CCD6F6] block text-4xl font-semibold">
        Other Noteworthy Projects
      </span>

      <a
        className="text-white font-semibold text-lg"
        href="https://github.com/CoolSidOfficial?tab=repositories"
        target="_blank"
      >
        view the archive
      </a>

      <div className="  flex gap-4 justify-center  px-5 mt-10 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-5 py-2 rounded-lg border transition-all duration-200 ${
              selectedCategory === cat.key
                ? "bg-[#64FFDA] text-black font-bold"
                : "text-white border-gray-600"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-7 md:m-28 m-8">
        {filteredProjects.map((proj, index) => (
          <Other_comp
            key={index}
            title={proj.title}
            stack={proj.stack}
            desc={proj.desc}
            weblink={proj.weblink}
          />
        ))}
      </div>
    </div>
  );
};

export default Other_Proj;
