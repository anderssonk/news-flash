import React from "react";
import ArticleDisplay from "../articleDisplay/ArticleDisplay";
import CountrySearch from "../search/NewsCountry";
import CategorySearch from "../search/NewsCategory";
import Skeletons from "../skeletons/skeletons";
import SearchField from "../search/SearchField";

const NewsFeedView = ({ news, country, category, isLoading, search }) => {
	return (
		<div className="mainContent">
			<div className="search-container">
				<SearchField search={search} />

				<div className="filters">
					<CategorySearch category={category} />
					<CountrySearch country={country} />
				</div>
			</div>
			<div className="generated-news">
				{!isLoading && news ? (
					news.map((article, index) => (
						<ArticleDisplay article={article} key={index} />
					))
				) : (
					<Skeletons />
				)}
			</div>
		</div>
	);
};

export default NewsFeedView;
