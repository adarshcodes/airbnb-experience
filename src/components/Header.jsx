import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";

// importing images
import UserImg from "../images/katie-zaferes.png";

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<NavBar />
				{/* <Hero /> */}
				<div className="card-container">
					<Card
						img={UserImg}
						status="Sold out"
						ratingScore="5.0"
						userCount="6"
						userCountry="USA"
						info="Life lessons with Katie Zaferes"
						pricing="$136"
					/>
					<Card
						img={UserImg}
						status="Sold out"
						ratingScore="5.0"
						userCount="6"
						userCountry="USA"
						info="Life lessons with Katie Zaferes"
						pricing="$136"
					/>
					<Card
						img={UserImg}
						status="Sold out"
						ratingScore="5.0"
						userCount="6"
						userCountry="USA"
						info="Life lessons with Katie Zaferes"
						pricing="$136"
					/>
				</div>
				;
			</header>
		);
	}
}
