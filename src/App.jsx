import { useState } from 'react';
import Header from './Header';
import Inicio from './Inicio';
import Reservas from './Reservas';
import AcercaDeNosotros from './AcercaDeNosotros';
import './App.css';

function App() {
  // Estado para controlar qué sección se muestra en pantalla
  const [seccionActual, setSeccionActual] = useState('inicio');

  return (
    <div className="app">
      {/* Header presente en todas las páginas con barra de navegación */}
      <Header cambiarSeccion={setSeccionActual} seccionActual={seccionActual} />

      {/* Renderizado condicional de componentes según la sección activa */}
      <main className="contenido-principal">
        {seccionActual === 'inicio' && <Inicio cambiarSeccion={setSeccionActual} />}
        {seccionActual === 'reservas' && <Reservas />}
        {seccionActual === 'nosotros' && <AcercaDeNosotros />}
      </main>

      {/* Pie de página */}
      <footer className="footer">
        <p>© 2026 Hotel Paraíso - Trabajo Práctico Integrador de React</p>
      </footer>
    </div>
  );
}

export default App;
