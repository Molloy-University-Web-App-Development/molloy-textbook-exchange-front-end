import React from "react";
import "../styles.css";
import { HashLink } from "react-router-hashlink";
export default function Main() {
  return (
    <>
      <h1 id="home-title">Welcome to Textbook Exchange</h1>
      <HashLink to="book/1">Database Systems</HashLink>
    </>
  );
}
