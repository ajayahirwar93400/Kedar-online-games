import React, { useEffect, useState } from "react";

const GlobalBackground = () => {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-1/2 transform -translate-x-1/2 text-[100px] sm:text-[160px] md:text-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-400 opacity-10 whitespace-nowrap pointer-events-none select-none z-0"
      style={{ top: `${mouseY * 0.1}px` }}
    >
      Kedar Games
    </div>
  );
};

export default GlobalBackground;
