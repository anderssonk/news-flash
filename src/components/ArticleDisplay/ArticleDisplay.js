import React, { useContext, useState } from "react";
import { ModelContext } from "../../NewsContext";
import Button from "../button/Button";

const ArticleDisplay = ({ article }) => {
	const [isStarred, setisStarred] = useState(false);
	const { model } = useContext(ModelContext);
	const starArticle = () => {
		setisStarred(true);
		model.addToStarred(article.url);
		console.log("1234");
	};

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
			{/* <Button type="primary"></Button> */}
		</div>
	);
};

export default ArticleDisplay;
