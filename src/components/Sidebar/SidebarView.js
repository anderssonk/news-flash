import React from "react";

const SidebarView = ({ starred, remove }) => {
	const starredDisplay = starredArray => {
		return starredArray.map(article => (
			<div className="starredDisplay" key={article.url}>
				<div id="starredTitle">{article.title}</div>
				<a href="article.url">
					<div id="starredSource">{article.source.name}</div>
				</a>
				<button onClick={() => remove(article.url)}>X</button>
			</div>
		));
	};

	return (
		<div>
			<h4>STARRED ARTICLES</h4>
			{starred ? starredDisplay(starred) : "no starred articles"}
		</div>
	);
};

export default SidebarView;
