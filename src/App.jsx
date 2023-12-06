import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import { rutas } from './routes/rutas'

let router = createBrowserRouter(rutas)
function App() {
  

  return (
    <section>
      <RouterProvider router={router}/>
    </section>
  )
}

export default App