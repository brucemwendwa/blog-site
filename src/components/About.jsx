import React from "react";

// About component - displays an image and a short description about the blog
// Connected to App
const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
