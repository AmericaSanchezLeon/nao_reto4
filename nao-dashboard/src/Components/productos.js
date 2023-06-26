const Productos = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10, stock: 5 },
    { id: 2, name: 'Product 2', price: 20, stock: 8 },
    { id: 3, name: 'Product 3', price: 30, stock: 3 },
  ];

  return (
    <div className="w-full  m-8 p-6"> 
        <h2 class="p-2 underline decoration-violet-900	font-semibold text-lg">Productos</h2>
    <table className="bg-white shadow-lg rounded-lg w-11/12">
      <thead>
        <tr>
          <th className="py-2 px-4 bg-indigo-500 text-white">ID</th>
          <th className="py-2 px-4 bg-indigo-500 text-white">Name</th>
          <th className="py-2 px-4 bg-indigo-500 text-white">Price</th>
          <th className="py-2 px-4 bg-indigo-500 text-white">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="py-2 px-4">{product.id}</td>
            <td className="py-2 px-4">{product.name}</td>
            <td className="py-2 px-4">{product.price}</td>
            <td className="py-2 px-4">{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Productos;