
import PropTypes from "prop-types";
import "./CampoText.css";

const CampoTexto = (props ) => {
  //const [valor, setValor] = useState("");
  const {type ="text"} = props
  const cambioValor = (event) => {
    props.setValor(event.target.value)

  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={cambioValor}
        type={type}
      />
    </div>
  );
};

CampoTexto.propTypes = {
  props: PropTypes.node,
  type:PropTypes.string.isRequired,
  titulo: PropTypes.node,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  valor: PropTypes.node,
  setValor: PropTypes.func
};

export default CampoTexto;
