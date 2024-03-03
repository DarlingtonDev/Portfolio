import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
export const Achievement = () => {
  return (
    <div className="acheivement-div">
      <div className="acheive-div">
        <div className="icon">
          <FontAwesomeIcon
            icon={faTrophy}
            style={{
              color: "#028a0f",
              fontSize: "30px",
              backgroundColor: "rgba(2, 138, 15, 0.2)",
              padding: "0.3em",
              borderRadius: "5px",
              position: "absolute",
              top: "-1em",
              left: "1em",
            }}
          />
        </div>
        <div className="number">
          <h1>02</h1>
        </div>
        <div className="item">
          <h3>Awards</h3>
        </div>
      </div>

      <div className="acheive-div straight-line">
        <div className="icon">
          <FontAwesomeIcon
            icon={faPeopleLine}
            style={{
              color: "#028a0f",
              fontSize: "30px",
              backgroundColor: "rgba(2, 138, 15, 0.2)",
              padding: "0.3em",
              borderRadius: "5px",
              position: "absolute",
              top: "-1em",
              left: "1em",
            }}
          />
        </div>
        <div className="number">
          <h1>50+</h1>
        </div>
        <div className="item">
          <h3>Clients</h3>
        </div>
      </div>

      <div className="acheive-div">
        <div className="icon">
          <FontAwesomeIcon
            icon={faAward}
            style={{
              color: "#028a0f",
              fontSize: "30px",
              backgroundColor: "rgba(2, 138, 15, 0.2)",
              padding: "0.3em",
              borderRadius: "5px",
              position: "absolute",
              top: "-1em",
              left: "1em",
            }}
          />
        </div>
        <div className="number">
          <h1>03</h1>
        </div>
        <div className="item">
          <h3>Years Experience</h3>
        </div>
      </div>

      <div className="acheive-div">
        <div className="icon">
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{
              color: "#028a0f",
              fontSize: "30px",
              backgroundColor: "rgba(2, 138, 15, 0.2)",
              padding: "0.3em",
              borderRadius: "5px",
              position: "absolute",
              top: "-1em",
              left: "1em",
            }}
          />
        </div>
        <div className="number">
          <h1>80+</h1>
        </div>
        <div className="item">
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  );
};
