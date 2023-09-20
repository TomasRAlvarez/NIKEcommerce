import React from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
	return (
		<div className="row">
			{items.map((item) => (
				<ItemCard
					key={item.id}
					itemId={item.id}
					itemTitle={item.title}
					itemImg={item.image}
					itemPrice={item.price}
					itemDescript={item.description}
				/>
			))}
		</div>
	);
};

export default ItemList;
