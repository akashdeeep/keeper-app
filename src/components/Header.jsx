import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
// import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			{/* <Link to="/"> */}
			<h1 className="header__title">
				<HighlightIcon />
				Keerper App
			</h1>
			{/* </Link> */}
		</header>
	);
};

export default Header;
