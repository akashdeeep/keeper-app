import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<p className="footer__text">© {year}</p>
			{/* <Link to="/about" className="footer__link"> */}
			{/* About */}
			{/* </Link> */}
		</footer>
	);
};

export default Footer;
