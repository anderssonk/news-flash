import React, { useEffect } from "react";

const NewsCategory = ({ category, reset }) => {
  useEffect(() => {
    document.getElementById("all").classList.add("btn-toggle-active");
  }, []); // left empty means 'only on 1st render'

  const categories = [
    "all",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = (option) => {
    const buttons = [...document.getElementById("categories").children];
    buttons.forEach((element) => {
      element.classList.remove("btn-toggle-active");
    });
    category(option.target.value);
    option.target.classList.add("btn-toggle-active");
    reset("");
  };

  return (
    <div id="categories">
      {categories.map((cat, index) => (
        <button
          className="btn-toggle"
          value={cat}
          id={cat}
          key={index}
          onClick={handleClick}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default NewsCategory;
