
import PropTypes from "prop-types";
import "./CampoText.css";

const CampoTexto = (props ) => {
  //const [valor, setValor] = useState("");

  const cambioValor = (event) => {
    props.setValor(event.target.value)

  };

  return (
    <div className="campotextos">
      <label>{props.titulo}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={cambioValor}
      />
    </div>
  );
};

CampoTexto.propTypes = {
  props: PropTypes.node,
  titulo: PropTypes.node,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  valor: PropTypes.node,
  setValor: PropTypes.func
};

export default CampoTexto;
