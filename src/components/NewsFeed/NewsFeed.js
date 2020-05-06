import React, { useContext, useState, useEffect } from "react";
import NewsFeedView from "./NewsFeedView";
import SearchField from "../search/SearchField";

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
		// setTextState("");
	}, [countryState, categoryState, textState]);

	const ID = (str) => {
		var articleStr = str.toString();

		var i, len, ascii;
		for (i = 0, len = articleStr.length, ascii = 0; i < len; i++) {
			ascii += articleStr.charCodeAt(i);
		}
		var ascii_str = ascii.toString();

		articleStr = articleStr.substring(12, 15);

		return articleStr + ascii_str;
	};

	const updateSearchResults = () => {
		setIsLoading(true);
		model
			.searchNews(typeState, countryState, categoryState, textState)
			.then((data) => {
				setSearchResultState(data);
				data.map((article) => {
					model.addToFeed(article);
					article.uniqueID = ID(article.url);
				});
				setTypeState("top-headlines");
				setIsLoading(false);
			});
	};
	const searchEverything = (txt, type) => {
		setTypeState(type);

		setTextState(txt);
	};

	return (
		<>
			<SearchField search={(txt, type) => searchEverything(txt, type)} />

			<NewsFeedView
				news={searchResultState}
				country={(countrycode) => setCountryState(countrycode)}
				category={(categoryState) => {
					setCategoryState(categoryState === "all" ? "general" : categoryState);
				}}
			/>
		</>
	);
};

export default NewsFeed;
