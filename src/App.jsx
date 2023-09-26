import { Route, Routes } from "react-router-dom";
import Nabvar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
	return (
		<>
			<Nabvar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/item/:itemId" element={<ItemDetailContainer />} />
			</Routes>
		</>
	);
}

export default App;
