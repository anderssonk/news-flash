import React from "react";

import "./skeletonstyle.css";
import "../../App.css";
import ArticleDisplay from "../articledisplay/ArticleDisplay";

// background-repeat:repeat-y eller repeat-x

const Skeleton = () => {
  return (
    <div className="mainContent">
      <div className="generated-news">
        <div className="skeletonDisplay articleDisplay"></div>
        <div className="skeletonDisplay articleDisplay"></div>
        <div className="skeletonDisplay articleDisplay"></div>
        <div className="skeletonDisplay articleDisplay"></div>
        <div className="skeletonDisplay articleDisplay"></div>
      </div>
    </div>
  );
};

export default Skeleton;
