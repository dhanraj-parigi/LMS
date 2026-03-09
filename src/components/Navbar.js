import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user"));

const handleLogout = () => {
localStorage.removeItem("user");
navigate("/");
};

return (

<nav
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"22px 10%",
background:"#ffffff",
boxShadow:"0 2px 10px rgba(0,0,0,0.05)"
}}
>

<Link to="/" style={{textDecoration:"none"}}>
<h2 style={{color:"#2563eb",fontWeight:"700"}}>LMS</h2>
</Link>

<div style={{display:"flex",gap:"25px",alignItems:"center"}}>

<Link to="/" style={{textDecoration:"none",color:"#374151"}}>
Home
</Link>

<Link to="/courses" style={{textDecoration:"none",color:"#374151"}}>
Courses
</Link>

{/* Student Dashboard */}
{user && user.role === "student" && (
<Link to="/dashboard" style={{textDecoration:"none",color:"#374151"}}>
Dashboard
</Link>
)}

{/* Admin Panel */}
{user && user.role === "admin" && (
<Link to="/admin" style={{textDecoration:"none",color:"#374151"}}>
Admin Panel
</Link>
)}

{/* Login */}
{!user && (
<Link to="/login" style={{textDecoration:"none",color:"#374151"}}>
Login
</Link>
)}

{/* Signup */}
{!user && (
<Link to="/signup">
<button
style={{
background:"#2563eb",
color:"white",
border:"none",
padding:"8px 20px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Sign Up
</button>
</Link>
)}

{/* Logout */}
{user && (
<button
onClick={handleLogout}
style={{
background:"#ef4444",
color:"white",
border:"none",
padding:"8px 20px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Logout
</button>
)}

</div>

</nav>

);

}

export default Navbar;