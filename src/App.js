import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextbookInfo from "./pages/TextbookInfo";
import Main from "./pages/Main";
import Header from "./components/Header";
import Team from "./pages/Team";
import Discover from "./pages/Discover";

export default function App() {
  return (
    <section id="root-comp">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/book/1" element={<TextbookInfo />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}
