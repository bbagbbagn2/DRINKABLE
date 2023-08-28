import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ClassificationPage from "./ClassificationPage";
import LoginPage from "./LoginPage";
import SearchPage from "./SearchPage";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/classfication" element={<ClassificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;