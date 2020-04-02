import React from "react";
import ArticleDisplay from "../articleDisplay/ArticleDisplay";
import CountrySearch from "../search/NewsSearch";
import CategorySearch from "../search/NewsCategories";

const NewsFeedView = ({ news, country, category }) => {
	return (
		news && (
			<div className="mainContent">
				<div className="search-container">
					<CategorySearch category={category} />
					<CountrySearch country={country} />
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
