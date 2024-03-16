import { Link } from "react-router-dom";
import "./App.css";
export const Header = (props) => {
  function changeMenu() {
    props.setIsClicked(!props.isClicked);
    props.setOverFlow("hidden");
    props.setHeight("0vh");
  }
  return (
    <header>
      <div className="logo">
        <Link
          to=""
          style={{
            position: props.isClicked && "fixed",
            zIndex: props.isClicked && "20",
          }}
        >
          <h2>fortune</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/AboutPage">About Me</Link>
          </li>
          <li>
            <Link to="">Services</Link>
          </li>
          <li>
            <Link to="">Testimonials</Link>
          </li>
          <li>
            <Link to="">Contact Me</Link>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <select name="" id="">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
          <option value="de">DE</option>
        </select>
        <button className="hire-me">Hire Me</button>
      </div>
      <div
        className="burger-menu"
        onClick={changeMenu}
        style={{
          gap: props.isClicked && "0.1em",
          position: props.isClicked && "fixed",
          zIndex: props.isClicked && "20",
        }}
      >
        {/* <FontAwesomeIcon
icon={faBars}
style={{ fontSize: "25px", color: "rgba(2, 138, 15, 0.8)" }}
/> */}
        <div
          className="div-1 "
          style={{
            width: props.isClicked && "1.5em",
            transform: props.isClicked && "translateY(0.25em) rotate(-48deg)",
          }}
        ></div>
        <div
          className="div-1"
          style={{
            width: props.isClicked && "0em",
            transform: props.isClicked && "translateX(-0.01em)",
          }}
        ></div>
        <div
          className="div-1"
          style={{
            width: props.isClicked && "1.5em",
            transform:
              props.isClicked &&
              "translateY(-0.35em) translateX(-0.5px) rotate(45deg)",
          }}
        ></div>
      </div>
    </header>
  );
};
