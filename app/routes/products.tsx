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
    name: 'Product 1',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Category 1',
    dateAdded: '2024-07-01',
    stock: 10,
    price: 29.99,
    description: 'Description for Product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Category 2',
    dateAdded: '2024-07-02',
    stock: 20,
    price: 39.99,
    description: 'Description for Product 2.',
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

      {selectedProduct && <ProductDetails product={selectedProduct} onClose={handleClose} />}
    </div>
  );
};

export default ProductsPage;
