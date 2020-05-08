import React from "react";
import "./App.css";
import "./typography.css";
import NewsFeed from "./components/newsFeed/NewsFeed";
import ModelContextProvider from "./NewsContext";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header.js";

function App() {
  return (
    <>
      <div className="container">
        <ModelContextProvider>
          <Header></Header>
          <div className="App">
            <NewsFeed />
            <Sidebar />
          </div>
        </ModelContextProvider>
      </div>
    </>
  );
}

export default App;
