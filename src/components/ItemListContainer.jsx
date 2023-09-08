import React from "react";
import "../assets/styles/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
	return (
		<div className="items">
			<h1>{greeting}</h1>
		</div>
	);
};

export default ItemListContainer;
