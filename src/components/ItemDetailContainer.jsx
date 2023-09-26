import React from "react";
import useFetch from "../hooks/useFetch";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const id = useParams();
	let url = `https://fakestoreapi.com/products/${id.itemId}`;
	const [loading, items] = useFetch(url);

	if (loading) {
		return <Loader />;
	}
	return <ItemDetail item={items} />;
};

export default ItemDetailContainer;
