import avatar from "./Images/peeps-avatar-removebg-preview.png";
import { Link } from "react-router-dom";
export const Hero = (props) => {
  return (
    <div className="hero-sec">
      <div className="first-hero">
        <h4>hello, I am</h4>
        <h2>Fortune Obi</h2>
        <h4>Website & Mobile apps developer</h4>
        <p>
          I'm driven by a deep passion for technology and its potential to
          empower and connect. With a keen eye for design and a focus on user
          experience, I bring your ideas to life through innovative and engaging
          web and mobile applications.
        </p>
        <div className="btn-div">
          <button onClick={() => props.scrollEr("contact")}>contact us</button>

          <button onClick={() => (window.location.href = "/Aboutpage")}>
            learn more
          </button>
        </div>
      </div>
      <div className="second-hero">
        <div className="hired">
          <div className="image">
            <img src={avatar} alt="" />
          </div>
          <div className="hired-boox">
            <p>You're hired!</p>
            <div className="you-earned">
              <p>
                You earned <br />{" "}
                <span>
                  <h2>$3,000</h2>
                </span>
              </p>
            </div>
          </div>
        </div>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
