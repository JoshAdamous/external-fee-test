import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  transition: all 0.33s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  overflow: hidden;

  &:is(:hover, :focus) {
    scale: 1.05;
  }

  &:is(:active) {
    scale: 0.96;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.offBlack};
      background-color: ${({ theme }) => theme.brand};

      &:is(:hover, :focus) {
        background-color: ${({ theme }) => theme.brandDk};
      }
    `}

  ${(props) =>
    props.red &&
    css`
      color: ${({ theme }) => theme.offBlack};
      background-color: ${({ theme }) => theme.redDk};

      &:is(:hover, :focus) {
        /* background-color: ${({ theme }) => theme.redDk}; */
      }
    `}

  ${(props) =>
    props.white &&
    css`
      color: ${({ theme }) => theme.offBlack};
      background-color: ${({ theme }) => theme.white};
    `}

  ${(props) =>
    props.offBlack &&
    css`
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.offBlack};
    `}

  ${(props) =>
    props.ltTransparent &&
    css`
      color: ${({ theme }) => theme.offBlack};
      background-color: rgba(255, 255, 255, 0.12);
      /* backdrop-filter: blur(12px); */
    `}

  ${(props) =>
    props.dkTransparent &&
    css`
      color: ${({ theme }) => theme.white};
      background-color: rgba(19, 21, 23, 0.5);
      /* backdrop-filter: blur(12px); */
    `}

  ${(props) =>
    props.outline &&
    css`
      color: ${({ theme }) => theme.white};
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.12);

      &:is(:hover, :focus) {
        background-color: rgba(255, 255, 255, 0.12);
        border-color: transparent;
      }
    `}

  ${(props) =>
    props.md &&
    css`
      width: 3.75rem;
      height: 3.75rem;
    `}

  ${(props) =>
    props.lg &&
    css`
      width: 5rem;
      height: 5rem;
    `}

  ${(props) =>
    props.circle &&
    css`
      border-radius: 50%;
    `}
`;

export default Button;
