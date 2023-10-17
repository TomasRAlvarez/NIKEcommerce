import React, { useContext } from "react";
import cartImg from "../../assets/imgs/icons/cart.svg";
import "../../assets/styles/cart.css";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";

const CartWidget = () => {
	const { cart } = useContext(CartContext);
	let q = 0;
	// cart.map((item) => {
	// 	q = q + item.q;
	// });

	return (
		<NavLink to="/cart">
			<div className="cartContainer">
				<img src={cartImg} alt="" />
				<span className="cartItems">
					<p>{q}</p>
				</span>
			</div>
		</NavLink>
	);
};

export default CartWidget;
