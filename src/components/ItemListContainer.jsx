import React from "react";
import "../assets/styles/ItemListContainer.css";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	//Url en caso de que no se haga ninguna busqueda por link
	let url = "https://fakestoreapi.com/products";
	const params = useParams();
	//En caso de que se haya clickeado un link en la navbar: url = categoria del param
	if (params.categoryId !== undefined) {
		url = `https://fakestoreapi.com/products/category/${params.categoryId}`;
	}
	//Hook para buscar items a la Api
	const [loading, items] = useFetch(url);

	if (loading) {
		return <Loader />;
	}
	return <ItemList items={items} />;
};

export default ItemListContainer;
