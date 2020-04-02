import React from "react";

// TODO: Style:a aktiv länk

const NewsCategories = ({ category }) => {
	//   Add active class to the current button (highlight it), to make button look "activated""
	// var btns = document.getElementsByClassName("btn");
	// for (var i = 0; i < btns.length; i++) {
	// 	btns[i].addEventListener("click", function() {
	// 		var current = document.getElementsByClassName("active");
	// 		current[0].className = current[0].className.replace(" active", "");
	// 		this.className += " active";
	// 	});

	const categories = [
		"business",
		"entertainment",
		"general",
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
