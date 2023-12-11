import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usarContexto } from '../context';

const Menu = () => {
  const { agregarAlCarrito } = usarContexto();
  const [productos, setProductos] = useState([]);

  const mostrarProductos = async () => {
    let listadoProductos = await axios.get('http://localhost:3002/productos');
    setProductos(listadoProductos.data);
  };

  useEffect(() => {
    mostrarProductos();
  }, []);

  const enviarDatos = (producto) => {
    let nuevoCarrito = {
      id: producto.id,
      titulo: producto.titulo,
      precio: producto.precio,
      imagen: producto.imagen,
    };

    agregarAlCarrito(nuevoCarrito);
  };

  return (
    <div className="contenedor-main">
      <div id="contenedor-productos" className="contenedor-productos">
        {productos.map((producto) => (
          <section key={producto.id}>
            <img className="producto-imagen" src={producto.imagen} alt={producto.titulo} />
            <div className="producto-detalles">
              <h3 className="producto-titulo">{producto.titulo}</h3>
              <p className="producto-precio">${producto.precio}</p>
              <button onClick={() => enviarDatos(producto)} className="producto-agregar">
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
