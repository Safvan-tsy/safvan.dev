"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
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
      backgroundColor: "#fff",
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="p-4">
      <div className=" relative rounded-xl h-44 md:h-80 lg:h-96 max-w-xl m-auto overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="w-fit h-[99%] border rounded-lg border-solid"
          />
        </AnimatePresence>
        <div className="flex justify-between">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className=" flex justify-center items-center mx-1 md:mx-5 my-auto cursor-pointer left-0 absolute
             bg-gray-500 top-0 bottom-0 rounded-full h-6 w-6 p-1"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="flex justify-center items-center mx-1 md:mx-5 my-auto cursor-pointer right-0 absolute
             bg-gray-500 top-0 bottom-0 rounded-full h-6 w-6 p-1"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-5 gap-5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`border rounded-lg w-4 h-4 cursor-pointer ${
              currentIndex === index ? "bg-amber-950" : "bg-[#faf7f7]"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;
