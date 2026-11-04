export default function Header({ cambiarSeccion, seccionActual }) {
  return (
    <header className="header">
      <div className="header-contenedor">
        <h1 className="logo" onClick={() => cambiarSeccion('inicio')}>
          🏨 Hotel Paraíso
        </h1>
        <nav className="nav">
          <button 
            className={`nav-btn ${seccionActual === 'inicio' ? 'activo' : ''}`}
            onClick={() => cambiarSeccion('inicio')}
          >
            Inicio
          </button>
          <button 
            className={`nav-btn ${seccionActual === 'reservas' ? 'activo' : ''}`}
            onClick={() => cambiarSeccion('reservas')}
          >
            Reservas
          </button>
          <button 
            className={`nav-btn ${seccionActual === 'nosotros' ? 'activo' : ''}`}
            onClick={() => cambiarSeccion('nosotros')}
          >
            Acerca de nosotros
          </button>
        </nav>
      </div>
    </header>
  );
}
