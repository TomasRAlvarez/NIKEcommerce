import React from "react";

const CartDetailOrder = ({ q, totalPrice, onSubmit, validName, validEmail }) => {
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
