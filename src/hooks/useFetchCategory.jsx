import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const useFetchCategory = (category) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const getItems = async () => {
		const db = getFirestore();
		const items = collection(db, "items");
		let q = undefined;
		if (category === "sale") {
			q = query(items, where("sale", "==", true));
		} else {
			q = query(items, where("category", "==", category));
		}

		try {
			const snapshot = await getDocs(q);
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

export default useFetchCategory;
