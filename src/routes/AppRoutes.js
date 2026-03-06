import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyCoursesPage from "../pages/MyCoursesPage";

function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/mycourses" element={<MyCoursesPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;