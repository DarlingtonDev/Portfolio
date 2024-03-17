import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
// import { AboutPage } from "./AboutPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/AboutPage" Component={AboutPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}
