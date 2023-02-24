import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-align">
        <div className="socialMedia">
          <a href="https://github.com/eswarkartheekgrandhi" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://instagram.com/kartheekgrandhi" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/eswarkartheek1" target="_blank">
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/eswar-kartheek-grandhi-bb1566214/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="credits">
        <h3>
          Made with <span>❤</span> by Eswar Kartheek
        </h3>
      </div>
    </div>
  );
}

export default Footer;
