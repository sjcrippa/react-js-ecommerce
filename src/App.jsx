import React, { useState } from "react";
import { NavBarComp } from "./components";
import { MainLayout } from "./layouts";
import "./App.css";

function App() {
	const [contador, setContador] = useState(0);

	const addContador = () => {
		setContador(contador + 1);
	};

	const deleteContador = () => {
		setContador(contador - 1);
	};

	return (
		<div>
			<NavBarComp />

			<MainLayout>

				<h1>Bienvenidos!</h1>


				<div className="contador">{contador}</div>
				<div>
					<button className="btn btn-primary" onClick={addContador}>+1</button>
					<button className="btn btn-primary" onClick={deleteContador}>- 1</button>
				</div>
			</MainLayout>
		</div>
	);
}

export default App;
