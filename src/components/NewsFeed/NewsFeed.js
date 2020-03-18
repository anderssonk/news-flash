import React, { useContext, useState, useEffect } from "react";
import NewsFeedView from "./NewsFeedView";
import Search from "./NewsSearch"; // Drop down:en
import NewsCategories from "./NewsCategories";

import { ModelContext } from "../../NewsContext";

const NewsFeed = () => {
	const { model } = useContext(ModelContext);
	const [searchResultState, setSearchResultState] = useState(null);
	const [countryState, setCountryState] = useState("se");
	const [textState, setTextState] = useState("");
	const [typeState, setTypeState] = useState("top-headlines");
	const [categoryState, setCategoryState] = useState("general");

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		updateSearchResults();
	}, [countryState]);

	const updateSearchResults = () => {
		setIsLoading(true);
		model.searchNews(typeState, countryState).then(data => {
			setSearchResultState(data);
			data.map(article => model.addToFeed(article));
			setIsLoading(false);
		});
	};

	return (
		<div>
			<Search country={countrycode => setCountryState(countrycode)} />
			<NewsCategories
				category={categoryState => setCategoryState(categoryState)}
			/>
			<NewsFeedView className="newsContainer" news={searchResultState} />
		</div>
	);
};

export default NewsFeed;
