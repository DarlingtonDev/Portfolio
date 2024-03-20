import { Link } from "react-router-dom";
import "./App.css";

export const BurgerMenu = (props) => {
  return (
    <div
      className="burger-menu"
      onClick={() => props.changeMenu()}
      style={{
        gap: props.isClicked && "0.1em",
        position: props.isClicked && "fixed",
        zIndex: props.isClicked && "20",
      }}
    >
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
  );
};

export const Header = (props) => {
  return (
    <header>
      <div
        className="logo"
        style={{
          position: props.isClicked && "fixed",
          zIndex: props.isClicked && "20",
        }}
      >
        <Link to="/" onClick={() => props.changeAbout()}>
          <h2>fortune</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/AboutPage">About Me</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Testimonials</Link>
          </li>
          <li>
            <Link>Contact Me</Link>
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
      <BurgerMenu
        isClicked={props.isClicked}
        changeMenu={props.changeMenu}
        setIsClicked={props.setIsClicked}
        setOverFlow={props.setOverFlow}
        setHeight={props.setHeight}
        addDelay={props.addDelay}
      />
    </header>
  );
};
