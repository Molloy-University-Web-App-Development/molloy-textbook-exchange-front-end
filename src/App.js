import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Main/>
          }
        ></Route>
        <Route exact path="/book/1" element={<TextbookInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
