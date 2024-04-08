import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Hireme = (props) => {
  return (
    <div
      className="hireme-div"
      style={{ display: props.showHire ? "flex" : "none" }}
    >
      <FontAwesomeIcon
        icon={faXmark}
        style={{
          color: "#028a0f",
          fontSize: "18px",
          position: "absolute",
          right: "1em",
          top: "0.5em",
          cursor: "pointer",
        }}
        onClick={props.removeHire}
      />

      <h2>Let's talk about your project</h2>
      <form action="">
        <label htmlFor="">What are you looking to create?</label>
        <input
          className="in-1"
          type="text"
          placeholder="landing pages, e-commerce site"
        />
        <label htmlFor="">When do you want it delivered?</label>
        <input className="in-2" type="date" />
        <label htmlFor="">Email</label>
        <input className="in-3" type="email" placeholder="johndoe@email.com" />
        <label htmlFor="">Tell Us More About Your Project</label>
        <div className="textarea" contentEditable="true"></div>

        <button className="request-btn">Send Message</button>
      </form>
    </div>
  );
};
