import React from "react";
import ArticleDisplay from "../ArticleDisplay/ArticleDisplay";

const NewsFeedView = ({ news }) => {
	console.log("News feed (NewsFeedView.js):", news);
	return (
		news && (
			<div className="App">
				<h3>NewsFeedView</h3>
				{news.map(article => (
					<ArticleDisplay article={article} />
				))}
			</div>
		)
	);
};

export default NewsFeedView;
