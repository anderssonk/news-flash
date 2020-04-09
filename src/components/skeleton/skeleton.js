import React from "react";

import "./skeletonstyle.css";
import "../../App.css";

const skeletonRepeats = Array(9).fill(0);

const Skeleton = () => {
  return skeletonRepeats.map((index) => (
    <div className="skeletonDisplay articleDisplay"></div>
  ));
};

export default Skeleton;
