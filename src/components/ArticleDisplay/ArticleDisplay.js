import React, { useContext, useState, useEffect } from "react";
import { ModelContext } from "../../NewsContext";
import useObserver from "../../hooks/useObserver";
import firebase from "../../util/firebaseConfig";

import Button from "../button/Button";

const ArticleDisplay = ({ article }) => {
	const [isStarred, setisStarred] = useState(false);
	const { model } = useContext(ModelContext);
	const starredArray = useObserver("starred", model);
	const db = firebase.firestore();

	const removeFromStarred = () => {
		model.removeFromStarred(article.url);
		model.removeFromStarredDataBase(article);
	};

	const addToStarred = () => {
		model.addToStarred(article.url);
		setisStarred(!isStarred);
		model.addToStarredDatabase(article);
	};
	const starArticle = () => {
		isStarred ? removeFromStarred() : addToStarred();
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

			<a href={article.url} target="blank">
				{article.source.name}
			</a>

			<p>published at : {article.publishedAt}</p>
			<Button starred isStarred={isStarred} onClick={starArticle}></Button>
		</div>
	);
};

export default ArticleDisplay;
