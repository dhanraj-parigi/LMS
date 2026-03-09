import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import CoursesPage from "../pages/CoursesPage";
import CoursePlayerPage from "../pages/CoursePlayerPage";   
import AdminDashboard from "../pages/AdminDashboard"
import Dashboard from "../pages/DashboardPage"


function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />


        <Route path="/course/:id" element={<CourseDetailsPage />} />

        <Route path="/courses" element={<CoursesPage />} />

        <Route path="/player/:id" element={<CoursePlayerPage />} />

        <Route path="/admin" element={<AdminDashboard/>}/>

        <Route path="/dashboard" element={<Dashboard/>}/> 
        

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;