import { Route, Routes } from "react-router-dom";
import Nabvar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Hombre from "./assets/pages/Hombre.jsx";
import Mujer from "./assets/pages/Mujer.jsx";

function App() {
	return (
		<>
			<Nabvar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/Hombre" element={<Hombre />} />
				<Route path="/Mujer" element={<Mujer />} />
			</Routes>
		</>
	);
}

export default App;
