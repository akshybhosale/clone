import styled from 'styled-components';

const Info = styled.div`
  display: inline-block;

  transform: translateY(25%);

  max-width: 70rem;

  margin-left: 5rem;

  h2 {
    color: #ffffff;
    font-size: 4.8rem;
  }

  p {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;

    margin: 2rem 0;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .actions {
    display: flex;

    @media (max-width: 380px) {
      flex-direction: column;
      
      button {
        justify-content: center;

        margin: 0 0 2rem;

        &#info {
          margin-right: 2rem;
        }
      }
    }
  }

  button {
    background: none;
    border: 0;
    border-radius: .6rem;

    font-size: 2rem;
    font-weight: 700;

    display: flex;
    align-items: center;

    padding: 1rem 3rem;

    cursor: pointer;

    img {
      width: 2.6rem;
      margin-right: 1rem;
    }

    &#play {
      background: #ffffff;

      margin-right: 2rem;

      &:hover {
        background: #ffffffbf;
      }
    }

    &#info {
      background: #6d6d6eb3;
      color: #ffffff;

      &:hover {
        background: #6d6d6e66;
      }
    }
  }

  @media (max-width: 750px) {
    transform: translateY(0);
  }
`;

const ToTopOverlay = styled.div`
  background: linear-gradient(to top, ${({ theme }) => theme.main.black} 5%, transparent 40%);

  width: 100%;
  height: 100%;
`;

const ToRightOverlay = styled.div`
  background: linear-gradient(to right, ${({ theme }) => theme.main.black} 10%, transparent 60%);

  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const OverviewContainer = styled.div`
  background: url(${(props) => props.background}) no-repeat top center;
  background-size: cover;

  height: 100vh;
`;

export {
  OverviewContainer, ToTopOverlay, ToRightOverlay, Info,
};
