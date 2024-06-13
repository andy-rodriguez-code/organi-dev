import PropTypes from "prop-types";
import "./Colaborador.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


const Colaborador = (props) => {
  const { nombre, puesto, foto, id,favorito} = props.datos;
  const { colorPrimary,  eliminarColaborador,likeFavorito } = props;
  return (
    <div className="colaborador">
        <RiDeleteBinFill className="eliminar "   onClick={()=>eliminarColaborador(id)}/>
      <div className="encabezado" style={{ backgroundColor: colorPrimary }}>
        <img src={foto} alt={nombre} />
      </div>

      <div className="informacion">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {favorito? <FaHeart className="corazon" onClick={()=>likeFavorito(id)}/> : <FaRegHeart className="cora" onClick={ ()=>likeFavorito(id)} />}
      </div>
    </div>
  );
};
Colaborador.propTypes = {
  datos: PropTypes.object.isRequired,
  colorPrimary: PropTypes.string.isRequired,
  eliminarColaborador: PropTypes.func.isRequired,
  likeFavorito: PropTypes.func.isRequired
};
export default Colaborador;
