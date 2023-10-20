import React, { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartDetailOrder = () => {
	const { cart } = useContext(CartContext);
	let q = 0;
	let totalPrice = 0;
	let items = [];
	cart.map((i) => {
		items.push({ Id: i.item.id, Title: i.item.title, Description: i.item.description, Cantidad: i.q });
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
		});
	}

	function noSucces() {
		MySwal.fire({
			titleText: `Hubo un problema con su compra`,
			text: `Intentelo denuevo mas tarde`,
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

	return (
		<div className="cartOrder">
			<div className="m-3 cartOrderResume">
				<h5>Cantidad de productos: {q}</h5>
				<h5>Total: ${totalPrice.toLocaleString()}</h5>
			</div>
			<div className="m-3 cartOrderConfirm">
				<h5>Complete sus datos</h5>
				<form onSubmit={onSubmit}>
					<div className="form-floating mb-3">
						<input type="text" onFocus={validName} onChange={validName} className="form-control" id="name" placeholder="Name" />
						<label htmlFor="name">Nombre</label>
						<div id="nameValid" className="valid-feedback">
							Ok
						</div>
						<div id="nameInvalid" className="invalid-feedback">
							Debe ingresar un nombre
						</div>
					</div>
					<div className="form-floating mb-3">
						<input type="email" onFocus={validEmail} onChange={validEmail} className="form-control" id="email" placeholder="name@example.com" />
						<label htmlFor="email">Email</label>
						<div id="emailValid" className="valid-feedback">
							Ok
						</div>
						<div id="emailInvalid" className="invalid-feedback">
							Debe ingresar un email
						</div>
					</div>
					<div className="form-floating mb-3">
						<input type="email" onFocus={validEmail} onChange={validEmail} className="form-control" id="emailConfirm" placeholder="name@example.com" />
						<label htmlFor="emailConfirm">Confirmar email</label>
						<div id="emailConfirmValid" className="valid-feedback">
							Ok
						</div>
						<div id="emailConfirmInvalid" className="invalid-feedback">
							No coincide con el email
						</div>
					</div>
					<div className="">
						<button type="submit" className="btn btn-dark">
							Realizar compra
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CartDetailOrder;
