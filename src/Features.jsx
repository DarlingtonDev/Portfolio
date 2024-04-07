import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Features = () => {
  return (
    <div className="features">
      <div className="features-head">
        <h1>our features</h1>
        <p>
          unleash your creativity with a visual collaboration platform <br />
          that enables effective ideation
        </p>
      </div>
      <div className="feature-flex">
        <div className="feature-box">
          <div className="icon-feature">
            <FontAwesomeIcon
              icon={faGear}
              style={{
                color: "#ED7014",
                fontSize: "25px",
                backgroundColor: "rgba(237, 112, 20, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="box-header">
            <h3>choosing a service</h3>
          </div>
          <div className="para-feature">
            <p>
              choosing a service <br /> that matches you needs
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="icon-feature">
            <FontAwesomeIcon
              icon={faUser}
              style={{
                color: "#028a0f",
                fontSize: "25px",
                backgroundColor: "rgba(2, 138, 15, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="box-header">
            <h3>what our clients says</h3>
          </div>
          <div className="para-feature">
            <p>
              read the reviews from some <br /> of our satisfied customers
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="icon-feature">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                color: "orange",
                fontSize: "25px",
                backgroundColor: "rgba(255, 165, 0, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="box-header">
            <h3>initial consultation</h3>
          </div>
          <div className="para-feature">
            <p>
              understanding your <br /> service's <br /> requirements
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="icon-feature">
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                color: "#63C5DA",
                fontSize: "25px",
                backgroundColor: "rgb(99, 197, 218, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="box-header">
            <h3>request a callback</h3>
          </div>
          <div className="para-feature">
            <p>
              lets talk at a more <br /> convenient time for <br /> you
            </p>
          </div>
        </div>
      </div>
      {/* <div className="learn-more">
        <Link to="/ProjectPage">learn more</Link>
      </div> */}
    </div>
  );
};
