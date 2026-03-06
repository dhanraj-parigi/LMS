import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {

    const user = { name,email,password };

    await fetch("http://localhost:3001/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
    });

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div className="container mt-5">

      <h2>Signup</h2>

      <input
        className="form-control mb-3"
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        className="btn btn-success"
        onClick={handleSignup}
      >
        Signup
      </button>

    </div>
  );
}

export default SignupPage;