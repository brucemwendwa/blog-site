import React from "react";
import "./Hero.css";

// Hero section — receives blogger info as props from App.jsx
const Hero = ({ name, role, tagline, location }) => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Greeting */}
        <p className="hero-greeting">👋 hey there, I'm</p>

        {/* Name */}
        <h1 className="hero-name">{name}</h1>

        {/* Role badge */}
        <div className="hero-role-badge">
          <span className="role-dot"></span>
          {role}
        </div>

        {/* Tagline */}
        <p className="hero-tagline">{tagline}</p>

        {/* Location pill */}
        <p className="hero-location">📍 {location}</p>

        {/* CTA buttons */}
        <div className="hero-cta">
          <a href="#posts" className="btn-primary">Read My Blog</a>
          <a href="#about" className="btn-secondary">About Me</a>
        </div>
      </div>

      {/* decorative blur blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
};

export default Hero;
