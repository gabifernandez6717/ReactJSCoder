import productos from "../../../components/main";

const ProductosPorCategoria = ({ categoriaSeleccionada }) => {
  const categoriasDisponibles = [...new Set(productos.map((producto) => producto.categoria))];

  const filtrarProductosPorCategoria = (categoria) => {
    categoriaSeleccionada(categoria);
  };

  const productosFiltrados =
    categoriaSeleccionada === null
      ? productos
      : productos.filter((producto) => producto.categoria === categoriaSeleccionada);

return (
    <div>
    <h1>Productos por Categoría</h1>
    <div>
        <p>Selecciona una categoría:</p>
        <ul>
        <li>
            <button onClick={() => filtrarProductosPorCategoria(null)}>Todos</button>
        </li>
        {categoriasDisponibles.map((categoria) => (
            <li key={categoria}>
            <button onClick={() => filtrarProductosPorCategoria(categoria)}>{categoria}</button>
            </li>
        ))}
        </ul>
    </div>
    <div>
        {productosFiltrados.map((producto) => (
        <div key={producto.nombre}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default ProductosPorCategoria;
