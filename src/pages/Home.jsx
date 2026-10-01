import { Link } from 'react-router-dom'
import { Button, Typography } from 'antd'

const { Title, Paragraph } = Typography

function Home() {
  return (
    <div>
      <Title>Catálogo de Películas</Title>
      <Paragraph>
        Bienvenido a nuestro catálogo. Acá vas a encontrar una selección de películas
        clásicas y argentinas, con su descripción y detalle.
      </Paragraph>
      <Link to="/catalogo">
        <Button type="primary">Ver catálogo</Button>
      </Link>
    </div>
  )
}

export default Home
