import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	console.log("context", cart);

	const manageItems = (item, q) => {
		const id = item.id;

		//Si la cantidad es 0, elimino el item del carrito
		if (q === 0) {
			removeItem(id);
		} else {
			if (isInCart(id)) {
				const newCart = cart.map((el) => {
					if (el.item.id === id) {
						return {
							...el,
							q: q,
						};
					}
					return el;
				});
				setCart(newCart);
			} else {
				setCart([...cart, { item, q }]);
			}
		}
	};

	//Funcion q verifica si ya esa el producto en el carrito
	const isInCart = (id) => {
		return cart.some((cartItem) => cartItem.item.id === id);
	};

	//Funcion q elimina item del carrito
	const removeItem = (id) => {
		const newCart = cart.filter((el) => el.item.id !== id);
		setCart(newCart);
	};

	//Funcion q elimina todos los items del carrito
	const clear = () => {
		setCart([]);
	};

	const values = {
		cart,
		manageItems,
		isInCart,
		removeItem,
		clear,
	};

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
