import React, { useState } from "react";
import icon1 from '../assets/Tasty-food-vector-icon.jpg'

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <img
            src={icon1}
            alt="Product"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Awesome Product Name
          </h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">⭐⭐⭐⭐☆</span>
            <span className="text-sm text-gray-500 ml-2">(4.5/5) - 200 reviews</span>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            This is an awesome product that solves all your problems. It's made with high-quality materials and comes in a variety of colors and sizes.
          </p>
          <p className="text-2xl font-bold text-green-500 mb-4">
            $49.99
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <button
              className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={handleDecrease}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              className="w-16 text-center border border-gray-300 rounded-lg mx-2"
              readOnly
            />
            <button
              className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>

          {/* Shipping Info */}
          <div className="mt-4 text-sm text-gray-600">
            <p>Free shipping on orders over $50</p>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
