import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CoursePlayerPage from "./pages/CoursePlayerPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/DashboardPage";

function App() {

return (

<Router>

<Navbar />

<Routes>

<Route path="/" element={<HomePage />} />

<Route path="/courses" element={<CoursesPage />} />

<Route path="/course/:id" element={<CourseDetailsPage />} />

<Route path="/player/:id" element={<CoursePlayerPage />} />

<Route path="/login" element={<LoginPage />} />

<Route path="/signup" element={<SignupPage />} />

<Route path="/admin" element={<AdminDashboard />} />

<Route path="/dashboard" element={<Dashboard />} />

</Routes>

</Router>

)

}

export default App;