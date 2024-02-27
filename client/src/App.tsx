import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import AboutMe from './pages/about-me/AboutMe';
import Projects from "./pages/allergies/Allergies";
import Qrllergy from "./pages/qrllergy/qrllergy";
import SearchPage from "./SearchPage";
import LoginPage from "./pages/sign-in/LoginPage";
import ResisterPage from "./ResisterPage";
import MyAccountPage from "./MyAccountPage";
import PersonalDetailsPage from "./PersonalDetailsPage";
import LogoutPage from "./pages/sign-out/LogoutPage";
import WidhlistsPage from "./WishlistsPage"
import Sitemap from "./pages/sitemap/Sitemap";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/qrllergy" element={<Qrllergy />} />
        <Route path="/sitemap" element={<Sitemap />} />
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