import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '../ui';

const StyledPageHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 680px) {
    padding-inline: 1rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 480px) {
    ${Button} {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const HeadingActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 680px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

function PageHeading({ title, children }) {
  return (
    <StyledPageHeading>
      <Typography heading1 bold as="h1">
        {title}
      </Typography>

      <HeadingActions>{children}</HeadingActions>
    </StyledPageHeading>
  );
}

export default PageHeading;
