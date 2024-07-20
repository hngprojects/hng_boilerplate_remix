import React, { useState } from 'react';
import ProductDetails from '../components/ProductDetails';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  dateAdded: string;
  stock: number;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'P001',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Breakfast',
    dateAdded: '2024-06-06, 12:34:56',
    stock: 10,
    price: 19.00,
    description: 'A fusion of ripe bananas, pure honey, and succulent raspberries with our bread. Crafted to perfection smiles.',
  },
  {
    id: 2,
    name: 'P002',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Appetizers',
    dateAdded: '2024-06-06, 12:34:56',
    stock: 20,
    price: 29.00,
    description: 'A fusion of ripe bananas, pure honey, and succulent raspberries with our bread. Crafted to perfection smiles.',
  },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (productId: number) => {
    const product = products.find(p => p.id === productId) || null;
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };
  const handleEdit = (productId: string) => {
    console.log(`Edit product with ID: ${productId}`);
    // Implement the Edit functionality here
  };

  const handleDelete = (productId: string) => {
    console.log(`Delete product with ID: ${productId}`);
    // Implement the Delete functionality here
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id}>
            <button onClick={() => handleProductClick(product.id)} className="text-blue-500 hover:underline">
              {product.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedProduct && <ProductDetails 
      product={selectedProduct} 
      onClose={handleClose} onEdit={handleEdit}
      onDelete={handleDelete}/>}
    </div>
  );
};

export default ProductsPage;
