import React from "react";
import Button from "./../button/Button";

const SidebarView = ({ starred, remove, commentPrompt, forceUpdate }) => {
	const starredDisplay = (starredArray) => {
		return starredArray.map((article) => (
			<div className="starredDisplay" key={article.url}>
				<div id="starredTitle">{article.title}</div>
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					<div className="source">{article.source.name}</div>
				</a>
				<Button type="primary" onClick={() => remove(article.url)}>
					X
				</Button>

				<Button
					type="tertiary"
					onClick={() => {
						commentPrompt(article);
						forceUpdate(); // forces component update, as useObserver doesn't listen to props changing in object
					}}
				>
					{!article.comment ? "Add comment" : "Change comment"}
				</Button>

				{article.comment && <div>{article.comment}</div>}
			</div>
		));
	};

	const starredDisplay = (starredArray) => {
		return starredArray.map((article) => (
			<div className="starredDisplay" key={article.url}>
				<div id="starredTitle">{article.title}</div>
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					<div id="starredSource">{article.source.name.toLowerCase()}</div>
				</a>
				<button
					onClick={() => {
						remove(article.url);
						model.removeFromStarredDataBase(article);
					}}
				>
					X
				</button>
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
