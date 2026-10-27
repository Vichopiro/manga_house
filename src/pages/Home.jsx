import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center py-5">
      <h1 className="display-5">Manga House</h1>
      <p className="lead">Mangas, figuras y accesorios para coleccionistas.</p>
      <Link to="/productos" className="btn btn-dark btn-lg">Ver productos</Link>
    </div>
  );
}
