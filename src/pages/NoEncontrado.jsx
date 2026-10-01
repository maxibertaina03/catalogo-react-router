import { Link } from 'react-router-dom'
import { Button, Result } from 'antd'

function NoEncontrado() {
  return (
    <Result
      status="404"
      title="404 - No encontrado"
      subTitle="La página que buscás no existe."
      extra={<Link to="/"><Button type="primary">Ir al inicio</Button></Link>}
    />
  )
}

export default NoEncontrado
