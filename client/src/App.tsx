import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ClassificationPage from "./ClassificationPage";
import SearchPage from "./SearchPage";
import LoginPage from "./LoginPage";
import ResisterPage from "./ResisterPage";
import MyAccountPage from "./MyAccountPage";
function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/classfication" element={<ClassificationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ResisterPage />} />
        <Route path="/account" element={<MyAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;