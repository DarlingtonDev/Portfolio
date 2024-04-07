import { Header } from "./Header";
import { ResponsiveNav } from "./Home";
import myImage from "./Images/myFacebook.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "./Footer";
import { Service } from "./Services";
import { Hireme } from "./Hireme";
import { Loader } from "./Loader";
export const AboutPage = (props) => {
  return (
    <div className="AboutPage">
      {props.isLoading && <Loader />}
      <Hireme
        showHire={props.showHire}
        showHireClick={props.showHireClick}
        removeHire={props.removeHire}
      />
      <ResponsiveNav
        isClicked={props.isClicked}
        height={props.height}
        isdisplayed={props.isdisplayed}
        changeAbout={props.changeAbout}
        setCurrentPage={props.setCurrentPage}
        setIsClicked={props.setIsClicked}
        navScroll={props.navScroll}
      />
      <Header
        isClicked={props.isClicked}
        setIsClicked={props.setIsClicked}
        setOverFlow={props.setOverFlow}
        setHeight={props.setHeight}
        addDelay={props.addDelay}
        aboutClick={props.aboutClick}
        setCurrentPage={props.setCurrentPage}
        changeMenu={props.changeMenu}
        changeAbout={props.changeAbout}
        navScroll={props.navScroll}
        scrollEr={props.scrollEr}
        showHire={props.showHire}
        showHireClick={props.showHireClick}
      />

      <div className="aboutMeflex">
        <div className="firstAboutmeflex">
          <h1>
            I'm <span>Fortune Obi</span>. I live in Lagos, <br />
            where I build the future.
          </h1>
          <p>
            I am a self-driven, career-oriented software developer specializing
            in front-end development and open-source, currently pursuing a
            bachelors degree in computer science. My expertise lies in building
            interactive web applications on the client side. Primarily working
            with technologies like JavaScript, Next.js, TypeScript and Python.{" "}
            <p>
              I strongly believe in continuous learning and improving myself, so
              I try my best to learn in any situation possible, unfavorable or
              not.
            </p>
            <p>
              Beyond learning, I enjoy writing technical articles and creating
              projects that both inspire and benefit fellow developers. You can
              find my recent posts on freeCodeCamp and my personal blog hosted
              on this site.
            </p>
          </p>
        </div>
        <div className="secondAboutMeflex">
          <div className="secondImageDiv">
            <img src={myImage} alt="Myself" style={{ borderRadius: "10px" }} />
            <div className="resume-btn">
              <button style={{ color: "white" }}>view resume</button>

              <FontAwesomeIcon
                icon={faDownload}
                style={{ fontSize: "7px", color: "#028a0f" }}
              />
            </div>
            <div className="aboutEmail">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Obii6776@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="softSkill">
        <h1>Soft Skills</h1>
        <p>
          Certain skills I've picked along the way that deserves mentioning:
        </p>
        <div className="skills-div">
          <div className="skills">
            <div className="box-asterik"></div>
            <div className="skills-details">
              <p>
                <span>Attention to detail :</span>I take pleasure in creating
                designs and UIs with careful <br />
                precision, emphasizing quality over quantity.
              </p>
            </div>
          </div>
          <div className="skills">
            <div className="box-asterik"></div>
            <div className="skills-details">
              <p>
                <span>Open-source/Collaboration :</span>I founded a community on
                GitHub called <br />
                Communitypro that helps newbie developers learn how to
                contribute to <br />
                open-source projects and collaborate in building together.
                Currently we are <br />
                over 400 people strong with room for growth..
              </p>
            </div>
          </div>
          <div className="skills">
            <div className="box-asterik"></div>
            <div className="skills-details">
              <p>
                <span>Ability to work with little supervision :</span>I
                understand people are busy and <br /> would love to get things
                done timely, so I do my best in delivering assignments <br />
                and projects with little supervision, sparing you the need to
                closely <br />
                manage/oversee my work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Footer />
    </div>
  );
};
