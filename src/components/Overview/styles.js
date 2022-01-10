import styled from 'styled-components';

const Overlay = styled.div`
  background: linear-gradient(to top, ${({ theme }) => theme.main.black} 5%, transparent 40%);

  width: 100%;
  height: 100%;
`;

const OverviewContainer = styled.div`
  background: url(${(props) => props.background}) no-repeat top center;
  background-size: cover;

  height: 100vh;
`;

export { OverviewContainer, Overlay };
