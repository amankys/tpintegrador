export default function Inicio({ cambiarSeccion }) {
  return (
    <div className="inicio">
      {/* Banner principal */}
      <section className="hero">
        <div className="hero-contenido">
          <h2>Tu descanso soñado comienza acá</h2>
          <p>Disfrutá del confort, la tranquilidad y la mejor atención en Hotel Paraíso.</p>
          <button className="btn-primario" onClick={() => cambiarSeccion('reservas')}>
            Reservar ahora
          </button>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="servicios">
        <h3>Nuestros Servicios</h3>
        <div className="servicios-grid">
          <div className="servicio-card">
            <span className="servicio-icono">☕</span>
            <h4>Desayuno Buffet</h4>
            <p>Pastelería artesanal, frutas de estación y opciones celíacas todos los días.</p>
          </div>
          <div className="servicio-card">
            <span className="servicio-icono">🏊‍♂️</span>
            <h4>Piscina & Spa</h4>
            <p>Piscina climatizada con hidromasaje y sauna para desconectar al máximo.</p>
          </div>
          <div className="servicio-card">
            <span className="servicio-icono">📶</span>
            <h4>Wi-Fi de Alta Velocidad</h4>
            <p>Conexión estable y rápida en todas las habitaciones y áreas comunes.</p>
          </div>
          <div className="servicio-card">
            <span className="servicio-icono">🚗</span>
            <h4>Estacionamiento</h4>
            <p>Cochera privada y monitoreada las 24 hs para tu total tranquilidad.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
