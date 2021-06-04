import React from "react";
import Link from "./Link";

const Header = () => {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <div className="ui four item menu">
            <Link href="/" className="item">
              Accordion
            </Link>
            <Link href="/search" className="item">
              WikiSearch
            </Link>
            <Link href="/dropdown" className="item">
              DropDown
            </Link>
            <Link href="/translate" className="item">
              Translate
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Header;