import React from "react";

const ItemCard = ({ itemTitle, itemImg, itemPrice, itemDescript }) => {
	return (
		<div className="col-6 col-md-4">
			<div className="card">
				<img className="card.img-top w-3" src={itemImg} />
				<h5 className="card-title">{itemTitle}</h5>
				<h6 className="card-text">{itemPrice}</h6>
				<h6 className="card-text">{itemDescript}</h6>
			</div>
		</div>
	);
};

export default ItemCard;
