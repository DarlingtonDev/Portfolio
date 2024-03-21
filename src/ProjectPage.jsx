import { Header } from "./Header";
import { ResponsiveNav } from "./Home";
export const ProjectPage = (props) => {
  return (
    <div className="projectPage">
      <ResponsiveNav
        isClicked={props.isClicked}
        height={props.height}
        isdisplayed={props.isdisplayed}
        changeAbout={props.changeAbout}
        setCurrentPage={props.setCurrentPage}
      />
      <Header
        isClicked={props.isClicked}
        setIsClicked={props.setIsClicked}
        setOverFlow={props.setOverFlow}
        setHeight={props.setHeight}
        addDelay={props.addDelay}
        aboutClick={props.aboutClick}
        setCurrentPage={props.setCurrentPage}
        changeMenu={props.changeMenu}
        changeAbout={props.changeAbout}
      />

      <div className="projectPageHead">
        <h1>Projects</h1>
        <p>
          I've worked on tons of little projects over the years but these are
          the ones that I'm most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas on how it can be improved.
        </p>
      </div>

      <div className="projectCarousel">
        <p>No project to show yet😔</p>
      </div>
    </div>
  );
};
