import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DashboardPage(){

const user = JSON.parse(localStorage.getItem("user"))

const [courses,setCourses] = useState([])
const [search,setSearch] = useState("")

const [enrolled,setEnrolled] = useState(
JSON.parse(localStorage.getItem("enrolledCourses")) || []
)

const [completed,setCompleted] = useState(
JSON.parse(localStorage.getItem("completedCourses")) || []
)

useEffect(()=>{

fetch("http://localhost:3001/courses")
.then(res=>res.json())
.then(data=>setCourses(data))

},[])

const filteredCourses = courses.filter(course =>
course.title.toLowerCase().includes(search.toLowerCase())
)

const enrollCourse = (course) => {

if(!enrolled.find(c => c.id === course.id)){

const updated = [...enrolled,course]

setEnrolled(updated)

localStorage.setItem("enrolledCourses",JSON.stringify(updated))

}

}

return(

<div style={{padding:"80px 10%"}}>

<h1>Student Dashboard</h1>

<h2>Welcome {user?.name}</h2>

{/* STAT BOXES */}

<div style={{
display:"flex",
gap:"30px",
marginTop:"30px"
}}>

<div style={box}>
<h2>{courses.length}</h2>
<p>Available Courses</p>
</div>

<div style={box}>
<h2>{enrolled.length}</h2>
<p>Enrolled Courses</p>
</div>

<div style={box}>
<h2>{completed.length}</h2>
<p>Completed Courses</p>
</div>

</div>


{/* SEARCH BAR */}

<input
placeholder="Search courses..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
marginTop:"30px",
padding:"12px",
width:"350px",
borderRadius:"8px",
border:"1px solid #ccc"
}}
/>


{/* TRENDING COURSES */}

<h3 style={{marginTop:"40px"}}>Trending Courses</h3>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"20px"
}}>

{filteredCourses.slice(0,6).map(course => (

<div
key={course.id}
style={{
padding:"20px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}
>

<img
src={course.image}
alt={course.title}
style={{
width:"100%",
height:"120px",
objectFit:"contain"
}}
/>

<h3>{course.title}</h3>

<p>Instructor: {course.instructor}</p>

<Link to={`/course/${course.id}`}>

<button
onClick={()=>enrollCourse(course)}
style={{
background:"#2563eb",
color:"white",
border:"none",
padding:"8px 15px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Enroll
</button>

</Link>

</div>

))}

</div>

</div>

)

}

const box = {

background:"#f3f4f6",
padding:"20px",
borderRadius:"10px",
minWidth:"160px",
textAlign:"center"

}

export default DashboardPage