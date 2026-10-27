import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
import Carrito from './pages/Carrito.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';

export default function App() {
  const [cantidad, setCantidad] = useState(0);

  return (
    <HashRouter>
      <NavBar cantidadCarrito={cantidad} />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos onAdd={() => setCantidad((c) => c + 1)} />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
