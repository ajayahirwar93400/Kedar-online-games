const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-orange-900 p-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-4">Game Responsibly</h2>
            <p className="text-gray-300 mb-4">We're committed to promoting responsible gaming. Here are some tips to ensure a safe and enjoyable experience:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Set time and money limits before playing</li>
              <li>Take regular breaks from gaming</li>
              <li>Don't chase losses or play when upset</li>
              <li>Balance gaming with other activities</li>
            </ul>
          </div>
  
          <div className="bg-black p-8 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-4">Gaming Guidelines</h2>
            <ul className="space-y-4 text-gray-300">
              <li><span className="text-purple-400 font-bold mr-2">1</span> Only play for entertainment, not as a source of income</li>
              <li><span className="text-purple-400 font-bold mr-2">2</span> Keep track of the time and money you spend</li>
              <li><span className="text-purple-400 font-bold mr-2">3</span> Use our self-exclusion tools if needed</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-700 my-10"></div>
  
        <div className="grid md:grid-cols-4 gap-8 text-gray-300">
          <div>
            <h2 className="text-white text-2xl font-bold flex items-center gap-2 mb-4">
              🎮 <span className="text-orange-500">Kedar Online Games</span>
            </h2>
            <p>Experience the best online gaming entertainment with Kedar. Play responsibly.</p>
          </div>
    
        <div>
            <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
            <li><a href="#howtoplay" className="hover:text-orange-400">How to Play</a></li>
             <li><a href="#faqs" className="hover:text-orange-400">FAQs</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact Us</a></li>
        <li><a href="#terms" className="hover:text-orange-400">Terms & Conditions</a></li>
    </ul>
    </div>

  
          <div>
            <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#howtoplay" className="hover:text-orange-400">How to Play</a></li>
              <li><a href="#faqs" className="hover:text-orange-400">FAQs</a></li>
              <li><a href="#contact" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="#terms" className="hover:text-orange-400">Terms & Conditions</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-white font-semibold mb-4">COMMUNITY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400">Tournaments</a></li>
              <li><a href="#" className="hover:text-orange-400">Leaderboard</a></li>
              <li><a href="#" className="hover:text-orange-400">VIP Club</a></li>
              <li><a href="#" className="hover:text-orange-400">Affiliate Program</a></li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-700 my-10"></div>
  
        <div className="text-center text-gray-400 text-sm space-y-2">
          <p>© 2025 <span className="text-orange-400 font-semibold">Kedar Online Games</span>. All rights reserved.</p>
          <p>For entertainment purposes only. 18+ only. Play responsibly.</p>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6">
            If any query, call on customer care number: <span className="text-orange-400 font-semibold">8766356331</span>
        </div>

      </footer>
    );
  };
  
  export default Footer;
  