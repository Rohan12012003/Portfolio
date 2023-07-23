import React from "react";
import {Link}  from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
function Travlo ()
{

  const jsIconStyle = { color: '#FFD700'};
  const htmlIconStyle = { color: '#E34F26' };
  const cssIconStyle = { color: '#1572B6' };
  const nodeIconStyle = { color: '#4A7F30' };
  const githubIconStyle = { color: '#333' };
  const reactIconStyle = { color: '#3AA9D2' };


    return (
    <div className="Travlo">
    <div className="travlo-home">
    <div>
    <h1>Travlo</h1>
    </div>
    <p>Travlo is a holiday destination booking web application where you can checkout destination based on their types and wishlist and book them</p>
    <a href="https://travloweb.netlify.app/"><button className="btn btn-warning travlo-btn">LIVE LINK</button></a>
    </div>
    <div className="project-content project row">
    <img className="travlo-image col-lg-8" src={require("./mockuper.png")} alt="Mockup" />
    <div className="col-lg-4">
    <h4>Project Overview</h4>
        <p>Travlo is a captivating travel website that offers a seamless and immersive experience for travelers.</p>
        <p> With a modern and user-friendly interface, Travlo provides a one-stop platform for users to explore, plan, and book their dream vacations. The website showcases an extensive collection of destinations, from exotic beaches to picturesque mountains, along with detailed travel guides, itineraries, and insider tips to make each trip unforgettable. Utilizing cutting-edge technology, Travlo allows users to show the number of  flights, accommodations, and tour packages, ensuring a hassle-free booking process.</p>
        <p> The website's interactive map feature enables travelers to visualize their journey and discover hidden gems. Whether you're a seasoned globetrotter or a first-time adventurer, Travlo promises an exciting and personalized travel experience for all. Embark on a journey of discovery and create lifelong memories with Travlo, your ultimate travel companion.</p>
    </div>
    </div>
    <div className="project-tools">
        <h4>Tools Used</h4>
        <div className="row tools">
        <div className="iconItemStyle" style={htmlIconStyle}>
          <FontAwesomeIcon icon={faHtml5} size="3x"/>
          <p>HTML</p>
        </div>
        <div className="iconItemStyle" style={cssIconStyle}>
          <FontAwesomeIcon icon={faCss3Alt}  size="3x"  />
          <p>CSS</p>
        </div>
        <div className="iconItemStyle" style={jsIconStyle}>
          <FontAwesomeIcon icon={faJs}  size="3x"  />
          <p>JavaScript</p>
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
        <div>
            <h4>See Live</h4>
            <a href="https://travloweb.netlify.app/"><button className="btn btn-warning travlo-btn">LIVE LINK</button></a>
            <Link to="/">
            <button className="btn btn-dark travlo-btn">GO BACK</button>
            </Link>
        </div>
    </div>
    </div>
    );
}

export default Travlo;