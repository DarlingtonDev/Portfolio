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
                  "translateX(-0.45em) translateY(0.1em) rotate(-47deg)",
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
                  "translateX(-0.4em) translateY(-0.1em)  rotate(45deg)",
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
                  <Link to="">About Me</Link>
                </li>
                <li>
                  <Link to="">Services</Link>
                </li>
                <li>
                  <Link to="">Projects</Link>
                </li>
                <li>
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
