// FeaturedGames.js

import React from "react";

const games = [
  {
    title: "Royal Poker",
    category: "Cards",
    description: "Test your skills in this classic card game with a royal twist.",
    image: "/assets/royalpoker.png",
  },
  {
    title: "Lucky Slots",
    category: "Slots",
    description: "Spin to win with our most popular slot machine game.",
    image: "/assets/luckyslots.png",
  },
  {
    title: "Premium Roulette",
    category: "Table",
    description: "Place your bets and watch the wheel decide your fortune.",
    image: "/assets/roulette.png",
  },
  {
    title: "Blackjack",
    category: "Cards",
    description: "Beat the dealer and win big in our classic Blackjack game.",
    image: "/assets/blackjack.png",
  },
  {
    title: "Aviator",
    category: "Arcade",
    description: "Fly high and cash out before the plane flies away!",
    image: "/assets/aviator.png",
  },
];

const FeaturedGames = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <h2 className="text-3xl font-bold text-white mb-6">Featured Games</h2>
      <p className="text-gray-400 mb-8">Play our most popular games right now</p>

      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex-none w-72 bg-gray-900 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <span className="inline-block px-2 py-1 bg-purple-600 text-white text-xs rounded-full mb-2">
                {game.category}
              </span>
              <h3 className="text-xl font-bold text-white">{game.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{game.description}</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                ▶ Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
