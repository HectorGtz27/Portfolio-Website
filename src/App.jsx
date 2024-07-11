import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import ProjectInfoScreen from "./screens/ProjectInfoScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/projects-info" element={<ProjectInfoScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
