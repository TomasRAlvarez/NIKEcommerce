import React from "react";
import cart from "../assets/imgs/icons/cart.svg";
import "../assets/styles/cart.css";

const CartWidget = () => {
	let items = 3;

	return (
		<div className="cartContainer">
			<img src={cart} alt="" />
			<span className="cartItems">
				<p>{items}</p>
			</span>
		</div>
	);
};

export default CartWidget;
