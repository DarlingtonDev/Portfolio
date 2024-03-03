import { Link } from "react-router-dom";
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
    </header>
  );
};
