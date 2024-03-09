import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="">
          <h2>fortune</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="">About Me</Link>
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
      <div className="burger-menu">
        {/* <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "25px", color: "rgba(2, 138, 15, 0.8)" }}
        /> */}
        <div className="div-1"></div>
        <div className="div-1"></div>
        <div className="div-1"></div>
      </div>
    </header>
  );
};
