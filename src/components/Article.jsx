import React from "react";

// Article component - displays a single blog post's title, date, and preview
// Connected to ArticleList
const Article = ({ title, date = "January 1, 1970", preview }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
