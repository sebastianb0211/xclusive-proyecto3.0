import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import ProductList from "./ListaProducto";
import Encabezado from "./Encabezado";

function Productos() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const Button = styled.button`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    background-color: ${(props) => (props.isSelected ? "#DFAF67" : "#424242")};
    color: ${(props) => (props.isSelected ? "white" : "#DFAF67")};
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
                <Link to={"/Abrigos"}>
                  {" "}
                  <Button
                    isSelected={selectedButton === 2}
                    onClick={() => handleButtonClick(2)}
                    id="abrigos"
                    className="boton-menu boton-categoria"
                  >
                    Abrigos
                  </Button>
                </Link>
              </li>

              <li>
                <Link to={"/Productos"}>
                  <Button
                    isSelected={selectedButton === 1}
                    onClick={() => handleButtonClick(1)}
                    className="boton-menu-carrito"
                  >
                    Crear Diseño
                  </Button>
                </Link>
              </li>
              <li>
                <Link to={"/Inicio"} className="boton-menu boton-volver">
                  Regresar
                </Link>
              </li>
            </ul>
          </nav>
          <footer>
            <p className="texto-footer">© 2023 Xclusive</p>
          </footer>
        </aside>
        <div className="contenedor-main">
          <h1>Crear Diseños</h1>

          <Encabezado
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default Productos;
