import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faReact,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import cppIcon from "@iconify-icons/simple-icons/cplusplus";
import cIcon from "@iconify-icons/simple-icons/c";
function About() {
    const reactIconStyle = { color: '#61DBFB', boxShadow: "0 2px 4px rgba(250, 247, 247, 0.3)" };

  const jsIconStyle = { color: '#FFD700'};
  const htmlIconStyle = { color: '#E34F26' };
  const cssIconStyle = { color: '#1572B6' };
  const nodeIconStyle = { color: '#6CC24A'};
  const githubIconStyle = { color: '#333' };
  const javaIconStyle = { color: '#007396' };
  const codeIconStyle = { color: '#A93226' };
  const cIconStyle={color:"#007396"};
  const cppIconStyle={color:"#F34B7D"};

  const iconContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding:"15px"
  };

  const iconItemStyle = {
    width: "100px", // You can adjust the size of the individual icon containers here
    textAlign: "center",
  };

  return (
    <div className="about row" id="about" style={{ paddingTop: "80px" }}>
      <div className="col-12">
        <h3>ABOUT ME</h3>
        <hr />
        <h6>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h6>
      </div>
      <div className="col-lg-6 about-item-first">
        <h5>Get to know me!</h5>
        <p>I am a passionate third-year B.Tech student specializing in the Department of Information Technology.</p>
        <p>I am an enthusiastic full-stack developer and programmer. With a keen interest in building dynamic web applications and integrating databases, I am constantly exploring new technologies to expand my skill set and stay updated with the latest trends in the tech industry.</p>
        <p> I aspire to leverage my knowledge and expertise to create innovative solutions that positively impact people's lives.</p>
        <button className="btn btn-warning btn-lg" style={{marginBottom:"15px"}}><a href="#contact" style={{textDecoration:"none",color:"inherit"}}>Contact</a></button>
      </div>
      <div className="col-lg-6 about-item-second">
        <h5>Skills</h5>
        <div className="row " style={iconContainerStyle}>
        <div className="iconItemStyle" style={htmlIconStyle}>
          <FontAwesomeIcon icon={faHtml5} size="3x"/>
          <p>HTML</p>
        </div>
        <div className="iconItemStyle" style={cssIconStyle}>
          <FontAwesomeIcon icon={faCss3Alt}  size="3x"  />
          <p>CSS</p>
        </div>
        <div className="iconItemStyle" style={cIconStyle}>
        <Icon icon={cIcon} style={{ fontSize: "3em", color: "#007396" }} />
        <p>C</p>
        </div>
        <div className="iconItemStyle" style={cppIconStyle}>
        <Icon icon={cppIcon} style={{ fontSize: "3em", color: "#F34B7D" }} />
        <p>C++</p>
        </div>
        <div className="iconItemStyle" style={jsIconStyle}>
          <FontAwesomeIcon icon={faJs}  size="3x"  />
          <p>JavaScript</p>
        </div>
        <div className="iconItemStyle" style={iconItemStyle}>
          <FontAwesomeIcon icon={faTerminal}  size="3x" />
          <p>Terminal</p>
        </div>
        <div className="iconItemStyle" style={codeIconStyle}>
          <FontAwesomeIcon icon={faCode}  size="3x" />
          <p>Generic Code</p>
        </div>
        <div className="iconItemStyle" style={javaIconStyle}>
          <FontAwesomeIcon icon={faJava}  size="3x" />
          <p>Java</p>
        </div>
        <div className="iconItemStyle" style={reactIconStyle}>
          <FontAwesomeIcon icon={faReact}  size="3x"  />
          <p>React</p>
        </div>
        <div className="iconItemStyle" style={nodeIconStyle}>
          <FontAwesomeIcon icon={faNodeJs}  size="3x" x />
          <p>Node.js</p>
        </div>
        <div className="iconItemStyle" style={githubIconStyle}>
          <FontAwesomeIcon icon={faGithub}  size="3x" />
          <p>Github</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
