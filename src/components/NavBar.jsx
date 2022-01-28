import React from "react";
import logo from "../images/airbnb-logo.png";

class NavBar extends React.Component {
	render() {
		return (
			<nav className="navigation">
				<img src={logo} alt="logo" className="navigation__logo" />
			</nav>
		);
	}
}

export default NavBar;
