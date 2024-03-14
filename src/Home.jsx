import { About } from "./About";
import { Achievement } from "./Acheivements";
import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Contact } from "./Contact";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Project } from "./Projects";
import { Service } from "./Services";
import { Technology } from "./Tecnology";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCreativeCommonsNd } from "@fortawesome/free-brands-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [aboutClick, setAboutClick] = useState(false);
  const [overFlow, setOverFlow] = useState("auto");

  return (
    <>
      <div className="homepage" style={{ overflowY: overFlow }}>
        <Header isClicked={isClicked} />
        <Hero />

        <Achievement />
        <About />
        <Features />
        <Service />
        <Project />
        <Technology />
        <Contact />
        <Footer />
        <ResponsiveNav
          isClicked={isClicked}
          aboutClick={aboutClick}
          setAboutClick={setAboutClick}
          setIsClicked={setIsClicked}
          setOverFlow={setOverFlow}
        />
      </div>
    </>
  );
};

export const ResponsiveNav = (props) => {
  function setAboutWidth() {
    props.setAboutClick(!props.aboutClick);
  }

  function changeMenu() {
    props.setIsClicked(!props.isClicked);
    props.setOverFlow("hidden");
  }
  return (
    <div
      className="nav-bar"
      style={{
        transition: props.isClicked && "all ease-in-out 0.5s",
        width: props.isClicked ? "100%" : props.aboutClick && "20%",
        backgroundColor: props.isClicked && "white",
        position: props.isClicked && "fixed",
        boxShadow: props.isClicked && "0px 1px 2px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className="burger-menu"
        onClick={changeMenu}
        style={{ gap: props.isClicked && "0.1em" }}
      >
        {/* <FontAwesomeIcon
icon={faBars}
style={{ fontSize: "25px", color: "rgba(2, 138, 15, 0.8)" }}
/> */}
        <div
          className="div-1 "
          style={{
            width: props.isClicked && "1.5em",
            transform: props.isClicked && "translateY(0.25em) rotate(-48deg)",
          }}
        ></div>
        <div
          className="div-1"
          style={{
            width: props.isClicked && "0em",
            transform: props.isClicked && "translateX(-0.01em)",
          }}
        ></div>
        <div
          className="div-1"
          style={{
            width: props.isClicked && "1.5em",
            transform:
              props.isClicked &&
              "translateY(-0.35em) translateX(-0.5px) rotate(45deg)",
          }}
        ></div>
      </div>

      <div
        className="navigation-links"
        style={{ display: !props.isClicked && "none" }}
      >
        <nav>
          <ul>
            <li onClick={setAboutWidth}>
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#028a0f", marginRight: "0.5em" }}
              />
              <Link to="/AboutPage">About Me</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCreativeCommonsNd}
                style={{ color: "#028a0f", marginRight: "0.5em" }}
              />
              <Link to="">Services</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFlask}
                style={{ color: "#028a0f", marginRight: "0.5em" }}
              />
              <Link to="">Projects</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#028a0f", marginRight: "0.5em" }}
              />
              <Link to="">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <button className="hire-me">Hire Me</button>
      </div>
    </div>
  );
};
