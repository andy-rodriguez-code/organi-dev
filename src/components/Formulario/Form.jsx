import "./Form.css";
import CampoTexto from "../CampoTexto/CampoText";
const Formulario = () => {
  return (
    <section className="formulario">
      <form action="">
        <h2 className="form__titulo">Formulario para crear el colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingrese su nombre" />
        <CampoTexto titulo="Puesto" placeholder="Puesto laboral" />
        <CampoTexto titulo="Foto" placeholder="Enlace de foto" />
      </form>
    </section>
  );
};
export default Formulario;
