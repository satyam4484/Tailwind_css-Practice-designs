import React from 'react';
import search from './assests/search.png';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-around items-center py-8 bg-white shadow-md">
        <a href="/" className="text-3xl text-darkblue font-semibold">
          Startup 3
        </a>

        <ul className="flex gap-8 items-center text-lg text-gray-600">
          <li className="cursor-pointer hover:text-gray-800 transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-gray-800 transition duration-300">Features</li>
          <li className="cursor-pointer hover:text-gray-800 transition duration-300">Blog</li>
          <li className="cursor-pointer hover:text-gray-800 transition duration-300">Shop</li>
          <li className="cursor-pointer hover:text-gray-800 transition duration-300">
            <img src={search} alt="Search icon" className="w-5 h-5" />
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-full text-gray-600 hover:text-gray-800 border border-gray-300 transition duration-300">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition duration-300">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-around items-center mx-auto text-center mt-16">
        <div className="w-11/12 lg:w-2/3">
          <h1 className="text-5xl lg:text-7xl font-bold my-6 text-gray-800">
            Startup Framework
          </h1>
          <p className="text-xl text-gray-600 mt-6">
            We made it so beautiful and simple. It combines landings, pages, blogs, and shop screens. It is definitely the tool you need in your collection!
          </p>
        </div>

        <div className="flex flex-col items-center mt-12">
          <button className="rounded-full px-8 py-4 bg-cyan-600 text-white hover:bg-cyan-700 transition duration-300 shadow-md">
            Purchase Now for $248
          </button>
          <h3 className="mt-5 text-cyan-600 text-xl hover:underline cursor-pointer">
            Learn More
          </h3>
        </div>
      </section>
    </div>
  );
};

export default App;