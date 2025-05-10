import React from "react";

const Services = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">All Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out group relative">
          <img src="https://img.freepik.com/free-photo/friends-having-fun-while-playing-poker_23-2149318920.jpg?ga=GA1.1.776375356.1746611081&semt=ais_hybrid&w=740" alt="Card Game" className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-300" />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src="https://videos.pexels.com/video-files/6259133/6259133-sd_360_640_25fps.mp4" 
            autoPlay 
            muted 
            loop
          />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Card Games</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out group relative">
          <img src="https://img.freepik.com/free-photo/gamer-playing-intense-classic-arcade-spaceship-racing-videogame-clenching-fist-excitement-after-winning-joyful-man-having-burst-happiness-after-passing-game-mission_482257-71095.jpg?ga=GA1.1.776375356.1746611081&semt=ais_hybrid&w=740" alt="Football Betting" className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-300" />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src="https://videos.pexels.com/video-files/26867683/12024477_360_640_24fps.mp4"
            autoPlay 
            muted 
            loop
          />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Aviator Games</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out group relative">
          <img src="public/images/race-horse.avif" alt="Horse Race Betting" className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-300" />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src="https://videos.pexels.com/video-files/31930636/13601230_360_640_60fps.mp4"
            autoPlay 
            muted 
            loop
          />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Horse Race Betting</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out group relative">
          <img src="public/images/tennis-player.avif" alt="Tennis Betting" className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-300" />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src="https://videos.pexels.com/video-files/5730323/5730323-sd_506_960_25fps.mp4"
            autoPlay 
            muted 
            loop
          />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Tennis Betting</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out group relative">
          <img src="public/images/playing-cards.jpg" alt="Indian Cards Games" className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-300" />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src="https://videos.pexels.com/video-files/7607099/7607099-sd_640_360_24fps.mp4"
            autoPlay 
            muted 
            loop
          />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Poker Gammes</h3>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out group relative">
          <img src="https://plus.unsplash.com/premium_photo-1719017469915-b7501a0d6147?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcmQlMjBnYW1lcyUyMHRlZW4lMjBwYXR0aXxlbnwwfHwwfHx8MA%3D%3D" alt="Roulette Betting" className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-300" />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src="https://videos.pexels.com/video-files/6218141/6218141-sd_506_960_25fps.mp4"
            autoPlay 
            muted 
            loop
          />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-lg font-semibold text-black text-center">Teen Patti</h3>
          </div>
        </div>

      </div>

      <div id="contact" className="text-center mb-10">
        <section className="bg-gray-900 py-10 mt-12">
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
