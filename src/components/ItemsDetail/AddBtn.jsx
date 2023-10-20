import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext/CartContext";

const AddBtn = ({ id, onAdd }) => {
	//cuento cantidad de este item en el carrito
	const { countItem } = useContext(CartContext);
	let count = countItem(id);

	const [cant, setCant] = useState(count);

	const add = () => {
		setCant(cant + 1);
		onAdd(cant + 1);
	};

	const substract = () => {
		if (cant > 0) {
			setCant(cant - 1);
			onAdd(cant - 1);
		}
	};

	return (
		<div className="d-flex">
			<button onClick={add} type="button" className="btn btn-dark mx-4">
				+
			</button>
			<h4>{count}</h4>
			<button onClick={substract} type="button" className="btn btn-dark mx-4">
				-
			</button>
		</div>
	);
};

export default AddBtn;
