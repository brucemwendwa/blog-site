import React from "react";
import "./Footer.css";

// Footer receives name, email, github, and location as props
const Footer = ({ name, email, github, location }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top */}
        <div className="footer-top">
          <div>
            <p className="footer-name">{name}</p>
            <p className="footer-tagline">Junior Software Engineer · {location}</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${email}`} className="footer-link">
              ✉️ Email
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <p className="footer-copy">
          © {year} {name} — built with React + Vite ⚡
        </p>
      </div>
    </footer>
  );
};

export default Footer;
