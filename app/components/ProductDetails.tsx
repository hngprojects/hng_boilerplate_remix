// app/components/ProductDetails.tsx
import React from 'react';

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

interface ProductDetailsProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-6 border rounded-md shadow-lg shadow-[#0A39B01F] bg-white border-[#CBD5E1] w-[340px] md:w-[403px] h-[661px]">
      <header className="flex gap-x-[237px] items-center mb-4 h-6">
        <h5 className="text-xl font-semibold text-[#0A0A0A]">{product.name}</h5>
        <button onClick={onClose} className="text-[#0A0A0A] hover:text-[#0A0A0A] text-2xl">&times;</button>
      </header>
      <div className="">
      <div className="pb-4 border-b border-[#E4E4E7] mb-4">
        <img src={product.imageUrl} alt={product.name} className="w-[356px] h-[153px] rounded-md" />
      </div>
      <ul className="mb-4">
        <li><strong>Product ID:</strong> {product.id}</li>
        <li><strong>Category:</strong> {product.category}</li>
        <li><strong>Date Added:</strong> {product.dateAdded}</li>
        <li><strong>Stock:</strong> {product.stock}</li>
        <li><strong>Price:</strong> ${product.price}</li>
      </ul>
      <p className="mb-4">{product.description}</p>
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default ProductDetails;
