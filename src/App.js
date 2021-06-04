/*jshint esversion: 6 */
import "./App.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Why do we use it?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    title: "Example",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia augue eget enim lacinia malesuada vitae et magna. Quisque at metus tortor. Nam quis semper nisi, sit amet consequat sapien. Ut fringilla nisi quis ligula pulvinar, id hendrerit lectus tempus. Cras congue pulvinar purus, quis fringilla ipsum facilisis in. Nam arcu nisi, dapibus id diam eget, blandit lobortis ligula. Etiam vitae lacus ac ligula semper feugiat. Curabitur aliquet diam ac ultrices dignissim. Nam mollis imperdiet lorem, in faucibus ante sagittis a.",
  },
];

const options = [
  {
    label: "Red",
    value: "COLOR RED"
  },
  {
    label: "Green",
    value: "COLOR GREEN"
  },
  {
    label: "Blue",
    value: "COLOR BLUE"
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  /*
  Alternative to show other Widget options!!
  const [showDropDown, setShowDropDown] = useState(true);

  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };

  const showWikiSearch = () => {
    if (window.location.pathname === "/search") {
      return <Search />;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
      return (
        <div>
          <button onClick={() => setShowDropDown(!showDropDown)}>
            Toggle Dropdown
          </button>
          {showDropDown ? (
            <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
            />
            ) : null}
        </div>
      );  
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  }; 
  
  return (
    <div>
      {showTranslate()}
      {showAccordion()}
      {showDropDown()}
      {showTranslate()}
    </div>
  );
*/

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;