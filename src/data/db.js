const productosIniciales = [
  { id: 1, imagen: '/img/onepiece.webp', nombre: 'One Piece Vol. 1', categoria: 'Manga', precio: 9990, stock: 25 },
  { id: 2, imagen: '/img/naruto.jpg', nombre: 'Naruto Vol. 1', categoria: 'Manga', precio: 8990, stock: 18 },
  { id: 3, imagen: '/img/berserk.webp', nombre: 'Berserk Deluxe Vol. 1', categoria: 'Manga', precio: 24990, stock: 7 },
  { id: 4, imagen: '/img/goku-ui.jpg', nombre: 'Figura Goku Ultra Instinto', categoria: 'Figuras', precio: 39990, stock: 5 },
  { id: 5, imagen: '/img/luffy-gear5.webp', nombre: 'Figura Luffy Gear 5', categoria: 'Figuras', precio: 44990, stock: 3 },
  { id: 6, imagen: '/img/aot-poster.webp', nombre: 'Póster Attack on Titan', categoria: 'Accesorios', precio: 5990, stock: 40 },
];

let productos = productosIniciales.map((p) => ({ ...p }));

export function resetProductos() {
  productos = productosIniciales.map((p) => ({ ...p }));
}

export function getProductos() {
  return productos.map((p) => ({ ...p }));
}

export function getProductoById(id) {
  const p = productos.find((x) => x.id === id);
  return p ? { ...p } : null;
}

export function createProducto(data) {
  const id = productos.length ? Math.max(...productos.map((p) => p.id)) + 1 : 1;
  const nuevo = { id, ...data };
  productos.push(nuevo);
  return { ...nuevo };
}

export function updateProducto(id, cambios) {
  const i = productos.findIndex((p) => p.id === id);
  if (i === -1) return null;
  productos[i] = { ...productos[i], ...cambios, id };
  return { ...productos[i] };
}

export function deleteProducto(id) {
  const antes = productos.length;
  productos = productos.filter((p) => p.id !== id);
  return productos.length < antes;
}
