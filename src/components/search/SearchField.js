import React, { useState } from "react";
import "./searchField.css";
const SearchField = ({ search }) => {
  const [input, setInput] = useState(""); // '' is the initial state value
  //   console.log("input", input);
  const resetInput = () => {
    document.getElementById("search-field").value = "";
  };
  return (
    <div>
      <input
        id="search-field"
        onInput={(e) => setInput(e.target.value)}
        placeholder="Search"
      />
      <button
        onClick={() => {
          search(input, "everything");
          console.log("onclickSearch:", input);
          {
            /* resetInput(); */
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
