import React, { createContext, useContext, useState } from 'react';

const MiContexto = createContext();

export const ProveedorContexto = ({ children }) => {
  const [informacion, setInformacion] = useState(null);
  const [productosCarrito,setCarrito] = useState(null);


  const establecerInformacion = (nuevaInformacion) => {
    setInformacion(nuevaInformacion);
  };
  const establecerInformacionCarrito = (nuevaInformacionCarrito) => {
    setCarrito(nuevaInformacionCarrito);
  };

  return (
    <MiContexto.Provider value={{ informacion, establecerInformacion,productosCarrito,establecerInformacionCarrito }}>
      {children}
    </MiContexto.Provider>
  );
};


export const usarContexto = () => {
  const context = useContext(MiContexto);

  if (!context) {
    throw new Error('useContext debe ser utilizado dentro de un ProveedorContexto');
  }

  return context;
};