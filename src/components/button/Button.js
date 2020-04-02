import React from "react";
import "./button.css";

const setType = type => {
	switch (type) {
		case "primary":
			return "btn-primary";
		case "secondary":
			return "btn-secondary";
		case "tertiary":
			return "btn-tertiary";
		default:
			return "btn-primary";
	}
};

const Button = ({ type, children, onClick, starred, isStarred }) => {
	const starredButton = (
		<button className="starred" onClick={onClick}>
			{isStarred ? <span>&#x2605;</span> : <span>&#x2606;</span>}
		</button>
	);

	if (starred) return starredButton;
	return (
		<>
			<button className={`btn ${setType(type)}`} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
