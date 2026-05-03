import React, { Component } from "react";
import "./Hobbies.css";

// Hobbies — class-based component (as required by the lab)
// receives the hobbies array as props from App.jsx
class Hobbies extends Component {
  render() {
    const { hobbies } = this.props;

    return (
      <section className="hobbies-section" id="hobbies">
        <div className="hobbies-container">
          {/* Header */}
          <span className="section-label-hobbies">Hobbies</span>
          <h2 className="hobbies-heading">What I do when I'm not coding</h2>
          <p className="hobbies-sub">
            Well... one of them is coding. But here are all 10.
          </p>

          {/* Legend */}
          <div className="hobbies-legend">
            <span className="legend-star">⭐</span>
            <span className="legend-text">= Top 3 favourites</span>
          </div>

          {/* List */}
          <ul className="hobbies-list">
            {hobbies.map((hobby) => (
              <li
                key={hobby.id}
                className={`hobby-item ${hobby.isFavourite ? "hobby-fav" : ""}`}
              >
                <span className="hobby-num">#{hobby.id}</span>
                <span className="hobby-name">{hobby.name}</span>
                {hobby.isFavourite && (
                  <span className="hobby-badge">⭐ Fave</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Hobbies;
