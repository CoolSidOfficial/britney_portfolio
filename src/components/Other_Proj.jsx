import React from 'react'
import Other_comp from './Other_comp'
const Other_Proj = () => {
  return (
    <div className="flex-col  mt-[200px] text-center">
        <span className=" text-[#CCD6F6] block text-4xl font-semibold ">Other Noteworthy Projects</span>
        <a  className="text-white  font-semibold  text-lg" href="https://github.com/CoolSidOfficial?tab=repositories " target='_blank'>view the archive</a>
        <div className=" md:grid  md:grid-cols-3   md:gap-7 md:m-28  m-8	">
         <Other_comp title="CrimeInsight" stack={["Scikit-Learn","Jupyter Notebook","Numpy"]} desc="CrimeInsight is an advanced crime prediction tool that leverages key factors such as age, city, and time to forecast potential crime incidents. By utilizing a decision tree algorithm, the system analyzes historical crime " /> 
        <Other_comp  title="ImageLoc"    stack={["Scikit-Learn","Jupyter Notebook","Numpy"]} desc="This Python-based Telegram bot extracts GPS coordinates of a image , from it's meta data"/> 
         <Other_comp title="FIQUA "  stack={["Scikit-Learn","Jupyter Notebook","Numpy"]} desc="Our fish-selling website frontend, built with HTML5, CSS3, and JavaScript,  Responsive design techniques make it accessible on all devices "/> 
         <Other_comp title="Indian_Gdp_Predictor" desc="This is machine learning model which is using simple regression model to predict gdp." stack={["Scikit-Learn","Jupyter Notebook","Numpy"]} />
         <Other_comp title="KNNFitSense" stack={["Scikit-Learn","Jupyter Notebook","Numpy"]}  desc="Predict someone's fitness level using knn classifier model using flask as as backend"/> 
         <Other_comp title="EasyAircrack"  desc="This Python-based script automate wifi hacking ,this script is made for debian based Operating Sytems"  stack={["Scikit-Learn","Jupyter Notebook","Numpy"]}/> 
         <Other_comp title="CoolWeather Mobile APP" desc="CoolWeather is app which provides you basic weather information using your location , created in react native " stack={["Scikit-Learn","Jupyter Notebook","Numpy"]}/>
         <Other_comp title="GUI-Calc" desc="Our Python GUI calculator provides a simple yet efficient interface for performing basic arithmetic operations. Built with Tkinter, it's a lightweight tool perfect for quick calculations on the go." stack={["Scikit-Learn","Jupyter Notebook","Numpy"]}/>
         <Other_comp title="Text-Bin" desc="Our python  django  website offers a seamless solution for converting binary data back into text format  " stack={["Scikit-Learn","Jupyter Notebook","Numpy"]}/> 
         <Other_comp title="Jfile-Arrangner" desc="Our Java file arranger simplifies offline file organization for various file types. It's a lightweight, user-friendly tool that helps you tidy up your files"  stack={["Scikit-Learn","Jupyter Notebook","Numpy"]}/> 
         <Other_comp title="Jfile-Arrangner" desc="Our Java file arranger simplifies offline file organization for various file types. It's a lightweight, user-friendly tool that helps you tidy up your files"  stack={["Scikit-Learn","Jupyter Notebook","Numpy"]} /> 



        </div>


        
        
         </div>
  )
}

export default Other_Proj