import axios from "axios";
import Header from "../helpers/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usarContexto } from "../context";

const Menu = () => {
  const {establecerInformacionCarrito}= usarContexto()
  const [productos, setProductos] = useState([]);
  const mostrarProductos = async () => {
    let listadoProductos = await axios.get("http://localhost:3002/productos");
    setProductos(listadoProductos.data);
  };
 useEffect(()=>{
  mostrarProductos()
 },[])
 console.log(mostrarProductos)

 const enviarDatos = (producto) => {

  let nuevoCarrito = {
    nombre: producto.titulo,
  
  };
  
  establecerInformacionCarrito(nuevoCarrito);
 
}
  return (
    <div className="contenedor-main">
     
      <div id="contenedor-productos" className="contenedor-productos">
        {productos.map((producto) => (
          <section key={producto.id}>
            <img
              className="producto-imagen"
              src={producto.imagen}
             
            />
            <div class="producto-detalles">
              <h3 class="producto-titulo">{producto.titulo}</h3>
              <p class="producto-precio">${producto.precio}</p>
              <button onClick={() => enviarDatos(producto)} class="producto-agregar" >
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
