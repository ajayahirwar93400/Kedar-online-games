import React from "react";

const Services = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">All Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src="public/images/cricket-game.avif" alt="Cricket Betting" className="w-full h-64 object-cover " />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Cricket Betting</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src="public/images/footbal-game.jpg" alt="Football Betting" className="w-full h-64 object-cover" />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Football Betting</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src="public/images/race-horse.avif" alt="Horse Race Betting" className="w-full h-64 object-cover" />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Horse Race Betting</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src="public/images/tennis-player.avif" alt="Tennis Betting" className="w-full h-64 object-cover" />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Tennis Betting</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src="public/images/playing-cards.jpg" alt="card-games" className="w-full h-64 object-cover" />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Indian Cards Games</h3>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src="public/images/roulette-game.jpg" alt="Roulette Betting" className="w-full h-64 object-cover" />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Roulette Betting</h3>
          </div>
        </div>

      </div>
    <div id="contact" className="text-center mb-10">
    <section 
      className="bg-gray-900 py-10 mt-12">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
      You feel free contact us <span className="text-orange-500">Kedar Online Games</span>
      </h2>

  <div className="flex justify-center space-x-6 mt-6">
    <a href="https://wa.me/9220529962" target="_blank" rel="noopener noreferrer">
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
        WhatsApp: 9220529962
      </button>
    </a>

    <a href="https://wa.me/8368015957" target="_blank" rel="noopener noreferrer">
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
        WhatsApp: 8368015957
      </button>
    </a>
  </div>
</section>
</div>

</section>
    
  );
};

export default Services;
