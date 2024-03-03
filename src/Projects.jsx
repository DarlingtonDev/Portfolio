import { Link, NavLink } from "react-router-dom";

export const Project = () => {
  return (
    <div className="project-sec">
      <div className="project-head">
        <h1>Our Projects</h1>
        <p>
          We have been providing great <br /> flooring solution service
        </p>
        <div className="projects-cat">
          <div className="green">all</div>
          <div className="category">finance</div>
          <div className="category">e-commerce</div>
          <div className="category">entertainment</div>
          <div className="category">Business</div>
        </div>
      </div>
      <div className="project-body">
        <p>No project to show yet😔</p>
      </div>
    </div>
  );
};
