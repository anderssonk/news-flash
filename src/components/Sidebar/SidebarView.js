import React from "react";

const SidebarView = ({ starred, remove }) => {
  const hideOrShow = () => {
    var x = document.getElementById("starredDisplayList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const starredDisplay = starredArray => {
    return starredArray.map(article => (
      <div className="starredDisplay" key={article.url}>
        <div id="starredTitle">{article.title}</div>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <div id="starredSource">{article.source.name}</div>
        </a>
        <button onClick={() => remove(article.url)}>X</button>
      </div>
    ));
  };

  return (
    <div>
      <h4>Starred Articles</h4>
      <button onClick={hideOrShow}>
        <i class="material-icons">arrow_drop_down</i>
      </button>
      <div id="starredDisplayList">
        <div className="horisontal-line"></div>

        {starred ? starredDisplay(starred) : "no starred articles"}
      </div>
    </div>
  );
};

export default SidebarView;
