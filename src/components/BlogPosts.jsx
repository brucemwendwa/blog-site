import React from "react";
import BlogCard from "./BlogCard";
import "./BlogPosts.css";

// BlogPosts receives the posts array as a prop from App.jsx
// It maps over it and renders a BlogCard for each one
const BlogPosts = ({ posts }) => {
  return (
    <section className="posts-section" id="posts">
      <div className="posts-container">
        {/* Header */}
        <div className="posts-header">
          <span className="section-label-posts">Blog Posts</span>
          <h2 className="posts-heading">Things I've been writing about</h2>
          <p className="posts-subheading">
            Mostly about coding, lessons learned, and stuff I found interesting.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="posts-grid">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
