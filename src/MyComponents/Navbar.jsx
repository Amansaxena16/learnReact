import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="todo_heading">
        <h1>TODO List</h1>
      </div>
      <div className="about">
        <a href="#">
          <h3>Home</h3>
        </a>
      </div>
      <div className="about">
        <a href="#">
          <h3>About</h3>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
