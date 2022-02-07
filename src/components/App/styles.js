import styled from 'styled-components';

export const Banner = styled.div`
  background-image: url(${({ banner }) => banner});
  background-size: cover;
  width: 100%;
  height: 300px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 565px;
  margin: -220px auto 30px;
`;
