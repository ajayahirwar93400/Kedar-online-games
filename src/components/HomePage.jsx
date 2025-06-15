import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const gamesRef = useRef(null);
  const [mouseY, setMouseY] = useState(0);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToGames = () => {
    gamesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-900 via-purple-800 to-orange-900 text-white scroll-smooth overflow-hidden">

      {/* 🔥 Moving Background Watermark */}
     <div
      className="absolute left-1/2 transform -translate-x-1/2 text-[12vw] sm:text-[10vw] md:text-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-400 opacity-10 select-none z-0 whitespace-nowrap pointer-events-none transition-transform duration-300"
      style={{ top: `${mouseY * 0.2}px` }}
        >
      Kedar Games
    </div>


      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-4 bg-black sm:px-8 relative z-10">
        <div className="flex items-center space-x-2">
          <a href="https://wa.me/918750644687?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
            <span className="text-2xl font-bold text-orange-400">Kedar Online Games</span>
          </a>
        </div>

        <div className="hidden sm:flex space-x-6 items-center">
          <button onClick={scrollToGames} className="hover:text-orange-300">Games</button>
          <button onClick={scrollToGames} className="hover:text-orange-300">Services</button>
          <a href="https://wa.me/918368015957?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">How To Play</a>
          <a href="https://wa.me/918750644687?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-1 rounded hover:bg-purple-600 transition">Register</a>
        </div>

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
        <div className="sm:hidden bg-black py-4 px-6 space-y-4 relative z-10">
          <button onClick={() => { scrollToGames(); toggleMenu(); }} className="block text-white hover:text-orange-300">Games</button>
          <button onClick={() => { scrollToGames(); toggleMenu(); }} className="block text-white hover:text-orange-300">Services</button>
          <a href="https://wa.me/918368015957?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-orange-300">How To Play</a>
          <a href="https://wa.me/919220529962?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="block text-white bg-purple-500 px-4 py-1 rounded hover:bg-purple-600 transition">Register</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-orange-400">Kedar Online</span> Games Experience
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
          Play exciting games with Kedar, win big rewards, and experience the ultimate online thrill!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/918368015957?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition">▶ Play Now</a>
          <a href="https://wa.me/918750644687?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition">📞 Contact on WhatsApp</a>
          <a href="https://wa.me/918368015957?text=Give%20me%20my%20best%20Id" target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition">📞 Call Us +91 8368015957</a>
        </div>

        {/* Games Section */}
        <div ref={gamesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
          {[{
            title: "Cricket Batting",
            label: "Cricket",
            image: `${import.meta.env.BASE_URL}images/cricket-game.avif`,
            video: `${import.meta.env.BASE_URL}videos/cricket-video.mp4`,
          }, {
            title: "Football Batting",
            label: "Football",
            image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400",
            video: "https://videos.pexels.com/video-files/6079620/6079620-sd_360_640_25fps.mp4",
          }, {
            title: "Roulette",
            label: "Roulette",
            image: "https://img.freepik.com/free-photo/view-man-gambling-casino_23-2151007780.jpg",
            video: "https://videos.pexels.com/video-files/7607575/7607575-sd_640_360_25fps.mp4",
          }].map((game, index) => (
            <div key={index} className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center relative overflow-hidden group">
              <img src={game.image} alt={game.title} className="w-full h-60 object-cover rounded" />
              <video className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" src={game.video} autoPlay muted loop />
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
