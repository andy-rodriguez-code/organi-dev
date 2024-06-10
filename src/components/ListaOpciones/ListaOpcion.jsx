import PropTypes from "prop-types";

import "./ListaOpcion.css";

const ListaOpciones = (props) => {
  //Usamos metodo map-> arreglo.map(()=>)//
  const equipos = [
    "Programación",
    "Fron End",
    "Data Sience",
    "DevOps",
    "Ux y Diseño",
    "Móvil",
    "Gestión y Innovasión",
  ];
  const manejarCambioLista= (e)=>{
    console.log("Se ha seleccionado una opción",e.target.value);
    props.setValor(e.target.value)
    
  }
  /*{equipos.map((equipo, index) => <option key={index}> {equipo}</option>; )} cuando es solo una linea*/
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambioLista}>
      <option value="" disabled defaultValue="" hidden >Seleccionar un equipo</option>
        {equipos.map((equipo, index) => {
          return <option key={index} value={equipo}> {equipo}</option>;
        })}
      </select>
    </div>
  );
};
ListaOpciones.propTypes = {
  valor: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired
};
export default ListaOpciones;
