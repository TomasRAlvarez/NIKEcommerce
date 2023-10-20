import React, { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CartDetailOrder from "./CartDetailOrder";

const CartDetailOrderContainer = () => {
	const { cart } = useContext(CartContext);
	const { manageStock } = useContext(CartContext);
	const { clearCart } = useContext(CartContext);
	let q = 0;
	let totalPrice = 0;
	let items = [];
	cart.map((i) => {
		items.push({ id: i.item.id, title: i.item.title, description: i.item.description, cantidad: i.q });
		q = q + i.q;
		totalPrice = totalPrice + i.item.price * i.q;
	});

	let error = true;
	const validName = () => {
		const name = document.getElementById("name").value;
		if (name === "") {
			document.getElementById("nameInvalid").style.display = "block";
			document.getElementById("nameValid").style.display = "none";
			error = true;
		} else {
			document.getElementById("nameValid").style.display = "block";
			document.getElementById("nameInvalid").style.display = "none";
			error = false;
		}
	};
	const validEmail = () => {
		const email = document.getElementById("email").value;
		const emailConfirm = document.getElementById("emailConfirm").value;
		if (email === "") {
			document.getElementById("emailInvalid").style.display = "block";
			document.getElementById("emailValid").style.display = "none";
			error = true;
		} else {
			document.getElementById("emailValid").style.display = "block";
			document.getElementById("emailInvalid").style.display = "none";
			error = false;
		}

		if (emailConfirm === "" || emailConfirm !== email) {
			document.getElementById("emailConfirmInvalid").style.display = "block";
			document.getElementById("emailConfirmValid").style.display = "none";
			error = true;
		} else {
			document.getElementById("emailConfirmValid").style.display = "block";
			document.getElementById("emailConfirmInvalid").style.display = "none";
			error = false;
		}
	};
	//Crear orden en firebase
	const buyConfirm = async (nameValue, emailValue) => {
		const newOrder = {
			date: new Date(),
			cliente: nameValue,
			email: emailValue,
			items: [...items],
			cantidadTotal: q,
			precioTotal: totalPrice,
		};
		const db = getFirestore();
		const coleccionRef = collection(db, "orders");
		const docRef = doc(coleccionRef);
		try {
			await setDoc(docRef, newOrder);
			const orderId = docRef.id;
			succes(nameValue, orderId);
			for (let i = 0; i < items.length; i++) {
				manageStock(items[i].id, items[i].cantidad);
				console.log(items[i].id, items[i].cantidad);
			}
			clearCart();
		} catch (error) {
			noSucces();
			console.error("Error al agregar documento: ", error);
		}
	};

	const MySwal = withReactContent(Swal);
	function succes(nameValue, orderId) {
		MySwal.fire({
			titleText: `${nameValue}, tu compra se realizo correctamente!!!`,
			text: `Codigo de compra: ${orderId}`,
			icon: "success",
		});
	}

	function noSucces() {
		MySwal.fire({
			titleText: "Hubo un problema con su compra",
			text: "Intentelo denuevo mas tarde",
			icon: "error",
		});
	}

	const onSubmit = (e) => {
		e.preventDefault();
		validName();
		validEmail();
		const nameValue = document.getElementById("name").value;
		const emailValue = document.getElementById("email").value;
		if (!error) {
			if (buyConfirm(nameValue, emailValue)) {
			}
		} else {
			console.log("error");
		}
	};
	return <CartDetailOrder q={q} totalPrice={totalPrice} onSubmit={onSubmit} validName={validName} validEmail={validEmail} />;
};

export default CartDetailOrderContainer;
