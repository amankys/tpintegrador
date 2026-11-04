import { useState } from 'react';
import Header from './Header';
import Inicio from './Inicio';
import Reservas from './Reservas';
import AcercaDeNosotros from './AcercaDeNosotros';
import './App.css';

function App() {
  const [seccionActual, setSeccionActual] = useState('inicio');

  return (
    <div className="app">
      <Header cambiarSeccion={setSeccionActual} seccionActual={seccionActual} />

      <main className="contenido-principal">
        {seccionActual === 'inicio' && <Inicio cambiarSeccion={setSeccionActual} />}
        {seccionActual === 'reservas' && <Reservas />}
        {seccionActual === 'nosotros' && <AcercaDeNosotros />}
      </main>

      <footer className="footer">
        <p>© 2026 Hotel Salta · Caseros 450, Salta Capital, Argentina</p>
      </footer>
    </div>
  );
}

export default App;
