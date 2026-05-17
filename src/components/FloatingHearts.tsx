import { useEffect, useState } from "react";
import "./styles/FloatingHearts.css";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<
    { id: number; left: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    // Generate a new heart every 600ms
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100, // random left position 0% - 100%
          duration: 5 + Math.random() * 8, // 5s to 13s float duration
          size: 15 + Math.random() * 20, // 15px to 35px
        };
        // Keep max 25 hearts to prevent clutter
        return [...prev, newHeart].slice(-25);
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts-overlay">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
            width: `${h.size}px`,
            height: `${h.size}px`,
          }}
        >
          <svg viewBox="0 0 32 29.6" width="100%" height="100%">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              fill="var(--accentColor)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
