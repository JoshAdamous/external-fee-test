import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const ParallaxWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const ParallaxInner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
`;

function ParallaxContent({ amount = '128px', children, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}`, amount], { ease: false });

  return (
    <ParallaxWrapper ref={ref} style={props.style}>
      <ParallaxInner style={{ y }}>{children}</ParallaxInner>
    </ParallaxWrapper>
  );
}

export default ParallaxContent;
