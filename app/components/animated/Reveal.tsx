'use client';

import { motion, useInView, useAnimationControls, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

const defaultVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { opacity: 1, y: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: -75 },
  visible: { opacity: 1, y: 0 },
};

const fromLeft = {
  hidden: { opacity: 0, x: -75 },
  visible: { opacity: 1, x: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0 },
};

type StyledVariantsProps = 'top' | 'left' | 'bottom' | 'right';

const getVariants = (styledVariants: StyledVariantsProps) => {
  let variantsObj;

  switch (styledVariants) {
    case 'top':
      variantsObj = defaultVariants;
      break;
    case 'right':
      variantsObj = fromRight;
      break;
    case 'bottom':
      variantsObj = fromBottom;
      break;
    case 'left':
      variantsObj = fromLeft;
      break;
    default:
      variantsObj = defaultVariants;
      break;
  }

  return variantsObj;
};

type Props = {
  children: ReactNode;
  variants?: StyledVariantsProps;
  margin?: string;
};
export const Reveal = ({ children, variants = 'top', margin = '0px 0px 0px 0px' }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: margin,
  });
  const mainControls = useAnimationControls();

  useEffect(() => {
    isInView ? mainControls.start('visible') : mainControls.start('hidden');
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative overflow-visible">
      <AnimatePresence>
        <motion.div
          variants={getVariants(variants)}
          initial="hidden"
          exit="hidden"
          animate={mainControls}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Reveal;
