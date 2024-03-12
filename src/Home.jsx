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
  const [overFlow, setOverFlow] = useState("auto");
  function changeMenu() {
    setIsClicked(!isClicked);
    setOverFlow("hidden");
  }
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
        <div
          className="nav-bar"
          style={{
            width: isClicked && "100%",
            backgroundColor: isClicked && "white",
            position: isClicked && "fixed",
            boxShadow: isClicked && "0px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="burger-menu"
            onClick={changeMenu}
            style={{ gap: isClicked && "0.1em" }}
          >
            {/* <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "25px", color: "rgba(2, 138, 15, 0.8)" }}
        /> */}
            <div
              className="div-1 "
              style={{
                width: isClicked && "1em",
                transform:
                  isClicked &&
                  "translateX(-0.4em) translateY(0.1em) rotate(-40deg)",
              }}
            ></div>
            <div
              className="div-1"
              style={{
                width: isClicked && "1.5em",
                transform: isClicked && "translateX(-0.01em)",
              }}
            ></div>
            <div
              className="div-1"
              style={{
                width: isClicked && "1em",
                transform:
                  isClicked &&
                  "translateX(-0.4em) translateY(-0.1em)  rotate(42deg)",
              }}
            ></div>
          </div>

          <div
            className="navigation-links"
            style={{ display: !isClicked && "none" }}
          >
            <nav>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#028a0f", marginRight: "0.5em" }}
                  />
                  <Link to="">About Me</Link>
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
      </div>
    </>
  );
};
