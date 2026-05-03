import React from "react";

// Header component - displays the blog name
// Connected to App
const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
