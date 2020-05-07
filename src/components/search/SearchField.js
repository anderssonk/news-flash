import React, { useState } from "react";
import "./searchField.css";
import Button from "../button/Button";

const SearchField = ({ search }) => {
	const [input, setInput] = useState(""); // '' is the initial state value
	//   console.log("input", input);
	const resetInput = () => {
		document.getElementById("search-field").value = "";
	};
	return (
		<div>
			<input
				id="search-field"
				onInput={(e) => setInput(e.target.value)}
				placeholder="Search among articles"
			/>
			<Button
				type="secondary"
				onClick={() => {
					search(input, "everything");
					console.log("onclickSearch:", input);
				}}
			>
				<i class="w3-jumbo fa fa-search"></i>
			</Button>
		</div>
	);
};

export default SearchField;
