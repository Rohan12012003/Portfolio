import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePicture from "./Picture.jpg";

function Navbar() {
  const location = useLocation();
  const isRootRoute = location.pathname === "/";
  const navbarRef = useRef(null);

  useEffect(() => {
    // Add a click event listener to the document to handle clicks outside the navbar
    const handleClickOutsideNavbar = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // If the click is outside the navbar, collapse the navbar
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          // Only collapse the navbar if it's currently expanded
          navbarCollapse.classList.remove("show");
        }
      }
    };

    // Attach the click event listener when the component mounts
    document.addEventListener("click", handleClickOutsideNavbar);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutsideNavbar);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#home">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          Rohan Dutta
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </Link>
            </li>
            {isRootRoute ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
