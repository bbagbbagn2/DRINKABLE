import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import FlavorPage from "./FlavorPage";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/flavor" element={<FlavorPage />} />
      </Routes>
    </Router>
  );
}

export default App;