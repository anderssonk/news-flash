import React from "react";

// import classes from "./skeletons.module.css";

import Skeleton from "./skeleton/skeleton";

const skeletonRepeats = [1, 2, 3, 4, 5, 6];

const Skeletons = (props) => {
  return skeletonRepeats.map((index) => <Skeleton key={index} />);
};

export default Skeletons;
