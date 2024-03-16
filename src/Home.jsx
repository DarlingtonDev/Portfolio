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

export const ResponsiveNav = (props) => {
  return (
    <div
      className="responsive-nav"
      style={{
        width: props.isClicked && "100%",
        height: props.isClicked && "50vh",
        opacity: props.isClicked && "1",
        position: props.isClicked && "fixed",
        zIndex: props.isClicked && "20",
      }}
    >
      <div className="nav-bar"></div>
    </div>
  );
};
export const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [aboutClick, setAboutClick] = useState(false);
  const [overFlow, setOverFlow] = useState("auto");
  const [height, setHeight] = useState("50vh");

  return (
    <>
      <div className="homepage" style={{ overflowY: overFlow }}>
        <ResponsiveNav isClicked={isClicked} height={height} />
        <Header
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          setOverFlow={setOverFlow}
          setHeight={setHeight}
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
