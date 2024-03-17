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
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const ResponsiveNav = (props) => {
  return (
    <div
      className="responsive-nav"
      style={{
        width: props.isClicked && "100%",
        height: props.isClicked && "fit-content",
        opacity: props.isClicked && "1",
        position: props.isClicked && "fixed",
        zIndex: props.isClicked && "20",
      }}
    >
      <div className="nav-bar" style={{ display: !props.isClicked && "none" }}>
        <div
          className="first-nav-div"
          style={{
            display: props.isdisplayed ? "flex" : "none",
          }}
        >
          <Link>
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#028a0f" }} />
            <p>Projects</p>
          </Link>
          <Link>
            <FontAwesomeIcon icon={faUser} style={{ color: "#028a0f" }} />
            <p>About Me</p>
          </Link>
        </div>

        <div
          className="second-nav-div"
          style={{
            display: props.isdisplayed ? "flex" : "none",
          }}
        >
          <Link>
            <p>Services</p>
          </Link>
          <Link>
            <p>Blog</p>
          </Link>
          <Link>
            <p>Resume</p>
          </Link>
          <Link>
            <p>Contact Us</p>
          </Link>
        </div>

        <div
          className="hire-me-div"
          style={{
            display: props.isdisplayed ? "flex" : "none",
          }}
        >
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
};
export const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [aboutClick, setAboutClick] = useState(false);
  const [overFlow, setOverFlow] = useState("auto");
  const [height, setHeight] = useState("50vh");
  const [isdisplayed, setIsDisplayed] = useState(false);

  function addDelay() {
    setTimeout(() => {
      setIsDisplayed(!isdisplayed);
    }, 500);
  }

  return (
    <>
      <div className="homepage" style={{ overflowY: overFlow }}>
        <ResponsiveNav
          isClicked={isClicked}
          height={height}
          isdisplayed={isdisplayed}
        />
        <Header
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          setOverFlow={setOverFlow}
          setHeight={setHeight}
          addDelay={addDelay}
        />
        <Hero />

        <Achievement />
        <About />
        <Features />
        <Service />
        <Project />
        <Technology />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
