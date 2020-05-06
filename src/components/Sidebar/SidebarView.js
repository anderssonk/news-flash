import React, { useContext } from "react";
import { ModelContext } from "../../NewsContext";

const SidebarView = ({ starred, remove }) => {
  const { model } = useContext(ModelContext);

  const starredDisplay = (starredArray) => {
    return starredArray.map((article) => (
      <div className="starredDisplay" key={article.url}>
        <div id="starredTitle">{article.title}</div>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <div id="starredSource">{article.source.name.toLowerCase()}</div>
        </a>
        <button
          onClick={() => {
            remove(article.url);
            model.removeFromStarredDataBase(article);
          }}
        >
          X
        </button>
      </div>
    ));
  };

  return (
    <div>
      <h4>Starred Articles</h4>
      <div className="horisontal-line"></div>
      {starred ? starredDisplay(starred) : "no starred articles"}
    </div>
  );
};

export default SidebarView;
