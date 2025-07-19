import React from 'react'
import Other_comp from './Other_comp'
const Other_Proj = () => {
  return (
    <div className="flex-col  mt-[200px] text-center">
        <span className=" text-[#CCD6F6] block text-4xl font-semibold ">Other Noteworthy Projects</span>
        <a  className="text-white  font-semibold  text-lg" href="https://github.com/CoolSidOfficial?tab=repositories " target='_blank'>view the archive</a>
        <div className=" md:grid  md:grid-cols-3   md:gap-7 md:m-28  m-8	">
         <Other_comp title="CrimeInsight" stack={["Scikit-Learn","Jupyter Notebook","Numpy"]} desc="CrimeInsight is an advanced crime prediction tool that leverages key factors such as age, city, and time to forecast potential crime incidents. By utilizing a decision tree algorithm, the system analyzes historical crime "  weblink="https://github.com/CoolSidOfficial/CrimeInsight"/> 
        <Other_comp  title="ImageLoc"    stack={["Python3","Pyrogram","Mongo Db"]} desc="This Python-based Telegram bot extracts GPS coordinates of a image , from it's meta data" weblink="https://github.com/CoolSidOfficial/Image_Loc"/> 
         <Other_comp title="FIQUA "  stack={["HTML","CSS","JavaScript"]} desc="Our fish-selling website frontend, built with HTML5, CSS3, and JavaScript,  Responsive design techniques make it accessible on all devices " weblink="https://github.com/CoolSidOfficial/fiqua"/> 
         <Other_comp title="Indian_Gdp_Predictor" desc="This is machine learning model which is using simple regression model to predict gdp." stack={["Scikit-Learn","Jupyter Notebook","Numpy"]} weblink="https://github.com/CoolSidOfficial/Indian_Gdp_Predictor" />
         <Other_comp title="KNNFitSense" stack={["Scikit-Learn","Jupyter Notebook","Numpy"]}  desc="Predict someone's fitness level using knn classifier model using flask as as backend" weblink="https://github.com/CoolSidOfficial/KNNFitSense"/> 
         <Other_comp title="EasyAircrack"  desc="This Python-based script automate wifi hacking ,this script is made for debian based Operating Sytems"  stack={["Python3","bash","os"]} weblink=""/> 
         <Other_comp title="py-keylogger" desc="It logs all user input in real-time and transmits the data to a Go-based file server. and that link is sent to a specified email address"  stack={["Pyinput","Smtlib","Python3"]} weblink="https://github.com/CoolSidOfficial/easy_aircrack-ng" /> 
         <Other_comp title="ProofReading-Report-Helper" desc="Report Helper is a CLI tool developed in Python that streamlines proofreading tasks. It handle Excel file operations, it extracts specified questions and maps them to the Ctrl+M key for quick insertion. "  stack={["OpenPyxl","PyperClip","PyAutoGui"]} weblink="https://github.com/CoolSidOfficial/Report_Helper" /> 
         <Other_comp title="CoolWeather Mobile APP" desc="CoolWeather is app which provides you basic weather information using your location , created in react native " stack={["React Native","Weather Api","JavaScript"]} weblink="https://github.com/CoolSidOfficial/CoolWeather_Android"/>
         <Other_comp title="GUI-Calc" desc="Our Python GUI calculator provides a simple yet efficient interface for performing basic arithmetic operations. Built with Tkinter, it's a lightweight tool perfect for quick calculations on the go." stack={["Python3","Tkinter","colorama"]} weblink="https://github.com/CoolSidOfficial/gui_calc"/>
         <Other_comp title="Text-Bin" desc="Our python  django  website offers a seamless solution for converting binary data back into text format  " stack={["Django","Python3","Base64"]} weblink="https://github.com/CoolSidOfficial/TextBin"/> 
         <Other_comp title="Jfile-Arrangner" desc="Our Java file arranger simplifies offline file organization for various file types. It's a lightweight, user-friendly tool that helps you tidy up your files"  stack={["Java","",""]} weblink="https://github.com/CoolSidOfficial/Java_file_Arranger"/> 



        </div>


        
        
         </div>
  )
}

export default Other_Proj