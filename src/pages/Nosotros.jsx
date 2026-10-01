import { Typography } from 'antd'

const { Title, Paragraph } = Typography

function Nosotros() {
  return (
    <div>
      <Title level={2}>Nosotros</Title>
      <Paragraph>
        Este proyecto es una actividad práctica para aprender a usar React Router.
        Simula un catálogo de películas con navegación entre páginas, rutas dinámicas
        y una página de error 404.
      </Paragraph>
      <Paragraph>
        Está hecho con React, Vite, react-router-dom y Ant Design.
      </Paragraph>
    </div>
  )
}

export default Nosotros
