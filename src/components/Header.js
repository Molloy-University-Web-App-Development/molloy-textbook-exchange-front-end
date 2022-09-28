import React from "react";
import { HashLink } from "react-router-hashlink";
const Header = () => {
  return <nav>
    <ul>
      <HashLink to="/#home-title">Home</HashLink>
    </ul>
  </nav>;
};

export default Header;
