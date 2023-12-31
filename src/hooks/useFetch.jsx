import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, snapshotEqual } from "firebase/firestore";

const useFetch = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const getItems = async () => {
		const db = getFirestore();
		const items = collection(db, "items");

		try {
			const snapshot = await getDocs(items);
			const allItems = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
			setItems(allItems);
			setLoading(false);
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
