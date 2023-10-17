import React from "react";
import ItemCard from "./ItemCard";
import "../../assets/styles/itemCard.css";

const ItemList = ({ items }) => {
	return (
		<div className="itemsView">
			{items.map((item) => (
				<ItemCard key={item.id} itemId={item.id} itemTitle={item.title} itemImg={item.img} itemPrice={item.price} />
			))}
		</div>
	);
};

export default ItemList;
