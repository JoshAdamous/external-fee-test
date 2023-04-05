import React from 'react';
import styled, { css } from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;

  ${(props) =>
    props.container &&
    css`
      max-width: 100%;
      width: 100%;
      padding-inline: 2.5rem;

      @media (max-width: 680px) {
        padding-inline: 0.5rem;
      }
    `}

  ${(props) =>
    props.centered &&
    css`
      justify-content: center;
      align-items: center;
      max-width: 100%;
    `}
`;

export default Layout;
