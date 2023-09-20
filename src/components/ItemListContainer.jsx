import React, { useState, useEffect } from "react";
import "../assets/styles/ItemListContainer.css";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const getItems = async () => {
		try {
			//aca van todas las peticiones
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
			setItems(data);
			setLoading(false); //seteo el loading false cuando se realiza el pedido
		} catch (error) {
			setLoading(false);
			console.log("Error: ", error);
		}
	};

	useEffect(() => {
		getItems();
	}, []);

	if (loading) {
		return <Loader />;
	}
	return <ItemList items={items} />;
};

export default ItemListContainer;
