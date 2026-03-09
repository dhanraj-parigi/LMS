import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard(){

const navigate = useNavigate()

const user = JSON.parse(localStorage.getItem("user"))

if(!user || user.role !== "admin"){
navigate("/")
return null
}

return(

<div style={{padding:"80px 10%"}}>

<h1>Admin Dashboard</h1>

<p>Manage courses in the LMS platform.</p>

<div style={{
marginTop:"30px",
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px"
}}>

<div style={{
padding:"30px",
background:"#f3f4f6",
borderRadius:"10px"
}}>
<h3>Add Course</h3>
</div>

<div style={{
padding:"30px",
background:"#f3f4f6",
borderRadius:"10px"
}}>
<h3>Edit Course</h3>
</div>

<div style={{
padding:"30px",
background:"#f3f4f6",
borderRadius:"10px"
}}>
<h3>Delete Course</h3>
</div>

</div>

</div>

)

}

export default AdminDashboard