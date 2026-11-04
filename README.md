# Trabajo Práctico Integrador - Hotel Paraíso

Página web de reservas de hotel desarrollada con **React** y **Vite**, organizada bajo el concepto de componentes.

## 📁 Estructura de Componentes en `src`
Dentro de la carpeta `src/`, el proyecto cuenta con los componentes solicitados:
- **`Header.jsx`**: Barra de navegación superior para moverse entre las distintas secciones del hotel.
- **`Inicio.jsx`**: Portada de bienvenida con servicios destacados (desayuno buffet, spa, wifi, estacionamiento) y llamada a la acción.
- **`AcercaDeNosotros.jsx`** (y `Acerca de nosotros.jsx`): Información sobre la historia del hotel, valores y vías de contacto.
- **`Reservas.jsx`**: Catálogo con las 4 habitaciones del hotel, selección de estadía con calendario de rango de fechas (check-in y check-out) y confirmación mediante `alert`.

---

## 🚀 Cómo ejecutar el proyecto en tu máquina

1. Abrir la terminal en la carpeta del proyecto (`C:\Users\amanc\Desktop\tpintegrador`).
2. Si es la primera vez o falta instalar paquetes:
   ```bash
   npm install
   ```
3. Iniciar el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador el enlace que aparece en la consola (usualmente `http://localhost:5173`).

---

## 🌐 Cómo subirlo a GitHub y deployar en Vercel

### 1. Subir a GitHub
1. Entrá a [GitHub](https://github.com) y creá un nuevo repositorio (por ejemplo llamado `tpintegrador-hotel`).
2. En la terminal de VS Code en la carpeta del proyecto, vinculá el repositorio y subí el código ejecutando:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/tpintegrador-hotel.git
   git branch -M main
   git push -u origin main
   ```
   *(reemplazá `TU_USUARIO` por tu usuario de GitHub)*.

### 2. Deployar en Vercel
1. Entrá a [Vercel](https://vercel.com) e iniciá sesión con tu cuenta de GitHub.
2. Hacé click en **"Add New..."** -> **"Project"**.
3. Seleccioná el repositorio `tpintegrador-hotel`.
4. Vercel detectará automáticamente que es un proyecto **Vite / React**.
5. Hacé click en **"Deploy"**.
6. En menos de un minuto tendrás tu link público funcionando para compartir en la entrega del TP.
