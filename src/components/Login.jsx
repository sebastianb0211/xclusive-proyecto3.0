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
            <input placeholder="CORREO" className="input" type="email" />
           
            <Link to={"/Inicio"} className="btn">Ingresar</Link>
  
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login