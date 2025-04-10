import { useState } from "react";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center items-center space-x-4 text-center">
        <button
          onClick={() => handleTabChange("description")}
          className={`px-4 py-2 rounded-lg focus:outline-none ${activeTab === "description"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
            }`}
        >
          Description
        </button>
        <button
          onClick={() => handleTabChange("reviews")}
          className={`px-4 py-2 rounded-lg focus:outline-none ${activeTab === "reviews"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
            }`}
        >
          Reviews
        </button>
      </div>


      {/* Conditional Content Rendering */}
      {activeTab === "description" && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Product Description</h3>
          <p className="mt-2 text-gray-700">
            This is a detailed description of the product. It highlights the
            features, materials, and specifications, providing all necessary
            information about what this product has to offer.<br/>
            his is a detailed description of the product. It highlights the
            features, materials, and specifications, providing all necessary
            information about what this product has to offer.<br/>
            his is a detailed description of the product. It highlights the
            features, materials, and specifications, providing all necessary
            information about what this product has to offer.
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Customer Reviews</h3>
          <div className="mt-2 space-y-4">
            <div className="border-b pb-4">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-600">★★★★★ 5/5</p>
              <p className="text-gray-700">
                Great product! Exceeded my expectations. Would definitely
                recommend it to others.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-semibold">Jane Smith</p>
              <p className="text-gray-600">★★★★☆ 4/5</p>
              <p className="text-gray-700">
                Good quality, but a bit expensive. Still worth the purchase.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
