import logo from '../assets/Tasty-food-vector-icon.jpg'

const EmailSection = () => {
  return (
    <section className="bg-white text-black py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">

        <div className="flex items-start space-x-4 w-full md:w-1/2 ml-16">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />

          <div>
            <h2 className="text-2xl font-semibold ml-20">Subscribe Now</h2>
            <p className="text-sm text-gray-600 mt-1 ml-20">
              Get the latest updates, deals, and food offers right to your inbox.
            </p>
          </div>
        </div>

        {/* Right side - Email Input */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 ml-2"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mr-20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
