import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Tablero from "./Tablero"; // Importa el componente Tablero
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tablero" element={<Tablero />} />
      </Routes>
    </Router>
  );
}

export default App;
