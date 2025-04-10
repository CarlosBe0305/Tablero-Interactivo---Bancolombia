import React, { useEffect } from "react";

function Tablero() {
  useEffect(() => {
    // Cambia el título de la página al cargar el componente
    document.title = "Tablero de Resultados - Bancolombia";
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/pages/tablero.html" // Ruta al archivo HTML externo
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Contenido Externo"
      ></iframe>
    </div>
  );
}

export default Tablero;