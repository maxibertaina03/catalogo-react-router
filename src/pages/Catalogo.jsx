import { Link } from 'react-router-dom'
import { Card, Col, Row, Typography } from 'antd'
import peliculas from '../data'

function Catalogo() {
  return (
    <div>
      <Typography.Title level={2}>Catálogo</Typography.Title>
      <Row gutter={[16, 16]}>
        {peliculas.map((peli) => (
          <Col key={peli.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={peli.nombre} src={peli.imagen} style={{ height: 380, objectFit: 'cover' }} />}
              actions={[<Link key="detalle" to={`/catalogo/${peli.id}`}>Ver detalle</Link>]}
            >
              <Card.Meta title={peli.nombre} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Catalogo
