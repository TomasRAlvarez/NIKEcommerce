import React from "react";
import "../../assets/styles/itemDetail.css";
import AddBtn from "./AddBtn";

const ItemDetail = ({ item, onAdd }) => {
	return (
		<div className="itemDetail">
			<div id="carouselExampleDark" className="carousel carousel-dark slide itemCarousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="10000">
						<img src={item.img} className="d-block itemCarouselImg" alt="..." />
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<img src={item.img} className="d-block itemCarouselImg" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={item.img} className="d-block itemCarouselImg" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="itemInfo">
				<h1>{item.title}</h1>
				<h4>{item.description}</h4>
				<div className="itemInfoBuy">
					<h2>${item.price.toLocaleString()}</h2>
					<AddBtn id={item.id} onAdd={onAdd} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
