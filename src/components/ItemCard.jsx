import React from "react";

const ItemCard = ({ itemTitle, itemImg, itemPrice }) => {
	return (
		<div className="card itemCard">
			<img src={itemImg} className="card-img-top w-50 itemImg" alt="..." />
			<div className="card-body itemData">
				<h5 className="card-title">{itemTitle}</h5>
				<p className="card-text">$ {itemPrice}</p>
				<a href="#" className="btn btn-primary">
					Comprar
				</a>
			</div>
		</div>
	);
};

export default ItemCard;
