import React, { useState, useEffect } from "react";
import "./App.css";
import "./typography.css";
import NewsFeed from "./components/newsfeed/NewsFeed";
import ModelContextProvider from "./NewsContext";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header.js";
import Login from "./components/login/login";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="App">
        <ModelContextProvider>
          <NewsFeed />
          <Sidebar />
          <Login />
        </ModelContextProvider>
      </div>
    </div>
  );
}

export default App;
