import React from "react";
import Add from "../images/addAvatar.png";
const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <p>Don't you have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
