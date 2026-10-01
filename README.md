# Catálogo de Películas - React Router

**Alumno:** Maximo Bertaina

Catálogo simple de películas hecho con React (Vite), react-router-dom y Ant Design.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Rutas implementadas

| Ruta | Descripción |
| --- | --- |
| `/` | Home con una presentación del catálogo |
| `/catalogo` | Lista de todas las películas, cada una con link a su detalle |
| `/catalogo/:id` | Detalle de la película (usa `useParams`). Si el id no existe muestra "Elemento no encontrado". Tiene botón "Volver" con `useNavigate` |
| `/nosotros` | Página estática con info del proyecto |
| `*` | Página 404 - No encontrado |
