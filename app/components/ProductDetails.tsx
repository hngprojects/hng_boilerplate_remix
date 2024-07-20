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
      <header className="flex justify-between items-center mb-4 h-6">
        <h5 className="text-xl font-semibold text-[#0A0A0A]">{product.name}</h5>
        <button onClick={onClose} className="text-[#0A0A0A] hover:text-[#0A0A0A] text-2xl">&times;</button>
      </header>
      <div className="mb-4 border-b border-[#E4E4E7]">
      <div className="pb-4 border-b border-[#E4E4E7] mb-4">
        <img src={product.imageUrl} alt={product.name} className="w-[356px] h-[153px] rounded-md" />
      </div>
      <ul className="mb-4 text-sm space-y-4 border-b pb-4 border-[#E4E4E7]">
        <li className='flex justify-between '><span className='text-[#525252]'>Product ID</span> <span className='text-[#0A0A0A]'>{product.id}</span></li>
        <li className='flex justify-between'><span className='text-[#525252]'>Category</span> <span className='text-[#0A0A0A]'>{product.category}</span></li>
        <li className='flex justify-between'><span className='text-[#525252]'>Date Added</span> <span className='text-[#0A0A0A]'>{product.dateAdded}</span></li>
        <li className='flex justify-between'><span className='text-[#525252]'>Stock</span> <span className='text-[#0A0A0A]'>{product.stock}pcs</span></li>
        <li className='flex justify-between'><span className='text-[#525252]'>Price</span> <span className='text-[#0A0A0A]'>${product.price}</span></li>
      </ul>
      <div className="mb-4 p-4 bg-[#FAFAFA] text-sm rounded-md space-y-2.5 h-auto">
        <h6>Description</h6>
        <p className="text-[#525252]">{product.description}</p>
      </div>
      </div>
      <div className="flex justify-end gap-x-2 items-center font-medium text-sm">
        <button className="px-4 py-2 border border-[#E2E8F0] text-[#DC2626] rounded-md  ">Delete</button>
        <button className="px-4 py-2 border border-[#E2E8F0] text-[#0F172A] rounded-md ">Edit</button>
      </div>
    </div>
  );
};

export default ProductDetails;
