import CartTable from '../components/CartTable.jsx';

const itemsEjemplo = [
  { id: 1, nombre: 'One Piece Vol. 1', precio: 9990, cantidad: 2 },
  { id: 4, nombre: 'Figura Goku Ultra Instinto', precio: 39990, cantidad: 1 },
  { id: 6, nombre: 'Póster Attack on Titan', precio: 5990, cantidad: 3 },
];

export default function Carrito() {
  return (
    <div>
      <h2 className="mb-3">Carrito de compras</h2>
      <CartTable items={itemsEjemplo} />
      <div className="text-end">
        <button className="btn btn-outline-secondary me-2">Limpiar</button>
        <button className="btn btn-success">Comprar ahora</button>
      </div>
    </div>
  );
}
