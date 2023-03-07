import { BtnComponent, NavBarComp } from "./components";
import { MainLayout } from "./layouts";

function App() {

  console.log("hola react")

  return (
    <MainLayout>
      <div>
        <p>Bienvenidos a React!</p>
        <BtnComponent label="Boton principal" clickEvent={() => console.log("boton primario")} />

      </div></MainLayout>

  );
}

export default App;
