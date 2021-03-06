import React from "react";
import ArticleDisplay from "../articleDisplay/ArticleDisplay";
import CountrySearch from "../search/NewsCountry";
import CategorySearch from "../search/NewsCategory";
import Skeletons from "../skeletons/skeletons";
import SearchField from "../search/SearchField";
import ErrorArticleView from "../errorArticle/ErrorArticle";

const NewsFeedView = ({
  news,
  country,
  category,
  isLoading,
  search,
  reset,
}) => {
  return (
    <div className="mainContent">
      <div className="search-container" id="search-container">
        <SearchField search={search} />

        <div className="filters">
          <CategorySearch category={category} reset={reset} />
          <CountrySearch country={country} />
        </div>
      </div>
      <div className="generated-news">
        {!isLoading && news
          ? news.map((article, index) => (
              <ArticleDisplay article={article} key={index} />
            ))
          : [
              !isLoading ? (
                <ErrorArticleView key={"1"} />
              ) : (
                <Skeletons key={"skeleton"} />
              ),
            ]}
      </div>
    </div>
  );
};

export default NewsFeedView;
