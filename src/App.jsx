import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemsList/ItemListContainer";
import ItemDetailContainer from "./components/ItemsDetail/ItemDetailContainer";
import CartContextProvider from "./context/CartContext/CartContextProvider";
import Cart from "./pages/Cart";

function App() {
	return (
		<>
			<CartContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</CartContextProvider>
		</>
	);
}

export default App;
