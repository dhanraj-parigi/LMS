import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetailsPage(){

const {id} = useParams()

const [course,setCourse] = useState(null)

useEffect(()=>{

fetch(`http://localhost:3001/courses/${id}`)
.then(res=>res.json())
.then(data=>setCourse(data))

},[id])

if(!course) return <p>Loading...</p>

return(

<div style={{padding:"80px 10%"}}>

<h1>{course.title}</h1>

<img
src={course.image}
alt={course.title}
style={{
width:"200px",
marginTop:"20px"
}}
/>

<p style={{marginTop:"20px"}}>
{course.description}
</p>

<p><b>Instructor:</b> {course.instructor}</p>

<p><b>Duration:</b> {course.duration}</p>

<Link to={`/player/${course.id}`}>

<button
style={{
marginTop:"20px",
padding:"10px 20px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"6px"
}}
>
Start Learning
</button>

</Link>

</div>

)

}

export default CourseDetailsPage