import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, snapshotEqual } from "firebase/firestore";

const useFetchId = ({ id }) => {
	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(true);
	const getItems = async () => {
		const db = getFirestore();
		const item = doc(db, "items", id);

		try {
			const snapshot = await getDoc(item);
			if (snapshot.exists()) {
				setItem({
					id: snapshot.id,
					...snapshot.data(),
				});
			}
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log("Error: ", error);
		}
	};

	useEffect(() => {
		getItems();
	}, [useParams()]);

	return [loading, item];
};

export default useFetchId;
