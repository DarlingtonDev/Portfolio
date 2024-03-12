import { Link } from "react-router-dom";
import "./App.css";
export const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to="" style={{ position: props.isClicked && "fixed" }}>
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
    </header>
  );
};
