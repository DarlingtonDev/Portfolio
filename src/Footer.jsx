import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Contact } from "./Contact";
export const Footer = () => {
  return (
    <>
      <Contact />
      <footer>
        <div className="footer-about">
          <div className="footer-logo">
            <h1>fortune</h1>
          </div>
          <p>
            Crafting digital dreams, one line of code at a time. Elevate your
            online presence today!
          </p>
        </div>
        <div className="footer-icons">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: "23px", color: "blue" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ fontSize: "23px", color: "#63C5DA" }}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "23px", color: "orange" }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "23px", color: "#833AB4" }}
          />
        </div>
      </footer>
    </>
  );
};
