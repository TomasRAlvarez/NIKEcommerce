import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	console.log("context", cart);

	const manageItems = (item, q) => {
		const id = item.id;

		if (q > item.stock) {
			//Si la cantidad es mayor al stock, alert
			alert("Alcanzo limite de stock");
		} else if (q === 0) {
			//Si la cantidad es 0, elimino el item del carrito
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

	//Funcion q devuelve cantidad de un mismo item en el carrito
	const countItem = (id) => {
		let countItem = 0;
		if (isInCart(id)) {
			cart.map((el) => {
				if (el.item.id === id) {
					countItem = el.q;
				}
			});
			return countItem;
		}
		return countItem;
	};

	const values = {
		cart,
		manageItems,
		isInCart,
		removeItem,
		countItem,
	};

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
