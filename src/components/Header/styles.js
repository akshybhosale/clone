import styled from 'styled-components';

export default styled.header`
  padding: 1rem 5rem;
  display: flex;

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

    a {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  .mobile-nav {
    display: none;
  }
`;