import { FaEye, FaShoppingCart } from 'react-icons/fa';
import burger from '../assets/burger5.jpg'

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Delicious Pizza',
      description: 'Cheesy and hot with fresh toppings.',
      price: '$12.99',
      image: burger,
    },
    {
      id: 2,
      name: 'Spicy Burger',
      description: 'Juicy burger with spicy sauce.',
      price: '$9.49',
      image: burger,
    },
    {
      id: 3,
      name: 'Sushi Roll',
      description: 'Fresh salmon with rice and seaweed.',
      price: '$15.00',
      image: burger,
    },
    {
      id: 4,
      name: 'Pasta Bowl',
      description: 'Creamy Alfredo with herbs.',
      price: '$10.50',
      image: burger,
    },
  ];

  return (
    <section className="bg-white text-black py-10 px-4">

      <h2 className="text-3xl font-semibold text-center mb-10">Related Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl shadow-md p-4 flex flex-col items-center text-center">

            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />

            <h3 className="text-xl font-bold mb-1">{product.name}</h3>

            <p className="text-sm text-gray-600 mb-2">{product.description}</p>

            <p className="text-lg font-semibold text-red-500 mb-4">{product.price}</p>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 px-3 py-1 border rounded-md hover:bg-gray-100 transition">
                <FaEye />
                <span>View</span>
              </button>

              <p className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
                <FaShoppingCart />
                <span>Add to cart</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
