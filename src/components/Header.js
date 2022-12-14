import React from "react";
import { HashLink } from "react-router-hashlink";
const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <HashLink className="link" to="/#home-title">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink className="link" to="/book/1">
            Database Systems
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
