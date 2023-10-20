import React, { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import CartDetailCard from "./CartDetailCard";
import CartDetailOrder from "./CartDetailOrder";
import "../../assets/styles/cartDetail.css";
import { NavLink } from "react-router-dom";

const CartDetail = () => {
	const { cart } = useContext(CartContext);

	let emptyCart = true;
	if (cart.length) {
		emptyCart = false;
	}

	return (
		<div className="cartDetailContainer">
			{!emptyCart && (
				<div className="cartDetailContainer">
					<div className="cartItems">
						{cart.map((el) => (
							<CartDetailCard key={el.item.id} id={el.item.id} title={el.item.title} price={el.item.price} q={el.q} img={el.item.img} />
						))}
					</div>
					<CartDetailOrder />
				</div>
			)}
			{emptyCart && (
				<div className="m-5 text-center">
					<h1>El carrito esta vacio</h1>
					<NavLink to="/" className="btn btn-dark">
						Ir a Comprar
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default CartDetail;
