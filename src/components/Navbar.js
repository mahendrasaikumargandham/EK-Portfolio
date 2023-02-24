import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const name = "<eswar kartheek />";
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  //The dependencies determine when the effect should be re-run. If the dependencies change between renders, the effect function will run again.
  //[dependencies]
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="header">
        <div className="header_sign">
          <Link to="/">{name}</Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
