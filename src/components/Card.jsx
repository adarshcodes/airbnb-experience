import React from "react";
import UserImg from "../images/katie-zaferes.png";
import StarImg from "../images/star.png";

class Card extends React.Component {
	render() {
		return (
			<div className="card-container">
				<div className="card">
					<div className="card--img-container">
						<img
							src={UserImg}
							alt="user"
							className="card--img-container__img"
						/>
						<div className="card--img-container__status">Sold Out</div>
					</div>

					<div className="card--details">
						<div className="card--details__rating">
							<img src={StarImg} alt="star" className="card--details__star" />
							<p className="card--details__rating-score">5</p>
							<p className="card--details__user-count">(6)</p>
							<p className="card--details__user-country">&#xb7; USA</p>
						</div>
						<h4 className="card--details__info">
							Life lessons with Katie Zaferes
						</h4>
						<p className="card--details__pricing">
							<b>From $136 /</b> person
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
