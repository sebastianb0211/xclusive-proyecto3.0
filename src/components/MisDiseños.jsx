
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


function MisDiseños() {
  const [disenos, setDisenos] = useState([]);

  const mostrarDisenos = async () => {
    let listadoDisenos = await axios.get('http://localhost:3001/disenos');
    setDisenos(listadoDisenos.data);
  };

  useEffect(() => {
    mostrarDisenos();
  }, []);

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
                isSelected={selectedButton === 1} onClick={() => handleButtonClick(1)}
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
        
        {disenos.map((diseno)=>(
          <section key={diseno.id}>
           <img className="producto-imagen" src={diseno.imagenActual}  />
            <div className="producto-detalles">
              <h3 className="producto-titulo">{diseno.nombre}</h3>
              <p className="producto-precio">Talla:{diseno.talla}</p>
              <p className="producto-precio">${diseno.precio} dolares</p>
              <div  className="botones-carrito">
              <button  className="producto-agregar">eliminar</button>
                <button  className="producto-agregar">Comprar</button>


              </div>
             
              
            </div>

          </section>
        ))}
      </div>
      </div>
      </div>
      </div>
      
  )
}

export default MisDiseños