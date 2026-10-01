import { NavLink } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'

const { Header } = Layout

const estiloLink = ({ isActive }) => ({
  color: isActive ? '#1677ff' : 'white',
  fontWeight: isActive ? 'bold' : 'normal',
})

function Navbar() {
  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, display: 'flex', alignItems: 'center', gap: 32 }}>
      <Typography.Title level={4} style={{ color: 'white', margin: 0 }}>
        🎬 Pelis
      </Typography.Title>
      <Space size="large">
        <NavLink to="/" end style={estiloLink}>Home</NavLink>
        <NavLink to="/catalogo" style={estiloLink}>Catálogo</NavLink>
        <NavLink to="/nosotros" style={estiloLink}>Nosotros</NavLink>
      </Space>
    </Header>
  )
}

export default Navbar
