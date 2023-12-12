import React, { createContext, useContext, useState } from 'react';

const MiContexto = createContext();

export const ProveedorContexto = ({ children }) => {
  const [informacion, setInformacion] = useState(null);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [numerito, setNumerito] = useState(0);

  const establecerInformacion = (nuevaInformacion) => {
    setInformacion(nuevaInformacion);
  };

  const agregarAlCarrito = (producto) => {
    setProductosCarrito([...productosCarrito, producto]);
    setNumerito(productosCarrito.length + 1);
  };

  return (
    <MiContexto.Provider value={{ informacion, establecerInformacion, productosCarrito,setProductosCarrito, agregarAlCarrito, numerito, setNumerito }}>
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
