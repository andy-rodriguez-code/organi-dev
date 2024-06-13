
import PropTypes from "prop-types";
import Colaborador from "../Colaboradores/Colaborador";
import "./Equipos.css";
import hexToRgba from "hex-to-rgba";

const Equipos = (props) => {
  const { colorPrimary,titulo ,id } = props.datos;
  const { colaboradores, eliminarColaborador ,actualizarColorEquipo,likeFavorito} = props;
  const obj={
    backgroundColor:hexToRgba(colorPrimary,0.6)
  }

  return  <>
     {
      colaboradores.length > 0 &&
      <section className="equipo" style={obj}>
          <input 
            type="color"
            className="input-color"
            value={colorPrimary}
            onChange={(event)=> {
                actualizarColorEquipo(event.target.value , id)
            }}/>
          <h3 style={{ borderColor: colorPrimary }}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador 
              datos={colaborador} 
              key={index} 
              colorPrimary={colorPrimary}
              eliminarColaborador={eliminarColaborador}
              likeFavorito={likeFavorito}/>

              
            ))}
          </div>
        </section>}
     </>
};

Equipos.propTypes = {
  datos: PropTypes.object.isRequired,
  actualizarColorEquipo: PropTypes.func.isRequired,
  colaboradores: PropTypes.array.isRequired,
  eliminarColaborador:PropTypes.func.isRequired,
  likeFavorito: PropTypes.func.isRequired

};
export default Equipos;
