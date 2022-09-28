import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TextbookInfo from "./pages/TextbookInfo";
import Main from "./pages/Main";
// import Foo from "./Foo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
            <h1>SHeesh</h1>
            </>
          }
        ></Route>
        <Route exact path="/book/1" element={<TextbookInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
