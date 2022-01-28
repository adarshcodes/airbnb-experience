import React from "react";
import heroImg from "../images/photo-grid.png";

class Hero extends React.Component {
	render() {
		return (
			<div className="hero">
				<div className="hero--container">
					<img src={heroImg} alt="hero" className="hero--container__img" />
				</div>
				<div className="hero--text">
					<h1 className="hero--text__heading">Online Experiences</h1>
					<p className="hero--text__para">
						Join unique interactive activities led by one-of-a-kind hosts—all
						without leaving home.
					</p>
				</div>
			</div>
		);
	}
}

export default Hero;
