import { PropTypes } from "prop-types";
import { useState } from "react";
import "./Form.css";
import CampoTexto from "../CampoTexto/CampoText";
import ListaOpciones from "../ListaOpciones/ListaOpcion";
import Boton from "../Botones/Boton";



const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const {registrarColaborador,crearEquipo}=props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar el envio");
    let datoAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datoAEnviar);
  };

  const manejarNuevoEquipo=(e)=>{
    e.preventDefault()
    crearEquipo({titulo,colorPrimary:color})
  }
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
        <ListaOpciones 
        valor={equipo} 
        setValor={setEquipo}
        equipos={props.equipos} />
        

        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2 className="form__titulo">Formulario para crear un equipo</h2>
        <CampoTexto
          titulo={"Titulo del Equipo"}
          placeholder={"Ingrese El titulo"}
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <CampoTexto
          titulo={"Color del equipo"}
          placeholder={"Ingresar el color en Hex"}
          required
          valor={color}
          setValor={setColor}
          type="color"
        />
        <Boton texto="Registrar Equipo" />
      </form>
    </section>
  );
};
Formulario.propTypes = {
  equipos:PropTypes.array.isRequired,
  registrarColaborador:PropTypes.func.isRequired,
  crearEquipo:PropTypes.func.isRequired
};
export default Formulario;
