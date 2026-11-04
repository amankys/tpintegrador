import { useState } from 'react';

export default function Reservas() {
  // Las 4 habitaciones del hotel en Salta
  const habitaciones = [
    {
      id: 1,
      nombre: 'Habitación Estándar',
      capacidad: '1 persona',
      precio: 42000,
      descripcion: 'Espacio funcional con cama individual, escritorio de trabajo, baño privado y vista al patio interno.',
      imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      nombre: 'Habitación Doble Superior',
      capacidad: '2 personas',
      precio: 65000,
      descripcion: 'Cama Queen, balcón con vista abierta a los cerros, aire acondicionado frío-calor y frigobar.',
      imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      nombre: 'Suite Colonial',
      capacidad: '2 personas',
      precio: 98000,
      descripcion: 'Cama King, detalles en madera noble y piedra autóctona, hidromasaje y cafetera de cortesía.',
      imagen: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      nombre: 'Suite Familiar',
      capacidad: '4 personas',
      precio: 125000,
      descripcion: 'Dos dormitorios independientes, estar integrado y doble baño privado para grupos o familias.',
      imagen: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Estados para la selección y el formulario
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const [nombreHuesped, setNombreHuesped] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');

  const hoy = new Date().toISOString().split('T')[0];

  const manejarReserva = (e) => {
    e.preventDefault();

    if (!habitacionSeleccionada) {
      alert('Por favor seleccione una habitación antes de confirmar la reserva.');
      return;
    }

    if (!fechaIngreso || !fechaSalida) {
      alert('Por favor complete las fechas de ingreso y salida.');
      return;
    }

    if (fechaSalida <= fechaIngreso) {
      alert('La fecha de salida debe ser posterior a la fecha de ingreso.');
      return;
    }

    const fIngreso = new Date(fechaIngreso);
    const fSalida = new Date(fechaSalida);
    const diferenciaMs = fSalida - fIngreso;
    const noches = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
    const totalEstimado = noches * habitacionSeleccionada.precio;

    // Alerta de confirmacion sobria y formal
    alert(
      `Reserva confirmada con éxito.\n\n` +
      `Hotel Salta\n` +
      `Huésped: ${nombreHuesped || 'No especificado'}\n` +
      `Habitación: ${habitacionSeleccionada.nombre}\n` +
      `Check-in: ${fechaIngreso}\n` +
      `Check-out: ${fechaSalida}\n` +
      `Noches: ${noches}\n` +
      `Total estimado: $${totalEstimado.toLocaleString('es-AR')}\n\n` +
      `Gracias por su reserva.`
    );

    // Reiniciar campos
    setNombreHuesped('');
    setFechaIngreso('');
    setFechaSalida('');
    setHabitacionSeleccionada(null);
  };

  return (
    <div className="reservas-seccion">
      <div className="seccion-cabecera">
        <h2>Habitaciones y Reservas</h2>
        <p>Seleccione una habitación y las fechas de su visita a Salta</p>
      </div>

      {/* Grid de las 4 habitaciones */}
      <div className="habitaciones-grid">
        {habitaciones.map((hab) => {
          const seleccionada = habitacionSeleccionada?.id === hab.id;
          return (
            <div 
              key={hab.id} 
              className={`habitacion-card ${seleccionada ? 'seleccionada' : ''}`}
            >
              <img src={hab.imagen} alt={hab.nombre} className="habitacion-img" />
              <div className="habitacion-info">
                <h3>{hab.nombre}</h3>
                <span className="capacidad">Capacidad: {hab.capacidad}</span>
                <p className="descripcion">{hab.descripcion}</p>
                <div className="precio">
                  ${hab.precio.toLocaleString('es-AR')} <span className="por-noche">por noche</span>
                </div>
                <button
                  type="button"
                  className={`btn-seleccionar ${seleccionada ? 'btn-activo' : ''}`}
                  onClick={() => setHabitacionSeleccionada(hab)}
                >
                  {seleccionada ? 'Habitación seleccionada' : 'Seleccionar'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Formulario de reserva minimalista */}
      <section className="formulario-contenedor">
        <h3>Datos de la estadía</h3>
        
        {habitacionSeleccionada ? (
          <div className="resumen-seleccion">
            Habitación elegida: <strong>{habitacionSeleccionada.nombre}</strong> (${habitacionSeleccionada.precio.toLocaleString('es-AR')} / noche)
          </div>
        ) : (
          <div className="aviso-seleccion">
            Seleccione una habitación arriba para continuar con la reserva.
          </div>
        )}

        <form onSubmit={manejarReserva} className="formulario-reserva">
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre y apellido"
              value={nombreHuesped}
              onChange={(e) => setNombreHuesped(e.target.value)}
              required
            />
          </div>

          <div className="fechas-fila">
            <div className="campo">
              <label htmlFor="fechaIngreso">Fecha de ingreso</label>
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
              <label htmlFor="fechaSalida">Fecha de salida</label>
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
            Confirmar reserva
          </button>
        </form>
      </section>
    </div>
  );
}
