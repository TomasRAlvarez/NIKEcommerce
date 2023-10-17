import React from "react";
import "../../assets/styles/ItemListContainer.css";
import useFetch from "../../hooks/useFetch";
import useFetchCategory from "../../hooks/useFetchCategory";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	const params = useParams();

	//En caso de que se haya clickeado un link en la navbar:
	if (params.categoryId !== undefined) {
		const [loading, items] = useFetchCategory(params.categoryId);
		if (loading) {
			return <Loader />;
		}
		return <ItemList items={items} />;
	} else {
		const [loading, items] = useFetch();
		if (loading) {
			return <Loader />;
		}
		return <ItemList items={items} />;
	}
};

export default ItemListContainer;
