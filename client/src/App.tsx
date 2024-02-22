import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main/Main";
import ClassificationPage from "./pages/allergies/Allergies";
import SearchPage from "./SearchPage";
import LoginPage from "./pages/sign-in/LoginPage";
import ResisterPage from "./ResisterPage";
import MyAccountPage from "./MyAccountPage";
import PersonalDetailsPage from "./PersonalDetailsPage";
import LogoutPage from "./pages/sign-out/LogoutPage";
import WidhlistsPage from "./WishlistsPage"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/allergies" element={<ClassificationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ResisterPage />} />
        <Route path="/account/*" element={<MyAccountPage />} />
        <Route path="/account/personal-details" element={<PersonalDetailsPage />} />
        <Route path="/sign-out" element={<LogoutPage />} />
        <Route path="/wishlists" element={<WidhlistsPage />} />
      </Routes>
  );
};