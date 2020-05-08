import React from "react";

const ErrorArticleView = () => {
  var searchInput = document.getElementById("search-field");

  return (
    <div className="errorview">
      <div id="err404">404</div>

      <div id="noResultError">
        No results found for "{searchInput ? searchInput.value : ""}"
      </div>
    </div>
  );
};
export default ErrorArticleView;
