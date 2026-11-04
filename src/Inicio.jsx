export default function Inicio({ cambiarSeccion }) {
  return (
    <div className="inicio">
      {/* Portada minimalista */}
      <section className="hero">
        <div className="hero-contenido">
          <span className="hero-badge">Salta, Argentina</span>
          <h2>Hospitalidad y serenidad en el norte argentino</h2>
          <p>Un espacio pensado para descansar rodeado de la tranquilidad de los cerros salteños.</p>
          <button className="btn-principal" onClick={() => cambiarSeccion('reservas')}>
            Ver habitaciones y reservar
          </button>
        </div>
      </section>

      {/* Servicios con iconos vectoriales de linea minimalistas */}
      <section className="servicios">
        <div className="seccion-cabecera">
          <h3>Servicios incluidos</h3>
          <p>Comodidades diseñadas para su estancia</p>
        </div>

        <div className="servicios-grid">
          <div className="servicio-card">
            <svg className="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <h4>Desayuno regional</h4>
            <p>Café de especialidad, repostería artesanal salteña y frutas frescas.</p>
          </div>

          <div className="servicio-card">
            <svg className="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12h20" />
              <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
              <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
              <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
            <h4>Piscina al aire libre</h4>
            <p>Sector de relax con reposeras y vista panorámica a la precordillera.</p>
          </div>

          <div className="servicio-card">
            <svg className="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1" fill="currentColor" />
            </svg>
            <h4>Conectividad Wi-Fi</h4>
            <p>Red de fibra óptica de alta velocidad en todo el establecimiento.</p>
          </div>

          <div className="servicio-card">
            <svg className="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <h4>Estacionamiento cubierto</h4>
            <p>Cochera privada dentro del predio con acceso controlado.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
