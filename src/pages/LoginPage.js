import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

const navigate = useNavigate()

const handleLogin = async () => {

if(!email || !password){
setError("Please enter email and password")
return
}

try{

const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
const data = await res.json()

if(data.length === 0){
setError("Invalid email or password")
return
}

const user = data[0]

localStorage.setItem("user",JSON.stringify(user))

// Redirect based on role
if(user.role === "admin"){
navigate("/admin")
}else{
navigate("/dashboard")
}

}catch(err){
setError("Something went wrong. Please try again.")
}

}

return (

<div
style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"80vh"
}}
>

<div
style={{
width:"350px",
padding:"30px",
background:"#ffffff",
borderRadius:"10px",
boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
}}
>

<h2 style={{textAlign:"center"}}>Login</h2>

{error && (
<p style={{color:"red",textAlign:"center"}}>{error}</p>
)}

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
display:"block",
width:"100%",
margin:"10px 0",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
display:"block",
width:"100%",
margin:"10px 0",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<button
onClick={handleLogin}
style={{
width:"100%",
padding:"10px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer",
marginTop:"10px"
}}
>
Login
</button>

</div>

</div>

)

}

export default LoginPage