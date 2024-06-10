import PropTypes from "prop-types";
import "./MiOrg.css";

const MiOrg = (props) => {
  return (
    <section className="orgSection">
      <h3 className="titulo-org">Mi Organización</h3>
      <img
        src="/img/icon-add.png"
        alt="Icono de add"
        onClick={props.cambiarMostrar}
      />
    </section>
  );
};
MiOrg.propTypes = {
  props:PropTypes.node,
  cambiarMostrar:PropTypes.func
};
export default MiOrg;
