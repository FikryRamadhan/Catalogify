import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Product from '../Hooks/Products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = Product.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-5">Product not found</div>;
  }

  return (
    <div className="p-5 md:p-10 flex flex-col md:flex-row gap-10 mt-20 min-md:px-20 px-10">
      <div className="flex-1">
        <div className="p-5 border rounded-lg shadow-md">
          <div className="w-full h-70 bg-gray-200 flex items-center justify-center mb-4">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded" />
          </div>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-500">{'⭐️'.repeat(Math.floor(product.rating))}</span>
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>
          <p className="text-3xl font-bold mb-4">{product.price}</p>
          <p className="mb-6">{product.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <select className="border p-2 rounded">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button className="bg-custom text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-2 text-gray-600">
            <div className="flex items-center gap-2">🚚 Free shipping on orders over $50</div>
            <div className="flex items-center gap-2">🔄 30-day return policy</div>
            <div className="flex items-center gap-2">🛡️ 2-year warranty</div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>
        {Product.filter((p) => p.category === product.category && p.id !== product.id)
          .slice(0, 3)
          .map((relatedProduct) => (
            <NavLink to={`/app/products/${relatedProduct.slug}`} key={relatedProduct.id} className="flex items-center gap-4 p-4 mb-2 border rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                <img src={relatedProduct.image} alt={relatedProduct.name} className="h-full w-full object-cover rounded" />
              </div>
              <div>
                <h4 className="font-semibold">{relatedProduct.name}</h4>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span className="text-yellow-500">{'⭐️'.repeat(Math.floor(relatedProduct.rating))}</span>
                  <span className="text-gray-300">({relatedProduct.reviews} reviews)</span>
                </div>
                <p className="text-lg font-bold">{relatedProduct.price}</p>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;