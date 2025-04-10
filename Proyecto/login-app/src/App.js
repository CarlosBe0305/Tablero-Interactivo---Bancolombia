import React, { useState, useEffect, useRef } from "react";
import "./Login.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Estado para controlar la pantalla de carga
  const videoRef = useRef(null); // Referencia al video

  useEffect(() => {
    // Simula el tiempo de carga (duración del video)
    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado de carga a false después de 6 segundos
    }, 6250);

    // Forzar la reproducción del video con sonido
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video reproduciéndose con sonido.");
          })
          .catch((error) => {
            console.error("Error al reproducir el video:", error);
          });
      }
    }

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de credenciales correctas
    const validEmail = "usuario@ejemplo.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      alert("Inicio de sesión exitoso");
      // Redirigir a otra página (por ejemplo, dashboard)
      window.location.href = "/Proyecto/index.html"; // Cambia la ruta según tu estructura de archivos
    } else {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  if (loading) {
    // Mostrar el video mientras el estado de carga sea true
    return (
      <div className="loading-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="loading-video"
          onEnded={() => setLoading(false)} // Cambia el estado cuando el video termina
        >
          <source src="/videos/Intro - Bancolombia.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="btn">
            Ingresar
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default App;
