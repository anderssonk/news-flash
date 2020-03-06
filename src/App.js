import React from "react";
import logo from "./logo.svg";
import NewsFeed from "./components/NewsFeed/NewsFeed";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
