import React from "react";
import { Link } from "react-router-dom"; // ✅ Link imported

const Footer = () => {
  return (
    
    <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-orange-900 p-6 sm:p-8 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-[#1a1a1a] p-6 sm:p-8 rounded-lg">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">Game Responsibly</h2>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            We're committed to promoting responsible gaming. Here are some tips to ensure a safe and enjoyable experience:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
            <li>Set time and money limits before playing</li>
            <li>Take regular breaks from gaming</li>
            <li>Don't chase losses or play when upset</li>
            <li>Balance gaming with other activities</li>
          </ul>
        </div>

        <div className="bg-black p-6 sm:p-8 rounded-lg">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">Gaming Guidelines</h2>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
            <li><span className="text-purple-400 font-bold mr-2">1</span> Only play for entertainment, not as a source of income</li>
            <li><span className="text-purple-400 font-bold mr-2">2</span> Keep track of the time and money you spend</li>
            <li><span className="text-purple-400 font-bold mr-2">3</span> Use our self-exclusion tools if needed</li>
          </ul>
        </div>
      </div>
      

      <div className="border-t border-gray-700 my-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-gray-300">
        <div className="text-center md:text-left">
          <h2 className="text-white text-xl sm:text-2xl font-bold flex justify-center md:justify-start items-center gap-2 mb-4">
            🎮 <span className="text-orange-500">Kedar Online Games</span>
          </h2>
          <p className="text-sm sm:text-base">Experience the best online gaming entertainment with Kedar. Play responsibly.</p>
          <p className="text-sm sm:text-base font-semibold text-black mt-4 bg-yellow-400 inline-block px-3 py-1 rounded">
            Relationship Manager: 9220530856
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <a href="https://wa.me/918368015957?text=Give%20me%20my%20best%20Id" className="hover:text-orange-400">
                How to Play
              </a>
            </li>
            <li>
              <Link to="/Faqs" className="hover:text-orange-400">
                FAQs
              </Link>
            </li>
            <li>
              <a href="https://wa.me/919220529962?text=Give%20me%20my%20best%20Id" className="hover:text-orange-400">
                Contact Us
              </a>
            </li>
            <li>
              <Link to="/Terms" className="hover:text-orange-400">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">COMMUNITY</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:text-orange-400">Tournaments</a></li>
            <li><a href="#" className="hover:text-orange-400">Leaderboard</a></li>
            <li><a href="#" className="hover:text-orange-400">VIP Club</a></li>
            <li><a href="#" className="hover:text-orange-400">Affiliate Program</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8"></div>

      <div className="text-center text-gray-400 text-sm space-y-2">
        <p>© 2025 <span className="text-orange-400 font-semibold">Kedar Online Games</span>. All rights reserved.</p>
        <p>For entertainment purposes only. 18+ only. Play responsibly.</p>
        <p>Customer Care: <span className="text-orange-400 font-semibold">8766356331</span></p>
      </div>
    </footer>
  );
};

export default Footer;
