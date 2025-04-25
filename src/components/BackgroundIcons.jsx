import React from 'react';

import vscode from '../assets/icons/vscode.svg';
import java from '../assets/icons/java.svg';



const BackgroundIcons = () => {
  const icons = [vscode, java];
  const positions = [
    'top-10 left-10',
    'bottom-20 right-16',
    'top-1/2 left-1/4',
    'top-1/3 right-1/3',
    'bottom-10 left-1/2',
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt="bg-icon"
          className={`w-8 sm:w-10 md:w-12 opacity-10 absolute ${positions[index % positions.length]}`}
        />
      ))}
    </div>
  );
};

export default BackgroundIcons;
