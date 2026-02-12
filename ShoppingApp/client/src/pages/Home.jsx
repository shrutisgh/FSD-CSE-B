import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Platform 🌟</h1>
        <p>
          Experience a smooth and interactive web journey. Whether you're here
          to explore, learn, or build — we’ve got everything you need.
        </p>
        <button onClick={() => navigate("/explore")}>Get Started</button>
      </div>

      <div className="home-image">
        <img
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="Welcome Illustration"
        />
      </div>
    </div>
  );
};

export default Home;
