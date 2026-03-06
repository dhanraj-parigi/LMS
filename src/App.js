import React from "react";  
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/mycourses" element={<MyCoursesPage />} />

        <Route path="/course/:id" element={<CourseDetailsPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;