import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const validarCampos = () => {
    if (!username || !email || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de continuar.",
      });
      return false;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Contraseñas no coinciden",
        text: "La contraseña y la confirmación de contraseña deben ser iguales.",
      });
      return false;
    }

    return true;
  };

  const verificarCorreoExistente = async () => {
    try {
      const respuesta = await axios.get(
        `http://localhost:3001/usuarios?email=${email}`
      );
      const usuarioExistente = respuesta.data[0];
      return !!usuarioExistente;
    } catch (error) {
      console.error("Error al verificar correo existente", error);
      return false;
    }
  };

  const inicio = async () => {
    try {
      if (!email || !password) {
        Swal.fire({
          icon: "error",
          title: "Campos incompletos",
          text: "Por favor, completa todos los campos antes de iniciar sesión.",
        });
        return;
      }
      const respuesta = await axios.get(
        `http://localhost:3001/usuarios?email=${email}&password=${password}`
      );
      const user = respuesta.data[0];
      if (user) {
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: "¡Bienvenido!",
        });

        navigate("/Inicio");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error de inicio de sesión",
          text: "Usuario o contraseña incorrectos",
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  async function registrar() {
    if (!validarCampos()) {
      return;
    }

    const correoExistente = await verificarCorreoExistente();
    if (correoExistente) {
      Swal.fire({
        icon: "error",
        title: "Correo ya registrado",
        text: "El correo proporcionado ya está registrado en la base de datos.",
      });
      return;
    }

    await axios.post("http://localhost:3001/usuarios", {
      username,
      email,
      password,
    });
  }

  const crearUsuario = async () => {
    if (!validarCampos()) {
      return;
    }

    const correoExistente = await verificarCorreoExistente();
    if (correoExistente) {
      Swal.fire({
        icon: "error",
        title: "Correo ya registrado",
        text: "El correo proporcionado ya está registrado en la base de datos.",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Contraseñas no coinciden",
        text: "La contraseña y la confirmación de contraseña deben ser iguales.",
      });
      return;
    }

    registrar();

    Swal.fire({
      icon: "success",
      title: "Usuario creado correctamente",
      text: `¡Bienvenido, ${username}!`,
    });
  };

  return (
    <div className="container-Inicio-sesion">
      <div className="container-login">
        <input type="checkbox" id="signup_toggle" />
        <form className="form">
          <div className="form_front">
            <img
              className="logo"
              src="src/assets/img/logo-pagina (2).png"
              alt=""
            />
            <input
              placeholder="Correo"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Contraseña"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="btn" onClick={inicio}>
              Ingresar
            </button>
            <span className="switch">
              No tienes cuenta con nosotros?
              <label className="signup_tog" htmlFor="signup_toggle">
                Registrarse
              </label>
            </span>
          </div>
          <div className="form_back">
            <img
              className="logo"
              src="src/assets/img/logo-pagina (2).png"
              alt=""
            />
            <input
              placeholder="Nombre"
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              required
              placeholder="Correo"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              placeholder="Contraseña"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              placeholder="Confirmar Contraseña"
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="button" className="btn" onClick={crearUsuario}>
              Registrarse
            </button>
            <span className="switch">
              Ya tienes cuenta?
              <label className="signup_tog" htmlFor="signup_toggle">
                Iniciar sesión
              </label>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
