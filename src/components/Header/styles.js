import styled from 'styled-components';

export const MobileNavContainer = styled.nav`
  display: none;

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

    &:hover ~ ul {
      display: initial;
    }
  }
`;

export const DesktopNavContainer = styled.nav`
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