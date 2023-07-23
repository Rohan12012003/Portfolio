import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Home(){
    return (
    <div className="home row" id="home">
    <div className="col-lg-1">
    <div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    
  </button>
  <div class="dropdown-menu custom-dropdown-menu col">
  <a href="https://www.linkedin.com/in/rohan-dutta-0b326024a/" className="">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
  </a>
  <a href="https://github.com/" className="">
  <FontAwesomeIcon icon={faGithub} size="2x" />
  </a>
  <a href="https://www.facebook.com/" className="">
  <FontAwesomeIcon icon={faFacebook} size="2x" /> 
  </a>
  </div>
</div>
    </div>
    <div className="col-lg-11 col-md-11 col-sm-12 home-container">
        <div>
            
        </div>

      <h1 className="home-items home-header">HEY, I'M ROHAN DUTTA</h1> 
      <h6 className="home-items">
        An intermediate Full Stack Web Developer and Programmer skilled in building dynamic web applications and database integration.
      </h6>
      <button className="btn btn-warning btn-lg home-items home-button"><a href="#project" style={{textDecoration:"none",color:"inherit"}}>Project</a></button>
      <div className="mouse">
        <div class="scroll-down"></div>
      </div>
      </div>
    </div>
    );
}

export default Home;