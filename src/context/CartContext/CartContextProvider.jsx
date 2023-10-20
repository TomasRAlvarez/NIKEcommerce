import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";
import { getDoc, updateDoc, doc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const manageItems = (item, q) => {
		const id = item.id;

		if (q > item.stock) {
			//Si la cantidad es mayor al stock, alert
			const MySwal = withReactContent(Swal);
			MySwal.fire({
				titleText: "Ups, alcanzo el limite de stock",
				icon: "warning",
			});
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

	//Funcion q modifica el stock de un item
	const manageStock = async (id, q) => {
		const db = getFirestore();
		const item = doc(db, "items", id);
		try {
			const snapshot = await getDoc(item);
			if (snapshot.exists()) {
				const newStock = snapshot.data().stock - q;
				await updateDoc(item, {
					stock: newStock,
				});
			}
		} catch (error) {
			console.log("Update stock error: ", error);
		}
	};

	//Funcion q vacia el carrito de compras
	const clearCart = () => {
		setCart([]);
	};

	const values = {
		cart,
		manageItems,
		isInCart,
		removeItem,
		countItem,
		manageStock,
		clearCart,
	};

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
