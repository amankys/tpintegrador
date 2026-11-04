export default function Header({ cambiarSeccion, seccionActual }) {
  return (
    <header className="header">
      <div className="header-contenedor">
        <div className="logo" onClick={() => cambiarSeccion('inicio')}>
          <span className="logo-titulo">HOTEL SALTA</span>
          <span className="logo-subtitulo">VALLES CALCHAQUÍES</span>
        </div>

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
