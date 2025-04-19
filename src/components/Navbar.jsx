import { useState } from 'react';
import icon1 from '../assets/Tasty-food-vector-icon.jpg'
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="bg-white text-black py-4 px-8 ">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-6 ">
      <img src={icon1} alt="Icon description" className="w-20 h-20" />
    </div>

    <div className="flex-1 flex justify-center">
      <nav className="flex space-x-6 text-lg font-medium">
        <button className="hover:text-gray-600 transition">Home</button>
        <button className="hover:text-gray-600 transition">Menu</button>
        <button className="hover:text-gray-600 transition">Order</button>
        <button className="hover:text-gray-600 transition">Blog</button>
        <button className="hover:text-gray-600 transition">Contact</button>
      </nav>
    </div>

    <div className="flex items-center space-x-8 min-w-[250px] justify-end">
      <div className="flex items-center space-x-4">
        <BiPhoneCall className="call_icon w-10 h-10" />
        <div className="text-sm">
          <p>Call us</p>
          <p>(123) 456-7890</p>
        </div>
      </div>

      <div className="relative">
        <MdOutlineShoppingCart className="cart_icon w-10 h-10" />
        <div className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">3</div>
      </div>

      <button className="bg-red-500 text-white px-6 py-2 rounded-2xl hover:bg-red-600">
        Order Online
      </button>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
