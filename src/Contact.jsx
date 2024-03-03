import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-head">
        <h1>contact us</h1>
        <h3>let's discuss your project</h3>
        <p>
          let's make something new, different and more <br />
          meaningful or make a thing more visual or <br /> conceptual
        </p>
      </div>
      <div className="contact-flex">
        <div className="contact-info-div">
          <div className="infos">
            <div className="icon">
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  fontSize: "25px",
                  color: "white",
                  backgroundColor: "#028a0f",
                  padding: ".4em",
                  width: "1em",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="other-details">
              <h4>call me</h4>
              <p>07041416757</p>
            </div>
          </div>

          <div className="infos">
            <div className="icon">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  fontSize: "25px",
                  color: "white",
                  backgroundColor: "#028a0f",
                  padding: ".4em",
                  width: "1em",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="other-details">
              <h4>email</h4>
              <p>obii6776@gmail.com</p>
            </div>
          </div>

          <div className="infos">
            <div className="icon">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{
                  fontSize: "23px",
                  color: "white",
                  backgroundColor: "#028a0f",
                  padding: ".4em",
                  width: "1em",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="other-details">
              <h4>location</h4>
              <p>lagos, lagos state</p>
            </div>
          </div>
        </div>
        <div className="contact-message-div">
          <form action="">
            <div className="first-input">
              <input type="text" placeholder="Full name" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="second-input">
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Budget" />
            </div>
            <div className="third-input">
              <textarea
                name=""
                id=""
                placeholder="Message"
                style={{
                  resize: "none",
                  width: "100%",
                  border: "0.3px solid rgba(2, 138, 15, 0.3)",
                  outline: "none",
                  paddingLeft: "1em",
                  paddingTop: "1em",
                  fontFamily: "Fira Sans, sans-serif",
                  fontSize: "12px",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
            <div className="btn-contact">
              <button>Submit Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
