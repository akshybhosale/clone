import styled, { css } from 'styled-components';

const StyledNavigateButton = styled.button`
  position: absolute;
  top: 0;
  height: 100%;

  background: #14141465;
  border: 0;

  padding: 3rem;

  cursor: pointer;
  transition: background .1s ease-in;
  z-index: 1000;

  ${(props) => (props.inverted
    ? css`
      right: 98.5%;
    `
    : css`
      right: 0;
    `
  )}
  
  img {
    width: 2rem;
    transform: ${(props) => (props.inverted ? 'rotate(180deg)' : 'initial')};
  }

  &:hover {
    background: #141414b3;
  }
`;

const MovieCardContainer = styled.div`

  margin-right: 2rem;

  cursor: pointer;
  transition: transform .24s ease-out;

  img {
    border-radius: .4rem;

    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const MovieRowContainer = styled.div`
  position: relative;

  margin-bottom: 5rem;

  header {
    margin-bottom: 2rem;
  }

  h3 {
    color: #fff;
    font-size: 2.8rem;
  }
`;

export { MovieCardContainer, MovieRowContainer, StyledNavigateButton };
