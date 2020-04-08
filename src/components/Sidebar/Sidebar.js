import React, { useContext } from "react";
import SidebarView from "./SidebarView";
import { ModelContext } from "../../NewsContext";
import useObserver from "../../hooks/useObserver";

const Sidebar = () => {
	const { model } = useContext(ModelContext);

	const starredArray = useObserver("starred", model);
	return (
		<div className="sideBar">
			<SidebarView
				starred={starredArray}
				remove={(url) => model.removeFromStarred(url)}
			/>
		</div>
	);
};

export default Sidebar;
