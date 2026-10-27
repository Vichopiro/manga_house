import { act } from 'react';
import { createRoot } from 'react-dom/client';

export function renderizar(elemento) {
  const contenedor = document.createElement('div');
  document.body.appendChild(contenedor);
  const root = createRoot(contenedor);
  act(() => root.render(elemento));
  return {
    contenedor,
    limpiar() {
      act(() => root.unmount());
      contenedor.remove();
    },
  };
}

export function escribir(input, valor) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  ).set;
  act(() => {
    setter.call(input, valor);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

export function click(elemento) {
  act(() => {
    elemento.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}
