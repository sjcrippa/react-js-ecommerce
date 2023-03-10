import React, { useState, useEffect } from "react";
import { BtnComponent, NavBarComp } from "./components";
import { MainLayout } from "./layouts";

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
			<NavBarComp/>

			<MainLayout>

				<p>Bienvenidos a React!</p>
				<BtnComponent label="Boton principal" clickEvent={() => console.log("boton primario")} />

				<div>{contador}</div>
				<button onClick={addContador}>+1</button>
				<button onClick={deleteContador}>- 1</button>

			</MainLayout>
		</div>
	);
}

export default App;
