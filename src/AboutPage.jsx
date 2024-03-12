import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { responsiveNav } from "./Home";
export const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Header />
      <h1>About page</h1>
      <responsiveNav />
    </div>
  );
};
