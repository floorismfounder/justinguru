import React, { forwardRef, useEffect, useState } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { useRouter } from 'next/router';

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
  const [isExiting, setIsExiting] = useState(false);

  const onTheRight = { x: '-100%' };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: '-100%'};

  const transition = { duration: 0.3, ease: 'easeInOut' };

  const handleExitComplete = () => setIsExiting(false);

  useEffect(() => {
	if (isExiting) {
	  setTimeout(handleExitComplete, transition.duration * 1000);
	}
  }, [isExiting, transition.duration]);

  return (
    <motion.div
      ref={ref}
      initial={onTheRight}
      animate={inTheCenter}
      exit={onTheLeft}
      transition={transition}
      onAnimationStart={() => setIsExiting(true)}
      onAnimationEnd={handleExitComplete}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition)
