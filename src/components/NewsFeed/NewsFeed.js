import React, { useContext, useState, useEffect } from "react";
import NewsFeedView from "./NewsFeedView";

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
	}, [countryState, categoryState]);

	const updateSearchResults = () => {
		setIsLoading(true);
		model.searchNews(typeState, countryState, categoryState).then((data) => {
			setSearchResultState(data);
			data.map((article) => model.addToFeed(article));
			setIsLoading(false);
		});
	};

	return (
		<NewsFeedView
			news={searchResultState}
			country={(countrycode) => setCountryState(countrycode)}
			category={(categoryState) => {
				setCategoryState(categoryState === "all" ? "general" : categoryState);
			}}
			isLoading={isLoading}
		/>
	);
};

export default NewsFeed;
