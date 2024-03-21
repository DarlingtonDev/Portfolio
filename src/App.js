import React from "react";
import "./App.css";
import { Home } from "./Home";
import { AboutPage } from "./AboutPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectPage } from "./ProjectPage";

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [overFlow, setOverFlow] = useState("auto");
  const [height, setHeight] = useState("50vh");
  const [isdisplayed, setIsDisplayed] = useState(false);

  function addDelay() {
    setTimeout(() => {
      setIsDisplayed(isdisplayed);
    }, 500);
  }

  function changeMenu() {
    setIsClicked(!isClicked);
    setOverFlow("hidden");
    setHeight("0vh");
    addDelay();
  }

  function changeAbout() {
    setIsClicked(false);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                overFlow={overFlow}
                setOverFlow={setOverFlow}
                setHeight={setHeight}
                height={height}
                isdisplayed={isdisplayed}
                setIsDisplayed={setIsDisplayed}
                changeAbout={changeAbout}
                addDelay={addDelay}
                changeMenu={changeMenu}
              />
            }
          />
          <Route
            path="/AboutPage"
            element={
              <AboutPage
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                overFlow={overFlow}
                setOverFlow={setOverFlow}
                setHeight={setHeight}
                height={height}
                isdisplayed={isdisplayed}
                setIsDisplayed={setIsDisplayed}
                changeMenu={changeMenu}
                changeAbout={changeAbout}
              />
            }
          />

          <Route
            path="/ProjectPage"
            element={
              <ProjectPage
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                overFlow={overFlow}
                setOverFlow={setOverFlow}
                setHeight={setHeight}
                height={height}
                isdisplayed={isdisplayed}
                setIsDisplayed={setIsDisplayed}
                changeMenu={changeMenu}
                changeAbout={changeAbout}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
