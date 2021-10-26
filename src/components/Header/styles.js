import styled from 'styled-components';

export const MobileNavContainer = styled.nav`
  position: relative;
  height: 100%;

  > a {
    display: flex;
    align-items: center;

    &::after {
      content: '';
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: #fff transparent transparent;
      margin-left: 1rem;
    }
  }

  .complement {
    height: 1.3rem;
  }

  ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transform: translateX(-20%);
    transition: all .2s;
    border: 1px solid ${({ theme }) => theme.text.veryDarkGray};
    border-top: 3px solid ${({ theme }) => theme.text.gray};

    .callout-arrow {
      position: absolute;
      top: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      height: 0;
      width: 0;
      border: 7px solid;
      border-color: transparent transparent #e5e5e5;
    }
  }

  li {
    text-align: center;

    a {
      color: ${({ theme }) => theme.text.darkGray};
      display: block;
      width: 20rem;
      padding: 1.6rem 0;
      background: rgba(10, 10, 10, .9);
      transition: background .25s ease-in;

      &.current {
        color: ${({ theme }) => theme.text.gray};
        font-weight: bold;
        cursor: initial;
      }

      &:hover {
        background: rgba(10, 10, 10, .95);
      }
    }
  }

  &:hover {
    ul {
      visibility: initial;
      opacity: 1;
    }
  }
`;

export const DesktopNavContainer = styled.nav`
  display: none;

  ul {
    display: flex;
  }

  li {
    margin-left: 1.8rem;
  }

  .selected a {
    color: ${({ theme }) => theme.text.white};
    font-weight: bold;
  }

  a:hover {
    color: ${({ theme }) => theme.text.darkGray};
  } 
`;

export const Container = styled.header`
  padding: 1rem 5rem;
  display: flex;
  background-color: black;

  a {
    color: ${({ theme }) => theme.text.gray};
    font-size: 1.4rem;
    transition: color .2s ease-in;
    width: 100%;
    height: 100%;
  }

  .navigation {
    display: flex;
    align-items: center;
  }

  img {
    height: 5rem;
    margin-right: 2.5rem;
  }
`;