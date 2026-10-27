import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Ingresa un correo válido');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    setError('');
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body shadow-sm">
      <h4 className="mb-3">Iniciar sesión</h4>
      {error && (
        <div role="alert" className="alert alert-danger">
          {error}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo</label>
        <input
          id="email"
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          id="password"
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Entrar</button>
    </form>
  );
}
