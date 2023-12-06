import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react";

function Carrito() {
    const Button = styled.button`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    background-color: ${(props) => (props.isSelected ? '#DFAF67' : '#424242')};
    color: ${(props) => (props.isSelected ? 'white' : '#DFAF67')};
    
    
  `;
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };


  return (
    <div>
      <div className="wrapper">
      <header className="header-mobile">
        <h1 className="logo">Xclusive</h1>
        <button className="open-menu" id="open-menu">
        </button>
      </header>
      <aside>
        <button className="close-menu" id="close-menu">
        </button>
        <header>
          <h1 className="logo">Xclusive</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to={"/Inicio"} className="boton-menu boton-volver" >
                Seguir comprando
              </Link>
            </li>
            <li>
              <Button isSelected={selectedButton === 1} onClick={() => handleButtonClick(1)} className="boton-menu-carrito" >
                 Carrito
              </Button>
            </li>
          </ul>
        </nav>
        <footer>
          <p className="texto-footer">© 2023 Xclusive</p>
        </footer>
      </aside>
      <div className="contenedor-main">
        <h2 className="titulo-principal">Carrito</h2>
        <div className="contenedor-carrito">
          <p id="carrito-vacio" className="carrito-vacio">
            Tu carrito está vacío. 
          </p>

          <div id="carrito-productos" className="carrito-productos disabled">
            {/* Aqui trabaj el esneider */}
          </div>

          <div id="carrito-acciones" className="carrito-acciones disabled">
            <div className="carrito-acciones-izquierda">
              <button id="carrito-acciones-vaciar" className="carrito-acciones-vaciar">
                Vaciar carrito
              </button>
            </div>
            <div className="carrito-acciones-derecha">
              <div className="carrito-acciones-total">
                <p>Total:</p>
                <p id="total">$3000</p>
              </div>
              <button id="carrito-acciones-comprar" className="carrito-acciones-comprar">
                Comprar ahora
              </button>
            </div>
          </div>

          <p id="carrito-comprado" className="carrito-comprado disabled">
            Muchas gracias por tu compra. 
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Carrito