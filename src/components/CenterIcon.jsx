import icon1 from '../assets/Tasty-food-vector-icon.jpg'

const CenterLogo = () => {
  return (
    <section className="bg-white text-black py-8">
      <div className="flex flex-col items-center">

        <img src={icon1} alt="Center Logo" className="w-28 h-auto mb-4" />

        <nav className="flex space-x-6 text-lg font-medium">
          <button className="hover:text-gray-600 transition">Home</button>
          <button className="hover:text-gray-600 transition">Menu</button>
          <button className="hover:text-gray-600 transition">Order</button>
          <button className="hover:text-gray-600 transition">Blog</button>
          <button className="hover:text-gray-600 transition">Contact</button>
        </nav>
      </div>
    </section>
  );
};

export default CenterLogo;
