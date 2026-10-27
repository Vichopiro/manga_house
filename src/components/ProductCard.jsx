export default function ProductCard({ producto, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      {producto.imagen ? (
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top product-img"
        />
      ) : (
        <div className="placeholder-img">{producto.categoria}</div>
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="text-muted mb-1">{producto.categoria}</p>
        <p className="fw-bold mb-3">${producto.precio.toLocaleString('es-CL')}</p>
        <button
          className="btn btn-dark mt-auto"
          onClick={() => onAdd(producto)}
        >
          Añadir
        </button>
      </div>
    </div>
  );
}
