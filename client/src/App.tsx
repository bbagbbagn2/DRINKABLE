import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ClassificationPage from "./ClassificationPage";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/flavor" element={<ClassificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;