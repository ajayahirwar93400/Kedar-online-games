// src/components/IPLMatchCards.jsx

import React from 'react';

const matches = [
  {
    id: 1,
    team1: 'Sunrisers Hyderabad',
    team2: 'Chennai Super Kings',
    date: 'April 25, 2025',
    time: '7:00 PM IST',
    team1Logo: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.png',
    team2Logo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Chennai_Super_Kings_Logo.png',
  },
  {
    id: 2,
    team1: 'Punjab Kings',
    team2: 'Kolkata Knight Riders',
    date: 'April 26, 2025',
    time: '7:00 PM IST',
    team1Logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.png',
    team2Logo: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.png',
  },
  {
    id: 3,
    team1: 'Lucknow Super Giants',
    team2: 'Mumbai Indians',
    date: 'April 27, 2025',
    time: '3:00 PM IST',
    team1Logo: 'https://upload.wikimedia.org/wikipedia/en/8/80/Lucknow_Super_Giants_Logo.png',
    team2Logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/Mumbai_Indians_Logo.png',
  },
  // Add more matches as needed
];

const IPLMatchCards = () => {
  return (
    <section className="py-12 px-6 bg-[#1f1f3d] text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">Live IPL Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-red-500 transition-shadow duration-300"
          >
            <div className="flex justify-center items-center bg-gray-800 p-4">
              <img
                src={match.team1Logo}
                alt={match.team1}
                className="w-16 h-16 object-contain"
              />
              <span className="mx-4 text-xl font-bold">vs</span>
              <img
                src={match.team2Logo}
                alt={match.team2}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                {match.team1} vs {match.team2}
              </h3>
              <p className="text-gray-400 mb-4">
                {match.date}, {match.time}
              </p>
              <button className="bg-red-500 px-5 py-2 rounded-full font-bold hover:bg-red-600 hover:shadow-[0_0_20px_4px_rgba(239,68,68,0.8)] transition-all duration-300">
                Bet Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IPLMatchCards;
