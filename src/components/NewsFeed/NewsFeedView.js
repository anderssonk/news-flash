import React from "react";

const NewsFeedView = ({ news }) => {
  const displayArticle = article => {
    return (
      <div className="articleDisplay" key={article.url}>
        <h3>{article.title}</h3>

        <h5>{article.source.name}</h5>
        <img className="articleImg" src={article.urlToImage} />
        <p>published at : {article.publishedAt}</p>
      </div>
    );
  };

  return (
    <div>
      Hello NewsFeedView
      {news.map(article => displayArticle(article))}
    </div>
  );
};

export default NewsFeedView;
