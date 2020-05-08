import React, { useContext, useState, useEffect } from "react";
import { ModelContext } from "../../NewsContext";
import useObserver from "../../hooks/useObserver";
import Button from "../button/Button";

const ArticleDisplay = ({ article }) => {
  const [isStarred, setisStarred] = useState(false);
  const { model } = useContext(ModelContext);
  const starredArray = useObserver("starred", model);

  const removeFromStarred = () => {
    model.removeFromStarred(article.url);
    model.removeFromStarredDataBase(article);
  };

  const addToStarred = () => {
    model.addToStarred(article.url);
    setisStarred(!isStarred);
    model.addToStarredDatabase(article);
  };
  const starArticle = () => {
    isStarred ? removeFromStarred() : addToStarred();
  };

  useEffect(() => {
    setisStarred(
      model.starred.filter((item) => item.url === article.url).length > 0
    );
  }, [starredArray]);

  return (
    <div key={article.url} className="articleDisplay">
      <div id="img-container">
        <img
          src={article.urlToImage ? article.urlToImage : "/no_img.png"}
          alt="articleimg"
        />
      </div>
      <div className="articleDisplay-content">
        <a href={article.url} target="blank">
          <h3 className="title">{article.title}</h3>
        </a>
        <div className="articleDisplay-info">
          <div>
            <a className="anchor-url" href={article.url} target="blank">
              {article.source.name}
            </a>
            <div>published: {article.publishedAt}</div>
          </div>
          <Button starred isStarred={isStarred} onClick={starArticle}></Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDisplay;
