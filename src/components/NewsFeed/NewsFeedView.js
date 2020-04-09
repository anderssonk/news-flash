import React from "react";
import ArticleDisplay from "../articledisplay/ArticleDisplay";
import CountrySearch from "../search/NewsCountry";
import CategorySearch from "../search/NewsCategory";
import Skeleton from "../skeleton/skeleton";

const NewsFeedView = ({ news, country, category }) => {
  return news ? (
    <div className="mainContent">
      <div className="search-container">
        <CategorySearch category={category} />
        <CountrySearch country={country} />
      </div>
      <div className="generated-news">
        {news.map((article, index) => (
          <ArticleDisplay article={article} key={index} />
        ))}
      </div>
    </div>
  ) : (
    <div className="mainContent">
      <div className="generated-news">
        <Skeleton />
      </div>
    </div>
  );
};

export default NewsFeedView;
