import React from "react";
import "./App.css";
import "./typography.css";
import NewsFeed from "./components/newsfeed/NewsFeed";
import ModelContextProvider from "./NewsContext";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <body className="App">
        <ModelContextProvider>
          <NewsFeed />
          <Sidebar />
        </ModelContextProvider>
      </body>
    </div>
  );
}

export default App;
