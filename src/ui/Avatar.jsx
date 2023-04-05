import React from 'react';
import styled, { css } from 'styled-components';

const StyledAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 680px) {
    width: 60px;
    height: 60px;
  }

  ${(props) =>
    props.lg &&
    css`
      width: 60px;
      height: 60px;
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Avatar(props) {
  return <StyledAvatar {...props}>{props.children}</StyledAvatar>;
}

export default Avatar;
