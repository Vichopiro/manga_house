export default function CartTable({ items }) {
  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.nombre}</td>
              <td>${i.precio.toLocaleString('es-CL')}</td>
              <td>{i.cantidad}</td>
              <td>${(i.precio * i.cantidad).toLocaleString('es-CL')}</td>
              <td><button className="btn btn-sm btn-danger">Eliminar</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3" className="text-end">Total</th>
            <th>${total.toLocaleString('es-CL')}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
