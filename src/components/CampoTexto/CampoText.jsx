import "./CampoText.css";

const CampoTexto = (props) => {
  return (
    <div className="campotextos">
      <label>{props.titulo}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};
export default CampoTexto;
