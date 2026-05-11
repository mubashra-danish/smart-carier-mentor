import React, { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await api.post("/users", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert("Signup successful ✅");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Signup failed ❌");
    }
  };
  return (
    <div className="container">
      {" "}
      <form className="form" onSubmit={handleSignup}>
        {" "}
        <h2>Signup</h2>{" "}
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
          onChange={handleChange}
        />{" "}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          onChange={handleChange}
        />{" "}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
          onChange={handleChange}
        />{" "}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
        />{" "}
        {/* <select name="role" onChange={handleChange}> <option value="">Select Role</option> <option value="user">User</option> <option value="admin">Admin</option> </select> */}{" "}
        <button type="submit">Signup</button>{" "}
        <p className="switch-text">
          {" "}
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>{" "}
      </form>{" "}
    </div>
  );
};
export default Signup;
