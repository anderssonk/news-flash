import React, { useContext } from "react";
import NewsFeedView from "./NewsFeedView";
import { ModelContext } from "../../NewsContext";

const NewsFeed = () => {
  const { model } = useContext(ModelContext);

  return (
    <div>
      <NewsFeedView className="newsfeed" />
    </div>
  );
};

export default NewsFeed;
