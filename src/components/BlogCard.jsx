import React from "react";
import "./BlogCard.css";

// BlogCard — renders one blog post, receives a post object as a prop
const BlogCard = ({ post }) => {
  const { title, date, category, readTime, excerpt, emoji } = post;

  return (
    <article className="blog-card">
      {/* Top row — emoji + category */}
      <div className="card-top">
        <span className="card-emoji">{emoji}</span>
        <span className="card-category">{category}</span>
      </div>

      {/* Title */}
      <h3 className="card-title">{title}</h3>

      {/* Excerpt */}
      <p className="card-excerpt">{excerpt}</p>

      {/* Footer */}
      <div className="card-footer">
        <span className="card-date">{date}</span>
        <span className="card-dot">·</span>
        <span className="card-read-time">{readTime}</span>
      </div>

      {/* Hover arrow */}
      <div className="card-arrow">→</div>
    </article>
  );
};

export default BlogCard;
