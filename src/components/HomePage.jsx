import React, { useState } from 'react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-800 to-orange-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-4 bg-black sm:px-8">
        <div className="flex items-center space-x-2">
          <a href="https://wa.me/919220529962" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <img src="public/images/logo.png" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
            <span className="text-2xl font-bold text-orange-400">Kedar Online Games</span>
          </a>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden sm:flex space-x-6 items-center">
          <a href="#games" className="hover:text-orange-300">Games</a>
          <a href="#services" className="hover:text-orange-300">Services</a>
          <a href="https://wa.me/919220530856" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">How To Play</a>
          <a href="https://wa.me/919220530856" target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-1 rounded hover:bg-purple-600 transition">Register</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-black py-4 px-6 space-y-4">
          <a href="#games" className="block text-white hover:text-orange-300">Games</a>
          <a href="#services" className="block text-white hover:text-orange-300">Services</a>
          <a href="https://wa.me/918368015957" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-orange-300">How To Play</a>
          <a href="https://wa.me/919220529962" target="_blank" rel="noopener noreferrer" className="block text-white bg-purple-500 px-4 py-1 rounded hover:bg-purple-600 transition">Register</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-orange-400">Kedar Online</span> Games Experience
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
          Play exciting games with Kedar, win big rewards, and experience the ultimate online thrill!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/918368015957"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition"
          >
            ▶ Play Now
          </a>
          <a
            href="https://wa.me/919220529962"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition"
          >
            📞 Contact on WhatsApp
          </a>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl" id="games">
          {[{
            title: "Cricket Batting",
            label: "Cricket",
            image: "https://images.pexels.com/photos/28697945/pexels-photo-28697945/free-photo-of-dynamic-cricket-action-with-batsman-swinging-bat.jpeg?auto=compress&cs=tinysrgb&w=400",
            video: "https://media.istockphoto.com/id/683660038/video/cricket-player-on-the-professional-cricket-stadium.mp4?s=mp4-640x640-is&k=20&c=TFRM9Uo-dBQom2yPAG4uMIBRrI5n8wwhc1kDWTV3hOY=", // Add your cricket video here
          }, {
            title: "Football Batting",
            label: "Football",
            image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400",
            video: "https://videos.pexels.com/video-files/6079620/6079620-sd_360_640_25fps.mp4", // Add your football video here
          }, {
            title: "Roulette",
            label: "Roulette",
            image: "https://img.freepik.com/free-photo/view-man-gambling-casino_23-2151007780.jpg",
            video: "https://videos.pexels.com/video-files/7607575/7607575-sd_640_360_25fps.mp4", // Add your roulette video here
          }].map((game, index) => (
            <div key={index} className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center relative overflow-hidden group">
              <img src={game.image} alt={game.title} className="w-full h-60 object-cover rounded" />
              <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                src={game.video}
                autoPlay
                muted
                loop
              />
              <h3 className="text-xl font-bold mt-4 mb-2 z-10 relative">{game.title}</h3>
              <p className="text-gray-400 z-10 relative">{game.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
