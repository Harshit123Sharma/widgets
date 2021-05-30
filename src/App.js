/*jshint esversion: 6 */
import "./App.css";
import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "A",
    content: "B",
  },
  {
    title: "C",
    content: "D",
  },
  {
    title: "E",
    content: "F",
  }
];

export default function App() {

  return (
    <div>
      {/*<Accordion items={items} />*/}
      <Search />
    </div>
  );
}