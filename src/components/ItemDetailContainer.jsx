import React from "react";
import useFetch from "../hooks/useFetch";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = ({ id }) => {
	let url = `https://fakestoreapi.com/products/${id}`;
	const [loading, items] = useFetch(url);

	if (loading) {
		return <Loader />;
	}
	return <ItemDetail item={items} />;
};

export default ItemDetailContainer;
