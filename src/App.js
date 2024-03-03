import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}
