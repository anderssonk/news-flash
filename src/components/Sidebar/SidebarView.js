import React from "react";
import Button from "./../button/Button";

const SidebarView = ({ starred, remove, commentPrompt }) => {
	const starredDisplay = (starredArray) => {
		return starredArray.map((article) => (
			<div className="starredDisplay" key={article.url}>
				<div id="starredTitle">{article.title}</div>
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					<div id="starredSource">{article.source.name}</div>
				</a>
				<Button type="primary" onClick={() => remove(article.url)}>
					X
				</Button>
				<Button type="primary" onClick={() => commentPrompt()}>
					Add comment
				</Button>
			</div>
		));
	};

	return (
		<div>
			<h4>Starred Articles</h4>
			<div className="horisontal-line"></div>
			{starred ? starredDisplay(starred) : "no starred articles"}
		</div>
	);
};

export default SidebarView;
