export default function AcercaDeNosotros() {
  return (
    <div className="nosotros-seccion">
      <h2>Acerca de Nosotros</h2>
      
      <div className="nosotros-contenido">
        <div className="nosotros-texto">
          <h3>Nuestra Historia</h3>
          <p>
            Hotel Paraíso nació en 2012 como un emprendimiento familiar con una simple
            pero clara misión: brindar a cada huésped una experiencia cálida, cómoda e
            inolvidable. A lo largo de los años fuimos modernizando nuestras instalaciones,
            manteniendo siempre la calidez humana que nos caracteriza.
          </p>

          <h3>Nuestros Valores</h3>
          <ul>
            <li><strong>Atención personalizada:</strong> Estamos en cada detalle para que no tengas que preocuparte por nada.</li>
            <li><strong>Confort y limpieza:</strong> Habitaciones impecables diseñadas para el mejor descanso.</li>
            <li><strong>Sustentabilidad:</strong> Comprometidos con el cuidado del medio ambiente y el uso responsable de recursos.</li>
          </ul>

          <div className="contacto-info">
            <h4>Contacto & Ubicación</h4>
            <p>📍 Av. del Libertador 2450, Ciudad de Buenos Aires</p>
            <p>📞 (+54 11) 4567-8900</p>
            <p>✉️ reservas@hotelparaiso.com.ar</p>
          </div>
        </div>

        <div className="nosotros-imagen">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
            alt="Fachada del Hotel Paraíso" 
          />
        </div>
      </div>
    </div>
  );
}
