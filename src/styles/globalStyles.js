import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-block-size: 100dvh;
    background: ${({ theme }) => theme.offBlack};
    color: ${({ theme }) => theme.white};
    font-family: "Syne", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-feature-settings: "liga";
    font-weight: 400;
    letter-spacing: -0.02em;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  #root {
    overflow-x: hidden;
  }

  img {
    display: block;
    max-inline-size: 100%;
    border: 0;
    user-select: none;
    pointer-events: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  figcaption {
    max-width: 60ch;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font-family: "Syne", Helvetica, Arial, sans-serif;
  }
`;

export const defaultTheme = {
  brand: '#BD9FF9',
  brandDk: '#9872E3',
  white: '#FFFFFF',
  offBlack: '#131517',
  red: '#F99F9F',
  redDk: '#E04F4F',
};
