import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx"; 
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Terms from "./components/Terms.jsx";
import Faqs from "./components/Faqs.jsx";
import GlobalBackground from "./components/GlobalBackground.jsx";

// function App() {
//   return (
//     <div>
//       <HomePage />
//       <Services />
//       <Footer />
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <Services />
            <Footer />
            <GlobalBackground />
          </>
        } />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
