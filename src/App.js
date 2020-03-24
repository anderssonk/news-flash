import React, { useState, useEffect } from "react";
import "./App.css";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import ModelContextProvider from "./NewsContext";
import Sidebar from "./components/Sidebar/Sidebar";
import firebaseConfig from "./util/firebaseConfig";

function App() {
  const firebase = require('firebase/app')
  firebase.initializeApp(firebaseConfig);
  return (
    <div className="container">
      <ModelContextProvider>
        <NewsFeed />
        <Sidebar />
      </ModelContextProvider>
    </div>
  );
}

export default App;
