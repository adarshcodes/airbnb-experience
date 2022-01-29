import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import CardData from "../cardData";
export default class Header extends React.Component {
	render() {
		const newCard = CardData.map((item) => {
			return <Card key={item.id} item={item} />;
		});

		return (
			<header className="header">
				<NavBar />
				<Hero />
				<div className="card-container">{newCard}</div>;
			</header>
		);
	}
}
