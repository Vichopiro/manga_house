import { useState } from 'react';
import LoginForm from '../components/LoginForm.jsx';

export default function Login() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-4">
        {usuario ? (
          <div className="alert alert-success">Bienvenido, {usuario.email}</div>
        ) : (
          <LoginForm onLogin={setUsuario} />
        )}
      </div>
    </div>
  );
}
