
import {Link} from 'react-router-dom'


function Login() {
  return (
    <div className="container-Inicio-sesion">
        
      <div className="container-login">
        <input type="checkbox" id="signup_toggle" />
        <form className="form">
        
          <div className="form_front">
          <img className='logo' src="src/assets/img/logo-pagina (2).png" alt="" />
            <div className="form_details">Inicio Sesion</div>
            <input placeholder="Nombre" className="input" type="text" />
            <input placeholder="Contraseña" className="input" type="text" />
            <Link to={"/Inicio"} className="btn">Ingresar</Link>
            <span className="switch">
             No tienes cuenta con nosotros?
              <label className="signup_tog" htmlFor="signup_toggle">
                Registarse
              </label>
            </span>
          </div>
          <div className="form_back">
          <img className='logo' src="src/assets/img/logo-pagina (2).png" alt="" />
            <div className="form_details">Registro</div>
            <input placeholder="Nombre" className="input" type="text" />
            <input placeholder="Correo" className="input" type="email" />
            <input placeholder="Contraseña" className="input" type="text" />
            <input
              placeholder="Confirmar Contraseña"
              className="input"
              type="text"
            />
            <button type='button' className="btn">Registrarse</button>
            <span className="switch">
              Ya tienes cuenta?
              <label className="signup_tog" htmlFor="signup_toggle">
                Iniciar sesion
              </label>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login