import React from 'react';

const ProductPreviewCard: React.FC = () => {
  return (
<div className="flex items-center justify-center h-screen">
  <div className="grid grid-cols-2">
    <div className="bg-white rounded-l-xl">
      <img src="/images/image-product-desktop.jpg" className="max-w-xs rounded-l-xl"></img>
    </div>
    <div className="bg-white rounded-r-xl py-8 px-8 flex flex-col">
      <p className="tracking-wider font-sans text-xs mb-6">P E R F U M E</p>
      <p className="font-serif text-4xl mb-4">Gabrielle<br></br> Essence Eau<br></br> De Parfum</p>
      <p className="font-sans text-gray-500">A floral, solar and voluptuous<br></br> interpretation composed by<br></br> Olivier Polge, Perfumer-Creator<br></br> for the House of CHANEL.</p>
      <div className="grid grid-cols-2 mt-6">
        <p className="font-serif text-3xl text-emerald-700">$149.99</p>
        <p className="font-sans text-sm text-gray-500 line-through flex items-center ml-4">$169.99</p>
      </div>
      <button className="bg-emerald-700 hover:bg-emerald-900 font-sans text-white rounded-lg py-3 mt-7 flex items-center justify-center">
        <img className="px-2" src="/images/icon-cart.svg"></img>
        Add to Cart
      </button>
    </div>
  </div>
</div>
  );
};

export default ProductPreviewCard;