import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rutas } from "./routes/rutas";
import { ProveedorContexto } from "./context";
let router = createBrowserRouter(rutas);
function App() {
  return (
    <div>
      <ProveedorContexto>

      <RouterProvider router={router} />
      </ProveedorContexto>
    </div>
  );
}

export default App;
