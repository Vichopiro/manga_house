import AdminTable from '../components/AdminTable.jsx';
import { getProductos } from '../data/db.js';

export default function Admin() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Panel de administración</h2>
        <button className="btn btn-primary">Nuevo producto</button>
      </div>
      <AdminTable productos={getProductos()} />
    </div>
  );
}
