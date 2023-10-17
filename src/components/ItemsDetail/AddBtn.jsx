import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";

const AddBtn = ({ onAdd }) => {
	const [cant, setCant] = useState(0);

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
			<p>{cant}</p>
			<button onClick={substract} type="button" className="btn btn-dark mx-4">
				-
			</button>
		</div>
	);
};

export default AddBtn;
