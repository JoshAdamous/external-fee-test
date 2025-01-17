import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  > div:first-child {
    width: 6rem;
    height: 100%;
  }

  > div:last-child {
    flex: 1;
    width: (100% - 6rem);
    height: 100%;
    margin-left: 6rem;
  }

  @media (max-width: 680px) {
    flex-direction: column-reverse;

    > div:first-child {
      width: 100%;
      height: 6rem;
      z-index: 99;
    }

    > div:last-child {
      width: 100%;
      margin-left: 0;
      margin-bottom: 6rem;
    }
  }
`;

export default Container;
