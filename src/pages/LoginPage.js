import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    const res = await fetch("http://localhost:3001/users");
    const users = await res.json();

    const user = users.find(
      (u)=>u.email===email && u.password===password
    );

    if(user){

      // save user in browser
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login Successful");

      navigate("/");
    }
    else{
      alert("Invalid Email or Password");
    }

  };

  return (
    <div className="container mt-5">

      <h2>Login</h2>

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
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default LoginPage;