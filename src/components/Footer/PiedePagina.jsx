import "./PiedePagina.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes">
        <a href="">
          <img src="/img/facebook.png" alt="" />
        </a>
        <a href="">
          <img src="/img/github.png" alt="" />
        </a>
        <a href="">
          <img src="/img/linkedin.png" alt="" />
        </a>
      </div>
      <div className="parteabajo">
        <img className="favicons" src="/img/favicon.png" alt="" />
        <strong>Desarrollado por Andy Code Student Alura Latam</strong>
      </div>
    </footer>
  );
};
export default Footer;
