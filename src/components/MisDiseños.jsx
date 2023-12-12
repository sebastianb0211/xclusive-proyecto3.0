
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";


function MisDiseños() {
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
      <div className="contenedor-carrito">
        <h1>Mis diseños</h1>
      </div>
      </div>
      </div>
      </div>
      
  )
}

export default MisDiseños