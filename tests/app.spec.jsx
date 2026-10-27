import ProductList from '../src/components/ProductList.jsx';
import ProductCard from '../src/components/ProductCard.jsx';
import LoginForm from '../src/components/LoginForm.jsx';
import {
  getProductos,
  createProducto,
  deleteProducto,
  resetProductos,
} from '../src/data/db.js';
import { renderizar, escribir, click } from './helpers.jsx';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Manga House - pruebas unitarias frontend', () => {
  let vista;

  afterEach(() => {
    if (vista) vista.limpiar();
    vista = null;
    resetProductos();
  });

  // 1. Renderizado correcto
  it('ProductList renderiza todos los productos del conjunto de datos', () => {
    const productos = getProductos();
    vista = renderizar(<ProductList productos={productos} onAdd={() => {}} />);
    const tarjetas = vista.contenedor.querySelectorAll('.card');
    expect(tarjetas.length).toBe(productos.length);
  });

  // 2. Renderizado condicional
  it('LoginForm muestra el error solo cuando hay un error', () => {
    vista = renderizar(<LoginForm onLogin={() => {}} />);
    expect(vista.contenedor.querySelector('[role="alert"]')).toBeNull();

    click(vista.contenedor.querySelector('button[type="submit"]'));
    const alerta = vista.contenedor.querySelector('[role="alert"]');
    expect(alerta).not.toBeNull();
    expect(alerta.textContent).toContain('correo');
  });

  // 3. Props + evento con mock
  it('ProductCard recibe props y ejecuta onAdd al hacer clic', () => {
    const producto = { id: 99, nombre: 'Manga Test', categoria: 'Manga', precio: 1000, stock: 1 };
    const onAdd = jasmine.createSpy('onAdd');
    vista = renderizar(<ProductCard producto={producto} onAdd={onAdd} />);

    expect(vista.contenedor.querySelector('.card-title').textContent).toBe('Manga Test');
    click(vista.contenedor.querySelector('button'));
    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(producto);
  });

  // 4. Estado
  it('LoginForm actualiza su estado cuando el usuario escribe', () => {
    vista = renderizar(<LoginForm onLogin={() => {}} />);
    const email = vista.contenedor.querySelector('#email');
    escribir(email, 'vicente@duocuc.cl');
    expect(email.value).toBe('vicente@duocuc.cl');
  });

  // 5. Lógica CRUD del archivo de datos
  it('db.js crea y elimina productos correctamente', () => {
    const antes = getProductos().length;
    const nuevo = createProducto({ nombre: 'Manga Nuevo', categoria: 'Manga', precio: 5000, stock: 10 });
    expect(getProductos().length).toBe(antes + 1);

    expect(deleteProducto(nuevo.id)).toBeTrue();
    expect(getProductos().length).toBe(antes);
  });
});
