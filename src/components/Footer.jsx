import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer (){
    return(
        <div className="footer row">
            <div className="col-8 footer-first">
                <h5>ROHAN DUTTA</h5>
                <p>An intermediate Full Stack Web Developer and Programmer skilled in building dynamic web applications and database integration.</p>
            </div>
            <div className="col-4 footer-second">
                <h5>SOCIAL</h5>
                <a href="https://www.linkedin.com/in/rohan-dutta-0b326024a/" className="footer-icon">
                <FontAwesomeIcon icon={faLinkedin} size="x" />
                </a>
                <a href="https://github.com/" className="footer-icon">
                <FontAwesomeIcon icon={faGithub} size="x" />
                </a>
                <a href="https://www.facebook.com/" className="footer-icon">
                <FontAwesomeIcon icon={faFacebook} size="1x" /> 
                </a>
            </div>
            <hr className="footer-hr"/>
            <div className="col-12">
            © 2023
            </div>
        </div>
    );
}

export default  Footer;