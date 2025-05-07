import React from 'react';

const games = [
  {
    id: 1,
    title: 'Teen Patti',
    playersOnline: 1452,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Teen_Patti_card_game.jpg',
    hot: true,
  },
  {
    id: 2,
    title: 'Dragon Tiger',
    playersOnline: 876,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Dragon_Tiger_game.jpg',
    hot: false,
  },
  {
    id: 3,
    title: 'Andar Bahar',
    playersOnline: 1287,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Andar_Bahar_cards.jpg',
    hot: true,
  },
  {
    id: 4,
    title: 'Jhandi Munda',
    playersOnline: 934,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Jhandi_Munda_dice_game.jpg',
    hot: false,
  },
];

const PopularGames = () => {
  return (
    <section id="popular-games" className="py-12 bg-[#121212] text-white px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400 flex items-center justify-center gap-2">
        <span>🏆</span> Popular Games
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-400 transition duration-300"
          >
            <div className="relative">
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              {game.hot && (
                <span className="absolute top-3 right-3 bg-red-500 text-xs px-2 py-1 rounded-full font-bold">
                  Hot 🔥
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <p className="text-green-400 text-sm mt-1">
                🟢 {game.playersOnline} players online
              </p>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 w-full py-2 rounded-full text-sm font-bold transition">
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
