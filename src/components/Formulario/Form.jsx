import { useState } from "react";
import "./Form.css";
import CampoTexto from "../CampoTexto/CampoText";
import ListaOpciones from "../ListaOpciones/ListaOpcion";
import Boton from "../Botones/Boton";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar el envio", e);
    let datoAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    console.log(datoAEnviar);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2 className="form__titulo">Formulario para crear el colaborador</h2>
        <CampoTexto
          titulo={"Nombre"}
          placeholder={"Ingrese su nombre"}
          required
          valor={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo={"Puesto"}
          placeholder={"Puesto laboral"}
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <CampoTexto
          titulo={"Foto"}
          placeholder={"Enlace de foto"}
          required
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones valor={equipo} setValor={setEquipo} />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};
export default Formulario;
