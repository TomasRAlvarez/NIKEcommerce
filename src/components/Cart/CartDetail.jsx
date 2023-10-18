import React, { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import CartDetailCard from "./CartDetailCard";
import "../../assets/styles/cartDetail.css";

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
					<div className="cartOrder"></div>
				</div>
			)}
			{emptyCart && <h1>El carrito esta vacio</h1>}
		</div>
	);
};

export default CartDetail;
