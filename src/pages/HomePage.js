import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/laptop2.jpg";
import learning from "../assets/learning.jpg";

function HomePage() {

return (

<div>


{/* HERO SECTION */}

<section
style={{
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"120px 10%",
background:"linear-gradient(135deg,#eef2ff,#f8fafc)",
gap:"80px"
}}
>

<div style={{flex:1}}>

<h1 style={{
fontSize:"56px",
fontWeight:"700",
marginBottom:"20px",
color:"#111827"
}}>
Learn Programming Skills
</h1>

<p style={{
fontSize:"18px",
color:"#4b5563",
lineHeight:"1.8",
maxWidth:"520px"
}}>
Our Learning Management System helps students learn modern programming technologies like React, JavaScript and Python through structured courses and guided learning paths.
</p>

<Link to="/courses">
<button style={{
marginTop:"30px",
padding:"14px 30px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"8px",
fontSize:"16px",
cursor:"pointer"
}}>
Browse Courses
</button>
</Link>

</div>


<div style={{flex:1,display:"flex",justifyContent:"center"}}>

<img
src={hero}
alt="learning platform"
style={{
width:"100%",
maxWidth:"520px",
height:"360px",
objectFit:"cover",
borderRadius:"16px",
boxShadow:"0 10px 30px rgba(0,0,0,0.15)"
}}
/>

</div>

</section>



{/* ABOUT LMS */}

<section
style={{
padding:"120px 10%",
textAlign:"center",
background:"#ffffff"
}}
>

<h2 style={{
fontSize:"36px",
marginBottom:"20px"
}}>
A Modern Learning Management System
</h2>

<p style={{
maxWidth:"650px",
margin:"auto",
fontSize:"18px",
color:"#6b7280",
lineHeight:"1.8"
}}>
Our LMS platform allows students to explore programming courses, watch video lectures, track learning progress, and build real-world development skills through project-based education.
</p>

</section>


{/* PLATFORM FEATURES */}

{/* PLATFORM FEATURES */}

<section
style={{
padding:"120px 10%",
background:"#f9fafb"
}}
>

<h2 style={{
textAlign:"center",
fontSize:"36px",
marginBottom:"70px"
}}>
Platform Features
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"30px"
}}
>

<div style={{
background:"#ffffff",
padding:"35px",
borderRadius:"12px",
boxShadow:"0 4px 14px rgba(0,0,0,0.06)"
}}>
<h3>Course Catalog</h3>
<p style={{color:"#6b7280"}}>
Browse multiple programming courses organized into structured learning paths.
</p>
</div>


<div style={{
background:"#ffffff",
padding:"35px",
borderRadius:"12px",
boxShadow:"0 4px 14px rgba(0,0,0,0.06)"
}}>
<h3>Video Learning</h3>
<p style={{color:"#6b7280"}}>
Watch video lessons directly inside the platform using integrated course players.
</p>
</div>


<div style={{
background:"#ffffff",
padding:"35px",
borderRadius:"12px",
boxShadow:"0 4px 14px rgba(0,0,0,0.06)"
}}>
<h3>Progress Tracking</h3>
<p style={{color:"#6b7280"}}>
Monitor your learning progress and track completion of courses.
</p>
</div>


<div style={{
background:"#ffffff",
padding:"35px",
borderRadius:"12px",
boxShadow:"0 4px 14px rgba(0,0,0,0.06)"
}}>
<h3>User Dashboard</h3>
<p style={{color:"#6b7280"}}>
Students can manage enrolled courses and continue their learning journey.
</p>
</div>


<div style={{
background:"#ffffff",
padding:"35px",
borderRadius:"12px",
boxShadow:"0 4px 14px rgba(0,0,0,0.06)"
}}>
<h3>Course Ratings</h3>
<p style={{color:"#6b7280"}}>
Students can rate courses and provide feedback after completing lessons.
</p>
</div>


<div style={{
background:"#ffffff",
padding:"35px",
borderRadius:"12px",
boxShadow:"0 4px 14px rgba(0,0,0,0.06)"
}}>
<h3>Admin Course Management</h3>
<p style={{color:"#6b7280"}}>
Admins can add, edit and delete courses using the admin dashboard.
</p>
</div>

</div>

</section>



{/* FEATURED COURSES */}

<section
style={{
padding:"120px 10%",
background:"#ffffff"
}}
>

<h2 style={{
textAlign:"center",
fontSize:"36px",
marginBottom:"70px"
}}>
Featured Courses
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"30px"
}}
>

<div style={{
background:"#f9fafb",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 6px 18px rgba(0,0,0,0.08)"
}}>
<h3>React Basics</h3>
<p style={{color:"#6b7280"}}>Learn components, hooks and modern React development.</p>
<p style={{color:"#f59e0b"}}>⭐⭐⭐⭐☆</p>
</div>


<div style={{
background:"#f9fafb",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 6px 18px rgba(0,0,0,0.08)"
}}>
<h3>JavaScript Fundamentals</h3>
<p style={{color:"#6b7280"}}>Understand variables, loops and functions.</p>
<p style={{color:"#f59e0b"}}>⭐⭐⭐⭐☆</p>
</div>


<div style={{
background:"#f9fafb",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 6px 18px rgba(0,0,0,0.08)"
}}>
<h3>Python Programming</h3>
<p style={{color:"#6b7280"}}>Start coding with Python today.</p>
<p style={{color:"#f59e0b"}}>⭐⭐⭐⭐⭐</p>
</div>

</div>

</section>



{/* WHY LEARN */}

<section
style={{
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"120px 10%",
background:"#f9fafb",
gap:"80px"
}}
>

<div style={{flex:1}}>

<h2 style={{fontSize:"36px",marginBottom:"20px"}}>
Why Learn With Our Platform
</h2>

<p style={{color:"#6b7280",lineHeight:"1.8"}}>
Our platform focuses on practical programming education with industry-relevant technologies and guided learning paths.
</p>

<ul style={{marginTop:"20px",lineHeight:"2",color:"#374151"}}>
<li>Expert-designed curriculum</li>
<li>Project-based learning</li>
<li>Industry-relevant skills</li>
</ul>

</div>

<img
src={learning}
alt="learning"
style={{
width:"460px",
borderRadius:"14px",
boxShadow:"0 8px 30px rgba(0,0,0,0.12)"
}}
/>

</section>



{/* FOOTER */}

<footer
style={{
background:"#111827",
color:"white",
padding:"60px 10%"
}}
>

<div
style={{
display:"flex",
justifyContent:"space-between",
flexWrap:"wrap",
gap:"40px"
}}
>

<div>

<h2>LMS Platform</h2>

<p style={{
color:"#9ca3af",
maxWidth:"300px"
}}>
A modern learning management system designed for students and developers to learn programming skills online.
</p>

</div>


<div>

<h4>Platform</h4>

<Link to="/courses" style={{display:"block",color:"#9ca3af",textDecoration:"none",marginTop:"8px"}}>
Courses
</Link>

</div>


<div>

<h4>Account</h4>

<Link to="/login" style={{display:"block",color:"#9ca3af",textDecoration:"none",marginTop:"8px"}}>
Login
</Link>

<Link to="/signup" style={{display:"block",color:"#9ca3af",textDecoration:"none",marginTop:"8px"}}>
Sign Up
</Link>

</div>

</div>


<p style={{
marginTop:"40px",
color:"#9ca3af"
}}>
© 2026 LMS Platform. All rights reserved.
</p>

</footer>



</div>

)

}

export default HomePage