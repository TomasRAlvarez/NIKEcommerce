import React from "react";

const ItemDetail = ({ item }) => {
	return (
		<div className="card itemCard">
			<img src={item.image} className="card-img-top w-50 itemImg" alt="..." />
			<div className="card-body itemData">
				<h5 className="card-title">{item.title}</h5>
				<h5 className="card-text">{item.description}</h5>
				<p className="card-text">$ {item.price}</p>
			</div>
		</div>
	);
};

export default ItemDetail;
