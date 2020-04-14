import React, { useContext, useState, useEffect } from "react";
import SidebarView from "./SidebarView";
import { ModelContext } from "../../NewsContext";

const Sidebar = () => {
  const { model } = useContext(ModelContext);

  const useObserver = (prop, model) => {
    const [value, setValue] = useState(model[prop]); // m["k"] === m.k!
    useEffect(() => {
      const obs = () => setValue(model[prop]);

      model.addObserver(obs);
      return () => model.removeObserver(obs);
    }, [model, prop]);
    return value;
  };

  const starredArray = useObserver("starred", model);

  function hideOrShow() {
    var x = document.getElementById("sideBar");
    var icon = document.getElementById("change-btn-icon");
    var btn = document.getElementById("hide-button");

    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
      icon.textContent = "arrow_drop_down";
      btn.style.color = "dodgerblue";
      btn.style.backgroundColor = "rgb(169, 197, 226)";
    } else {
      x.classList.add("hide");
      icon.textContent = "arrow_drop_up";
      btn.style.color = "black";
      btn.style.backgroundColor = "lightgray";
    }
  }

  return (
    <div id="sidebar-container">
      <div id="sideBar">
        <SidebarView
          starred={starredArray}
          remove={url => model.removeFromStarred(url)}
        />
      </div>
      <button id="hide-button" onClick={hideOrShow}>
        <i id="change-btn-icon" class="material-icons">
          arrow_drop_down
        </i>
      </button>
    </div>
  );
};

export default Sidebar;
