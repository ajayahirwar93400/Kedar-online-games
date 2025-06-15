import React, { useEffect, useState } from "react";

const GlobalBackground = () => {
  const [mouseY, setMouseY] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); // Tablet & smaller
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileOrTablet) {
      const handleMouseMove = (e) => {
        setMouseY(e.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobileOrTablet]);

  return (
    <div
      className="fixed inset-x-0 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-400 opacity-10 pointer-events-none select-none z-0 transition-all duration-300 ease-in-out overflow-hidden"
      style={{
        top: isMobileOrTablet ? "20%" : `${mouseY * 0.1}px`,
        fontSize: isMobileOrTablet ? "10vw" : "min(12vw, 200px)",
        whiteSpace: "nowrap",
      }}
    >
      {/* Kedar Games */}
    </div>
  );
};

export default GlobalBackground;
