'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: '#fff',
    },
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection('left');

    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className="p-4">
      <div className=" relative m-auto h-44 max-w-xl overflow-hidden rounded-xl md:h-80 lg:h-96">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="h-[99%] w-fit rounded-lg border border-solid"
          />
        </AnimatePresence>
        <div className="flex justify-between">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className=" absolute bottom-0 left-0 top-0 mx-1 my-auto flex h-6 w-6
             cursor-pointer items-center justify-center rounded-full bg-gray-500 p-1 md:mx-5"
            onClick={handlePrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="absolute bottom-0 right-0 top-0 mx-1 my-auto flex h-6 w-6
             cursor-pointer items-center justify-center rounded-full bg-gray-500 p-1 md:mx-5"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 cursor-pointer rounded-lg border ${
              currentIndex === index ? 'bg-amber-950' : 'bg-[#faf7f7]'
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;
