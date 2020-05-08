import React, { useState } from "react";
import "./searchField.css";
import Button from "../button/Button";

const SearchField = ({ search }) => {
  const [input, setInput] = useState(""); // '' is the initial state value
  //   console.log("input", input);
  //   const resetInput = () => {
  //     document.getElementById("search-field").value = "";
  //   };
  var searchElement = document.getElementById("search-field");

  const enterKey = () => {
    searchElement.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button").click();
      }
    });
  };

  searchElement ? enterKey() : console.log("hello");

  return (
    <div>
      <input
        id="search-field"
        onInput={(e) => setInput(e.target.value)}
        placeholder="Search among articles"
      />
      <Button
        type="secondary"
        id="search-button"
        onClick={() => {
          search(input, "everything");
          console.log("onclickSearch:", input);
        }}
      >
        <i className="w3-jumbo fa fa-search"></i>
      </Button>
    </div>
  );
};

export default SearchField;
