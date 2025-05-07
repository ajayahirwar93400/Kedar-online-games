import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-blue-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black">
      <div className="flex items-center space-x-2">


        <img src="public/images/logo.png" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
        <span className="text-2xl font-bold text-orange-400">Kedar Online Games</span>
  </div>

        <div className="flex space-x-6 items-center">
          <a href="#games" className="hover:text-orange-300">Games</a>
          <a href="#popular" className="hover:text-orange-300">Popular</a>
          <a href="#services" className="hover:text-orange-300">Services</a> {/* 👈 New Services Button */}
          <a href="#how-to-play" className="hover:text-orange-300">How To Play</a>
          <button className="bg-transparent border-2 border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">Login</button>
          <button className="bg-purple-500 px-4 py-1 rounded hover:bg-purple-600 transition">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-orange-400">Kedar Online</span> Games Experience
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
          Play exciting games with Kedar, win big rewards, and experience the ultimate online thrill!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition">
            ▶ Play Now
          </button>
          <button className="bg-black px-6 py-3 rounded-full hover:bg-gray-800 transition">
            🎮 View Games
          </button>
          <a
            href="https://wa.me/919220530856"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition"
          >
            📞 Contact on WhatsApp
          </a>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl" id="games">
          <div className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center">
            <img src="https://img.freepik.com/free-photo/three-dimensional-casino-item_23-2151067234.jpg?ga=GA1.1.1986587134.1745666078&semt=ais_hybrid&w=740" alt="Card Game" className="w-full h-60" />
            <h3 className="text-xl font-bold mb-2">Card Game</h3>
            <p className="text-gray-400">Poker</p>
          </div>
          <div className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center">
            <img src="https://img.freepik.com/free-photo/3d-casino-slot-machine_23-2151728715.jpg?ga=GA1.1.1986587134.1745666078&semt=ais_hybrid&w=740" alt="Slot Machine" className="w-full h-60 mb-4" />
            <h3 className="text-xl font-bold mb-2">Slot Machine</h3>
            <p className="text-gray-400">Slots</p>
          </div>
          <div className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center">
            <img src="https://img.freepik.com/free-photo/view-man-gambling-casino_23-2151007780.jpg?ga=GA1.1.1986587134.1745666078&semt=ais_hybrid&w=740" alt="Roulette" className="w-full h-60 mb-4" />
            <h3 className="text-xl font-bold mb-2">Roulette</h3>
            <p className="text-gray-400">Roulette</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;