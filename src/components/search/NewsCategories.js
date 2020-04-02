import React from "react";

const NewsCategories = ({ category }) => {
	const categories = [
		"all",
		"business",
		"entertainment",
		"health",
		"science",
		"sports",
		"technology"
	];

	const handleClick = option => {
		const buttons = [...document.getElementById("categories").children];
		buttons.forEach(element => {
			element.classList.remove("btn-toggle-active");
		});
		category(option.target.value);
		option.target.classList.add("btn-toggle-active");
	};

	//___________________________________

	return (
		<div id="categories">
			{categories.map(cat => (
				<button className="btn-toggle" value={cat} onClick={handleClick}>
					{cat}
				</button>
			))}
		</div>
	);
};

export default NewsCategories;
