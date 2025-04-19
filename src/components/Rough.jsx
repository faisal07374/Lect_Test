import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className='col_1 ml-6'>
          <h3 className="text-xl font-semibold mb-4">TastyFood</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enjoy the best dishes in town. Fresh ingredients, expert chefs, and cozy vibes.
          </p>
          <h4 className="font-semibold">Book a Table</h4>
          <p className="text-sm text-gray-700">📞 +1 234 567 890</p>
          <h4 className="font-semibold mt-4">Opening Hours</h4>
          <p className="text-sm text-gray-700">Mon - Sun: 10AM - 11PM</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className='col_2 ml-16'>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Our Menu */}
        <div className='col_3 ml-6'>
          <h3 className="text-xl font-semibold mb-4">Our Menu</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Pizza</a></li>
            <li><a href="#">Burger</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Sushi</a></li>
            <li><a href="#">Desserts</a></li>
          </ul>
        </div>

        {/* Column 4 - Get in Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <div className="flex items-center space-x-2 mb-2">
            <FaPhoneAlt className="text-red-500" />
            <span className="text-sm text-gray-700">+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-500" />
            <span className="text-sm text-gray-700">info@tastyfood.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// Steps to deploy projects on netlify


// 🔐 Final Checklist (Must Do)
// Step	What to do
// 🔑 GitHub Secrets	Go to repo > Settings > Secrets and add:
// NETLIFY_AUTH_TOKEN	Your personal access token from Netlify
// NETLIFY_SITE_ID	Your Netlify site's ID (from dashboard)
// 🛠 _redirects	Add in public/_redirects with 
// 🧠 vite.config.js	Make sure it has base: '/'