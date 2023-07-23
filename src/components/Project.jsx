import React from "react";
import {Link} from "react-router-dom";
function Project()
{
 return (
    <div className="project" id="project" style={{ paddingTop: "80px" }}>
        <h3>Project</h3>
        <hr />
        <h6>Here you will find some of the personal projects that I created with each project containing its own case study</h6>
        <div className="project-item row">
        <img className="project-image col-lg-8" src={require("./mockuper.png")} alt="Mockup" />
        <div className="col-lg-3">
            <h5>Travlo</h5>
            <p>Travlo is a holiday destination booking web application where you can checkout destination based on their types and wishlist and book them</p>
        <Link to="Travlo">
        <button className="btn btn-info btn-lg">Case Study</button>
        </Link>
        </div>
        </div>
    </div>
 );   
}

export default Project;