import React from "react";
import StarImg from "../images/star.png";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card--img-container">
					<img
						src={this.props.img}
						alt="user"
						className="card--img-container__img"
					/>
					<div className="card--img-container__status">{this.props.status}</div>
				</div>

				<div className="card--details">
					<div className="card--details__rating">
						<img src={StarImg} alt="star" className="card--details__star" />
						<p className="card--details__rating-score">
							{this.props.ratingScore}
						</p>
						<p className="card--details__user-count">
							({this.props.userCount})
						</p>
						<p className="card--details__user-country">
							&#xb7; {this.props.userCountry}
						</p>
					</div>
					<h4 className="card--details__info">{this.props.info}</h4>
					<p className="card--details__pricing">
						<b>From {this.props.pricing} /</b> person
					</p>
				</div>
			</div>
		);
	}
}

export default Card;
