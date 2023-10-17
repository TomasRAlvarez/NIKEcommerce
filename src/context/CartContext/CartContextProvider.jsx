import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	console.log("context", cart);

	const addItem = (item, q) => {
		setCart([...cart, { item, q }]);
	};

	const values = {
		cart,
		addItem,
	};

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
