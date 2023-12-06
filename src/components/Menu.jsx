const Menu = () => {
  return (
    <div className="contenedor-main">
      <div id="contenedor-productos" className="contenedor-productos">
      <img className="producto-imagen" src="src/assets/img/logo-pagina (2).png" />
        <div className="producto-detalles">
          <h3 className="producto-titulo"></h3>
          <p className="producto-precio"></p>
          <button className="producto-agregar">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
