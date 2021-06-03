/*jshint esversion: 6 */
import "./App.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  {
    label: "Red",
    value: "RED"
  },
  {
    label: "Green",
    value: "GREEN"
  },
  {
    label: "Blue",
    value: "BLUE"
  }
];

const App = () => {

  const [selected, setSelected] = useState(options[0]);

  const [showDropDown, setShowDropDown] = useState(true);
  
  return (
    <div>
      <button onClick={() => setShowDropDown(!showDropDown)}>Toggle Dropdown</button>
      {showDropDown ? 
        <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null
      }
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
    </div>
  );
};

export default App;