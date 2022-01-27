import React from "react";
import logo from "../images/airbnb-logo.png";

class NavBar extends React.Component {
	render() {
		return (
			<header className="header">
				<nav className="navigation">
					<img src={logo} alt="logo" className="navigation__logo" />
				</nav>
			</header>
		);
	}
}

export default NavBar;
