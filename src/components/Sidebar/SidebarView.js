import React from "react";

const SidebarView = ({ starred, remove }) => {
  const starredDisplay = (starredArray) => {
    return starredArray.map((article) => (
      <div className="starredDisplay" key={article.url}>
        <div id="starredTitle">{article.title}</div>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <div id="starredSource">{article.source.name}</div>
        </a>
        <button onClick={() => remove(article.url)}>X</button>
      </div>
    ));
  };
  var coll = document.getElementsByClassName("collapsible");

  coll.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

  return (
    <div>
      <h4>Starred Articles</h4>

      <div className="horisontal-line"></div>

      {starred ? starredDisplay(starred) : "no starred articles"}
      <button type="button" className="collapsible">
        Open Section 1
      </button>
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <p>hey</p>
      </div>
    </div>
  );
};

export default SidebarView;
