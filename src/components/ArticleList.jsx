import React from "react";
import Article from "./Article";

// ArticleList component - maps over the posts array and renders an Article for each
// Connected to App (parent) and Article (child)
const ArticleList = ({ posts = [] }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;
