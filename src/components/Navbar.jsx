import "../assets/styles/navbar.css";
import nikeLogo from "../assets/imgs/nikeLogo.png";
import CartWidget from "./CartWidget";

const Nabvar = () => {
	return (
		<div className="bg-body-secondary">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid navBarDisplay">
					<div className="navbarTitle">
						<a className="navbar-brand fs-2" href="#">
							<img className="nikeLogo" src={nikeLogo} alt="" />
							NIKEcommerce
							<img className="nikeLogo" src={nikeLogo} alt="" />
						</a>
					</div>
					<button className="navbar-toggler text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse w-100 justify-content-center" id="navbarNav">
						<ul className="navbar-nav navbarList">
							<li className="nav-item">
								<a className="nav-link active fs-4" aria-current="page" href="#">
									Inicio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link fs-4" href="#">
									Hombre
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link fs-4" href="#">
									Mujer
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link fs-4" href="#">
									Ver Todo
								</a>
							</li>
						</ul>
					</div>
				</div>
				<CartWidget />
			</nav>
		</div>
	);
};

export default Nabvar;
