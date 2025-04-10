import { useEffect, useState } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format date and time
  const day = currentTime.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const time = currentTime.toLocaleTimeString();

  return (
    <header className="bg-white text-black flex justify-between items-center py-4 px-8">
      {/* Left Side: Date and Time */}
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 0V4m0 8v4m4 4h-8" />
        </svg>
        <div className="text-sm">{day} - {time}</div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex space-x-4">
        <button className="hover:bg-gray-200 px-4 py-2 rounded">About Us</button>
        <button className="hover:bg-gray-200 px-4 py-2 rounded">Contact Us</button>
        <button className="hover:bg-gray-200 px-4 py-2 rounded">Login/Register</button>
      </div>
    </header>
  );
};

export default Header;
