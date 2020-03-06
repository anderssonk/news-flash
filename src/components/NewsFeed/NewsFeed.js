import React, { useState, useEffect } from "react";
import "./NewsFeed.css";
import NewsFeedView from "./NewsFeedView";
import ApiConfig from "../Utility/ApiConfig";

const NewsFeed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); //TODO use to display spinner

  useEffect(() => {
    getDataFromAPITopHeadlines("everything", "se", "summer"); //  "everything" for search in API needs searchString, "top-headlines" for headlines needs country code,
    // setIsLoading(false);
  }, [loading]);

  const getDataFromAPITopHeadlines = (type, country = "se", searchString) => {
    //arguments used to change type of API call, type ="everything" uses searchString="some search string ", type="top-headlines" uses country="us,uk,se etc..."
    //returns a promise

    function handleHTTPError(response) {
      if (response.ok) return response;
      throw Error(response.statusText);
    }
    var url = "";

    type === "everything" //to handle change between "everything" or "top-headlines"
      ? (url = `http://newsapi.org/v2/${type}?q=${searchString}&apiKey=${
          ApiConfig().API_KEY
        }`)
      : (url =
          `http://newsapi.org/v2/${type}?` +
          `country=${country}&` +
          `apiKey=${ApiConfig().API_KEY}`);

    var req = new Request(url);

    return fetch(req)
      .then(handleHTTPError)
      .then(response => response.json())
      .then(response => {
        setData(response.articles);
      })
      .catch(console.error);
  };

  return (
    <div>
      Hello NewsFeed
      <NewsFeedView news={data} />
    </div>
  );
};

export default NewsFeed;
