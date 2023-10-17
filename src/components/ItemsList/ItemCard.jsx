import React from "react";
import { NavLink } from "react-router-dom";

const ItemCard = ({ itemId, itemTitle, itemImg, itemPrice }) => {
	return (
		<div className="card itemCard">
			<img src={itemImg} className="card-img-top w-50 itemImg" alt="..." />
			<div className="card-body itemData">
				<h5 className="card-title">{itemTitle}</h5>
				<p className="card-text">${itemPrice.toLocaleString()}</p>
				<NavLink to={`/item/${itemId}`} className="btn btn-dark">
					Comprar
				</NavLink>
			</div>
		</div>
	);
};

export default ItemCard;
