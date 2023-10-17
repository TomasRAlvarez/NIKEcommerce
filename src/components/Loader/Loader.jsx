import React from "react";
import "../../assets/styles/loader.css";
import nikeLogo from "../../assets/imgs/nikeLogo.png";

const Loader = () => {
	return (
		<div className="loader">
			<img src={nikeLogo} alt="NIKE-commerce" />
		</div>
	);
};

export default Loader;
