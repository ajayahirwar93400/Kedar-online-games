import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-400">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to Kedar Online Games. By accessing and using our website, you agree to the following terms and conditions:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Players must be 18 years or older to play games.</li>
        <li>All games are for entertainment purposes only.</li>
        <li>We are not responsible for any losses incurred while playing.</li>
        <li>Do not share your personal or financial information with anyone.</li>
        <li>Respect others and play fair.</li>
      </ul>
      <p className="mt-6">Thank you for choosing Kedar Online Games!</p>
    </div>
  );
};

export default Terms;
