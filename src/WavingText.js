import React, { useEffect, useState } from "react";

const WavingText = () => {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => {
        setIsWaving(false);
      }, 2000); // Duration of the wave animation
    }, 5000); // Interval to trigger the animation

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`textwhite ${isWaving ? "text-wave" : ""}`}>
      Rules: No abusive words, we are all slatt families!
    </span>
  );
};

export default WavingText;
