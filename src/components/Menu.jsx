import axios from "axios";
import Header from "../helpers/Header";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const mostrarProductos = async () => {
    let listadoProductos = await axios.get("http://localhost:3001/productos");
    setProductos(listadoProductos.data);
  };

  return (
    <div className="contenedor-main">
      <button onClick={mostrarProductos}>Empezar</button>
      <div id="contenedor-productos" className="contenedor-productos">
        {productos.map((producto) => (
          <section>
            <img
              className="producto-imagen"
              src={producto.imagen}
             
            />
            <div class="producto-detalles">
              <h3 class="producto-titulo">{producto.titulo}</h3>
              <p class="producto-precio">${producto.precio}</p>
              <button class="producto-agregar" >
                Agregar
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
