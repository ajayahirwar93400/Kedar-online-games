import React from "react";

const Faqs = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-400">Frequently Asked Questions</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Q: How do I start playing?</h2>
        <p>A: Just click on the "Play Now" button and contact us via WhatsApp.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Q: Do I need to register?</h2>
        <p>A: Yes, you need to register via WhatsApp to start playing.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Q: Are these games legal?</h2>
        <p>A: All games are for fun and entertainment. Please follow your local laws.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Q: Who do I contact for support?</h2>
        <p>A: You can contact our Relationship Manager on WhatsApp.</p>
      </div>
    </div>
  );
};

export default Faqs;
