import React, { useContext } from "react";
import { ModelContext } from "../../NewsContext";

const ArticleDisplay = ({ article }) => {
	const { model } = useContext(ModelContext);
	const starArticle = () => model.addToStarred(article.url);

	return (
		<div key={article.url} className="articleDisplay">
			<div id="img-container">
				<img src={article.urlToImage} alt="articleimg" />
			</div>
			<h3>{article.title}</h3>

			<a href={article.url} target="blank">
				<h5>{article.source.name}</h5>
			</a>

			<p>published at : {article.publishedAt}</p>
			<button onClick={starArticle}>Star</button>
		</div>
	);
};

export default ArticleDisplay;
