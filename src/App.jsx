import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Detalle from './pages/Detalle'
import Nosotros from './pages/Nosotros'
import NoEncontrado from './pages/NoEncontrado'

const { Content } = Layout

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<Detalle />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
