import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Headers";
import Form from "./components/Formulario/Form";
import MiOrg from "./components/MiOrg";

function App() {
  //puedes tambien usar condicion &&se muestra o lo que ballas a quitar
  
  const [mostrarForm, actualizarForm] = useState("");
  const cambiarMostrar=()=>{
    actualizarForm(!mostrarForm);
  }
  return (
    <>
      <div>
        <Header />
        {mostrarForm === true ? <Form /> : <></>}
        <MiOrg cambiarMostrar={cambiarMostrar} />
      </div>
    </>
  );
}

export default App;
