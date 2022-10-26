import React from "react";
import { HashLink } from "react-router-hashlink";
const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <HashLink to="/#home-title">Home</HashLink>
      </ul>
    </nav>
  );
};

export default Header;
