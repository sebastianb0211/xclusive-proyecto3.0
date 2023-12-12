import React, { useState, useRef } from "react";
import { usarContexto } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DiseñoImagen = () => {
  const { informacion } = usarContexto("");
  const [imagenActual, setImagenActual] = useState(informacion?.img || "");
  const [imagenCargada, setImagenCargada] = useState(null);
  const inputDelanteraRef = useRef(null);
  const inputTraseraRef = useRef(null);
  const [bordeColorDelantera, setBordeColorDelantera] = useState("#cacaca");
  const [bordeColorTrasera, setBordeColorTrasera] = useState("#cacaca");
  const [talla, setTalla] = useState(""); // Estado para la talla
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const [nombre,setNombre]= useState('')

  let redireccion = useNavigate();
  const cambiarImagen = (nuevaImagen, lado) => {
    setImagenActual(nuevaImagen);
    if (lado === "delantera") {
      setBordeColorDelantera("#DFAF67");
      setBordeColorTrasera("#cacaca");
    } else if (lado === "trasera") {
      setBordeColorTrasera("#DFAF67");
      setBordeColorDelantera("#cacaca");
    }
  };

  const manejarCambioArchivo = (event, lado) => {
    const archivo = event.target.files[0];

    if (archivo) {
      setImagenCargada(archivo);

      const reader = new FileReader();
      reader.onload = () => {
        if (lado === "delantera") {
          setImagenActual(reader.result);
        }
      };
      reader.readAsDataURL(archivo);
    }
  };

  const eliminarImagenCargada = () => {
    setImagenCargada(null);
    if (inputDelanteraRef.current) {
      inputDelanteraRef.current.value = "";
    }
    if (inputTraseraRef.current) {
      inputTraseraRef.current.value = "";
    }
  };
  const handleCheckboxChange = () => {
    setCheckedCheckbox(!checkedCheckbox);
  };

  async function subirDiseño() {
    
      await axios.post('http://localhost:3001/disenos', {
        nombre: nombre,
        talla: talla,
        imagenActual: imagenActual,
        imagenCargada: imagenCargada ? URL.createObjectURL(imagenCargada) : null,
        precio:informacion.price+20
        
      });
     
    
  }
  function agregarDiseño(){
    
    Swal.fire({
      title: "Estas seguro que deseas crear tu nuevo diseño?",
      text: "luego podra eliminar tu diseño",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si crear diseño"
    }).then((result) => {
      if (result.isConfirmed) {
        subirDiseño()
        redireccion('/misDiseños')
        Swal.fire({
          title: "Creado",
          text: "Tu diseño  ha sido creada.",
          icon: "success",
          confirmButtonColor:"green"
          
        });
      }
    });
  }

  return (
    <div className="containerDisenarImagen">
      <div className="container-imagenGrande">
        <div className="imagenPredeterminada">
          <img className="imagenLlevada" src={imagenActual} alt="" />
        </div>
        {imagenCargada && (
          <div className="imagenCargada">
            <img
              className="imagenSubidaUsuario"
              src={URL.createObjectURL(imagenCargada)}
              alt=""
            />
            <button onClick={eliminarImagenCargada}>Eliminar Imagen</button>
          </div>
        )}
        <div className="containerFotitos">
          <div>
            <h1>{informacion.nombre} </h1>
            <h2>${informacion.price + 20} dolares</h2>
            <p>$20 dolares extras </p>
          </div>

          <img
            className="imagenpequenita"
            src={informacion.img}
            alt=""
            onClick={() => {
              cambiarImagen(informacion?.img, "delantera");
            }}
            style={{ border: `3px solid ${bordeColorDelantera}` }}
          />
          <img
            className="imagenpequenita"
            src={informacion.imgBack}
            alt=""
            onClick={() => {
              cambiarImagen(informacion?.imgBack, "trasera");
            }}
            style={{ border: `3px solid ${bordeColorTrasera}` }}
          />
          <Link to={"/disenar"}>
            <button className="volverDiseñar">Volver</button>
          </Link>
        </div>
      </div>
      <div className="containerFormularioSubir">
        <form className="formularioSubir">
          <h1>Crear tu diseño</h1>
          <input onChange={(e)=>setNombre(e.target.value)}
            className="inputsSubirFoto"
            type="text"
            placeholder="Nombre de tu proyecto: "
          />
          <label htmlFor="">Talla</label>
          <div className="radio-input">
            <label>
              <input
                type="radio"
                name="talla"
                value="S"
                checked={talla === "S"}
                onChange={() => setTalla("S")}
              />
              <span>S</span>
            </label>
            <label>
              <input
                type="radio"
                name="talla"
                value="M"
                checked={talla === "M"}
                onChange={() => setTalla("M")}
              />
              <span>M</span>
            </label>
            <label>
              <input
                type="radio"
                name="talla"
                value="L"
                checked={talla === "L"}
                onChange={() => setTalla("L")}
              />
              <span>L</span>
            </label>
            <label>
              <input
                type="radio"
                name="talla"
                value="XL"
                checked={talla === "XL"}
                onChange={() => setTalla("XL")}
              />
              <span>XL</span>
            </label>
            <span className="selection" />
          </div>
          <div className="contenedorFiles">
            <label className="custum-file-upload" htmlFor="fileTrasera">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11ZM18 1H10C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1Z" />
                </svg>
              </div>
              <div className="text">
                <span>Subir logo ambos lados</span>
              </div>
              <input
                type="file"
                id="fileTrasera"
                onChange={(e) => manejarCambioArchivo(e, "trasera")}
                ref={inputTraseraRef}
              />
            </label>
          </div>
          <div className="containerCheckbox">
            <label htmlFor="">Lo quiero sin logo</label>
            <div className="check_container">
              <input
                id="checkbox"
                className="hidden"
                type="checkbox"
                checked={checkedCheckbox}
                onChange={handleCheckboxChange}
              />
              <label className="checkbox" htmlFor="checkbox" />
            </div>
          </div>

          <p>
            Explora la experiencia única de personalización de camisas en
            nuestra página web. Diseña a medida con una amplia variedad de
            telas, colores y estilos. ¡Crea tu estilo único hoy mismo!
          </p>
          <button onClick={agregarDiseño} className="botonCrear" type="button">
            <span>Crear</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiseñoImagen;
