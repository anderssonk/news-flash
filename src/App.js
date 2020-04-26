import React from "react";
import "./App.css";
import "./typography.css";
import NewsFeed from "./components/newsFeed/NewsFeed";
import ModelContextProvider from "./NewsContext";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header";

function App() {
	return (
		<body className="container">
			<Header></Header>
			<div className="App">
				<ModelContextProvider>
					<NewsFeed />
					<Sidebar />
				</ModelContextProvider>
			</div>
		</body>
	);
}

export default App;
