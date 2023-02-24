import React from "react";
import server from "../images/server.svg";
import frontend from "../images/frontend.svg";
import programming from "../images/programming.svg";
import "../styles/Home.css";
import Footer from "./Footer";

function Experience() {
  return (
    <div className="experience">
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <div className="backend">
            <div className="frontend_image">
              <img src={frontend} className="frontend_img" alt="" />
            </div>
            <div className="frontend_info">
              <li className="item">
                <h2> Front-End</h2>
                <span>ReactJS, HTML, CSS</span>
              </li>
            </div>
          </div>
          <div className="backend">
            <div className="backend_info">
              <li className="item">
                <h2>Back-End</h2>
                <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
              </li>
            </div>
            <div className="backend_image">
              <img className="backend_img" src={server} alt="" />
            </div>
          </div>
          <div className="programming">
            <div className="programming_image">
              <img src={programming} className="programming_img" alt="" />
            </div>
            <div className="programming_info">
              <li className="item">
                <h2>Languages</h2>
                <span>JavaScript, Java, Python, C</span>
              </li>
            </div>
          </div>
        </ol>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
