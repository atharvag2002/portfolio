import React, { useEffect, useState } from 'react';
import './FallingLeaves.css';  // Import the CSS file for the falling leaves effect

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generateLeaves = () => {
      const numberOfLeaves = 20; // Number of leaves to animate
      let leavesArray = [];

      for (let i = 0; i < numberOfLeaves; i++) {
        // Ensure that the leaves' left position is between 10% and 90% of the screen width
        const leftPosition = 10 + Math.random() * 80; // Between 10% and 90%

        // Randomize the animation delay and duration
        leavesArray.push({
          id: i,
          left: leftPosition,
          animationDelay: Math.random() * 5, // Random delay for staggered falling
          animationDuration: 5 + Math.random() * 5, // Random fall duration
        });
      }

      setLeaves(leavesArray);
    };

    generateLeaves();
    window.addEventListener('resize', generateLeaves); // Re-generate leaves on resize

    return () => window.removeEventListener('resize', generateLeaves);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf absolute top-[-50px] bg-contain bg-no-repeat"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.animationDelay}s`,
            animationDuration: `${leaf.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FallingLeaves;
