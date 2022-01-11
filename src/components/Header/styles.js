import styled from 'styled-components';

export const MobileNavContainer = styled.nav`
  position: relative;
  height: 100%;
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
  }

  .complement {
    height: 1.3rem;
  }

  ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transform: translateX(-20%);
    transition: all 0.2s;
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

      @media (max-width: 800px) {
        top: -1.8rem;
      }

      @media (max-width: 620px) {
        top: -2rem;
      }

      @media (max-width: 420px) {
        top: -2.2rem;
      }
    }
  }

  li {
    text-align: center;

    a {
      color: ${({ theme }) => theme.text.darkGray};
      display: block;
      width: 20rem;
      padding: 1.6rem 0;
      background: rgba(10, 10, 10, 0.9);
      transition: background 0.25s ease-in;

      &.current {
        color: ${({ theme }) => theme.text.gray};
        font-weight: bold;
        cursor: initial;
      }

      &:hover {
        background: rgba(10, 10, 10, 0.95);
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

export const SearchBarContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 2.6rem;

  img {
    height: 2rem;
  }

  input {
    width: 0;
    background: transparent;
    border: none;
    font-size: 1.4rem;
    transition: all 0.25s ease-in;
    color: #fff;

    &:focus {
      outline: none;
      margin-left: 1.2rem;
    }
  }

  &.in-use {
    border: 1px solid ${({ theme }) => theme.text.white};
    padding: 0.6rem;

    input {
      width: 200px;
    }
  }
`;

export const NotificationsContainer = styled.div`
  margin: 0 2.8rem;

  img {
    height: 2rem;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }

  @media (max-width: 380px) {
    display: none;
  }
`;

export const ProfileBoxContainer = styled.div`
  position: relative;
  height: 100%;

  .callout-arrow {
    position: absolute;
    left: 25%;

    border: 7px solid;
    border-color: transparent transparent ${({ theme }) => theme.text.gray};

    visibility: hidden;
    opacity: 0;
    transition: all .2s ease-in;
  }

  img {
    height: 4rem;
    border-radius: 1rem;
  }

  .main-profile {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

    span {
      margin-left: 1rem;
      width: 0;
      height: 0;
      border-width: 5px 5px 0 5px;
      border-style: solid;
      border-color: #fff transparent transparent transparent;
      transition: transform 0.367s;
    }
  }

  .complement {
    height: 1.3rem;
  }

  .dropdown {
    visibility: hidden;
    opacity: 0;
    transition: all .2s ease-in;

    background: rgba(10, 10, 10, .95);
    position: absolute;
    transform: translateX(-65%);
    overflow: hidden;
    width: 18rem;
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;

    color: ${({ theme }) => theme.text.white};
    font-size: 1.4rem;

    padding: 1rem;

    img {
      margin-right: 1.2rem;
    }

    &:hover {
      span, a {
        text-decoration: underline;
      }
    }
  }

  .kids {
    display: none;

    padding: 1rem;
    border-top: 1px solid ${({ theme }) => theme.text.veryDarkGray};

    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }

  .options {
    border-top: 1px solid ${({ theme }) => theme.text.veryDarkGray};

    a {
      font-weight: bold;
    }
  }

  &:hover {
    cursor: hover;

    .main-profile span {
      transform: rotate(180deg);
    }

    .dropdown {
      visibility: initial;
      opacity: 1;
    }

    .callout-arrow {
      visibility: initial;
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    .kids {
      display: block;
    }
  }
`;

export const Container = styled.header`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(0,0,0,.7) 10%, rgba(0,0,0,0));
  position: fixed;
  width: 100%;

  transition: background .24s ease-in;
  z-index: 10000;

  a {
    color: ${({ theme }) => theme.text.gray};
    font-size: 1.4rem;
    transition: color 0.2s ease-in;
    width: 100%;
    height: 100%;
  }

  .navigation,
  .info {
    display: flex;
    align-items: center;
  }

  .info {
    > a {
      height: initial;

      @media (max-width: 800px) {
        display: none;
      }
    }
  }

  .logo {
    height: 5rem;
    margin-right: 2.5rem;
  }

  &.no-transparency {
    background-color: ${({ theme }) => theme.main.black};
  }

  @media (max-width: 1100px) {
    nav:first-of-type {
      display: none;
    }

    nav:last-of-type {
      display: initial;
    }
  }

  @media (max-width: 600px) {
    #search-bar {
      display: none;
    }
  }
`;
