import React from "react";
import StarImg from "../images/star.png";

class Card extends React.Component {
	render() {
		let badgeText;
		if (this.props.item.openSpots === 0) {
			badgeText = "Sold out";
		} else if (this.props.item.location === "Online") {
			badgeText = "Online";
		}

		return (
			<div className="card">
				<div className="card--img-container">
					<img
						src={this.props.item.coverImg}
						alt="user"
						className="card--img-container__img"
					/>
					{badgeText && (
						<div className="card--img-container__status">{badgeText}</div>
					)}
				</div>

				<div className="card--details">
					<div className="card--details__rating">
						<img src={StarImg} alt="star" className="card--details__star" />
						<p className="card--details__rating-score">
							{this.props.item.stats.rating}
						</p>
						<p className="card--details__user-count">
							({this.props.item.stats.reviewCount})
						</p>
						<p className="card--details__user-country">
							&#xb7; {this.props.item.location}
						</p>
					</div>
					<h4 className="card--details__info">{this.props.item.title}</h4>
					<p className="card--details__pricing">
						<b>From ${this.props.item.price} /</b> person
					</p>
				</div>
			</div>
		);
	}
}

export default Card;
