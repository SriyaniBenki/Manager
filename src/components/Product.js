import React, { useState } from 'react';
import './Product.css';



const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', stock: 10 },
    { id: 2, name: 'Product 2', category: 'Category 2', stock: 20 },
  ]);
  const [productFormVisible, setProductFormVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', stock: 0 });

  const handleAddProduct = () => {
    const newId = products.length + 1;
    setProducts([...products, { ...newProduct, id: newId }]);
    setNewProduct({ name: '', category: '', stock: 0 });
    setProductFormVisible(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h2>Product Management</h2>
      <button onClick={() => setProductFormVisible(!productFormVisible)}>
        {productFormVisible ? 'Cancel' : 'Add Product'}
      </button>

      {productFormVisible && (
        <div>
          <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
          <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
          <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })} />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
