import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import './styles/global.css';
import './pages/Home.css';
import './pages/Sobre.css';
import './pages/Servicos.css';
import './pages/Produtos.css';
import './pages/Contato.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/sobre"    element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato"  element={<Contato />} />
          <Route path="*"         element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
