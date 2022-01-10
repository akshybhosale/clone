import styled from 'styled-components';

export default styled.div`
  .movie-rows {
    margin: -10rem 0 0 5rem;

    @media (max-width: 750px) {
      margin-top: -15rem;
    }

    @media (max-width: 600px) {
      margin-top: -25rem;
    }

    @media (max-width: 500px) {
      margin-top: -30rem;
    }
  }
`;
