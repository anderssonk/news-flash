import React, { useState, useEffect } from "react";
import "./App.css";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import SideBar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="container">
      <NewsFeed />
      <SideBar />
    </div>
  );
}

export default App;
