import { useHistory } from "react";

import "../Main.css";
import logo from "../images/molloy-logo.png";
import molloy from "../images/Molloy.png";
import { HashLink } from "react-router-hashlink";
export default function Main() {
  let width = window.innerWidth;
  console.log(width);
  const handleClick = () => {
    alert("Discover Button - useHistory not working");
  };
  return (
    <main id="main">
      <img src={molloy} alt="Molloy University" id="molloy_img"></img>
      <div className="centered">
        <h1 className="main-title">
          <span className="molloy-title">Molloy</span> textbook exchange
        </h1>
        <h3>Helping students with their textbook game</h3>
        <p>For students built by students</p>
        <HashLink id="discover" to="/discover">
          Discover textbooks avaliable
        </HashLink>
      </div>
    </main>
  );
}
