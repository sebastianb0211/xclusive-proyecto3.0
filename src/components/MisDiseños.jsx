import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function MisDiseños() {
  const [disenos, setDisenos] = useState([]);
  const [forzarUpdate, setForzarUpdate] = useState(0);

  const mostrarDisenos = async () => {
    let listadoDisenos = await axios.get("http://localhost:3001/disenos");
    setDisenos(listadoDisenos.data);
  };

  useEffect(() => {
    mostrarDisenos();
  }, [forzarUpdate]);

  function ComprarProducto(id) {
    const disenoCompra = disenos.find((diseno) => diseno.id === id);
    if (!disenoCompra) {
      console.error(`No se encontró el diseño con id ${id}`);
      return;
    }

    Swal.fire({
      title: `¿Quieres comprar el diseño ${disenoCompra.nombre}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, comprar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3001/disenos/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire(
                "Comprado correctamente",
                "su diseño se enviara en los proximos 3 dias.",
                "success"
              );

              setForzarUpdate((prevKey) => prevKey + 1);
            } else {
              console.error("Error al eliminar el diseño de la base de datos");
            }
          })
          .catch((error) => {
            console.error(
              "Error al realizar la solicitud de eliminación",
              error
            );
          });
      }
    });
  }

  function EliminarProducto(id) {
    Swal.fire({
      title: "¿Quieres eliminar este diseño?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3001/disenos/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire(
                "Eliminado",
                "El diseño se ha eliminado correctamente.",
                "success"
              );

              setForzarUpdate((prevKey) => prevKey + 1);
            } else {
              console.error("Error al eliminar el diseño de la base de datos");
            }
          })
          .catch((error) => {
            console.error(
              "Error al realizar la solicitud de eliminación",
              error
            );
          });
      }
    });
  }

  const Button = styled.button`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    background-color: ${(props) => (props.isSelected ? "#DFAF67" : "#424242")};
    color: ${(props) => (props.isSelected ? "white" : "#DFAF67")};
  `;
  const [selectedButton, setSelectedButton] = useState(1);

  return (
    <div>
      <div className="wrapper">
        <header className="header-mobile">
          <h1 className="logo">Xclusive</h1>
          <button className="open-menu" id="open-menu"></button>
        </header>
        <aside>
          
          <button className="close-menu" id="close-menu"></button>
          <header>
            <h1 className="logo">Xclusive</h1>
            <img className="logo-crear-productos" src="src/assets/img/logo-pagina (2).png" alt="" />
          </header>
          <nav>
            <ul>
              <li>
                <Link to={"/Inicio"} className="boton-menu boton-volver">
                  Seguir comprando
                </Link>
              </li>
              <li>
                <Button
                  isSelected={selectedButton === 1}
                  onClick={() => handleButtonClick(1)}
                  className="boton-menu-carrito"
                >
                  Mis diseños
                </Button>
              </li>
            </ul>
          </nav>
          <footer>
            <p className="texto-footer">© 2023 Xclusive</p>
          </footer>
        </aside>
        <div className="contenedor-main">
          <div className="contenedor-productos">
            {disenos.map((diseno) => (
              <section key={diseno.id}>
                <img className="producto-imagen" src={diseno.imagenActual} alt="" />
                <img
                  className="imagenCargadaDiseno"
                  src={diseno.imagenCargada}
                  alt=""
                />
                <div className="producto-detallesDiseno">
                  <h3 className="producto-titulo">{diseno.nombre}</h3>
                  <p className="producto-precio">Talla: {diseno.talla}</p>
                  <p className="producto-precio">${diseno.precio} dólares</p>
                  <div className="botones-carrito">
                    <button  onClick={() => EliminarProducto(diseno.id)} className="producto-agregar">Eliminar</button>
                    <button  onClick={() => ComprarProducto(diseno.id)} className="producto-agregar">Comprar</button>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisDiseños;
