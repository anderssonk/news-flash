import React from "react";

const SidebarView = ({ starred, remove }) => {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const starredDisplay = starredArray => {
    return starredArray.map(article => (
      <div className="sideBarDisplay" key={article.url}>
        <div className="newsSource">{article.source.name}</div>
        {truncateString(article.title, 40)}
        <button onClick={() => remove(article.id)}>X</button>
      </div>
    ));
  };

  return (
    <div>
      <h3>SidebarView</h3>
      {starred ? starredDisplay(starred) : "no starred articles"}
    </div>
  );
};

export default SidebarView;
