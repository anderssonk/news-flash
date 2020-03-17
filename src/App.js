import React, { useState, useEffect } from "react";
import "./App.css";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import ModelContextProvider from "./NewsContext";

function App() {
  return (
    <div className="container">
      <ModelContextProvider>
        Hello world
        <NewsFeed />
      </ModelContextProvider>
    </div>
  );
}

export default App;
