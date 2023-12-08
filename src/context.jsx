import React, { createContext, useContext, useState } from 'react';

const MiContexto = createContext();

export const ProveedorContexto = ({ children }) => {
  const [informacion, setInformacion] = useState(null);

  const establecerInformacion = (nuevaInformacion) => {
    setInformacion(nuevaInformacion);
  };

  return (
    <MiContexto.Provider value={{ informacion, establecerInformacion }}>
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