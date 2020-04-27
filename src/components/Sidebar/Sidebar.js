import React, { useContext } from "react";
import SidebarView from "./SidebarView";
import { ModelContext } from "../../NewsContext";
import useObserver from "../../hooks/useObserver";
import useForceUpdate from "../../hooks/useForceUpdate";

const Sidebar = () => {
	const { model } = useContext(ModelContext);

	const commentPrompt = (article) => {
		const comment = prompt("Please enter a comment: ");
		if (comment == null || comment === "") {
		} else {
			model.addComment(article, comment);
		}
	};

	const starredArray = useObserver("starred", model);

	return (
		<div className="sideBar">
			<SidebarView
				starred={starredArray}
				remove={(url) => model.removeFromStarred(url)}
				commentPrompt={commentPrompt}
				forceUpdate={useForceUpdate()}
			/>
		</div>
	);
};

export default Sidebar;
