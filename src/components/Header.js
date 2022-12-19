import React from "react";
import "./Header.css";
import { HashLink } from "react-router-hashlink";
const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li>
          <HashLink className="nav-link" to="/#home-title">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink className="nav-link" to="/discover">
            Discover
          </HashLink>
        </li>
        <li>
          <HashLink className="nav-link" to="/team">
            Team
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
