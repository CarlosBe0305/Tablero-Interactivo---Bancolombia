function Tablero() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/Proyecto/pages/index.html" // Ruta al archivo HTML externo
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Contenido Externo"
      ></iframe>
    </div>
  );
}

export default Tablero;