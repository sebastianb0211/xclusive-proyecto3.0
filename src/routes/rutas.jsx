import Carrito from "../components/Carrito";
import Home from "../views/Home";
import Inicio from "../views/Inicio";
import Productos from "../components/Productos"
import Abrigos from "../components/Abrigos";

export let rutas = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Inicio",
    element: <Inicio />
  },
  {
    path: "/Carrito",
    element: <Carrito />
  },
  {
    path: "/Productos",
    element: <Productos />
  },
  {
    path: "/Abrigos",
    element: <Abrigos/>
  }
];
