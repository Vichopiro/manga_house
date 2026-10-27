import { useState } from 'react';
import ProductList from '../components/ProductList.jsx';
import { getProductos } from '../data/db.js';

export default function Productos({ onAdd }) {
  const [busqueda, setBusqueda] = useState('');
  const filtrados = getProductos().filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-3">Productos</h2>
      <input
        className="form-control mb-4"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ProductList productos={filtrados} onAdd={onAdd} />
    </div>
  );
}
