import React from "react";
import ArticleDisplay from "../ArticleDisplay/ArticleDisplay";

const NewsFeedView = ({ news }) => {
	console.log(news);
	return (
		news && (
			<div className="App">
				NewsFeedView
				{news.map(article => (
					<ArticleDisplay article={article} />
				))}
			</div>
		)
	);
};

export default NewsFeedView;
