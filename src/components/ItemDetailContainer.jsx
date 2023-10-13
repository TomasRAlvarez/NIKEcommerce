import React from "react";
import useFetchId from "../hooks/useFetchId";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [loading, item] = useFetchId({ id });

	if (loading) {
		return <Loader />;
	}
	return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
