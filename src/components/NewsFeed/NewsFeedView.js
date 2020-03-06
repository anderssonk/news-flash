import React from "react";
import ArticleDisplay from "../ArticleDisplay/ArticleDisplay";

const NewsFeedView = ({ news }) => {
  return (
    <div className="App">
      NewsFeedView
      {news.map(article => (
        <ArticleDisplay article={article} />
      ))}
    </div>
  );
};

export default NewsFeedView;
