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
  const [showHire, setShowHire] = useState(false);
  const [isLoading, setIslLoading] = useState(false);

  function timeOut() {
    setTimeout(() => {
      setIslLoading(false);
      setShowHire(true);
    }, 1500);
  }
  const showHireClick = () => {
    setIslLoading(true);
    timeOut();
  };

  const removeHire = () => {
    setShowHire(!showHire);
  };

  const scrollEr = (id) => {
    const elemenT = document.getElementById(id);
    elemenT.scrollIntoView({ behavior: "smooth" });
  };

  const navScroll = (id) => {
    const contactElement = document.getElementById(id);
    contactElement.scrollIntoView({ behavior: "smooth" });
    setIsClicked(!isClicked);
  };

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
                navScroll={navScroll}
                scrollEr={scrollEr}
                showHire={showHire}
                showHireClick={showHireClick}
                removeHire={removeHire}
                isLoading={isLoading}
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
                navScroll={navScroll}
                scrollEr={scrollEr}
                showHire={showHire}
                showHireClick={showHireClick}
                removeHire={removeHire}
                isLoading={isLoading}
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
                showHire={showHire}
                showHireClick={showHireClick}
                removeHire={removeHire}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
