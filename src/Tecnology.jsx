import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
export const Technology = () => {
  return (
    <div className="technology">
      <div className="tech-head">
        <h1>technologies and tools</h1>
        <p>Explore the Cutting-Edge Technology and Tools Driving Progress</p>
      </div>

      <div className="technologies-flex">
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faHtml5}
              style={{
                color: " #ED7014",
                fontSize: "25px",
                backgroundColor: "rgba(237, 112, 20, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>Html5</h3>
          <p>structure your web content</p>
        </div>
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{
                color: "#028a0f",
                fontSize: "25px",
                backgroundColor: "rgba(2, 138, 15, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>css3</h3>
          <p>Style your web content</p>
        </div>
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faJs}
              style={{
                color: "orange",
                fontSize: "25px",
                backgroundColor: "rgba(255, 165, 0, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>javascript</h3>
          <p>Add interactivity to your web pages</p>
        </div>
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faReact}
              style={{
                color: "#63C5DA",
                fontSize: "25px",
                backgroundColor: "rgb(99, 197, 218, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>reactJs</h3>
          <p> Build dynamic user interfaces efficiently</p>
        </div>
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faNodeJs}
              style={{
                color: "#ED7014",
                fontSize: "25px",
                backgroundColor: "rgba(237, 112, 20, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>NodeJs</h3>
          <p>Execute JavaScript server-side</p>
        </div>
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faPython}
              style={{
                color: "#028a0f",
                fontSize: "25px",
                backgroundColor: "rgba(2, 138, 15, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>python</h3>
          <p>Versatile language for web development and more</p>
        </div>
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faPhp}
              style={{
                color: "orange",
                fontSize: "25px",
                backgroundColor: "rgba(255, 165, 0, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>php</h3>
          <p>Server-side scripting language for web development</p>
        </div>
        <div className="tech-stack">
          <div className="tech-icon">
            <FontAwesomeIcon
              icon={faLaravel}
              style={{
                color: "#63C5DA",
                fontSize: "25px",
                backgroundColor: "rgb(99, 197, 218, 0.3)",
                width: "1em",
                padding: "0.5em",
                borderRadius: "50%",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <h3>laravel</h3>
          <p>PHP framework for elegant web applications</p>
        </div>
      </div>
    </div>
  );
};
