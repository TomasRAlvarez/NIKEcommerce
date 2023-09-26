import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";
import nikeLogo from "../assets/imgs/nikeLogo.png";
import CartWidget from "./CartWidget";

const Nabvar = () => {
	return (
		<div className="header">
			<nav className="navbar navbar-expand-lg navBarDisplay">
				<div className="container-fluid">
					<button className="navbar-toggler text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="navbarTitle">
						<Link className="navbar-brand fs-2" to="/">
							<img className="nikeLogo" src={nikeLogo} alt="" />
							NIKEcommerce
							<img className="nikeLogo" src={nikeLogo} alt="" />
						</Link>
					</div>
					<div className="collapse navbar-collapse w-100 justify-content-center" id="navbarNav">
						<ul className="navbar-nav navbarList">
							<li className="nav-item navItem">
								<NavLink className="nav-link fs-4" to="/">
									Inicio
								</NavLink>
							</li>
							<li className="nav-item navItem">
								<NavLink className="nav-link fs-4" to="/category/men's clothing">
									Hombre
								</NavLink>
							</li>
							<li className="nav-item navItem">
								<NavLink className="nav-link fs-4" to="/category/women's clothing">
									Mujer
								</NavLink>
							</li>
							<li className="nav-item navItem">
								<NavLink className="nav-link fs-4" to="/category/electronics">
									Sale
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<CartWidget />
		</div>
	);
};

export default Nabvar;
