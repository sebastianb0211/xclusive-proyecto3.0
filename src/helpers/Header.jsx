import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { usarContexto } from '../context';
import Swal from 'sweetalert2';


const Header = () => {
  const { numerito } = usarContexto();
  const navegacion = useNavigate()

    const Button = styled.button`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    background-color: ${(props) => (props.isSelected ? '#DFAF67' : '#424242')};
    color: ${(props) => (props.isSelected ? 'white' : '#DFAF67')};
    
    
  `;
  useEffect(()=>{},[])

 
  
  const Carro = styled.a`
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

  const cerrarSesion = () => {
    Swal.fire({
      title: '¿Quieres cerrar sesión?',
      text: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        navegacion('/');
      }
    });
  };
  return (

    <div className="wrapper">
        <header className="header-mobile">
          <h1 className="logo">Xclusive</h1>
          <button className="open-menu" id="open-menu" >
            
          </button>
        </header>
        <aside >
          <button
            className="close-menu"
            id="close-menu"
            type="button"
          >
            
          </button>
          <header>
            <h1 className="logo">Xclusive</h1>
            <button className="cerrarSesion" onClick={cerrarSesion}>
            <img className="logo-crear-productos" src="src/assets/img/logo-pagina (2).png" alt="" />
            </button>
          </header>
          <nav>
            <ul className="menu">
              <li>
                <Button isSelected={selectedButton === 1} onClick={() => handleButtonClick(1)}
                  id="todos"
                  className="boton-menu boton-categoria active"
                  type="button"
                >
                productos
                </Button>
              </li>
              <li>
                <Link to={"/misDiseños"} isSelected={selectedButton === 2} onClick={() => handleButtonClick(2)}
                  id="todos"
                  className="boton-menu boton-categoria active"
                  type="button"
                >
                Mis Diseños
                </Link>
              </li>
              <li>
                <Link to={"/Disenar"} isSelected={selectedButton === 3} onClick={() => handleButtonClick(3)} className="boton-menu boton-categoria" type="button">
                Diseñar Productos 
                </Link>
              </li>
              <li>
                <Link to={"/Carrito"}><Carro isSelected={selectedButton === 4} onClick={() => handleButtonClick(4)} className="boton-menu boton-carrito" type="button">
                   Carrito{" "}
                  <span id="numerito" className="numerito">
                    {numerito}
                  </span>
                </Carro></Link>

              </li>
            </ul>
          </nav>
          <footer>
            <p className="texto-footer">© 2023 Xclusive</p>
          </footer>
        </aside>
        <Menu/>
    </div>
  );
};

export default Header;
