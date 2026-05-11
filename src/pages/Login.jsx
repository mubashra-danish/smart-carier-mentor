import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  const [users, setUsers] = useState([]);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate()
 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/login", {
      email,
      password,
    });
     
    console.log(res.data);
    alert("Login Successful ✅");
    navigate("/")

  } catch (error) {
    console.log(error);
    alert("Login Failed ❌");
  }
};

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    api
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleLogin} className="form">
        <h2>Login</h2>

        <input 
        type="email"
         placeholder="Enter Email"
          value={email}
  onChange={(e) => setEmail(e.target.value)}
         required />

        <input type="password"
         placeholder="Enter Password" 
          value={password}
  onChange={(e) => setPassword(e.target.value)}
         required />

        <button type="submit">Login</button>

        <p className="switch-text">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>

      {/* Optional */}
      {/* 
      <div>
        <h1>Users</h1>
        {users.map((u, i) => (
          <div key={i}>
            <p>{u.username}</p>
            <p>{u.id}</p>
            <p>{u.created_at}</p>
          </div>
        ))}
      </div>
      */}
    </div>
  );
};

export default Login;