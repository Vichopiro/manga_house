import { Link } from 'react-router-dom';

export default function NavBar({ cantidadCarrito }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Manga House</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
          </ul>
          <Link className="btn btn-outline-light me-2" to="/login">Iniciar sesión</Link>
          <Link className="btn btn-success" to="/carrito">
            Carrito ({cantidadCarrito})
          </Link>
        </div>
      </div>
    </nav>
  );
}
