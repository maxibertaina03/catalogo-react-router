import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, Result, Typography } from 'antd'
import peliculas from '../data'

function Detalle() {
  const { id } = useParams()
  const navigate = useNavigate()

  const peli = peliculas.find((p) => p.id === Number(id))

  if (!peli) {
    return (
      <Result
        status="warning"
        title="Elemento no encontrado"
        subTitle={`No existe ninguna película con el id ${id}.`}
        extra={<Button type="primary" onClick={() => navigate('/catalogo')}>Volver al catálogo</Button>}
      />
    )
  }

  return (
    <Card style={{ maxWidth: 400, margin: '0 auto' }} cover={<img alt={peli.nombre} src={peli.imagen} />}>
      <Typography.Title level={2}>{peli.nombre}</Typography.Title>
      <Typography.Paragraph>{peli.descripcion}</Typography.Paragraph>
      <Button type="primary" onClick={() => navigate('/catalogo')}>Volver</Button>
    </Card>
  )
}

export default Detalle
