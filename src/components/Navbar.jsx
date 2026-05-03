import React from "react";
import "./Navbar.css";

// Navbar receives the blogger's name and github link as props
const Navbar = ({ name, github }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-dot"></span>
        <span className="brand-name">{name.split(" ")[0]}'s Blog</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#posts">Posts</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
