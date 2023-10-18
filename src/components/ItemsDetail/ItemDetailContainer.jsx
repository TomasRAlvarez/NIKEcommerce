import React, { useContext } from "react";
import useFetchId from "../../hooks/useFetchId";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [loading, item] = useFetchId({ id });

	const { manageItems } = useContext(CartContext);

	const onAdd = (q) => {
		manageItems(item, q);
	};

	if (loading) {
		return <Loader />;
	}
	return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
