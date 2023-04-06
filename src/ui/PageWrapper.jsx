import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const wrapperVariants = {
  hidden: { y: 48, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const StyledPageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-inline-size: 37.5rem;
  inline-size: 100%;
  margin-inline: auto;
  padding-bottom: 6rem;

  @media (max-width: 680px) {
    padding-bottom: 0.5rem;
  }
`;

function PageWrapper({ children }) {
  const wrapperAnimation = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      wrapperAnimation.start('visible');
    }, 400);
  }, []);

  return (
    <StyledPageWrapper
      animate={wrapperAnimation}
      initial="hidden"
      variants={wrapperVariants}
      transition={{ duration: 1, type: 'spring', stiffness: 68 }}
    >
      {children}
    </StyledPageWrapper>
  );
}

export default PageWrapper;
