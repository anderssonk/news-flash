import React from "react";
import ArticleDisplay from "../ArticleDisplay/ArticleDisplay";
import CountrySearch from "../search/NewsSearch"; // Drop down:en
import CategorySearch from "../search/NewsCategories";

const NewsFeedView = ({ news, country, category }) => {
	//console.log("News feed (NewsFeedView.js):", news);
	return (
		news && (
			<div className="mainContent">
				<h3>NewsFeedView</h3>
				<div className="search-container">
					<CountrySearch country={country} />
					<CategorySearch category={category} />
				</div>
				<div className="generated-news">
					{news.map(article => (
						<ArticleDisplay article={article} />
					))}
				</div>
			</div>
		)
	);
};

export default NewsFeedView;
