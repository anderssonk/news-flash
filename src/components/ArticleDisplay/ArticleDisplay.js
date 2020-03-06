import React from "react";

const ArticleDisplay = article => {
  return (
    <div className="articleDisplay" key={article.url}>
      <h3>{article.title}</h3>

      <h5>{article.source.name}</h5>
      <img className="articleImg" src={article.urlToImage} alt="articleimg" />
      <p>published at : {article.publishedAt}</p>
    </div>
  );
};

export default ArticleDisplay;
