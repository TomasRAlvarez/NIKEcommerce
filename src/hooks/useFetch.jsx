import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetch = (url) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const getItems = async () => {
		try {
			//aca van todas las peticiones
			const response = await fetch(url);
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
	}, [useParams()]);

	return [loading, items];
};

export default useFetch;
