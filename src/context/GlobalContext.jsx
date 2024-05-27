// GlobalContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto global
const GlobalContext = createContext();

// Creamos un proveedor para el contexto global
export const GlobalProvider = ({ children }) => {
  const [historias, setHistorias] = useState([]); // Estado para almacenar las historias

  // Cargar los datos de bd.json al montar el componente
  useEffect(() => {
    fetch('src/db/bd.json')
      .then(response => response.json())
      .then(data => setHistorias(data.historias))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  return (
    <GlobalContext.Provider value={{ historias, setHistorias }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para utilizar el contexto global
export const useGlobalContext = () => useContext(GlobalContext);