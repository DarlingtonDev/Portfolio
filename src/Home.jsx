import { About } from "./About";
import { Achievement } from "./Acheivements";
import "./App.css";
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
import { Link } from "react-router-dom";

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
            display: props.isClicked ? "flex" : "none",
          }}
        >
          <Link to="/ProjectPage" onClick={() => props.changeAbout()}>
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#028a0f" }} />
            <p>Projects</p>
          </Link>
          <Link to="/AboutPage" onClick={() => props.changeAbout()}>
            <FontAwesomeIcon icon={faUser} style={{ color: "#028a0f" }} />
            <p>About Me</p>
          </Link>
        </div>

        <div
          className="second-nav-div"
          style={{
            display: props.isClicked ? "flex" : "none",
          }}
        >
          <Link onClick={() => props.navScroll("services")}>Services</Link>

          <Link>Blog</Link>

          <Link>Resume</Link>

          <Link onClick={() => props.navScroll("contact")}>Contact Us</Link>
        </div>

        <div
          className="hire-me-div"
          style={{
            display: props.isClicked ? "flex" : "none",
          }}
        >
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
};
export const Home = (props) => {
  return (
    <>
      <div className="homepage" style={{ overflowY: props.overFlow }}>
        <ResponsiveNav
          isClicked={props.isClicked}
          height={props.height}
          isdisplayed={props.isdisplayed}
          changeAbout={props.changeAbout}
          setIsClicked={props.setIsClicked}
          navScroll={props.navScroll}
        />
        <Header
          isClicked={props.isClicked}
          setIsClicked={props.setIsClicked}
          setOverFlow={props.setOverFlow}
          setHeight={props.setHeight}
          addDelay={props.addDelay}
          changeMenu={props.changeMenu}
          changeAbout={props.changeAbout}
          navScroll={props.navScroll}
          scrollEr={props.scrollEr}
        />
        <Hero scrollEr={props.scrollEr} />

        <Achievement />
        <About />
        <Features />
        <Service />
        <Project />
        <Technology />
        <Footer />
      </div>
    </>
  );
};
