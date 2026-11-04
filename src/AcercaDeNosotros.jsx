export default function AcercaDeNosotros() {
  return (
    <div className="nosotros-seccion">
      <div className="seccion-cabecera">
        <h2>Acerca de nosotros</h2>
        <p>Tradición y descanso en el corazón de Salta</p>
      </div>

      <div className="nosotros-contenido">
        <div className="nosotros-texto">
          <h3>Nuestra propuesta</h3>
          <p>
            Hotel Salta fue concebido como un refugio de calma para quienes visitan el
            noroeste argentino. Ubicado a pocas cuadras de la plaza principal y con fácil
            acceso a los Valles Calchaquíes, combinamos la arquitectura tradicional con
            el confort contemporáneo.
          </p>

          <h3>Compromiso con el huésped</h3>
          <p>
            Priorizamos la atención cercana y respetuosa, cuidando cada detalle de su estadía
            para que disfrute plenamente de los paisajes, la gastronomía y la cultura de nuestra provincia.
          </p>

          <div className="contacto-caja">
            <h4>Ubicación y contacto</h4>
            <p><strong>Dirección:</strong> Caseros 450, Centro Histórico, Salta Capital</p>
            <p><strong>Teléfono:</strong> +54 (387) 431-2000</p>
            <p><strong>Email:</strong> contacto@hotelsalta.com.ar</p>
          </div>
        </div>

        <div className="nosotros-imagen">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
            alt="Instalaciones de Hotel Salta" 
          />
        </div>
      </div>
    </div>
  );
}
