import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CoursePlayerPage() {

const { id } = useParams()

const [course,setCourse] = useState(null)
const [completed,setCompleted] = useState(false)

useEffect(()=>{

fetch(`http://localhost:3001/courses/${id}`)
.then(res=>res.json())
.then(data=>setCourse(data))

},[id])

if(!course){
return <h2>Loading...</h2>
}

const handleComplete = () => {

setCompleted(true)

let completedCourses =
JSON.parse(localStorage.getItem("completedCourses")) || []

if(!completedCourses.find(c=>c.id === course.id)){

completedCourses.push(course)

localStorage.setItem(
"completedCourses",
JSON.stringify(completedCourses)
)

}

}

return (

<div style={{padding:"80px 10%"}}>

<h1>{course.title}</h1>

<iframe
width="900"
height="500"
src={course.video}
title={course.title}
frameBorder="0"
allowFullScreen
></iframe>

<br/><br/>

<button
onClick={handleComplete}
style={{
background:"green",
color:"white",
border:"none",
padding:"10px 20px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Mark as Completed
</button>

{completed && (
<p style={{color:"green",marginTop:"10px"}}>
✔ Course Completed
</p>
)}

</div>

)

}

export default CoursePlayerPage