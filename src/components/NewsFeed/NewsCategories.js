import React from "react";

const NewsCategories = ({ setCategory }) => {
  //   Add active class to the current button (highlight it), to make button look "activated""
  var btns = document.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  //___________________________________
  return (
    <div id="categories">
      <button className="btn active" value="none">
        None
      </button>
      <button className="btn" value="general">
        General
      </button>
      <button className="btn" value="business">
        Business
      </button>
      <button className="btn" value="entertainment">
        Entertainment
      </button>
      <button className="btn" value="health">
        Health
      </button>
      <button className="btn" value="science">
        Science
      </button>
      <button className="btn" value="sports">
        Sports
      </button>
      <button className="btn" value="technology">
        Technology
      </button>
    </div>
  );
};

export default NewsCategories;
