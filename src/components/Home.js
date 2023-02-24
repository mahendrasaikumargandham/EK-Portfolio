import React from "react";
import hero from "../images/hero.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import DescriptionIcon from "@mui/icons-material/Description";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_about">
        <div className="about">
          <div className="about_left">
            <h2> Hi, My Name is Eswar Kartheek</h2>
            <div className="prompt">
              <p className="prompt_p">
                A software developer with a passion for learning and creating.
              </p>
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
            <div className="buttons">
              <a
                href="https://wa.link/dupayq"
                target="_blank"
                className="buttons1"
              >
                <WhatsAppIcon /> Whatsapp
              </a>
              <a href="#" className="buttons2">
                <DescriptionIcon />
                Get Resume
              </a>
            </div>
          </div>
          <div className="home_image">
            <img src={hero} className="hero_img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
