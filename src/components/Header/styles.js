import styled from 'styled-components';

export default styled.header`
  padding: 1rem 5rem;
  display: flex;
  background-color: black;

  .navigation {
    display: flex;
  }

  img {
    height: 5rem;
    margin-right: 2.5rem;
  }

  .desktop-nav {
    display: flex;
    align-items: center;

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

    a {
      color: ${({ theme }) => theme.text.gray};
      font-size: 1.4rem;
      transition: color .2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.text.darkGray};
      }
    }
  }

  .mobile-nav {
    display: none;
  }
`;