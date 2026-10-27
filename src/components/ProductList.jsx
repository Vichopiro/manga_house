import ProductCard from './ProductCard.jsx';

export default function ProductList({ productos, onAdd }) {
  if (productos.length === 0) {
    return <p className="text-center text-muted">No hay productos.</p>;
  }
  return (
    <div className="row g-3">
      {productos.map((p) => (
        <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
          <ProductCard producto={p} onAdd={onAdd} />
        </div>
      ))}
    </div>
  );
}
