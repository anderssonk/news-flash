import React from "react";
import ArticleDisplay from "../ArticleDisplay/ArticleDisplay";
import Search from "./NewsSearch"; // Drop down:en
import NewsCategories from "./NewsCategories";

const NewsFeedView = ({ news, country, category }) => {
  //console.log("News feed (NewsFeedView.js):", news);
  return (
    news && (
      <div className="mainContent">
        <h3>NewsFeedView</h3>
        <Search country={country} />
        <NewsCategories category={category} />
        {news.map(article => (
          <ArticleDisplay article={article} />
        ))}
      </div>
    )
  );
};

export default NewsFeedView;
