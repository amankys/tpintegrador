import { useState } from 'react';

export default function Reservas() {
  // Lista de las 4 habitaciones del hotel
  const habitaciones = [
    {
      id: 1,
      nombre: 'Habitación Individual Estándar',
      capacidad: '1 persona',
      precio: 45000,
      descripcion: 'Ideal para viajes de trabajo o estadías cortas. Cuenta con cama individual, escritorio, baño privado y vista interna.',
      imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      nombre: 'Habitación Doble Clásica',
      capacidad: '2 personas',
      precio: 68000,
      descripcion: 'Perfecta para parejas. Equipada con cama Queen, balcón con vista a la ciudad, aire acondicionado y smart TV.',
      imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      nombre: 'Suite Ejecutiva',
      capacidad: '2 personas',
      precio: 105000,
      descripcion: 'Máximo confort y elegancia. Cama King, hidromasaje, frigobar libre, cafetera espresso y batas de baño.',
      imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      nombre: 'Suite Familiar Deluxe',
      capacidad: '4 personas',
      precio: 135000,
      descripcion: 'Espacio y comodidad para toda la familia. Dos ambientes separados, dos baños completos y living con sofá cama.',
      imagen: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Estados del formulario de reserva
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const [nombreHuesped, setNombreHuesped] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');

  // Fecha mínima para el check-in (hoy)
  const hoy = new Date().toISOString().split('T')[0];

  const manejarReserva = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!habitacionSeleccionada) {
      alert('Por favor, seleccioná una habitación antes de continuar.');
      return;
    }

    if (!fechaIngreso || !fechaSalida) {
      alert('Por favor, seleccioná las fechas de ingreso y salida en el calendario.');
      return;
    }

    if (fechaSalida <= fechaIngreso) {
      alert('La fecha de salida debe ser posterior a la fecha de ingreso.');
      return;
    }

    // Cálculo de cantidad de noches
    const fIngreso = new Date(fechaIngreso);
    const fSalida = new Date(fechaSalida);
    const diferenciaMs = fSalida - fIngreso;
    const noches = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
    const totalEstimado = noches * habitacionSeleccionada.precio;

    // Alerta de confirmación según lo pedido en la consigna
    alert(
      `¡Reserva confirmada con éxito!\n\n` +
      `🏨 Hotel Paraíso\n` +
      `👤 Huésped: ${nombreHuesped ? nombreHuesped : 'No especificado'}\n` +
      `🛏️ Habitación: ${habitacionSeleccionada.nombre}\n` +
      `📅 Check-in: ${fechaIngreso}\n` +
      `📅 Check-out: ${fechaSalida}\n` +
      `🌙 Total de noches: ${noches}\n` +
      `💵 Total estimado: $${totalEstimado.toLocaleString('es-AR')}\n\n` +
      `¡Muchas gracias por elegirnos!`
    );

    // Limpiamos los campos luego de confirmar
    setNombreHuesped('');
    setFechaIngreso('');
    setFechaSalida('');
    setHabitacionSeleccionada(null);
  };

  return (
    <div className="reservas-seccion">
      <h2>Reservá tu Habitación</h2>
      <p className="subtitulo">Elegí la habitación que más te guste y seleccioná tus fechas de estadía.</p>

      {/* Listado de las 4 habitaciones */}
      <div className="habitaciones-grid">
        {habitaciones.map((hab) => {
          const estaSeleccionada = habitacionSeleccionada?.id === hab.id;
          return (
            <div 
              key={hab.id} 
              className={`habitacion-card ${estaSeleccionada ? 'seleccionada' : ''}`}
            >
              <img src={hab.imagen} alt={hab.nombre} className="habitacion-img" />
              <div className="habitacion-info">
                <h3>{hab.nombre}</h3>
                <span className="capacidad">👥 Capacidad: {hab.capacidad}</span>
                <p className="descripcion">{hab.descripcion}</p>
                <div className="precio">
                  ${hab.precio.toLocaleString('es-AR')} <span>/ noche</span>
                </div>
                <button
                  type="button"
                  className={`btn-seleccionar ${estaSeleccionada ? 'btn-activo' : ''}`}
                  onClick={() => setHabitacionSeleccionada(hab)}
                >
                  {estaSeleccionada ? '✓ Habitación elegida' : 'Elegir esta habitación'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Formulario de reserva con rango de fechas en calendario */}
      <section className="formulario-contenedor">
        <h3>Completá los datos de tu estadía</h3>
        
        {habitacionSeleccionada ? (
          <div className="resumen-seleccion">
            Habitación seleccionada: <strong>{habitacionSeleccionada.nombre}</strong> (${habitacionSeleccionada.precio.toLocaleString('es-AR')} / noche)
          </div>
        ) : (
          <div className="aviso-seleccion">
            ⚠️ Hacé click en <em>"Elegir esta habitación"</em> arriba para continuar.
          </div>
        )}

        <form onSubmit={manejarReserva} className="formulario-reserva">
          <div className="campo">
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <input
              type="text"
              id="nombre"
              placeholder="Ej: Juan Pérez"
              value={nombreHuesped}
              onChange={(e) => setNombreHuesped(e.target.value)}
              required
            />
          </div>

          <div className="fechas-fila">
            <div className="campo">
              <label htmlFor="fechaIngreso">Fecha de Ingreso (Check-in):</label>
              <input
                type="date"
                id="fechaIngreso"
                min={hoy}
                value={fechaIngreso}
                onChange={(e) => setFechaIngreso(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="fechaSalida">Fecha de Salida (Check-out):</label>
              <input
                type="date"
                id="fechaSalida"
                min={fechaIngreso || hoy}
                value={fechaSalida}
                onChange={(e) => setFechaSalida(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-confirmar">
            Confirmar Reserva
          </button>
        </form>
      </section>
    </div>
  );
}
