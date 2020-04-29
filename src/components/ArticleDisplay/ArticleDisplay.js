import React, { useContext, useState, useEffect } from "react";
import { ModelContext } from "../../NewsContext";
import useObserver from "../../hooks/useObserver";
import Button from "../button/Button";

const ArticleDisplay = ({ article }) => {
	const [isStarred, setisStarred] = useState(false);
	const { model } = useContext(ModelContext);
	const starredArray = useObserver("starred", model);

	const starArticle = () => {
		isStarred
			? model.removeFromStarred(article.url)
			: model.addToStarred(article.url);
		setisStarred(!isStarred);
	};

	useEffect(() => {
		setisStarred(
			model.starred.filter((item) => item.url === article.url).length > 0
		);
	}, [starredArray]);

	return (
		<div key={article.url} className="articleDisplay">
			<div id="img-container">
				<img src={article.urlToImage} alt="articleimg" />
			</div>
			<h3 className="title">{article.title}</h3>

			<a href={article.url} target="blank" className="source">
				{article.source.name}
			</a>

			<p>published at : {article.publishedAt}</p>
			<Button starred isStarred={isStarred} onClick={starArticle}></Button>
		</div>
	);
};

export default ArticleDisplay;
