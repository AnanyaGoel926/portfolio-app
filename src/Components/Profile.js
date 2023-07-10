import React from "react";
import "./Profile.css";
import MyImg from "/Users/ananyagoel/portfolio-app/src/assets/images/me.png";
import { Typewriter } from "react-simple-typewriter";

export default function Profile() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ananya-goel-03b34a1b7");
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1FOZBfKHHiZWPxeBRg7PfQsJOP5G289Lg/view?usp=sharing"
    );
  };

  return (
    <div className = "Profile">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="container">
        <div className="text-container">
          <h1>
            Hi, I’m <span> Ananya Goel</span>
          </h1>
          <h2>
            a
            <span>
              <Typewriter
                words={[" Full Stack Developer.", " Mean Stack Developer.", " Professional Coder."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="intro">I am a Junior at Purdue University, majoring in Computer Science and Data Science.</p>
          <button onClick={handleLinkedInClick}>LinkedIn</button>
          <button className="resume-button" onClick={handleResumeClick}>Resume</button>
        </div>
        <div className="my_img">
          <img src={MyImg} alt="Profile"/>
        </div>
      </div>
    </div>
  );
}
