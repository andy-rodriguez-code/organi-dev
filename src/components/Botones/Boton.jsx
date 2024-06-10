import PropTypes from 'prop-types';
import "./Boton.css"

const Boton = (props)=>{
    return(
        <button className="btn">{props.texto}</button>
    ) 
}
Boton.propTypes = {
    texto: PropTypes.node,
}
export default Boton;