import React, { useContext, useState, useEffect } from "react";
import NewsFeedView from "./NewsFeedView";

import { ModelContext } from "../../NewsContext";

const NewsFeed = () => {
  const { model } = useContext(ModelContext);
  const [searchResultState, setSearchResultState] = useState(null);
  const [countryState, setCountryState] = useState("se");
  const [textState, setTextState] = useState("");
  const [typeState, setTypeState] = useState("top-headlines");
  const [categoryState, setCategoryState] = useState("general");

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    updateSearchResults();
  }, [countryState, categoryState]);

  var ID = function (str) {
    var articleStr = str.toString();

    var i, len, ascii;
    for (i = 0, len = articleStr.length, ascii = 0; i < len; i++) {
      ascii += articleStr.charCodeAt(i);
    }
    var ascii_str = ascii.toString();

    articleStr = articleStr.substring(12, 15);

    return articleStr + ascii_str;

    // console.log("ascii")

    // String.fromCharCode(x)
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    // return "_" + Math.random().toString(36).substr(2, 9);
  };

  const updateSearchResults = () => {
    setIsLoading(true);
    model.searchNews(typeState, countryState, categoryState).then((data) => {
      setSearchResultState(data);
      data.map((article) => {
        model.addToFeed(article);
        article.uniqueID = ID(article.url);
      });
      setIsLoading(false);
    });
  };

  return (
    <NewsFeedView
      news={searchResultState}
      country={(countrycode) => setCountryState(countrycode)}
      category={(categoryState) => {
        setCategoryState(categoryState === "all" ? "general" : categoryState);
      }}
    />
  );
};

export default NewsFeed;
