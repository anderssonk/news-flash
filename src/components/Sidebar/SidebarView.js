import React, { useContext } from "react";
import Button from "./../button/Button";
import { ModelContext } from "../../NewsContext";

const SidebarView = ({ starred, remove, commentPrompt, forceUpdate }) => {
	const { model } = useContext(ModelContext);

	const starredDisplay = (starredArray) => {
		return starredArray.map((article) => (
			<div className="starredDisplay" key={article.url}>
				<div id="starredTitle">{article.title}</div>
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					<div className="source">{article.source.name}</div>
				</a>
				<Button
					starred
					isStarred={true}
					onClick={() => {
						remove(article.url);
						model.removeFromStarredDataBase(article);
					}}
				>
					&times;
				</Button>

				<Button
					type="tertiary"
					onClick={() => {
						commentPrompt(article);
						model.addToStarredDatabase(article);
						forceUpdate(); // forces component update, as useObserver doesn't listen to props changing in object
					}}
				>
					{!article.comment ? "Add comment" : "Change comment"}
				</Button>

				{article.comment && <div>{article.comment}</div>}
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
