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
  return (
    <div className="sideBar">
      <SidebarView
        starred={starredArray}
        remove={url => model.removeFromStarred(url)}
      />
    </div>
  );
};

export default Sidebar;
