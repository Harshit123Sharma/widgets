import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState("Marvel");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);

        return () => {
            clearTimeout(timerID);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
          <div key={result.pageid} className="item">
            <div className="right floated content">
              <a
                className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
              >
                GO
              </a>
            </div>
            <div className="content">
              <div className="header" style={{ color: "white", fontWeight: "bold", textDecorationLine: "underline" }}>
                {result.title}
              </div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
            </div>
          </div>
        );
    });

    return (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className="input" 
                    placeholder="Search"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    /*{ onKeyDown={e => e.key === "Enter" && handle} }
                        const handle = () => {
                        if (term) {
                        search();
                        }        }*/
                     />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;