import React, { useContext } from "react";
import SidebarView from "./SidebarView";
import { ModelContext } from "../../NewsContext";
import useObserver from "../../hooks/useObserver";

const Sidebar = () => {
	const { model } = useContext(ModelContext);

	const commentPrompt = (url) => {
		const comment = prompt("Please enter a comment: ");
		if (comment == null || comment === "") {
			// const txt = "Okay";
			console.log("if: ", comment);
		} else {
			console.log("else: ", comment);
			console.log("article url: ", url);
			// model.addComment(url);
		}
	};

	const starredArray = useObserver("starred", model);
	return (
		<div className="sideBar">
			<SidebarView
				starred={starredArray}
				remove={(url) => model.removeFromStarred(url)}
				commentPrompt={commentPrompt}
			/>
		</div>
	);
};

export default Sidebar;
