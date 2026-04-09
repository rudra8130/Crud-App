import { useState } from "react";
import api from "./api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelsignup = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user", {
        name: name,
        email: email,
        password: password,
      });
      const token = response.data.access_token;

      localStorage.setItem("token", token);
      alert("SignUp Successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      alert(error.response?.data?.detail || "SignUp Failed!");
    }
  };
  return (
    <div className="blur-bg d-flex justify-content-center align-items-center">
      <div className="card glass-card p-4">
        <h3 className="text-center mb-4">Sign Up</h3>

        <form onSubmit={handelsignup}>
          <div className="mb-3">
            <label className="form-label">Enter Name</label>
            <input
              type="name"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Enter Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Create Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>

          {/* Signup link */}
          <p className="text-center mt-3 mb-0">
            Already have a account?{" "}
            <a href="/signin" className="text-decoration-none fw-bold">
              SignIn
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
