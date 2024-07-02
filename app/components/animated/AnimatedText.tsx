import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <div
      className="py2 overflow-hiddev mx-auto flex w-full items-center justify-center
    text-center  "
    >
      <h1 className={`inline-block w-full text-8xl font-bold capitalize ${className}`}>
        {text.split('').map((word, index) => (
          <span key={word + '-' + index}>{word}</span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
