import React, { useContext } from "react";
import "../../assets/styles/cartDetail.css";
import x from "../../assets/imgs/icons/x.svg";
import CartContext from "../../context/CartContext/CartContext";

const CartDetailCard = ({ id, title, price, q, img }) => {
	const { removeItem } = useContext(CartContext);

	const remove = () => {
		removeItem(id);
	};

	return (
		<div className="cartCard">
			<div className="x">
				<button onClick={remove} className="btn">
					<img src={x} alt="" />
				</button>
			</div>

			<div className="d-flex w-100 align-items-center cartItemCard">
				<div className="w-25">
					<img src={img} />
				</div>
				<div className="w-25">
					<h5>{title}</h5>
				</div>
				<div className="w-25">
					<h5>${price.toLocaleString()}</h5>
				</div>
				<div className="w-25">
					<h5>x{q}</h5>
				</div>
				<div className="w-25">
					<h5>${(price * q).toLocaleString()}</h5>
				</div>
			</div>
		</div>
	);
};

export default CartDetailCard;
