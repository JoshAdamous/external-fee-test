import React from 'react';
import styled, { css } from 'styled-components';
import { clampBuilder } from './utils';

const StyledTypography = styled.div`
  max-width: ${({ maxWidth }) => maxWidth ?? '40ch'};
  color: ${({ theme }) => theme.text};
  font-family: 'Syne', Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
  opacity: ${({ opacity }) => opacity ?? 1};
  white-space: pre-wrap;

  @media (max-width: 920px) {
    max-width: 60ch;
  }

  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `}

  ${(props) =>
    props.semibold &&
    css`
      font-weight: 600;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
    
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${(props) =>
    props.heading1 &&
    css`
      font-size: ${clampBuilder(400, 800, 2.75, 3.75)};
      line-height: ${clampBuilder(400, 800, 2.75, 3.75)};
    `}

  ${(props) =>
    props.lead &&
    css`
      font-size: ${clampBuilder(400, 800, 1.5, 2.75)};
      line-height: ${clampBuilder(400, 800, 2.25, 3)};
    `}

  ${(props) =>
    props.paragraph &&
    css`
      font-size: 1.25rem;
      line-height: 1.5rem;
    `}

  ${(props) =>
    props.subtitle &&
    css`
      font-size: 1rem;
      line-height: 1.25rem;
    `}

  ${(props) =>
    props.label &&
    css`
      font-size: ${clampBuilder(400, 800, 0.85, 1)};
      line-height: ${clampBuilder(400, 800, 1, 1.25)};
    `}

  ${(props) =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight};
    `}
`;

function Typography(props) {
  return <StyledTypography {...props}>{props.children}</StyledTypography>;
}

export default Typography;
