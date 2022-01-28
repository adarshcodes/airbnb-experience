import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<NavBar />
				<Hero />
			</header>
		);
	}
}
