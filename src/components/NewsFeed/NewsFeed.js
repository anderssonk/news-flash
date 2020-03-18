import React, { useContext, useState, useEffect } from "react";
import NewsFeedView from "./NewsFeedView";
import Search from "./NewsSearch";
import Categories from "./NewsCategories";

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
  }, [countryState]);

  console.log("feeeed", model.getFeed());
  const updateSearchResults = () => {
    setIsLoading(true);
    model.searchNews(typeState, countryState).then(data => {
      setSearchResultState(data);
      data.map(article => {
        article.id = article.url;
      }); //sätter ett ID på varje article
      model.addToFeed(data);

      setIsLoading(false);
    });
  };

  return (
    <div>
      <Search setCountryCode={countrycode => setCountryState(countrycode)} />
      <Categories />
      <NewsFeedView className="newsContainer" news={searchResultState} />
    </div>
  );
};

export default NewsFeed;
