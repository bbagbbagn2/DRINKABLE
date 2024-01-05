import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./MainPage";
import ClassificationPage from "./ClassificationPage";
import SearchPage from "./SearchPage";
import LoginPage from "./LoginPage";
import ResisterPage from "./ResisterPage";
import MyAccountPage from "./MyAccountPage";
import PersonalDetailsPage from "./PersonalDetailsPage";
import LogOutPage from "./LogOutPage";
import WidhlistsPage from "./WishlistsPage"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/classfication" element={<ClassificationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ResisterPage />} />
        <Route path="/account/*" element={<MyAccountPage />} />
        <Route path="/account/personal-details" element={<PersonalDetailsPage />} />
        <Route path="/sign-out" element={<LogOutPage />} />
        <Route path="/wishlists" element={<WidhlistsPage />} />
      </Routes>
  );
};