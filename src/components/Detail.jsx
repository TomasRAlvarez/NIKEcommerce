import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Detail = () => {
	const id = useParams();
	return <ItemDetailContainer id={id.itemId} />;
};

export default Detail;
