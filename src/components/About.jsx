import React from "react";
import "./About.css";

// About receives bio, spiritAnimal, and tags as props from App.jsx
const About = ({ bio, spiritAnimal, tags }) => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section label */}
        <span className="section-label">About Me</span>

        <div className="about-grid">
          {/* Left — text */}
          <div className="about-text">
            <h2 className="about-heading">A little bit about me</h2>
            <p className="about-bio">{bio}</p>

            {/* Spirit animal */}
            <div className="spirit-animal">
              <span className="spirit-label">Spirit Animal:</span>
              <span className="spirit-value">{spiritAnimal}</span>
            </div>

            {/* Tech tags */}
            <div className="about-tags">
              {tags.map((tag, index) => (
                <span key={index} className="about-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — card / visual */}
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-avatar">BM</div>
              <p className="about-card-name">Bruce Mwendwa</p>
              <p className="about-card-role">Junior Software Engineer</p>
              <div className="about-card-stats">
                <div className="stat">
                  <span className="stat-num">4+</span>
                  <span className="stat-label">Blog Posts</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-num">10+</span>
                  <span className="stat-label">Hobbies</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-num">∞</span>
                  <span className="stat-label">Curiosity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
