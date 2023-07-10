import React from "react";
import Skill from "../Components/Skill";
import "./Skills.css";

export default function Skills() {
  return (
<div className="Entire">
    <h1 className="skills-heading">Skills</h1>
    <div className="skills">
      <h2 className = "heading">I have experience with these technologies</h2>
      <div className="skillsGrid">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
          title="React"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
          title="HTML 5"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
          title="CSS 3"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="The logo icon for NodeJS"
          title="Node JS"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          alt="The logo icon for Java"
          title="Java"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
          alt="The logo icon for VS Code"
          title="VS Code"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="The logo icon for MongoDB"
          title="MongoDB"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="The logo icon for Python"
          title="Python"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="The logo icon for JavaScript"
          title="JavaScript"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          alt="The logo icon for C"
          title="C"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
          alt="The logo icon for Angular"
          title="Angular"
        />    
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHub"
          title="GitHub"
        />   
        <Skill
          source= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg"
          alt="The logo icon for Azure"
          title="Azure"
        /> 
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
          alt="The logo icon for Jupyter"
          title="Jupyter"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="The logo icon for Express"
          title="Express"
        />  
      </div>
    </div>
    <div className="container_skill">
            <div className="skill-box">
                <span className="title">Java</span>
                <div className="skill-bar">
                    <span className="skill-per java">
                        <span className="tooltip">Comfortable</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Python</span>
                <div className="skill-bar">
                    <span className="skill-per python">
                        <span className="tooltip">Comfortable</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">HTML/CSS</span>
                <div className="skill-bar">
                    <span className="skill-per htmlcssjs">
                        <span className="tooltip">Comfortable</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="title">C/C++</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">Comfortable</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">React.js</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">Comfortable</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Angular</span>
                <div className="skill-bar">
                    <span className="skill-per angular">
                        <span className="tooltip">Familiar</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">SQL</span>
                <div className="skill-bar">
                    <span className="skill-per sql">
                        <span className="tooltip">Familiar</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">AWS</span>
                <div className="skill-bar">
                    <span className="skill-per aws">
                        <span className="tooltip">Familiar</span>
                    </span>
                </div>
            </div>
            
        </div>

    </div>
  );
}
